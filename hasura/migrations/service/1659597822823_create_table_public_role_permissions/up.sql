CREATE TABLE "public"."role_permissions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "role_id" uuid NOT NULL, "permission_ids" uuid NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
