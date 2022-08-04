alter table "public"."role_permissions" add constraint "role_permissions_role_id_permission_id_key" unique ("role_id", "permission_id");
