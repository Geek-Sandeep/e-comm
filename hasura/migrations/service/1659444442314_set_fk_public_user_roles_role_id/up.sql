alter table "public"."user_roles"
  add constraint "user_roles_role_id_fkey"
  foreign key ("role_id")
  references "public"."roles"
  ("id") on update restrict on delete restrict;
