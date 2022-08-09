CREATE TABLE "public"."user_roles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "role_key" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("user_id", "role_key"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
