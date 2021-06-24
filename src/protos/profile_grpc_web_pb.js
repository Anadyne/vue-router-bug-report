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
const proto = require('./profile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ProfileServiceClient =
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
proto.ProfileServicePromiseClient =
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
 *   !proto.ProfileData>}
 */
const methodDescriptor_ProfileService_GetProfile = new grpc.web.MethodDescriptor(
  '/ProfileService/GetProfile',
  grpc.web.MethodType.UNARY,
  common_pb.UserId,
  proto.ProfileData,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProfileData.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserId,
 *   !proto.ProfileData>}
 */
const methodInfo_ProfileService_GetProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ProfileData,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ProfileData.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ProfileData)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ProfileData>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileServiceClient.prototype.getProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProfileService/GetProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_GetProfile,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ProfileData>}
 *     Promise that resolves to the response
 */
proto.ProfileServicePromiseClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProfileService/GetProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_GetProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ProfileReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProfileService_UpdProfile = new grpc.web.MethodDescriptor(
  '/ProfileService/UpdProfile',
  grpc.web.MethodType.UNARY,
  proto.ProfileReq,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ProfileReq} request
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
 *   !proto.ProfileReq,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ProfileService_UpdProfile = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.ProfileReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ProfileServiceClient.prototype.updProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProfileService/UpdProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_UpdProfile,
      callback);
};


/**
 * @param {!proto.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ProfileServicePromiseClient.prototype.updProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProfileService/UpdProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_UpdProfile);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ProfileService_RemoveProfile = new grpc.web.MethodDescriptor(
  '/ProfileService/RemoveProfile',
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
const methodInfo_ProfileService_RemoveProfile = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.ProfileServiceClient.prototype.removeProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ProfileService/RemoveProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_RemoveProfile,
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
proto.ProfileServicePromiseClient.prototype.removeProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ProfileService/RemoveProfile',
      request,
      metadata || {},
      methodDescriptor_ProfileService_RemoveProfile);
};


module.exports = proto;

