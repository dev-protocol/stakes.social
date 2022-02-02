import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  numeric: any
}

export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>
  _gt?: InputMaybe<Scalars['Boolean']>
  _gte?: InputMaybe<Scalars['Boolean']>
  _in?: InputMaybe<Array<Scalars['Boolean']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Boolean']>
  _lte?: InputMaybe<Scalars['Boolean']>
  _neq?: InputMaybe<Scalars['Boolean']>
  _nin?: InputMaybe<Array<Scalars['Boolean']>>
}

export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  _nlike?: InputMaybe<Scalars['String']>
  _nsimilar?: InputMaybe<Scalars['String']>
  _similar?: InputMaybe<Scalars['String']>
}

export type Account_Lockup = {
  __typename?: 'account_lockup'
  account_address: Scalars['String']
  block_number: Scalars['Int']
  locked_up_event_id: Scalars['String']
  property_address: Scalars['String']
  value: Scalars['numeric']
}

export type Account_Lockup_Aggregate = {
  __typename?: 'account_lockup_aggregate'
  aggregate?: Maybe<Account_Lockup_Aggregate_Fields>
  nodes: Array<Account_Lockup>
}

export type Account_Lockup_Aggregate_Fields = {
  __typename?: 'account_lockup_aggregate_fields'
  avg?: Maybe<Account_Lockup_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Account_Lockup_Max_Fields>
  min?: Maybe<Account_Lockup_Min_Fields>
  stddev?: Maybe<Account_Lockup_Stddev_Fields>
  stddev_pop?: Maybe<Account_Lockup_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Account_Lockup_Stddev_Samp_Fields>
  sum?: Maybe<Account_Lockup_Sum_Fields>
  var_pop?: Maybe<Account_Lockup_Var_Pop_Fields>
  var_samp?: Maybe<Account_Lockup_Var_Samp_Fields>
  variance?: Maybe<Account_Lockup_Variance_Fields>
}

export type Account_Lockup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Lockup_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Account_Lockup_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Lockup_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Account_Lockup_Max_Order_By>
  min?: InputMaybe<Account_Lockup_Min_Order_By>
  stddev?: InputMaybe<Account_Lockup_Stddev_Order_By>
  stddev_pop?: InputMaybe<Account_Lockup_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Account_Lockup_Stddev_Samp_Order_By>
  sum?: InputMaybe<Account_Lockup_Sum_Order_By>
  var_pop?: InputMaybe<Account_Lockup_Var_Pop_Order_By>
  var_samp?: InputMaybe<Account_Lockup_Var_Samp_Order_By>
  variance?: InputMaybe<Account_Lockup_Variance_Order_By>
}

export type Account_Lockup_Arr_Rel_Insert_Input = {
  data: Array<Account_Lockup_Insert_Input>
  on_conflict?: InputMaybe<Account_Lockup_On_Conflict>
}

export type Account_Lockup_Avg_Fields = {
  __typename?: 'account_lockup_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Account_Lockup_Bool_Exp>>>
  _not?: InputMaybe<Account_Lockup_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Account_Lockup_Bool_Exp>>>
  account_address?: InputMaybe<String_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  locked_up_event_id?: InputMaybe<String_Comparison_Exp>
  property_address?: InputMaybe<String_Comparison_Exp>
  property_meta?: InputMaybe<Property_Meta_Bool_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

export enum Account_Lockup_Constraint {
  AccountLockupPkey = 'account_lockup_pkey'
}

export type Account_Lockup_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Account_Lockup_Insert_Input = {
  account_address?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  locked_up_event_id?: InputMaybe<Scalars['String']>
  property_address?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Account_Lockup_Max_Fields = {
  __typename?: 'account_lockup_max_fields'
  account_address?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  locked_up_event_id?: Maybe<Scalars['String']>
  property_address?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Max_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Min_Fields = {
  __typename?: 'account_lockup_min_fields'
  account_address?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  locked_up_event_id?: Maybe<Scalars['String']>
  property_address?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Min_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Mutation_Response = {
  __typename?: 'account_lockup_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Account_Lockup>
}

export type Account_Lockup_Obj_Rel_Insert_Input = {
  data: Account_Lockup_Insert_Input
  on_conflict?: InputMaybe<Account_Lockup_On_Conflict>
}

export type Account_Lockup_On_Conflict = {
  constraint: Account_Lockup_Constraint
  update_columns: Array<Account_Lockup_Update_Column>
  where?: InputMaybe<Account_Lockup_Bool_Exp>
}

export type Account_Lockup_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Pk_Columns_Input = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export enum Account_Lockup_Select_Column {
  AccountAddress = 'account_address',
  BlockNumber = 'block_number',
  LockedUpEventId = 'locked_up_event_id',
  PropertyAddress = 'property_address',
  Value = 'value'
}

export type Account_Lockup_Set_Input = {
  account_address?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  locked_up_event_id?: InputMaybe<Scalars['String']>
  property_address?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Account_Lockup_Stddev_Fields = {
  __typename?: 'account_lockup_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Stddev_Pop_Fields = {
  __typename?: 'account_lockup_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Stddev_Samp_Fields = {
  __typename?: 'account_lockup_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Fields = {
  __typename?: 'account_lockup_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values = {
  __typename?: 'account_lockup_sum_values'
  account_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Sum_Values_Aggregate = {
  __typename?: 'account_lockup_sum_values_aggregate'
  aggregate?: Maybe<Account_Lockup_Sum_Values_Aggregate_Fields>
  nodes: Array<Account_Lockup_Sum_Values>
}

export type Account_Lockup_Sum_Values_Aggregate_Fields = {
  __typename?: 'account_lockup_sum_values_aggregate_fields'
  avg?: Maybe<Account_Lockup_Sum_Values_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Account_Lockup_Sum_Values_Max_Fields>
  min?: Maybe<Account_Lockup_Sum_Values_Min_Fields>
  stddev?: Maybe<Account_Lockup_Sum_Values_Stddev_Fields>
  stddev_pop?: Maybe<Account_Lockup_Sum_Values_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Account_Lockup_Sum_Values_Stddev_Samp_Fields>
  sum?: Maybe<Account_Lockup_Sum_Values_Sum_Fields>
  var_pop?: Maybe<Account_Lockup_Sum_Values_Var_Pop_Fields>
  var_samp?: Maybe<Account_Lockup_Sum_Values_Var_Samp_Fields>
  variance?: Maybe<Account_Lockup_Sum_Values_Variance_Fields>
}

export type Account_Lockup_Sum_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Lockup_Sum_Values_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Account_Lockup_Sum_Values_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Lockup_Sum_Values_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Account_Lockup_Sum_Values_Max_Order_By>
  min?: InputMaybe<Account_Lockup_Sum_Values_Min_Order_By>
  stddev?: InputMaybe<Account_Lockup_Sum_Values_Stddev_Order_By>
  stddev_pop?: InputMaybe<Account_Lockup_Sum_Values_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Account_Lockup_Sum_Values_Stddev_Samp_Order_By>
  sum?: InputMaybe<Account_Lockup_Sum_Values_Sum_Order_By>
  var_pop?: InputMaybe<Account_Lockup_Sum_Values_Var_Pop_Order_By>
  var_samp?: InputMaybe<Account_Lockup_Sum_Values_Var_Samp_Order_By>
  variance?: InputMaybe<Account_Lockup_Sum_Values_Variance_Order_By>
}

export type Account_Lockup_Sum_Values_Avg_Fields = {
  __typename?: 'account_lockup_sum_values_avg_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Avg_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>>>
  _not?: InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>>>
  account_address?: InputMaybe<String_Comparison_Exp>
  sum_values?: InputMaybe<Numeric_Comparison_Exp>
}

export type Account_Lockup_Sum_Values_Max_Fields = {
  __typename?: 'account_lockup_sum_values_max_fields'
  account_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Sum_Values_Max_Order_By = {
  account_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Min_Fields = {
  __typename?: 'account_lockup_sum_values_min_fields'
  account_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Sum_Values_Min_Order_By = {
  account_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Order_By = {
  account_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export enum Account_Lockup_Sum_Values_Select_Column {
  AccountAddress = 'account_address',
  SumValues = 'sum_values'
}

export type Account_Lockup_Sum_Values_Stddev_Fields = {
  __typename?: 'account_lockup_sum_values_stddev_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Stddev_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Stddev_Pop_Fields = {
  __typename?: 'account_lockup_sum_values_stddev_pop_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Stddev_Pop_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Stddev_Samp_Fields = {
  __typename?: 'account_lockup_sum_values_stddev_samp_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Stddev_Samp_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Sum_Fields = {
  __typename?: 'account_lockup_sum_values_sum_fields'
  sum_values?: Maybe<Scalars['numeric']>
}

export type Account_Lockup_Sum_Values_Sum_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Var_Pop_Fields = {
  __typename?: 'account_lockup_sum_values_var_pop_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Var_Pop_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Var_Samp_Fields = {
  __typename?: 'account_lockup_sum_values_var_samp_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Var_Samp_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Account_Lockup_Sum_Values_Variance_Fields = {
  __typename?: 'account_lockup_sum_values_variance_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Sum_Values_Variance_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export enum Account_Lockup_Update_Column {
  AccountAddress = 'account_address',
  BlockNumber = 'block_number',
  LockedUpEventId = 'locked_up_event_id',
  PropertyAddress = 'property_address',
  Value = 'value'
}

export type Account_Lockup_Var_Pop_Fields = {
  __typename?: 'account_lockup_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Var_Samp_Fields = {
  __typename?: 'account_lockup_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Account_Lockup_Variance_Fields = {
  __typename?: 'account_lockup_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Account_Lockup_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer = {
  __typename?: 'dev_property_transfer'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  is_lockup: Scalars['Boolean']
  log_index: Scalars['Int']
  raw_data: Scalars['String']
  to_address: Scalars['String']
  transaction_index: Scalars['Int']
  value: Scalars['numeric']
}

export type Dev_Property_Transfer_Aggregate = {
  __typename?: 'dev_property_transfer_aggregate'
  aggregate?: Maybe<Dev_Property_Transfer_Aggregate_Fields>
  nodes: Array<Dev_Property_Transfer>
}

export type Dev_Property_Transfer_Aggregate_Fields = {
  __typename?: 'dev_property_transfer_aggregate_fields'
  avg?: Maybe<Dev_Property_Transfer_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Dev_Property_Transfer_Max_Fields>
  min?: Maybe<Dev_Property_Transfer_Min_Fields>
  stddev?: Maybe<Dev_Property_Transfer_Stddev_Fields>
  stddev_pop?: Maybe<Dev_Property_Transfer_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Dev_Property_Transfer_Stddev_Samp_Fields>
  sum?: Maybe<Dev_Property_Transfer_Sum_Fields>
  var_pop?: Maybe<Dev_Property_Transfer_Var_Pop_Fields>
  var_samp?: Maybe<Dev_Property_Transfer_Var_Samp_Fields>
  variance?: Maybe<Dev_Property_Transfer_Variance_Fields>
}

export type Dev_Property_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Dev_Property_Transfer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Dev_Property_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Dev_Property_Transfer_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Dev_Property_Transfer_Max_Order_By>
  min?: InputMaybe<Dev_Property_Transfer_Min_Order_By>
  stddev?: InputMaybe<Dev_Property_Transfer_Stddev_Order_By>
  stddev_pop?: InputMaybe<Dev_Property_Transfer_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Dev_Property_Transfer_Stddev_Samp_Order_By>
  sum?: InputMaybe<Dev_Property_Transfer_Sum_Order_By>
  var_pop?: InputMaybe<Dev_Property_Transfer_Var_Pop_Order_By>
  var_samp?: InputMaybe<Dev_Property_Transfer_Var_Samp_Order_By>
  variance?: InputMaybe<Dev_Property_Transfer_Variance_Order_By>
}

export type Dev_Property_Transfer_Arr_Rel_Insert_Input = {
  data: Array<Dev_Property_Transfer_Insert_Input>
  on_conflict?: InputMaybe<Dev_Property_Transfer_On_Conflict>
}

export type Dev_Property_Transfer_Avg_Fields = {
  __typename?: 'dev_property_transfer_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Dev_Property_Transfer_Bool_Exp>>>
  _not?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Dev_Property_Transfer_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  is_lockup?: InputMaybe<Boolean_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  to_address?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

export enum Dev_Property_Transfer_Constraint {
  DevPropertyTransferPkey = 'dev_property_transfer_pkey'
}

export type Dev_Property_Transfer_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  is_lockup?: InputMaybe<Scalars['Boolean']>
  log_index?: InputMaybe<Scalars['Int']>
  raw_data?: InputMaybe<Scalars['String']>
  to_address?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Max_Fields = {
  __typename?: 'dev_property_transfer_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  raw_data?: Maybe<Scalars['String']>
  to_address?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Min_Fields = {
  __typename?: 'dev_property_transfer_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  raw_data?: Maybe<Scalars['String']>
  to_address?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Mutation_Response = {
  __typename?: 'dev_property_transfer_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Dev_Property_Transfer>
}

export type Dev_Property_Transfer_Obj_Rel_Insert_Input = {
  data: Dev_Property_Transfer_Insert_Input
  on_conflict?: InputMaybe<Dev_Property_Transfer_On_Conflict>
}

export type Dev_Property_Transfer_On_Conflict = {
  constraint: Dev_Property_Transfer_Constraint
  update_columns: Array<Dev_Property_Transfer_Update_Column>
  where?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
}

export type Dev_Property_Transfer_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  is_lockup?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Dev_Property_Transfer_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  IsLockup = 'is_lockup',
  LogIndex = 'log_index',
  RawData = 'raw_data',
  ToAddress = 'to_address',
  TransactionIndex = 'transaction_index',
  Value = 'value'
}

export type Dev_Property_Transfer_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  is_lockup?: InputMaybe<Scalars['Boolean']>
  log_index?: InputMaybe<Scalars['Int']>
  raw_data?: InputMaybe<Scalars['String']>
  to_address?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Stddev_Fields = {
  __typename?: 'dev_property_transfer_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Stddev_Pop_Fields = {
  __typename?: 'dev_property_transfer_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Stddev_Samp_Fields = {
  __typename?: 'dev_property_transfer_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Sum_Fields = {
  __typename?: 'dev_property_transfer_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['numeric']>
}

export type Dev_Property_Transfer_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export enum Dev_Property_Transfer_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  IsLockup = 'is_lockup',
  LogIndex = 'log_index',
  RawData = 'raw_data',
  ToAddress = 'to_address',
  TransactionIndex = 'transaction_index',
  Value = 'value'
}

export type Dev_Property_Transfer_Var_Pop_Fields = {
  __typename?: 'dev_property_transfer_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Var_Samp_Fields = {
  __typename?: 'dev_property_transfer_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Dev_Property_Transfer_Variance_Fields = {
  __typename?: 'dev_property_transfer_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Dev_Property_Transfer_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Lockup_Lockedup = {
  __typename?: 'lockup_lockedup'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  property: Scalars['String']
  property_creation?: Maybe<Property_Factory_Create>
  raw_data: Scalars['String']
  token_value: Scalars['numeric']
  transaction_index: Scalars['Int']
}

export type Lockup_Lockedup_Aggregate = {
  __typename?: 'lockup_lockedup_aggregate'
  aggregate?: Maybe<Lockup_Lockedup_Aggregate_Fields>
  nodes: Array<Lockup_Lockedup>
}

export type Lockup_Lockedup_Aggregate_Fields = {
  __typename?: 'lockup_lockedup_aggregate_fields'
  avg?: Maybe<Lockup_Lockedup_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Lockup_Lockedup_Max_Fields>
  min?: Maybe<Lockup_Lockedup_Min_Fields>
  stddev?: Maybe<Lockup_Lockedup_Stddev_Fields>
  stddev_pop?: Maybe<Lockup_Lockedup_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Lockup_Lockedup_Stddev_Samp_Fields>
  sum?: Maybe<Lockup_Lockedup_Sum_Fields>
  var_pop?: Maybe<Lockup_Lockedup_Var_Pop_Fields>
  var_samp?: Maybe<Lockup_Lockedup_Var_Samp_Fields>
  variance?: Maybe<Lockup_Lockedup_Variance_Fields>
}

export type Lockup_Lockedup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Lockup_Lockedup_Aggregate_Order_By = {
  avg?: InputMaybe<Lockup_Lockedup_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Lockup_Lockedup_Max_Order_By>
  min?: InputMaybe<Lockup_Lockedup_Min_Order_By>
  stddev?: InputMaybe<Lockup_Lockedup_Stddev_Order_By>
  stddev_pop?: InputMaybe<Lockup_Lockedup_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Lockup_Lockedup_Stddev_Samp_Order_By>
  sum?: InputMaybe<Lockup_Lockedup_Sum_Order_By>
  var_pop?: InputMaybe<Lockup_Lockedup_Var_Pop_Order_By>
  var_samp?: InputMaybe<Lockup_Lockedup_Var_Samp_Order_By>
  variance?: InputMaybe<Lockup_Lockedup_Variance_Order_By>
}

export type Lockup_Lockedup_Arr_Rel_Insert_Input = {
  data: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: InputMaybe<Lockup_Lockedup_On_Conflict>
}

export type Lockup_Lockedup_Avg_Fields = {
  __typename?: 'lockup_lockedup_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Lockup_Lockedup_Bool_Exp>>>
  _not?: InputMaybe<Lockup_Lockedup_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Lockup_Lockedup_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  property?: InputMaybe<String_Comparison_Exp>
  property_creation?: InputMaybe<Property_Factory_Create_Bool_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  token_value?: InputMaybe<Numeric_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Lockup_Lockedup_Constraint {
  LockupLockedupPkey = 'lockup_lockedup_pkey'
}

export type Lockup_Lockedup_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  token_value?: InputMaybe<Scalars['numeric']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Lockup_Lockedup_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  property?: InputMaybe<Scalars['String']>
  property_creation?: InputMaybe<Property_Factory_Create_Obj_Rel_Insert_Input>
  raw_data?: InputMaybe<Scalars['String']>
  token_value?: InputMaybe<Scalars['numeric']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Lockup_Lockedup_Max_Fields = {
  __typename?: 'lockup_lockedup_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Lockup_Lockedup_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Min_Fields = {
  __typename?: 'lockup_lockedup_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Lockup_Lockedup_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Mutation_Response = {
  __typename?: 'lockup_lockedup_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Lockup_Lockedup>
}

export type Lockup_Lockedup_Obj_Rel_Insert_Input = {
  data: Lockup_Lockedup_Insert_Input
  on_conflict?: InputMaybe<Lockup_Lockedup_On_Conflict>
}

export type Lockup_Lockedup_On_Conflict = {
  constraint: Lockup_Lockedup_Constraint
  update_columns: Array<Lockup_Lockedup_Update_Column>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Lockup_Lockedup_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  property_creation?: InputMaybe<Property_Factory_Create_Order_By>
  raw_data?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Lockup_Lockedup_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Property = 'property',
  RawData = 'raw_data',
  TokenValue = 'token_value',
  TransactionIndex = 'transaction_index'
}

export type Lockup_Lockedup_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  property?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  token_value?: InputMaybe<Scalars['numeric']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Lockup_Lockedup_Stddev_Fields = {
  __typename?: 'lockup_lockedup_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Stddev_Pop_Fields = {
  __typename?: 'lockup_lockedup_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Stddev_Samp_Fields = {
  __typename?: 'lockup_lockedup_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Sum_Fields = {
  __typename?: 'lockup_lockedup_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Lockup_Lockedup_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Lockup_Lockedup_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Property = 'property',
  RawData = 'raw_data',
  TokenValue = 'token_value',
  TransactionIndex = 'transaction_index'
}

export type Lockup_Lockedup_Var_Pop_Fields = {
  __typename?: 'lockup_lockedup_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Var_Samp_Fields = {
  __typename?: 'lockup_lockedup_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Lockup_Lockedup_Variance_Fields = {
  __typename?: 'lockup_lockedup_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  token_value?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create = {
  __typename?: 'market_factory_create'
  block_number: Scalars['Int']
  destroyed_metrics: Array<Metrics_Factory_Destroy>
  destroyed_metrics_aggregate: Metrics_Factory_Destroy_Aggregate
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  market: Scalars['String']
  metrics: Array<Metrics_Factory_Create>
  metrics_aggregate: Metrics_Factory_Create_Aggregate
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Market_Factory_CreateDestroyed_MetricsArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Market_Factory_CreateDestroyed_Metrics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Market_Factory_CreateMetricsArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Market_Factory_CreateMetrics_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Market_Factory_Create_Aggregate = {
  __typename?: 'market_factory_create_aggregate'
  aggregate?: Maybe<Market_Factory_Create_Aggregate_Fields>
  nodes: Array<Market_Factory_Create>
}

export type Market_Factory_Create_Aggregate_Fields = {
  __typename?: 'market_factory_create_aggregate_fields'
  avg?: Maybe<Market_Factory_Create_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Market_Factory_Create_Max_Fields>
  min?: Maybe<Market_Factory_Create_Min_Fields>
  stddev?: Maybe<Market_Factory_Create_Stddev_Fields>
  stddev_pop?: Maybe<Market_Factory_Create_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Market_Factory_Create_Stddev_Samp_Fields>
  sum?: Maybe<Market_Factory_Create_Sum_Fields>
  var_pop?: Maybe<Market_Factory_Create_Var_Pop_Fields>
  var_samp?: Maybe<Market_Factory_Create_Var_Samp_Fields>
  variance?: Maybe<Market_Factory_Create_Variance_Fields>
}

export type Market_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Market_Factory_Create_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Market_Factory_Create_Aggregate_Order_By = {
  avg?: InputMaybe<Market_Factory_Create_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Market_Factory_Create_Max_Order_By>
  min?: InputMaybe<Market_Factory_Create_Min_Order_By>
  stddev?: InputMaybe<Market_Factory_Create_Stddev_Order_By>
  stddev_pop?: InputMaybe<Market_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Market_Factory_Create_Stddev_Samp_Order_By>
  sum?: InputMaybe<Market_Factory_Create_Sum_Order_By>
  var_pop?: InputMaybe<Market_Factory_Create_Var_Pop_Order_By>
  var_samp?: InputMaybe<Market_Factory_Create_Var_Samp_Order_By>
  variance?: InputMaybe<Market_Factory_Create_Variance_Order_By>
}

export type Market_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Market_Factory_Create_On_Conflict>
}

export type Market_Factory_Create_Avg_Fields = {
  __typename?: 'market_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Market_Factory_Create_Bool_Exp>>>
  _not?: InputMaybe<Market_Factory_Create_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Market_Factory_Create_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  destroyed_metrics?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  market?: InputMaybe<String_Comparison_Exp>
  metrics?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Market_Factory_Create_Constraint {
  MarketFactoryCreatePkey = 'market_factory_create_pkey'
}

export type Market_Factory_Create_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Market_Factory_Create_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  destroyed_metrics?: InputMaybe<Metrics_Factory_Destroy_Arr_Rel_Insert_Input>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  metrics?: InputMaybe<Metrics_Factory_Create_Arr_Rel_Insert_Input>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Market_Factory_Create_Max_Fields = {
  __typename?: 'market_factory_create_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Min_Fields = {
  __typename?: 'market_factory_create_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Mutation_Response = {
  __typename?: 'market_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Market_Factory_Create>
}

export type Market_Factory_Create_Obj_Rel_Insert_Input = {
  data: Market_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Market_Factory_Create_On_Conflict>
}

export type Market_Factory_Create_On_Conflict = {
  constraint: Market_Factory_Create_Constraint
  update_columns: Array<Market_Factory_Create_Update_Column>
  where?: InputMaybe<Market_Factory_Create_Bool_Exp>
}

export type Market_Factory_Create_Order_By = {
  block_number?: InputMaybe<Order_By>
  destroyed_metrics_aggregate?: InputMaybe<Metrics_Factory_Destroy_Aggregate_Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  metrics_aggregate?: InputMaybe<Metrics_Factory_Create_Aggregate_Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Market_Factory_Create_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Market = 'market',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Market_Factory_Create_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Market_Factory_Create_Stddev_Fields = {
  __typename?: 'market_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'market_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'market_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Sum_Fields = {
  __typename?: 'market_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Market_Factory_Create_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Market = 'market',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Market_Factory_Create_Var_Pop_Fields = {
  __typename?: 'market_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Var_Samp_Fields = {
  __typename?: 'market_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Market_Factory_Create_Variance_Fields = {
  __typename?: 'market_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create = {
  __typename?: 'metrics_factory_create'
  block_number: Scalars['Int']
  destroyed_metrics?: Maybe<Metrics_Factory_Destroy>
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  market?: Maybe<Market_Factory_Create>
  metrics: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Metrics_Factory_Create_Aggregate = {
  __typename?: 'metrics_factory_create_aggregate'
  aggregate?: Maybe<Metrics_Factory_Create_Aggregate_Fields>
  nodes: Array<Metrics_Factory_Create>
}

export type Metrics_Factory_Create_Aggregate_Fields = {
  __typename?: 'metrics_factory_create_aggregate_fields'
  avg?: Maybe<Metrics_Factory_Create_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Metrics_Factory_Create_Max_Fields>
  min?: Maybe<Metrics_Factory_Create_Min_Fields>
  stddev?: Maybe<Metrics_Factory_Create_Stddev_Fields>
  stddev_pop?: Maybe<Metrics_Factory_Create_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Metrics_Factory_Create_Stddev_Samp_Fields>
  sum?: Maybe<Metrics_Factory_Create_Sum_Fields>
  var_pop?: Maybe<Metrics_Factory_Create_Var_Pop_Fields>
  var_samp?: Maybe<Metrics_Factory_Create_Var_Samp_Fields>
  variance?: Maybe<Metrics_Factory_Create_Variance_Fields>
}

export type Metrics_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Metrics_Factory_Create_Aggregate_Order_By = {
  avg?: InputMaybe<Metrics_Factory_Create_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Metrics_Factory_Create_Max_Order_By>
  min?: InputMaybe<Metrics_Factory_Create_Min_Order_By>
  stddev?: InputMaybe<Metrics_Factory_Create_Stddev_Order_By>
  stddev_pop?: InputMaybe<Metrics_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Metrics_Factory_Create_Stddev_Samp_Order_By>
  sum?: InputMaybe<Metrics_Factory_Create_Sum_Order_By>
  var_pop?: InputMaybe<Metrics_Factory_Create_Var_Pop_Order_By>
  var_samp?: InputMaybe<Metrics_Factory_Create_Var_Samp_Order_By>
  variance?: InputMaybe<Metrics_Factory_Create_Variance_Order_By>
}

export type Metrics_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Metrics_Factory_Create_On_Conflict>
}

export type Metrics_Factory_Create_Avg_Fields = {
  __typename?: 'metrics_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Metrics_Factory_Create_Bool_Exp>>>
  _not?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Metrics_Factory_Create_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  destroyed_metrics?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  market?: InputMaybe<Market_Factory_Create_Bool_Exp>
  metrics?: InputMaybe<String_Comparison_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Metrics_Factory_Create_Constraint {
  MetricsFactoryCreatePkey = 'metrics_factory_create_pkey'
}

export type Metrics_Factory_Create_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  destroyed_metrics?: InputMaybe<Metrics_Factory_Destroy_Obj_Rel_Insert_Input>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Market_Factory_Create_Obj_Rel_Insert_Input>
  metrics?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Max_Fields = {
  __typename?: 'metrics_factory_create_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Min_Fields = {
  __typename?: 'metrics_factory_create_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Mutation_Response = {
  __typename?: 'metrics_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Metrics_Factory_Create>
}

export type Metrics_Factory_Create_Obj_Rel_Insert_Input = {
  data: Metrics_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Metrics_Factory_Create_On_Conflict>
}

export type Metrics_Factory_Create_On_Conflict = {
  constraint: Metrics_Factory_Create_Constraint
  update_columns: Array<Metrics_Factory_Create_Update_Column>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Metrics_Factory_Create_Order_By = {
  block_number?: InputMaybe<Order_By>
  destroyed_metrics?: InputMaybe<Metrics_Factory_Destroy_Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  market?: InputMaybe<Market_Factory_Create_Order_By>
  metrics?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Metrics_Factory_Create_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Metrics = 'metrics',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Metrics_Factory_Create_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  metrics?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Stddev_Fields = {
  __typename?: 'metrics_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'metrics_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'metrics_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Sum_Fields = {
  __typename?: 'metrics_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Metrics_Factory_Create_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Metrics = 'metrics',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Metrics_Factory_Create_Var_Pop_Fields = {
  __typename?: 'metrics_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Var_Samp_Fields = {
  __typename?: 'metrics_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Create_Variance_Fields = {
  __typename?: 'metrics_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy = {
  __typename?: 'metrics_factory_destroy'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  market?: Maybe<Market_Factory_Create>
  metrics: Scalars['String']
  metrics_creation?: Maybe<Metrics_Factory_Create>
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Metrics_Factory_Destroy_Aggregate = {
  __typename?: 'metrics_factory_destroy_aggregate'
  aggregate?: Maybe<Metrics_Factory_Destroy_Aggregate_Fields>
  nodes: Array<Metrics_Factory_Destroy>
}

export type Metrics_Factory_Destroy_Aggregate_Fields = {
  __typename?: 'metrics_factory_destroy_aggregate_fields'
  avg?: Maybe<Metrics_Factory_Destroy_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Metrics_Factory_Destroy_Max_Fields>
  min?: Maybe<Metrics_Factory_Destroy_Min_Fields>
  stddev?: Maybe<Metrics_Factory_Destroy_Stddev_Fields>
  stddev_pop?: Maybe<Metrics_Factory_Destroy_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Metrics_Factory_Destroy_Stddev_Samp_Fields>
  sum?: Maybe<Metrics_Factory_Destroy_Sum_Fields>
  var_pop?: Maybe<Metrics_Factory_Destroy_Var_Pop_Fields>
  var_samp?: Maybe<Metrics_Factory_Destroy_Var_Samp_Fields>
  variance?: Maybe<Metrics_Factory_Destroy_Variance_Fields>
}

export type Metrics_Factory_Destroy_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Metrics_Factory_Destroy_Aggregate_Order_By = {
  avg?: InputMaybe<Metrics_Factory_Destroy_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Metrics_Factory_Destroy_Max_Order_By>
  min?: InputMaybe<Metrics_Factory_Destroy_Min_Order_By>
  stddev?: InputMaybe<Metrics_Factory_Destroy_Stddev_Order_By>
  stddev_pop?: InputMaybe<Metrics_Factory_Destroy_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Metrics_Factory_Destroy_Stddev_Samp_Order_By>
  sum?: InputMaybe<Metrics_Factory_Destroy_Sum_Order_By>
  var_pop?: InputMaybe<Metrics_Factory_Destroy_Var_Pop_Order_By>
  var_samp?: InputMaybe<Metrics_Factory_Destroy_Var_Samp_Order_By>
  variance?: InputMaybe<Metrics_Factory_Destroy_Variance_Order_By>
}

export type Metrics_Factory_Destroy_Arr_Rel_Insert_Input = {
  data: Array<Metrics_Factory_Destroy_Insert_Input>
  on_conflict?: InputMaybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Metrics_Factory_Destroy_Avg_Fields = {
  __typename?: 'metrics_factory_destroy_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Metrics_Factory_Destroy_Bool_Exp>>>
  _not?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Metrics_Factory_Destroy_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  market?: InputMaybe<Market_Factory_Create_Bool_Exp>
  metrics?: InputMaybe<String_Comparison_Exp>
  metrics_creation?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Metrics_Factory_Destroy_Constraint {
  MetricsFactoryDestroyPkey = 'metrics_factory_destroy_pkey'
}

export type Metrics_Factory_Destroy_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Market_Factory_Create_Obj_Rel_Insert_Input>
  metrics?: InputMaybe<Scalars['String']>
  metrics_creation?: InputMaybe<Metrics_Factory_Create_Obj_Rel_Insert_Input>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Max_Fields = {
  __typename?: 'metrics_factory_destroy_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Min_Fields = {
  __typename?: 'metrics_factory_destroy_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Mutation_Response = {
  __typename?: 'metrics_factory_destroy_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Metrics_Factory_Destroy>
}

export type Metrics_Factory_Destroy_Obj_Rel_Insert_Input = {
  data: Metrics_Factory_Destroy_Insert_Input
  on_conflict?: InputMaybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Metrics_Factory_Destroy_On_Conflict = {
  constraint: Metrics_Factory_Destroy_Constraint
  update_columns: Array<Metrics_Factory_Destroy_Update_Column>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Metrics_Factory_Destroy_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  market?: InputMaybe<Market_Factory_Create_Order_By>
  metrics?: InputMaybe<Order_By>
  metrics_creation?: InputMaybe<Metrics_Factory_Create_Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Metrics_Factory_Destroy_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Metrics = 'metrics',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Metrics_Factory_Destroy_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  metrics?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Stddev_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Stddev_Pop_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Stddev_Samp_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Sum_Fields = {
  __typename?: 'metrics_factory_destroy_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Metrics_Factory_Destroy_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Metrics = 'metrics',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Metrics_Factory_Destroy_Var_Pop_Fields = {
  __typename?: 'metrics_factory_destroy_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Var_Samp_Fields = {
  __typename?: 'metrics_factory_destroy_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Metrics_Factory_Destroy_Variance_Fields = {
  __typename?: 'metrics_factory_destroy_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Mutation_Root = {
  __typename?: 'mutation_root'
  delete_account_lockup?: Maybe<Account_Lockup_Mutation_Response>
  delete_account_lockup_by_pk?: Maybe<Account_Lockup>
  delete_dev_property_transfer?: Maybe<Dev_Property_Transfer_Mutation_Response>
  delete_dev_property_transfer_by_pk?: Maybe<Dev_Property_Transfer>
  delete_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  delete_lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  delete_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  delete_market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  delete_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  delete_metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  delete_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  delete_metrics_factory_destroy_by_pk?: Maybe<Metrics_Factory_Destroy>
  delete_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  delete_policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  delete_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  delete_property_authentication_by_pk?: Maybe<Property_Authentication>
  delete_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  delete_property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  delete_property_balance?: Maybe<Property_Balance_Mutation_Response>
  delete_property_balance_by_pk?: Maybe<Property_Balance>
  delete_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  delete_property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  delete_property_lockup?: Maybe<Property_Lockup_Mutation_Response>
  delete_property_lockup_by_pk?: Maybe<Property_Lockup>
  delete_property_meta?: Maybe<Property_Meta_Mutation_Response>
  delete_property_meta_by_pk?: Maybe<Property_Meta>
  delete_withdraw_property_transfer?: Maybe<Withdraw_Property_Transfer_Mutation_Response>
  delete_withdraw_property_transfer_by_pk?: Maybe<Withdraw_Property_Transfer>
  insert_account_lockup?: Maybe<Account_Lockup_Mutation_Response>
  insert_account_lockup_one?: Maybe<Account_Lockup>
  insert_dev_property_transfer?: Maybe<Dev_Property_Transfer_Mutation_Response>
  insert_dev_property_transfer_one?: Maybe<Dev_Property_Transfer>
  insert_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  insert_lockup_lockedup_one?: Maybe<Lockup_Lockedup>
  insert_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  insert_market_factory_create_one?: Maybe<Market_Factory_Create>
  insert_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  insert_metrics_factory_create_one?: Maybe<Metrics_Factory_Create>
  insert_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  insert_metrics_factory_destroy_one?: Maybe<Metrics_Factory_Destroy>
  insert_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  insert_policy_factory_create_one?: Maybe<Policy_Factory_Create>
  insert_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  insert_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  insert_property_authentication_deleted_one?: Maybe<Property_Authentication_Deleted>
  insert_property_authentication_one?: Maybe<Property_Authentication>
  insert_property_balance?: Maybe<Property_Balance_Mutation_Response>
  insert_property_balance_one?: Maybe<Property_Balance>
  insert_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  insert_property_factory_create_one?: Maybe<Property_Factory_Create>
  insert_property_lockup?: Maybe<Property_Lockup_Mutation_Response>
  insert_property_lockup_one?: Maybe<Property_Lockup>
  insert_property_meta?: Maybe<Property_Meta_Mutation_Response>
  insert_property_meta_one?: Maybe<Property_Meta>
  insert_withdraw_property_transfer?: Maybe<Withdraw_Property_Transfer_Mutation_Response>
  insert_withdraw_property_transfer_one?: Maybe<Withdraw_Property_Transfer>
  update_account_lockup?: Maybe<Account_Lockup_Mutation_Response>
  update_account_lockup_by_pk?: Maybe<Account_Lockup>
  update_dev_property_transfer?: Maybe<Dev_Property_Transfer_Mutation_Response>
  update_dev_property_transfer_by_pk?: Maybe<Dev_Property_Transfer>
  update_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  update_lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  update_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  update_market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  update_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  update_metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  update_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  update_metrics_factory_destroy_by_pk?: Maybe<Metrics_Factory_Destroy>
  update_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  update_policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  update_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  update_property_authentication_by_pk?: Maybe<Property_Authentication>
  update_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  update_property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  update_property_balance?: Maybe<Property_Balance_Mutation_Response>
  update_property_balance_by_pk?: Maybe<Property_Balance>
  update_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  update_property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  update_property_lockup?: Maybe<Property_Lockup_Mutation_Response>
  update_property_lockup_by_pk?: Maybe<Property_Lockup>
  update_property_meta?: Maybe<Property_Meta_Mutation_Response>
  update_property_meta_by_pk?: Maybe<Property_Meta>
  update_withdraw_property_transfer?: Maybe<Withdraw_Property_Transfer_Mutation_Response>
  update_withdraw_property_transfer_by_pk?: Maybe<Withdraw_Property_Transfer>
}

export type Mutation_RootDelete_Account_LockupArgs = {
  where: Account_Lockup_Bool_Exp
}

export type Mutation_RootDelete_Account_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Mutation_RootDelete_Dev_Property_TransferArgs = {
  where: Dev_Property_Transfer_Bool_Exp
}

export type Mutation_RootDelete_Dev_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Lockup_LockedupArgs = {
  where: Lockup_Lockedup_Bool_Exp
}

export type Mutation_RootDelete_Lockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Market_Factory_CreateArgs = {
  where: Market_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Market_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Metrics_Factory_CreateArgs = {
  where: Metrics_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Metrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Metrics_Factory_DestroyArgs = {
  where: Metrics_Factory_Destroy_Bool_Exp
}

export type Mutation_RootDelete_Metrics_Factory_Destroy_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Policy_Factory_CreateArgs = {
  where: Policy_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Policy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Property_AuthenticationArgs = {
  where: Property_Authentication_Bool_Exp
}

export type Mutation_RootDelete_Property_Authentication_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Mutation_RootDelete_Property_Authentication_DeletedArgs = {
  where: Property_Authentication_Deleted_Bool_Exp
}

export type Mutation_RootDelete_Property_Authentication_Deleted_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Mutation_RootDelete_Property_BalanceArgs = {
  where: Property_Balance_Bool_Exp
}

export type Mutation_RootDelete_Property_Balance_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Mutation_RootDelete_Property_Factory_CreateArgs = {
  where: Property_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Property_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootDelete_Property_LockupArgs = {
  where: Property_Lockup_Bool_Exp
}

export type Mutation_RootDelete_Property_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Mutation_RootDelete_Property_MetaArgs = {
  where: Property_Meta_Bool_Exp
}

export type Mutation_RootDelete_Property_Meta_By_PkArgs = {
  author: Scalars['String']
  property: Scalars['String']
}

export type Mutation_RootDelete_Withdraw_Property_TransferArgs = {
  where: Withdraw_Property_Transfer_Bool_Exp
}

export type Mutation_RootDelete_Withdraw_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Mutation_RootInsert_Account_LockupArgs = {
  objects: Array<Account_Lockup_Insert_Input>
  on_conflict?: InputMaybe<Account_Lockup_On_Conflict>
}

export type Mutation_RootInsert_Account_Lockup_OneArgs = {
  object: Account_Lockup_Insert_Input
  on_conflict?: InputMaybe<Account_Lockup_On_Conflict>
}

export type Mutation_RootInsert_Dev_Property_TransferArgs = {
  objects: Array<Dev_Property_Transfer_Insert_Input>
  on_conflict?: InputMaybe<Dev_Property_Transfer_On_Conflict>
}

export type Mutation_RootInsert_Dev_Property_Transfer_OneArgs = {
  object: Dev_Property_Transfer_Insert_Input
  on_conflict?: InputMaybe<Dev_Property_Transfer_On_Conflict>
}

export type Mutation_RootInsert_Lockup_LockedupArgs = {
  objects: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: InputMaybe<Lockup_Lockedup_On_Conflict>
}

export type Mutation_RootInsert_Lockup_Lockedup_OneArgs = {
  object: Lockup_Lockedup_Insert_Input
  on_conflict?: InputMaybe<Lockup_Lockedup_On_Conflict>
}

export type Mutation_RootInsert_Market_Factory_CreateArgs = {
  objects: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Market_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Market_Factory_Create_OneArgs = {
  object: Market_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Market_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_CreateArgs = {
  objects: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Metrics_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_Create_OneArgs = {
  object: Metrics_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Metrics_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_DestroyArgs = {
  objects: Array<Metrics_Factory_Destroy_Insert_Input>
  on_conflict?: InputMaybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_Destroy_OneArgs = {
  object: Metrics_Factory_Destroy_Insert_Input
  on_conflict?: InputMaybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Mutation_RootInsert_Policy_Factory_CreateArgs = {
  objects: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Policy_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Policy_Factory_Create_OneArgs = {
  object: Policy_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Policy_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Property_AuthenticationArgs = {
  objects: Array<Property_Authentication_Insert_Input>
  on_conflict?: InputMaybe<Property_Authentication_On_Conflict>
}

export type Mutation_RootInsert_Property_Authentication_DeletedArgs = {
  objects: Array<Property_Authentication_Deleted_Insert_Input>
  on_conflict?: InputMaybe<Property_Authentication_Deleted_On_Conflict>
}

export type Mutation_RootInsert_Property_Authentication_Deleted_OneArgs = {
  object: Property_Authentication_Deleted_Insert_Input
  on_conflict?: InputMaybe<Property_Authentication_Deleted_On_Conflict>
}

export type Mutation_RootInsert_Property_Authentication_OneArgs = {
  object: Property_Authentication_Insert_Input
  on_conflict?: InputMaybe<Property_Authentication_On_Conflict>
}

export type Mutation_RootInsert_Property_BalanceArgs = {
  objects: Array<Property_Balance_Insert_Input>
  on_conflict?: InputMaybe<Property_Balance_On_Conflict>
}

export type Mutation_RootInsert_Property_Balance_OneArgs = {
  object: Property_Balance_Insert_Input
  on_conflict?: InputMaybe<Property_Balance_On_Conflict>
}

export type Mutation_RootInsert_Property_Factory_CreateArgs = {
  objects: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Property_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Property_Factory_Create_OneArgs = {
  object: Property_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Property_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Property_LockupArgs = {
  objects: Array<Property_Lockup_Insert_Input>
  on_conflict?: InputMaybe<Property_Lockup_On_Conflict>
}

export type Mutation_RootInsert_Property_Lockup_OneArgs = {
  object: Property_Lockup_Insert_Input
  on_conflict?: InputMaybe<Property_Lockup_On_Conflict>
}

export type Mutation_RootInsert_Property_MetaArgs = {
  objects: Array<Property_Meta_Insert_Input>
  on_conflict?: InputMaybe<Property_Meta_On_Conflict>
}

export type Mutation_RootInsert_Property_Meta_OneArgs = {
  object: Property_Meta_Insert_Input
  on_conflict?: InputMaybe<Property_Meta_On_Conflict>
}

export type Mutation_RootInsert_Withdraw_Property_TransferArgs = {
  objects: Array<Withdraw_Property_Transfer_Insert_Input>
  on_conflict?: InputMaybe<Withdraw_Property_Transfer_On_Conflict>
}

export type Mutation_RootInsert_Withdraw_Property_Transfer_OneArgs = {
  object: Withdraw_Property_Transfer_Insert_Input
  on_conflict?: InputMaybe<Withdraw_Property_Transfer_On_Conflict>
}

export type Mutation_RootUpdate_Account_LockupArgs = {
  _inc?: InputMaybe<Account_Lockup_Inc_Input>
  _set?: InputMaybe<Account_Lockup_Set_Input>
  where: Account_Lockup_Bool_Exp
}

export type Mutation_RootUpdate_Account_Lockup_By_PkArgs = {
  _inc?: InputMaybe<Account_Lockup_Inc_Input>
  _set?: InputMaybe<Account_Lockup_Set_Input>
  pk_columns: Account_Lockup_Pk_Columns_Input
}

export type Mutation_RootUpdate_Dev_Property_TransferArgs = {
  _inc?: InputMaybe<Dev_Property_Transfer_Inc_Input>
  _set?: InputMaybe<Dev_Property_Transfer_Set_Input>
  where: Dev_Property_Transfer_Bool_Exp
}

export type Mutation_RootUpdate_Dev_Property_Transfer_By_PkArgs = {
  _inc?: InputMaybe<Dev_Property_Transfer_Inc_Input>
  _set?: InputMaybe<Dev_Property_Transfer_Set_Input>
  pk_columns: Dev_Property_Transfer_Pk_Columns_Input
}

export type Mutation_RootUpdate_Lockup_LockedupArgs = {
  _inc?: InputMaybe<Lockup_Lockedup_Inc_Input>
  _set?: InputMaybe<Lockup_Lockedup_Set_Input>
  where: Lockup_Lockedup_Bool_Exp
}

export type Mutation_RootUpdate_Lockup_Lockedup_By_PkArgs = {
  _inc?: InputMaybe<Lockup_Lockedup_Inc_Input>
  _set?: InputMaybe<Lockup_Lockedup_Set_Input>
  pk_columns: Lockup_Lockedup_Pk_Columns_Input
}

export type Mutation_RootUpdate_Market_Factory_CreateArgs = {
  _inc?: InputMaybe<Market_Factory_Create_Inc_Input>
  _set?: InputMaybe<Market_Factory_Create_Set_Input>
  where: Market_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Market_Factory_Create_By_PkArgs = {
  _inc?: InputMaybe<Market_Factory_Create_Inc_Input>
  _set?: InputMaybe<Market_Factory_Create_Set_Input>
  pk_columns: Market_Factory_Create_Pk_Columns_Input
}

export type Mutation_RootUpdate_Metrics_Factory_CreateArgs = {
  _inc?: InputMaybe<Metrics_Factory_Create_Inc_Input>
  _set?: InputMaybe<Metrics_Factory_Create_Set_Input>
  where: Metrics_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Metrics_Factory_Create_By_PkArgs = {
  _inc?: InputMaybe<Metrics_Factory_Create_Inc_Input>
  _set?: InputMaybe<Metrics_Factory_Create_Set_Input>
  pk_columns: Metrics_Factory_Create_Pk_Columns_Input
}

export type Mutation_RootUpdate_Metrics_Factory_DestroyArgs = {
  _inc?: InputMaybe<Metrics_Factory_Destroy_Inc_Input>
  _set?: InputMaybe<Metrics_Factory_Destroy_Set_Input>
  where: Metrics_Factory_Destroy_Bool_Exp
}

export type Mutation_RootUpdate_Metrics_Factory_Destroy_By_PkArgs = {
  _inc?: InputMaybe<Metrics_Factory_Destroy_Inc_Input>
  _set?: InputMaybe<Metrics_Factory_Destroy_Set_Input>
  pk_columns: Metrics_Factory_Destroy_Pk_Columns_Input
}

export type Mutation_RootUpdate_Policy_Factory_CreateArgs = {
  _inc?: InputMaybe<Policy_Factory_Create_Inc_Input>
  _set?: InputMaybe<Policy_Factory_Create_Set_Input>
  where: Policy_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Policy_Factory_Create_By_PkArgs = {
  _inc?: InputMaybe<Policy_Factory_Create_Inc_Input>
  _set?: InputMaybe<Policy_Factory_Create_Set_Input>
  pk_columns: Policy_Factory_Create_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_AuthenticationArgs = {
  _inc?: InputMaybe<Property_Authentication_Inc_Input>
  _set?: InputMaybe<Property_Authentication_Set_Input>
  where: Property_Authentication_Bool_Exp
}

export type Mutation_RootUpdate_Property_Authentication_By_PkArgs = {
  _inc?: InputMaybe<Property_Authentication_Inc_Input>
  _set?: InputMaybe<Property_Authentication_Set_Input>
  pk_columns: Property_Authentication_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_Authentication_DeletedArgs = {
  _inc?: InputMaybe<Property_Authentication_Deleted_Inc_Input>
  _set?: InputMaybe<Property_Authentication_Deleted_Set_Input>
  where: Property_Authentication_Deleted_Bool_Exp
}

export type Mutation_RootUpdate_Property_Authentication_Deleted_By_PkArgs = {
  _inc?: InputMaybe<Property_Authentication_Deleted_Inc_Input>
  _set?: InputMaybe<Property_Authentication_Deleted_Set_Input>
  pk_columns: Property_Authentication_Deleted_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_BalanceArgs = {
  _inc?: InputMaybe<Property_Balance_Inc_Input>
  _set?: InputMaybe<Property_Balance_Set_Input>
  where: Property_Balance_Bool_Exp
}

export type Mutation_RootUpdate_Property_Balance_By_PkArgs = {
  _inc?: InputMaybe<Property_Balance_Inc_Input>
  _set?: InputMaybe<Property_Balance_Set_Input>
  pk_columns: Property_Balance_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_Factory_CreateArgs = {
  _inc?: InputMaybe<Property_Factory_Create_Inc_Input>
  _set?: InputMaybe<Property_Factory_Create_Set_Input>
  where: Property_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Property_Factory_Create_By_PkArgs = {
  _inc?: InputMaybe<Property_Factory_Create_Inc_Input>
  _set?: InputMaybe<Property_Factory_Create_Set_Input>
  pk_columns: Property_Factory_Create_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_LockupArgs = {
  _inc?: InputMaybe<Property_Lockup_Inc_Input>
  _set?: InputMaybe<Property_Lockup_Set_Input>
  where: Property_Lockup_Bool_Exp
}

export type Mutation_RootUpdate_Property_Lockup_By_PkArgs = {
  _inc?: InputMaybe<Property_Lockup_Inc_Input>
  _set?: InputMaybe<Property_Lockup_Set_Input>
  pk_columns: Property_Lockup_Pk_Columns_Input
}

export type Mutation_RootUpdate_Property_MetaArgs = {
  _inc?: InputMaybe<Property_Meta_Inc_Input>
  _set?: InputMaybe<Property_Meta_Set_Input>
  where: Property_Meta_Bool_Exp
}

export type Mutation_RootUpdate_Property_Meta_By_PkArgs = {
  _inc?: InputMaybe<Property_Meta_Inc_Input>
  _set?: InputMaybe<Property_Meta_Set_Input>
  pk_columns: Property_Meta_Pk_Columns_Input
}

export type Mutation_RootUpdate_Withdraw_Property_TransferArgs = {
  _inc?: InputMaybe<Withdraw_Property_Transfer_Inc_Input>
  _set?: InputMaybe<Withdraw_Property_Transfer_Set_Input>
  where: Withdraw_Property_Transfer_Bool_Exp
}

export type Mutation_RootUpdate_Withdraw_Property_Transfer_By_PkArgs = {
  _inc?: InputMaybe<Withdraw_Property_Transfer_Inc_Input>
  _set?: InputMaybe<Withdraw_Property_Transfer_Set_Input>
  pk_columns: Withdraw_Property_Transfer_Pk_Columns_Input
}

export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Policy_Factory_Create = {
  __typename?: 'policy_factory_create'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  policy_address: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Policy_Factory_Create_Aggregate = {
  __typename?: 'policy_factory_create_aggregate'
  aggregate?: Maybe<Policy_Factory_Create_Aggregate_Fields>
  nodes: Array<Policy_Factory_Create>
}

export type Policy_Factory_Create_Aggregate_Fields = {
  __typename?: 'policy_factory_create_aggregate_fields'
  avg?: Maybe<Policy_Factory_Create_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Policy_Factory_Create_Max_Fields>
  min?: Maybe<Policy_Factory_Create_Min_Fields>
  stddev?: Maybe<Policy_Factory_Create_Stddev_Fields>
  stddev_pop?: Maybe<Policy_Factory_Create_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Policy_Factory_Create_Stddev_Samp_Fields>
  sum?: Maybe<Policy_Factory_Create_Sum_Fields>
  var_pop?: Maybe<Policy_Factory_Create_Var_Pop_Fields>
  var_samp?: Maybe<Policy_Factory_Create_Var_Samp_Fields>
  variance?: Maybe<Policy_Factory_Create_Variance_Fields>
}

export type Policy_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Policy_Factory_Create_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Policy_Factory_Create_Aggregate_Order_By = {
  avg?: InputMaybe<Policy_Factory_Create_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Policy_Factory_Create_Max_Order_By>
  min?: InputMaybe<Policy_Factory_Create_Min_Order_By>
  stddev?: InputMaybe<Policy_Factory_Create_Stddev_Order_By>
  stddev_pop?: InputMaybe<Policy_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Policy_Factory_Create_Stddev_Samp_Order_By>
  sum?: InputMaybe<Policy_Factory_Create_Sum_Order_By>
  var_pop?: InputMaybe<Policy_Factory_Create_Var_Pop_Order_By>
  var_samp?: InputMaybe<Policy_Factory_Create_Var_Samp_Order_By>
  variance?: InputMaybe<Policy_Factory_Create_Variance_Order_By>
}

export type Policy_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Policy_Factory_Create_On_Conflict>
}

export type Policy_Factory_Create_Avg_Fields = {
  __typename?: 'policy_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Policy_Factory_Create_Bool_Exp>>>
  _not?: InputMaybe<Policy_Factory_Create_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Policy_Factory_Create_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  policy_address?: InputMaybe<String_Comparison_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Policy_Factory_Create_Constraint {
  PolicyFactoryCreatePkey = 'policy_factory_create_pkey'
}

export type Policy_Factory_Create_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Policy_Factory_Create_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  policy_address?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Policy_Factory_Create_Max_Fields = {
  __typename?: 'policy_factory_create_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Policy_Factory_Create_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  policy_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Min_Fields = {
  __typename?: 'policy_factory_create_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Policy_Factory_Create_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  policy_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Mutation_Response = {
  __typename?: 'policy_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Policy_Factory_Create>
}

export type Policy_Factory_Create_Obj_Rel_Insert_Input = {
  data: Policy_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Policy_Factory_Create_On_Conflict>
}

export type Policy_Factory_Create_On_Conflict = {
  constraint: Policy_Factory_Create_Constraint
  update_columns: Array<Policy_Factory_Create_Update_Column>
  where?: InputMaybe<Policy_Factory_Create_Bool_Exp>
}

export type Policy_Factory_Create_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  policy_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Policy_Factory_Create_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  PolicyAddress = 'policy_address',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Policy_Factory_Create_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  policy_address?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Policy_Factory_Create_Stddev_Fields = {
  __typename?: 'policy_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'policy_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'policy_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Sum_Fields = {
  __typename?: 'policy_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Policy_Factory_Create_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Policy_Factory_Create_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  PolicyAddress = 'policy_address',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Policy_Factory_Create_Var_Pop_Fields = {
  __typename?: 'policy_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Var_Samp_Fields = {
  __typename?: 'policy_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Policy_Factory_Create_Variance_Fields = {
  __typename?: 'policy_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Authentication = {
  __typename?: 'property_authentication'
  authentication_id: Scalars['String']
  block_number: Scalars['Int']
  market: Scalars['String']
  market_creation?: Maybe<Market_Factory_Create>
  metrics: Scalars['String']
  property: Scalars['String']
  property_creation?: Maybe<Property_Factory_Create>
  property_meta?: Maybe<Property_Meta>
}

export type Property_Authentication_Aggregate = {
  __typename?: 'property_authentication_aggregate'
  aggregate?: Maybe<Property_Authentication_Aggregate_Fields>
  nodes: Array<Property_Authentication>
}

export type Property_Authentication_Aggregate_Fields = {
  __typename?: 'property_authentication_aggregate_fields'
  avg?: Maybe<Property_Authentication_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Authentication_Max_Fields>
  min?: Maybe<Property_Authentication_Min_Fields>
  stddev?: Maybe<Property_Authentication_Stddev_Fields>
  stddev_pop?: Maybe<Property_Authentication_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Authentication_Stddev_Samp_Fields>
  sum?: Maybe<Property_Authentication_Sum_Fields>
  var_pop?: Maybe<Property_Authentication_Var_Pop_Fields>
  var_samp?: Maybe<Property_Authentication_Var_Samp_Fields>
  variance?: Maybe<Property_Authentication_Variance_Fields>
}

export type Property_Authentication_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Authentication_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Authentication_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Authentication_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Authentication_Max_Order_By>
  min?: InputMaybe<Property_Authentication_Min_Order_By>
  stddev?: InputMaybe<Property_Authentication_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Authentication_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Authentication_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Authentication_Sum_Order_By>
  var_pop?: InputMaybe<Property_Authentication_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Authentication_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Authentication_Variance_Order_By>
}

export type Property_Authentication_Arr_Rel_Insert_Input = {
  data: Array<Property_Authentication_Insert_Input>
  on_conflict?: InputMaybe<Property_Authentication_On_Conflict>
}

export type Property_Authentication_Avg_Fields = {
  __typename?: 'property_authentication_avg_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Authentication_Bool_Exp>>>
  _not?: InputMaybe<Property_Authentication_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Authentication_Bool_Exp>>>
  authentication_id?: InputMaybe<String_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  market?: InputMaybe<String_Comparison_Exp>
  market_creation?: InputMaybe<Market_Factory_Create_Bool_Exp>
  metrics?: InputMaybe<String_Comparison_Exp>
  property?: InputMaybe<String_Comparison_Exp>
  property_creation?: InputMaybe<Property_Factory_Create_Bool_Exp>
  property_meta?: InputMaybe<Property_Meta_Bool_Exp>
}

export enum Property_Authentication_Constraint {
  PropertyAuthenticationPkey = 'property_authentication_pkey'
}

export type Property_Authentication_Deleted = {
  __typename?: 'property_authentication_deleted'
  authentication_id: Scalars['String']
  block_number: Scalars['Int']
  market: Scalars['String']
  market_creation?: Maybe<Market_Factory_Create>
  metrics: Scalars['String']
  property: Scalars['String']
  property_creation?: Maybe<Property_Factory_Create>
}

export type Property_Authentication_Deleted_Aggregate = {
  __typename?: 'property_authentication_deleted_aggregate'
  aggregate?: Maybe<Property_Authentication_Deleted_Aggregate_Fields>
  nodes: Array<Property_Authentication_Deleted>
}

export type Property_Authentication_Deleted_Aggregate_Fields = {
  __typename?: 'property_authentication_deleted_aggregate_fields'
  avg?: Maybe<Property_Authentication_Deleted_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Authentication_Deleted_Max_Fields>
  min?: Maybe<Property_Authentication_Deleted_Min_Fields>
  stddev?: Maybe<Property_Authentication_Deleted_Stddev_Fields>
  stddev_pop?: Maybe<Property_Authentication_Deleted_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Authentication_Deleted_Stddev_Samp_Fields>
  sum?: Maybe<Property_Authentication_Deleted_Sum_Fields>
  var_pop?: Maybe<Property_Authentication_Deleted_Var_Pop_Fields>
  var_samp?: Maybe<Property_Authentication_Deleted_Var_Samp_Fields>
  variance?: Maybe<Property_Authentication_Deleted_Variance_Fields>
}

export type Property_Authentication_Deleted_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Authentication_Deleted_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Authentication_Deleted_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Authentication_Deleted_Max_Order_By>
  min?: InputMaybe<Property_Authentication_Deleted_Min_Order_By>
  stddev?: InputMaybe<Property_Authentication_Deleted_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Authentication_Deleted_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Authentication_Deleted_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Authentication_Deleted_Sum_Order_By>
  var_pop?: InputMaybe<Property_Authentication_Deleted_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Authentication_Deleted_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Authentication_Deleted_Variance_Order_By>
}

export type Property_Authentication_Deleted_Arr_Rel_Insert_Input = {
  data: Array<Property_Authentication_Deleted_Insert_Input>
  on_conflict?: InputMaybe<Property_Authentication_Deleted_On_Conflict>
}

export type Property_Authentication_Deleted_Avg_Fields = {
  __typename?: 'property_authentication_deleted_avg_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Authentication_Deleted_Bool_Exp>>>
  _not?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Authentication_Deleted_Bool_Exp>>>
  authentication_id?: InputMaybe<String_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  market?: InputMaybe<String_Comparison_Exp>
  market_creation?: InputMaybe<Market_Factory_Create_Bool_Exp>
  metrics?: InputMaybe<String_Comparison_Exp>
  property?: InputMaybe<String_Comparison_Exp>
  property_creation?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export enum Property_Authentication_Deleted_Constraint {
  PropertyAuthenticationDeletedPkey = 'property_authentication_deleted_pkey'
}

export type Property_Authentication_Deleted_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
}

export type Property_Authentication_Deleted_Insert_Input = {
  authentication_id?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  market_creation?: InputMaybe<Market_Factory_Create_Obj_Rel_Insert_Input>
  metrics?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
  property_creation?: InputMaybe<Property_Factory_Create_Obj_Rel_Insert_Input>
}

export type Property_Authentication_Deleted_Max_Fields = {
  __typename?: 'property_authentication_deleted_max_fields'
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Deleted_Max_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Min_Fields = {
  __typename?: 'property_authentication_deleted_min_fields'
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Deleted_Min_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Mutation_Response = {
  __typename?: 'property_authentication_deleted_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Authentication_Deleted>
}

export type Property_Authentication_Deleted_Obj_Rel_Insert_Input = {
  data: Property_Authentication_Deleted_Insert_Input
  on_conflict?: InputMaybe<Property_Authentication_Deleted_On_Conflict>
}

export type Property_Authentication_Deleted_On_Conflict = {
  constraint: Property_Authentication_Deleted_Constraint
  update_columns: Array<Property_Authentication_Deleted_Update_Column>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Property_Authentication_Deleted_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  market_creation?: InputMaybe<Market_Factory_Create_Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  property_creation?: InputMaybe<Property_Factory_Create_Order_By>
}

export type Property_Authentication_Deleted_Pk_Columns_Input = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export enum Property_Authentication_Deleted_Select_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Deleted_Set_Input = {
  authentication_id?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  metrics?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
}

export type Property_Authentication_Deleted_Stddev_Fields = {
  __typename?: 'property_authentication_deleted_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Stddev_Pop_Fields = {
  __typename?: 'property_authentication_deleted_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Stddev_Samp_Fields = {
  __typename?: 'property_authentication_deleted_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Sum_Fields = {
  __typename?: 'property_authentication_deleted_sum_fields'
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Deleted_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export enum Property_Authentication_Deleted_Update_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Deleted_Var_Pop_Fields = {
  __typename?: 'property_authentication_deleted_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Var_Samp_Fields = {
  __typename?: 'property_authentication_deleted_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Deleted_Variance_Fields = {
  __typename?: 'property_authentication_deleted_variance_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
}

export type Property_Authentication_Insert_Input = {
  authentication_id?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  market_creation?: InputMaybe<Market_Factory_Create_Obj_Rel_Insert_Input>
  metrics?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
  property_creation?: InputMaybe<Property_Factory_Create_Obj_Rel_Insert_Input>
  property_meta?: InputMaybe<Property_Meta_Obj_Rel_Insert_Input>
}

export type Property_Authentication_Max_Fields = {
  __typename?: 'property_authentication_max_fields'
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Max_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
}

export type Property_Authentication_Min_Fields = {
  __typename?: 'property_authentication_min_fields'
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Min_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
}

export type Property_Authentication_Mutation_Response = {
  __typename?: 'property_authentication_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Authentication>
}

export type Property_Authentication_Obj_Rel_Insert_Input = {
  data: Property_Authentication_Insert_Input
  on_conflict?: InputMaybe<Property_Authentication_On_Conflict>
}

export type Property_Authentication_On_Conflict = {
  constraint: Property_Authentication_Constraint
  update_columns: Array<Property_Authentication_Update_Column>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Property_Authentication_Order_By = {
  authentication_id?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  market?: InputMaybe<Order_By>
  market_creation?: InputMaybe<Market_Factory_Create_Order_By>
  metrics?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  property_creation?: InputMaybe<Property_Factory_Create_Order_By>
  property_meta?: InputMaybe<Property_Meta_Order_By>
}

export type Property_Authentication_Pk_Columns_Input = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export enum Property_Authentication_Select_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Set_Input = {
  authentication_id?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  market?: InputMaybe<Scalars['String']>
  metrics?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
}

export type Property_Authentication_Stddev_Fields = {
  __typename?: 'property_authentication_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Stddev_Pop_Fields = {
  __typename?: 'property_authentication_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Stddev_Samp_Fields = {
  __typename?: 'property_authentication_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Sum_Fields = {
  __typename?: 'property_authentication_sum_fields'
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export enum Property_Authentication_Update_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Var_Pop_Fields = {
  __typename?: 'property_authentication_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Var_Samp_Fields = {
  __typename?: 'property_authentication_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Authentication_Variance_Fields = {
  __typename?: 'property_authentication_variance_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance = {
  __typename?: 'property_balance'
  account_address: Scalars['String']
  balance: Scalars['numeric']
  block_number: Scalars['Int']
  is_author: Scalars['Boolean']
  property_address: Scalars['String']
}

export type Property_Balance_Aggregate = {
  __typename?: 'property_balance_aggregate'
  aggregate?: Maybe<Property_Balance_Aggregate_Fields>
  nodes: Array<Property_Balance>
}

export type Property_Balance_Aggregate_Fields = {
  __typename?: 'property_balance_aggregate_fields'
  avg?: Maybe<Property_Balance_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Balance_Max_Fields>
  min?: Maybe<Property_Balance_Min_Fields>
  stddev?: Maybe<Property_Balance_Stddev_Fields>
  stddev_pop?: Maybe<Property_Balance_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Balance_Stddev_Samp_Fields>
  sum?: Maybe<Property_Balance_Sum_Fields>
  var_pop?: Maybe<Property_Balance_Var_Pop_Fields>
  var_samp?: Maybe<Property_Balance_Var_Samp_Fields>
  variance?: Maybe<Property_Balance_Variance_Fields>
}

export type Property_Balance_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Balance_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Balance_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Balance_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Balance_Max_Order_By>
  min?: InputMaybe<Property_Balance_Min_Order_By>
  stddev?: InputMaybe<Property_Balance_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Balance_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Balance_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Balance_Sum_Order_By>
  var_pop?: InputMaybe<Property_Balance_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Balance_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Balance_Variance_Order_By>
}

export type Property_Balance_Arr_Rel_Insert_Input = {
  data: Array<Property_Balance_Insert_Input>
  on_conflict?: InputMaybe<Property_Balance_On_Conflict>
}

export type Property_Balance_Avg_Fields = {
  __typename?: 'property_balance_avg_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Avg_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Balance_Bool_Exp>>>
  _not?: InputMaybe<Property_Balance_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Balance_Bool_Exp>>>
  account_address?: InputMaybe<String_Comparison_Exp>
  balance?: InputMaybe<Numeric_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  is_author?: InputMaybe<Boolean_Comparison_Exp>
  property_address?: InputMaybe<String_Comparison_Exp>
}

export enum Property_Balance_Constraint {
  PropertyBalancePkey = 'property_balance_pkey'
}

export type Property_Balance_Inc_Input = {
  balance?: InputMaybe<Scalars['numeric']>
  block_number?: InputMaybe<Scalars['Int']>
}

export type Property_Balance_Insert_Input = {
  account_address?: InputMaybe<Scalars['String']>
  balance?: InputMaybe<Scalars['numeric']>
  block_number?: InputMaybe<Scalars['Int']>
  is_author?: InputMaybe<Scalars['Boolean']>
  property_address?: InputMaybe<Scalars['String']>
}

export type Property_Balance_Max_Fields = {
  __typename?: 'property_balance_max_fields'
  account_address?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  property_address?: Maybe<Scalars['String']>
}

export type Property_Balance_Max_Order_By = {
  account_address?: InputMaybe<Order_By>
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
}

export type Property_Balance_Min_Fields = {
  __typename?: 'property_balance_min_fields'
  account_address?: Maybe<Scalars['String']>
  balance?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  property_address?: Maybe<Scalars['String']>
}

export type Property_Balance_Min_Order_By = {
  account_address?: InputMaybe<Order_By>
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
}

export type Property_Balance_Mutation_Response = {
  __typename?: 'property_balance_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Balance>
}

export type Property_Balance_Obj_Rel_Insert_Input = {
  data: Property_Balance_Insert_Input
  on_conflict?: InputMaybe<Property_Balance_On_Conflict>
}

export type Property_Balance_On_Conflict = {
  constraint: Property_Balance_Constraint
  update_columns: Array<Property_Balance_Update_Column>
  where?: InputMaybe<Property_Balance_Bool_Exp>
}

export type Property_Balance_Order_By = {
  account_address?: InputMaybe<Order_By>
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  is_author?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
}

export type Property_Balance_Pk_Columns_Input = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export enum Property_Balance_Select_Column {
  AccountAddress = 'account_address',
  Balance = 'balance',
  BlockNumber = 'block_number',
  IsAuthor = 'is_author',
  PropertyAddress = 'property_address'
}

export type Property_Balance_Set_Input = {
  account_address?: InputMaybe<Scalars['String']>
  balance?: InputMaybe<Scalars['numeric']>
  block_number?: InputMaybe<Scalars['Int']>
  is_author?: InputMaybe<Scalars['Boolean']>
  property_address?: InputMaybe<Scalars['String']>
}

export type Property_Balance_Stddev_Fields = {
  __typename?: 'property_balance_stddev_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Stddev_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Stddev_Pop_Fields = {
  __typename?: 'property_balance_stddev_pop_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Stddev_Pop_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Stddev_Samp_Fields = {
  __typename?: 'property_balance_stddev_samp_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Stddev_Samp_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Sum_Fields = {
  __typename?: 'property_balance_sum_fields'
  balance?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Balance_Sum_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export enum Property_Balance_Update_Column {
  AccountAddress = 'account_address',
  Balance = 'balance',
  BlockNumber = 'block_number',
  IsAuthor = 'is_author',
  PropertyAddress = 'property_address'
}

export type Property_Balance_Var_Pop_Fields = {
  __typename?: 'property_balance_var_pop_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Var_Pop_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Var_Samp_Fields = {
  __typename?: 'property_balance_var_samp_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Var_Samp_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Balance_Variance_Fields = {
  __typename?: 'property_balance_variance_fields'
  balance?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Balance_Variance_Order_By = {
  balance?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
}

export type Property_Factory_Create = {
  __typename?: 'property_factory_create'
  authentication: Array<Property_Authentication>
  authentication_aggregate: Property_Authentication_Aggregate
  block_number: Scalars['Int']
  current_lockup?: Maybe<Property_Lockup_Sum_Values>
  deleted_authentication: Array<Property_Authentication_Deleted>
  deleted_authentication_aggregate: Property_Authentication_Deleted_Aggregate
  event_id: Scalars['String']
  from_address: Scalars['String']
  lockedup: Array<Lockup_Lockedup>
  lockedup_aggregate: Lockup_Lockedup_Aggregate
  log_index: Scalars['Int']
  property: Scalars['String']
  property_creation: Array<Lockup_Lockedup>
  property_creation_aggregate: Lockup_Lockedup_Aggregate
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Property_Factory_CreateAuthenticationArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Property_Factory_CreateAuthentication_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Property_Factory_CreateDeleted_AuthenticationArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Property_Factory_CreateDeleted_Authentication_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Property_Factory_CreateLockedupArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Property_Factory_CreateLockedup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Property_Factory_CreateProperty_CreationArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Property_Factory_CreateProperty_Creation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Property_Factory_Create_Aggregate = {
  __typename?: 'property_factory_create_aggregate'
  aggregate?: Maybe<Property_Factory_Create_Aggregate_Fields>
  nodes: Array<Property_Factory_Create>
}

export type Property_Factory_Create_Aggregate_Fields = {
  __typename?: 'property_factory_create_aggregate_fields'
  avg?: Maybe<Property_Factory_Create_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Factory_Create_Max_Fields>
  min?: Maybe<Property_Factory_Create_Min_Fields>
  stddev?: Maybe<Property_Factory_Create_Stddev_Fields>
  stddev_pop?: Maybe<Property_Factory_Create_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Factory_Create_Stddev_Samp_Fields>
  sum?: Maybe<Property_Factory_Create_Sum_Fields>
  var_pop?: Maybe<Property_Factory_Create_Var_Pop_Fields>
  var_samp?: Maybe<Property_Factory_Create_Var_Samp_Fields>
  variance?: Maybe<Property_Factory_Create_Variance_Fields>
}

export type Property_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Factory_Create_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Factory_Create_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Factory_Create_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Factory_Create_Max_Order_By>
  min?: InputMaybe<Property_Factory_Create_Min_Order_By>
  stddev?: InputMaybe<Property_Factory_Create_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Factory_Create_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Factory_Create_Sum_Order_By>
  var_pop?: InputMaybe<Property_Factory_Create_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Factory_Create_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Factory_Create_Variance_Order_By>
}

export type Property_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: InputMaybe<Property_Factory_Create_On_Conflict>
}

export type Property_Factory_Create_Avg_Fields = {
  __typename?: 'property_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Factory_Create_Bool_Exp>>>
  _not?: InputMaybe<Property_Factory_Create_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Factory_Create_Bool_Exp>>>
  authentication?: InputMaybe<Property_Authentication_Bool_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  current_lockup?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
  deleted_authentication?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  lockedup?: InputMaybe<Lockup_Lockedup_Bool_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  property?: InputMaybe<String_Comparison_Exp>
  property_creation?: InputMaybe<Lockup_Lockedup_Bool_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Property_Factory_Create_Constraint {
  PropertyFactoryCreatePkey = 'property_factory_create_pkey'
}

export type Property_Factory_Create_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Property_Factory_Create_Insert_Input = {
  authentication?: InputMaybe<Property_Authentication_Arr_Rel_Insert_Input>
  block_number?: InputMaybe<Scalars['Int']>
  deleted_authentication?: InputMaybe<Property_Authentication_Deleted_Arr_Rel_Insert_Input>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  lockedup?: InputMaybe<Lockup_Lockedup_Arr_Rel_Insert_Input>
  log_index?: InputMaybe<Scalars['Int']>
  property?: InputMaybe<Scalars['String']>
  property_creation?: InputMaybe<Lockup_Lockedup_Arr_Rel_Insert_Input>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Property_Factory_Create_Max_Fields = {
  __typename?: 'property_factory_create_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Min_Fields = {
  __typename?: 'property_factory_create_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Mutation_Response = {
  __typename?: 'property_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Factory_Create>
}

export type Property_Factory_Create_Obj_Rel_Insert_Input = {
  data: Property_Factory_Create_Insert_Input
  on_conflict?: InputMaybe<Property_Factory_Create_On_Conflict>
}

export type Property_Factory_Create_On_Conflict = {
  constraint: Property_Factory_Create_Constraint
  update_columns: Array<Property_Factory_Create_Update_Column>
  where?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export type Property_Factory_Create_Order_By = {
  authentication_aggregate?: InputMaybe<Property_Authentication_Aggregate_Order_By>
  block_number?: InputMaybe<Order_By>
  current_lockup?: InputMaybe<Property_Lockup_Sum_Values_Order_By>
  deleted_authentication_aggregate?: InputMaybe<Property_Authentication_Deleted_Aggregate_Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  lockedup_aggregate?: InputMaybe<Lockup_Lockedup_Aggregate_Order_By>
  log_index?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  property_creation_aggregate?: InputMaybe<Lockup_Lockedup_Aggregate_Order_By>
  raw_data?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Property_Factory_Create_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Property = 'property',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Property_Factory_Create_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  property?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Property_Factory_Create_Stddev_Fields = {
  __typename?: 'property_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'property_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'property_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Sum_Fields = {
  __typename?: 'property_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Property_Factory_Create_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  Property = 'property',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

export type Property_Factory_Create_Var_Pop_Fields = {
  __typename?: 'property_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Var_Samp_Fields = {
  __typename?: 'property_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Factory_Create_Variance_Fields = {
  __typename?: 'property_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Property_Lockup = {
  __typename?: 'property_lockup'
  account_address: Scalars['String']
  block_number: Scalars['Int']
  locked_up_event_id: Scalars['String']
  property_address: Scalars['String']
  value: Scalars['numeric']
}

export type Property_Lockup_Aggregate = {
  __typename?: 'property_lockup_aggregate'
  aggregate?: Maybe<Property_Lockup_Aggregate_Fields>
  nodes: Array<Property_Lockup>
}

export type Property_Lockup_Aggregate_Fields = {
  __typename?: 'property_lockup_aggregate_fields'
  avg?: Maybe<Property_Lockup_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Lockup_Max_Fields>
  min?: Maybe<Property_Lockup_Min_Fields>
  stddev?: Maybe<Property_Lockup_Stddev_Fields>
  stddev_pop?: Maybe<Property_Lockup_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Lockup_Stddev_Samp_Fields>
  sum?: Maybe<Property_Lockup_Sum_Fields>
  var_pop?: Maybe<Property_Lockup_Var_Pop_Fields>
  var_samp?: Maybe<Property_Lockup_Var_Samp_Fields>
  variance?: Maybe<Property_Lockup_Variance_Fields>
}

export type Property_Lockup_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Lockup_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Lockup_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Lockup_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Lockup_Max_Order_By>
  min?: InputMaybe<Property_Lockup_Min_Order_By>
  stddev?: InputMaybe<Property_Lockup_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Lockup_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Lockup_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Lockup_Sum_Order_By>
  var_pop?: InputMaybe<Property_Lockup_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Lockup_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Lockup_Variance_Order_By>
}

export type Property_Lockup_Arr_Rel_Insert_Input = {
  data: Array<Property_Lockup_Insert_Input>
  on_conflict?: InputMaybe<Property_Lockup_On_Conflict>
}

export type Property_Lockup_Avg_Fields = {
  __typename?: 'property_lockup_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Lockup_Bool_Exp>>>
  _not?: InputMaybe<Property_Lockup_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Lockup_Bool_Exp>>>
  account_address?: InputMaybe<String_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  locked_up_event_id?: InputMaybe<String_Comparison_Exp>
  property_address?: InputMaybe<String_Comparison_Exp>
  value?: InputMaybe<Numeric_Comparison_Exp>
}

export enum Property_Lockup_Constraint {
  PropertyLockupPkey = 'property_lockup_pkey'
}

export type Property_Lockup_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Property_Lockup_Insert_Input = {
  account_address?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  locked_up_event_id?: InputMaybe<Scalars['String']>
  property_address?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Property_Lockup_Max_Fields = {
  __typename?: 'property_lockup_max_fields'
  account_address?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  locked_up_event_id?: Maybe<Scalars['String']>
  property_address?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Max_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Min_Fields = {
  __typename?: 'property_lockup_min_fields'
  account_address?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  locked_up_event_id?: Maybe<Scalars['String']>
  property_address?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Min_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Mutation_Response = {
  __typename?: 'property_lockup_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Lockup>
}

export type Property_Lockup_Obj_Rel_Insert_Input = {
  data: Property_Lockup_Insert_Input
  on_conflict?: InputMaybe<Property_Lockup_On_Conflict>
}

export type Property_Lockup_On_Conflict = {
  constraint: Property_Lockup_Constraint
  update_columns: Array<Property_Lockup_Update_Column>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Property_Lockup_Order_By = {
  account_address?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  locked_up_event_id?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Pk_Columns_Input = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export enum Property_Lockup_Select_Column {
  AccountAddress = 'account_address',
  BlockNumber = 'block_number',
  LockedUpEventId = 'locked_up_event_id',
  PropertyAddress = 'property_address',
  Value = 'value'
}

export type Property_Lockup_Set_Input = {
  account_address?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  locked_up_event_id?: InputMaybe<Scalars['String']>
  property_address?: InputMaybe<Scalars['String']>
  value?: InputMaybe<Scalars['numeric']>
}

export type Property_Lockup_Stddev_Fields = {
  __typename?: 'property_lockup_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Stddev_Pop_Fields = {
  __typename?: 'property_lockup_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Stddev_Samp_Fields = {
  __typename?: 'property_lockup_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Fields = {
  __typename?: 'property_lockup_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  value?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values = {
  __typename?: 'property_lockup_sum_values'
  property_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Sum_Values_Aggregate = {
  __typename?: 'property_lockup_sum_values_aggregate'
  aggregate?: Maybe<Property_Lockup_Sum_Values_Aggregate_Fields>
  nodes: Array<Property_Lockup_Sum_Values>
}

export type Property_Lockup_Sum_Values_Aggregate_Fields = {
  __typename?: 'property_lockup_sum_values_aggregate_fields'
  avg?: Maybe<Property_Lockup_Sum_Values_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Lockup_Sum_Values_Max_Fields>
  min?: Maybe<Property_Lockup_Sum_Values_Min_Fields>
  stddev?: Maybe<Property_Lockup_Sum_Values_Stddev_Fields>
  stddev_pop?: Maybe<Property_Lockup_Sum_Values_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Lockup_Sum_Values_Stddev_Samp_Fields>
  sum?: Maybe<Property_Lockup_Sum_Values_Sum_Fields>
  var_pop?: Maybe<Property_Lockup_Sum_Values_Var_Pop_Fields>
  var_samp?: Maybe<Property_Lockup_Sum_Values_Var_Samp_Fields>
  variance?: Maybe<Property_Lockup_Sum_Values_Variance_Fields>
}

export type Property_Lockup_Sum_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Lockup_Sum_Values_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Lockup_Sum_Values_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Lockup_Sum_Values_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Lockup_Sum_Values_Max_Order_By>
  min?: InputMaybe<Property_Lockup_Sum_Values_Min_Order_By>
  stddev?: InputMaybe<Property_Lockup_Sum_Values_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Lockup_Sum_Values_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Lockup_Sum_Values_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Lockup_Sum_Values_Sum_Order_By>
  var_pop?: InputMaybe<Property_Lockup_Sum_Values_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Lockup_Sum_Values_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Lockup_Sum_Values_Variance_Order_By>
}

export type Property_Lockup_Sum_Values_Avg_Fields = {
  __typename?: 'property_lockup_sum_values_avg_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Avg_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>>>
  _not?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>>>
  property_address?: InputMaybe<String_Comparison_Exp>
  sum_values?: InputMaybe<Numeric_Comparison_Exp>
}

export type Property_Lockup_Sum_Values_Max_Fields = {
  __typename?: 'property_lockup_sum_values_max_fields'
  property_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Sum_Values_Max_Order_By = {
  property_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Min_Fields = {
  __typename?: 'property_lockup_sum_values_min_fields'
  property_address?: Maybe<Scalars['String']>
  sum_values?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Sum_Values_Min_Order_By = {
  property_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Order_By = {
  property_address?: InputMaybe<Order_By>
  sum_values?: InputMaybe<Order_By>
}

export enum Property_Lockup_Sum_Values_Select_Column {
  PropertyAddress = 'property_address',
  SumValues = 'sum_values'
}

export type Property_Lockup_Sum_Values_Stddev_Fields = {
  __typename?: 'property_lockup_sum_values_stddev_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Stddev_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Stddev_Pop_Fields = {
  __typename?: 'property_lockup_sum_values_stddev_pop_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Stddev_Pop_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Stddev_Samp_Fields = {
  __typename?: 'property_lockup_sum_values_stddev_samp_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Stddev_Samp_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Sum_Fields = {
  __typename?: 'property_lockup_sum_values_sum_fields'
  sum_values?: Maybe<Scalars['numeric']>
}

export type Property_Lockup_Sum_Values_Sum_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Var_Pop_Fields = {
  __typename?: 'property_lockup_sum_values_var_pop_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Var_Pop_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Var_Samp_Fields = {
  __typename?: 'property_lockup_sum_values_var_samp_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Var_Samp_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export type Property_Lockup_Sum_Values_Variance_Fields = {
  __typename?: 'property_lockup_sum_values_variance_fields'
  sum_values?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Sum_Values_Variance_Order_By = {
  sum_values?: InputMaybe<Order_By>
}

export enum Property_Lockup_Update_Column {
  AccountAddress = 'account_address',
  BlockNumber = 'block_number',
  LockedUpEventId = 'locked_up_event_id',
  PropertyAddress = 'property_address',
  Value = 'value'
}

export type Property_Lockup_Var_Pop_Fields = {
  __typename?: 'property_lockup_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Var_Samp_Fields = {
  __typename?: 'property_lockup_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Lockup_Variance_Fields = {
  __typename?: 'property_lockup_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  value?: Maybe<Scalars['Float']>
}

export type Property_Lockup_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  value?: InputMaybe<Order_By>
}

export type Property_Meta = {
  __typename?: 'property_meta'
  author: Scalars['String']
  block_number: Scalars['Int']
  lockup: Array<Property_Lockup>
  lockup_aggregate: Property_Lockup_Aggregate
  name: Scalars['String']
  property: Scalars['String']
  sender: Scalars['String']
  symbol: Scalars['String']
  total_supply: Scalars['numeric']
}

export type Property_MetaLockupArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Property_MetaLockup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Property_Meta_Aggregate = {
  __typename?: 'property_meta_aggregate'
  aggregate?: Maybe<Property_Meta_Aggregate_Fields>
  nodes: Array<Property_Meta>
}

export type Property_Meta_Aggregate_Fields = {
  __typename?: 'property_meta_aggregate_fields'
  avg?: Maybe<Property_Meta_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Property_Meta_Max_Fields>
  min?: Maybe<Property_Meta_Min_Fields>
  stddev?: Maybe<Property_Meta_Stddev_Fields>
  stddev_pop?: Maybe<Property_Meta_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Property_Meta_Stddev_Samp_Fields>
  sum?: Maybe<Property_Meta_Sum_Fields>
  var_pop?: Maybe<Property_Meta_Var_Pop_Fields>
  var_samp?: Maybe<Property_Meta_Var_Samp_Fields>
  variance?: Maybe<Property_Meta_Variance_Fields>
}

export type Property_Meta_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Property_Meta_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Property_Meta_Aggregate_Order_By = {
  avg?: InputMaybe<Property_Meta_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Property_Meta_Max_Order_By>
  min?: InputMaybe<Property_Meta_Min_Order_By>
  stddev?: InputMaybe<Property_Meta_Stddev_Order_By>
  stddev_pop?: InputMaybe<Property_Meta_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Property_Meta_Stddev_Samp_Order_By>
  sum?: InputMaybe<Property_Meta_Sum_Order_By>
  var_pop?: InputMaybe<Property_Meta_Var_Pop_Order_By>
  var_samp?: InputMaybe<Property_Meta_Var_Samp_Order_By>
  variance?: InputMaybe<Property_Meta_Variance_Order_By>
}

export type Property_Meta_Arr_Rel_Insert_Input = {
  data: Array<Property_Meta_Insert_Input>
  on_conflict?: InputMaybe<Property_Meta_On_Conflict>
}

export type Property_Meta_Avg_Fields = {
  __typename?: 'property_meta_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Property_Meta_Bool_Exp>>>
  _not?: InputMaybe<Property_Meta_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Property_Meta_Bool_Exp>>>
  author?: InputMaybe<String_Comparison_Exp>
  block_number?: InputMaybe<Int_Comparison_Exp>
  lockup?: InputMaybe<Property_Lockup_Bool_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  property?: InputMaybe<String_Comparison_Exp>
  sender?: InputMaybe<String_Comparison_Exp>
  symbol?: InputMaybe<String_Comparison_Exp>
  total_supply?: InputMaybe<Numeric_Comparison_Exp>
}

export enum Property_Meta_Constraint {
  PropertyMetaPkey = 'property_meta_pkey'
}

export type Property_Meta_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  total_supply?: InputMaybe<Scalars['numeric']>
}

export type Property_Meta_Insert_Input = {
  author?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  lockup?: InputMaybe<Property_Lockup_Arr_Rel_Insert_Input>
  name?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
  sender?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  total_supply?: InputMaybe<Scalars['numeric']>
}

export type Property_Meta_Max_Fields = {
  __typename?: 'property_meta_max_fields'
  author?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  sender?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  total_supply?: Maybe<Scalars['numeric']>
}

export type Property_Meta_Max_Order_By = {
  author?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  sender?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Min_Fields = {
  __typename?: 'property_meta_min_fields'
  author?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  sender?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  total_supply?: Maybe<Scalars['numeric']>
}

export type Property_Meta_Min_Order_By = {
  author?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  sender?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Mutation_Response = {
  __typename?: 'property_meta_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Meta>
}

export type Property_Meta_Obj_Rel_Insert_Input = {
  data: Property_Meta_Insert_Input
  on_conflict?: InputMaybe<Property_Meta_On_Conflict>
}

export type Property_Meta_On_Conflict = {
  constraint: Property_Meta_Constraint
  update_columns: Array<Property_Meta_Update_Column>
  where?: InputMaybe<Property_Meta_Bool_Exp>
}

export type Property_Meta_Order_By = {
  author?: InputMaybe<Order_By>
  block_number?: InputMaybe<Order_By>
  lockup_aggregate?: InputMaybe<Property_Lockup_Aggregate_Order_By>
  name?: InputMaybe<Order_By>
  property?: InputMaybe<Order_By>
  sender?: InputMaybe<Order_By>
  symbol?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Pk_Columns_Input = {
  author: Scalars['String']
  property: Scalars['String']
}

export enum Property_Meta_Select_Column {
  Author = 'author',
  BlockNumber = 'block_number',
  Name = 'name',
  Property = 'property',
  Sender = 'sender',
  Symbol = 'symbol',
  TotalSupply = 'total_supply'
}

export type Property_Meta_Set_Input = {
  author?: InputMaybe<Scalars['String']>
  block_number?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  property?: InputMaybe<Scalars['String']>
  sender?: InputMaybe<Scalars['String']>
  symbol?: InputMaybe<Scalars['String']>
  total_supply?: InputMaybe<Scalars['numeric']>
}

export type Property_Meta_Stddev_Fields = {
  __typename?: 'property_meta_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Stddev_Pop_Fields = {
  __typename?: 'property_meta_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Stddev_Samp_Fields = {
  __typename?: 'property_meta_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Sum_Fields = {
  __typename?: 'property_meta_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  total_supply?: Maybe<Scalars['numeric']>
}

export type Property_Meta_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export enum Property_Meta_Update_Column {
  Author = 'author',
  BlockNumber = 'block_number',
  Name = 'name',
  Property = 'property',
  Sender = 'sender',
  Symbol = 'symbol',
  TotalSupply = 'total_supply'
}

export type Property_Meta_Var_Pop_Fields = {
  __typename?: 'property_meta_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Var_Samp_Fields = {
  __typename?: 'property_meta_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Property_Meta_Variance_Fields = {
  __typename?: 'property_meta_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  total_supply?: Maybe<Scalars['Float']>
}

export type Property_Meta_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  total_supply?: InputMaybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  account_lockup: Array<Account_Lockup>
  account_lockup_aggregate: Account_Lockup_Aggregate
  account_lockup_by_pk?: Maybe<Account_Lockup>
  account_lockup_sum_values: Array<Account_Lockup_Sum_Values>
  account_lockup_sum_values_aggregate: Account_Lockup_Sum_Values_Aggregate
  dev_property_transfer: Array<Dev_Property_Transfer>
  dev_property_transfer_aggregate: Dev_Property_Transfer_Aggregate
  dev_property_transfer_by_pk?: Maybe<Dev_Property_Transfer>
  lockup_lockedup: Array<Lockup_Lockedup>
  lockup_lockedup_aggregate: Lockup_Lockedup_Aggregate
  lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  market_factory_create: Array<Market_Factory_Create>
  market_factory_create_aggregate: Market_Factory_Create_Aggregate
  market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  metrics_factory_create: Array<Metrics_Factory_Create>
  metrics_factory_create_aggregate: Metrics_Factory_Create_Aggregate
  metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  metrics_factory_destroy: Array<Metrics_Factory_Destroy>
  metrics_factory_destroy_aggregate: Metrics_Factory_Destroy_Aggregate
  metrics_factory_destroy_by_pk?: Maybe<Metrics_Factory_Destroy>
  policy_factory_create: Array<Policy_Factory_Create>
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  property_authentication: Array<Property_Authentication>
  property_authentication_aggregate: Property_Authentication_Aggregate
  property_authentication_by_pk?: Maybe<Property_Authentication>
  property_authentication_deleted: Array<Property_Authentication_Deleted>
  property_authentication_deleted_aggregate: Property_Authentication_Deleted_Aggregate
  property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  property_balance: Array<Property_Balance>
  property_balance_aggregate: Property_Balance_Aggregate
  property_balance_by_pk?: Maybe<Property_Balance>
  property_factory_create: Array<Property_Factory_Create>
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  property_lockup: Array<Property_Lockup>
  property_lockup_aggregate: Property_Lockup_Aggregate
  property_lockup_by_pk?: Maybe<Property_Lockup>
  property_lockup_sum_values: Array<Property_Lockup_Sum_Values>
  property_lockup_sum_values_aggregate: Property_Lockup_Sum_Values_Aggregate
  property_meta: Array<Property_Meta>
  property_meta_aggregate: Property_Meta_Aggregate
  property_meta_by_pk?: Maybe<Property_Meta>
  withdraw_property_transfer: Array<Withdraw_Property_Transfer>
  withdraw_property_transfer_aggregate: Withdraw_Property_Transfer_Aggregate
  withdraw_property_transfer_by_pk?: Maybe<Withdraw_Property_Transfer>
}

export type Query_RootAccount_LockupArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Order_By>>
  where?: InputMaybe<Account_Lockup_Bool_Exp>
}

export type Query_RootAccount_Lockup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Order_By>>
  where?: InputMaybe<Account_Lockup_Bool_Exp>
}

export type Query_RootAccount_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Query_RootAccount_Lockup_Sum_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>
}

export type Query_RootAccount_Lockup_Sum_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>
}

export type Query_RootDev_Property_TransferArgs = {
  distinct_on?: InputMaybe<Array<Dev_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Dev_Property_Transfer_Order_By>>
  where?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
}

export type Query_RootDev_Property_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dev_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Dev_Property_Transfer_Order_By>>
  where?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
}

export type Query_RootDev_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootLockup_LockedupArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Query_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Query_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMarket_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Market_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Market_Factory_Create_Order_By>>
  where?: InputMaybe<Market_Factory_Create_Bool_Exp>
}

export type Query_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Market_Factory_Create_Order_By>>
  where?: InputMaybe<Market_Factory_Create_Bool_Exp>
}

export type Query_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMetrics_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Query_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Query_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMetrics_Factory_DestroyArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Query_RootMetrics_Factory_Destroy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Query_RootMetrics_Factory_Destroy_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootPolicy_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Policy_Factory_Create_Order_By>>
  where?: InputMaybe<Policy_Factory_Create_Bool_Exp>
}

export type Query_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Policy_Factory_Create_Order_By>>
  where?: InputMaybe<Policy_Factory_Create_Bool_Exp>
}

export type Query_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootProperty_AuthenticationArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Query_RootProperty_Authentication_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Query_RootProperty_Authentication_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Query_RootProperty_Authentication_DeletedArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Query_RootProperty_Authentication_Deleted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Query_RootProperty_Authentication_Deleted_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Query_RootProperty_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Property_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Balance_Order_By>>
  where?: InputMaybe<Property_Balance_Bool_Exp>
}

export type Query_RootProperty_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Balance_Order_By>>
  where?: InputMaybe<Property_Balance_Bool_Exp>
}

export type Query_RootProperty_Balance_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Query_RootProperty_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Property_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Factory_Create_Order_By>>
  where?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export type Query_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Factory_Create_Order_By>>
  where?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export type Query_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootProperty_LockupArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Query_RootProperty_Lockup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Query_RootProperty_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Query_RootProperty_Lockup_Sum_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
}

export type Query_RootProperty_Lockup_Sum_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
}

export type Query_RootProperty_MetaArgs = {
  distinct_on?: InputMaybe<Array<Property_Meta_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Meta_Order_By>>
  where?: InputMaybe<Property_Meta_Bool_Exp>
}

export type Query_RootProperty_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Meta_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Meta_Order_By>>
  where?: InputMaybe<Property_Meta_Bool_Exp>
}

export type Query_RootProperty_Meta_By_PkArgs = {
  author: Scalars['String']
  property: Scalars['String']
}

export type Query_RootWithdraw_Property_TransferArgs = {
  distinct_on?: InputMaybe<Array<Withdraw_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Withdraw_Property_Transfer_Order_By>>
  where?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
}

export type Query_RootWithdraw_Property_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdraw_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Withdraw_Property_Transfer_Order_By>>
  where?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
}

export type Query_RootWithdraw_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  account_lockup: Array<Account_Lockup>
  account_lockup_aggregate: Account_Lockup_Aggregate
  account_lockup_by_pk?: Maybe<Account_Lockup>
  account_lockup_sum_values: Array<Account_Lockup_Sum_Values>
  account_lockup_sum_values_aggregate: Account_Lockup_Sum_Values_Aggregate
  dev_property_transfer: Array<Dev_Property_Transfer>
  dev_property_transfer_aggregate: Dev_Property_Transfer_Aggregate
  dev_property_transfer_by_pk?: Maybe<Dev_Property_Transfer>
  lockup_lockedup: Array<Lockup_Lockedup>
  lockup_lockedup_aggregate: Lockup_Lockedup_Aggregate
  lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  market_factory_create: Array<Market_Factory_Create>
  market_factory_create_aggregate: Market_Factory_Create_Aggregate
  market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  metrics_factory_create: Array<Metrics_Factory_Create>
  metrics_factory_create_aggregate: Metrics_Factory_Create_Aggregate
  metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  metrics_factory_destroy: Array<Metrics_Factory_Destroy>
  metrics_factory_destroy_aggregate: Metrics_Factory_Destroy_Aggregate
  metrics_factory_destroy_by_pk?: Maybe<Metrics_Factory_Destroy>
  policy_factory_create: Array<Policy_Factory_Create>
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  property_authentication: Array<Property_Authentication>
  property_authentication_aggregate: Property_Authentication_Aggregate
  property_authentication_by_pk?: Maybe<Property_Authentication>
  property_authentication_deleted: Array<Property_Authentication_Deleted>
  property_authentication_deleted_aggregate: Property_Authentication_Deleted_Aggregate
  property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  property_balance: Array<Property_Balance>
  property_balance_aggregate: Property_Balance_Aggregate
  property_balance_by_pk?: Maybe<Property_Balance>
  property_factory_create: Array<Property_Factory_Create>
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  property_lockup: Array<Property_Lockup>
  property_lockup_aggregate: Property_Lockup_Aggregate
  property_lockup_by_pk?: Maybe<Property_Lockup>
  property_lockup_sum_values: Array<Property_Lockup_Sum_Values>
  property_lockup_sum_values_aggregate: Property_Lockup_Sum_Values_Aggregate
  property_meta: Array<Property_Meta>
  property_meta_aggregate: Property_Meta_Aggregate
  property_meta_by_pk?: Maybe<Property_Meta>
  withdraw_property_transfer: Array<Withdraw_Property_Transfer>
  withdraw_property_transfer_aggregate: Withdraw_Property_Transfer_Aggregate
  withdraw_property_transfer_by_pk?: Maybe<Withdraw_Property_Transfer>
}

export type Subscription_RootAccount_LockupArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Order_By>>
  where?: InputMaybe<Account_Lockup_Bool_Exp>
}

export type Subscription_RootAccount_Lockup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Order_By>>
  where?: InputMaybe<Account_Lockup_Bool_Exp>
}

export type Subscription_RootAccount_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Subscription_RootAccount_Lockup_Sum_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>
}

export type Subscription_RootAccount_Lockup_Sum_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Account_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Account_Lockup_Sum_Values_Bool_Exp>
}

export type Subscription_RootDev_Property_TransferArgs = {
  distinct_on?: InputMaybe<Array<Dev_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Dev_Property_Transfer_Order_By>>
  where?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
}

export type Subscription_RootDev_Property_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Dev_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Dev_Property_Transfer_Order_By>>
  where?: InputMaybe<Dev_Property_Transfer_Bool_Exp>
}

export type Subscription_RootDev_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootLockup_LockedupArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Subscription_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Lockup_Lockedup_Order_By>>
  where?: InputMaybe<Lockup_Lockedup_Bool_Exp>
}

export type Subscription_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMarket_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Market_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Market_Factory_Create_Order_By>>
  where?: InputMaybe<Market_Factory_Create_Bool_Exp>
}

export type Subscription_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Market_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Market_Factory_Create_Order_By>>
  where?: InputMaybe<Market_Factory_Create_Bool_Exp>
}

export type Subscription_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMetrics_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Create_Order_By>>
  where?: InputMaybe<Metrics_Factory_Create_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMetrics_Factory_DestroyArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Destroy_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: InputMaybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Destroy_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootPolicy_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Policy_Factory_Create_Order_By>>
  where?: InputMaybe<Policy_Factory_Create_Bool_Exp>
}

export type Subscription_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Policy_Factory_Create_Order_By>>
  where?: InputMaybe<Policy_Factory_Create_Bool_Exp>
}

export type Subscription_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootProperty_AuthenticationArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Order_By>>
  where?: InputMaybe<Property_Authentication_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Subscription_RootProperty_Authentication_DeletedArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_Deleted_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: InputMaybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_Deleted_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Subscription_RootProperty_BalanceArgs = {
  distinct_on?: InputMaybe<Array<Property_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Balance_Order_By>>
  where?: InputMaybe<Property_Balance_Bool_Exp>
}

export type Subscription_RootProperty_Balance_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Balance_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Balance_Order_By>>
  where?: InputMaybe<Property_Balance_Bool_Exp>
}

export type Subscription_RootProperty_Balance_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Subscription_RootProperty_Factory_CreateArgs = {
  distinct_on?: InputMaybe<Array<Property_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Factory_Create_Order_By>>
  where?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export type Subscription_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Factory_Create_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Factory_Create_Order_By>>
  where?: InputMaybe<Property_Factory_Create_Bool_Exp>
}

export type Subscription_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootProperty_LockupArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Subscription_RootProperty_Lockup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Order_By>>
  where?: InputMaybe<Property_Lockup_Bool_Exp>
}

export type Subscription_RootProperty_Lockup_By_PkArgs = {
  account_address: Scalars['String']
  property_address: Scalars['String']
}

export type Subscription_RootProperty_Lockup_Sum_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
}

export type Subscription_RootProperty_Lockup_Sum_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Lockup_Sum_Values_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Lockup_Sum_Values_Order_By>>
  where?: InputMaybe<Property_Lockup_Sum_Values_Bool_Exp>
}

export type Subscription_RootProperty_MetaArgs = {
  distinct_on?: InputMaybe<Array<Property_Meta_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Meta_Order_By>>
  where?: InputMaybe<Property_Meta_Bool_Exp>
}

export type Subscription_RootProperty_Meta_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Property_Meta_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Property_Meta_Order_By>>
  where?: InputMaybe<Property_Meta_Bool_Exp>
}

export type Subscription_RootProperty_Meta_By_PkArgs = {
  author: Scalars['String']
  property: Scalars['String']
}

export type Subscription_RootWithdraw_Property_TransferArgs = {
  distinct_on?: InputMaybe<Array<Withdraw_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Withdraw_Property_Transfer_Order_By>>
  where?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
}

export type Subscription_RootWithdraw_Property_Transfer_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Withdraw_Property_Transfer_Select_Column>>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Array<Withdraw_Property_Transfer_Order_By>>
  where?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
}

export type Subscription_RootWithdraw_Property_Transfer_By_PkArgs = {
  event_id: Scalars['String']
}

export type Withdraw_Property_Transfer = {
  __typename?: 'withdraw_property_transfer'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  property_address: Scalars['String']
  raw_data: Scalars['String']
  to_address: Scalars['String']
  transaction_index: Scalars['Int']
}

export type Withdraw_Property_Transfer_Aggregate = {
  __typename?: 'withdraw_property_transfer_aggregate'
  aggregate?: Maybe<Withdraw_Property_Transfer_Aggregate_Fields>
  nodes: Array<Withdraw_Property_Transfer>
}

export type Withdraw_Property_Transfer_Aggregate_Fields = {
  __typename?: 'withdraw_property_transfer_aggregate_fields'
  avg?: Maybe<Withdraw_Property_Transfer_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Withdraw_Property_Transfer_Max_Fields>
  min?: Maybe<Withdraw_Property_Transfer_Min_Fields>
  stddev?: Maybe<Withdraw_Property_Transfer_Stddev_Fields>
  stddev_pop?: Maybe<Withdraw_Property_Transfer_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Withdraw_Property_Transfer_Stddev_Samp_Fields>
  sum?: Maybe<Withdraw_Property_Transfer_Sum_Fields>
  var_pop?: Maybe<Withdraw_Property_Transfer_Var_Pop_Fields>
  var_samp?: Maybe<Withdraw_Property_Transfer_Var_Samp_Fields>
  variance?: Maybe<Withdraw_Property_Transfer_Variance_Fields>
}

export type Withdraw_Property_Transfer_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Withdraw_Property_Transfer_Select_Column>>
  distinct?: InputMaybe<Scalars['Boolean']>
}

export type Withdraw_Property_Transfer_Aggregate_Order_By = {
  avg?: InputMaybe<Withdraw_Property_Transfer_Avg_Order_By>
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Withdraw_Property_Transfer_Max_Order_By>
  min?: InputMaybe<Withdraw_Property_Transfer_Min_Order_By>
  stddev?: InputMaybe<Withdraw_Property_Transfer_Stddev_Order_By>
  stddev_pop?: InputMaybe<Withdraw_Property_Transfer_Stddev_Pop_Order_By>
  stddev_samp?: InputMaybe<Withdraw_Property_Transfer_Stddev_Samp_Order_By>
  sum?: InputMaybe<Withdraw_Property_Transfer_Sum_Order_By>
  var_pop?: InputMaybe<Withdraw_Property_Transfer_Var_Pop_Order_By>
  var_samp?: InputMaybe<Withdraw_Property_Transfer_Var_Samp_Order_By>
  variance?: InputMaybe<Withdraw_Property_Transfer_Variance_Order_By>
}

export type Withdraw_Property_Transfer_Arr_Rel_Insert_Input = {
  data: Array<Withdraw_Property_Transfer_Insert_Input>
  on_conflict?: InputMaybe<Withdraw_Property_Transfer_On_Conflict>
}

export type Withdraw_Property_Transfer_Avg_Fields = {
  __typename?: 'withdraw_property_transfer_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Avg_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Withdraw_Property_Transfer_Bool_Exp>>>
  _not?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
  _or?: InputMaybe<Array<InputMaybe<Withdraw_Property_Transfer_Bool_Exp>>>
  block_number?: InputMaybe<Int_Comparison_Exp>
  event_id?: InputMaybe<String_Comparison_Exp>
  from_address?: InputMaybe<String_Comparison_Exp>
  log_index?: InputMaybe<Int_Comparison_Exp>
  property_address?: InputMaybe<String_Comparison_Exp>
  raw_data?: InputMaybe<String_Comparison_Exp>
  to_address?: InputMaybe<String_Comparison_Exp>
  transaction_index?: InputMaybe<Int_Comparison_Exp>
}

export enum Withdraw_Property_Transfer_Constraint {
  WithdrawPropertyTransferPkey = 'withdraw_property_transfer_pkey'
}

export type Withdraw_Property_Transfer_Inc_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  log_index?: InputMaybe<Scalars['Int']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Insert_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  property_address?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  to_address?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Max_Fields = {
  __typename?: 'withdraw_property_transfer_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  to_address?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Max_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Min_Fields = {
  __typename?: 'withdraw_property_transfer_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  to_address?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Min_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Mutation_Response = {
  __typename?: 'withdraw_property_transfer_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Withdraw_Property_Transfer>
}

export type Withdraw_Property_Transfer_Obj_Rel_Insert_Input = {
  data: Withdraw_Property_Transfer_Insert_Input
  on_conflict?: InputMaybe<Withdraw_Property_Transfer_On_Conflict>
}

export type Withdraw_Property_Transfer_On_Conflict = {
  constraint: Withdraw_Property_Transfer_Constraint
  update_columns: Array<Withdraw_Property_Transfer_Update_Column>
  where?: InputMaybe<Withdraw_Property_Transfer_Bool_Exp>
}

export type Withdraw_Property_Transfer_Order_By = {
  block_number?: InputMaybe<Order_By>
  event_id?: InputMaybe<Order_By>
  from_address?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  property_address?: InputMaybe<Order_By>
  raw_data?: InputMaybe<Order_By>
  to_address?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Pk_Columns_Input = {
  event_id: Scalars['String']
}

export enum Withdraw_Property_Transfer_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  PropertyAddress = 'property_address',
  RawData = 'raw_data',
  ToAddress = 'to_address',
  TransactionIndex = 'transaction_index'
}

export type Withdraw_Property_Transfer_Set_Input = {
  block_number?: InputMaybe<Scalars['Int']>
  event_id?: InputMaybe<Scalars['String']>
  from_address?: InputMaybe<Scalars['String']>
  log_index?: InputMaybe<Scalars['Int']>
  property_address?: InputMaybe<Scalars['String']>
  raw_data?: InputMaybe<Scalars['String']>
  to_address?: InputMaybe<Scalars['String']>
  transaction_index?: InputMaybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Stddev_Fields = {
  __typename?: 'withdraw_property_transfer_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Stddev_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Stddev_Pop_Fields = {
  __typename?: 'withdraw_property_transfer_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Stddev_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Stddev_Samp_Fields = {
  __typename?: 'withdraw_property_transfer_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Stddev_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Sum_Fields = {
  __typename?: 'withdraw_property_transfer_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Withdraw_Property_Transfer_Sum_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export enum Withdraw_Property_Transfer_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  LogIndex = 'log_index',
  PropertyAddress = 'property_address',
  RawData = 'raw_data',
  ToAddress = 'to_address',
  TransactionIndex = 'transaction_index'
}

export type Withdraw_Property_Transfer_Var_Pop_Fields = {
  __typename?: 'withdraw_property_transfer_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Var_Pop_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Var_Samp_Fields = {
  __typename?: 'withdraw_property_transfer_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Var_Samp_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type Withdraw_Property_Transfer_Variance_Fields = {
  __typename?: 'withdraw_property_transfer_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Withdraw_Property_Transfer_Variance_Order_By = {
  block_number?: InputMaybe<Order_By>
  log_index?: InputMaybe<Order_By>
  transaction_index?: InputMaybe<Order_By>
}

export type PropertyFactoryCreateFragment = {
  __typename?: 'property_factory_create'
  block_number: number
  event_id: string
  from_address: string
  log_index: number
  property: string
  raw_data: string
  transaction_index: number
}

export type GetMarketFactoryCreateQueryVariables = Exact<{ [key: string]: never }>

export type GetMarketFactoryCreateQuery = {
  __typename?: 'query_root'
  market_factory_create: Array<{ __typename?: 'market_factory_create'; market: string }>
}

export type GetPortofolioPoolsAccountQueryVariables = Exact<{
  accountAddress: Scalars['String']
}>

export type GetPortofolioPoolsAccountQuery = {
  __typename?: 'query_root'
  property_lockup: Array<{ __typename?: 'property_lockup'; property_address: string }>
}

export type GetPropertyAggregateQueryVariables = Exact<{
  authorAddress?: InputMaybe<Scalars['String']>
}>

export type GetPropertyAggregateQuery = {
  __typename?: 'query_root'
  property_meta_aggregate: {
    __typename?: 'property_meta_aggregate'
    aggregate?: { __typename?: 'property_meta_aggregate_fields'; count?: number }
  }
}

export type GetPropertyAuthenticationQueryVariables = Exact<{
  propertyAddress: Scalars['String']
}>

export type GetPropertyAuthenticationQuery = {
  __typename?: 'query_root'
  property_authentication: Array<{
    __typename?: 'property_authentication'
    authentication_id: string
    market: string
    metrics: string
    property_meta?: { __typename?: 'property_meta'; author: string }
  }>
}

export type GetPropertyBalanceQueryVariables = Exact<{
  account_address: Scalars['String']
  property_address: Scalars['String']
}>

export type GetPropertyBalanceQuery = {
  __typename?: 'query_root'
  property_balance: Array<{
    __typename?: 'property_balance'
    account_address: string
    balance: any
    block_number: number
    is_author: boolean
    property_address: string
  }>
}

export type TotalStakedAccountQueryVariables = Exact<{
  account_address: Scalars['String']
}>

export type TotalStakedAccountQuery = {
  __typename?: 'query_root'
  account_lockup_sum_values: Array<{ __typename?: 'account_lockup_sum_values'; sum_values?: any }>
}

export type ListAccountLockupQueryVariables = Exact<{
  account_address: Scalars['String']
  offset?: InputMaybe<Scalars['Int']>
  limit: Scalars['Int']
}>

export type ListAccountLockupQuery = {
  __typename?: 'query_root'
  account_lockup: Array<{ __typename?: 'account_lockup'; property_address: string }>
  account_lockup_aggregate: {
    __typename?: 'account_lockup_aggregate'
    aggregate?: { __typename?: 'account_lockup_aggregate_fields'; count?: number }
  }
}

export type CountAccountLockupUniqueQueryVariables = Exact<{ [key: string]: never }>

export type CountAccountLockupUniqueQuery = {
  __typename?: 'query_root'
  account_lockup_aggregate: {
    __typename?: 'account_lockup_aggregate'
    aggregate?: { __typename?: 'account_lockup_aggregate_fields'; count?: number }
  }
}

export type ListOwnedPropertyMetaQueryVariables = Exact<{
  account_address: Scalars['String']
  offset?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}>

export type ListOwnedPropertyMetaQuery = {
  __typename?: 'query_root'
  property_meta: Array<{ __typename?: 'property_meta'; property: string; name: string }>
}

export type ListPropertyQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  ilike?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  market?: InputMaybe<Scalars['String']>
  marketOther?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
  denyProperty?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
}>

export type ListPropertyQuery = {
  __typename?: 'query_root'
  property_factory_create: Array<{
    __typename?: 'property_factory_create'
    block_number: number
    event_id: string
    from_address: string
    log_index: number
    property: string
    raw_data: string
    transaction_index: number
    authentication: Array<{ __typename?: 'property_authentication'; authentication_id: string }>
  }>
  property_factory_create_aggregate: {
    __typename?: 'property_factory_create_aggregate'
    aggregate?: { __typename?: 'property_factory_create_aggregate_fields'; count?: number }
  }
}

export type ListPropertyOrderByMostRecentQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  ilike?: InputMaybe<Scalars['String']>
  from?: InputMaybe<Scalars['String']>
  market?: InputMaybe<Scalars['String']>
  marketOther?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
  denyProperty?: InputMaybe<Array<Scalars['String']> | Scalars['String']>
}>

export type ListPropertyOrderByMostRecentQuery = {
  __typename?: 'query_root'
  property_factory_create: Array<{
    __typename?: 'property_factory_create'
    block_number: number
    event_id: string
    from_address: string
    log_index: number
    property: string
    raw_data: string
    transaction_index: number
    authentication: Array<{ __typename?: 'property_authentication'; authentication_id: string }>
  }>
  property_factory_create_aggregate: {
    __typename?: 'property_factory_create_aggregate'
    aggregate?: { __typename?: 'property_factory_create_aggregate_fields'; count?: number }
  }
}

export type ListPropertyMetaQueryVariables = Exact<{
  author: Scalars['String']
  offset?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  ilike?: InputMaybe<Scalars['String']>
}>

export type ListPropertyMetaQuery = {
  __typename?: 'query_root'
  property_meta: Array<{
    __typename?: 'property_meta'
    property: string
    name: string
    lockup_aggregate: {
      __typename?: 'property_lockup_aggregate'
      aggregate?: {
        __typename?: 'property_lockup_aggregate_fields'
        count?: number
        sum?: { __typename?: 'property_lockup_sum_fields'; block_number?: number; value?: any }
      }
    }
  }>
}

export type ListTopStakersAccountQueryVariables = Exact<{
  author_address: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
}>

export type ListTopStakersAccountQuery = {
  __typename?: 'query_root'
  account_lockup: Array<{
    __typename?: 'account_lockup'
    account_address: string
    value: any
    property_address: string
  }>
}

export type ListTopSupportingAccountQueryVariables = Exact<{
  account_address: Scalars['String']
  limit?: InputMaybe<Scalars['Int']>
}>

export type ListTopSupportingAccountQuery = {
  __typename?: 'query_root'
  account_lockup: Array<{ __typename?: 'account_lockup'; property_address: string; value: any }>
}

export const PropertyFactoryCreateFragmentDoc = gql`
  fragment propertyFactoryCreate on property_factory_create {
    block_number
    event_id
    from_address
    log_index
    property
    raw_data
    transaction_index
  }
`
export const GetMarketFactoryCreateDocument = gql`
  query getMarketFactoryCreate {
    market_factory_create(limit: 1, order_by: { block_number: asc }) {
      market
    }
  }
`

/**
 * __useGetMarketFactoryCreateQuery__
 *
 * To run a query within a React component, call `useGetMarketFactoryCreateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMarketFactoryCreateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMarketFactoryCreateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMarketFactoryCreateQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMarketFactoryCreateQuery, GetMarketFactoryCreateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMarketFactoryCreateQuery, GetMarketFactoryCreateQueryVariables>(
    GetMarketFactoryCreateDocument,
    options
  )
}
export function useGetMarketFactoryCreateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMarketFactoryCreateQuery, GetMarketFactoryCreateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMarketFactoryCreateQuery, GetMarketFactoryCreateQueryVariables>(
    GetMarketFactoryCreateDocument,
    options
  )
}
export type GetMarketFactoryCreateQueryHookResult = ReturnType<typeof useGetMarketFactoryCreateQuery>
export type GetMarketFactoryCreateLazyQueryHookResult = ReturnType<typeof useGetMarketFactoryCreateLazyQuery>
export type GetMarketFactoryCreateQueryResult = Apollo.QueryResult<
  GetMarketFactoryCreateQuery,
  GetMarketFactoryCreateQueryVariables
>
export const GetPortofolioPoolsAccountDocument = gql`
  query getPortofolioPoolsAccount($accountAddress: String!) {
    property_lockup(where: { account_address: { _eq: $accountAddress } }) {
      property_address
    }
  }
`

/**
 * __useGetPortofolioPoolsAccountQuery__
 *
 * To run a query within a React component, call `useGetPortofolioPoolsAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPortofolioPoolsAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPortofolioPoolsAccountQuery({
 *   variables: {
 *      accountAddress: // value for 'accountAddress'
 *   },
 * });
 */
export function useGetPortofolioPoolsAccountQuery(
  baseOptions: Apollo.QueryHookOptions<GetPortofolioPoolsAccountQuery, GetPortofolioPoolsAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPortofolioPoolsAccountQuery, GetPortofolioPoolsAccountQueryVariables>(
    GetPortofolioPoolsAccountDocument,
    options
  )
}
export function useGetPortofolioPoolsAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPortofolioPoolsAccountQuery, GetPortofolioPoolsAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPortofolioPoolsAccountQuery, GetPortofolioPoolsAccountQueryVariables>(
    GetPortofolioPoolsAccountDocument,
    options
  )
}
export type GetPortofolioPoolsAccountQueryHookResult = ReturnType<typeof useGetPortofolioPoolsAccountQuery>
export type GetPortofolioPoolsAccountLazyQueryHookResult = ReturnType<typeof useGetPortofolioPoolsAccountLazyQuery>
export type GetPortofolioPoolsAccountQueryResult = Apollo.QueryResult<
  GetPortofolioPoolsAccountQuery,
  GetPortofolioPoolsAccountQueryVariables
>
export const GetPropertyAggregateDocument = gql`
  query getPropertyAggregate($authorAddress: String) {
    property_meta_aggregate(where: { author: { _eq: $authorAddress } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useGetPropertyAggregateQuery__
 *
 * To run a query within a React component, call `useGetPropertyAggregateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyAggregateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyAggregateQuery({
 *   variables: {
 *      authorAddress: // value for 'authorAddress'
 *   },
 * });
 */
export function useGetPropertyAggregateQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPropertyAggregateQuery, GetPropertyAggregateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropertyAggregateQuery, GetPropertyAggregateQueryVariables>(
    GetPropertyAggregateDocument,
    options
  )
}
export function useGetPropertyAggregateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyAggregateQuery, GetPropertyAggregateQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPropertyAggregateQuery, GetPropertyAggregateQueryVariables>(
    GetPropertyAggregateDocument,
    options
  )
}
export type GetPropertyAggregateQueryHookResult = ReturnType<typeof useGetPropertyAggregateQuery>
export type GetPropertyAggregateLazyQueryHookResult = ReturnType<typeof useGetPropertyAggregateLazyQuery>
export type GetPropertyAggregateQueryResult = Apollo.QueryResult<
  GetPropertyAggregateQuery,
  GetPropertyAggregateQueryVariables
>
export const GetPropertyAuthenticationDocument = gql`
  query getPropertyAuthentication($propertyAddress: String!) {
    property_authentication(where: { property: { _eq: $propertyAddress } }) {
      authentication_id
      market
      metrics
      property_meta {
        author
      }
    }
  }
`

/**
 * __useGetPropertyAuthenticationQuery__
 *
 * To run a query within a React component, call `useGetPropertyAuthenticationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyAuthenticationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyAuthenticationQuery({
 *   variables: {
 *      propertyAddress: // value for 'propertyAddress'
 *   },
 * });
 */
export function useGetPropertyAuthenticationQuery(
  baseOptions: Apollo.QueryHookOptions<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>(
    GetPropertyAuthenticationDocument,
    options
  )
}
export function useGetPropertyAuthenticationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>(
    GetPropertyAuthenticationDocument,
    options
  )
}
export type GetPropertyAuthenticationQueryHookResult = ReturnType<typeof useGetPropertyAuthenticationQuery>
export type GetPropertyAuthenticationLazyQueryHookResult = ReturnType<typeof useGetPropertyAuthenticationLazyQuery>
export type GetPropertyAuthenticationQueryResult = Apollo.QueryResult<
  GetPropertyAuthenticationQuery,
  GetPropertyAuthenticationQueryVariables
>
export const GetPropertyBalanceDocument = gql`
  query getPropertyBalance($account_address: String!, $property_address: String!) {
    property_balance(
      where: { account_address: { _eq: $account_address }, property_address: { _eq: $property_address } }
    ) {
      account_address
      balance
      block_number
      is_author
      property_address
    }
  }
`

/**
 * __useGetPropertyBalanceQuery__
 *
 * To run a query within a React component, call `useGetPropertyBalanceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyBalanceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyBalanceQuery({
 *   variables: {
 *      account_address: // value for 'account_address'
 *      property_address: // value for 'property_address'
 *   },
 * });
 */
export function useGetPropertyBalanceQuery(
  baseOptions: Apollo.QueryHookOptions<GetPropertyBalanceQuery, GetPropertyBalanceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPropertyBalanceQuery, GetPropertyBalanceQueryVariables>(GetPropertyBalanceDocument, options)
}
export function useGetPropertyBalanceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyBalanceQuery, GetPropertyBalanceQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetPropertyBalanceQuery, GetPropertyBalanceQueryVariables>(
    GetPropertyBalanceDocument,
    options
  )
}
export type GetPropertyBalanceQueryHookResult = ReturnType<typeof useGetPropertyBalanceQuery>
export type GetPropertyBalanceLazyQueryHookResult = ReturnType<typeof useGetPropertyBalanceLazyQuery>
export type GetPropertyBalanceQueryResult = Apollo.QueryResult<
  GetPropertyBalanceQuery,
  GetPropertyBalanceQueryVariables
>
export const TotalStakedAccountDocument = gql`
  query totalStakedAccount($account_address: String!) {
    account_lockup_sum_values(where: { account_address: { _eq: $account_address } }) {
      sum_values
    }
  }
`

/**
 * __useTotalStakedAccountQuery__
 *
 * To run a query within a React component, call `useTotalStakedAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTotalStakedAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTotalStakedAccountQuery({
 *   variables: {
 *      account_address: // value for 'account_address'
 *   },
 * });
 */
export function useTotalStakedAccountQuery(
  baseOptions: Apollo.QueryHookOptions<TotalStakedAccountQuery, TotalStakedAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TotalStakedAccountQuery, TotalStakedAccountQueryVariables>(TotalStakedAccountDocument, options)
}
export function useTotalStakedAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TotalStakedAccountQuery, TotalStakedAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TotalStakedAccountQuery, TotalStakedAccountQueryVariables>(
    TotalStakedAccountDocument,
    options
  )
}
export type TotalStakedAccountQueryHookResult = ReturnType<typeof useTotalStakedAccountQuery>
export type TotalStakedAccountLazyQueryHookResult = ReturnType<typeof useTotalStakedAccountLazyQuery>
export type TotalStakedAccountQueryResult = Apollo.QueryResult<
  TotalStakedAccountQuery,
  TotalStakedAccountQueryVariables
>
export const ListAccountLockupDocument = gql`
  query listAccountLockup($account_address: String!, $offset: Int, $limit: Int!) {
    account_lockup(
      where: { account_address: { _eq: $account_address } }
      order_by: { value: desc }
      offset: $offset
      limit: $limit
    ) {
      property_address
    }
    account_lockup_aggregate(where: { account_address: { _eq: $account_address } }) {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useListAccountLockupQuery__
 *
 * To run a query within a React component, call `useListAccountLockupQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAccountLockupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAccountLockupQuery({
 *   variables: {
 *      account_address: // value for 'account_address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListAccountLockupQuery(
  baseOptions: Apollo.QueryHookOptions<ListAccountLockupQuery, ListAccountLockupQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListAccountLockupQuery, ListAccountLockupQueryVariables>(ListAccountLockupDocument, options)
}
export function useListAccountLockupLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListAccountLockupQuery, ListAccountLockupQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListAccountLockupQuery, ListAccountLockupQueryVariables>(
    ListAccountLockupDocument,
    options
  )
}
export type ListAccountLockupQueryHookResult = ReturnType<typeof useListAccountLockupQuery>
export type ListAccountLockupLazyQueryHookResult = ReturnType<typeof useListAccountLockupLazyQuery>
export type ListAccountLockupQueryResult = Apollo.QueryResult<ListAccountLockupQuery, ListAccountLockupQueryVariables>
export const CountAccountLockupUniqueDocument = gql`
  query countAccountLockupUnique {
    account_lockup_aggregate {
      aggregate {
        count(columns: account_address, distinct: true)
      }
    }
  }
`

/**
 * __useCountAccountLockupUniqueQuery__
 *
 * To run a query within a React component, call `useCountAccountLockupUniqueQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountAccountLockupUniqueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountAccountLockupUniqueQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountAccountLockupUniqueQuery(
  baseOptions?: Apollo.QueryHookOptions<CountAccountLockupUniqueQuery, CountAccountLockupUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CountAccountLockupUniqueQuery, CountAccountLockupUniqueQueryVariables>(
    CountAccountLockupUniqueDocument,
    options
  )
}
export function useCountAccountLockupUniqueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CountAccountLockupUniqueQuery, CountAccountLockupUniqueQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CountAccountLockupUniqueQuery, CountAccountLockupUniqueQueryVariables>(
    CountAccountLockupUniqueDocument,
    options
  )
}
export type CountAccountLockupUniqueQueryHookResult = ReturnType<typeof useCountAccountLockupUniqueQuery>
export type CountAccountLockupUniqueLazyQueryHookResult = ReturnType<typeof useCountAccountLockupUniqueLazyQuery>
export type CountAccountLockupUniqueQueryResult = Apollo.QueryResult<
  CountAccountLockupUniqueQuery,
  CountAccountLockupUniqueQueryVariables
>
export const ListOwnedPropertyMetaDocument = gql`
  query listOwnedPropertyMeta($account_address: String!, $offset: Int, $limit: Int) {
    property_meta(
      where: { author: { _eq: $account_address } }
      order_by: { lockup_aggregate: { sum: { value: desc } } }
      offset: $offset
      limit: $limit
    ) {
      property
      name
    }
  }
`

/**
 * __useListOwnedPropertyMetaQuery__
 *
 * To run a query within a React component, call `useListOwnedPropertyMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useListOwnedPropertyMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListOwnedPropertyMetaQuery({
 *   variables: {
 *      account_address: // value for 'account_address'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListOwnedPropertyMetaQuery(
  baseOptions: Apollo.QueryHookOptions<ListOwnedPropertyMetaQuery, ListOwnedPropertyMetaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListOwnedPropertyMetaQuery, ListOwnedPropertyMetaQueryVariables>(
    ListOwnedPropertyMetaDocument,
    options
  )
}
export function useListOwnedPropertyMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListOwnedPropertyMetaQuery, ListOwnedPropertyMetaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListOwnedPropertyMetaQuery, ListOwnedPropertyMetaQueryVariables>(
    ListOwnedPropertyMetaDocument,
    options
  )
}
export type ListOwnedPropertyMetaQueryHookResult = ReturnType<typeof useListOwnedPropertyMetaQuery>
export type ListOwnedPropertyMetaLazyQueryHookResult = ReturnType<typeof useListOwnedPropertyMetaLazyQuery>
export type ListOwnedPropertyMetaQueryResult = Apollo.QueryResult<
  ListOwnedPropertyMetaQuery,
  ListOwnedPropertyMetaQueryVariables
>
export const ListPropertyDocument = gql`
  query ListProperty(
    $limit: Int
    $offset: Int
    $ilike: String
    $from: String
    $market: String
    $marketOther: [String!]
    $denyProperty: [String!]
  ) {
    property_factory_create(
      limit: $limit
      offset: $offset
      order_by: { current_lockup: { sum_values: desc_nulls_last } }
      where: {
        authentication: {
          authentication_id: { _ilike: $ilike }
          property_meta: { author: { _eq: $from } }
          market: { _eq: $market, _nin: $marketOther }
        }
        property: { _nin: $denyProperty }
      }
    ) {
      authentication {
        authentication_id
      }
      ...propertyFactoryCreate
    }
    property_factory_create_aggregate(
      where: {
        authentication: {
          authentication_id: { _ilike: $ilike }
          property_meta: { author: { _eq: $from } }
          market: { _eq: $market, _nin: $marketOther }
        }
        property: { _nin: $denyProperty }
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${PropertyFactoryCreateFragmentDoc}
`

/**
 * __useListPropertyQuery__
 *
 * To run a query within a React component, call `useListPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPropertyQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      ilike: // value for 'ilike'
 *      from: // value for 'from'
 *      market: // value for 'market'
 *      marketOther: // value for 'marketOther'
 *      denyProperty: // value for 'denyProperty'
 *   },
 * });
 */
export function useListPropertyQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPropertyQuery, ListPropertyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPropertyQuery, ListPropertyQueryVariables>(ListPropertyDocument, options)
}
export function useListPropertyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListPropertyQuery, ListPropertyQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPropertyQuery, ListPropertyQueryVariables>(ListPropertyDocument, options)
}
export type ListPropertyQueryHookResult = ReturnType<typeof useListPropertyQuery>
export type ListPropertyLazyQueryHookResult = ReturnType<typeof useListPropertyLazyQuery>
export type ListPropertyQueryResult = Apollo.QueryResult<ListPropertyQuery, ListPropertyQueryVariables>
export const ListPropertyOrderByMostRecentDocument = gql`
  query ListPropertyOrderByMostRecent(
    $limit: Int
    $offset: Int
    $ilike: String
    $from: String
    $market: String
    $marketOther: [String!]
    $denyProperty: [String!]
  ) {
    property_factory_create(
      limit: $limit
      offset: $offset
      order_by: { block_number: desc }
      where: {
        authentication: {
          authentication_id: { _ilike: $ilike }
          property_meta: { author: { _eq: $from } }
          market: { _eq: $market, _nin: $marketOther }
        }
        property: { _nin: $denyProperty }
      }
    ) {
      authentication {
        authentication_id
      }
      ...propertyFactoryCreate
    }
    property_factory_create_aggregate(
      where: {
        authentication: {
          authentication_id: { _ilike: $ilike }
          property_meta: { author: { _eq: $from } }
          market: { _eq: $market, _nin: $marketOther }
        }
        property: { _nin: $denyProperty }
      }
    ) {
      aggregate {
        count
      }
    }
  }
  ${PropertyFactoryCreateFragmentDoc}
`

/**
 * __useListPropertyOrderByMostRecentQuery__
 *
 * To run a query within a React component, call `useListPropertyOrderByMostRecentQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPropertyOrderByMostRecentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPropertyOrderByMostRecentQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      ilike: // value for 'ilike'
 *      from: // value for 'from'
 *      market: // value for 'market'
 *      marketOther: // value for 'marketOther'
 *      denyProperty: // value for 'denyProperty'
 *   },
 * });
 */
export function useListPropertyOrderByMostRecentQuery(
  baseOptions?: Apollo.QueryHookOptions<ListPropertyOrderByMostRecentQuery, ListPropertyOrderByMostRecentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPropertyOrderByMostRecentQuery, ListPropertyOrderByMostRecentQueryVariables>(
    ListPropertyOrderByMostRecentDocument,
    options
  )
}
export function useListPropertyOrderByMostRecentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListPropertyOrderByMostRecentQuery,
    ListPropertyOrderByMostRecentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPropertyOrderByMostRecentQuery, ListPropertyOrderByMostRecentQueryVariables>(
    ListPropertyOrderByMostRecentDocument,
    options
  )
}
export type ListPropertyOrderByMostRecentQueryHookResult = ReturnType<typeof useListPropertyOrderByMostRecentQuery>
export type ListPropertyOrderByMostRecentLazyQueryHookResult = ReturnType<
  typeof useListPropertyOrderByMostRecentLazyQuery
>
export type ListPropertyOrderByMostRecentQueryResult = Apollo.QueryResult<
  ListPropertyOrderByMostRecentQuery,
  ListPropertyOrderByMostRecentQueryVariables
>
export const ListPropertyMetaDocument = gql`
  query listPropertyMeta($author: String!, $offset: Int, $limit: Int, $ilike: String) {
    property_meta(
      where: { author: { _eq: $author }, property: { _ilike: $ilike } }
      offset: $offset
      limit: $limit
      order_by: { lockup_aggregate: { sum: { value: desc_nulls_last } } }
    ) {
      property
      name
      lockup_aggregate {
        aggregate {
          count
          sum {
            block_number
            value
          }
        }
      }
    }
  }
`

/**
 * __useListPropertyMetaQuery__
 *
 * To run a query within a React component, call `useListPropertyMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useListPropertyMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListPropertyMetaQuery({
 *   variables: {
 *      author: // value for 'author'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      ilike: // value for 'ilike'
 *   },
 * });
 */
export function useListPropertyMetaQuery(
  baseOptions: Apollo.QueryHookOptions<ListPropertyMetaQuery, ListPropertyMetaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListPropertyMetaQuery, ListPropertyMetaQueryVariables>(ListPropertyMetaDocument, options)
}
export function useListPropertyMetaLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListPropertyMetaQuery, ListPropertyMetaQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListPropertyMetaQuery, ListPropertyMetaQueryVariables>(ListPropertyMetaDocument, options)
}
export type ListPropertyMetaQueryHookResult = ReturnType<typeof useListPropertyMetaQuery>
export type ListPropertyMetaLazyQueryHookResult = ReturnType<typeof useListPropertyMetaLazyQuery>
export type ListPropertyMetaQueryResult = Apollo.QueryResult<ListPropertyMetaQuery, ListPropertyMetaQueryVariables>
export const ListTopStakersAccountDocument = gql`
  query listTopStakersAccount($author_address: String!, $limit: Int) {
    account_lockup(
      where: { property_meta: { author: { _eq: $author_address } } }
      limit: $limit
      order_by: { value: desc }
    ) {
      account_address
      value
      property_address
    }
  }
`

/**
 * __useListTopStakersAccountQuery__
 *
 * To run a query within a React component, call `useListTopStakersAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTopStakersAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTopStakersAccountQuery({
 *   variables: {
 *      author_address: // value for 'author_address'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListTopStakersAccountQuery(
  baseOptions: Apollo.QueryHookOptions<ListTopStakersAccountQuery, ListTopStakersAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListTopStakersAccountQuery, ListTopStakersAccountQueryVariables>(
    ListTopStakersAccountDocument,
    options
  )
}
export function useListTopStakersAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListTopStakersAccountQuery, ListTopStakersAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListTopStakersAccountQuery, ListTopStakersAccountQueryVariables>(
    ListTopStakersAccountDocument,
    options
  )
}
export type ListTopStakersAccountQueryHookResult = ReturnType<typeof useListTopStakersAccountQuery>
export type ListTopStakersAccountLazyQueryHookResult = ReturnType<typeof useListTopStakersAccountLazyQuery>
export type ListTopStakersAccountQueryResult = Apollo.QueryResult<
  ListTopStakersAccountQuery,
  ListTopStakersAccountQueryVariables
>
export const ListTopSupportingAccountDocument = gql`
  query listTopSupportingAccount($account_address: String!, $limit: Int) {
    account_lockup(where: { account_address: { _eq: $account_address } }, order_by: { value: desc }, limit: $limit) {
      property_address
      value
    }
  }
`

/**
 * __useListTopSupportingAccountQuery__
 *
 * To run a query within a React component, call `useListTopSupportingAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTopSupportingAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListTopSupportingAccountQuery({
 *   variables: {
 *      account_address: // value for 'account_address'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListTopSupportingAccountQuery(
  baseOptions: Apollo.QueryHookOptions<ListTopSupportingAccountQuery, ListTopSupportingAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListTopSupportingAccountQuery, ListTopSupportingAccountQueryVariables>(
    ListTopSupportingAccountDocument,
    options
  )
}
export function useListTopSupportingAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ListTopSupportingAccountQuery, ListTopSupportingAccountQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListTopSupportingAccountQuery, ListTopSupportingAccountQueryVariables>(
    ListTopSupportingAccountDocument,
    options
  )
}
export type ListTopSupportingAccountQueryHookResult = ReturnType<typeof useListTopSupportingAccountQuery>
export type ListTopSupportingAccountLazyQueryHookResult = ReturnType<typeof useListTopSupportingAccountLazyQuery>
export type ListTopSupportingAccountQueryResult = Apollo.QueryResult<
  ListTopSupportingAccountQuery,
  ListTopSupportingAccountQueryVariables
>
