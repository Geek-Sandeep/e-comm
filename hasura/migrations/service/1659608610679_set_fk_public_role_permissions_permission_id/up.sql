alter table "public"."role_permissions"
  add constraint "role_permissions_permission_id_fkey"
  foreign key ("permission_id")
  references "public"."permissions"
  ("id") on update restrict on delete restrict;
