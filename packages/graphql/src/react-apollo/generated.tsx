import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  numeric: any
  bigint: any
  oid: any
  smallint: any
  float8: any
}

/** columns and relationships of "allocator_allocation_result" */
export type Allocator_Allocation_Result = {
  __typename?: 'allocator_allocation_result'
  arg_value: Scalars['numeric']
  block_number: Scalars['Int']
  event_id: Scalars['String']
  lockup_value: Scalars['numeric']
  log_index: Scalars['Int']
  market: Scalars['String']
  metrics: Scalars['String']
  property: Scalars['String']
  raw_data: Scalars['String']
  result: Scalars['numeric']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "allocator_allocation_result" */
export type Allocator_Allocation_Result_Aggregate = {
  __typename?: 'allocator_allocation_result_aggregate'
  aggregate?: Maybe<Allocator_Allocation_Result_Aggregate_Fields>
  nodes: Array<Allocator_Allocation_Result>
}

/** aggregate fields of "allocator_allocation_result" */
export type Allocator_Allocation_Result_Aggregate_Fields = {
  __typename?: 'allocator_allocation_result_aggregate_fields'
  avg?: Maybe<Allocator_Allocation_Result_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Allocator_Allocation_Result_Max_Fields>
  min?: Maybe<Allocator_Allocation_Result_Min_Fields>
  stddev?: Maybe<Allocator_Allocation_Result_Stddev_Fields>
  stddev_pop?: Maybe<Allocator_Allocation_Result_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Allocator_Allocation_Result_Stddev_Samp_Fields>
  sum?: Maybe<Allocator_Allocation_Result_Sum_Fields>
  var_pop?: Maybe<Allocator_Allocation_Result_Var_Pop_Fields>
  var_samp?: Maybe<Allocator_Allocation_Result_Var_Samp_Fields>
  variance?: Maybe<Allocator_Allocation_Result_Variance_Fields>
}

/** aggregate fields of "allocator_allocation_result" */
export type Allocator_Allocation_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Aggregate_Order_By = {
  avg?: Maybe<Allocator_Allocation_Result_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Allocator_Allocation_Result_Max_Order_By>
  min?: Maybe<Allocator_Allocation_Result_Min_Order_By>
  stddev?: Maybe<Allocator_Allocation_Result_Stddev_Order_By>
  stddev_pop?: Maybe<Allocator_Allocation_Result_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Allocator_Allocation_Result_Stddev_Samp_Order_By>
  sum?: Maybe<Allocator_Allocation_Result_Sum_Order_By>
  var_pop?: Maybe<Allocator_Allocation_Result_Var_Pop_Order_By>
  var_samp?: Maybe<Allocator_Allocation_Result_Var_Samp_Order_By>
  variance?: Maybe<Allocator_Allocation_Result_Variance_Order_By>
}

/** input type for inserting array relation for remote table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Arr_Rel_Insert_Input = {
  data: Array<Allocator_Allocation_Result_Insert_Input>
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

/** aggregate avg on columns */
export type Allocator_Allocation_Result_Avg_Fields = {
  __typename?: 'allocator_allocation_result_avg_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Avg_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/**
 * Boolean expression to filter rows from the table "allocator_allocation_result".
 * All fields are combined with a logical 'AND'.
 */
export type Allocator_Allocation_Result_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Allocator_Allocation_Result_Bool_Exp>>>
  _not?: Maybe<Allocator_Allocation_Result_Bool_Exp>
  _or?: Maybe<Array<Maybe<Allocator_Allocation_Result_Bool_Exp>>>
  arg_value?: Maybe<Numeric_Comparison_Exp>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  lockup_value?: Maybe<Numeric_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  market?: Maybe<String_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  property?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  result?: Maybe<Numeric_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "allocator_allocation_result" */
export enum Allocator_Allocation_Result_Constraint {
  /** unique or primary key constraint */
  AllocatorAllocationResultPkey = 'allocator_allocation_result_pkey'
}

/** input type for incrementing integer columne in table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Insert_Input = {
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Allocator_Allocation_Result_Max_Fields = {
  __typename?: 'allocator_allocation_result_max_fields'
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Max_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Allocator_Allocation_Result_Min_Fields = {
  __typename?: 'allocator_allocation_result_min_fields'
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Min_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Mutation_Response = {
  __typename?: 'allocator_allocation_result_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Allocator_Allocation_Result>
}

/** input type for inserting object relation for remote table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Obj_Rel_Insert_Input = {
  data: Allocator_Allocation_Result_Insert_Input
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

/** on conflict condition type for table "allocator_allocation_result" */
export type Allocator_Allocation_Result_On_Conflict = {
  constraint: Allocator_Allocation_Result_Constraint
  update_columns: Array<Allocator_Allocation_Result_Update_Column>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

/** ordering options when selecting data from "allocator_allocation_result" */
export type Allocator_Allocation_Result_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "allocator_allocation_result" */
export enum Allocator_Allocation_Result_Select_Column {
  /** column name */
  ArgValue = 'arg_value',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  LockupValue = 'lockup_value',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Market = 'market',
  /** column name */
  Metrics = 'metrics',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  Result = 'result',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Set_Input = {
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Allocator_Allocation_Result_Stddev_Fields = {
  __typename?: 'allocator_allocation_result_stddev_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Stddev_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Allocator_Allocation_Result_Stddev_Pop_Fields = {
  __typename?: 'allocator_allocation_result_stddev_pop_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Stddev_Pop_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Allocator_Allocation_Result_Stddev_Samp_Fields = {
  __typename?: 'allocator_allocation_result_stddev_samp_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Stddev_Samp_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Allocator_Allocation_Result_Sum_Fields = {
  __typename?: 'allocator_allocation_result_sum_fields'
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Sum_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "allocator_allocation_result" */
export enum Allocator_Allocation_Result_Update_Column {
  /** column name */
  ArgValue = 'arg_value',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  LockupValue = 'lockup_value',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Market = 'market',
  /** column name */
  Metrics = 'metrics',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  Result = 'result',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Allocator_Allocation_Result_Var_Pop_Fields = {
  __typename?: 'allocator_allocation_result_var_pop_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Var_Pop_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Allocator_Allocation_Result_Var_Samp_Fields = {
  __typename?: 'allocator_allocation_result_var_samp_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Var_Samp_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Allocator_Allocation_Result_Variance_Fields = {
  __typename?: 'allocator_allocation_result_variance_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "allocator_allocation_result" */
export type Allocator_Allocation_Result_Variance_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** columns and relationships of "allocator_before_allocation" */
export type Allocator_Before_Allocation = {
  __typename?: 'allocator_before_allocation'
  assets: Scalars['numeric']
  block_number: Scalars['Int']
  blocks: Scalars['numeric']
  event_id: Scalars['String']
  log_index: Scalars['Int']
  market_value: Scalars['numeric']
  mint: Scalars['numeric']
  raw_data: Scalars['String']
  token_value: Scalars['numeric']
  total_assets: Scalars['numeric']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "allocator_before_allocation" */
export type Allocator_Before_Allocation_Aggregate = {
  __typename?: 'allocator_before_allocation_aggregate'
  aggregate?: Maybe<Allocator_Before_Allocation_Aggregate_Fields>
  nodes: Array<Allocator_Before_Allocation>
}

/** aggregate fields of "allocator_before_allocation" */
export type Allocator_Before_Allocation_Aggregate_Fields = {
  __typename?: 'allocator_before_allocation_aggregate_fields'
  avg?: Maybe<Allocator_Before_Allocation_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Allocator_Before_Allocation_Max_Fields>
  min?: Maybe<Allocator_Before_Allocation_Min_Fields>
  stddev?: Maybe<Allocator_Before_Allocation_Stddev_Fields>
  stddev_pop?: Maybe<Allocator_Before_Allocation_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Allocator_Before_Allocation_Stddev_Samp_Fields>
  sum?: Maybe<Allocator_Before_Allocation_Sum_Fields>
  var_pop?: Maybe<Allocator_Before_Allocation_Var_Pop_Fields>
  var_samp?: Maybe<Allocator_Before_Allocation_Var_Samp_Fields>
  variance?: Maybe<Allocator_Before_Allocation_Variance_Fields>
}

/** aggregate fields of "allocator_before_allocation" */
export type Allocator_Before_Allocation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Aggregate_Order_By = {
  avg?: Maybe<Allocator_Before_Allocation_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Allocator_Before_Allocation_Max_Order_By>
  min?: Maybe<Allocator_Before_Allocation_Min_Order_By>
  stddev?: Maybe<Allocator_Before_Allocation_Stddev_Order_By>
  stddev_pop?: Maybe<Allocator_Before_Allocation_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Allocator_Before_Allocation_Stddev_Samp_Order_By>
  sum?: Maybe<Allocator_Before_Allocation_Sum_Order_By>
  var_pop?: Maybe<Allocator_Before_Allocation_Var_Pop_Order_By>
  var_samp?: Maybe<Allocator_Before_Allocation_Var_Samp_Order_By>
  variance?: Maybe<Allocator_Before_Allocation_Variance_Order_By>
}

/** input type for inserting array relation for remote table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Arr_Rel_Insert_Input = {
  data: Array<Allocator_Before_Allocation_Insert_Input>
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

/** aggregate avg on columns */
export type Allocator_Before_Allocation_Avg_Fields = {
  __typename?: 'allocator_before_allocation_avg_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Avg_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/**
 * Boolean expression to filter rows from the table "allocator_before_allocation".
 * All fields are combined with a logical 'AND'.
 */
export type Allocator_Before_Allocation_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Allocator_Before_Allocation_Bool_Exp>>>
  _not?: Maybe<Allocator_Before_Allocation_Bool_Exp>
  _or?: Maybe<Array<Maybe<Allocator_Before_Allocation_Bool_Exp>>>
  assets?: Maybe<Numeric_Comparison_Exp>
  block_number?: Maybe<Int_Comparison_Exp>
  blocks?: Maybe<Numeric_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  market_value?: Maybe<Numeric_Comparison_Exp>
  mint?: Maybe<Numeric_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  token_value?: Maybe<Numeric_Comparison_Exp>
  total_assets?: Maybe<Numeric_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "allocator_before_allocation" */
export enum Allocator_Before_Allocation_Constraint {
  /** unique or primary key constraint */
  AllocatorBeforeAllocationPkey = 'allocator_before_allocation_pkey'
}

/** input type for incrementing integer columne in table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Insert_Input = {
  assets?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['numeric']>
  event_id?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market_value?: Maybe<Scalars['numeric']>
  mint?: Maybe<Scalars['numeric']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  total_assets?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Allocator_Before_Allocation_Max_Fields = {
  __typename?: 'allocator_before_allocation_max_fields'
  assets?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['numeric']>
  event_id?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market_value?: Maybe<Scalars['numeric']>
  mint?: Maybe<Scalars['numeric']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  total_assets?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Max_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Allocator_Before_Allocation_Min_Fields = {
  __typename?: 'allocator_before_allocation_min_fields'
  assets?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['numeric']>
  event_id?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market_value?: Maybe<Scalars['numeric']>
  mint?: Maybe<Scalars['numeric']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  total_assets?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Min_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Mutation_Response = {
  __typename?: 'allocator_before_allocation_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Allocator_Before_Allocation>
}

/** input type for inserting object relation for remote table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Obj_Rel_Insert_Input = {
  data: Allocator_Before_Allocation_Insert_Input
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

/** on conflict condition type for table "allocator_before_allocation" */
export type Allocator_Before_Allocation_On_Conflict = {
  constraint: Allocator_Before_Allocation_Constraint
  update_columns: Array<Allocator_Before_Allocation_Update_Column>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

/** ordering options when selecting data from "allocator_before_allocation" */
export type Allocator_Before_Allocation_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "allocator_before_allocation" */
export enum Allocator_Before_Allocation_Select_Column {
  /** column name */
  Assets = 'assets',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Blocks = 'blocks',
  /** column name */
  EventId = 'event_id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  MarketValue = 'market_value',
  /** column name */
  Mint = 'mint',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TokenValue = 'token_value',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Set_Input = {
  assets?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['numeric']>
  event_id?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market_value?: Maybe<Scalars['numeric']>
  mint?: Maybe<Scalars['numeric']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  total_assets?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Allocator_Before_Allocation_Stddev_Fields = {
  __typename?: 'allocator_before_allocation_stddev_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Stddev_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Allocator_Before_Allocation_Stddev_Pop_Fields = {
  __typename?: 'allocator_before_allocation_stddev_pop_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Stddev_Pop_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Allocator_Before_Allocation_Stddev_Samp_Fields = {
  __typename?: 'allocator_before_allocation_stddev_samp_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Stddev_Samp_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Allocator_Before_Allocation_Sum_Fields = {
  __typename?: 'allocator_before_allocation_sum_fields'
  assets?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  market_value?: Maybe<Scalars['numeric']>
  mint?: Maybe<Scalars['numeric']>
  token_value?: Maybe<Scalars['numeric']>
  total_assets?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Sum_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "allocator_before_allocation" */
export enum Allocator_Before_Allocation_Update_Column {
  /** column name */
  Assets = 'assets',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  Blocks = 'blocks',
  /** column name */
  EventId = 'event_id',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  MarketValue = 'market_value',
  /** column name */
  Mint = 'mint',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TokenValue = 'token_value',
  /** column name */
  TotalAssets = 'total_assets',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Allocator_Before_Allocation_Var_Pop_Fields = {
  __typename?: 'allocator_before_allocation_var_pop_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Var_Pop_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Allocator_Before_Allocation_Var_Samp_Fields = {
  __typename?: 'allocator_before_allocation_var_samp_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Var_Samp_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Allocator_Before_Allocation_Variance_Fields = {
  __typename?: 'allocator_before_allocation_variance_fields'
  assets?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  blocks?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  market_value?: Maybe<Scalars['Float']>
  mint?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  total_assets?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "allocator_before_allocation" */
export type Allocator_Before_Allocation_Variance_Order_By = {
  assets?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  blocks?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market_value?: Maybe<Order_By>
  mint?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  total_assets?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>
  _gt?: Maybe<Scalars['bigint']>
  _gte?: Maybe<Scalars['bigint']>
  _in?: Maybe<Array<Scalars['bigint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['bigint']>
  _lte?: Maybe<Scalars['bigint']>
  _neq?: Maybe<Scalars['bigint']>
  _nin?: Maybe<Array<Scalars['bigint']>>
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>
  _gt?: Maybe<Scalars['float8']>
  _gte?: Maybe<Scalars['float8']>
  _in?: Maybe<Array<Scalars['float8']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['float8']>
  _lte?: Maybe<Scalars['float8']>
  _neq?: Maybe<Scalars['float8']>
  _nin?: Maybe<Array<Scalars['float8']>>
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** columns and relationships of "lockup_lockedup" */
export type Lockup_Lockedup = {
  __typename?: 'lockup_lockedup'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  property: Scalars['String']
  raw_data: Scalars['String']
  token_value: Scalars['numeric']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "lockup_lockedup" */
export type Lockup_Lockedup_Aggregate = {
  __typename?: 'lockup_lockedup_aggregate'
  aggregate?: Maybe<Lockup_Lockedup_Aggregate_Fields>
  nodes: Array<Lockup_Lockedup>
}

/** aggregate fields of "lockup_lockedup" */
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

/** aggregate fields of "lockup_lockedup" */
export type Lockup_Lockedup_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "lockup_lockedup" */
export type Lockup_Lockedup_Aggregate_Order_By = {
  avg?: Maybe<Lockup_Lockedup_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Lockup_Lockedup_Max_Order_By>
  min?: Maybe<Lockup_Lockedup_Min_Order_By>
  stddev?: Maybe<Lockup_Lockedup_Stddev_Order_By>
  stddev_pop?: Maybe<Lockup_Lockedup_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Lockup_Lockedup_Stddev_Samp_Order_By>
  sum?: Maybe<Lockup_Lockedup_Sum_Order_By>
  var_pop?: Maybe<Lockup_Lockedup_Var_Pop_Order_By>
  var_samp?: Maybe<Lockup_Lockedup_Var_Samp_Order_By>
  variance?: Maybe<Lockup_Lockedup_Variance_Order_By>
}

/** input type for inserting array relation for remote table "lockup_lockedup" */
export type Lockup_Lockedup_Arr_Rel_Insert_Input = {
  data: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

/** aggregate avg on columns */
export type Lockup_Lockedup_Avg_Fields = {
  __typename?: 'lockup_lockedup_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "lockup_lockedup". All fields are combined with a logical 'AND'. */
export type Lockup_Lockedup_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Lockup_Lockedup_Bool_Exp>>>
  _not?: Maybe<Lockup_Lockedup_Bool_Exp>
  _or?: Maybe<Array<Maybe<Lockup_Lockedup_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  property?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  token_value?: Maybe<Numeric_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "lockup_lockedup" */
export enum Lockup_Lockedup_Constraint {
  /** unique or primary key constraint */
  LockupLockedupPkey = 'lockup_lockedup_pkey'
}

/** input type for incrementing integer columne in table "lockup_lockedup" */
export type Lockup_Lockedup_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "lockup_lockedup" */
export type Lockup_Lockedup_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
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

/** order by max() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Max_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
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

/** order by min() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Min_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "lockup_lockedup" */
export type Lockup_Lockedup_Mutation_Response = {
  __typename?: 'lockup_lockedup_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Lockup_Lockedup>
}

/** input type for inserting object relation for remote table "lockup_lockedup" */
export type Lockup_Lockedup_Obj_Rel_Insert_Input = {
  data: Lockup_Lockedup_Insert_Input
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

/** on conflict condition type for table "lockup_lockedup" */
export type Lockup_Lockedup_On_Conflict = {
  constraint: Lockup_Lockedup_Constraint
  update_columns: Array<Lockup_Lockedup_Update_Column>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

/** ordering options when selecting data from "lockup_lockedup" */
export type Lockup_Lockedup_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "lockup_lockedup" */
export enum Lockup_Lockedup_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TokenValue = 'token_value',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "lockup_lockedup" */
export type Lockup_Lockedup_Set_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Lockup_Lockedup_Stddev_Fields = {
  __typename?: 'lockup_lockedup_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Lockup_Lockedup_Stddev_Pop_Fields = {
  __typename?: 'lockup_lockedup_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Lockup_Lockedup_Stddev_Samp_Fields = {
  __typename?: 'lockup_lockedup_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Lockup_Lockedup_Sum_Fields = {
  __typename?: 'lockup_lockedup_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "lockup_lockedup" */
export enum Lockup_Lockedup_Update_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TokenValue = 'token_value',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Lockup_Lockedup_Var_Pop_Fields = {
  __typename?: 'lockup_lockedup_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Var_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Lockup_Lockedup_Var_Samp_Fields = {
  __typename?: 'lockup_lockedup_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Lockup_Lockedup_Variance_Fields = {
  __typename?: 'lockup_lockedup_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "lockup_lockedup" */
export type Lockup_Lockedup_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** columns and relationships of "market_factory_create" */
export type Market_Factory_Create = {
  __typename?: 'market_factory_create'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  market: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "market_factory_create" */
export type Market_Factory_Create_Aggregate = {
  __typename?: 'market_factory_create_aggregate'
  aggregate?: Maybe<Market_Factory_Create_Aggregate_Fields>
  nodes: Array<Market_Factory_Create>
}

/** aggregate fields of "market_factory_create" */
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

/** aggregate fields of "market_factory_create" */
export type Market_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Market_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "market_factory_create" */
export type Market_Factory_Create_Aggregate_Order_By = {
  avg?: Maybe<Market_Factory_Create_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Market_Factory_Create_Max_Order_By>
  min?: Maybe<Market_Factory_Create_Min_Order_By>
  stddev?: Maybe<Market_Factory_Create_Stddev_Order_By>
  stddev_pop?: Maybe<Market_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Market_Factory_Create_Stddev_Samp_Order_By>
  sum?: Maybe<Market_Factory_Create_Sum_Order_By>
  var_pop?: Maybe<Market_Factory_Create_Var_Pop_Order_By>
  var_samp?: Maybe<Market_Factory_Create_Var_Samp_Order_By>
  variance?: Maybe<Market_Factory_Create_Variance_Order_By>
}

/** input type for inserting array relation for remote table "market_factory_create" */
export type Market_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

/** aggregate avg on columns */
export type Market_Factory_Create_Avg_Fields = {
  __typename?: 'market_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "market_factory_create" */
export type Market_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "market_factory_create". All fields are combined with a logical 'AND'. */
export type Market_Factory_Create_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Market_Factory_Create_Bool_Exp>>>
  _not?: Maybe<Market_Factory_Create_Bool_Exp>
  _or?: Maybe<Array<Maybe<Market_Factory_Create_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  market?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "market_factory_create" */
export enum Market_Factory_Create_Constraint {
  /** unique or primary key constraint */
  MarketFactoryCreatePkey = 'market_factory_create_pkey'
}

/** input type for incrementing integer columne in table "market_factory_create" */
export type Market_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "market_factory_create" */
export type Market_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
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

/** order by max() on columns of table "market_factory_create" */
export type Market_Factory_Create_Max_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
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

/** order by min() on columns of table "market_factory_create" */
export type Market_Factory_Create_Min_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "market_factory_create" */
export type Market_Factory_Create_Mutation_Response = {
  __typename?: 'market_factory_create_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Market_Factory_Create>
}

/** input type for inserting object relation for remote table "market_factory_create" */
export type Market_Factory_Create_Obj_Rel_Insert_Input = {
  data: Market_Factory_Create_Insert_Input
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

/** on conflict condition type for table "market_factory_create" */
export type Market_Factory_Create_On_Conflict = {
  constraint: Market_Factory_Create_Constraint
  update_columns: Array<Market_Factory_Create_Update_Column>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

/** ordering options when selecting data from "market_factory_create" */
export type Market_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "market_factory_create" */
export enum Market_Factory_Create_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Market = 'market',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "market_factory_create" */
export type Market_Factory_Create_Set_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Market_Factory_Create_Stddev_Fields = {
  __typename?: 'market_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "market_factory_create" */
export type Market_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Market_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'market_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "market_factory_create" */
export type Market_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Market_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'market_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "market_factory_create" */
export type Market_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Market_Factory_Create_Sum_Fields = {
  __typename?: 'market_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "market_factory_create" */
export type Market_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "market_factory_create" */
export enum Market_Factory_Create_Update_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Market = 'market',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Market_Factory_Create_Var_Pop_Fields = {
  __typename?: 'market_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "market_factory_create" */
export type Market_Factory_Create_Var_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Market_Factory_Create_Var_Samp_Fields = {
  __typename?: 'market_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "market_factory_create" */
export type Market_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Market_Factory_Create_Variance_Fields = {
  __typename?: 'market_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "market_factory_create" */
export type Market_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** columns and relationships of "metrics_factory_create" */
export type Metrics_Factory_Create = {
  __typename?: 'metrics_factory_create'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  metrics: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "metrics_factory_create" */
export type Metrics_Factory_Create_Aggregate = {
  __typename?: 'metrics_factory_create_aggregate'
  aggregate?: Maybe<Metrics_Factory_Create_Aggregate_Fields>
  nodes: Array<Metrics_Factory_Create>
}

/** aggregate fields of "metrics_factory_create" */
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

/** aggregate fields of "metrics_factory_create" */
export type Metrics_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "metrics_factory_create" */
export type Metrics_Factory_Create_Aggregate_Order_By = {
  avg?: Maybe<Metrics_Factory_Create_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Metrics_Factory_Create_Max_Order_By>
  min?: Maybe<Metrics_Factory_Create_Min_Order_By>
  stddev?: Maybe<Metrics_Factory_Create_Stddev_Order_By>
  stddev_pop?: Maybe<Metrics_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Metrics_Factory_Create_Stddev_Samp_Order_By>
  sum?: Maybe<Metrics_Factory_Create_Sum_Order_By>
  var_pop?: Maybe<Metrics_Factory_Create_Var_Pop_Order_By>
  var_samp?: Maybe<Metrics_Factory_Create_Var_Samp_Order_By>
  variance?: Maybe<Metrics_Factory_Create_Variance_Order_By>
}

/** input type for inserting array relation for remote table "metrics_factory_create" */
export type Metrics_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

/** aggregate avg on columns */
export type Metrics_Factory_Create_Avg_Fields = {
  __typename?: 'metrics_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "metrics_factory_create". All fields are combined with a logical 'AND'. */
export type Metrics_Factory_Create_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metrics_Factory_Create_Bool_Exp>>>
  _not?: Maybe<Metrics_Factory_Create_Bool_Exp>
  _or?: Maybe<Array<Maybe<Metrics_Factory_Create_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "metrics_factory_create" */
export enum Metrics_Factory_Create_Constraint {
  /** unique or primary key constraint */
  MetricsFactoryCreatePkey = 'metrics_factory_create_pkey'
}

/** input type for incrementing integer columne in table "metrics_factory_create" */
export type Metrics_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "metrics_factory_create" */
export type Metrics_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
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

/** order by max() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Max_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
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

/** order by min() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Min_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "metrics_factory_create" */
export type Metrics_Factory_Create_Mutation_Response = {
  __typename?: 'metrics_factory_create_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Metrics_Factory_Create>
}

/** input type for inserting object relation for remote table "metrics_factory_create" */
export type Metrics_Factory_Create_Obj_Rel_Insert_Input = {
  data: Metrics_Factory_Create_Insert_Input
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

/** on conflict condition type for table "metrics_factory_create" */
export type Metrics_Factory_Create_On_Conflict = {
  constraint: Metrics_Factory_Create_Constraint
  update_columns: Array<Metrics_Factory_Create_Update_Column>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

/** ordering options when selecting data from "metrics_factory_create" */
export type Metrics_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "metrics_factory_create" */
export enum Metrics_Factory_Create_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Metrics = 'metrics',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "metrics_factory_create" */
export type Metrics_Factory_Create_Set_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Metrics_Factory_Create_Stddev_Fields = {
  __typename?: 'metrics_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Metrics_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'metrics_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Metrics_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'metrics_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Metrics_Factory_Create_Sum_Fields = {
  __typename?: 'metrics_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "metrics_factory_create" */
export enum Metrics_Factory_Create_Update_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Metrics = 'metrics',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Metrics_Factory_Create_Var_Pop_Fields = {
  __typename?: 'metrics_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Var_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Metrics_Factory_Create_Var_Samp_Fields = {
  __typename?: 'metrics_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Metrics_Factory_Create_Variance_Fields = {
  __typename?: 'metrics_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "metrics_factory_create" */
export type Metrics_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "allocator_allocation_result" */
  delete_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  /** delete data from the table: "allocator_before_allocation" */
  delete_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  /** delete data from the table: "lockup_lockedup" */
  delete_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  /** delete data from the table: "market_factory_create" */
  delete_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  /** delete data from the table: "metrics_factory_create" */
  delete_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  /** delete data from the table: "policy_factory_create" */
  delete_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  /** delete data from the table: "property_factory_create" */
  delete_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  /** insert data into the table: "allocator_allocation_result" */
  insert_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  /** insert data into the table: "allocator_before_allocation" */
  insert_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  /** insert data into the table: "lockup_lockedup" */
  insert_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  /** insert data into the table: "market_factory_create" */
  insert_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  /** insert data into the table: "metrics_factory_create" */
  insert_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  /** insert data into the table: "policy_factory_create" */
  insert_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  /** insert data into the table: "property_factory_create" */
  insert_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  /** update data of the table: "allocator_allocation_result" */
  update_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  /** update data of the table: "allocator_before_allocation" */
  update_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  /** update data of the table: "lockup_lockedup" */
  update_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  /** update data of the table: "market_factory_create" */
  update_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  /** update data of the table: "metrics_factory_create" */
  update_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  /** update data of the table: "policy_factory_create" */
  update_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  /** update data of the table: "property_factory_create" */
  update_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
}

/** mutation root */
export type Mutation_RootDelete_Allocator_Allocation_ResultArgs = {
  where: Allocator_Allocation_Result_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Allocator_Before_AllocationArgs = {
  where: Allocator_Before_Allocation_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Lockup_LockedupArgs = {
  where: Lockup_Lockedup_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Market_Factory_CreateArgs = {
  where: Market_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Metrics_Factory_CreateArgs = {
  where: Metrics_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Policy_Factory_CreateArgs = {
  where: Policy_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Property_Factory_CreateArgs = {
  where: Property_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootInsert_Allocator_Allocation_ResultArgs = {
  objects: Array<Allocator_Allocation_Result_Insert_Input>
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Allocator_Before_AllocationArgs = {
  objects: Array<Allocator_Before_Allocation_Insert_Input>
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Lockup_LockedupArgs = {
  objects: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Market_Factory_CreateArgs = {
  objects: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Metrics_Factory_CreateArgs = {
  objects: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Policy_Factory_CreateArgs = {
  objects: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Property_Factory_CreateArgs = {
  objects: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Allocator_Allocation_ResultArgs = {
  _inc?: Maybe<Allocator_Allocation_Result_Inc_Input>
  _set?: Maybe<Allocator_Allocation_Result_Set_Input>
  where: Allocator_Allocation_Result_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Allocator_Before_AllocationArgs = {
  _inc?: Maybe<Allocator_Before_Allocation_Inc_Input>
  _set?: Maybe<Allocator_Before_Allocation_Set_Input>
  where: Allocator_Before_Allocation_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Lockup_LockedupArgs = {
  _inc?: Maybe<Lockup_Lockedup_Inc_Input>
  _set?: Maybe<Lockup_Lockedup_Set_Input>
  where: Lockup_Lockedup_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Market_Factory_CreateArgs = {
  _inc?: Maybe<Market_Factory_Create_Inc_Input>
  _set?: Maybe<Market_Factory_Create_Set_Input>
  where: Market_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Metrics_Factory_CreateArgs = {
  _inc?: Maybe<Metrics_Factory_Create_Inc_Input>
  _set?: Maybe<Metrics_Factory_Create_Set_Input>
  where: Metrics_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Policy_Factory_CreateArgs = {
  _inc?: Maybe<Policy_Factory_Create_Inc_Input>
  _set?: Maybe<Policy_Factory_Create_Set_Input>
  where: Policy_Factory_Create_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Property_Factory_CreateArgs = {
  _inc?: Maybe<Property_Factory_Create_Inc_Input>
  _set?: Maybe<Property_Factory_Create_Set_Input>
  where: Property_Factory_Create_Bool_Exp
}

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** expression to compare columns of type oid. All fields are combined with logical 'AND'. */
export type Oid_Comparison_Exp = {
  _eq?: Maybe<Scalars['oid']>
  _gt?: Maybe<Scalars['oid']>
  _gte?: Maybe<Scalars['oid']>
  _in?: Maybe<Array<Scalars['oid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['oid']>
  _lte?: Maybe<Scalars['oid']>
  _neq?: Maybe<Scalars['oid']>
  _nin?: Maybe<Array<Scalars['oid']>>
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "pg_buffercache" */
export type Pg_Buffercache = {
  __typename?: 'pg_buffercache'
  bufferid?: Maybe<Scalars['Int']>
  isdirty?: Maybe<Scalars['Boolean']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  reldatabase?: Maybe<Scalars['oid']>
  relfilenode?: Maybe<Scalars['oid']>
  relforknumber?: Maybe<Scalars['smallint']>
  reltablespace?: Maybe<Scalars['oid']>
  usagecount?: Maybe<Scalars['smallint']>
}

/** aggregated selection of "pg_buffercache" */
export type Pg_Buffercache_Aggregate = {
  __typename?: 'pg_buffercache_aggregate'
  aggregate?: Maybe<Pg_Buffercache_Aggregate_Fields>
  nodes: Array<Pg_Buffercache>
}

/** aggregate fields of "pg_buffercache" */
export type Pg_Buffercache_Aggregate_Fields = {
  __typename?: 'pg_buffercache_aggregate_fields'
  avg?: Maybe<Pg_Buffercache_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Pg_Buffercache_Max_Fields>
  min?: Maybe<Pg_Buffercache_Min_Fields>
  stddev?: Maybe<Pg_Buffercache_Stddev_Fields>
  stddev_pop?: Maybe<Pg_Buffercache_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Pg_Buffercache_Stddev_Samp_Fields>
  sum?: Maybe<Pg_Buffercache_Sum_Fields>
  var_pop?: Maybe<Pg_Buffercache_Var_Pop_Fields>
  var_samp?: Maybe<Pg_Buffercache_Var_Samp_Fields>
  variance?: Maybe<Pg_Buffercache_Variance_Fields>
}

/** aggregate fields of "pg_buffercache" */
export type Pg_Buffercache_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pg_Buffercache_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "pg_buffercache" */
export type Pg_Buffercache_Aggregate_Order_By = {
  avg?: Maybe<Pg_Buffercache_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Pg_Buffercache_Max_Order_By>
  min?: Maybe<Pg_Buffercache_Min_Order_By>
  stddev?: Maybe<Pg_Buffercache_Stddev_Order_By>
  stddev_pop?: Maybe<Pg_Buffercache_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Pg_Buffercache_Stddev_Samp_Order_By>
  sum?: Maybe<Pg_Buffercache_Sum_Order_By>
  var_pop?: Maybe<Pg_Buffercache_Var_Pop_Order_By>
  var_samp?: Maybe<Pg_Buffercache_Var_Samp_Order_By>
  variance?: Maybe<Pg_Buffercache_Variance_Order_By>
}

/** aggregate avg on columns */
export type Pg_Buffercache_Avg_Fields = {
  __typename?: 'pg_buffercache_avg_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Avg_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "pg_buffercache". All fields are combined with a logical 'AND'. */
export type Pg_Buffercache_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Pg_Buffercache_Bool_Exp>>>
  _not?: Maybe<Pg_Buffercache_Bool_Exp>
  _or?: Maybe<Array<Maybe<Pg_Buffercache_Bool_Exp>>>
  bufferid?: Maybe<Int_Comparison_Exp>
  isdirty?: Maybe<Boolean_Comparison_Exp>
  pinning_backends?: Maybe<Int_Comparison_Exp>
  relblocknumber?: Maybe<Bigint_Comparison_Exp>
  reldatabase?: Maybe<Oid_Comparison_Exp>
  relfilenode?: Maybe<Oid_Comparison_Exp>
  relforknumber?: Maybe<Smallint_Comparison_Exp>
  reltablespace?: Maybe<Oid_Comparison_Exp>
  usagecount?: Maybe<Smallint_Comparison_Exp>
}

/** aggregate max on columns */
export type Pg_Buffercache_Max_Fields = {
  __typename?: 'pg_buffercache_max_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

/** order by max() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Max_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Pg_Buffercache_Min_Fields = {
  __typename?: 'pg_buffercache_min_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

/** order by min() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Min_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** ordering options when selecting data from "pg_buffercache" */
export type Pg_Buffercache_Order_By = {
  bufferid?: Maybe<Order_By>
  isdirty?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  reldatabase?: Maybe<Order_By>
  relfilenode?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  reltablespace?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** select columns of table "pg_buffercache" */
export enum Pg_Buffercache_Select_Column {
  /** column name */
  Bufferid = 'bufferid',
  /** column name */
  Isdirty = 'isdirty',
  /** column name */
  PinningBackends = 'pinning_backends',
  /** column name */
  Relblocknumber = 'relblocknumber',
  /** column name */
  Reldatabase = 'reldatabase',
  /** column name */
  Relfilenode = 'relfilenode',
  /** column name */
  Relforknumber = 'relforknumber',
  /** column name */
  Reltablespace = 'reltablespace',
  /** column name */
  Usagecount = 'usagecount'
}

/** aggregate stddev on columns */
export type Pg_Buffercache_Stddev_Fields = {
  __typename?: 'pg_buffercache_stddev_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Stddev_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Pg_Buffercache_Stddev_Pop_Fields = {
  __typename?: 'pg_buffercache_stddev_pop_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Stddev_Pop_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Pg_Buffercache_Stddev_Samp_Fields = {
  __typename?: 'pg_buffercache_stddev_samp_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Stddev_Samp_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Pg_Buffercache_Sum_Fields = {
  __typename?: 'pg_buffercache_sum_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Sum_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate var_pop on columns */
export type Pg_Buffercache_Var_Pop_Fields = {
  __typename?: 'pg_buffercache_var_pop_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Var_Pop_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Pg_Buffercache_Var_Samp_Fields = {
  __typename?: 'pg_buffercache_var_samp_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Var_Samp_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Pg_Buffercache_Variance_Fields = {
  __typename?: 'pg_buffercache_variance_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "pg_buffercache" */
export type Pg_Buffercache_Variance_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

/** columns and relationships of "pg_stat_statements" */
export type Pg_Stat_Statements = {
  __typename?: 'pg_stat_statements'
  blk_read_time?: Maybe<Scalars['float8']>
  blk_write_time?: Maybe<Scalars['float8']>
  calls?: Maybe<Scalars['bigint']>
  dbid?: Maybe<Scalars['oid']>
  local_blks_dirtied?: Maybe<Scalars['bigint']>
  local_blks_hit?: Maybe<Scalars['bigint']>
  local_blks_read?: Maybe<Scalars['bigint']>
  local_blks_written?: Maybe<Scalars['bigint']>
  max_time?: Maybe<Scalars['float8']>
  mean_time?: Maybe<Scalars['float8']>
  min_time?: Maybe<Scalars['float8']>
  query?: Maybe<Scalars['String']>
  queryid?: Maybe<Scalars['bigint']>
  rows?: Maybe<Scalars['bigint']>
  shared_blks_dirtied?: Maybe<Scalars['bigint']>
  shared_blks_hit?: Maybe<Scalars['bigint']>
  shared_blks_read?: Maybe<Scalars['bigint']>
  shared_blks_written?: Maybe<Scalars['bigint']>
  stddev_time?: Maybe<Scalars['float8']>
  temp_blks_read?: Maybe<Scalars['bigint']>
  temp_blks_written?: Maybe<Scalars['bigint']>
  total_time?: Maybe<Scalars['float8']>
  userid?: Maybe<Scalars['oid']>
}

/** aggregated selection of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate = {
  __typename?: 'pg_stat_statements_aggregate'
  aggregate?: Maybe<Pg_Stat_Statements_Aggregate_Fields>
  nodes: Array<Pg_Stat_Statements>
}

/** aggregate fields of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate_Fields = {
  __typename?: 'pg_stat_statements_aggregate_fields'
  avg?: Maybe<Pg_Stat_Statements_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Pg_Stat_Statements_Max_Fields>
  min?: Maybe<Pg_Stat_Statements_Min_Fields>
  stddev?: Maybe<Pg_Stat_Statements_Stddev_Fields>
  stddev_pop?: Maybe<Pg_Stat_Statements_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Pg_Stat_Statements_Stddev_Samp_Fields>
  sum?: Maybe<Pg_Stat_Statements_Sum_Fields>
  var_pop?: Maybe<Pg_Stat_Statements_Var_Pop_Fields>
  var_samp?: Maybe<Pg_Stat_Statements_Var_Samp_Fields>
  variance?: Maybe<Pg_Stat_Statements_Variance_Fields>
}

/** aggregate fields of "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "pg_stat_statements" */
export type Pg_Stat_Statements_Aggregate_Order_By = {
  avg?: Maybe<Pg_Stat_Statements_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Pg_Stat_Statements_Max_Order_By>
  min?: Maybe<Pg_Stat_Statements_Min_Order_By>
  stddev?: Maybe<Pg_Stat_Statements_Stddev_Order_By>
  stddev_pop?: Maybe<Pg_Stat_Statements_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Pg_Stat_Statements_Stddev_Samp_Order_By>
  sum?: Maybe<Pg_Stat_Statements_Sum_Order_By>
  var_pop?: Maybe<Pg_Stat_Statements_Var_Pop_Order_By>
  var_samp?: Maybe<Pg_Stat_Statements_Var_Samp_Order_By>
  variance?: Maybe<Pg_Stat_Statements_Variance_Order_By>
}

/** aggregate avg on columns */
export type Pg_Stat_Statements_Avg_Fields = {
  __typename?: 'pg_stat_statements_avg_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Avg_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "pg_stat_statements". All fields are combined with a logical 'AND'. */
export type Pg_Stat_Statements_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Pg_Stat_Statements_Bool_Exp>>>
  _not?: Maybe<Pg_Stat_Statements_Bool_Exp>
  _or?: Maybe<Array<Maybe<Pg_Stat_Statements_Bool_Exp>>>
  blk_read_time?: Maybe<Float8_Comparison_Exp>
  blk_write_time?: Maybe<Float8_Comparison_Exp>
  calls?: Maybe<Bigint_Comparison_Exp>
  dbid?: Maybe<Oid_Comparison_Exp>
  local_blks_dirtied?: Maybe<Bigint_Comparison_Exp>
  local_blks_hit?: Maybe<Bigint_Comparison_Exp>
  local_blks_read?: Maybe<Bigint_Comparison_Exp>
  local_blks_written?: Maybe<Bigint_Comparison_Exp>
  max_time?: Maybe<Float8_Comparison_Exp>
  mean_time?: Maybe<Float8_Comparison_Exp>
  min_time?: Maybe<Float8_Comparison_Exp>
  query?: Maybe<String_Comparison_Exp>
  queryid?: Maybe<Bigint_Comparison_Exp>
  rows?: Maybe<Bigint_Comparison_Exp>
  shared_blks_dirtied?: Maybe<Bigint_Comparison_Exp>
  shared_blks_hit?: Maybe<Bigint_Comparison_Exp>
  shared_blks_read?: Maybe<Bigint_Comparison_Exp>
  shared_blks_written?: Maybe<Bigint_Comparison_Exp>
  stddev_time?: Maybe<Float8_Comparison_Exp>
  temp_blks_read?: Maybe<Bigint_Comparison_Exp>
  temp_blks_written?: Maybe<Bigint_Comparison_Exp>
  total_time?: Maybe<Float8_Comparison_Exp>
  userid?: Maybe<Oid_Comparison_Exp>
}

/** aggregate max on columns */
export type Pg_Stat_Statements_Max_Fields = {
  __typename?: 'pg_stat_statements_max_fields'
  blk_read_time?: Maybe<Scalars['float8']>
  blk_write_time?: Maybe<Scalars['float8']>
  calls?: Maybe<Scalars['bigint']>
  local_blks_dirtied?: Maybe<Scalars['bigint']>
  local_blks_hit?: Maybe<Scalars['bigint']>
  local_blks_read?: Maybe<Scalars['bigint']>
  local_blks_written?: Maybe<Scalars['bigint']>
  max_time?: Maybe<Scalars['float8']>
  mean_time?: Maybe<Scalars['float8']>
  min_time?: Maybe<Scalars['float8']>
  query?: Maybe<Scalars['String']>
  queryid?: Maybe<Scalars['bigint']>
  rows?: Maybe<Scalars['bigint']>
  shared_blks_dirtied?: Maybe<Scalars['bigint']>
  shared_blks_hit?: Maybe<Scalars['bigint']>
  shared_blks_read?: Maybe<Scalars['bigint']>
  shared_blks_written?: Maybe<Scalars['bigint']>
  stddev_time?: Maybe<Scalars['float8']>
  temp_blks_read?: Maybe<Scalars['bigint']>
  temp_blks_written?: Maybe<Scalars['bigint']>
  total_time?: Maybe<Scalars['float8']>
}

/** order by max() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Max_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  query?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Pg_Stat_Statements_Min_Fields = {
  __typename?: 'pg_stat_statements_min_fields'
  blk_read_time?: Maybe<Scalars['float8']>
  blk_write_time?: Maybe<Scalars['float8']>
  calls?: Maybe<Scalars['bigint']>
  local_blks_dirtied?: Maybe<Scalars['bigint']>
  local_blks_hit?: Maybe<Scalars['bigint']>
  local_blks_read?: Maybe<Scalars['bigint']>
  local_blks_written?: Maybe<Scalars['bigint']>
  max_time?: Maybe<Scalars['float8']>
  mean_time?: Maybe<Scalars['float8']>
  min_time?: Maybe<Scalars['float8']>
  query?: Maybe<Scalars['String']>
  queryid?: Maybe<Scalars['bigint']>
  rows?: Maybe<Scalars['bigint']>
  shared_blks_dirtied?: Maybe<Scalars['bigint']>
  shared_blks_hit?: Maybe<Scalars['bigint']>
  shared_blks_read?: Maybe<Scalars['bigint']>
  shared_blks_written?: Maybe<Scalars['bigint']>
  stddev_time?: Maybe<Scalars['float8']>
  temp_blks_read?: Maybe<Scalars['bigint']>
  temp_blks_written?: Maybe<Scalars['bigint']>
  total_time?: Maybe<Scalars['float8']>
}

/** order by min() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Min_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  query?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** ordering options when selecting data from "pg_stat_statements" */
export type Pg_Stat_Statements_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  dbid?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  query?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
  userid?: Maybe<Order_By>
}

/** select columns of table "pg_stat_statements" */
export enum Pg_Stat_Statements_Select_Column {
  /** column name */
  BlkReadTime = 'blk_read_time',
  /** column name */
  BlkWriteTime = 'blk_write_time',
  /** column name */
  Calls = 'calls',
  /** column name */
  Dbid = 'dbid',
  /** column name */
  LocalBlksDirtied = 'local_blks_dirtied',
  /** column name */
  LocalBlksHit = 'local_blks_hit',
  /** column name */
  LocalBlksRead = 'local_blks_read',
  /** column name */
  LocalBlksWritten = 'local_blks_written',
  /** column name */
  MaxTime = 'max_time',
  /** column name */
  MeanTime = 'mean_time',
  /** column name */
  MinTime = 'min_time',
  /** column name */
  Query = 'query',
  /** column name */
  Queryid = 'queryid',
  /** column name */
  Rows = 'rows',
  /** column name */
  SharedBlksDirtied = 'shared_blks_dirtied',
  /** column name */
  SharedBlksHit = 'shared_blks_hit',
  /** column name */
  SharedBlksRead = 'shared_blks_read',
  /** column name */
  SharedBlksWritten = 'shared_blks_written',
  /** column name */
  StddevTime = 'stddev_time',
  /** column name */
  TempBlksRead = 'temp_blks_read',
  /** column name */
  TempBlksWritten = 'temp_blks_written',
  /** column name */
  TotalTime = 'total_time',
  /** column name */
  Userid = 'userid'
}

/** aggregate stddev on columns */
export type Pg_Stat_Statements_Stddev_Fields = {
  __typename?: 'pg_stat_statements_stddev_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Stddev_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Pg_Stat_Statements_Stddev_Pop_Fields = {
  __typename?: 'pg_stat_statements_stddev_pop_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Stddev_Pop_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Pg_Stat_Statements_Stddev_Samp_Fields = {
  __typename?: 'pg_stat_statements_stddev_samp_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Stddev_Samp_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Pg_Stat_Statements_Sum_Fields = {
  __typename?: 'pg_stat_statements_sum_fields'
  blk_read_time?: Maybe<Scalars['float8']>
  blk_write_time?: Maybe<Scalars['float8']>
  calls?: Maybe<Scalars['bigint']>
  local_blks_dirtied?: Maybe<Scalars['bigint']>
  local_blks_hit?: Maybe<Scalars['bigint']>
  local_blks_read?: Maybe<Scalars['bigint']>
  local_blks_written?: Maybe<Scalars['bigint']>
  max_time?: Maybe<Scalars['float8']>
  mean_time?: Maybe<Scalars['float8']>
  min_time?: Maybe<Scalars['float8']>
  queryid?: Maybe<Scalars['bigint']>
  rows?: Maybe<Scalars['bigint']>
  shared_blks_dirtied?: Maybe<Scalars['bigint']>
  shared_blks_hit?: Maybe<Scalars['bigint']>
  shared_blks_read?: Maybe<Scalars['bigint']>
  shared_blks_written?: Maybe<Scalars['bigint']>
  stddev_time?: Maybe<Scalars['float8']>
  temp_blks_read?: Maybe<Scalars['bigint']>
  temp_blks_written?: Maybe<Scalars['bigint']>
  total_time?: Maybe<Scalars['float8']>
}

/** order by sum() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Sum_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate var_pop on columns */
export type Pg_Stat_Statements_Var_Pop_Fields = {
  __typename?: 'pg_stat_statements_var_pop_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Var_Pop_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Pg_Stat_Statements_Var_Samp_Fields = {
  __typename?: 'pg_stat_statements_var_samp_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Var_Samp_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Pg_Stat_Statements_Variance_Fields = {
  __typename?: 'pg_stat_statements_variance_fields'
  blk_read_time?: Maybe<Scalars['Float']>
  blk_write_time?: Maybe<Scalars['Float']>
  calls?: Maybe<Scalars['Float']>
  local_blks_dirtied?: Maybe<Scalars['Float']>
  local_blks_hit?: Maybe<Scalars['Float']>
  local_blks_read?: Maybe<Scalars['Float']>
  local_blks_written?: Maybe<Scalars['Float']>
  max_time?: Maybe<Scalars['Float']>
  mean_time?: Maybe<Scalars['Float']>
  min_time?: Maybe<Scalars['Float']>
  queryid?: Maybe<Scalars['Float']>
  rows?: Maybe<Scalars['Float']>
  shared_blks_dirtied?: Maybe<Scalars['Float']>
  shared_blks_hit?: Maybe<Scalars['Float']>
  shared_blks_read?: Maybe<Scalars['Float']>
  shared_blks_written?: Maybe<Scalars['Float']>
  stddev_time?: Maybe<Scalars['Float']>
  temp_blks_read?: Maybe<Scalars['Float']>
  temp_blks_written?: Maybe<Scalars['Float']>
  total_time?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "pg_stat_statements" */
export type Pg_Stat_Statements_Variance_Order_By = {
  blk_read_time?: Maybe<Order_By>
  blk_write_time?: Maybe<Order_By>
  calls?: Maybe<Order_By>
  local_blks_dirtied?: Maybe<Order_By>
  local_blks_hit?: Maybe<Order_By>
  local_blks_read?: Maybe<Order_By>
  local_blks_written?: Maybe<Order_By>
  max_time?: Maybe<Order_By>
  mean_time?: Maybe<Order_By>
  min_time?: Maybe<Order_By>
  queryid?: Maybe<Order_By>
  rows?: Maybe<Order_By>
  shared_blks_dirtied?: Maybe<Order_By>
  shared_blks_hit?: Maybe<Order_By>
  shared_blks_read?: Maybe<Order_By>
  shared_blks_written?: Maybe<Order_By>
  stddev_time?: Maybe<Order_By>
  temp_blks_read?: Maybe<Order_By>
  temp_blks_written?: Maybe<Order_By>
  total_time?: Maybe<Order_By>
}

/** columns and relationships of "policy_factory_create" */
export type Policy_Factory_Create = {
  __typename?: 'policy_factory_create'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  inner_policy: Scalars['String']
  log_index: Scalars['Int']
  policy_address: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "policy_factory_create" */
export type Policy_Factory_Create_Aggregate = {
  __typename?: 'policy_factory_create_aggregate'
  aggregate?: Maybe<Policy_Factory_Create_Aggregate_Fields>
  nodes: Array<Policy_Factory_Create>
}

/** aggregate fields of "policy_factory_create" */
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

/** aggregate fields of "policy_factory_create" */
export type Policy_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "policy_factory_create" */
export type Policy_Factory_Create_Aggregate_Order_By = {
  avg?: Maybe<Policy_Factory_Create_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Policy_Factory_Create_Max_Order_By>
  min?: Maybe<Policy_Factory_Create_Min_Order_By>
  stddev?: Maybe<Policy_Factory_Create_Stddev_Order_By>
  stddev_pop?: Maybe<Policy_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Policy_Factory_Create_Stddev_Samp_Order_By>
  sum?: Maybe<Policy_Factory_Create_Sum_Order_By>
  var_pop?: Maybe<Policy_Factory_Create_Var_Pop_Order_By>
  var_samp?: Maybe<Policy_Factory_Create_Var_Samp_Order_By>
  variance?: Maybe<Policy_Factory_Create_Variance_Order_By>
}

/** input type for inserting array relation for remote table "policy_factory_create" */
export type Policy_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

/** aggregate avg on columns */
export type Policy_Factory_Create_Avg_Fields = {
  __typename?: 'policy_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "policy_factory_create". All fields are combined with a logical 'AND'. */
export type Policy_Factory_Create_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Policy_Factory_Create_Bool_Exp>>>
  _not?: Maybe<Policy_Factory_Create_Bool_Exp>
  _or?: Maybe<Array<Maybe<Policy_Factory_Create_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  inner_policy?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  policy_address?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "policy_factory_create" */
export enum Policy_Factory_Create_Constraint {
  /** unique or primary key constraint */
  PolicyFactoryCreatePkey = 'policy_factory_create_pkey'
}

/** input type for incrementing integer columne in table "policy_factory_create" */
export type Policy_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "policy_factory_create" */
export type Policy_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  inner_policy?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
export type Policy_Factory_Create_Max_Fields = {
  __typename?: 'policy_factory_create_max_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  inner_policy?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by max() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Max_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  inner_policy?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  policy_address?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Policy_Factory_Create_Min_Fields = {
  __typename?: 'policy_factory_create_min_fields'
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  inner_policy?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by min() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Min_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  inner_policy?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  policy_address?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "policy_factory_create" */
export type Policy_Factory_Create_Mutation_Response = {
  __typename?: 'policy_factory_create_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Policy_Factory_Create>
}

/** input type for inserting object relation for remote table "policy_factory_create" */
export type Policy_Factory_Create_Obj_Rel_Insert_Input = {
  data: Policy_Factory_Create_Insert_Input
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

/** on conflict condition type for table "policy_factory_create" */
export type Policy_Factory_Create_On_Conflict = {
  constraint: Policy_Factory_Create_Constraint
  update_columns: Array<Policy_Factory_Create_Update_Column>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

/** ordering options when selecting data from "policy_factory_create" */
export type Policy_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  inner_policy?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  policy_address?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "policy_factory_create" */
export enum Policy_Factory_Create_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  InnerPolicy = 'inner_policy',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  PolicyAddress = 'policy_address',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "policy_factory_create" */
export type Policy_Factory_Create_Set_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  inner_policy?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  policy_address?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Policy_Factory_Create_Stddev_Fields = {
  __typename?: 'policy_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Policy_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'policy_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Policy_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'policy_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Policy_Factory_Create_Sum_Fields = {
  __typename?: 'policy_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "policy_factory_create" */
export enum Policy_Factory_Create_Update_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  InnerPolicy = 'inner_policy',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  PolicyAddress = 'policy_address',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Policy_Factory_Create_Var_Pop_Fields = {
  __typename?: 'policy_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Var_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Policy_Factory_Create_Var_Samp_Fields = {
  __typename?: 'policy_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Policy_Factory_Create_Variance_Fields = {
  __typename?: 'policy_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "policy_factory_create" */
export type Policy_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** columns and relationships of "property_factory_create" */
export type Property_Factory_Create = {
  __typename?: 'property_factory_create'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  property: Scalars['String']
  raw_data: Scalars['String']
  transaction_index: Scalars['Int']
}

/** aggregated selection of "property_factory_create" */
export type Property_Factory_Create_Aggregate = {
  __typename?: 'property_factory_create_aggregate'
  aggregate?: Maybe<Property_Factory_Create_Aggregate_Fields>
  nodes: Array<Property_Factory_Create>
}

/** aggregate fields of "property_factory_create" */
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

/** aggregate fields of "property_factory_create" */
export type Property_Factory_Create_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Property_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "property_factory_create" */
export type Property_Factory_Create_Aggregate_Order_By = {
  avg?: Maybe<Property_Factory_Create_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Property_Factory_Create_Max_Order_By>
  min?: Maybe<Property_Factory_Create_Min_Order_By>
  stddev?: Maybe<Property_Factory_Create_Stddev_Order_By>
  stddev_pop?: Maybe<Property_Factory_Create_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Property_Factory_Create_Stddev_Samp_Order_By>
  sum?: Maybe<Property_Factory_Create_Sum_Order_By>
  var_pop?: Maybe<Property_Factory_Create_Var_Pop_Order_By>
  var_samp?: Maybe<Property_Factory_Create_Var_Samp_Order_By>
  variance?: Maybe<Property_Factory_Create_Variance_Order_By>
}

/** input type for inserting array relation for remote table "property_factory_create" */
export type Property_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

/** aggregate avg on columns */
export type Property_Factory_Create_Avg_Fields = {
  __typename?: 'property_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "property_factory_create" */
export type Property_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "property_factory_create". All fields are combined with a logical 'AND'. */
export type Property_Factory_Create_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Property_Factory_Create_Bool_Exp>>>
  _not?: Maybe<Property_Factory_Create_Bool_Exp>
  _or?: Maybe<Array<Maybe<Property_Factory_Create_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  property?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

/** unique or primary key constraints on table "property_factory_create" */
export enum Property_Factory_Create_Constraint {
  /** unique or primary key constraint */
  PropertyFactoryCreatePkey = 'property_factory_create_pkey'
}

/** input type for incrementing integer columne in table "property_factory_create" */
export type Property_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "property_factory_create" */
export type Property_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate max on columns */
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

/** order by max() on columns of table "property_factory_create" */
export type Property_Factory_Create_Max_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate min on columns */
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

/** order by min() on columns of table "property_factory_create" */
export type Property_Factory_Create_Min_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** response of any mutation on the table "property_factory_create" */
export type Property_Factory_Create_Mutation_Response = {
  __typename?: 'property_factory_create_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Property_Factory_Create>
}

/** input type for inserting object relation for remote table "property_factory_create" */
export type Property_Factory_Create_Obj_Rel_Insert_Input = {
  data: Property_Factory_Create_Insert_Input
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

/** on conflict condition type for table "property_factory_create" */
export type Property_Factory_Create_On_Conflict = {
  constraint: Property_Factory_Create_Constraint
  update_columns: Array<Property_Factory_Create_Update_Column>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

/** ordering options when selecting data from "property_factory_create" */
export type Property_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** select columns of table "property_factory_create" */
export enum Property_Factory_Create_Select_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** input type for updating data in table "property_factory_create" */
export type Property_Factory_Create_Set_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** aggregate stddev on columns */
export type Property_Factory_Create_Stddev_Fields = {
  __typename?: 'property_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "property_factory_create" */
export type Property_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Property_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'property_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "property_factory_create" */
export type Property_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Property_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'property_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "property_factory_create" */
export type Property_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Property_Factory_Create_Sum_Fields = {
  __typename?: 'property_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "property_factory_create" */
export type Property_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** update columns of table "property_factory_create" */
export enum Property_Factory_Create_Update_Column {
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  EventId = 'event_id',
  /** column name */
  FromAddress = 'from_address',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Property = 'property',
  /** column name */
  RawData = 'raw_data',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** aggregate var_pop on columns */
export type Property_Factory_Create_Var_Pop_Fields = {
  __typename?: 'property_factory_create_var_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "property_factory_create" */
export type Property_Factory_Create_Var_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Property_Factory_Create_Var_Samp_Fields = {
  __typename?: 'property_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "property_factory_create" */
export type Property_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Property_Factory_Create_Variance_Fields = {
  __typename?: 'property_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "property_factory_create" */
export type Property_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "allocator_allocation_result" */
  allocator_allocation_result: Array<Allocator_Allocation_Result>
  /** fetch aggregated fields from the table: "allocator_allocation_result" */
  allocator_allocation_result_aggregate: Allocator_Allocation_Result_Aggregate
  /** fetch data from the table: "allocator_allocation_result" using primary key columns */
  allocator_allocation_result_by_pk?: Maybe<Allocator_Allocation_Result>
  /** fetch data from the table: "allocator_before_allocation" */
  allocator_before_allocation: Array<Allocator_Before_Allocation>
  /** fetch aggregated fields from the table: "allocator_before_allocation" */
  allocator_before_allocation_aggregate: Allocator_Before_Allocation_Aggregate
  /** fetch data from the table: "allocator_before_allocation" using primary key columns */
  allocator_before_allocation_by_pk?: Maybe<Allocator_Before_Allocation>
  /** fetch data from the table: "lockup_lockedup" */
  lockup_lockedup: Array<Lockup_Lockedup>
  /** fetch aggregated fields from the table: "lockup_lockedup" */
  lockup_lockedup_aggregate: Lockup_Lockedup_Aggregate
  /** fetch data from the table: "lockup_lockedup" using primary key columns */
  lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  /** fetch data from the table: "market_factory_create" */
  market_factory_create: Array<Market_Factory_Create>
  /** fetch aggregated fields from the table: "market_factory_create" */
  market_factory_create_aggregate: Market_Factory_Create_Aggregate
  /** fetch data from the table: "market_factory_create" using primary key columns */
  market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  /** fetch data from the table: "metrics_factory_create" */
  metrics_factory_create: Array<Metrics_Factory_Create>
  /** fetch aggregated fields from the table: "metrics_factory_create" */
  metrics_factory_create_aggregate: Metrics_Factory_Create_Aggregate
  /** fetch data from the table: "metrics_factory_create" using primary key columns */
  metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  /** fetch data from the table: "pg_buffercache" */
  pg_buffercache: Array<Pg_Buffercache>
  /** fetch aggregated fields from the table: "pg_buffercache" */
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate
  /** fetch data from the table: "pg_stat_statements" */
  pg_stat_statements: Array<Pg_Stat_Statements>
  /** fetch aggregated fields from the table: "pg_stat_statements" */
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate
  /** fetch data from the table: "policy_factory_create" */
  policy_factory_create: Array<Policy_Factory_Create>
  /** fetch aggregated fields from the table: "policy_factory_create" */
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  /** fetch data from the table: "policy_factory_create" using primary key columns */
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  /** fetch data from the table: "property_factory_create" */
  property_factory_create: Array<Property_Factory_Create>
  /** fetch aggregated fields from the table: "property_factory_create" */
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  /** fetch data from the table: "property_factory_create" using primary key columns */
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
}

/** query root */
export type Query_RootAllocator_Allocation_ResultArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

/** query root */
export type Query_RootAllocator_Allocation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

/** query root */
export type Query_RootAllocator_Allocation_Result_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootAllocator_Before_AllocationArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

/** query root */
export type Query_RootAllocator_Before_Allocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

/** query root */
export type Query_RootAllocator_Before_Allocation_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootLockup_LockedupArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

/** query root */
export type Query_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

/** query root */
export type Query_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootMarket_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootMetrics_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootPg_BuffercacheArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

/** query root */
export type Query_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

/** query root */
export type Query_RootPg_Stat_StatementsArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

/** query root */
export type Query_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

/** query root */
export type Query_RootPolicy_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** query root */
export type Query_RootProperty_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

/** query root */
export type Query_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** expression to compare columns of type smallint. All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>
  _gt?: Maybe<Scalars['smallint']>
  _gte?: Maybe<Scalars['smallint']>
  _in?: Maybe<Array<Scalars['smallint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['smallint']>
  _lte?: Maybe<Scalars['smallint']>
  _neq?: Maybe<Scalars['smallint']>
  _nin?: Maybe<Array<Scalars['smallint']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "allocator_allocation_result" */
  allocator_allocation_result: Array<Allocator_Allocation_Result>
  /** fetch aggregated fields from the table: "allocator_allocation_result" */
  allocator_allocation_result_aggregate: Allocator_Allocation_Result_Aggregate
  /** fetch data from the table: "allocator_allocation_result" using primary key columns */
  allocator_allocation_result_by_pk?: Maybe<Allocator_Allocation_Result>
  /** fetch data from the table: "allocator_before_allocation" */
  allocator_before_allocation: Array<Allocator_Before_Allocation>
  /** fetch aggregated fields from the table: "allocator_before_allocation" */
  allocator_before_allocation_aggregate: Allocator_Before_Allocation_Aggregate
  /** fetch data from the table: "allocator_before_allocation" using primary key columns */
  allocator_before_allocation_by_pk?: Maybe<Allocator_Before_Allocation>
  /** fetch data from the table: "lockup_lockedup" */
  lockup_lockedup: Array<Lockup_Lockedup>
  /** fetch aggregated fields from the table: "lockup_lockedup" */
  lockup_lockedup_aggregate: Lockup_Lockedup_Aggregate
  /** fetch data from the table: "lockup_lockedup" using primary key columns */
  lockup_lockedup_by_pk?: Maybe<Lockup_Lockedup>
  /** fetch data from the table: "market_factory_create" */
  market_factory_create: Array<Market_Factory_Create>
  /** fetch aggregated fields from the table: "market_factory_create" */
  market_factory_create_aggregate: Market_Factory_Create_Aggregate
  /** fetch data from the table: "market_factory_create" using primary key columns */
  market_factory_create_by_pk?: Maybe<Market_Factory_Create>
  /** fetch data from the table: "metrics_factory_create" */
  metrics_factory_create: Array<Metrics_Factory_Create>
  /** fetch aggregated fields from the table: "metrics_factory_create" */
  metrics_factory_create_aggregate: Metrics_Factory_Create_Aggregate
  /** fetch data from the table: "metrics_factory_create" using primary key columns */
  metrics_factory_create_by_pk?: Maybe<Metrics_Factory_Create>
  /** fetch data from the table: "pg_buffercache" */
  pg_buffercache: Array<Pg_Buffercache>
  /** fetch aggregated fields from the table: "pg_buffercache" */
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate
  /** fetch data from the table: "pg_stat_statements" */
  pg_stat_statements: Array<Pg_Stat_Statements>
  /** fetch aggregated fields from the table: "pg_stat_statements" */
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate
  /** fetch data from the table: "policy_factory_create" */
  policy_factory_create: Array<Policy_Factory_Create>
  /** fetch aggregated fields from the table: "policy_factory_create" */
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  /** fetch data from the table: "policy_factory_create" using primary key columns */
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  /** fetch data from the table: "property_factory_create" */
  property_factory_create: Array<Property_Factory_Create>
  /** fetch aggregated fields from the table: "property_factory_create" */
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  /** fetch data from the table: "property_factory_create" using primary key columns */
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
}

/** subscription root */
export type Subscription_RootAllocator_Allocation_ResultArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAllocator_Allocation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAllocator_Allocation_Result_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootAllocator_Before_AllocationArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAllocator_Before_Allocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

/** subscription root */
export type Subscription_RootAllocator_Before_Allocation_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootLockup_LockedupArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootMarket_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootMetrics_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootPg_BuffercacheArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPg_Stat_StatementsArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPolicy_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

/** subscription root */
export type Subscription_RootProperty_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

/** subscription root */
export type Subscription_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type ListAllocatorAllocationResultsQueryVariables = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Order_By>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

export type ListAllocatorAllocationResultsQuery = { __typename?: 'query_root' } & {
  allocator_allocation_result: Array<
    { __typename?: 'allocator_allocation_result' } & Pick<
      Allocator_Allocation_Result,
      | 'event_id'
      | 'arg_value'
      | 'block_number'
      | 'lockup_value'
      | 'log_index'
      | 'market'
      | 'metrics'
      | 'property'
      | 'raw_data'
      | 'result'
      | 'transaction_index'
    >
  >
}

export const ListAllocatorAllocationResultsDocument = gql`
  query ListAllocatorAllocationResults(
    $distinct_on: [allocator_allocation_result_select_column!]
    $limit: Int
    $offset: Int
    $order_by: order_by
    $where: allocator_allocation_result_bool_exp
  ) {
    allocator_allocation_result(distinct_on: $distinct_on, limit: $limit, offset: $offset, where: $where) {
      event_id
      arg_value
      block_number
      lockup_value
      log_index
      market
      metrics
      property
      raw_data
      result
      transaction_index
    }
  }
`

/**
 * __useListAllocatorAllocationResultsQuery__
 *
 * To run a query within a React component, call `useListAllocatorAllocationResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllocatorAllocationResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListAllocatorAllocationResultsQuery({
 *   variables: {
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useListAllocatorAllocationResultsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListAllocatorAllocationResultsQuery,
    ListAllocatorAllocationResultsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ListAllocatorAllocationResultsQuery, ListAllocatorAllocationResultsQueryVariables>(
    ListAllocatorAllocationResultsDocument,
    baseOptions
  )
}
export function useListAllocatorAllocationResultsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListAllocatorAllocationResultsQuery,
    ListAllocatorAllocationResultsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    ListAllocatorAllocationResultsQuery,
    ListAllocatorAllocationResultsQueryVariables
  >(ListAllocatorAllocationResultsDocument, baseOptions)
}
export type ListAllocatorAllocationResultsQueryHookResult = ReturnType<typeof useListAllocatorAllocationResultsQuery>
export type ListAllocatorAllocationResultsLazyQueryHookResult = ReturnType<
  typeof useListAllocatorAllocationResultsLazyQuery
>
export type ListAllocatorAllocationResultsQueryResult = ApolloReactCommon.QueryResult<
  ListAllocatorAllocationResultsQuery,
  ListAllocatorAllocationResultsQueryVariables
>
