alter table "public"."permissions" add column "created_at" timestamptz
 not null default now();
