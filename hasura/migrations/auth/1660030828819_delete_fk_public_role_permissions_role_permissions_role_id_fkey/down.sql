alter table "public"."role_permissions"
  add constraint "role_permissions_role_id_fkey"
  foreign key ("role_id")
  references "public"."roles"
  ("id") on update restrict on delete restrict;
