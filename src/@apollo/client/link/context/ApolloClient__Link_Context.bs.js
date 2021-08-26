// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Context = require("@apollo/client/link/context");

var Js_ = {};

function setContext(prim) {
  return Context.setContext(prim);
}

function setContextAsync(fn) {
  return Context.setContext(fn);
}

var ContextLink = {
  make: setContext,
  makeAsync: setContextAsync
};

var ApolloLink;

var GraphQLRequest;

exports.ApolloLink = ApolloLink;
exports.GraphQLRequest = GraphQLRequest;
exports.Js_ = Js_;
exports.setContext = setContext;
exports.setContextAsync = setContextAsync;
exports.ContextLink = ContextLink;
/* @apollo/client/link/context Not a pure module */
