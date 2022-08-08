import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type AuthResponse = {
  __typename?: 'authResponse';
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  token: Scalars['String'];
};

/** columns and relationships of "ecom.products" */
export type Ecom_Products = {
  __typename?: 'ecom_products';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "ecom.products" */
export type Ecom_Products_Aggregate = {
  __typename?: 'ecom_products_aggregate';
  aggregate?: Maybe<Ecom_Products_Aggregate_Fields>;
  nodes: Array<Ecom_Products>;
};

/** aggregate fields of "ecom.products" */
export type Ecom_Products_Aggregate_Fields = {
  __typename?: 'ecom_products_aggregate_fields';
  avg?: Maybe<Ecom_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ecom_Products_Max_Fields>;
  min?: Maybe<Ecom_Products_Min_Fields>;
  stddev?: Maybe<Ecom_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Ecom_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ecom_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Ecom_Products_Sum_Fields>;
  var_pop?: Maybe<Ecom_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Ecom_Products_Var_Samp_Fields>;
  variance?: Maybe<Ecom_Products_Variance_Fields>;
};


/** aggregate fields of "ecom.products" */
export type Ecom_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ecom_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ecom_Products_Avg_Fields = {
  __typename?: 'ecom_products_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ecom.products". All fields are combined with a logical 'AND'. */
export type Ecom_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Ecom_Products_Bool_Exp>>;
  _not?: InputMaybe<Ecom_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Ecom_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "ecom.products" */
export enum Ecom_Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "ecom.products" */
export type Ecom_Products_Inc_Input = {
  price?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ecom.products" */
export type Ecom_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Ecom_Products_Max_Fields = {
  __typename?: 'ecom_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Ecom_Products_Min_Fields = {
  __typename?: 'ecom_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "ecom.products" */
export type Ecom_Products_Mutation_Response = {
  __typename?: 'ecom_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ecom_Products>;
};

/** on_conflict condition type for table "ecom.products" */
export type Ecom_Products_On_Conflict = {
  constraint: Ecom_Products_Constraint;
  update_columns?: Array<Ecom_Products_Update_Column>;
  where?: InputMaybe<Ecom_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "ecom.products". */
export type Ecom_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ecom_products */
export type Ecom_Products_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "ecom.products" */
export enum Ecom_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "ecom.products" */
export type Ecom_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Ecom_Products_Stddev_Fields = {
  __typename?: 'ecom_products_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ecom_Products_Stddev_Pop_Fields = {
  __typename?: 'ecom_products_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ecom_Products_Stddev_Samp_Fields = {
  __typename?: 'ecom_products_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ecom_Products_Sum_Fields = {
  __typename?: 'ecom_products_sum_fields';
  price?: Maybe<Scalars['Int']>;
};

/** update columns of table "ecom.products" */
export enum Ecom_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Ecom_Products_Var_Pop_Fields = {
  __typename?: 'ecom_products_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ecom_Products_Var_Samp_Fields = {
  __typename?: 'ecom_products_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ecom_Products_Variance_Fields = {
  __typename?: 'ecom_products_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** attachPermissionToRole */
  attachPermissionToRole?: Maybe<Response>;
  /** attachRoleToUser */
  attachRoleToUser?: Maybe<Response>;
  /** delete data from the table: "ecom.products" */
  delete_ecom_products?: Maybe<Ecom_Products_Mutation_Response>;
  /** delete single row from the table: "ecom.products" */
  delete_ecom_products_by_pk?: Maybe<Ecom_Products>;
  /** delete data from the table: "permissions" */
  delete_permissions?: Maybe<Permissions_Mutation_Response>;
  /** delete single row from the table: "permissions" */
  delete_permissions_by_pk?: Maybe<Permissions>;
  /** delete data from the table: "role_permissions" */
  delete_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** delete single row from the table: "role_permissions" */
  delete_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "ecom.products" */
  insert_ecom_products?: Maybe<Ecom_Products_Mutation_Response>;
  /** insert a single row into the table: "ecom.products" */
  insert_ecom_products_one?: Maybe<Ecom_Products>;
  /** insert data into the table: "permissions" */
  insert_permissions?: Maybe<Permissions_Mutation_Response>;
  /** insert a single row into the table: "permissions" */
  insert_permissions_one?: Maybe<Permissions>;
  /** insert data into the table: "role_permissions" */
  insert_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** insert a single row into the table: "role_permissions" */
  insert_role_permissions_one?: Maybe<Role_Permissions>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  signup?: Maybe<SignupOutput>;
  /** update data of the table: "ecom.products" */
  update_ecom_products?: Maybe<Ecom_Products_Mutation_Response>;
  /** update single row of the table: "ecom.products" */
  update_ecom_products_by_pk?: Maybe<Ecom_Products>;
  /** update data of the table: "permissions" */
  update_permissions?: Maybe<Permissions_Mutation_Response>;
  /** update single row of the table: "permissions" */
  update_permissions_by_pk?: Maybe<Permissions>;
  /** update data of the table: "role_permissions" */
  update_role_permissions?: Maybe<Role_Permissions_Mutation_Response>;
  /** update single row of the table: "role_permissions" */
  update_role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootAttachPermissionToRoleArgs = {
  permissionID: Scalars['uuid'];
  roleID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootAttachRoleToUserArgs = {
  roleID: Scalars['uuid'];
  userID: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Ecom_ProductsArgs = {
  where: Ecom_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ecom_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_PermissionsArgs = {
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Role_PermissionsArgs = {
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Ecom_ProductsArgs = {
  objects: Array<Ecom_Products_Insert_Input>;
  on_conflict?: InputMaybe<Ecom_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ecom_Products_OneArgs = {
  object: Ecom_Products_Insert_Input;
  on_conflict?: InputMaybe<Ecom_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PermissionsArgs = {
  objects: Array<Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permissions_OneArgs = {
  object: Permissions_Insert_Input;
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_PermissionsArgs = {
  objects: Array<Role_Permissions_Insert_Input>;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_Permissions_OneArgs = {
  object: Role_Permissions_Insert_Input;
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_Ecom_ProductsArgs = {
  _inc?: InputMaybe<Ecom_Products_Inc_Input>;
  _set?: InputMaybe<Ecom_Products_Set_Input>;
  where: Ecom_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ecom_Products_By_PkArgs = {
  _inc?: InputMaybe<Ecom_Products_Inc_Input>;
  _set?: InputMaybe<Ecom_Products_Set_Input>;
  pk_columns: Ecom_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionsArgs = {
  _set?: InputMaybe<Permissions_Set_Input>;
  where: Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permissions_By_PkArgs = {
  _set?: InputMaybe<Permissions_Set_Input>;
  pk_columns: Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_PermissionsArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  where: Role_Permissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_Permissions_By_PkArgs = {
  _set?: InputMaybe<Role_Permissions_Set_Input>;
  pk_columns: Role_Permissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "permissions" */
export type Permissions = {
  __typename?: 'permissions';
  id: Scalars['uuid'];
  key: Scalars['String'];
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
};


/** columns and relationships of "permissions" */
export type PermissionsRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


/** columns and relationships of "permissions" */
export type PermissionsRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};

/** aggregated selection of "permissions" */
export type Permissions_Aggregate = {
  __typename?: 'permissions_aggregate';
  aggregate?: Maybe<Permissions_Aggregate_Fields>;
  nodes: Array<Permissions>;
};

/** aggregate fields of "permissions" */
export type Permissions_Aggregate_Fields = {
  __typename?: 'permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Permissions_Max_Fields>;
  min?: Maybe<Permissions_Min_Fields>;
};


/** aggregate fields of "permissions" */
export type Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "permissions". All fields are combined with a logical 'AND'. */
export type Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Permissions_Bool_Exp>>;
  _not?: InputMaybe<Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Permissions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  role_permissions?: InputMaybe<Role_Permissions_Bool_Exp>;
};

/** unique or primary key constraints on table "permissions" */
export enum Permissions_Constraint {
  /** unique or primary key constraint on columns "key" */
  PermissionsKeyKey = 'permissions_key_key',
  /** unique or primary key constraint on columns "id" */
  PermissionsPkey = 'permissions_pkey'
}

/** input type for inserting data into table "permissions" */
export type Permissions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
  role_permissions?: InputMaybe<Role_Permissions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Permissions_Max_Fields = {
  __typename?: 'permissions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Permissions_Min_Fields = {
  __typename?: 'permissions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "permissions" */
export type Permissions_Mutation_Response = {
  __typename?: 'permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Permissions>;
};

/** input type for inserting object relation for remote table "permissions" */
export type Permissions_Obj_Rel_Insert_Input = {
  data: Permissions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permissions_On_Conflict>;
};

/** on_conflict condition type for table "permissions" */
export type Permissions_On_Conflict = {
  constraint: Permissions_Constraint;
  update_columns?: Array<Permissions_Update_Column>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "permissions". */
export type Permissions_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  role_permissions_aggregate?: InputMaybe<Role_Permissions_Aggregate_Order_By>;
};

/** primary key columns input for table: permissions */
export type Permissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "permissions" */
export enum Permissions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** input type for updating data in table "permissions" */
export type Permissions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
};

/** update columns of table "permissions" */
export enum Permissions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "ecom.products" */
  ecom_products: Array<Ecom_Products>;
  /** fetch aggregated fields from the table: "ecom.products" */
  ecom_products_aggregate: Ecom_Products_Aggregate;
  /** fetch data from the table: "ecom.products" using primary key columns */
  ecom_products_by_pk?: Maybe<Ecom_Products>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  signin?: Maybe<SinginOutput>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootEcom_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Ecom_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ecom_Products_Order_By>>;
  where?: InputMaybe<Ecom_Products_Bool_Exp>;
};


export type Query_RootEcom_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecom_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ecom_Products_Order_By>>;
  where?: InputMaybe<Ecom_Products_Bool_Exp>;
};


export type Query_RootEcom_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Query_RootPermissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Query_RootRole_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootSigninArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Response = {
  __typename?: 'response';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

/** columns and relationships of "role_permissions" */
export type Role_Permissions = {
  __typename?: 'role_permissions';
  id: Scalars['uuid'];
  /** An object relationship */
  permission: Permissions;
  permission_id: Scalars['uuid'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['uuid'];
};

/** aggregated selection of "role_permissions" */
export type Role_Permissions_Aggregate = {
  __typename?: 'role_permissions_aggregate';
  aggregate?: Maybe<Role_Permissions_Aggregate_Fields>;
  nodes: Array<Role_Permissions>;
};

/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_Fields = {
  __typename?: 'role_permissions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Permissions_Max_Fields>;
  min?: Maybe<Role_Permissions_Min_Fields>;
};


/** aggregate fields of "role_permissions" */
export type Role_Permissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "role_permissions" */
export type Role_Permissions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Role_Permissions_Max_Order_By>;
  min?: InputMaybe<Role_Permissions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "role_permissions" */
export type Role_Permissions_Arr_Rel_Insert_Input = {
  data: Array<Role_Permissions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_Permissions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "role_permissions". All fields are combined with a logical 'AND'. */
export type Role_Permissions_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  _not?: InputMaybe<Role_Permissions_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Permissions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  permission?: InputMaybe<Permissions_Bool_Exp>;
  permission_id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "role_permissions" */
export enum Role_Permissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolePermissionsPkey = 'role_permissions_pkey',
  /** unique or primary key constraint on columns "role_id", "permission_id" */
  RolePermissionsRoleIdPermissionIdKey = 'role_permissions_role_id_permission_id_key'
}

/** input type for inserting data into table "role_permissions" */
export type Role_Permissions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  permission?: InputMaybe<Permissions_Obj_Rel_Insert_Input>;
  permission_id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Role_Permissions_Max_Fields = {
  __typename?: 'role_permissions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  permission_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "role_permissions" */
export type Role_Permissions_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Role_Permissions_Min_Fields = {
  __typename?: 'role_permissions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  permission_id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "role_permissions" */
export type Role_Permissions_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  permission_id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "role_permissions" */
export type Role_Permissions_Mutation_Response = {
  __typename?: 'role_permissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role_Permissions>;
};

/** on_conflict condition type for table "role_permissions" */
export type Role_Permissions_On_Conflict = {
  constraint: Role_Permissions_Constraint;
  update_columns?: Array<Role_Permissions_Update_Column>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};

/** Ordering options when selecting data from "role_permissions". */
export type Role_Permissions_Order_By = {
  id?: InputMaybe<Order_By>;
  permission?: InputMaybe<Permissions_Order_By>;
  permission_id?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: role_permissions */
export type Role_Permissions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "role_permissions" */
export enum Role_Permissions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id'
}

/** input type for updating data in table "role_permissions" */
export type Role_Permissions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  permission_id?: InputMaybe<Scalars['uuid']>;
  role_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "role_permissions" */
export enum Role_Permissions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  RoleId = 'role_id'
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  id: Scalars['uuid'];
  key: Scalars['String'];
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  role_permissions?: InputMaybe<Role_Permissions_Bool_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "key" */
  RolesKeyKey = 'roles_key_key',
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
  role_permissions?: InputMaybe<Role_Permissions_Arr_Rel_Insert_Input>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
  key?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  role_permissions_aggregate?: InputMaybe<Role_Permissions_Aggregate_Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  key?: InputMaybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key'
}

export type SignupOutput = {
  __typename?: 'signupOutput';
  data?: Maybe<AuthResponse>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type SinginOutput = {
  __typename?: 'singinOutput';
  data?: Maybe<AuthResponse>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "ecom.products" */
  ecom_products: Array<Ecom_Products>;
  /** fetch aggregated fields from the table: "ecom.products" */
  ecom_products_aggregate: Ecom_Products_Aggregate;
  /** fetch data from the table: "ecom.products" using primary key columns */
  ecom_products_by_pk?: Maybe<Ecom_Products>;
  /** fetch data from the table: "permissions" */
  permissions: Array<Permissions>;
  /** fetch aggregated fields from the table: "permissions" */
  permissions_aggregate: Permissions_Aggregate;
  /** fetch data from the table: "permissions" using primary key columns */
  permissions_by_pk?: Maybe<Permissions>;
  /** An array relationship */
  role_permissions: Array<Role_Permissions>;
  /** An aggregate relationship */
  role_permissions_aggregate: Role_Permissions_Aggregate;
  /** fetch data from the table: "role_permissions" using primary key columns */
  role_permissions_by_pk?: Maybe<Role_Permissions>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootEcom_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Ecom_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ecom_Products_Order_By>>;
  where?: InputMaybe<Ecom_Products_Bool_Exp>;
};


export type Subscription_RootEcom_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ecom_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ecom_Products_Order_By>>;
  where?: InputMaybe<Ecom_Products_Bool_Exp>;
};


export type Subscription_RootEcom_Products_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPermissionsArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootPermissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permissions_Order_By>>;
  where?: InputMaybe<Permissions_Bool_Exp>;
};


export type Subscription_RootPermissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRole_PermissionsArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Permissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Permissions_Order_By>>;
  where?: InputMaybe<Role_Permissions_Bool_Exp>;
};


export type Subscription_RootRole_Permissions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  id: Scalars['uuid'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role_id" */
  UserRolesUserIdRoleIdKey = 'user_roles_user_id_role_id_key'
}

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  id?: Maybe<Scalars['uuid']>;
  role_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  role_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetMyProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProductsQuery = { __typename?: 'query_root', ecom_products: Array<{ __typename?: 'ecom_products', id: any, name: string, description: string, image?: string | null, price: number }> };

export type GetProductByProductIdQueryVariables = Exact<{
  product_id: Scalars['uuid'];
}>;


export type GetProductByProductIdQuery = { __typename?: 'query_root', ecom_products: Array<{ __typename?: 'ecom_products', id: any, name: string, description: string, image?: string | null, price: number }> };


export const GetMyProductsDocument = gql`
    query getMyProducts {
  ecom_products(where: {image: {_is_null: false}}, order_by: {created_at: asc}) {
    id
    name
    description
    image
    price
  }
}
    `;

/**
 * __useGetMyProductsQuery__
 *
 * To run a query within a React component, call `useGetMyProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyProductsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyProductsQuery, GetMyProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyProductsQuery, GetMyProductsQueryVariables>(GetMyProductsDocument, options);
      }
export function useGetMyProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyProductsQuery, GetMyProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyProductsQuery, GetMyProductsQueryVariables>(GetMyProductsDocument, options);
        }
export type GetMyProductsQueryHookResult = ReturnType<typeof useGetMyProductsQuery>;
export type GetMyProductsLazyQueryHookResult = ReturnType<typeof useGetMyProductsLazyQuery>;
export type GetMyProductsQueryResult = Apollo.QueryResult<GetMyProductsQuery, GetMyProductsQueryVariables>;
export const GetProductByProductIdDocument = gql`
    query getProductByProductId($product_id: uuid!) {
  ecom_products(where: {id: {_eq: $product_id}}, order_by: {created_at: asc}) {
    id
    name
    description
    image
    price
  }
}
    `;

/**
 * __useGetProductByProductIdQuery__
 *
 * To run a query within a React component, call `useGetProductByProductIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByProductIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByProductIdQuery({
 *   variables: {
 *      product_id: // value for 'product_id'
 *   },
 * });
 */
export function useGetProductByProductIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByProductIdQuery, GetProductByProductIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProductByProductIdQuery, GetProductByProductIdQueryVariables>(GetProductByProductIdDocument, options);
      }
export function useGetProductByProductIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByProductIdQuery, GetProductByProductIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProductByProductIdQuery, GetProductByProductIdQueryVariables>(GetProductByProductIdDocument, options);
        }
export type GetProductByProductIdQueryHookResult = ReturnType<typeof useGetProductByProductIdQuery>;
export type GetProductByProductIdLazyQueryHookResult = ReturnType<typeof useGetProductByProductIdLazyQuery>;
export type GetProductByProductIdQueryResult = Apollo.QueryResult<GetProductByProductIdQuery, GetProductByProductIdQueryVariables>;