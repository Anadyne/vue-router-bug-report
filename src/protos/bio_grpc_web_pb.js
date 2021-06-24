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
const proto = require('./bio_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BioServiceClient =
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
proto.BioServicePromiseClient =
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
 *   !proto.UserMedBio>}
 */
const methodDescriptor_BioService_GetBioInfo = new grpc.web.MethodDescriptor(
  '/BioService/GetBioInfo',
  grpc.web.MethodType.UNARY,
  common_pb.UserId,
  proto.UserMedBio,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserMedBio.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UserId,
 *   !proto.UserMedBio>}
 */
const methodInfo_BioService_GetBioInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UserMedBio,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserMedBio.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UserMedBio)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserMedBio>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BioServiceClient.prototype.getBioInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BioService/GetBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_GetBioInfo,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserMedBio>}
 *     Promise that resolves to the response
 */
proto.BioServicePromiseClient.prototype.getBioInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BioService/GetBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_GetBioInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.BioInfo,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BioService_UpdBioInfo = new grpc.web.MethodDescriptor(
  '/BioService/UpdBioInfo',
  grpc.web.MethodType.UNARY,
  proto.BioInfo,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.BioInfo} request
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
 *   !proto.BioInfo,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_BioService_UpdBioInfo = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.BioInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.BioInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BioServiceClient.prototype.updBioInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BioService/UpdBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_UpdBioInfo,
      callback);
};


/**
 * @param {!proto.BioInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.BioServicePromiseClient.prototype.updBioInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BioService/UpdBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_UpdBioInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserId,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_BioService_RemoveBioInfo = new grpc.web.MethodDescriptor(
  '/BioService/RemoveBioInfo',
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
const methodInfo_BioService_RemoveBioInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.BioServiceClient.prototype.removeBioInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BioService/RemoveBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_RemoveBioInfo,
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
proto.BioServicePromiseClient.prototype.removeBioInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BioService/RemoveBioInfo',
      request,
      metadata || {},
      methodDescriptor_BioService_RemoveBioInfo);
};


module.exports = proto;

