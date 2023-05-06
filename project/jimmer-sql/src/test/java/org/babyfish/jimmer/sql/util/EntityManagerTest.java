package org.babyfish.jimmer.sql.util;

import org.babyfish.jimmer.meta.ImmutableType;
import org.babyfish.jimmer.sql.association.meta.AssociationType;
import org.babyfish.jimmer.sql.meta.ForeignKeyStrategy;
import org.babyfish.jimmer.sql.meta.MetadataStrategy;
import org.babyfish.jimmer.sql.model.JimmerModule;
import org.babyfish.jimmer.sql.model.inheritance.*;
import org.babyfish.jimmer.sql.runtime.DefaultDatabaseNamingStrategy;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;

public class EntityManagerTest {

    @Test
    public void testBackProps() {
        Assertions.assertEquals(
                Arrays.asList(
                        "org.babyfish.jimmer.sql.model.inheritance.AdministratorMetadata.administrator",
                        "org.babyfish.jimmer.sql.model.inheritance.Role.administrators"
                ),
                JimmerModule.ENTITY_MANAGER.getAllBackProps(ImmutableType.get(Administrator.class)).stream()
                        .map(Object::toString)
                        .sorted()
                        .collect(Collectors.toList())
        );
        Assertions.assertEquals(
                Arrays.asList(
                        "org.babyfish.jimmer.sql.model.inheritance.Administrator.roles",
                        "org.babyfish.jimmer.sql.model.inheritance.Permission.role"
                ),
                JimmerModule.ENTITY_MANAGER.getAllBackProps(ImmutableType.get(Role.class)).stream()
                        .map(Object::toString)
                        .sorted()
                        .collect(Collectors.toList())
        );
        Assertions.assertEquals(
                Collections.singletonList(
                        "org.babyfish.jimmer.sql.model.inheritance.Role.permissions"
                ),
                JimmerModule.ENTITY_MANAGER.getAllBackProps(ImmutableType.get(Permission.class)).stream()
                        .map(Object::toString)
                        .sorted()
                        .collect(Collectors.toList())
        );
        Assertions.assertEquals(
                Collections.singletonList(
                        "org.babyfish.jimmer.sql.model.inheritance.Administrator.metadata"
                ),
                JimmerModule.ENTITY_MANAGER.getAllBackProps(ImmutableType.get(AdministratorMetadata.class)).stream()
                        .map(Object::toString)
                        .sorted()
                        .collect(Collectors.toList())
        );
    }

    @Test
    public void testTableName() {
        MetadataStrategy strategy = new MetadataStrategy(
                DefaultDatabaseNamingStrategy.UPPER_CASE,
                ForeignKeyStrategy.REAL
        );
        Assertions.assertEquals(
                ImmutableType.get(Role.class),
                JimmerModule.ENTITY_MANAGER.getNonNullTypeByServiceAndTable("", "`roLE`", strategy)
        );
        Assertions.assertEquals(
                ImmutableType.get(Permission.class),
                JimmerModule.ENTITY_MANAGER.getNonNullTypeByServiceAndTable("", "[PerMission]", strategy)
        );
        Assertions.assertEquals(
                ImmutableType.get(Administrator.class),
                JimmerModule.ENTITY_MANAGER.getNonNullTypeByServiceAndTable("", "\"Administrator\"", strategy)
        );
        Assertions.assertEquals(
                AssociationType.of(AdministratorProps.ROLES),
                JimmerModule.ENTITY_MANAGER.getNonNullTypeByServiceAndTable("", "`Administrator_Role_Mapping`", strategy)
        );
    }
}
