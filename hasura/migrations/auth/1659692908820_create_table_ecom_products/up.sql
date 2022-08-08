CREATE TABLE "ecom"."products" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "name" text NOT NULL, "description" text NOT NULL, "image" text NOT NULL, "price" integer NOT NULL, PRIMARY KEY ("id") );
CREATE OR REPLACE FUNCTION "ecom"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_ecom_products_updated_at"
BEFORE UPDATE ON "ecom"."products"
FOR EACH ROW
EXECUTE PROCEDURE "ecom"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_ecom_products_updated_at" ON "ecom"."products" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
