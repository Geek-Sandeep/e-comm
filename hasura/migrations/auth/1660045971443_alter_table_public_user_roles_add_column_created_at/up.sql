alter table "public"."user_roles" add column "created_at" timestamptz
 not null default now();
