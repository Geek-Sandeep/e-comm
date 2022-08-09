alter table "public"."user_roles"
  add constraint "user_roles_role_key_fkey"
  foreign key ("role_key")
  references "public"."roles"
  ("key") on update restrict on delete restrict;
