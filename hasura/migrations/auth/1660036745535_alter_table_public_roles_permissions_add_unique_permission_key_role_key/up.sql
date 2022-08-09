alter table "public"."roles_permissions" add constraint "roles_permissions_permission_key_role_key_key" unique ("permission_key", "role_key");
