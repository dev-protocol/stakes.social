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

export type Allocator_Allocation_Result_Aggregate = {
  __typename?: 'allocator_allocation_result_aggregate'
  aggregate?: Maybe<Allocator_Allocation_Result_Aggregate_Fields>
  nodes: Array<Allocator_Allocation_Result>
}

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

export type Allocator_Allocation_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Allocator_Allocation_Result_Arr_Rel_Insert_Input = {
  data: Array<Allocator_Allocation_Result_Insert_Input>
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

export type Allocator_Allocation_Result_Avg_Fields = {
  __typename?: 'allocator_allocation_result_avg_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Avg_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Allocator_Allocation_Result_Constraint {
  AllocatorAllocationResultPkey = 'allocator_allocation_result_pkey'
}

export type Allocator_Allocation_Result_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

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

export type Allocator_Allocation_Result_Mutation_Response = {
  __typename?: 'allocator_allocation_result_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Allocator_Allocation_Result>
}

export type Allocator_Allocation_Result_Obj_Rel_Insert_Input = {
  data: Allocator_Allocation_Result_Insert_Input
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

export type Allocator_Allocation_Result_On_Conflict = {
  constraint: Allocator_Allocation_Result_Constraint
  update_columns: Array<Allocator_Allocation_Result_Update_Column>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

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

export enum Allocator_Allocation_Result_Select_Column {
  ArgValue = 'arg_value',
  BlockNumber = 'block_number',
  EventId = 'event_id',
  LockupValue = 'lockup_value',
  LogIndex = 'log_index',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property',
  RawData = 'raw_data',
  Result = 'result',
  TransactionIndex = 'transaction_index'
}

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

export type Allocator_Allocation_Result_Stddev_Fields = {
  __typename?: 'allocator_allocation_result_stddev_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Stddev_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Allocator_Allocation_Result_Stddev_Pop_Fields = {
  __typename?: 'allocator_allocation_result_stddev_pop_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Stddev_Pop_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Allocator_Allocation_Result_Stddev_Samp_Fields = {
  __typename?: 'allocator_allocation_result_stddev_samp_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Stddev_Samp_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Allocator_Allocation_Result_Sum_Fields = {
  __typename?: 'allocator_allocation_result_sum_fields'
  arg_value?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  lockup_value?: Maybe<Scalars['numeric']>
  log_index?: Maybe<Scalars['Int']>
  result?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Allocator_Allocation_Result_Sum_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export enum Allocator_Allocation_Result_Update_Column {
  ArgValue = 'arg_value',
  BlockNumber = 'block_number',
  EventId = 'event_id',
  LockupValue = 'lockup_value',
  LogIndex = 'log_index',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property',
  RawData = 'raw_data',
  Result = 'result',
  TransactionIndex = 'transaction_index'
}

export type Allocator_Allocation_Result_Var_Pop_Fields = {
  __typename?: 'allocator_allocation_result_var_pop_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Var_Pop_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Allocator_Allocation_Result_Var_Samp_Fields = {
  __typename?: 'allocator_allocation_result_var_samp_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Var_Samp_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Allocator_Allocation_Result_Variance_Fields = {
  __typename?: 'allocator_allocation_result_variance_fields'
  arg_value?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  lockup_value?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  result?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Allocator_Allocation_Result_Variance_Order_By = {
  arg_value?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  lockup_value?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  result?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export type Allocator_Before_Allocation_Aggregate = {
  __typename?: 'allocator_before_allocation_aggregate'
  aggregate?: Maybe<Allocator_Before_Allocation_Aggregate_Fields>
  nodes: Array<Allocator_Before_Allocation>
}

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

export type Allocator_Before_Allocation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Allocator_Before_Allocation_Arr_Rel_Insert_Input = {
  data: Array<Allocator_Before_Allocation_Insert_Input>
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

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

export enum Allocator_Before_Allocation_Constraint {
  AllocatorBeforeAllocationPkey = 'allocator_before_allocation_pkey'
}

export type Allocator_Before_Allocation_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

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

export type Allocator_Before_Allocation_Mutation_Response = {
  __typename?: 'allocator_before_allocation_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Allocator_Before_Allocation>
}

export type Allocator_Before_Allocation_Obj_Rel_Insert_Input = {
  data: Allocator_Before_Allocation_Insert_Input
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

export type Allocator_Before_Allocation_On_Conflict = {
  constraint: Allocator_Before_Allocation_Constraint
  update_columns: Array<Allocator_Before_Allocation_Update_Column>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

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

export enum Allocator_Before_Allocation_Select_Column {
  Assets = 'assets',
  BlockNumber = 'block_number',
  Blocks = 'blocks',
  EventId = 'event_id',
  LogIndex = 'log_index',
  MarketValue = 'market_value',
  Mint = 'mint',
  RawData = 'raw_data',
  TokenValue = 'token_value',
  TotalAssets = 'total_assets',
  TransactionIndex = 'transaction_index'
}

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

export enum Allocator_Before_Allocation_Update_Column {
  Assets = 'assets',
  BlockNumber = 'block_number',
  Blocks = 'blocks',
  EventId = 'event_id',
  LogIndex = 'log_index',
  MarketValue = 'market_value',
  Mint = 'mint',
  RawData = 'raw_data',
  TokenValue = 'token_value',
  TotalAssets = 'total_assets',
  TransactionIndex = 'transaction_index'
}

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
  columns?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Lockup_Lockedup_Arr_Rel_Insert_Input = {
  data: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

export type Lockup_Lockedup_Avg_Fields = {
  __typename?: 'lockup_lockedup_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Lockup_Lockedup_Constraint {
  LockupLockedupPkey = 'lockup_lockedup_pkey'
}

export type Lockup_Lockedup_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Mutation_Response = {
  __typename?: 'lockup_lockedup_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Lockup_Lockedup>
}

export type Lockup_Lockedup_Obj_Rel_Insert_Input = {
  data: Lockup_Lockedup_Insert_Input
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

export type Lockup_Lockedup_On_Conflict = {
  constraint: Lockup_Lockedup_Constraint
  update_columns: Array<Lockup_Lockedup_Update_Column>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

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
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Lockup_Lockedup_Stddev_Fields = {
  __typename?: 'lockup_lockedup_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Stddev_Pop_Fields = {
  __typename?: 'lockup_lockedup_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Stddev_Samp_Fields = {
  __typename?: 'lockup_lockedup_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Sum_Fields = {
  __typename?: 'lockup_lockedup_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  token_value?: Maybe<Scalars['numeric']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Lockup_Lockedup_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Var_Samp_Fields = {
  __typename?: 'lockup_lockedup_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Lockup_Lockedup_Variance_Fields = {
  __typename?: 'lockup_lockedup_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  token_value?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Lockup_Lockedup_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  token_value?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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
  columns?: Maybe<Array<Market_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Market_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

export type Market_Factory_Create_Avg_Fields = {
  __typename?: 'market_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Market_Factory_Create_Constraint {
  MarketFactoryCreatePkey = 'market_factory_create_pkey'
}

export type Market_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Mutation_Response = {
  __typename?: 'market_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Market_Factory_Create>
}

export type Market_Factory_Create_Obj_Rel_Insert_Input = {
  data: Market_Factory_Create_Insert_Input
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

export type Market_Factory_Create_On_Conflict = {
  constraint: Market_Factory_Create_Constraint
  update_columns: Array<Market_Factory_Create_Update_Column>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

export type Market_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  market?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Stddev_Fields = {
  __typename?: 'market_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'market_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'market_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Sum_Fields = {
  __typename?: 'market_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Market_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Var_Samp_Fields = {
  __typename?: 'market_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Market_Factory_Create_Variance_Fields = {
  __typename?: 'market_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Market_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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
  columns?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Metrics_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

export type Metrics_Factory_Create_Avg_Fields = {
  __typename?: 'metrics_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Metrics_Factory_Create_Constraint {
  MetricsFactoryCreatePkey = 'metrics_factory_create_pkey'
}

export type Metrics_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Mutation_Response = {
  __typename?: 'metrics_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Metrics_Factory_Create>
}

export type Metrics_Factory_Create_Obj_Rel_Insert_Input = {
  data: Metrics_Factory_Create_Insert_Input
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

export type Metrics_Factory_Create_On_Conflict = {
  constraint: Metrics_Factory_Create_Constraint
  update_columns: Array<Metrics_Factory_Create_Update_Column>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

export type Metrics_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Stddev_Fields = {
  __typename?: 'metrics_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'metrics_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'metrics_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Sum_Fields = {
  __typename?: 'metrics_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Var_Samp_Fields = {
  __typename?: 'metrics_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Create_Variance_Fields = {
  __typename?: 'metrics_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy = {
  __typename?: 'metrics_factory_destroy'
  block_number: Scalars['Int']
  event_id: Scalars['String']
  from_address: Scalars['String']
  log_index: Scalars['Int']
  metrics: Scalars['String']
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
  columns?: Maybe<Array<Metrics_Factory_Destroy_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type Metrics_Factory_Destroy_Aggregate_Order_By = {
  avg?: Maybe<Metrics_Factory_Destroy_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Metrics_Factory_Destroy_Max_Order_By>
  min?: Maybe<Metrics_Factory_Destroy_Min_Order_By>
  stddev?: Maybe<Metrics_Factory_Destroy_Stddev_Order_By>
  stddev_pop?: Maybe<Metrics_Factory_Destroy_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Metrics_Factory_Destroy_Stddev_Samp_Order_By>
  sum?: Maybe<Metrics_Factory_Destroy_Sum_Order_By>
  var_pop?: Maybe<Metrics_Factory_Destroy_Var_Pop_Order_By>
  var_samp?: Maybe<Metrics_Factory_Destroy_Var_Samp_Order_By>
  variance?: Maybe<Metrics_Factory_Destroy_Variance_Order_By>
}

export type Metrics_Factory_Destroy_Arr_Rel_Insert_Input = {
  data: Array<Metrics_Factory_Destroy_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Metrics_Factory_Destroy_Avg_Fields = {
  __typename?: 'metrics_factory_destroy_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Metrics_Factory_Destroy_Bool_Exp>>>
  _not?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
  _or?: Maybe<Array<Maybe<Metrics_Factory_Destroy_Bool_Exp>>>
  block_number?: Maybe<Int_Comparison_Exp>
  event_id?: Maybe<String_Comparison_Exp>
  from_address?: Maybe<String_Comparison_Exp>
  log_index?: Maybe<Int_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  raw_data?: Maybe<String_Comparison_Exp>
  transaction_index?: Maybe<Int_Comparison_Exp>
}

export enum Metrics_Factory_Destroy_Constraint {
  MetricsFactoryDestroyPkey = 'metrics_factory_destroy_pkey'
}

export type Metrics_Factory_Destroy_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Mutation_Response = {
  __typename?: 'metrics_factory_destroy_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Metrics_Factory_Destroy>
}

export type Metrics_Factory_Destroy_Obj_Rel_Insert_Input = {
  data: Metrics_Factory_Destroy_Insert_Input
  on_conflict?: Maybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Metrics_Factory_Destroy_On_Conflict = {
  constraint: Metrics_Factory_Destroy_Constraint
  update_columns: Array<Metrics_Factory_Destroy_Update_Column>
  where?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Metrics_Factory_Destroy_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  metrics?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Stddev_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Stddev_Pop_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Stddev_Samp_Fields = {
  __typename?: 'metrics_factory_destroy_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Sum_Fields = {
  __typename?: 'metrics_factory_destroy_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Metrics_Factory_Destroy_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Var_Samp_Fields = {
  __typename?: 'metrics_factory_destroy_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Metrics_Factory_Destroy_Variance_Fields = {
  __typename?: 'metrics_factory_destroy_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Metrics_Factory_Destroy_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Mutation_Root = {
  __typename?: 'mutation_root'
  delete_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  delete_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  delete_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  delete_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  delete_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  delete_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  delete_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  delete_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  delete_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  delete_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  delete_reward_calculation_result?: Maybe<Reward_Calculation_Result_Mutation_Response>
  insert_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  insert_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  insert_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  insert_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  insert_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  insert_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  insert_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  insert_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  insert_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  insert_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  insert_reward_calculation_result?: Maybe<Reward_Calculation_Result_Mutation_Response>
  update_allocator_allocation_result?: Maybe<Allocator_Allocation_Result_Mutation_Response>
  update_allocator_before_allocation?: Maybe<Allocator_Before_Allocation_Mutation_Response>
  update_lockup_lockedup?: Maybe<Lockup_Lockedup_Mutation_Response>
  update_market_factory_create?: Maybe<Market_Factory_Create_Mutation_Response>
  update_metrics_factory_create?: Maybe<Metrics_Factory_Create_Mutation_Response>
  update_metrics_factory_destroy?: Maybe<Metrics_Factory_Destroy_Mutation_Response>
  update_policy_factory_create?: Maybe<Policy_Factory_Create_Mutation_Response>
  update_property_authentication?: Maybe<Property_Authentication_Mutation_Response>
  update_property_authentication_deleted?: Maybe<Property_Authentication_Deleted_Mutation_Response>
  update_property_factory_create?: Maybe<Property_Factory_Create_Mutation_Response>
  update_reward_calculation_result?: Maybe<Reward_Calculation_Result_Mutation_Response>
}

export type Mutation_RootDelete_Allocator_Allocation_ResultArgs = {
  where: Allocator_Allocation_Result_Bool_Exp
}

export type Mutation_RootDelete_Allocator_Before_AllocationArgs = {
  where: Allocator_Before_Allocation_Bool_Exp
}

export type Mutation_RootDelete_Lockup_LockedupArgs = {
  where: Lockup_Lockedup_Bool_Exp
}

export type Mutation_RootDelete_Market_Factory_CreateArgs = {
  where: Market_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Metrics_Factory_CreateArgs = {
  where: Metrics_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Metrics_Factory_DestroyArgs = {
  where: Metrics_Factory_Destroy_Bool_Exp
}

export type Mutation_RootDelete_Policy_Factory_CreateArgs = {
  where: Policy_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Property_AuthenticationArgs = {
  where: Property_Authentication_Bool_Exp
}

export type Mutation_RootDelete_Property_Authentication_DeletedArgs = {
  where: Property_Authentication_Deleted_Bool_Exp
}

export type Mutation_RootDelete_Property_Factory_CreateArgs = {
  where: Property_Factory_Create_Bool_Exp
}

export type Mutation_RootDelete_Reward_Calculation_ResultArgs = {
  where: Reward_Calculation_Result_Bool_Exp
}

export type Mutation_RootInsert_Allocator_Allocation_ResultArgs = {
  objects: Array<Allocator_Allocation_Result_Insert_Input>
  on_conflict?: Maybe<Allocator_Allocation_Result_On_Conflict>
}

export type Mutation_RootInsert_Allocator_Before_AllocationArgs = {
  objects: Array<Allocator_Before_Allocation_Insert_Input>
  on_conflict?: Maybe<Allocator_Before_Allocation_On_Conflict>
}

export type Mutation_RootInsert_Lockup_LockedupArgs = {
  objects: Array<Lockup_Lockedup_Insert_Input>
  on_conflict?: Maybe<Lockup_Lockedup_On_Conflict>
}

export type Mutation_RootInsert_Market_Factory_CreateArgs = {
  objects: Array<Market_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Market_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_CreateArgs = {
  objects: Array<Metrics_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Metrics_Factory_DestroyArgs = {
  objects: Array<Metrics_Factory_Destroy_Insert_Input>
  on_conflict?: Maybe<Metrics_Factory_Destroy_On_Conflict>
}

export type Mutation_RootInsert_Policy_Factory_CreateArgs = {
  objects: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Property_AuthenticationArgs = {
  objects: Array<Property_Authentication_Insert_Input>
  on_conflict?: Maybe<Property_Authentication_On_Conflict>
}

export type Mutation_RootInsert_Property_Authentication_DeletedArgs = {
  objects: Array<Property_Authentication_Deleted_Insert_Input>
  on_conflict?: Maybe<Property_Authentication_Deleted_On_Conflict>
}

export type Mutation_RootInsert_Property_Factory_CreateArgs = {
  objects: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

export type Mutation_RootInsert_Reward_Calculation_ResultArgs = {
  objects: Array<Reward_Calculation_Result_Insert_Input>
  on_conflict?: Maybe<Reward_Calculation_Result_On_Conflict>
}

export type Mutation_RootUpdate_Allocator_Allocation_ResultArgs = {
  _inc?: Maybe<Allocator_Allocation_Result_Inc_Input>
  _set?: Maybe<Allocator_Allocation_Result_Set_Input>
  where: Allocator_Allocation_Result_Bool_Exp
}

export type Mutation_RootUpdate_Allocator_Before_AllocationArgs = {
  _inc?: Maybe<Allocator_Before_Allocation_Inc_Input>
  _set?: Maybe<Allocator_Before_Allocation_Set_Input>
  where: Allocator_Before_Allocation_Bool_Exp
}

export type Mutation_RootUpdate_Lockup_LockedupArgs = {
  _inc?: Maybe<Lockup_Lockedup_Inc_Input>
  _set?: Maybe<Lockup_Lockedup_Set_Input>
  where: Lockup_Lockedup_Bool_Exp
}

export type Mutation_RootUpdate_Market_Factory_CreateArgs = {
  _inc?: Maybe<Market_Factory_Create_Inc_Input>
  _set?: Maybe<Market_Factory_Create_Set_Input>
  where: Market_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Metrics_Factory_CreateArgs = {
  _inc?: Maybe<Metrics_Factory_Create_Inc_Input>
  _set?: Maybe<Metrics_Factory_Create_Set_Input>
  where: Metrics_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Metrics_Factory_DestroyArgs = {
  _inc?: Maybe<Metrics_Factory_Destroy_Inc_Input>
  _set?: Maybe<Metrics_Factory_Destroy_Set_Input>
  where: Metrics_Factory_Destroy_Bool_Exp
}

export type Mutation_RootUpdate_Policy_Factory_CreateArgs = {
  _inc?: Maybe<Policy_Factory_Create_Inc_Input>
  _set?: Maybe<Policy_Factory_Create_Set_Input>
  where: Policy_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Property_AuthenticationArgs = {
  _inc?: Maybe<Property_Authentication_Inc_Input>
  _set?: Maybe<Property_Authentication_Set_Input>
  where: Property_Authentication_Bool_Exp
}

export type Mutation_RootUpdate_Property_Authentication_DeletedArgs = {
  _inc?: Maybe<Property_Authentication_Deleted_Inc_Input>
  _set?: Maybe<Property_Authentication_Deleted_Set_Input>
  where: Property_Authentication_Deleted_Bool_Exp
}

export type Mutation_RootUpdate_Property_Factory_CreateArgs = {
  _inc?: Maybe<Property_Factory_Create_Inc_Input>
  _set?: Maybe<Property_Factory_Create_Set_Input>
  where: Property_Factory_Create_Bool_Exp
}

export type Mutation_RootUpdate_Reward_Calculation_ResultArgs = {
  _inc?: Maybe<Reward_Calculation_Result_Inc_Input>
  _set?: Maybe<Reward_Calculation_Result_Set_Input>
  where: Reward_Calculation_Result_Bool_Exp
}

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

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

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

export type Pg_Buffercache_Aggregate = {
  __typename?: 'pg_buffercache_aggregate'
  aggregate?: Maybe<Pg_Buffercache_Aggregate_Fields>
  nodes: Array<Pg_Buffercache>
}

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

export type Pg_Buffercache_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pg_Buffercache_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Pg_Buffercache_Avg_Fields = {
  __typename?: 'pg_buffercache_avg_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Avg_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

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

export type Pg_Buffercache_Max_Fields = {
  __typename?: 'pg_buffercache_max_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

export type Pg_Buffercache_Max_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Min_Fields = {
  __typename?: 'pg_buffercache_min_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

export type Pg_Buffercache_Min_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

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

export enum Pg_Buffercache_Select_Column {
  Bufferid = 'bufferid',
  Isdirty = 'isdirty',
  PinningBackends = 'pinning_backends',
  Relblocknumber = 'relblocknumber',
  Reldatabase = 'reldatabase',
  Relfilenode = 'relfilenode',
  Relforknumber = 'relforknumber',
  Reltablespace = 'reltablespace',
  Usagecount = 'usagecount'
}

export type Pg_Buffercache_Stddev_Fields = {
  __typename?: 'pg_buffercache_stddev_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Stddev_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Stddev_Pop_Fields = {
  __typename?: 'pg_buffercache_stddev_pop_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Stddev_Pop_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Stddev_Samp_Fields = {
  __typename?: 'pg_buffercache_stddev_samp_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Stddev_Samp_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Sum_Fields = {
  __typename?: 'pg_buffercache_sum_fields'
  bufferid?: Maybe<Scalars['Int']>
  pinning_backends?: Maybe<Scalars['Int']>
  relblocknumber?: Maybe<Scalars['bigint']>
  relforknumber?: Maybe<Scalars['smallint']>
  usagecount?: Maybe<Scalars['smallint']>
}

export type Pg_Buffercache_Sum_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Var_Pop_Fields = {
  __typename?: 'pg_buffercache_var_pop_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Var_Pop_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Var_Samp_Fields = {
  __typename?: 'pg_buffercache_var_samp_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Var_Samp_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

export type Pg_Buffercache_Variance_Fields = {
  __typename?: 'pg_buffercache_variance_fields'
  bufferid?: Maybe<Scalars['Float']>
  pinning_backends?: Maybe<Scalars['Float']>
  relblocknumber?: Maybe<Scalars['Float']>
  relforknumber?: Maybe<Scalars['Float']>
  usagecount?: Maybe<Scalars['Float']>
}

export type Pg_Buffercache_Variance_Order_By = {
  bufferid?: Maybe<Order_By>
  pinning_backends?: Maybe<Order_By>
  relblocknumber?: Maybe<Order_By>
  relforknumber?: Maybe<Order_By>
  usagecount?: Maybe<Order_By>
}

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

export type Pg_Stat_Statements_Aggregate = {
  __typename?: 'pg_stat_statements_aggregate'
  aggregate?: Maybe<Pg_Stat_Statements_Aggregate_Fields>
  nodes: Array<Pg_Stat_Statements>
}

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

export type Pg_Stat_Statements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export enum Pg_Stat_Statements_Select_Column {
  BlkReadTime = 'blk_read_time',
  BlkWriteTime = 'blk_write_time',
  Calls = 'calls',
  Dbid = 'dbid',
  LocalBlksDirtied = 'local_blks_dirtied',
  LocalBlksHit = 'local_blks_hit',
  LocalBlksRead = 'local_blks_read',
  LocalBlksWritten = 'local_blks_written',
  MaxTime = 'max_time',
  MeanTime = 'mean_time',
  MinTime = 'min_time',
  Query = 'query',
  Queryid = 'queryid',
  Rows = 'rows',
  SharedBlksDirtied = 'shared_blks_dirtied',
  SharedBlksHit = 'shared_blks_hit',
  SharedBlksRead = 'shared_blks_read',
  SharedBlksWritten = 'shared_blks_written',
  StddevTime = 'stddev_time',
  TempBlksRead = 'temp_blks_read',
  TempBlksWritten = 'temp_blks_written',
  TotalTime = 'total_time',
  Userid = 'userid'
}

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
  columns?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Policy_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Policy_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

export type Policy_Factory_Create_Avg_Fields = {
  __typename?: 'policy_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Policy_Factory_Create_Constraint {
  PolicyFactoryCreatePkey = 'policy_factory_create_pkey'
}

export type Policy_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

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

export type Policy_Factory_Create_Mutation_Response = {
  __typename?: 'policy_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Policy_Factory_Create>
}

export type Policy_Factory_Create_Obj_Rel_Insert_Input = {
  data: Policy_Factory_Create_Insert_Input
  on_conflict?: Maybe<Policy_Factory_Create_On_Conflict>
}

export type Policy_Factory_Create_On_Conflict = {
  constraint: Policy_Factory_Create_Constraint
  update_columns: Array<Policy_Factory_Create_Update_Column>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

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

export enum Policy_Factory_Create_Select_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  InnerPolicy = 'inner_policy',
  LogIndex = 'log_index',
  PolicyAddress = 'policy_address',
  RawData = 'raw_data',
  TransactionIndex = 'transaction_index'
}

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

export type Policy_Factory_Create_Stddev_Fields = {
  __typename?: 'policy_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Policy_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'policy_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Policy_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'policy_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Policy_Factory_Create_Sum_Fields = {
  __typename?: 'policy_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Policy_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export enum Policy_Factory_Create_Update_Column {
  BlockNumber = 'block_number',
  EventId = 'event_id',
  FromAddress = 'from_address',
  InnerPolicy = 'inner_policy',
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Policy_Factory_Create_Var_Samp_Fields = {
  __typename?: 'policy_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Policy_Factory_Create_Variance_Fields = {
  __typename?: 'policy_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Policy_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Authentication = {
  __typename?: 'property_authentication'
  authentication_id: Scalars['String']
  block_number: Scalars['Int']
  market: Scalars['String']
  metrics: Scalars['String']
  property: Scalars['String']
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
  columns?: Maybe<Array<Property_Authentication_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type Property_Authentication_Aggregate_Order_By = {
  avg?: Maybe<Property_Authentication_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Property_Authentication_Max_Order_By>
  min?: Maybe<Property_Authentication_Min_Order_By>
  stddev?: Maybe<Property_Authentication_Stddev_Order_By>
  stddev_pop?: Maybe<Property_Authentication_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Property_Authentication_Stddev_Samp_Order_By>
  sum?: Maybe<Property_Authentication_Sum_Order_By>
  var_pop?: Maybe<Property_Authentication_Var_Pop_Order_By>
  var_samp?: Maybe<Property_Authentication_Var_Samp_Order_By>
  variance?: Maybe<Property_Authentication_Variance_Order_By>
}

export type Property_Authentication_Arr_Rel_Insert_Input = {
  data: Array<Property_Authentication_Insert_Input>
  on_conflict?: Maybe<Property_Authentication_On_Conflict>
}

export type Property_Authentication_Avg_Fields = {
  __typename?: 'property_authentication_avg_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Avg_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Property_Authentication_Bool_Exp>>>
  _not?: Maybe<Property_Authentication_Bool_Exp>
  _or?: Maybe<Array<Maybe<Property_Authentication_Bool_Exp>>>
  authentication_id?: Maybe<String_Comparison_Exp>
  block_number?: Maybe<Int_Comparison_Exp>
  market?: Maybe<String_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  property?: Maybe<String_Comparison_Exp>
}

export enum Property_Authentication_Constraint {
  PropertyAuthenticationPkey = 'property_authentication_pkey'
}

export type Property_Authentication_Deleted = {
  __typename?: 'property_authentication_deleted'
  authentication_id: Scalars['String']
  block_number: Scalars['Int']
  market: Scalars['String']
  metrics: Scalars['String']
  property: Scalars['String']
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
  columns?: Maybe<Array<Property_Authentication_Deleted_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type Property_Authentication_Deleted_Aggregate_Order_By = {
  avg?: Maybe<Property_Authentication_Deleted_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Property_Authentication_Deleted_Max_Order_By>
  min?: Maybe<Property_Authentication_Deleted_Min_Order_By>
  stddev?: Maybe<Property_Authentication_Deleted_Stddev_Order_By>
  stddev_pop?: Maybe<Property_Authentication_Deleted_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Property_Authentication_Deleted_Stddev_Samp_Order_By>
  sum?: Maybe<Property_Authentication_Deleted_Sum_Order_By>
  var_pop?: Maybe<Property_Authentication_Deleted_Var_Pop_Order_By>
  var_samp?: Maybe<Property_Authentication_Deleted_Var_Samp_Order_By>
  variance?: Maybe<Property_Authentication_Deleted_Variance_Order_By>
}

export type Property_Authentication_Deleted_Arr_Rel_Insert_Input = {
  data: Array<Property_Authentication_Deleted_Insert_Input>
  on_conflict?: Maybe<Property_Authentication_Deleted_On_Conflict>
}

export type Property_Authentication_Deleted_Avg_Fields = {
  __typename?: 'property_authentication_deleted_avg_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Avg_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Property_Authentication_Deleted_Bool_Exp>>>
  _not?: Maybe<Property_Authentication_Deleted_Bool_Exp>
  _or?: Maybe<Array<Maybe<Property_Authentication_Deleted_Bool_Exp>>>
  authentication_id?: Maybe<String_Comparison_Exp>
  block_number?: Maybe<Int_Comparison_Exp>
  market?: Maybe<String_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  property?: Maybe<String_Comparison_Exp>
}

export enum Property_Authentication_Deleted_Constraint {
  PropertyAuthenticationDeletedPkey = 'property_authentication_deleted_pkey'
}

export type Property_Authentication_Deleted_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Deleted_Insert_Input = {
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
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
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
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
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Mutation_Response = {
  __typename?: 'property_authentication_deleted_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Authentication_Deleted>
}

export type Property_Authentication_Deleted_Obj_Rel_Insert_Input = {
  data: Property_Authentication_Deleted_Insert_Input
  on_conflict?: Maybe<Property_Authentication_Deleted_On_Conflict>
}

export type Property_Authentication_Deleted_On_Conflict = {
  constraint: Property_Authentication_Deleted_Constraint
  update_columns: Array<Property_Authentication_Deleted_Update_Column>
  where?: Maybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Property_Authentication_Deleted_Order_By = {
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
}

export enum Property_Authentication_Deleted_Select_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Deleted_Set_Input = {
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Deleted_Stddev_Fields = {
  __typename?: 'property_authentication_deleted_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Stddev_Pop_Fields = {
  __typename?: 'property_authentication_deleted_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Stddev_Samp_Fields = {
  __typename?: 'property_authentication_deleted_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Sum_Fields = {
  __typename?: 'property_authentication_deleted_sum_fields'
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Deleted_Sum_Order_By = {
  block_number?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Var_Samp_Fields = {
  __typename?: 'property_authentication_deleted_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Deleted_Variance_Fields = {
  __typename?: 'property_authentication_deleted_variance_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Deleted_Variance_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Insert_Input = {
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
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
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
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
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
}

export type Property_Authentication_Mutation_Response = {
  __typename?: 'property_authentication_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Authentication>
}

export type Property_Authentication_Obj_Rel_Insert_Input = {
  data: Property_Authentication_Insert_Input
  on_conflict?: Maybe<Property_Authentication_On_Conflict>
}

export type Property_Authentication_On_Conflict = {
  constraint: Property_Authentication_Constraint
  update_columns: Array<Property_Authentication_Update_Column>
  where?: Maybe<Property_Authentication_Bool_Exp>
}

export type Property_Authentication_Order_By = {
  authentication_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  market?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  property?: Maybe<Order_By>
}

export enum Property_Authentication_Select_Column {
  AuthenticationId = 'authentication_id',
  BlockNumber = 'block_number',
  Market = 'market',
  Metrics = 'metrics',
  Property = 'property'
}

export type Property_Authentication_Set_Input = {
  authentication_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  market?: Maybe<Scalars['String']>
  metrics?: Maybe<Scalars['String']>
  property?: Maybe<Scalars['String']>
}

export type Property_Authentication_Stddev_Fields = {
  __typename?: 'property_authentication_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Stddev_Pop_Fields = {
  __typename?: 'property_authentication_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Stddev_Samp_Fields = {
  __typename?: 'property_authentication_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Sum_Fields = {
  __typename?: 'property_authentication_sum_fields'
  block_number?: Maybe<Scalars['Int']>
}

export type Property_Authentication_Sum_Order_By = {
  block_number?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Var_Samp_Fields = {
  __typename?: 'property_authentication_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
}

export type Property_Authentication_Variance_Fields = {
  __typename?: 'property_authentication_variance_fields'
  block_number?: Maybe<Scalars['Float']>
}

export type Property_Authentication_Variance_Order_By = {
  block_number?: Maybe<Order_By>
}

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
  columns?: Maybe<Array<Property_Factory_Create_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

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

export type Property_Factory_Create_Arr_Rel_Insert_Input = {
  data: Array<Property_Factory_Create_Insert_Input>
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

export type Property_Factory_Create_Avg_Fields = {
  __typename?: 'property_factory_create_avg_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Avg_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

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

export enum Property_Factory_Create_Constraint {
  PropertyFactoryCreatePkey = 'property_factory_create_pkey'
}

export type Property_Factory_Create_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Insert_Input = {
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Mutation_Response = {
  __typename?: 'property_factory_create_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Property_Factory_Create>
}

export type Property_Factory_Create_Obj_Rel_Insert_Input = {
  data: Property_Factory_Create_Insert_Input
  on_conflict?: Maybe<Property_Factory_Create_On_Conflict>
}

export type Property_Factory_Create_On_Conflict = {
  constraint: Property_Factory_Create_Constraint
  update_columns: Array<Property_Factory_Create_Update_Column>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

export type Property_Factory_Create_Order_By = {
  block_number?: Maybe<Order_By>
  event_id?: Maybe<Order_By>
  from_address?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  property?: Maybe<Order_By>
  raw_data?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Scalars['Int']>
  event_id?: Maybe<Scalars['String']>
  from_address?: Maybe<Scalars['String']>
  log_index?: Maybe<Scalars['Int']>
  property?: Maybe<Scalars['String']>
  raw_data?: Maybe<Scalars['String']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Stddev_Fields = {
  __typename?: 'property_factory_create_stddev_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Stddev_Pop_Fields = {
  __typename?: 'property_factory_create_stddev_pop_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Pop_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Stddev_Samp_Fields = {
  __typename?: 'property_factory_create_stddev_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Stddev_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Sum_Fields = {
  __typename?: 'property_factory_create_sum_fields'
  block_number?: Maybe<Scalars['Int']>
  log_index?: Maybe<Scalars['Int']>
  transaction_index?: Maybe<Scalars['Int']>
}

export type Property_Factory_Create_Sum_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
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
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Var_Samp_Fields = {
  __typename?: 'property_factory_create_var_samp_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Var_Samp_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Property_Factory_Create_Variance_Fields = {
  __typename?: 'property_factory_create_variance_fields'
  block_number?: Maybe<Scalars['Float']>
  log_index?: Maybe<Scalars['Float']>
  transaction_index?: Maybe<Scalars['Float']>
}

export type Property_Factory_Create_Variance_Order_By = {
  block_number?: Maybe<Order_By>
  log_index?: Maybe<Order_By>
  transaction_index?: Maybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  allocator_allocation_result: Array<Allocator_Allocation_Result>
  allocator_allocation_result_aggregate: Allocator_Allocation_Result_Aggregate
  allocator_allocation_result_by_pk?: Maybe<Allocator_Allocation_Result>
  allocator_before_allocation: Array<Allocator_Before_Allocation>
  allocator_before_allocation_aggregate: Allocator_Before_Allocation_Aggregate
  allocator_before_allocation_by_pk?: Maybe<Allocator_Before_Allocation>
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
  pg_buffercache: Array<Pg_Buffercache>
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate
  pg_stat_statements: Array<Pg_Stat_Statements>
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate
  policy_factory_create: Array<Policy_Factory_Create>
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  property_authentication: Array<Property_Authentication>
  property_authentication_aggregate: Property_Authentication_Aggregate
  property_authentication_by_pk?: Maybe<Property_Authentication>
  property_authentication_deleted: Array<Property_Authentication_Deleted>
  property_authentication_deleted_aggregate: Property_Authentication_Deleted_Aggregate
  property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  property_factory_create: Array<Property_Factory_Create>
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  reward_calculation_result: Array<Reward_Calculation_Result>
  reward_calculation_result_aggregate: Reward_Calculation_Result_Aggregate
  reward_calculation_result_by_pk?: Maybe<Reward_Calculation_Result>
}

export type Query_RootAllocator_Allocation_ResultArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

export type Query_RootAllocator_Allocation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

export type Query_RootAllocator_Allocation_Result_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootAllocator_Before_AllocationArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

export type Query_RootAllocator_Before_Allocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

export type Query_RootAllocator_Before_Allocation_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootLockup_LockedupArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

export type Query_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

export type Query_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMarket_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

export type Query_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

export type Query_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMetrics_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

export type Query_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

export type Query_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootMetrics_Factory_DestroyArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Query_RootMetrics_Factory_Destroy_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Query_RootMetrics_Factory_Destroy_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootPg_BuffercacheArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

export type Query_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

export type Query_RootPg_Stat_StatementsArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

export type Query_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

export type Query_RootPolicy_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

export type Query_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

export type Query_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootProperty_AuthenticationArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Order_By>>
  where?: Maybe<Property_Authentication_Bool_Exp>
}

export type Query_RootProperty_Authentication_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Order_By>>
  where?: Maybe<Property_Authentication_Bool_Exp>
}

export type Query_RootProperty_Authentication_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Query_RootProperty_Authentication_DeletedArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: Maybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Query_RootProperty_Authentication_Deleted_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: Maybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Query_RootProperty_Authentication_Deleted_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Query_RootProperty_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

export type Query_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

export type Query_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Query_RootReward_Calculation_ResultArgs = {
  distinct_on?: Maybe<Array<Reward_Calculation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Reward_Calculation_Result_Order_By>>
  where?: Maybe<Reward_Calculation_Result_Bool_Exp>
}

export type Query_RootReward_Calculation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Reward_Calculation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Reward_Calculation_Result_Order_By>>
  where?: Maybe<Reward_Calculation_Result_Bool_Exp>
}

export type Query_RootReward_Calculation_Result_By_PkArgs = {
  alocator_allocation_result_event_id: Scalars['String']
}

export type Reward_Calculation_Result = {
  __typename?: 'reward_calculation_result'
  allocate_result: Scalars['numeric']
  alocator_allocation_result_event_id: Scalars['String']
  block_number: Scalars['Int']
  holder_reward: Scalars['numeric']
  lockup: Scalars['numeric']
  metrics: Scalars['String']
  policy: Scalars['String']
  staking_reward: Scalars['numeric']
}

export type Reward_Calculation_Result_Aggregate = {
  __typename?: 'reward_calculation_result_aggregate'
  aggregate?: Maybe<Reward_Calculation_Result_Aggregate_Fields>
  nodes: Array<Reward_Calculation_Result>
}

export type Reward_Calculation_Result_Aggregate_Fields = {
  __typename?: 'reward_calculation_result_aggregate_fields'
  avg?: Maybe<Reward_Calculation_Result_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Reward_Calculation_Result_Max_Fields>
  min?: Maybe<Reward_Calculation_Result_Min_Fields>
  stddev?: Maybe<Reward_Calculation_Result_Stddev_Fields>
  stddev_pop?: Maybe<Reward_Calculation_Result_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Reward_Calculation_Result_Stddev_Samp_Fields>
  sum?: Maybe<Reward_Calculation_Result_Sum_Fields>
  var_pop?: Maybe<Reward_Calculation_Result_Var_Pop_Fields>
  var_samp?: Maybe<Reward_Calculation_Result_Var_Samp_Fields>
  variance?: Maybe<Reward_Calculation_Result_Variance_Fields>
}

export type Reward_Calculation_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Reward_Calculation_Result_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type Reward_Calculation_Result_Aggregate_Order_By = {
  avg?: Maybe<Reward_Calculation_Result_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Reward_Calculation_Result_Max_Order_By>
  min?: Maybe<Reward_Calculation_Result_Min_Order_By>
  stddev?: Maybe<Reward_Calculation_Result_Stddev_Order_By>
  stddev_pop?: Maybe<Reward_Calculation_Result_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Reward_Calculation_Result_Stddev_Samp_Order_By>
  sum?: Maybe<Reward_Calculation_Result_Sum_Order_By>
  var_pop?: Maybe<Reward_Calculation_Result_Var_Pop_Order_By>
  var_samp?: Maybe<Reward_Calculation_Result_Var_Samp_Order_By>
  variance?: Maybe<Reward_Calculation_Result_Variance_Order_By>
}

export type Reward_Calculation_Result_Arr_Rel_Insert_Input = {
  data: Array<Reward_Calculation_Result_Insert_Input>
  on_conflict?: Maybe<Reward_Calculation_Result_On_Conflict>
}

export type Reward_Calculation_Result_Avg_Fields = {
  __typename?: 'reward_calculation_result_avg_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Avg_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Reward_Calculation_Result_Bool_Exp>>>
  _not?: Maybe<Reward_Calculation_Result_Bool_Exp>
  _or?: Maybe<Array<Maybe<Reward_Calculation_Result_Bool_Exp>>>
  allocate_result?: Maybe<Numeric_Comparison_Exp>
  alocator_allocation_result_event_id?: Maybe<String_Comparison_Exp>
  block_number?: Maybe<Int_Comparison_Exp>
  holder_reward?: Maybe<Numeric_Comparison_Exp>
  lockup?: Maybe<Numeric_Comparison_Exp>
  metrics?: Maybe<String_Comparison_Exp>
  policy?: Maybe<String_Comparison_Exp>
  staking_reward?: Maybe<Numeric_Comparison_Exp>
}

export enum Reward_Calculation_Result_Constraint {
  RewardCalculationResultPkey = 'reward_calculation_result_pkey'
}

export type Reward_Calculation_Result_Inc_Input = {
  block_number?: Maybe<Scalars['Int']>
}

export type Reward_Calculation_Result_Insert_Input = {
  allocate_result?: Maybe<Scalars['numeric']>
  alocator_allocation_result_event_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  holder_reward?: Maybe<Scalars['numeric']>
  lockup?: Maybe<Scalars['numeric']>
  metrics?: Maybe<Scalars['String']>
  policy?: Maybe<Scalars['String']>
  staking_reward?: Maybe<Scalars['numeric']>
}

export type Reward_Calculation_Result_Max_Fields = {
  __typename?: 'reward_calculation_result_max_fields'
  allocate_result?: Maybe<Scalars['numeric']>
  alocator_allocation_result_event_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  holder_reward?: Maybe<Scalars['numeric']>
  lockup?: Maybe<Scalars['numeric']>
  metrics?: Maybe<Scalars['String']>
  policy?: Maybe<Scalars['String']>
  staking_reward?: Maybe<Scalars['numeric']>
}

export type Reward_Calculation_Result_Max_Order_By = {
  allocate_result?: Maybe<Order_By>
  alocator_allocation_result_event_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  policy?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Min_Fields = {
  __typename?: 'reward_calculation_result_min_fields'
  allocate_result?: Maybe<Scalars['numeric']>
  alocator_allocation_result_event_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  holder_reward?: Maybe<Scalars['numeric']>
  lockup?: Maybe<Scalars['numeric']>
  metrics?: Maybe<Scalars['String']>
  policy?: Maybe<Scalars['String']>
  staking_reward?: Maybe<Scalars['numeric']>
}

export type Reward_Calculation_Result_Min_Order_By = {
  allocate_result?: Maybe<Order_By>
  alocator_allocation_result_event_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  policy?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Mutation_Response = {
  __typename?: 'reward_calculation_result_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Reward_Calculation_Result>
}

export type Reward_Calculation_Result_Obj_Rel_Insert_Input = {
  data: Reward_Calculation_Result_Insert_Input
  on_conflict?: Maybe<Reward_Calculation_Result_On_Conflict>
}

export type Reward_Calculation_Result_On_Conflict = {
  constraint: Reward_Calculation_Result_Constraint
  update_columns: Array<Reward_Calculation_Result_Update_Column>
  where?: Maybe<Reward_Calculation_Result_Bool_Exp>
}

export type Reward_Calculation_Result_Order_By = {
  allocate_result?: Maybe<Order_By>
  alocator_allocation_result_event_id?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  metrics?: Maybe<Order_By>
  policy?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export enum Reward_Calculation_Result_Select_Column {
  AllocateResult = 'allocate_result',
  AlocatorAllocationResultEventId = 'alocator_allocation_result_event_id',
  BlockNumber = 'block_number',
  HolderReward = 'holder_reward',
  Lockup = 'lockup',
  Metrics = 'metrics',
  Policy = 'policy',
  StakingReward = 'staking_reward'
}

export type Reward_Calculation_Result_Set_Input = {
  allocate_result?: Maybe<Scalars['numeric']>
  alocator_allocation_result_event_id?: Maybe<Scalars['String']>
  block_number?: Maybe<Scalars['Int']>
  holder_reward?: Maybe<Scalars['numeric']>
  lockup?: Maybe<Scalars['numeric']>
  metrics?: Maybe<Scalars['String']>
  policy?: Maybe<Scalars['String']>
  staking_reward?: Maybe<Scalars['numeric']>
}

export type Reward_Calculation_Result_Stddev_Fields = {
  __typename?: 'reward_calculation_result_stddev_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Stddev_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Stddev_Pop_Fields = {
  __typename?: 'reward_calculation_result_stddev_pop_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Stddev_Pop_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Stddev_Samp_Fields = {
  __typename?: 'reward_calculation_result_stddev_samp_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Stddev_Samp_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Sum_Fields = {
  __typename?: 'reward_calculation_result_sum_fields'
  allocate_result?: Maybe<Scalars['numeric']>
  block_number?: Maybe<Scalars['Int']>
  holder_reward?: Maybe<Scalars['numeric']>
  lockup?: Maybe<Scalars['numeric']>
  staking_reward?: Maybe<Scalars['numeric']>
}

export type Reward_Calculation_Result_Sum_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export enum Reward_Calculation_Result_Update_Column {
  AllocateResult = 'allocate_result',
  AlocatorAllocationResultEventId = 'alocator_allocation_result_event_id',
  BlockNumber = 'block_number',
  HolderReward = 'holder_reward',
  Lockup = 'lockup',
  Metrics = 'metrics',
  Policy = 'policy',
  StakingReward = 'staking_reward'
}

export type Reward_Calculation_Result_Var_Pop_Fields = {
  __typename?: 'reward_calculation_result_var_pop_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Var_Pop_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Var_Samp_Fields = {
  __typename?: 'reward_calculation_result_var_samp_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Var_Samp_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

export type Reward_Calculation_Result_Variance_Fields = {
  __typename?: 'reward_calculation_result_variance_fields'
  allocate_result?: Maybe<Scalars['Float']>
  block_number?: Maybe<Scalars['Float']>
  holder_reward?: Maybe<Scalars['Float']>
  lockup?: Maybe<Scalars['Float']>
  staking_reward?: Maybe<Scalars['Float']>
}

export type Reward_Calculation_Result_Variance_Order_By = {
  allocate_result?: Maybe<Order_By>
  block_number?: Maybe<Order_By>
  holder_reward?: Maybe<Order_By>
  lockup?: Maybe<Order_By>
  staking_reward?: Maybe<Order_By>
}

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

export type Subscription_Root = {
  __typename?: 'subscription_root'
  allocator_allocation_result: Array<Allocator_Allocation_Result>
  allocator_allocation_result_aggregate: Allocator_Allocation_Result_Aggregate
  allocator_allocation_result_by_pk?: Maybe<Allocator_Allocation_Result>
  allocator_before_allocation: Array<Allocator_Before_Allocation>
  allocator_before_allocation_aggregate: Allocator_Before_Allocation_Aggregate
  allocator_before_allocation_by_pk?: Maybe<Allocator_Before_Allocation>
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
  pg_buffercache: Array<Pg_Buffercache>
  pg_buffercache_aggregate: Pg_Buffercache_Aggregate
  pg_stat_statements: Array<Pg_Stat_Statements>
  pg_stat_statements_aggregate: Pg_Stat_Statements_Aggregate
  policy_factory_create: Array<Policy_Factory_Create>
  policy_factory_create_aggregate: Policy_Factory_Create_Aggregate
  policy_factory_create_by_pk?: Maybe<Policy_Factory_Create>
  property_authentication: Array<Property_Authentication>
  property_authentication_aggregate: Property_Authentication_Aggregate
  property_authentication_by_pk?: Maybe<Property_Authentication>
  property_authentication_deleted: Array<Property_Authentication_Deleted>
  property_authentication_deleted_aggregate: Property_Authentication_Deleted_Aggregate
  property_authentication_deleted_by_pk?: Maybe<Property_Authentication_Deleted>
  property_factory_create: Array<Property_Factory_Create>
  property_factory_create_aggregate: Property_Factory_Create_Aggregate
  property_factory_create_by_pk?: Maybe<Property_Factory_Create>
  reward_calculation_result: Array<Reward_Calculation_Result>
  reward_calculation_result_aggregate: Reward_Calculation_Result_Aggregate
  reward_calculation_result_by_pk?: Maybe<Reward_Calculation_Result>
}

export type Subscription_RootAllocator_Allocation_ResultArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

export type Subscription_RootAllocator_Allocation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Allocation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Allocation_Result_Order_By>>
  where?: Maybe<Allocator_Allocation_Result_Bool_Exp>
}

export type Subscription_RootAllocator_Allocation_Result_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootAllocator_Before_AllocationArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

export type Subscription_RootAllocator_Before_Allocation_AggregateArgs = {
  distinct_on?: Maybe<Array<Allocator_Before_Allocation_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Allocator_Before_Allocation_Order_By>>
  where?: Maybe<Allocator_Before_Allocation_Bool_Exp>
}

export type Subscription_RootAllocator_Before_Allocation_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootLockup_LockedupArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

export type Subscription_RootLockup_Lockedup_AggregateArgs = {
  distinct_on?: Maybe<Array<Lockup_Lockedup_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Lockup_Lockedup_Order_By>>
  where?: Maybe<Lockup_Lockedup_Bool_Exp>
}

export type Subscription_RootLockup_Lockedup_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMarket_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

export type Subscription_RootMarket_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Market_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Market_Factory_Create_Order_By>>
  where?: Maybe<Market_Factory_Create_Bool_Exp>
}

export type Subscription_RootMarket_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMetrics_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Create_Order_By>>
  where?: Maybe<Metrics_Factory_Create_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootMetrics_Factory_DestroyArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Destroy_AggregateArgs = {
  distinct_on?: Maybe<Array<Metrics_Factory_Destroy_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Metrics_Factory_Destroy_Order_By>>
  where?: Maybe<Metrics_Factory_Destroy_Bool_Exp>
}

export type Subscription_RootMetrics_Factory_Destroy_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootPg_BuffercacheArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

export type Subscription_RootPg_Buffercache_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Buffercache_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Buffercache_Order_By>>
  where?: Maybe<Pg_Buffercache_Bool_Exp>
}

export type Subscription_RootPg_Stat_StatementsArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

export type Subscription_RootPg_Stat_Statements_AggregateArgs = {
  distinct_on?: Maybe<Array<Pg_Stat_Statements_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Pg_Stat_Statements_Order_By>>
  where?: Maybe<Pg_Stat_Statements_Bool_Exp>
}

export type Subscription_RootPolicy_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

export type Subscription_RootPolicy_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Policy_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Policy_Factory_Create_Order_By>>
  where?: Maybe<Policy_Factory_Create_Bool_Exp>
}

export type Subscription_RootPolicy_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootProperty_AuthenticationArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Order_By>>
  where?: Maybe<Property_Authentication_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Order_By>>
  where?: Maybe<Property_Authentication_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Subscription_RootProperty_Authentication_DeletedArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: Maybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_Deleted_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Authentication_Deleted_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Authentication_Deleted_Order_By>>
  where?: Maybe<Property_Authentication_Deleted_Bool_Exp>
}

export type Subscription_RootProperty_Authentication_Deleted_By_PkArgs = {
  metrics: Scalars['String']
  property: Scalars['String']
}

export type Subscription_RootProperty_Factory_CreateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

export type Subscription_RootProperty_Factory_Create_AggregateArgs = {
  distinct_on?: Maybe<Array<Property_Factory_Create_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Property_Factory_Create_Order_By>>
  where?: Maybe<Property_Factory_Create_Bool_Exp>
}

export type Subscription_RootProperty_Factory_Create_By_PkArgs = {
  event_id: Scalars['String']
}

export type Subscription_RootReward_Calculation_ResultArgs = {
  distinct_on?: Maybe<Array<Reward_Calculation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Reward_Calculation_Result_Order_By>>
  where?: Maybe<Reward_Calculation_Result_Bool_Exp>
}

export type Subscription_RootReward_Calculation_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Reward_Calculation_Result_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Reward_Calculation_Result_Order_By>>
  where?: Maybe<Reward_Calculation_Result_Bool_Exp>
}

export type Subscription_RootReward_Calculation_Result_By_PkArgs = {
  alocator_allocation_result_event_id: Scalars['String']
}

export type AllocatorAllocationResultFragment = { __typename?: 'allocator_allocation_result' } & Pick<
  Allocator_Allocation_Result,
  | 'block_number'
  | 'arg_value'
  | 'event_id'
  | 'lockup_value'
  | 'log_index'
  | 'market'
  | 'metrics'
  | 'property'
  | 'raw_data'
  | 'result'
  | 'transaction_index'
>

export type PropertyFactoryCreateFragment = { __typename?: 'property_factory_create' } & Pick<
  Property_Factory_Create,
  'block_number' | 'event_id' | 'from_address' | 'log_index' | 'property' | 'raw_data' | 'transaction_index'
>

export type GetLastAllocatorAllocationResultQueryVariables = {
  propertyAddress: Scalars['String']
}

export type GetLastAllocatorAllocationResultQuery = { __typename?: 'query_root' } & {
  allocator_allocation_result: Array<
    { __typename?: 'allocator_allocation_result' } & Pick<
      Allocator_Allocation_Result,
      'market' | 'metrics' | 'block_number'
    >
  >
}

export type GetPropertyAuthenticationQueryVariables = {
  propertyAddress: Scalars['String']
}

export type GetPropertyAuthenticationQuery = { __typename?: 'query_root' } & {
  property_authentication: Array<
    { __typename?: 'property_authentication' } & Pick<Property_Authentication, 'authentication_id'>
  >
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

export type ListPropertyQueryVariables = {}

export type ListPropertyQuery = { __typename?: 'query_root' } & {
  property_factory_create: Array<{ __typename?: 'property_factory_create' } & PropertyFactoryCreateFragment>
}

export const AllocatorAllocationResultFragmentDoc = gql`
  fragment allocatorAllocationResult on allocator_allocation_result {
    block_number
    arg_value
    event_id
    lockup_value
    log_index
    market
    metrics
    property
    raw_data
    result
    transaction_index
  }
`
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
export const GetLastAllocatorAllocationResultDocument = gql`
  query getLastAllocatorAllocationResult($propertyAddress: String!) {
    allocator_allocation_result(
      limit: 1
      where: { property: { _eq: $propertyAddress } }
      order_by: { block_number: desc }
    ) {
      market
      metrics
      block_number
    }
  }
`

/**
 * __useGetLastAllocatorAllocationResultQuery__
 *
 * To run a query within a React component, call `useGetLastAllocatorAllocationResultQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLastAllocatorAllocationResultQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLastAllocatorAllocationResultQuery({
 *   variables: {
 *      propertyAddress: // value for 'propertyAddress'
 *   },
 * });
 */
export function useGetLastAllocatorAllocationResultQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetLastAllocatorAllocationResultQuery,
    GetLastAllocatorAllocationResultQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetLastAllocatorAllocationResultQuery,
    GetLastAllocatorAllocationResultQueryVariables
  >(GetLastAllocatorAllocationResultDocument, baseOptions)
}
export function useGetLastAllocatorAllocationResultLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetLastAllocatorAllocationResultQuery,
    GetLastAllocatorAllocationResultQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetLastAllocatorAllocationResultQuery,
    GetLastAllocatorAllocationResultQueryVariables
  >(GetLastAllocatorAllocationResultDocument, baseOptions)
}
export type GetLastAllocatorAllocationResultQueryHookResult = ReturnType<
  typeof useGetLastAllocatorAllocationResultQuery
>
export type GetLastAllocatorAllocationResultLazyQueryHookResult = ReturnType<
  typeof useGetLastAllocatorAllocationResultLazyQuery
>
export type GetLastAllocatorAllocationResultQueryResult = ApolloReactCommon.QueryResult<
  GetLastAllocatorAllocationResultQuery,
  GetLastAllocatorAllocationResultQueryVariables
>
export const GetPropertyAuthenticationDocument = gql`
  query getPropertyAuthentication($propertyAddress: String!) {
    property_authentication(where: { property: { _eq: $propertyAddress } }) {
      authentication_id
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
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetPropertyAuthenticationQuery,
    GetPropertyAuthenticationQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>(
    GetPropertyAuthenticationDocument,
    baseOptions
  )
}
export function useGetPropertyAuthenticationLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetPropertyAuthenticationQuery,
    GetPropertyAuthenticationQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<GetPropertyAuthenticationQuery, GetPropertyAuthenticationQueryVariables>(
    GetPropertyAuthenticationDocument,
    baseOptions
  )
}
export type GetPropertyAuthenticationQueryHookResult = ReturnType<typeof useGetPropertyAuthenticationQuery>
export type GetPropertyAuthenticationLazyQueryHookResult = ReturnType<typeof useGetPropertyAuthenticationLazyQuery>
export type GetPropertyAuthenticationQueryResult = ApolloReactCommon.QueryResult<
  GetPropertyAuthenticationQuery,
  GetPropertyAuthenticationQueryVariables
>
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
export const ListPropertyDocument = gql`
  query ListProperty {
    property_factory_create {
      ...propertyFactoryCreate
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
 *   },
 * });
 */
export function useListPropertyQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListPropertyQuery, ListPropertyQueryVariables>
) {
  return ApolloReactHooks.useQuery<ListPropertyQuery, ListPropertyQueryVariables>(ListPropertyDocument, baseOptions)
}
export function useListPropertyLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListPropertyQuery, ListPropertyQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<ListPropertyQuery, ListPropertyQueryVariables>(ListPropertyDocument, baseOptions)
}
export type ListPropertyQueryHookResult = ReturnType<typeof useListPropertyQuery>
export type ListPropertyLazyQueryHookResult = ReturnType<typeof useListPropertyLazyQuery>
export type ListPropertyQueryResult = ApolloReactCommon.QueryResult<ListPropertyQuery, ListPropertyQueryVariables>
