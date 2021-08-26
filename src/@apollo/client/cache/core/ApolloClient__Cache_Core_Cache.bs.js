// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Option = require("rescript/lib/js/belt_Option.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var ApolloClient__Utils = require("../../../../ApolloClient__Utils.bs.js");
var ApolloClient__Cache_Core_Types_DataProxy = require("./types/ApolloClient__Cache_Core_Types_DataProxy.bs.js");

var Js_ = {};

function preserveJsPropsAndContext(js, t) {
  return (function (js, t) {
            return Object.assign(js, t)
          })(js, t);
}

function fromJs(js) {
  var readFragment = function (Fragment, id, optimistic, fragmentName, param) {
    var safeParse = function (param) {
      return ApolloClient__Utils.safeParse(Fragment.parse, param);
    };
    return Belt_Option.map(Caml_option.nullable_to_opt(js.readFragment({
                        id: id,
                        fragment: Fragment.query,
                        fragmentName: fragmentName
                      }, optimistic !== undefined ? Caml_option.valFromOption(optimistic) : undefined)), safeParse);
  };
  var readQuery = function (Operation, id, $staropt$star, optimistic, variables) {
    var mapJsVariables = $staropt$star !== undefined ? $staropt$star : (function (prim) {
          return prim;
        });
    var safeParse = function (param) {
      return ApolloClient__Utils.safeParse(Operation.parse, param);
    };
    return Belt_Option.map(Caml_option.nullable_to_opt(js.readQuery(ApolloClient__Cache_Core_Types_DataProxy.Query.toJs({
                            query: Operation.query,
                            variables: variables,
                            id: id
                          }, mapJsVariables, Operation.serializeVariables), optimistic)), safeParse);
  };
  var writeFragment = function (Fragment, data, broadcast, id, fragmentName, param) {
    return js.writeFragment(ApolloClient__Cache_Core_Types_DataProxy.WriteFragmentOptions.toJs({
                    data: data,
                    broadcast: broadcast,
                    id: id,
                    fragment: Fragment.query,
                    fragmentName: fragmentName
                  }, Fragment.serialize));
  };
  var writeQuery = function (Operation, broadcast, data, id, $staropt$star, variables) {
    var mapJsVariables = $staropt$star !== undefined ? $staropt$star : (function (prim) {
          return prim;
        });
    return js.writeQuery(ApolloClient__Cache_Core_Types_DataProxy.WriteQueryOptions.toJs({
                    data: data,
                    broadcast: broadcast,
                    query: Operation.query,
                    variables: variables,
                    id: id
                  }, mapJsVariables, Operation.serialize, Operation.serializeVariables));
  };
  return preserveJsPropsAndContext(js, {
              rescript_readFragment: readFragment,
              rescript_readQuery: readQuery,
              rescript_writeFragment: writeFragment,
              rescript_writeQuery: writeQuery
            });
}

var ApolloCache = {
  Js_: Js_,
  preserveJsPropsAndContext: preserveJsPropsAndContext,
  fromJs: fromJs
};

var DataProxy;

var Types;

var Utils;

exports.DataProxy = DataProxy;
exports.Types = Types;
exports.Utils = Utils;
exports.ApolloCache = ApolloCache;
/* ApolloClient__Utils Not a pure module */
