package org.babyfish.jimmer.sql.model.inheritance;

import org.babyfish.jimmer.sql.MappedSuperclass;

@MappedSuperclass
public interface UserInfo {

    String name();
}
