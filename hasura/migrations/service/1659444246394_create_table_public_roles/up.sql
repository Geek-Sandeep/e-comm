CREATE TABLE "public"."roles" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "key" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("key"));
CREATE EXTENSION IF NOT EXISTS pgcrypto;
