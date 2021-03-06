// source: profile.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.Contacts', null, global);
goog.exportSymbol('proto.ProfileData', null, global);
goog.exportSymbol('proto.ProfileReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Contacts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.Contacts.repeatedFields_, null);
};
goog.inherits(proto.Contacts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Contacts.displayName = 'proto.Contacts';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProfileData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProfileData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProfileData.displayName = 'proto.ProfileData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ProfileReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ProfileReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ProfileReq.displayName = 'proto.ProfileReq';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Contacts.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Contacts.prototype.toObject = function(opt_includeInstance) {
  return proto.Contacts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Contacts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Contacts.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: jspb.Message.getFieldWithDefault(msg, 1, ""),
    phoneList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Contacts}
 */
proto.Contacts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Contacts;
  return proto.Contacts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Contacts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Contacts}
 */
proto.Contacts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPhone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Contacts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Contacts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Contacts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Contacts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPhoneList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string location = 1;
 * @return {string}
 */
proto.Contacts.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.Contacts} returns this
 */
proto.Contacts.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string phone = 2;
 * @return {!Array<string>}
 */
proto.Contacts.prototype.getPhoneList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.Contacts} returns this
 */
proto.Contacts.prototype.setPhoneList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.Contacts} returns this
 */
proto.Contacts.prototype.addPhone = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.Contacts} returns this
 */
proto.Contacts.prototype.clearPhoneList = function() {
  return this.setPhoneList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProfileData.prototype.toObject = function(opt_includeInstance) {
  return proto.ProfileData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProfileData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProfileData.toObject = function(includeInstance, msg) {
  var f, obj = {
    first: jspb.Message.getFieldWithDefault(msg, 1, ""),
    last: jspb.Message.getFieldWithDefault(msg, 2, ""),
    patronymic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 4, ""),
    birthdate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contacts: (f = msg.getContacts()) && proto.Contacts.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProfileData}
 */
proto.ProfileData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProfileData;
  return proto.ProfileData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProfileData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProfileData}
 */
proto.ProfileData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirst(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLast(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPatronymic(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSex(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    case 6:
      var value = new proto.Contacts;
      reader.readMessage(value,proto.Contacts.deserializeBinaryFromReader);
      msg.setContacts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProfileData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProfileData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProfileData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProfileData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirst();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLast();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPatronymic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSex();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContacts();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Contacts.serializeBinaryToWriter
    );
  }
};


/**
 * optional string first = 1;
 * @return {string}
 */
proto.ProfileData.prototype.getFirst = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.setFirst = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last = 2;
 * @return {string}
 */
proto.ProfileData.prototype.getLast = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.setLast = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string patronymic = 3;
 * @return {string}
 */
proto.ProfileData.prototype.getPatronymic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.setPatronymic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string sex = 4;
 * @return {string}
 */
proto.ProfileData.prototype.getSex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.setSex = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string birthdate = 5;
 * @return {string}
 */
proto.ProfileData.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Contacts contacts = 6;
 * @return {?proto.Contacts}
 */
proto.ProfileData.prototype.getContacts = function() {
  return /** @type{?proto.Contacts} */ (
    jspb.Message.getWrapperField(this, proto.Contacts, 6));
};


/**
 * @param {?proto.Contacts|undefined} value
 * @return {!proto.ProfileData} returns this
*/
proto.ProfileData.prototype.setContacts = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProfileData} returns this
 */
proto.ProfileData.prototype.clearContacts = function() {
  return this.setContacts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProfileData.prototype.hasContacts = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ProfileReq.prototype.toObject = function(opt_includeInstance) {
  return proto.ProfileReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ProfileReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProfileReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && common_pb.UserId.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.ProfileData.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ProfileReq}
 */
proto.ProfileReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ProfileReq;
  return proto.ProfileReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ProfileReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ProfileReq}
 */
proto.ProfileReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.UserId;
      reader.readMessage(value,common_pb.UserId.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ProfileData;
      reader.readMessage(value,proto.ProfileData.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ProfileReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ProfileReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ProfileReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ProfileReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.UserId.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ProfileData.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserId id = 1;
 * @return {?proto.UserId}
 */
proto.ProfileReq.prototype.getId = function() {
  return /** @type{?proto.UserId} */ (
    jspb.Message.getWrapperField(this, common_pb.UserId, 1));
};


/**
 * @param {?proto.UserId|undefined} value
 * @return {!proto.ProfileReq} returns this
*/
proto.ProfileReq.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProfileReq} returns this
 */
proto.ProfileReq.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProfileReq.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ProfileData data = 2;
 * @return {?proto.ProfileData}
 */
proto.ProfileReq.prototype.getData = function() {
  return /** @type{?proto.ProfileData} */ (
    jspb.Message.getWrapperField(this, proto.ProfileData, 2));
};


/**
 * @param {?proto.ProfileData|undefined} value
 * @return {!proto.ProfileReq} returns this
*/
proto.ProfileReq.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ProfileReq} returns this
 */
proto.ProfileReq.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ProfileReq.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto);
