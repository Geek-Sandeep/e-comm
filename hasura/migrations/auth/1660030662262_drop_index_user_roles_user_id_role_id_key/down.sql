CREATE  INDEX "user_roles_user_id_role_id_key" on
  "public"."user_roles" using btree ("role_id", "user_id");
