package org.babyfish.jimmer.sql.event.binlog;

import com.fasterxml.jackson.databind.JsonNode;
import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.association.meta.AssociationType;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.event.Triggers;
import org.babyfish.jimmer.sql.meta.DatabaseMetadata;
import org.babyfish.jimmer.sql.runtime.EntityManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BinLog {

    private static final Logger LOGGER = LoggerFactory.getLogger(BinLog.class);

    private final DatabaseMetadata databaseMetadata;

    private final BinLogParser binLogParser;

    private final Triggers triggers;

    public BinLog(DatabaseMetadata databaseMetadata, BinLogParser binLogParser, Triggers triggers) {
        this.databaseMetadata = databaseMetadata;
        this.binLogParser = binLogParser;
        this.triggers = triggers;
    }

    public void accept(String tableName, JsonNode oldData, JsonNode newData) {
        accept(tableName, oldData, newData, null);
    }

    public void accept(String tableName, JsonNode oldData, JsonNode newData, String reason) {
        boolean isOldNull = oldData == null || oldData.isNull();
        boolean isNewNull = newData == null || newData.isNull();
        if (isOldNull && isNewNull) {
            return;
        }
        ImmutableType type = databaseMetadata.getTypeByTableName(tableName);
        if (type == null) {
            LOGGER.warn(
                    "Illegal table name \"{}\" of micro service \"{}\", it is not managed by current entity manager",
                    tableName,
                    databaseMetadata.getMicroServiceName()
            );
            return;
        }
        if (type instanceof AssociationType) {
            if (isOldNull) {
                AssociationType associationType = (AssociationType) type;
                Tuple2<?, ?> idPair = binLogParser.parseIdPair(associationType, newData);
                triggers.fireMiddleTableInsert(
                        associationType.getBaseProp(),
                        idPair.get_1(),
                        idPair.get_2(),
                        null,
                        reason
                );
            } else {
                AssociationType associationType = (AssociationType) type;
                Tuple2<?, ?> idPair = binLogParser.parseIdPair(associationType, oldData);
                triggers.fireMiddleTableDelete(
                        associationType.getBaseProp(),
                        idPair.get_1(),
                        idPair.get_2(),
                        null,
                        reason
                );
            }
        } else {
            triggers.fireEntityTableChange(
                    binLogParser.parseEntity(type, oldData),
                    binLogParser.parseEntity(type, newData),
                    null,
                    reason
            );
        }
    }
}
