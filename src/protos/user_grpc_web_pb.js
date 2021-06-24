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
const proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.UserServiceClient =
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
proto.UserServicePromiseClient =
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
 *   !proto.UserMedCommon>}
 */
const methodDescriptor_UserService_GetUserMedInfo = new grpc.web.MethodDescriptor(
  '/UserService/GetUserMedInfo',
  grpc.web.MethodType.UNARY,
  common_pb.UserId,
  proto.UserMedCommon,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserMedCommon.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserId,
 *   !proto.UserMedCommon>}
 */
const methodInfo_UserService_GetUserMedInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UserMedCommon,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserMedCommon.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UserMedCommon)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserMedCommon>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.getUserMedInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/GetUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUserMedInfo,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserMedCommon>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.getUserMedInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/GetUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_GetUserMedInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserMedInfo,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdUserMedInfo = new grpc.web.MethodDescriptor(
  '/UserService/UpdUserMedInfo',
  grpc.web.MethodType.UNARY,
  proto.UserMedInfo,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.UserMedInfo} request
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
 *   !proto.UserMedInfo,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdUserMedInfo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.UserMedInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.UserMedInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.updUserMedInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/UpdUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdUserMedInfo,
      callback);
};


/**
 * @param {!proto.UserMedInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.updUserMedInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/UpdUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdUserMedInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_RemoveUserMedInfo = new grpc.web.MethodDescriptor(
  '/UserService/RemoveUserMedInfo',
  grpc.web.MethodType.UNARY,
  common_pb.UserId,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.UserId} request
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
 *   !proto.UserId,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_RemoveUserMedInfo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.UserServiceClient.prototype.removeUserMedInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/UserService/RemoveUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_RemoveUserMedInfo,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.UserServicePromiseClient.prototype.removeUserMedInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/UserService/RemoveUserMedInfo',
      request,
      metadata || {},
      methodDescriptor_UserService_RemoveUserMedInfo);
};


module.exports = proto;

