create table category (id bigint not null auto_increment, primary key (id)) engine=InnoDB;
create table category_parameters (category_id bigint not null, name varchar(255), value varchar(255)) engine=InnoDB;
create table item (id bigint not null auto_increment, description varchar(5000), image_url varchar(2000), manufacturer varchar(255), price float not null, title varchar(255) not null, primary key (id)) engine=InnoDB;
create table item_categories (category_id bigint not null, item_id bigint not null) engine=InnoDB;
create table user (username varchar(255) not null, password varchar(255) not null, role varchar(255) not null, primary key (username)) engine=InnoDB;
alter table category_parameters add constraint FK670p7teqnq76ulav40ycwr5xn foreign key (category_id) references category (id);
alter table item_categories add constraint FKrcf4khjheykgwdoqjyj3vism0 foreign key (item_id) references category (id);
alter table item_categories add constraint FK5hs9t0kosbvgmadirhcjj69hg foreign key (category_id) references item (id);
