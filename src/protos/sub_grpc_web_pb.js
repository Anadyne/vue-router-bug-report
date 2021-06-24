/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var common_pb = require('./common_pb.js')
const proto = require('./sub_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SubscriptionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.SubscriptionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserId,
 *   !proto.SubResp>}
 */
const methodDescriptor_SubscriptionService_GetSubs = new grpc.web.MethodDescriptor(
  '/SubscriptionService/GetSubs',
  grpc.web.MethodType.UNARY,
  common_pb.UserId,
  proto.SubResp,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubResp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserId,
 *   !proto.SubResp>}
 */
const methodInfo_SubscriptionService_GetSubs = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SubResp,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubResp.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SubResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubscriptionServiceClient.prototype.getSubs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubscriptionService/GetSubs',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_GetSubs,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubResp>}
 *     Promise that resolves to the response
 */
proto.SubscriptionServicePromiseClient.prototype.getSubs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubscriptionService/GetSubs',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_GetSubs);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SubUpdReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_SubscriptionService_UpdSubs = new grpc.web.MethodDescriptor(
  '/SubscriptionService/UpdSubs',
  grpc.web.MethodType.UNARY,
  proto.SubUpdReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.SubUpdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SubUpdReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_SubscriptionService_UpdSubs = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.SubUpdReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.SubUpdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.SubscriptionServiceClient.prototype.updSubs =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/SubscriptionService/UpdSubs',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_UpdSubs,
      callback);
};


/**
 * @param {!proto.SubUpdReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.SubscriptionServicePromiseClient.prototype.updSubs =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/SubscriptionService/UpdSubs',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_UpdSubs);
};


module.exports = proto;

