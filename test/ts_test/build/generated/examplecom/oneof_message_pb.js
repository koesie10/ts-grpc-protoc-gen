/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();
var othercom_external_child_message_pb = require('../othercom/external_child_message_pb.js');
goog.exportSymbol('proto.examplecom.OneOfMessage', null, global);
goog.exportSymbol('proto.examplecom.OneOfMessage.InternalChildMessage', null, global);
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
proto.examplecom.OneOfMessage = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, proto.examplecom.OneOfMessage.oneofGroups_);
};
goog.inherits(proto.examplecom.OneOfMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.examplecom.OneOfMessage.displayName = 'proto.examplecom.OneOfMessage';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.examplecom.OneOfMessage.oneofGroups_ = [[1, 2, 3, 4]];
/**
 * @enum {number}
 */
proto.examplecom.OneOfMessage.GroupCase = {
    GROUP_NOT_SET: 0,
    INTERNAL_CHILD_MESSAGE: 1,
    EXTERNAL_CHILD_MESSAGE: 2,
    MY_STRING: 3,
    MY_INT64: 4
};
/**
 * @return {proto.examplecom.OneOfMessage.GroupCase}
 */
proto.examplecom.OneOfMessage.prototype.getGroupCase = function () {
    return /** @type {proto.examplecom.OneOfMessage.GroupCase} */ (jspb.Message.computeOneofCase(this, proto.examplecom.OneOfMessage.oneofGroups_[0]));
};
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.examplecom.OneOfMessage.prototype.toObject = function (opt_includeInstance) {
        return proto.examplecom.OneOfMessage.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.examplecom.OneOfMessage} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.examplecom.OneOfMessage.toObject = function (includeInstance, msg) {
        var f, obj = {
            internalChildMessage: (f = msg.getInternalChildMessage()) && proto.examplecom.OneOfMessage.InternalChildMessage.toObject(includeInstance, f),
            externalChildMessage: (f = msg.getExternalChildMessage()) && othercom_external_child_message_pb.ExternalChildMessage.toObject(includeInstance, f),
            myString: jspb.Message.getFieldWithDefault(msg, 3, ""),
            myInt64: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.examplecom.OneOfMessage}
 */
proto.examplecom.OneOfMessage.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.examplecom.OneOfMessage;
    return proto.examplecom.OneOfMessage.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.OneOfMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.OneOfMessage}
 */
proto.examplecom.OneOfMessage.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = new proto.examplecom.OneOfMessage.InternalChildMessage;
                reader.readMessage(value, proto.examplecom.OneOfMessage.InternalChildMessage.deserializeBinaryFromReader);
                msg.setInternalChildMessage(value);
                break;
            case 2:
                var value = new othercom_external_child_message_pb.ExternalChildMessage;
                reader.readMessage(value, othercom_external_child_message_pb.ExternalChildMessage.deserializeBinaryFromReader);
                msg.setExternalChildMessage(value);
                break;
            case 3:
                var value = (reader.readString());
                msg.setMyString(value);
                break;
            case 4:
                var value = (reader.readInt64());
                msg.setMyInt64(value);
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
proto.examplecom.OneOfMessage.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.examplecom.OneOfMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.OneOfMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.examplecom.OneOfMessage.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getInternalChildMessage();
    if (f != null) {
        writer.writeMessage(1, f, proto.examplecom.OneOfMessage.InternalChildMessage.serializeBinaryToWriter);
    }
    f = message.getExternalChildMessage();
    if (f != null) {
        writer.writeMessage(2, f, othercom_external_child_message_pb.ExternalChildMessage.serializeBinaryToWriter);
    }
    f = /** @type {string} */ (jspb.Message.getField(message, 3));
    if (f != null) {
        writer.writeString(3, f);
    }
    f = /** @type {number} */ (jspb.Message.getField(message, 4));
    if (f != null) {
        writer.writeInt64(4, f);
    }
};
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
proto.examplecom.OneOfMessage.InternalChildMessage = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.examplecom.OneOfMessage.InternalChildMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    proto.examplecom.OneOfMessage.InternalChildMessage.displayName = 'proto.examplecom.OneOfMessage.InternalChildMessage';
}
if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto suitable for use in Soy templates.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
     * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
     *     for transitional soy proto support: http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.examplecom.OneOfMessage.InternalChildMessage.prototype.toObject = function (opt_includeInstance) {
        return proto.examplecom.OneOfMessage.InternalChildMessage.toObject(opt_includeInstance, this);
    };
    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Whether to include the JSPB
     *     instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.examplecom.OneOfMessage.InternalChildMessage} msg The msg instance to transform.
     * @return {!Object}
     */
    proto.examplecom.OneOfMessage.InternalChildMessage.toObject = function (includeInstance, msg) {
        var f, obj = {
            myString: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.examplecom.OneOfMessage.InternalChildMessage}
 */
proto.examplecom.OneOfMessage.InternalChildMessage.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.examplecom.OneOfMessage.InternalChildMessage;
    return proto.examplecom.OneOfMessage.InternalChildMessage.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.examplecom.OneOfMessage.InternalChildMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.examplecom.OneOfMessage.InternalChildMessage}
 */
proto.examplecom.OneOfMessage.InternalChildMessage.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = (reader.readString());
                msg.setMyString(value);
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
proto.examplecom.OneOfMessage.InternalChildMessage.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.examplecom.OneOfMessage.InternalChildMessage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.examplecom.OneOfMessage.InternalChildMessage} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.examplecom.OneOfMessage.InternalChildMessage.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getMyString();
    if (f.length > 0) {
        writer.writeString(1, f);
    }
};
/**
 * optional string my_string = 1;
 * @return {string}
 */
proto.examplecom.OneOfMessage.InternalChildMessage.prototype.getMyString = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};
/** @param {string} value */
proto.examplecom.OneOfMessage.InternalChildMessage.prototype.setMyString = function (value) {
    jspb.Message.setField(this, 1, value);
};
/**
 * optional InternalChildMessage internal_child_message = 1;
 * @return {?proto.examplecom.OneOfMessage.InternalChildMessage}
 */
proto.examplecom.OneOfMessage.prototype.getInternalChildMessage = function () {
    return /** @type{?proto.examplecom.OneOfMessage.InternalChildMessage} */ (jspb.Message.getWrapperField(this, proto.examplecom.OneOfMessage.InternalChildMessage, 1));
};
/** @param {?proto.examplecom.OneOfMessage.InternalChildMessage|undefined} value */
proto.examplecom.OneOfMessage.prototype.setInternalChildMessage = function (value) {
    jspb.Message.setOneofWrapperField(this, 1, proto.examplecom.OneOfMessage.oneofGroups_[0], value);
};
proto.examplecom.OneOfMessage.prototype.clearInternalChildMessage = function () {
    this.setInternalChildMessage(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.OneOfMessage.prototype.hasInternalChildMessage = function () {
    return jspb.Message.getField(this, 1) != null;
};
/**
 * optional othercom.ExternalChildMessage external_child_message = 2;
 * @return {?proto.othercom.ExternalChildMessage}
 */
proto.examplecom.OneOfMessage.prototype.getExternalChildMessage = function () {
    return /** @type{?proto.othercom.ExternalChildMessage} */ (jspb.Message.getWrapperField(this, othercom_external_child_message_pb.ExternalChildMessage, 2));
};
/** @param {?proto.othercom.ExternalChildMessage|undefined} value */
proto.examplecom.OneOfMessage.prototype.setExternalChildMessage = function (value) {
    jspb.Message.setOneofWrapperField(this, 2, proto.examplecom.OneOfMessage.oneofGroups_[0], value);
};
proto.examplecom.OneOfMessage.prototype.clearExternalChildMessage = function () {
    this.setExternalChildMessage(undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.OneOfMessage.prototype.hasExternalChildMessage = function () {
    return jspb.Message.getField(this, 2) != null;
};
/**
 * optional string my_string = 3;
 * @return {string}
 */
proto.examplecom.OneOfMessage.prototype.getMyString = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};
/** @param {string} value */
proto.examplecom.OneOfMessage.prototype.setMyString = function (value) {
    jspb.Message.setOneofField(this, 3, proto.examplecom.OneOfMessage.oneofGroups_[0], value);
};
proto.examplecom.OneOfMessage.prototype.clearMyString = function () {
    jspb.Message.setOneofField(this, 3, proto.examplecom.OneOfMessage.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.OneOfMessage.prototype.hasMyString = function () {
    return jspb.Message.getField(this, 3) != null;
};
/**
 * optional int64 my_int64 = 4;
 * @return {number}
 */
proto.examplecom.OneOfMessage.prototype.getMyInt64 = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};
/** @param {number} value */
proto.examplecom.OneOfMessage.prototype.setMyInt64 = function (value) {
    jspb.Message.setOneofField(this, 4, proto.examplecom.OneOfMessage.oneofGroups_[0], value);
};
proto.examplecom.OneOfMessage.prototype.clearMyInt64 = function () {
    jspb.Message.setOneofField(this, 4, proto.examplecom.OneOfMessage.oneofGroups_[0], undefined);
};
/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.examplecom.OneOfMessage.prototype.hasMyInt64 = function () {
    return jspb.Message.getField(this, 4) != null;
};
goog.object.extend(exports, proto.examplecom);
//# sourceMappingURL=oneof_message_pb.js.map