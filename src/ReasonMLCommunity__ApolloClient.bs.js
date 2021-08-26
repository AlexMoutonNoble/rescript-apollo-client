// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Client = require("@apollo/client");
var ApolloClient__Core_ApolloClient = require("./@apollo/client/core/ApolloClient__Core_ApolloClient.bs.js");
var ApolloClient__Link_Core_ApolloLink = require("./@apollo/client/link/core/ApolloClient__Link_Core_ApolloLink.bs.js");
var ApolloClient__React_Hooks_UseQuery = require("./@apollo/client/react/hooks/ApolloClient__React_Hooks_UseQuery.bs.js");
var ApolloClient__React_Hooks_UseMutation = require("./@apollo/client/react/hooks/ApolloClient__React_Hooks_UseMutation.bs.js");
var ApolloClient__React_Hooks_UseLazyQuery = require("./@apollo/client/react/hooks/ApolloClient__React_Hooks_UseLazyQuery.bs.js");
var ApolloClient__Cache_InMemory_ReactiveVars = require("./@apollo/client/cache/inmemory/ApolloClient__Cache_InMemory_ReactiveVars.bs.js");
var ApolloClient__React_Hooks_UseSubscription = require("./@apollo/client/react/hooks/ApolloClient__React_Hooks_UseSubscription.bs.js");

function useApolloClient(prim) {
  return Client.useApolloClient();
}

var React = {
  ApolloProvider: undefined,
  useApolloClient: useApolloClient,
  useMutation: ApolloClient__React_Hooks_UseMutation.useMutation,
  useMutationWithVariables: ApolloClient__React_Hooks_UseMutation.useMutationWithVariables,
  useLazyQuery: ApolloClient__React_Hooks_UseLazyQuery.useLazyQuery,
  useLazyQueryWithVariables: ApolloClient__React_Hooks_UseLazyQuery.useLazyQueryWithVariables,
  useQuery: ApolloClient__React_Hooks_UseQuery.useQuery,
  useSubscription: ApolloClient__React_Hooks_UseSubscription.useSubscription
};

var Cache = {
  InMemoryCache: undefined,
  makeVar: ApolloClient__Cache_InMemory_ReactiveVars.makeVar
};

function concat(prim0, prim1) {
  return Client.ApolloLink.concat(prim0, prim1);
}

function execute(prim0, prim1) {
  return Client.ApolloLink.execute(prim0, prim1);
}

function empty(prim) {
  return Client.ApolloLink.empty();
}

function from(prim) {
  return Client.ApolloLink.from(prim);
}

function split(prim0, prim1, prim2) {
  return Client.ApolloLink.split(prim0, prim1, prim2);
}

var Link = {
  ContextLink: undefined,
  ErrorLink: undefined,
  HttpLink: undefined,
  RetryLink: undefined,
  WebSocketLink: undefined,
  concat: concat,
  execute: execute,
  empty: empty,
  make: ApolloClient__Link_Core_ApolloLink.make,
  from: from,
  split: split
};

var Bindings = {
  Client: undefined,
  Graphql: undefined,
  SubscriptionTransportWs: undefined,
  ZenObservable: undefined
};

var GraphQL_PPX = {
  ExtendMutation: undefined,
  ExtendQuery: undefined,
  ExtendSubscription: undefined
};

var Types = {
  ApolloError: undefined,
  ApolloQueryResult: undefined,
  ApolloLink: undefined,
  ApolloCache: undefined,
  BaseSubscriptionOptions: undefined,
  ConnectionParamsOptions: undefined,
  DataProxy: undefined,
  ErrorPolicy: undefined,
  ErrorResponse: undefined,
  FetchPolicy: undefined,
  FetchPolicy__noCacheExtracted: undefined,
  FetchResult: undefined,
  FieldPolicy: undefined,
  FieldReadFunction: undefined,
  FieldMergeFunction: undefined,
  FragmentMatcher: undefined,
  GraphqlError: undefined,
  GraphQLRequest: undefined,
  KeyArgs: undefined,
  KeySpecifier: undefined,
  KeyFieldsFunction: undefined,
  LazyQueryHookOptions: undefined,
  MutationHookOptions: undefined,
  MutationOptions: undefined,
  MutationQueryReducersMap: undefined,
  MutationTuple: undefined,
  MutationTuple__noVariables: undefined,
  MutationUpdaterFn: undefined,
  Observable: undefined,
  ObservableQuery: undefined,
  OnSubscriptionDataOptions: undefined,
  Operation: undefined,
  OperationVariables: undefined,
  QueryHookOptions: undefined,
  QueryOptions: undefined,
  QueryTuple: undefined,
  QueryTuple__noVariables: undefined,
  QueryResult: undefined,
  PossibleTypesMap: undefined,
  PureQueryOptions: undefined,
  ReactiveVar: undefined,
  RefetchQueryDescription: undefined,
  RequestHandler: undefined,
  Resolvers: undefined,
  SubscriptionHookOptions: undefined,
  SubscriptionOptions: undefined,
  TypePolicies: undefined,
  TypePolicy: undefined,
  UriFunction: undefined,
  WatchQueryFetchPolicy: undefined,
  WatchQueryOptions: undefined
};

var make = ApolloClient__Core_ApolloClient.make;

var DefaultWatchQueryOptions;

var DefaultQueryOptions;

var DefaultMutateOptions;

var DefaultOptions;

var Utilities;

exports.make = make;
exports.DefaultWatchQueryOptions = DefaultWatchQueryOptions;
exports.DefaultQueryOptions = DefaultQueryOptions;
exports.DefaultMutateOptions = DefaultMutateOptions;
exports.DefaultOptions = DefaultOptions;
exports.React = React;
exports.Cache = Cache;
exports.Link = Link;
exports.Utilities = Utilities;
exports.Bindings = Bindings;
exports.GraphQL_PPX = GraphQL_PPX;
exports.Types = Types;
/* @apollo/client Not a pure module */
