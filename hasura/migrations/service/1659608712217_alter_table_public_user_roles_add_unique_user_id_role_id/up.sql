alter table "public"."user_roles" add constraint "user_roles_user_id_role_id_key" unique ("user_id", "role_id");
