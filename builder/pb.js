/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.otsimo = (function() {

    /**
     * Namespace otsimo.
     * @exports otsimo
     * @namespace
     */
    var otsimo = {};

    /**
     * LabelSelectorOperator enum.
     * @enum {string}
     * @property {number} In=0 In value
     * @property {number} NotIn=1 NotIn value
     * @property {number} Exists=2 Exists value
     * @property {number} DoesNotExist=3 DoesNotExist value
     * @property {number} Gt=4 Gt value
     * @property {number} Lt=5 Lt value
     */
    otsimo.LabelSelectorOperator = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "In"] = 0;
        values[valuesById[1] = "NotIn"] = 1;
        values[valuesById[2] = "Exists"] = 2;
        values[valuesById[3] = "DoesNotExist"] = 3;
        values[valuesById[4] = "Gt"] = 4;
        values[valuesById[5] = "Lt"] = 5;
        return values;
    })();

    otsimo.LabelSelectorRequirement = (function() {

        /**
         * Properties of a LabelSelectorRequirement.
         * @memberof otsimo
         * @interface ILabelSelectorRequirement
         * @property {string} [key] LabelSelectorRequirement key
         * @property {otsimo.LabelSelectorOperator} [operator] LabelSelectorRequirement operator
         * @property {Array.<string>} [values] LabelSelectorRequirement values
         */

        /**
         * Constructs a new LabelSelectorRequirement.
         * @memberof otsimo
         * @classdesc Represents a LabelSelectorRequirement.
         * @constructor
         * @param {otsimo.ILabelSelectorRequirement=} [properties] Properties to set
         */
        function LabelSelectorRequirement(properties) {
            this.values = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelSelectorRequirement key.
         * @member {string}key
         * @memberof otsimo.LabelSelectorRequirement
         * @instance
         */
        LabelSelectorRequirement.prototype.key = "";

        /**
         * LabelSelectorRequirement operator.
         * @member {otsimo.LabelSelectorOperator}operator
         * @memberof otsimo.LabelSelectorRequirement
         * @instance
         */
        LabelSelectorRequirement.prototype.operator = 0;

        /**
         * LabelSelectorRequirement values.
         * @member {Array.<string>}values
         * @memberof otsimo.LabelSelectorRequirement
         * @instance
         */
        LabelSelectorRequirement.prototype.values = $util.emptyArray;

        /**
         * Creates a new LabelSelectorRequirement instance using the specified properties.
         * @function create
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {otsimo.ILabelSelectorRequirement=} [properties] Properties to set
         * @returns {otsimo.LabelSelectorRequirement} LabelSelectorRequirement instance
         */
        LabelSelectorRequirement.create = function create(properties) {
            return new LabelSelectorRequirement(properties);
        };

        /**
         * Encodes the specified LabelSelectorRequirement message. Does not implicitly {@link otsimo.LabelSelectorRequirement.verify|verify} messages.
         * @function encode
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {otsimo.ILabelSelectorRequirement} message LabelSelectorRequirement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorRequirement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.operator != null && message.hasOwnProperty("operator"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.operator);
            if (message.values != null && message.values.length)
                for (var i = 0; i < message.values.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.values[i]);
            return writer;
        };

        /**
         * Encodes the specified LabelSelectorRequirement message, length delimited. Does not implicitly {@link otsimo.LabelSelectorRequirement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {otsimo.ILabelSelectorRequirement} message LabelSelectorRequirement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorRequirement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelSelectorRequirement message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.LabelSelectorRequirement} LabelSelectorRequirement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorRequirement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.LabelSelectorRequirement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.operator = reader.int32();
                    break;
                case 3:
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelSelectorRequirement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.LabelSelectorRequirement} LabelSelectorRequirement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorRequirement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelSelectorRequirement message.
         * @function verify
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelSelectorRequirement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.operator != null && message.hasOwnProperty("operator"))
                switch (message.operator) {
                default:
                    return "operator: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.values != null && message.hasOwnProperty("values")) {
                if (!Array.isArray(message.values))
                    return "values: array expected";
                for (var i = 0; i < message.values.length; ++i)
                    if (!$util.isString(message.values[i]))
                        return "values: string[] expected";
            }
            return null;
        };

        /**
         * Creates a LabelSelectorRequirement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.LabelSelectorRequirement} LabelSelectorRequirement
         */
        LabelSelectorRequirement.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.LabelSelectorRequirement)
                return object;
            var message = new $root.otsimo.LabelSelectorRequirement();
            if (object.key != null)
                message.key = String(object.key);
            switch (object.operator) {
            case "In":
            case 0:
                message.operator = 0;
                break;
            case "NotIn":
            case 1:
                message.operator = 1;
                break;
            case "Exists":
            case 2:
                message.operator = 2;
                break;
            case "DoesNotExist":
            case 3:
                message.operator = 3;
                break;
            case "Gt":
            case 4:
                message.operator = 4;
                break;
            case "Lt":
            case 5:
                message.operator = 5;
                break;
            }
            if (object.values) {
                if (!Array.isArray(object.values))
                    throw TypeError(".otsimo.LabelSelectorRequirement.values: array expected");
                message.values = [];
                for (var i = 0; i < object.values.length; ++i)
                    message.values[i] = String(object.values[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a LabelSelectorRequirement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.LabelSelectorRequirement
         * @static
         * @param {otsimo.LabelSelectorRequirement} message LabelSelectorRequirement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelSelectorRequirement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.values = [];
            if (options.defaults) {
                object.key = "";
                object.operator = options.enums === String ? "In" : 0;
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.operator != null && message.hasOwnProperty("operator"))
                object.operator = options.enums === String ? $root.otsimo.LabelSelectorOperator[message.operator] : message.operator;
            if (message.values && message.values.length) {
                object.values = [];
                for (var j = 0; j < message.values.length; ++j)
                    object.values[j] = message.values[j];
            }
            return object;
        };

        /**
         * Converts this LabelSelectorRequirement to JSON.
         * @function toJSON
         * @memberof otsimo.LabelSelectorRequirement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelSelectorRequirement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LabelSelectorRequirement;
    })();

    otsimo.LabelSelectorTerm = (function() {

        /**
         * Properties of a LabelSelectorTerm.
         * @memberof otsimo
         * @interface ILabelSelectorTerm
         * @property {Array.<otsimo.ILabelSelectorRequirement>} [expressions] LabelSelectorTerm expressions
         */

        /**
         * Constructs a new LabelSelectorTerm.
         * @memberof otsimo
         * @classdesc Represents a LabelSelectorTerm.
         * @constructor
         * @param {otsimo.ILabelSelectorTerm=} [properties] Properties to set
         */
        function LabelSelectorTerm(properties) {
            this.expressions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelSelectorTerm expressions.
         * @member {Array.<otsimo.ILabelSelectorRequirement>}expressions
         * @memberof otsimo.LabelSelectorTerm
         * @instance
         */
        LabelSelectorTerm.prototype.expressions = $util.emptyArray;

        /**
         * Creates a new LabelSelectorTerm instance using the specified properties.
         * @function create
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {otsimo.ILabelSelectorTerm=} [properties] Properties to set
         * @returns {otsimo.LabelSelectorTerm} LabelSelectorTerm instance
         */
        LabelSelectorTerm.create = function create(properties) {
            return new LabelSelectorTerm(properties);
        };

        /**
         * Encodes the specified LabelSelectorTerm message. Does not implicitly {@link otsimo.LabelSelectorTerm.verify|verify} messages.
         * @function encode
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {otsimo.ILabelSelectorTerm} message LabelSelectorTerm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorTerm.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.expressions != null && message.expressions.length)
                for (var i = 0; i < message.expressions.length; ++i)
                    $root.otsimo.LabelSelectorRequirement.encode(message.expressions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LabelSelectorTerm message, length delimited. Does not implicitly {@link otsimo.LabelSelectorTerm.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {otsimo.ILabelSelectorTerm} message LabelSelectorTerm message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorTerm.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelSelectorTerm message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.LabelSelectorTerm} LabelSelectorTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorTerm.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.LabelSelectorTerm();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.expressions && message.expressions.length))
                        message.expressions = [];
                    message.expressions.push($root.otsimo.LabelSelectorRequirement.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelSelectorTerm message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.LabelSelectorTerm} LabelSelectorTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorTerm.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelSelectorTerm message.
         * @function verify
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelSelectorTerm.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.expressions != null && message.hasOwnProperty("expressions")) {
                if (!Array.isArray(message.expressions))
                    return "expressions: array expected";
                for (var i = 0; i < message.expressions.length; ++i) {
                    var error = $root.otsimo.LabelSelectorRequirement.verify(message.expressions[i]);
                    if (error)
                        return "expressions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LabelSelectorTerm message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.LabelSelectorTerm} LabelSelectorTerm
         */
        LabelSelectorTerm.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.LabelSelectorTerm)
                return object;
            var message = new $root.otsimo.LabelSelectorTerm();
            if (object.expressions) {
                if (!Array.isArray(object.expressions))
                    throw TypeError(".otsimo.LabelSelectorTerm.expressions: array expected");
                message.expressions = [];
                for (var i = 0; i < object.expressions.length; ++i) {
                    if (typeof object.expressions[i] !== "object")
                        throw TypeError(".otsimo.LabelSelectorTerm.expressions: object expected");
                    message.expressions[i] = $root.otsimo.LabelSelectorRequirement.fromObject(object.expressions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LabelSelectorTerm message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.LabelSelectorTerm
         * @static
         * @param {otsimo.LabelSelectorTerm} message LabelSelectorTerm
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelSelectorTerm.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.expressions = [];
            if (message.expressions && message.expressions.length) {
                object.expressions = [];
                for (var j = 0; j < message.expressions.length; ++j)
                    object.expressions[j] = $root.otsimo.LabelSelectorRequirement.toObject(message.expressions[j], options);
            }
            return object;
        };

        /**
         * Converts this LabelSelectorTerm to JSON.
         * @function toJSON
         * @memberof otsimo.LabelSelectorTerm
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelSelectorTerm.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LabelSelectorTerm;
    })();

    otsimo.LabelSelector = (function() {

        /**
         * Properties of a LabelSelector.
         * @memberof otsimo
         * @interface ILabelSelector
         * @property {Array.<otsimo.ILabelSelectorTerm>} [terms] LabelSelector terms
         */

        /**
         * Constructs a new LabelSelector.
         * @memberof otsimo
         * @classdesc Represents a LabelSelector.
         * @constructor
         * @param {otsimo.ILabelSelector=} [properties] Properties to set
         */
        function LabelSelector(properties) {
            this.terms = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelSelector terms.
         * @member {Array.<otsimo.ILabelSelectorTerm>}terms
         * @memberof otsimo.LabelSelector
         * @instance
         */
        LabelSelector.prototype.terms = $util.emptyArray;

        /**
         * Creates a new LabelSelector instance using the specified properties.
         * @function create
         * @memberof otsimo.LabelSelector
         * @static
         * @param {otsimo.ILabelSelector=} [properties] Properties to set
         * @returns {otsimo.LabelSelector} LabelSelector instance
         */
        LabelSelector.create = function create(properties) {
            return new LabelSelector(properties);
        };

        /**
         * Encodes the specified LabelSelector message. Does not implicitly {@link otsimo.LabelSelector.verify|verify} messages.
         * @function encode
         * @memberof otsimo.LabelSelector
         * @static
         * @param {otsimo.ILabelSelector} message LabelSelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.terms != null && message.terms.length)
                for (var i = 0; i < message.terms.length; ++i)
                    $root.otsimo.LabelSelectorTerm.encode(message.terms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LabelSelector message, length delimited. Does not implicitly {@link otsimo.LabelSelector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.LabelSelector
         * @static
         * @param {otsimo.ILabelSelector} message LabelSelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelSelector message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.LabelSelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.LabelSelector} LabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelector.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.LabelSelector();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.terms && message.terms.length))
                        message.terms = [];
                    message.terms.push($root.otsimo.LabelSelectorTerm.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelSelector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.LabelSelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.LabelSelector} LabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelSelector message.
         * @function verify
         * @memberof otsimo.LabelSelector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelSelector.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.terms != null && message.hasOwnProperty("terms")) {
                if (!Array.isArray(message.terms))
                    return "terms: array expected";
                for (var i = 0; i < message.terms.length; ++i) {
                    var error = $root.otsimo.LabelSelectorTerm.verify(message.terms[i]);
                    if (error)
                        return "terms." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LabelSelector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.LabelSelector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.LabelSelector} LabelSelector
         */
        LabelSelector.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.LabelSelector)
                return object;
            var message = new $root.otsimo.LabelSelector();
            if (object.terms) {
                if (!Array.isArray(object.terms))
                    throw TypeError(".otsimo.LabelSelector.terms: array expected");
                message.terms = [];
                for (var i = 0; i < object.terms.length; ++i) {
                    if (typeof object.terms[i] !== "object")
                        throw TypeError(".otsimo.LabelSelector.terms: object expected");
                    message.terms[i] = $root.otsimo.LabelSelectorTerm.fromObject(object.terms[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LabelSelector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.LabelSelector
         * @static
         * @param {otsimo.LabelSelector} message LabelSelector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelSelector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.terms = [];
            if (message.terms && message.terms.length) {
                object.terms = [];
                for (var j = 0; j < message.terms.length; ++j)
                    object.terms[j] = $root.otsimo.LabelSelectorTerm.toObject(message.terms[j], options);
            }
            return object;
        };

        /**
         * Converts this LabelSelector to JSON.
         * @function toJSON
         * @memberof otsimo.LabelSelector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelSelector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LabelSelector;
    })();

    otsimo.SimpleLabelSelector = (function() {

        /**
         * Properties of a SimpleLabelSelector.
         * @memberof otsimo
         * @interface ISimpleLabelSelector
         * @property {Object.<string,string>} [matchLabels] SimpleLabelSelector matchLabels
         */

        /**
         * Constructs a new SimpleLabelSelector.
         * @memberof otsimo
         * @classdesc Represents a SimpleLabelSelector.
         * @constructor
         * @param {otsimo.ISimpleLabelSelector=} [properties] Properties to set
         */
        function SimpleLabelSelector(properties) {
            this.matchLabels = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SimpleLabelSelector matchLabels.
         * @member {Object.<string,string>}matchLabels
         * @memberof otsimo.SimpleLabelSelector
         * @instance
         */
        SimpleLabelSelector.prototype.matchLabels = $util.emptyObject;

        /**
         * Creates a new SimpleLabelSelector instance using the specified properties.
         * @function create
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {otsimo.ISimpleLabelSelector=} [properties] Properties to set
         * @returns {otsimo.SimpleLabelSelector} SimpleLabelSelector instance
         */
        SimpleLabelSelector.create = function create(properties) {
            return new SimpleLabelSelector(properties);
        };

        /**
         * Encodes the specified SimpleLabelSelector message. Does not implicitly {@link otsimo.SimpleLabelSelector.verify|verify} messages.
         * @function encode
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {otsimo.ISimpleLabelSelector} message SimpleLabelSelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimpleLabelSelector.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.matchLabels != null && message.hasOwnProperty("matchLabels"))
                for (var keys = Object.keys(message.matchLabels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.matchLabels[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SimpleLabelSelector message, length delimited. Does not implicitly {@link otsimo.SimpleLabelSelector.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {otsimo.ISimpleLabelSelector} message SimpleLabelSelector message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SimpleLabelSelector.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SimpleLabelSelector message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.SimpleLabelSelector} SimpleLabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimpleLabelSelector.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.SimpleLabelSelector(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.matchLabels === $util.emptyObject)
                        message.matchLabels = {};
                    key = reader.string();
                    reader.pos++;
                    message.matchLabels[key] = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SimpleLabelSelector message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.SimpleLabelSelector} SimpleLabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SimpleLabelSelector.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SimpleLabelSelector message.
         * @function verify
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SimpleLabelSelector.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.matchLabels != null && message.hasOwnProperty("matchLabels")) {
                if (!$util.isObject(message.matchLabels))
                    return "matchLabels: object expected";
                var key = Object.keys(message.matchLabels);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.matchLabels[key[i]]))
                        return "matchLabels: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a SimpleLabelSelector message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.SimpleLabelSelector} SimpleLabelSelector
         */
        SimpleLabelSelector.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.SimpleLabelSelector)
                return object;
            var message = new $root.otsimo.SimpleLabelSelector();
            if (object.matchLabels) {
                if (typeof object.matchLabels !== "object")
                    throw TypeError(".otsimo.SimpleLabelSelector.matchLabels: object expected");
                message.matchLabels = {};
                for (var keys = Object.keys(object.matchLabels), i = 0; i < keys.length; ++i)
                    message.matchLabels[keys[i]] = String(object.matchLabels[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a SimpleLabelSelector message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.SimpleLabelSelector
         * @static
         * @param {otsimo.SimpleLabelSelector} message SimpleLabelSelector
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SimpleLabelSelector.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.matchLabels = {};
            var keys2;
            if (message.matchLabels && (keys2 = Object.keys(message.matchLabels)).length) {
                object.matchLabels = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.matchLabels[keys2[j]] = message.matchLabels[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this SimpleLabelSelector to JSON.
         * @function toJSON
         * @memberof otsimo.SimpleLabelSelector
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SimpleLabelSelector.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SimpleLabelSelector;
    })();

    otsimo.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof otsimo
         * @interface IPoint
         * @property {number} [x] Point x
         * @property {number} [y] Point y
         */

        /**
         * Constructs a new Point.
         * @memberof otsimo
         * @classdesc Represents a Point.
         * @constructor
         * @param {otsimo.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point x.
         * @member {number}x
         * @memberof otsimo.Point
         * @instance
         */
        Point.prototype.x = 0;

        /**
         * Point y.
         * @member {number}y
         * @memberof otsimo.Point
         * @instance
         */
        Point.prototype.y = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof otsimo.Point
         * @static
         * @param {otsimo.IPoint=} [properties] Properties to set
         * @returns {otsimo.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link otsimo.Point.verify|verify} messages.
         * @function encode
         * @memberof otsimo.Point
         * @static
         * @param {otsimo.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && message.hasOwnProperty("x"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
            if (message.y != null && message.hasOwnProperty("y"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link otsimo.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.Point
         * @static
         * @param {otsimo.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.Point();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.x = reader.double();
                    break;
                case 2:
                    message.y = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof otsimo.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.Point)
                return object;
            var message = new $root.otsimo.Point();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.Point
         * @static
         * @param {otsimo.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof otsimo.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    otsimo.VectorArray = (function() {

        /**
         * Properties of a VectorArray.
         * @memberof otsimo
         * @interface IVectorArray
         * @property {Array.<otsimo.IPoint>} [points] VectorArray points
         */

        /**
         * Constructs a new VectorArray.
         * @memberof otsimo
         * @classdesc Represents a VectorArray.
         * @constructor
         * @param {otsimo.IVectorArray=} [properties] Properties to set
         */
        function VectorArray(properties) {
            this.points = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VectorArray points.
         * @member {Array.<otsimo.IPoint>}points
         * @memberof otsimo.VectorArray
         * @instance
         */
        VectorArray.prototype.points = $util.emptyArray;

        /**
         * Creates a new VectorArray instance using the specified properties.
         * @function create
         * @memberof otsimo.VectorArray
         * @static
         * @param {otsimo.IVectorArray=} [properties] Properties to set
         * @returns {otsimo.VectorArray} VectorArray instance
         */
        VectorArray.create = function create(properties) {
            return new VectorArray(properties);
        };

        /**
         * Encodes the specified VectorArray message. Does not implicitly {@link otsimo.VectorArray.verify|verify} messages.
         * @function encode
         * @memberof otsimo.VectorArray
         * @static
         * @param {otsimo.IVectorArray} message VectorArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VectorArray.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.points != null && message.points.length)
                for (var i = 0; i < message.points.length; ++i)
                    $root.otsimo.Point.encode(message.points[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VectorArray message, length delimited. Does not implicitly {@link otsimo.VectorArray.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.VectorArray
         * @static
         * @param {otsimo.IVectorArray} message VectorArray message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VectorArray.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VectorArray message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.VectorArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.VectorArray} VectorArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VectorArray.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.VectorArray();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.points && message.points.length))
                        message.points = [];
                    message.points.push($root.otsimo.Point.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VectorArray message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.VectorArray
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.VectorArray} VectorArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VectorArray.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VectorArray message.
         * @function verify
         * @memberof otsimo.VectorArray
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VectorArray.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.points != null && message.hasOwnProperty("points")) {
                if (!Array.isArray(message.points))
                    return "points: array expected";
                for (var i = 0; i < message.points.length; ++i) {
                    var error = $root.otsimo.Point.verify(message.points[i]);
                    if (error)
                        return "points." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VectorArray message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.VectorArray
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.VectorArray} VectorArray
         */
        VectorArray.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.VectorArray)
                return object;
            var message = new $root.otsimo.VectorArray();
            if (object.points) {
                if (!Array.isArray(object.points))
                    throw TypeError(".otsimo.VectorArray.points: array expected");
                message.points = [];
                for (var i = 0; i < object.points.length; ++i) {
                    if (typeof object.points[i] !== "object")
                        throw TypeError(".otsimo.VectorArray.points: object expected");
                    message.points[i] = $root.otsimo.Point.fromObject(object.points[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VectorArray message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.VectorArray
         * @static
         * @param {otsimo.VectorArray} message VectorArray
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VectorArray.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.points = [];
            if (message.points && message.points.length) {
                object.points = [];
                for (var j = 0; j < message.points.length; ++j)
                    object.points[j] = $root.otsimo.Point.toObject(message.points[j], options);
            }
            return object;
        };

        /**
         * Converts this VectorArray to JSON.
         * @function toJSON
         * @memberof otsimo.VectorArray
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VectorArray.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VectorArray;
    })();

    otsimo.DrawSteps = (function() {

        /**
         * Properties of a DrawSteps.
         * @memberof otsimo
         * @interface IDrawSteps
         * @property {Array.<otsimo.IVectorArray>} [steps] DrawSteps steps
         */

        /**
         * Constructs a new DrawSteps.
         * @memberof otsimo
         * @classdesc Represents a DrawSteps.
         * @constructor
         * @param {otsimo.IDrawSteps=} [properties] Properties to set
         */
        function DrawSteps(properties) {
            this.steps = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DrawSteps steps.
         * @member {Array.<otsimo.IVectorArray>}steps
         * @memberof otsimo.DrawSteps
         * @instance
         */
        DrawSteps.prototype.steps = $util.emptyArray;

        /**
         * Creates a new DrawSteps instance using the specified properties.
         * @function create
         * @memberof otsimo.DrawSteps
         * @static
         * @param {otsimo.IDrawSteps=} [properties] Properties to set
         * @returns {otsimo.DrawSteps} DrawSteps instance
         */
        DrawSteps.create = function create(properties) {
            return new DrawSteps(properties);
        };

        /**
         * Encodes the specified DrawSteps message. Does not implicitly {@link otsimo.DrawSteps.verify|verify} messages.
         * @function encode
         * @memberof otsimo.DrawSteps
         * @static
         * @param {otsimo.IDrawSteps} message DrawSteps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawSteps.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.steps != null && message.steps.length)
                for (var i = 0; i < message.steps.length; ++i)
                    $root.otsimo.VectorArray.encode(message.steps[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DrawSteps message, length delimited. Does not implicitly {@link otsimo.DrawSteps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.DrawSteps
         * @static
         * @param {otsimo.IDrawSteps} message DrawSteps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DrawSteps.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DrawSteps message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.DrawSteps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.DrawSteps} DrawSteps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawSteps.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.DrawSteps();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.steps && message.steps.length))
                        message.steps = [];
                    message.steps.push($root.otsimo.VectorArray.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DrawSteps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.DrawSteps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.DrawSteps} DrawSteps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DrawSteps.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DrawSteps message.
         * @function verify
         * @memberof otsimo.DrawSteps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DrawSteps.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.steps != null && message.hasOwnProperty("steps")) {
                if (!Array.isArray(message.steps))
                    return "steps: array expected";
                for (var i = 0; i < message.steps.length; ++i) {
                    var error = $root.otsimo.VectorArray.verify(message.steps[i]);
                    if (error)
                        return "steps." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DrawSteps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.DrawSteps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.DrawSteps} DrawSteps
         */
        DrawSteps.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.DrawSteps)
                return object;
            var message = new $root.otsimo.DrawSteps();
            if (object.steps) {
                if (!Array.isArray(object.steps))
                    throw TypeError(".otsimo.DrawSteps.steps: array expected");
                message.steps = [];
                for (var i = 0; i < object.steps.length; ++i) {
                    if (typeof object.steps[i] !== "object")
                        throw TypeError(".otsimo.DrawSteps.steps: object expected");
                    message.steps[i] = $root.otsimo.VectorArray.fromObject(object.steps[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a DrawSteps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.DrawSteps
         * @static
         * @param {otsimo.DrawSteps} message DrawSteps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DrawSteps.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.steps = [];
            if (message.steps && message.steps.length) {
                object.steps = [];
                for (var j = 0; j < message.steps.length; ++j)
                    object.steps[j] = $root.otsimo.VectorArray.toObject(message.steps[j], options);
            }
            return object;
        };

        /**
         * Converts this DrawSteps to JSON.
         * @function toJSON
         * @memberof otsimo.DrawSteps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DrawSteps.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DrawSteps;
    })();

    otsimo.AppMetadata = (function() {

        /**
         * Properties of an AppMetadata.
         * @memberof otsimo
         * @interface IAppMetadata
         * @property {string} [visibleName] AppMetadata visibleName
         * @property {string} [summary] AppMetadata summary
         * @property {string} [description] AppMetadata description
         * @property {string} [logo] AppMetadata logo
         * @property {string} [icon] AppMetadata icon
         * @property {Array.<string>} [images] AppMetadata images
         * @property {Array.<string>} [keywords] AppMetadata keywords
         * @property {string} [infoSlug] AppMetadata infoSlug
         */

        /**
         * Constructs a new AppMetadata.
         * @memberof otsimo
         * @classdesc Represents an AppMetadata.
         * @constructor
         * @param {otsimo.IAppMetadata=} [properties] Properties to set
         */
        function AppMetadata(properties) {
            this.images = [];
            this.keywords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppMetadata visibleName.
         * @member {string}visibleName
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.visibleName = "";

        /**
         * AppMetadata summary.
         * @member {string}summary
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.summary = "";

        /**
         * AppMetadata description.
         * @member {string}description
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.description = "";

        /**
         * AppMetadata logo.
         * @member {string}logo
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.logo = "";

        /**
         * AppMetadata icon.
         * @member {string}icon
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.icon = "";

        /**
         * AppMetadata images.
         * @member {Array.<string>}images
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.images = $util.emptyArray;

        /**
         * AppMetadata keywords.
         * @member {Array.<string>}keywords
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.keywords = $util.emptyArray;

        /**
         * AppMetadata infoSlug.
         * @member {string}infoSlug
         * @memberof otsimo.AppMetadata
         * @instance
         */
        AppMetadata.prototype.infoSlug = "";

        /**
         * Creates a new AppMetadata instance using the specified properties.
         * @function create
         * @memberof otsimo.AppMetadata
         * @static
         * @param {otsimo.IAppMetadata=} [properties] Properties to set
         * @returns {otsimo.AppMetadata} AppMetadata instance
         */
        AppMetadata.create = function create(properties) {
            return new AppMetadata(properties);
        };

        /**
         * Encodes the specified AppMetadata message. Does not implicitly {@link otsimo.AppMetadata.verify|verify} messages.
         * @function encode
         * @memberof otsimo.AppMetadata
         * @static
         * @param {otsimo.IAppMetadata} message AppMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.visibleName != null && message.hasOwnProperty("visibleName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.visibleName);
            if (message.summary != null && message.hasOwnProperty("summary"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.summary);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.description);
            if (message.logo != null && message.hasOwnProperty("logo"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.logo);
            if (message.icon != null && message.hasOwnProperty("icon"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.icon);
            if (message.images != null && message.images.length)
                for (var i = 0; i < message.images.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.images[i]);
            if (message.keywords != null && message.keywords.length)
                for (var i = 0; i < message.keywords.length; ++i)
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.keywords[i]);
            if (message.infoSlug != null && message.hasOwnProperty("infoSlug"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.infoSlug);
            return writer;
        };

        /**
         * Encodes the specified AppMetadata message, length delimited. Does not implicitly {@link otsimo.AppMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.AppMetadata
         * @static
         * @param {otsimo.IAppMetadata} message AppMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.AppMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.AppMetadata} AppMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.AppMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.visibleName = reader.string();
                    break;
                case 3:
                    message.summary = reader.string();
                    break;
                case 4:
                    message.description = reader.string();
                    break;
                case 5:
                    message.logo = reader.string();
                    break;
                case 6:
                    message.icon = reader.string();
                    break;
                case 7:
                    if (!(message.images && message.images.length))
                        message.images = [];
                    message.images.push(reader.string());
                    break;
                case 8:
                    if (!(message.keywords && message.keywords.length))
                        message.keywords = [];
                    message.keywords.push(reader.string());
                    break;
                case 9:
                    message.infoSlug = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.AppMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.AppMetadata} AppMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppMetadata message.
         * @function verify
         * @memberof otsimo.AppMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.visibleName != null && message.hasOwnProperty("visibleName"))
                if (!$util.isString(message.visibleName))
                    return "visibleName: string expected";
            if (message.summary != null && message.hasOwnProperty("summary"))
                if (!$util.isString(message.summary))
                    return "summary: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.logo != null && message.hasOwnProperty("logo"))
                if (!$util.isString(message.logo))
                    return "logo: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.images != null && message.hasOwnProperty("images")) {
                if (!Array.isArray(message.images))
                    return "images: array expected";
                for (var i = 0; i < message.images.length; ++i)
                    if (!$util.isString(message.images[i]))
                        return "images: string[] expected";
            }
            if (message.keywords != null && message.hasOwnProperty("keywords")) {
                if (!Array.isArray(message.keywords))
                    return "keywords: array expected";
                for (var i = 0; i < message.keywords.length; ++i)
                    if (!$util.isString(message.keywords[i]))
                        return "keywords: string[] expected";
            }
            if (message.infoSlug != null && message.hasOwnProperty("infoSlug"))
                if (!$util.isString(message.infoSlug))
                    return "infoSlug: string expected";
            return null;
        };

        /**
         * Creates an AppMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.AppMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.AppMetadata} AppMetadata
         */
        AppMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.AppMetadata)
                return object;
            var message = new $root.otsimo.AppMetadata();
            if (object.visibleName != null)
                message.visibleName = String(object.visibleName);
            if (object.summary != null)
                message.summary = String(object.summary);
            if (object.description != null)
                message.description = String(object.description);
            if (object.logo != null)
                message.logo = String(object.logo);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.images) {
                if (!Array.isArray(object.images))
                    throw TypeError(".otsimo.AppMetadata.images: array expected");
                message.images = [];
                for (var i = 0; i < object.images.length; ++i)
                    message.images[i] = String(object.images[i]);
            }
            if (object.keywords) {
                if (!Array.isArray(object.keywords))
                    throw TypeError(".otsimo.AppMetadata.keywords: array expected");
                message.keywords = [];
                for (var i = 0; i < object.keywords.length; ++i)
                    message.keywords[i] = String(object.keywords[i]);
            }
            if (object.infoSlug != null)
                message.infoSlug = String(object.infoSlug);
            return message;
        };

        /**
         * Creates a plain object from an AppMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.AppMetadata
         * @static
         * @param {otsimo.AppMetadata} message AppMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.images = [];
                object.keywords = [];
            }
            if (options.defaults) {
                object.visibleName = "";
                object.summary = "";
                object.description = "";
                object.logo = "";
                object.icon = "";
                object.infoSlug = "";
            }
            if (message.visibleName != null && message.hasOwnProperty("visibleName"))
                object.visibleName = message.visibleName;
            if (message.summary != null && message.hasOwnProperty("summary"))
                object.summary = message.summary;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.logo != null && message.hasOwnProperty("logo"))
                object.logo = message.logo;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.images && message.images.length) {
                object.images = [];
                for (var j = 0; j < message.images.length; ++j)
                    object.images[j] = message.images[j];
            }
            if (message.keywords && message.keywords.length) {
                object.keywords = [];
                for (var j = 0; j < message.keywords.length; ++j)
                    object.keywords[j] = message.keywords[j];
            }
            if (message.infoSlug != null && message.hasOwnProperty("infoSlug"))
                object.infoSlug = message.infoSlug;
            return object;
        };

        /**
         * Converts this AppMetadata to JSON.
         * @function toJSON
         * @memberof otsimo.AppMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppMetadata;
    })();

    /**
     * AccessMode enum.
     * @enum {string}
     * @property {number} PUBLIC=0 PUBLIC value
     * @property {number} OWNER=1 OWNER value
     */
    otsimo.AccessMode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PUBLIC"] = 0;
        values[valuesById[1] = "OWNER"] = 1;
        return values;
    })();

    /**
     * ComponentType enum.
     * @enum {string}
     * @property {number} TEXT=0 TEXT value
     * @property {number} IMAGE=1 IMAGE value
     * @property {number} AUDIO=2 AUDIO value
     * @property {number} COLOR=3 COLOR value
     * @property {number} NUMBER=4 NUMBER value
     * @property {number} VIDEO=5 VIDEO value
     * @property {number} FILE=6 FILE value
     * @property {number} VECTOR_ARRAY=7 VECTOR_ARRAY value
     * @property {number} DRAW_STEPS=8 DRAW_STEPS value
     * @property {number} METADATA=9 METADATA value
     * @property {number} I18N=10 I18N value
     */
    otsimo.ComponentType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TEXT"] = 0;
        values[valuesById[1] = "IMAGE"] = 1;
        values[valuesById[2] = "AUDIO"] = 2;
        values[valuesById[3] = "COLOR"] = 3;
        values[valuesById[4] = "NUMBER"] = 4;
        values[valuesById[5] = "VIDEO"] = 5;
        values[valuesById[6] = "FILE"] = 6;
        values[valuesById[7] = "VECTOR_ARRAY"] = 7;
        values[valuesById[8] = "DRAW_STEPS"] = 8;
        values[valuesById[9] = "METADATA"] = 9;
        values[valuesById[10] = "I18N"] = 10;
        return values;
    })();

    otsimo.Component = (function() {

        /**
         * Properties of a Component.
         * @memberof otsimo
         * @interface IComponent
         * @property {string} [id] Component id
         * @property {string} [description] Component description
         * @property {otsimo.ComponentType} [type] Component type
         * @property {string} [key] Component key
         * @property {otsimo.Component.IValue} [value] Component value
         * @property {Array.<string>} [locales] Component locales
         * @property {Object.<string,string>} [labels] Component labels
         * @property {otsimo.AccessMode} [accessMode] Component accessMode
         * @property {string} [createdBy] Component createdBy
         * @property {boolean} [disabled] Component disabled
         * @property {number|Long} [createdAt] Component createdAt
         * @property {number|Long} [updatedAt] Component updatedAt
         * @property {number|Long} [version] Component version
         */

        /**
         * Constructs a new Component.
         * @memberof otsimo
         * @classdesc Represents a Component.
         * @constructor
         * @param {otsimo.IComponent=} [properties] Properties to set
         */
        function Component(properties) {
            this.locales = [];
            this.labels = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Component id.
         * @member {string}id
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.id = "";

        /**
         * Component description.
         * @member {string}description
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.description = "";

        /**
         * Component type.
         * @member {otsimo.ComponentType}type
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.type = 0;

        /**
         * Component key.
         * @member {string}key
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.key = "";

        /**
         * Component value.
         * @member {(otsimo.Component.IValue|null|undefined)}value
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.value = null;

        /**
         * Component locales.
         * @member {Array.<string>}locales
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.locales = $util.emptyArray;

        /**
         * Component labels.
         * @member {Object.<string,string>}labels
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.labels = $util.emptyObject;

        /**
         * Component accessMode.
         * @member {otsimo.AccessMode}accessMode
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.accessMode = 0;

        /**
         * Component createdBy.
         * @member {string}createdBy
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.createdBy = "";

        /**
         * Component disabled.
         * @member {boolean}disabled
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.disabled = false;

        /**
         * Component createdAt.
         * @member {number|Long}createdAt
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Component updatedAt.
         * @member {number|Long}updatedAt
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Component version.
         * @member {number|Long}version
         * @memberof otsimo.Component
         * @instance
         */
        Component.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Component instance using the specified properties.
         * @function create
         * @memberof otsimo.Component
         * @static
         * @param {otsimo.IComponent=} [properties] Properties to set
         * @returns {otsimo.Component} Component instance
         */
        Component.create = function create(properties) {
            return new Component(properties);
        };

        /**
         * Encodes the specified Component message. Does not implicitly {@link otsimo.Component.verify|verify} messages.
         * @function encode
         * @memberof otsimo.Component
         * @static
         * @param {otsimo.IComponent} message Component message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Component.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.description);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.key);
            if (message.value != null && message.hasOwnProperty("value"))
                $root.otsimo.Component.Value.encode(message.value, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.locales != null && message.locales.length)
                for (var i = 0; i < message.locales.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.locales[i]);
            if (message.labels != null && message.hasOwnProperty("labels"))
                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.accessMode);
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.createdBy);
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.disabled);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createdAt);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.updatedAt);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.version);
            return writer;
        };

        /**
         * Encodes the specified Component message, length delimited. Does not implicitly {@link otsimo.Component.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.Component
         * @static
         * @param {otsimo.IComponent} message Component message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Component.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Component message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.Component
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.Component} Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Component.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.Component(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.key = reader.string();
                    break;
                case 5:
                    message.value = $root.otsimo.Component.Value.decode(reader, reader.uint32());
                    break;
                case 6:
                    if (!(message.locales && message.locales.length))
                        message.locales = [];
                    message.locales.push(reader.string());
                    break;
                case 7:
                    reader.skip().pos++;
                    if (message.labels === $util.emptyObject)
                        message.labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.labels[key] = reader.string();
                    break;
                case 8:
                    message.accessMode = reader.int32();
                    break;
                case 9:
                    message.createdBy = reader.string();
                    break;
                case 10:
                    message.disabled = reader.bool();
                    break;
                case 11:
                    message.createdAt = reader.int64();
                    break;
                case 12:
                    message.updatedAt = reader.int64();
                    break;
                case 13:
                    message.version = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Component message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.Component
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.Component} Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Component.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Component message.
         * @function verify
         * @memberof otsimo.Component
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Component.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.value != null && message.hasOwnProperty("value")) {
                var error = $root.otsimo.Component.Value.verify(message.value);
                if (error)
                    return "value." + error;
            }
            if (message.locales != null && message.hasOwnProperty("locales")) {
                if (!Array.isArray(message.locales))
                    return "locales: array expected";
                for (var i = 0; i < message.locales.length; ++i)
                    if (!$util.isString(message.locales[i]))
                        return "locales: string[] expected";
            }
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!$util.isObject(message.labels))
                    return "labels: object expected";
                var key = Object.keys(message.labels);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.labels[key[i]]))
                        return "labels: string{k:string} expected";
            }
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                switch (message.accessMode) {
                default:
                    return "accessMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            return null;
        };

        /**
         * Creates a Component message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.Component
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.Component} Component
         */
        Component.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.Component)
                return object;
            var message = new $root.otsimo.Component();
            if (object.id != null)
                message.id = String(object.id);
            if (object.description != null)
                message.description = String(object.description);
            switch (object.type) {
            case "TEXT":
            case 0:
                message.type = 0;
                break;
            case "IMAGE":
            case 1:
                message.type = 1;
                break;
            case "AUDIO":
            case 2:
                message.type = 2;
                break;
            case "COLOR":
            case 3:
                message.type = 3;
                break;
            case "NUMBER":
            case 4:
                message.type = 4;
                break;
            case "VIDEO":
            case 5:
                message.type = 5;
                break;
            case "FILE":
            case 6:
                message.type = 6;
                break;
            case "VECTOR_ARRAY":
            case 7:
                message.type = 7;
                break;
            case "DRAW_STEPS":
            case 8:
                message.type = 8;
                break;
            case "METADATA":
            case 9:
                message.type = 9;
                break;
            case "I18N":
            case 10:
                message.type = 10;
                break;
            }
            if (object.key != null)
                message.key = String(object.key);
            if (object.value != null) {
                if (typeof object.value !== "object")
                    throw TypeError(".otsimo.Component.value: object expected");
                message.value = $root.otsimo.Component.Value.fromObject(object.value);
            }
            if (object.locales) {
                if (!Array.isArray(object.locales))
                    throw TypeError(".otsimo.Component.locales: array expected");
                message.locales = [];
                for (var i = 0; i < object.locales.length; ++i)
                    message.locales[i] = String(object.locales[i]);
            }
            if (object.labels) {
                if (typeof object.labels !== "object")
                    throw TypeError(".otsimo.Component.labels: object expected");
                message.labels = {};
                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                    message.labels[keys[i]] = String(object.labels[keys[i]]);
            }
            switch (object.accessMode) {
            case "PUBLIC":
            case 0:
                message.accessMode = 0;
                break;
            case "OWNER":
            case 1:
                message.accessMode = 1;
                break;
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    (message.updatedAt = $util.Long.fromValue(object.updatedAt)).unsigned = false;
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Component message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.Component
         * @static
         * @param {otsimo.Component} message Component
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Component.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.locales = [];
            if (options.objects || options.defaults)
                object.labels = {};
            if (options.defaults) {
                object.id = "";
                object.description = "";
                object.type = options.enums === String ? "TEXT" : 0;
                object.key = "";
                object.value = null;
                object.accessMode = options.enums === String ? "PUBLIC" : 0;
                object.createdBy = "";
                object.disabled = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.otsimo.ComponentType[message.type] : message.type;
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.value != null && message.hasOwnProperty("value"))
                object.value = $root.otsimo.Component.Value.toObject(message.value, options);
            if (message.locales && message.locales.length) {
                object.locales = [];
                for (var j = 0; j < message.locales.length; ++j)
                    object.locales[j] = message.locales[j];
            }
            var keys2;
            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                object.labels = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.labels[keys2[j]] = message.labels[keys2[j]];
            }
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                object.accessMode = options.enums === String ? $root.otsimo.AccessMode[message.accessMode] : message.accessMode;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            return object;
        };

        /**
         * Converts this Component to JSON.
         * @function toJSON
         * @memberof otsimo.Component
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Component.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Component.Value = (function() {

            /**
             * Properties of a Value.
             * @memberof otsimo.Component
             * @interface IValue
             * @property {string} [str] Value str
             * @property {number} [number] Value number
             * @property {string} [url] Value url
             * @property {otsimo.IVectorArray} [vector] Value vector
             * @property {otsimo.IDrawSteps} [steps] Value steps
             * @property {otsimo.IAppMetadata} [metadata] Value metadata
             */

            /**
             * Constructs a new Value.
             * @memberof otsimo.Component
             * @classdesc Represents a Value.
             * @constructor
             * @param {otsimo.Component.IValue=} [properties] Properties to set
             */
            function Value(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Value str.
             * @member {string}str
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.str = "";

            /**
             * Value number.
             * @member {number}number
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.number = 0;

            /**
             * Value url.
             * @member {string}url
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.url = "";

            /**
             * Value vector.
             * @member {(otsimo.IVectorArray|null|undefined)}vector
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.vector = null;

            /**
             * Value steps.
             * @member {(otsimo.IDrawSteps|null|undefined)}steps
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.steps = null;

            /**
             * Value metadata.
             * @member {(otsimo.IAppMetadata|null|undefined)}metadata
             * @memberof otsimo.Component.Value
             * @instance
             */
            Value.prototype.metadata = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * Value value.
             * @member {string|undefined} value
             * @memberof otsimo.Component.Value
             * @instance
             */
            Object.defineProperty(Value.prototype, "value", {
                get: $util.oneOfGetter($oneOfFields = ["str", "number", "url", "vector", "steps", "metadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Value instance using the specified properties.
             * @function create
             * @memberof otsimo.Component.Value
             * @static
             * @param {otsimo.Component.IValue=} [properties] Properties to set
             * @returns {otsimo.Component.Value} Value instance
             */
            Value.create = function create(properties) {
                return new Value(properties);
            };

            /**
             * Encodes the specified Value message. Does not implicitly {@link otsimo.Component.Value.verify|verify} messages.
             * @function encode
             * @memberof otsimo.Component.Value
             * @static
             * @param {otsimo.Component.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.str != null && message.hasOwnProperty("str"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
                if (message.number != null && message.hasOwnProperty("number"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.number);
                if (message.url != null && message.hasOwnProperty("url"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
                if (message.vector != null && message.hasOwnProperty("vector"))
                    $root.otsimo.VectorArray.encode(message.vector, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.steps != null && message.hasOwnProperty("steps"))
                    $root.otsimo.DrawSteps.encode(message.steps, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.metadata != null && message.hasOwnProperty("metadata"))
                    $root.otsimo.AppMetadata.encode(message.metadata, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link otsimo.Component.Value.verify|verify} messages.
             * @function encodeDelimited
             * @memberof otsimo.Component.Value
             * @static
             * @param {otsimo.Component.IValue} message Value message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Value.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @function decode
             * @memberof otsimo.Component.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {otsimo.Component.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.Component.Value();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.str = reader.string();
                        break;
                    case 2:
                        message.number = reader.double();
                        break;
                    case 3:
                        message.url = reader.string();
                        break;
                    case 4:
                        message.vector = $root.otsimo.VectorArray.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.steps = $root.otsimo.DrawSteps.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.metadata = $root.otsimo.AppMetadata.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof otsimo.Component.Value
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {otsimo.Component.Value} Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Value.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Value message.
             * @function verify
             * @memberof otsimo.Component.Value
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Value.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.str != null && message.hasOwnProperty("str")) {
                    properties.value = 1;
                    if (!$util.isString(message.str))
                        return "str: string expected";
                }
                if (message.number != null && message.hasOwnProperty("number")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (typeof message.number !== "number")
                        return "number: number expected";
                }
                if (message.url != null && message.hasOwnProperty("url")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    if (!$util.isString(message.url))
                        return "url: string expected";
                }
                if (message.vector != null && message.hasOwnProperty("vector")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    var error = $root.otsimo.VectorArray.verify(message.vector);
                    if (error)
                        return "vector." + error;
                }
                if (message.steps != null && message.hasOwnProperty("steps")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    error = $root.otsimo.DrawSteps.verify(message.steps);
                    if (error)
                        return "steps." + error;
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    if (properties.value === 1)
                        return "value: multiple values";
                    properties.value = 1;
                    error = $root.otsimo.AppMetadata.verify(message.metadata);
                    if (error)
                        return "metadata." + error;
                }
                return null;
            };

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof otsimo.Component.Value
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {otsimo.Component.Value} Value
             */
            Value.fromObject = function fromObject(object) {
                if (object instanceof $root.otsimo.Component.Value)
                    return object;
                var message = new $root.otsimo.Component.Value();
                if (object.str != null)
                    message.str = String(object.str);
                if (object.number != null)
                    message.number = Number(object.number);
                if (object.url != null)
                    message.url = String(object.url);
                if (object.vector != null) {
                    if (typeof object.vector !== "object")
                        throw TypeError(".otsimo.Component.Value.vector: object expected");
                    message.vector = $root.otsimo.VectorArray.fromObject(object.vector);
                }
                if (object.steps != null) {
                    if (typeof object.steps !== "object")
                        throw TypeError(".otsimo.Component.Value.steps: object expected");
                    message.steps = $root.otsimo.DrawSteps.fromObject(object.steps);
                }
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".otsimo.Component.Value.metadata: object expected");
                    message.metadata = $root.otsimo.AppMetadata.fromObject(object.metadata);
                }
                return message;
            };

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @function toObject
             * @memberof otsimo.Component.Value
             * @static
             * @param {otsimo.Component.Value} message Value
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Value.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.str != null && message.hasOwnProperty("str")) {
                    object.str = message.str;
                    if (options.oneofs)
                        object.value = "str";
                }
                if (message.number != null && message.hasOwnProperty("number")) {
                    object.number = options.json && !isFinite(message.number) ? String(message.number) : message.number;
                    if (options.oneofs)
                        object.value = "number";
                }
                if (message.url != null && message.hasOwnProperty("url")) {
                    object.url = message.url;
                    if (options.oneofs)
                        object.value = "url";
                }
                if (message.vector != null && message.hasOwnProperty("vector")) {
                    object.vector = $root.otsimo.VectorArray.toObject(message.vector, options);
                    if (options.oneofs)
                        object.value = "vector";
                }
                if (message.steps != null && message.hasOwnProperty("steps")) {
                    object.steps = $root.otsimo.DrawSteps.toObject(message.steps, options);
                    if (options.oneofs)
                        object.value = "steps";
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    object.metadata = $root.otsimo.AppMetadata.toObject(message.metadata, options);
                    if (options.oneofs)
                        object.value = "metadata";
                }
                return object;
            };

            /**
             * Converts this Value to JSON.
             * @function toJSON
             * @memberof otsimo.Component.Value
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Value.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Value;
        })();

        return Component;
    })();

    otsimo.Material = (function() {

        /**
         * Properties of a Material.
         * @memberof otsimo
         * @interface IMaterial
         * @property {string} [id] Material id
         * @property {string} [name] Material name
         * @property {string} [description] Material description
         * @property {Object.<string,string>} [labels] Material labels
         * @property {Array.<otsimo.IComponent>} [components] Material components
         * @property {number|Long} [version] Material version
         * @property {otsimo.AccessMode} [accessMode] Material accessMode
         * @property {string} [createdBy] Material createdBy
         * @property {boolean} [disabled] Material disabled
         * @property {number|Long} [createdAt] Material createdAt
         * @property {number|Long} [updatedAt] Material updatedAt
         */

        /**
         * Constructs a new Material.
         * @memberof otsimo
         * @classdesc Represents a Material.
         * @constructor
         * @param {otsimo.IMaterial=} [properties] Properties to set
         */
        function Material(properties) {
            this.labels = {};
            this.components = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Material id.
         * @member {string}id
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.id = "";

        /**
         * Material name.
         * @member {string}name
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.name = "";

        /**
         * Material description.
         * @member {string}description
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.description = "";

        /**
         * Material labels.
         * @member {Object.<string,string>}labels
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.labels = $util.emptyObject;

        /**
         * Material components.
         * @member {Array.<otsimo.IComponent>}components
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.components = $util.emptyArray;

        /**
         * Material version.
         * @member {number|Long}version
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.version = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Material accessMode.
         * @member {otsimo.AccessMode}accessMode
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.accessMode = 0;

        /**
         * Material createdBy.
         * @member {string}createdBy
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.createdBy = "";

        /**
         * Material disabled.
         * @member {boolean}disabled
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.disabled = false;

        /**
         * Material createdAt.
         * @member {number|Long}createdAt
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Material updatedAt.
         * @member {number|Long}updatedAt
         * @memberof otsimo.Material
         * @instance
         */
        Material.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Material instance using the specified properties.
         * @function create
         * @memberof otsimo.Material
         * @static
         * @param {otsimo.IMaterial=} [properties] Properties to set
         * @returns {otsimo.Material} Material instance
         */
        Material.create = function create(properties) {
            return new Material(properties);
        };

        /**
         * Encodes the specified Material message. Does not implicitly {@link otsimo.Material.verify|verify} messages.
         * @function encode
         * @memberof otsimo.Material
         * @static
         * @param {otsimo.IMaterial} message Material message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Material.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            if (message.labels != null && message.hasOwnProperty("labels"))
                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
            if (message.components != null && message.components.length)
                for (var i = 0; i < message.components.length; ++i)
                    $root.otsimo.Component.encode(message.components[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.version);
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.accessMode);
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.createdBy);
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.disabled);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.createdAt);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Material message, length delimited. Does not implicitly {@link otsimo.Material.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.Material
         * @static
         * @param {otsimo.IMaterial} message Material message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Material.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Material message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.Material
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.Material} Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Material.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.Material(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    reader.skip().pos++;
                    if (message.labels === $util.emptyObject)
                        message.labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.labels[key] = reader.string();
                    break;
                case 5:
                    if (!(message.components && message.components.length))
                        message.components = [];
                    message.components.push($root.otsimo.Component.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.version = reader.int64();
                    break;
                case 7:
                    message.accessMode = reader.int32();
                    break;
                case 8:
                    message.createdBy = reader.string();
                    break;
                case 9:
                    message.disabled = reader.bool();
                    break;
                case 10:
                    message.createdAt = reader.int64();
                    break;
                case 11:
                    message.updatedAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Material message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.Material
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.Material} Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Material.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Material message.
         * @function verify
         * @memberof otsimo.Material
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Material.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!$util.isObject(message.labels))
                    return "labels: object expected";
                var key = Object.keys(message.labels);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.labels[key[i]]))
                        return "labels: string{k:string} expected";
            }
            if (message.components != null && message.hasOwnProperty("components")) {
                if (!Array.isArray(message.components))
                    return "components: array expected";
                for (var i = 0; i < message.components.length; ++i) {
                    var error = $root.otsimo.Component.verify(message.components[i]);
                    if (error)
                        return "components." + error;
                }
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                switch (message.accessMode) {
                default:
                    return "accessMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            return null;
        };

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.Material
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.Material} Material
         */
        Material.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.Material)
                return object;
            var message = new $root.otsimo.Material();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.description != null)
                message.description = String(object.description);
            if (object.labels) {
                if (typeof object.labels !== "object")
                    throw TypeError(".otsimo.Material.labels: object expected");
                message.labels = {};
                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                    message.labels[keys[i]] = String(object.labels[keys[i]]);
            }
            if (object.components) {
                if (!Array.isArray(object.components))
                    throw TypeError(".otsimo.Material.components: array expected");
                message.components = [];
                for (var i = 0; i < object.components.length; ++i) {
                    if (typeof object.components[i] !== "object")
                        throw TypeError(".otsimo.Material.components: object expected");
                    message.components[i] = $root.otsimo.Component.fromObject(object.components[i]);
                }
            }
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = false;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber();
            switch (object.accessMode) {
            case "PUBLIC":
            case 0:
                message.accessMode = 0;
                break;
            case "OWNER":
            case 1:
                message.accessMode = 1;
                break;
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    (message.updatedAt = $util.Long.fromValue(object.updatedAt)).unsigned = false;
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.Material
         * @static
         * @param {otsimo.Material} message Material
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Material.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.components = [];
            if (options.objects || options.defaults)
                object.labels = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.version = options.longs === String ? "0" : 0;
                object.accessMode = options.enums === String ? "PUBLIC" : 0;
                object.createdBy = "";
                object.disabled = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            var keys2;
            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                object.labels = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.labels[keys2[j]] = message.labels[keys2[j]];
            }
            if (message.components && message.components.length) {
                object.components = [];
                for (var j = 0; j < message.components.length; ++j)
                    object.components[j] = $root.otsimo.Component.toObject(message.components[j], options);
            }
            if (message.version != null && message.hasOwnProperty("version"))
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber() : message.version;
            if (message.accessMode != null && message.hasOwnProperty("accessMode"))
                object.accessMode = options.enums === String ? $root.otsimo.AccessMode[message.accessMode] : message.accessMode;
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            return object;
        };

        /**
         * Converts this Material to JSON.
         * @function toJSON
         * @memberof otsimo.Material
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Material.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Material;
    })();

    otsimo.FileAsset = (function() {

        /**
         * Properties of a FileAsset.
         * @memberof otsimo
         * @interface IFileAsset
         * @property {string} [id] FileAsset id
         * @property {string} [url] FileAsset url
         * @property {string} [name] FileAsset name
         * @property {Array.<string>} [keywords] FileAsset keywords
         */

        /**
         * Constructs a new FileAsset.
         * @memberof otsimo
         * @classdesc Represents a FileAsset.
         * @constructor
         * @param {otsimo.IFileAsset=} [properties] Properties to set
         */
        function FileAsset(properties) {
            this.keywords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FileAsset id.
         * @member {string}id
         * @memberof otsimo.FileAsset
         * @instance
         */
        FileAsset.prototype.id = "";

        /**
         * FileAsset url.
         * @member {string}url
         * @memberof otsimo.FileAsset
         * @instance
         */
        FileAsset.prototype.url = "";

        /**
         * FileAsset name.
         * @member {string}name
         * @memberof otsimo.FileAsset
         * @instance
         */
        FileAsset.prototype.name = "";

        /**
         * FileAsset keywords.
         * @member {Array.<string>}keywords
         * @memberof otsimo.FileAsset
         * @instance
         */
        FileAsset.prototype.keywords = $util.emptyArray;

        /**
         * Creates a new FileAsset instance using the specified properties.
         * @function create
         * @memberof otsimo.FileAsset
         * @static
         * @param {otsimo.IFileAsset=} [properties] Properties to set
         * @returns {otsimo.FileAsset} FileAsset instance
         */
        FileAsset.create = function create(properties) {
            return new FileAsset(properties);
        };

        /**
         * Encodes the specified FileAsset message. Does not implicitly {@link otsimo.FileAsset.verify|verify} messages.
         * @function encode
         * @memberof otsimo.FileAsset
         * @static
         * @param {otsimo.IFileAsset} message FileAsset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileAsset.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.url != null && message.hasOwnProperty("url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.keywords != null && message.keywords.length)
                for (var i = 0; i < message.keywords.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.keywords[i]);
            return writer;
        };

        /**
         * Encodes the specified FileAsset message, length delimited. Does not implicitly {@link otsimo.FileAsset.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.FileAsset
         * @static
         * @param {otsimo.IFileAsset} message FileAsset message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FileAsset.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FileAsset message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.FileAsset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.FileAsset} FileAsset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileAsset.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.FileAsset();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 5:
                    if (!(message.keywords && message.keywords.length))
                        message.keywords = [];
                    message.keywords.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FileAsset message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.FileAsset
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.FileAsset} FileAsset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FileAsset.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FileAsset message.
         * @function verify
         * @memberof otsimo.FileAsset
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FileAsset.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.keywords != null && message.hasOwnProperty("keywords")) {
                if (!Array.isArray(message.keywords))
                    return "keywords: array expected";
                for (var i = 0; i < message.keywords.length; ++i)
                    if (!$util.isString(message.keywords[i]))
                        return "keywords: string[] expected";
            }
            return null;
        };

        /**
         * Creates a FileAsset message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.FileAsset
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.FileAsset} FileAsset
         */
        FileAsset.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.FileAsset)
                return object;
            var message = new $root.otsimo.FileAsset();
            if (object.id != null)
                message.id = String(object.id);
            if (object.url != null)
                message.url = String(object.url);
            if (object.name != null)
                message.name = String(object.name);
            if (object.keywords) {
                if (!Array.isArray(object.keywords))
                    throw TypeError(".otsimo.FileAsset.keywords: array expected");
                message.keywords = [];
                for (var i = 0; i < object.keywords.length; ++i)
                    message.keywords[i] = String(object.keywords[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FileAsset message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.FileAsset
         * @static
         * @param {otsimo.FileAsset} message FileAsset
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FileAsset.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.keywords = [];
            if (options.defaults) {
                object.id = "";
                object.url = "";
                object.name = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.keywords && message.keywords.length) {
                object.keywords = [];
                for (var j = 0; j < message.keywords.length; ++j)
                    object.keywords[j] = message.keywords[j];
            }
            return object;
        };

        /**
         * Converts this FileAsset to JSON.
         * @function toJSON
         * @memberof otsimo.FileAsset
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FileAsset.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FileAsset;
    })();

    otsimo.ComponentSpec = (function() {

        /**
         * Properties of a ComponentSpec.
         * @memberof otsimo
         * @interface IComponentSpec
         * @property {string} [key] ComponentSpec key
         * @property {otsimo.ComponentType} [type] ComponentSpec type
         * @property {boolean} [isAdvanced] ComponentSpec isAdvanced
         * @property {otsimo.ComponentSpec.Parent} [parent] ComponentSpec parent
         * @property {otsimo.ISimpleLabelSelector} [simple] ComponentSpec simple
         * @property {otsimo.ILabelSelector} [advanced] ComponentSpec advanced
         * @property {string} [description] ComponentSpec description
         */

        /**
         * Constructs a new ComponentSpec.
         * @memberof otsimo
         * @classdesc Represents a ComponentSpec.
         * @constructor
         * @param {otsimo.IComponentSpec=} [properties] Properties to set
         */
        function ComponentSpec(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ComponentSpec key.
         * @member {string}key
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.key = "";

        /**
         * ComponentSpec type.
         * @member {otsimo.ComponentType}type
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.type = 0;

        /**
         * ComponentSpec isAdvanced.
         * @member {boolean}isAdvanced
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.isAdvanced = false;

        /**
         * ComponentSpec parent.
         * @member {otsimo.ComponentSpec.Parent}parent
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.parent = 0;

        /**
         * ComponentSpec simple.
         * @member {(otsimo.ISimpleLabelSelector|null|undefined)}simple
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.simple = null;

        /**
         * ComponentSpec advanced.
         * @member {(otsimo.ILabelSelector|null|undefined)}advanced
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.advanced = null;

        /**
         * ComponentSpec description.
         * @member {string}description
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        ComponentSpec.prototype.description = "";

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ComponentSpec labelSelector.
         * @member {string|undefined} labelSelector
         * @memberof otsimo.ComponentSpec
         * @instance
         */
        Object.defineProperty(ComponentSpec.prototype, "labelSelector", {
            get: $util.oneOfGetter($oneOfFields = ["simple", "advanced"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ComponentSpec instance using the specified properties.
         * @function create
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {otsimo.IComponentSpec=} [properties] Properties to set
         * @returns {otsimo.ComponentSpec} ComponentSpec instance
         */
        ComponentSpec.create = function create(properties) {
            return new ComponentSpec(properties);
        };

        /**
         * Encodes the specified ComponentSpec message. Does not implicitly {@link otsimo.ComponentSpec.verify|verify} messages.
         * @function encode
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {otsimo.IComponentSpec} message ComponentSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComponentSpec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.key != null && message.hasOwnProperty("key"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.isAdvanced != null && message.hasOwnProperty("isAdvanced"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isAdvanced);
            if (message.parent != null && message.hasOwnProperty("parent"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.parent);
            if (message.simple != null && message.hasOwnProperty("simple"))
                $root.otsimo.SimpleLabelSelector.encode(message.simple, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.advanced != null && message.hasOwnProperty("advanced"))
                $root.otsimo.LabelSelector.encode(message.advanced, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.description != null && message.hasOwnProperty("description"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified ComponentSpec message, length delimited. Does not implicitly {@link otsimo.ComponentSpec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {otsimo.IComponentSpec} message ComponentSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ComponentSpec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ComponentSpec message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.ComponentSpec} ComponentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComponentSpec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.ComponentSpec();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.isAdvanced = reader.bool();
                    break;
                case 5:
                    message.parent = reader.int32();
                    break;
                case 6:
                    message.simple = $root.otsimo.SimpleLabelSelector.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.advanced = $root.otsimo.LabelSelector.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ComponentSpec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.ComponentSpec} ComponentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ComponentSpec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ComponentSpec message.
         * @function verify
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ComponentSpec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.key != null && message.hasOwnProperty("key"))
                if (!$util.isString(message.key))
                    return "key: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            if (message.isAdvanced != null && message.hasOwnProperty("isAdvanced"))
                if (typeof message.isAdvanced !== "boolean")
                    return "isAdvanced: boolean expected";
            if (message.parent != null && message.hasOwnProperty("parent"))
                switch (message.parent) {
                default:
                    return "parent: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.simple != null && message.hasOwnProperty("simple")) {
                properties.labelSelector = 1;
                var error = $root.otsimo.SimpleLabelSelector.verify(message.simple);
                if (error)
                    return "simple." + error;
            }
            if (message.advanced != null && message.hasOwnProperty("advanced")) {
                if (properties.labelSelector === 1)
                    return "labelSelector: multiple values";
                properties.labelSelector = 1;
                error = $root.otsimo.LabelSelector.verify(message.advanced);
                if (error)
                    return "advanced." + error;
            }
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a ComponentSpec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.ComponentSpec} ComponentSpec
         */
        ComponentSpec.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.ComponentSpec)
                return object;
            var message = new $root.otsimo.ComponentSpec();
            if (object.key != null)
                message.key = String(object.key);
            switch (object.type) {
            case "TEXT":
            case 0:
                message.type = 0;
                break;
            case "IMAGE":
            case 1:
                message.type = 1;
                break;
            case "AUDIO":
            case 2:
                message.type = 2;
                break;
            case "COLOR":
            case 3:
                message.type = 3;
                break;
            case "NUMBER":
            case 4:
                message.type = 4;
                break;
            case "VIDEO":
            case 5:
                message.type = 5;
                break;
            case "FILE":
            case 6:
                message.type = 6;
                break;
            case "VECTOR_ARRAY":
            case 7:
                message.type = 7;
                break;
            case "DRAW_STEPS":
            case 8:
                message.type = 8;
                break;
            case "METADATA":
            case 9:
                message.type = 9;
                break;
            case "I18N":
            case 10:
                message.type = 10;
                break;
            }
            if (object.isAdvanced != null)
                message.isAdvanced = Boolean(object.isAdvanced);
            switch (object.parent) {
            case "APP":
            case 0:
                message.parent = 0;
                break;
            case "GROUP":
            case 1:
                message.parent = 1;
                break;
            }
            if (object.simple != null) {
                if (typeof object.simple !== "object")
                    throw TypeError(".otsimo.ComponentSpec.simple: object expected");
                message.simple = $root.otsimo.SimpleLabelSelector.fromObject(object.simple);
            }
            if (object.advanced != null) {
                if (typeof object.advanced !== "object")
                    throw TypeError(".otsimo.ComponentSpec.advanced: object expected");
                message.advanced = $root.otsimo.LabelSelector.fromObject(object.advanced);
            }
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a ComponentSpec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.ComponentSpec
         * @static
         * @param {otsimo.ComponentSpec} message ComponentSpec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ComponentSpec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.key = "";
                object.type = options.enums === String ? "TEXT" : 0;
                object.isAdvanced = false;
                object.parent = options.enums === String ? "APP" : 0;
                object.description = "";
            }
            if (message.key != null && message.hasOwnProperty("key"))
                object.key = message.key;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.otsimo.ComponentType[message.type] : message.type;
            if (message.isAdvanced != null && message.hasOwnProperty("isAdvanced"))
                object.isAdvanced = message.isAdvanced;
            if (message.parent != null && message.hasOwnProperty("parent"))
                object.parent = options.enums === String ? $root.otsimo.ComponentSpec.Parent[message.parent] : message.parent;
            if (message.simple != null && message.hasOwnProperty("simple")) {
                object.simple = $root.otsimo.SimpleLabelSelector.toObject(message.simple, options);
                if (options.oneofs)
                    object.labelSelector = "simple";
            }
            if (message.advanced != null && message.hasOwnProperty("advanced")) {
                object.advanced = $root.otsimo.LabelSelector.toObject(message.advanced, options);
                if (options.oneofs)
                    object.labelSelector = "advanced";
            }
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this ComponentSpec to JSON.
         * @function toJSON
         * @memberof otsimo.ComponentSpec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ComponentSpec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Parent enum.
         * @enum {string}
         * @property {number} APP=0 APP value
         * @property {number} GROUP=1 GROUP value
         */
        ComponentSpec.Parent = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "APP"] = 0;
            values[valuesById[1] = "GROUP"] = 1;
            return values;
        })();

        return ComponentSpec;
    })();

    otsimo.LabelSelectorSerializor = (function() {

        /**
         * Properties of a LabelSelectorSerializor.
         * @memberof otsimo
         * @interface ILabelSelectorSerializor
         * @property {otsimo.ISimpleLabelSelector} [simple] LabelSelectorSerializor simple
         * @property {otsimo.ILabelSelector} [advanced] LabelSelectorSerializor advanced
         */

        /**
         * Constructs a new LabelSelectorSerializor.
         * @memberof otsimo
         * @classdesc Represents a LabelSelectorSerializor.
         * @constructor
         * @param {otsimo.ILabelSelectorSerializor=} [properties] Properties to set
         */
        function LabelSelectorSerializor(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LabelSelectorSerializor simple.
         * @member {(otsimo.ISimpleLabelSelector|null|undefined)}simple
         * @memberof otsimo.LabelSelectorSerializor
         * @instance
         */
        LabelSelectorSerializor.prototype.simple = null;

        /**
         * LabelSelectorSerializor advanced.
         * @member {(otsimo.ILabelSelector|null|undefined)}advanced
         * @memberof otsimo.LabelSelectorSerializor
         * @instance
         */
        LabelSelectorSerializor.prototype.advanced = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * LabelSelectorSerializor labelSelector.
         * @member {string|undefined} labelSelector
         * @memberof otsimo.LabelSelectorSerializor
         * @instance
         */
        Object.defineProperty(LabelSelectorSerializor.prototype, "labelSelector", {
            get: $util.oneOfGetter($oneOfFields = ["simple", "advanced"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LabelSelectorSerializor instance using the specified properties.
         * @function create
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {otsimo.ILabelSelectorSerializor=} [properties] Properties to set
         * @returns {otsimo.LabelSelectorSerializor} LabelSelectorSerializor instance
         */
        LabelSelectorSerializor.create = function create(properties) {
            return new LabelSelectorSerializor(properties);
        };

        /**
         * Encodes the specified LabelSelectorSerializor message. Does not implicitly {@link otsimo.LabelSelectorSerializor.verify|verify} messages.
         * @function encode
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {otsimo.ILabelSelectorSerializor} message LabelSelectorSerializor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorSerializor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.simple != null && message.hasOwnProperty("simple"))
                $root.otsimo.SimpleLabelSelector.encode(message.simple, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.advanced != null && message.hasOwnProperty("advanced"))
                $root.otsimo.LabelSelector.encode(message.advanced, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LabelSelectorSerializor message, length delimited. Does not implicitly {@link otsimo.LabelSelectorSerializor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {otsimo.ILabelSelectorSerializor} message LabelSelectorSerializor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LabelSelectorSerializor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LabelSelectorSerializor message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.LabelSelectorSerializor} LabelSelectorSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorSerializor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.LabelSelectorSerializor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 6:
                    message.simple = $root.otsimo.SimpleLabelSelector.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.advanced = $root.otsimo.LabelSelector.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LabelSelectorSerializor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.LabelSelectorSerializor} LabelSelectorSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LabelSelectorSerializor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LabelSelectorSerializor message.
         * @function verify
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LabelSelectorSerializor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.simple != null && message.hasOwnProperty("simple")) {
                properties.labelSelector = 1;
                var error = $root.otsimo.SimpleLabelSelector.verify(message.simple);
                if (error)
                    return "simple." + error;
            }
            if (message.advanced != null && message.hasOwnProperty("advanced")) {
                if (properties.labelSelector === 1)
                    return "labelSelector: multiple values";
                properties.labelSelector = 1;
                error = $root.otsimo.LabelSelector.verify(message.advanced);
                if (error)
                    return "advanced." + error;
            }
            return null;
        };

        /**
         * Creates a LabelSelectorSerializor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.LabelSelectorSerializor} LabelSelectorSerializor
         */
        LabelSelectorSerializor.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.LabelSelectorSerializor)
                return object;
            var message = new $root.otsimo.LabelSelectorSerializor();
            if (object.simple != null) {
                if (typeof object.simple !== "object")
                    throw TypeError(".otsimo.LabelSelectorSerializor.simple: object expected");
                message.simple = $root.otsimo.SimpleLabelSelector.fromObject(object.simple);
            }
            if (object.advanced != null) {
                if (typeof object.advanced !== "object")
                    throw TypeError(".otsimo.LabelSelectorSerializor.advanced: object expected");
                message.advanced = $root.otsimo.LabelSelector.fromObject(object.advanced);
            }
            return message;
        };

        /**
         * Creates a plain object from a LabelSelectorSerializor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.LabelSelectorSerializor
         * @static
         * @param {otsimo.LabelSelectorSerializor} message LabelSelectorSerializor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LabelSelectorSerializor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.simple != null && message.hasOwnProperty("simple")) {
                object.simple = $root.otsimo.SimpleLabelSelector.toObject(message.simple, options);
                if (options.oneofs)
                    object.labelSelector = "simple";
            }
            if (message.advanced != null && message.hasOwnProperty("advanced")) {
                object.advanced = $root.otsimo.LabelSelector.toObject(message.advanced, options);
                if (options.oneofs)
                    object.labelSelector = "advanced";
            }
            return object;
        };

        /**
         * Converts this LabelSelectorSerializor to JSON.
         * @function toJSON
         * @memberof otsimo.LabelSelectorSerializor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LabelSelectorSerializor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LabelSelectorSerializor;
    })();

    otsimo.MaterialSelectGroup = (function() {

        /**
         * Properties of a MaterialSelectGroup.
         * @memberof otsimo
         * @interface IMaterialSelectGroup
         * @property {string} [groupName] MaterialSelectGroup groupName
         * @property {Array.<otsimo.IComponentSpec>} [componentSpecs] MaterialSelectGroup componentSpecs
         */

        /**
         * Constructs a new MaterialSelectGroup.
         * @memberof otsimo
         * @classdesc Represents a MaterialSelectGroup.
         * @constructor
         * @param {otsimo.IMaterialSelectGroup=} [properties] Properties to set
         */
        function MaterialSelectGroup(properties) {
            this.componentSpecs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialSelectGroup groupName.
         * @member {string}groupName
         * @memberof otsimo.MaterialSelectGroup
         * @instance
         */
        MaterialSelectGroup.prototype.groupName = "";

        /**
         * MaterialSelectGroup componentSpecs.
         * @member {Array.<otsimo.IComponentSpec>}componentSpecs
         * @memberof otsimo.MaterialSelectGroup
         * @instance
         */
        MaterialSelectGroup.prototype.componentSpecs = $util.emptyArray;

        /**
         * Creates a new MaterialSelectGroup instance using the specified properties.
         * @function create
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {otsimo.IMaterialSelectGroup=} [properties] Properties to set
         * @returns {otsimo.MaterialSelectGroup} MaterialSelectGroup instance
         */
        MaterialSelectGroup.create = function create(properties) {
            return new MaterialSelectGroup(properties);
        };

        /**
         * Encodes the specified MaterialSelectGroup message. Does not implicitly {@link otsimo.MaterialSelectGroup.verify|verify} messages.
         * @function encode
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {otsimo.IMaterialSelectGroup} message MaterialSelectGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaterialSelectGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
            if (message.componentSpecs != null && message.componentSpecs.length)
                for (var i = 0; i < message.componentSpecs.length; ++i)
                    $root.otsimo.ComponentSpec.encode(message.componentSpecs[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MaterialSelectGroup message, length delimited. Does not implicitly {@link otsimo.MaterialSelectGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {otsimo.IMaterialSelectGroup} message MaterialSelectGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaterialSelectGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaterialSelectGroup message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.MaterialSelectGroup} MaterialSelectGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaterialSelectGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.MaterialSelectGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupName = reader.string();
                    break;
                case 2:
                    if (!(message.componentSpecs && message.componentSpecs.length))
                        message.componentSpecs = [];
                    message.componentSpecs.push($root.otsimo.ComponentSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaterialSelectGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.MaterialSelectGroup} MaterialSelectGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaterialSelectGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaterialSelectGroup message.
         * @function verify
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MaterialSelectGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.componentSpecs != null && message.hasOwnProperty("componentSpecs")) {
                if (!Array.isArray(message.componentSpecs))
                    return "componentSpecs: array expected";
                for (var i = 0; i < message.componentSpecs.length; ++i) {
                    var error = $root.otsimo.ComponentSpec.verify(message.componentSpecs[i]);
                    if (error)
                        return "componentSpecs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MaterialSelectGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.MaterialSelectGroup} MaterialSelectGroup
         */
        MaterialSelectGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.MaterialSelectGroup)
                return object;
            var message = new $root.otsimo.MaterialSelectGroup();
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.componentSpecs) {
                if (!Array.isArray(object.componentSpecs))
                    throw TypeError(".otsimo.MaterialSelectGroup.componentSpecs: array expected");
                message.componentSpecs = [];
                for (var i = 0; i < object.componentSpecs.length; ++i) {
                    if (typeof object.componentSpecs[i] !== "object")
                        throw TypeError(".otsimo.MaterialSelectGroup.componentSpecs: object expected");
                    message.componentSpecs[i] = $root.otsimo.ComponentSpec.fromObject(object.componentSpecs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MaterialSelectGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.MaterialSelectGroup
         * @static
         * @param {otsimo.MaterialSelectGroup} message MaterialSelectGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialSelectGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.componentSpecs = [];
            if (options.defaults)
                object.groupName = "";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.componentSpecs && message.componentSpecs.length) {
                object.componentSpecs = [];
                for (var j = 0; j < message.componentSpecs.length; ++j)
                    object.componentSpecs[j] = $root.otsimo.ComponentSpec.toObject(message.componentSpecs[j], options);
            }
            return object;
        };

        /**
         * Converts this MaterialSelectGroup to JSON.
         * @function toJSON
         * @memberof otsimo.MaterialSelectGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialSelectGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialSelectGroup;
    })();

    otsimo.AppSpec = (function() {

        /**
         * Properties of an AppSpec.
         * @memberof otsimo
         * @interface IAppSpec
         * @property {string} [id] AppSpec id
         * @property {string} [name] AppSpec name
         * @property {string} [repository] AppSpec repository
         * @property {string} [command] AppSpec command
         * @property {Array.<string>} [env] AppSpec env
         * @property {Array.<otsimo.IComponentSpec>} [components] AppSpec components
         * @property {Array.<otsimo.IMaterialSelectGroup>} [selects] AppSpec selects
         * @property {string} [createdBy] AppSpec createdBy
         * @property {boolean} [disabled] AppSpec disabled
         * @property {number|Long} [createdAt] AppSpec createdAt
         * @property {number|Long} [updatedAt] AppSpec updatedAt
         */

        /**
         * Constructs a new AppSpec.
         * @memberof otsimo
         * @classdesc Represents an AppSpec.
         * @constructor
         * @param {otsimo.IAppSpec=} [properties] Properties to set
         */
        function AppSpec(properties) {
            this.env = [];
            this.components = [];
            this.selects = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppSpec id.
         * @member {string}id
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.id = "";

        /**
         * AppSpec name.
         * @member {string}name
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.name = "";

        /**
         * AppSpec repository.
         * @member {string}repository
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.repository = "";

        /**
         * AppSpec command.
         * @member {string}command
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.command = "";

        /**
         * AppSpec env.
         * @member {Array.<string>}env
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.env = $util.emptyArray;

        /**
         * AppSpec components.
         * @member {Array.<otsimo.IComponentSpec>}components
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.components = $util.emptyArray;

        /**
         * AppSpec selects.
         * @member {Array.<otsimo.IMaterialSelectGroup>}selects
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.selects = $util.emptyArray;

        /**
         * AppSpec createdBy.
         * @member {string}createdBy
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.createdBy = "";

        /**
         * AppSpec disabled.
         * @member {boolean}disabled
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.disabled = false;

        /**
         * AppSpec createdAt.
         * @member {number|Long}createdAt
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AppSpec updatedAt.
         * @member {number|Long}updatedAt
         * @memberof otsimo.AppSpec
         * @instance
         */
        AppSpec.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new AppSpec instance using the specified properties.
         * @function create
         * @memberof otsimo.AppSpec
         * @static
         * @param {otsimo.IAppSpec=} [properties] Properties to set
         * @returns {otsimo.AppSpec} AppSpec instance
         */
        AppSpec.create = function create(properties) {
            return new AppSpec(properties);
        };

        /**
         * Encodes the specified AppSpec message. Does not implicitly {@link otsimo.AppSpec.verify|verify} messages.
         * @function encode
         * @memberof otsimo.AppSpec
         * @static
         * @param {otsimo.IAppSpec} message AppSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppSpec.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.repository != null && message.hasOwnProperty("repository"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.repository);
            if (message.command != null && message.hasOwnProperty("command"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.command);
            if (message.env != null && message.env.length)
                for (var i = 0; i < message.env.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.env[i]);
            if (message.components != null && message.components.length)
                for (var i = 0; i < message.components.length; ++i)
                    $root.otsimo.ComponentSpec.encode(message.components[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.selects != null && message.selects.length)
                for (var i = 0; i < message.selects.length; ++i)
                    $root.otsimo.MaterialSelectGroup.encode(message.selects[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.createdBy);
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.disabled);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.createdAt);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified AppSpec message, length delimited. Does not implicitly {@link otsimo.AppSpec.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.AppSpec
         * @static
         * @param {otsimo.IAppSpec} message AppSpec message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppSpec.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppSpec message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.AppSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.AppSpec} AppSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppSpec.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.AppSpec();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.repository = reader.string();
                    break;
                case 4:
                    message.command = reader.string();
                    break;
                case 5:
                    if (!(message.env && message.env.length))
                        message.env = [];
                    message.env.push(reader.string());
                    break;
                case 6:
                    if (!(message.components && message.components.length))
                        message.components = [];
                    message.components.push($root.otsimo.ComponentSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    if (!(message.selects && message.selects.length))
                        message.selects = [];
                    message.selects.push($root.otsimo.MaterialSelectGroup.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.createdBy = reader.string();
                    break;
                case 11:
                    message.disabled = reader.bool();
                    break;
                case 12:
                    message.createdAt = reader.int64();
                    break;
                case 13:
                    message.updatedAt = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppSpec message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.AppSpec
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.AppSpec} AppSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppSpec.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppSpec message.
         * @function verify
         * @memberof otsimo.AppSpec
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppSpec.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.repository != null && message.hasOwnProperty("repository"))
                if (!$util.isString(message.repository))
                    return "repository: string expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.env != null && message.hasOwnProperty("env")) {
                if (!Array.isArray(message.env))
                    return "env: array expected";
                for (var i = 0; i < message.env.length; ++i)
                    if (!$util.isString(message.env[i]))
                        return "env: string[] expected";
            }
            if (message.components != null && message.hasOwnProperty("components")) {
                if (!Array.isArray(message.components))
                    return "components: array expected";
                for (var i = 0; i < message.components.length; ++i) {
                    var error = $root.otsimo.ComponentSpec.verify(message.components[i]);
                    if (error)
                        return "components." + error;
                }
            }
            if (message.selects != null && message.hasOwnProperty("selects")) {
                if (!Array.isArray(message.selects))
                    return "selects: array expected";
                for (var i = 0; i < message.selects.length; ++i) {
                    error = $root.otsimo.MaterialSelectGroup.verify(message.selects[i]);
                    if (error)
                        return "selects." + error;
                }
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            return null;
        };

        /**
         * Creates an AppSpec message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.AppSpec
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.AppSpec} AppSpec
         */
        AppSpec.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.AppSpec)
                return object;
            var message = new $root.otsimo.AppSpec();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.repository != null)
                message.repository = String(object.repository);
            if (object.command != null)
                message.command = String(object.command);
            if (object.env) {
                if (!Array.isArray(object.env))
                    throw TypeError(".otsimo.AppSpec.env: array expected");
                message.env = [];
                for (var i = 0; i < object.env.length; ++i)
                    message.env[i] = String(object.env[i]);
            }
            if (object.components) {
                if (!Array.isArray(object.components))
                    throw TypeError(".otsimo.AppSpec.components: array expected");
                message.components = [];
                for (var i = 0; i < object.components.length; ++i) {
                    if (typeof object.components[i] !== "object")
                        throw TypeError(".otsimo.AppSpec.components: object expected");
                    message.components[i] = $root.otsimo.ComponentSpec.fromObject(object.components[i]);
                }
            }
            if (object.selects) {
                if (!Array.isArray(object.selects))
                    throw TypeError(".otsimo.AppSpec.selects: array expected");
                message.selects = [];
                for (var i = 0; i < object.selects.length; ++i) {
                    if (typeof object.selects[i] !== "object")
                        throw TypeError(".otsimo.AppSpec.selects: object expected");
                    message.selects[i] = $root.otsimo.MaterialSelectGroup.fromObject(object.selects[i]);
                }
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    (message.updatedAt = $util.Long.fromValue(object.updatedAt)).unsigned = false;
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an AppSpec message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.AppSpec
         * @static
         * @param {otsimo.AppSpec} message AppSpec
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppSpec.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.env = [];
                object.components = [];
                object.selects = [];
            }
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.repository = "";
                object.command = "";
                object.createdBy = "";
                object.disabled = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.repository != null && message.hasOwnProperty("repository"))
                object.repository = message.repository;
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.env && message.env.length) {
                object.env = [];
                for (var j = 0; j < message.env.length; ++j)
                    object.env[j] = message.env[j];
            }
            if (message.components && message.components.length) {
                object.components = [];
                for (var j = 0; j < message.components.length; ++j)
                    object.components[j] = $root.otsimo.ComponentSpec.toObject(message.components[j], options);
            }
            if (message.selects && message.selects.length) {
                object.selects = [];
                for (var j = 0; j < message.selects.length; ++j)
                    object.selects[j] = $root.otsimo.MaterialSelectGroup.toObject(message.selects[j], options);
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            return object;
        };

        /**
         * Converts this AppSpec to JSON.
         * @function toJSON
         * @memberof otsimo.AppSpec
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppSpec.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppSpec;
    })();

    otsimo.AppMaterialGroup = (function() {

        /**
         * Properties of an AppMaterialGroup.
         * @memberof otsimo
         * @interface IAppMaterialGroup
         * @property {string} [groupName] AppMaterialGroup groupName
         * @property {Array.<string>} [materialIds] AppMaterialGroup materialIds
         * @property {string} [specGroup] AppMaterialGroup specGroup
         */

        /**
         * Constructs a new AppMaterialGroup.
         * @memberof otsimo
         * @classdesc Represents an AppMaterialGroup.
         * @constructor
         * @param {otsimo.IAppMaterialGroup=} [properties] Properties to set
         */
        function AppMaterialGroup(properties) {
            this.materialIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppMaterialGroup groupName.
         * @member {string}groupName
         * @memberof otsimo.AppMaterialGroup
         * @instance
         */
        AppMaterialGroup.prototype.groupName = "";

        /**
         * AppMaterialGroup materialIds.
         * @member {Array.<string>}materialIds
         * @memberof otsimo.AppMaterialGroup
         * @instance
         */
        AppMaterialGroup.prototype.materialIds = $util.emptyArray;

        /**
         * AppMaterialGroup specGroup.
         * @member {string}specGroup
         * @memberof otsimo.AppMaterialGroup
         * @instance
         */
        AppMaterialGroup.prototype.specGroup = "";

        /**
         * Creates a new AppMaterialGroup instance using the specified properties.
         * @function create
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {otsimo.IAppMaterialGroup=} [properties] Properties to set
         * @returns {otsimo.AppMaterialGroup} AppMaterialGroup instance
         */
        AppMaterialGroup.create = function create(properties) {
            return new AppMaterialGroup(properties);
        };

        /**
         * Encodes the specified AppMaterialGroup message. Does not implicitly {@link otsimo.AppMaterialGroup.verify|verify} messages.
         * @function encode
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {otsimo.IAppMaterialGroup} message AppMaterialGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMaterialGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.groupName);
            if (message.materialIds != null && message.materialIds.length)
                for (var i = 0; i < message.materialIds.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.materialIds[i]);
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.specGroup);
            return writer;
        };

        /**
         * Encodes the specified AppMaterialGroup message, length delimited. Does not implicitly {@link otsimo.AppMaterialGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {otsimo.IAppMaterialGroup} message AppMaterialGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMaterialGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppMaterialGroup message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.AppMaterialGroup} AppMaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMaterialGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.AppMaterialGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupName = reader.string();
                    break;
                case 2:
                    if (!(message.materialIds && message.materialIds.length))
                        message.materialIds = [];
                    message.materialIds.push(reader.string());
                    break;
                case 3:
                    message.specGroup = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppMaterialGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.AppMaterialGroup} AppMaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMaterialGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppMaterialGroup message.
         * @function verify
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppMaterialGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                if (!$util.isString(message.groupName))
                    return "groupName: string expected";
            if (message.materialIds != null && message.hasOwnProperty("materialIds")) {
                if (!Array.isArray(message.materialIds))
                    return "materialIds: array expected";
                for (var i = 0; i < message.materialIds.length; ++i)
                    if (!$util.isString(message.materialIds[i]))
                        return "materialIds: string[] expected";
            }
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                if (!$util.isString(message.specGroup))
                    return "specGroup: string expected";
            return null;
        };

        /**
         * Creates an AppMaterialGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.AppMaterialGroup} AppMaterialGroup
         */
        AppMaterialGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.AppMaterialGroup)
                return object;
            var message = new $root.otsimo.AppMaterialGroup();
            if (object.groupName != null)
                message.groupName = String(object.groupName);
            if (object.materialIds) {
                if (!Array.isArray(object.materialIds))
                    throw TypeError(".otsimo.AppMaterialGroup.materialIds: array expected");
                message.materialIds = [];
                for (var i = 0; i < object.materialIds.length; ++i)
                    message.materialIds[i] = String(object.materialIds[i]);
            }
            if (object.specGroup != null)
                message.specGroup = String(object.specGroup);
            return message;
        };

        /**
         * Creates a plain object from an AppMaterialGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.AppMaterialGroup
         * @static
         * @param {otsimo.AppMaterialGroup} message AppMaterialGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppMaterialGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.materialIds = [];
            if (options.defaults) {
                object.groupName = "";
                object.specGroup = "";
            }
            if (message.groupName != null && message.hasOwnProperty("groupName"))
                object.groupName = message.groupName;
            if (message.materialIds && message.materialIds.length) {
                object.materialIds = [];
                for (var j = 0; j < message.materialIds.length; ++j)
                    object.materialIds[j] = message.materialIds[j];
            }
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                object.specGroup = message.specGroup;
            return object;
        };

        /**
         * Converts this AppMaterialGroup to JSON.
         * @function toJSON
         * @memberof otsimo.AppMaterialGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppMaterialGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppMaterialGroup;
    })();

    otsimo.AppMaterialGroupSerializor = (function() {

        /**
         * Properties of an AppMaterialGroupSerializor.
         * @memberof otsimo
         * @interface IAppMaterialGroupSerializor
         * @property {Array.<otsimo.IAppMaterialGroup>} [appMaterialGroups] AppMaterialGroupSerializor appMaterialGroups
         */

        /**
         * Constructs a new AppMaterialGroupSerializor.
         * @memberof otsimo
         * @classdesc Represents an AppMaterialGroupSerializor.
         * @constructor
         * @param {otsimo.IAppMaterialGroupSerializor=} [properties] Properties to set
         */
        function AppMaterialGroupSerializor(properties) {
            this.appMaterialGroups = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AppMaterialGroupSerializor appMaterialGroups.
         * @member {Array.<otsimo.IAppMaterialGroup>}appMaterialGroups
         * @memberof otsimo.AppMaterialGroupSerializor
         * @instance
         */
        AppMaterialGroupSerializor.prototype.appMaterialGroups = $util.emptyArray;

        /**
         * Creates a new AppMaterialGroupSerializor instance using the specified properties.
         * @function create
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {otsimo.IAppMaterialGroupSerializor=} [properties] Properties to set
         * @returns {otsimo.AppMaterialGroupSerializor} AppMaterialGroupSerializor instance
         */
        AppMaterialGroupSerializor.create = function create(properties) {
            return new AppMaterialGroupSerializor(properties);
        };

        /**
         * Encodes the specified AppMaterialGroupSerializor message. Does not implicitly {@link otsimo.AppMaterialGroupSerializor.verify|verify} messages.
         * @function encode
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {otsimo.IAppMaterialGroupSerializor} message AppMaterialGroupSerializor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMaterialGroupSerializor.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appMaterialGroups != null && message.appMaterialGroups.length)
                for (var i = 0; i < message.appMaterialGroups.length; ++i)
                    $root.otsimo.AppMaterialGroup.encode(message.appMaterialGroups[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AppMaterialGroupSerializor message, length delimited. Does not implicitly {@link otsimo.AppMaterialGroupSerializor.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {otsimo.IAppMaterialGroupSerializor} message AppMaterialGroupSerializor message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AppMaterialGroupSerializor.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AppMaterialGroupSerializor message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.AppMaterialGroupSerializor} AppMaterialGroupSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMaterialGroupSerializor.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.AppMaterialGroupSerializor();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.appMaterialGroups && message.appMaterialGroups.length))
                        message.appMaterialGroups = [];
                    message.appMaterialGroups.push($root.otsimo.AppMaterialGroup.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AppMaterialGroupSerializor message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.AppMaterialGroupSerializor} AppMaterialGroupSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AppMaterialGroupSerializor.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AppMaterialGroupSerializor message.
         * @function verify
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AppMaterialGroupSerializor.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appMaterialGroups != null && message.hasOwnProperty("appMaterialGroups")) {
                if (!Array.isArray(message.appMaterialGroups))
                    return "appMaterialGroups: array expected";
                for (var i = 0; i < message.appMaterialGroups.length; ++i) {
                    var error = $root.otsimo.AppMaterialGroup.verify(message.appMaterialGroups[i]);
                    if (error)
                        return "appMaterialGroups." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AppMaterialGroupSerializor message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.AppMaterialGroupSerializor} AppMaterialGroupSerializor
         */
        AppMaterialGroupSerializor.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.AppMaterialGroupSerializor)
                return object;
            var message = new $root.otsimo.AppMaterialGroupSerializor();
            if (object.appMaterialGroups) {
                if (!Array.isArray(object.appMaterialGroups))
                    throw TypeError(".otsimo.AppMaterialGroupSerializor.appMaterialGroups: array expected");
                message.appMaterialGroups = [];
                for (var i = 0; i < object.appMaterialGroups.length; ++i) {
                    if (typeof object.appMaterialGroups[i] !== "object")
                        throw TypeError(".otsimo.AppMaterialGroupSerializor.appMaterialGroups: object expected");
                    message.appMaterialGroups[i] = $root.otsimo.AppMaterialGroup.fromObject(object.appMaterialGroups[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AppMaterialGroupSerializor message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.AppMaterialGroupSerializor
         * @static
         * @param {otsimo.AppMaterialGroupSerializor} message AppMaterialGroupSerializor
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AppMaterialGroupSerializor.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.appMaterialGroups = [];
            if (message.appMaterialGroups && message.appMaterialGroups.length) {
                object.appMaterialGroups = [];
                for (var j = 0; j < message.appMaterialGroups.length; ++j)
                    object.appMaterialGroups[j] = $root.otsimo.AppMaterialGroup.toObject(message.appMaterialGroups[j], options);
            }
            return object;
        };

        /**
         * Converts this AppMaterialGroupSerializor to JSON.
         * @function toJSON
         * @memberof otsimo.AppMaterialGroupSerializor
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AppMaterialGroupSerializor.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AppMaterialGroupSerializor;
    })();

    otsimo.App = (function() {

        /**
         * Properties of an App.
         * @memberof otsimo
         * @interface IApp
         * @property {string} [id] App id
         * @property {string} [spec] App spec
         * @property {string} [name] App name
         * @property {Array.<otsimo.IComponent>} [components] App components
         * @property {Array.<otsimo.IAppMaterialGroup>} [materialGroups] App materialGroups
         * @property {Array.<string>} [env] App env
         * @property {string} [createdBy] App createdBy
         * @property {boolean} [disabled] App disabled
         * @property {number|Long} [createdAt] App createdAt
         * @property {number|Long} [updatedAt] App updatedAt
         * @property {Object.<string,string>} [labels] App labels
         * @property {string} [buildVersion] App buildVersion
         */

        /**
         * Constructs a new App.
         * @memberof otsimo
         * @classdesc Represents an App.
         * @constructor
         * @param {otsimo.IApp=} [properties] Properties to set
         */
        function App(properties) {
            this.components = [];
            this.materialGroups = [];
            this.env = [];
            this.labels = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * App id.
         * @member {string}id
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.id = "";

        /**
         * App spec.
         * @member {string}spec
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.spec = "";

        /**
         * App name.
         * @member {string}name
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.name = "";

        /**
         * App components.
         * @member {Array.<otsimo.IComponent>}components
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.components = $util.emptyArray;

        /**
         * App materialGroups.
         * @member {Array.<otsimo.IAppMaterialGroup>}materialGroups
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.materialGroups = $util.emptyArray;

        /**
         * App env.
         * @member {Array.<string>}env
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.env = $util.emptyArray;

        /**
         * App createdBy.
         * @member {string}createdBy
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.createdBy = "";

        /**
         * App disabled.
         * @member {boolean}disabled
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.disabled = false;

        /**
         * App createdAt.
         * @member {number|Long}createdAt
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.createdAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * App updatedAt.
         * @member {number|Long}updatedAt
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.updatedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * App labels.
         * @member {Object.<string,string>}labels
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.labels = $util.emptyObject;

        /**
         * App buildVersion.
         * @member {string}buildVersion
         * @memberof otsimo.App
         * @instance
         */
        App.prototype.buildVersion = "";

        /**
         * Creates a new App instance using the specified properties.
         * @function create
         * @memberof otsimo.App
         * @static
         * @param {otsimo.IApp=} [properties] Properties to set
         * @returns {otsimo.App} App instance
         */
        App.create = function create(properties) {
            return new App(properties);
        };

        /**
         * Encodes the specified App message. Does not implicitly {@link otsimo.App.verify|verify} messages.
         * @function encode
         * @memberof otsimo.App
         * @static
         * @param {otsimo.IApp} message App message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        App.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.spec != null && message.hasOwnProperty("spec"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.spec);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.components != null && message.components.length)
                for (var i = 0; i < message.components.length; ++i)
                    $root.otsimo.Component.encode(message.components[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.materialGroups != null && message.materialGroups.length)
                for (var i = 0; i < message.materialGroups.length; ++i)
                    $root.otsimo.AppMaterialGroup.encode(message.materialGroups[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.env != null && message.env.length)
                for (var i = 0; i < message.env.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.env[i]);
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.createdBy);
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.disabled);
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.createdAt);
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.updatedAt);
            if (message.labels != null && message.hasOwnProperty("labels"))
                for (var keys = Object.keys(message.labels), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.labels[keys[i]]).ldelim();
            if (message.buildVersion != null && message.hasOwnProperty("buildVersion"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.buildVersion);
            return writer;
        };

        /**
         * Encodes the specified App message, length delimited. Does not implicitly {@link otsimo.App.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.App
         * @static
         * @param {otsimo.IApp} message App message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        App.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an App message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.App
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.App} App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        App.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.App(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.spec = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    if (!(message.components && message.components.length))
                        message.components = [];
                    message.components.push($root.otsimo.Component.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.materialGroups && message.materialGroups.length))
                        message.materialGroups = [];
                    message.materialGroups.push($root.otsimo.AppMaterialGroup.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.env && message.env.length))
                        message.env = [];
                    message.env.push(reader.string());
                    break;
                case 9:
                    message.createdBy = reader.string();
                    break;
                case 10:
                    message.disabled = reader.bool();
                    break;
                case 11:
                    message.createdAt = reader.int64();
                    break;
                case 12:
                    message.updatedAt = reader.int64();
                    break;
                case 13:
                    reader.skip().pos++;
                    if (message.labels === $util.emptyObject)
                        message.labels = {};
                    key = reader.string();
                    reader.pos++;
                    message.labels[key] = reader.string();
                    break;
                case 14:
                    message.buildVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an App message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.App
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.App} App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        App.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an App message.
         * @function verify
         * @memberof otsimo.App
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        App.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.spec != null && message.hasOwnProperty("spec"))
                if (!$util.isString(message.spec))
                    return "spec: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.components != null && message.hasOwnProperty("components")) {
                if (!Array.isArray(message.components))
                    return "components: array expected";
                for (var i = 0; i < message.components.length; ++i) {
                    var error = $root.otsimo.Component.verify(message.components[i]);
                    if (error)
                        return "components." + error;
                }
            }
            if (message.materialGroups != null && message.hasOwnProperty("materialGroups")) {
                if (!Array.isArray(message.materialGroups))
                    return "materialGroups: array expected";
                for (var i = 0; i < message.materialGroups.length; ++i) {
                    error = $root.otsimo.AppMaterialGroup.verify(message.materialGroups[i]);
                    if (error)
                        return "materialGroups." + error;
                }
            }
            if (message.env != null && message.hasOwnProperty("env")) {
                if (!Array.isArray(message.env))
                    return "env: array expected";
                for (var i = 0; i < message.env.length; ++i)
                    if (!$util.isString(message.env[i]))
                        return "env: string[] expected";
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                if (!$util.isString(message.createdBy))
                    return "createdBy: string expected";
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                if (typeof message.disabled !== "boolean")
                    return "disabled: boolean expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isInteger(message.createdAt) && !(message.createdAt && $util.isInteger(message.createdAt.low) && $util.isInteger(message.createdAt.high)))
                    return "createdAt: integer|Long expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isInteger(message.updatedAt) && !(message.updatedAt && $util.isInteger(message.updatedAt.low) && $util.isInteger(message.updatedAt.high)))
                    return "updatedAt: integer|Long expected";
            if (message.labels != null && message.hasOwnProperty("labels")) {
                if (!$util.isObject(message.labels))
                    return "labels: object expected";
                var key = Object.keys(message.labels);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.labels[key[i]]))
                        return "labels: string{k:string} expected";
            }
            if (message.buildVersion != null && message.hasOwnProperty("buildVersion"))
                if (!$util.isString(message.buildVersion))
                    return "buildVersion: string expected";
            return null;
        };

        /**
         * Creates an App message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.App
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.App} App
         */
        App.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.App)
                return object;
            var message = new $root.otsimo.App();
            if (object.id != null)
                message.id = String(object.id);
            if (object.spec != null)
                message.spec = String(object.spec);
            if (object.name != null)
                message.name = String(object.name);
            if (object.components) {
                if (!Array.isArray(object.components))
                    throw TypeError(".otsimo.App.components: array expected");
                message.components = [];
                for (var i = 0; i < object.components.length; ++i) {
                    if (typeof object.components[i] !== "object")
                        throw TypeError(".otsimo.App.components: object expected");
                    message.components[i] = $root.otsimo.Component.fromObject(object.components[i]);
                }
            }
            if (object.materialGroups) {
                if (!Array.isArray(object.materialGroups))
                    throw TypeError(".otsimo.App.materialGroups: array expected");
                message.materialGroups = [];
                for (var i = 0; i < object.materialGroups.length; ++i) {
                    if (typeof object.materialGroups[i] !== "object")
                        throw TypeError(".otsimo.App.materialGroups: object expected");
                    message.materialGroups[i] = $root.otsimo.AppMaterialGroup.fromObject(object.materialGroups[i]);
                }
            }
            if (object.env) {
                if (!Array.isArray(object.env))
                    throw TypeError(".otsimo.App.env: array expected");
                message.env = [];
                for (var i = 0; i < object.env.length; ++i)
                    message.env[i] = String(object.env[i]);
            }
            if (object.createdBy != null)
                message.createdBy = String(object.createdBy);
            if (object.disabled != null)
                message.disabled = Boolean(object.disabled);
            if (object.createdAt != null)
                if ($util.Long)
                    (message.createdAt = $util.Long.fromValue(object.createdAt)).unsigned = false;
                else if (typeof object.createdAt === "string")
                    message.createdAt = parseInt(object.createdAt, 10);
                else if (typeof object.createdAt === "number")
                    message.createdAt = object.createdAt;
                else if (typeof object.createdAt === "object")
                    message.createdAt = new $util.LongBits(object.createdAt.low >>> 0, object.createdAt.high >>> 0).toNumber();
            if (object.updatedAt != null)
                if ($util.Long)
                    (message.updatedAt = $util.Long.fromValue(object.updatedAt)).unsigned = false;
                else if (typeof object.updatedAt === "string")
                    message.updatedAt = parseInt(object.updatedAt, 10);
                else if (typeof object.updatedAt === "number")
                    message.updatedAt = object.updatedAt;
                else if (typeof object.updatedAt === "object")
                    message.updatedAt = new $util.LongBits(object.updatedAt.low >>> 0, object.updatedAt.high >>> 0).toNumber();
            if (object.labels) {
                if (typeof object.labels !== "object")
                    throw TypeError(".otsimo.App.labels: object expected");
                message.labels = {};
                for (var keys = Object.keys(object.labels), i = 0; i < keys.length; ++i)
                    message.labels[keys[i]] = String(object.labels[keys[i]]);
            }
            if (object.buildVersion != null)
                message.buildVersion = String(object.buildVersion);
            return message;
        };

        /**
         * Creates a plain object from an App message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.App
         * @static
         * @param {otsimo.App} message App
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        App.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.components = [];
                object.materialGroups = [];
                object.env = [];
            }
            if (options.objects || options.defaults)
                object.labels = {};
            if (options.defaults) {
                object.id = "";
                object.spec = "";
                object.name = "";
                object.createdBy = "";
                object.disabled = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.createdAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.createdAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.updatedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.updatedAt = options.longs === String ? "0" : 0;
                object.buildVersion = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.spec != null && message.hasOwnProperty("spec"))
                object.spec = message.spec;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.components && message.components.length) {
                object.components = [];
                for (var j = 0; j < message.components.length; ++j)
                    object.components[j] = $root.otsimo.Component.toObject(message.components[j], options);
            }
            if (message.materialGroups && message.materialGroups.length) {
                object.materialGroups = [];
                for (var j = 0; j < message.materialGroups.length; ++j)
                    object.materialGroups[j] = $root.otsimo.AppMaterialGroup.toObject(message.materialGroups[j], options);
            }
            if (message.env && message.env.length) {
                object.env = [];
                for (var j = 0; j < message.env.length; ++j)
                    object.env[j] = message.env[j];
            }
            if (message.createdBy != null && message.hasOwnProperty("createdBy"))
                object.createdBy = message.createdBy;
            if (message.disabled != null && message.hasOwnProperty("disabled"))
                object.disabled = message.disabled;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (typeof message.createdAt === "number")
                    object.createdAt = options.longs === String ? String(message.createdAt) : message.createdAt;
                else
                    object.createdAt = options.longs === String ? $util.Long.prototype.toString.call(message.createdAt) : options.longs === Number ? new $util.LongBits(message.createdAt.low >>> 0, message.createdAt.high >>> 0).toNumber() : message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (typeof message.updatedAt === "number")
                    object.updatedAt = options.longs === String ? String(message.updatedAt) : message.updatedAt;
                else
                    object.updatedAt = options.longs === String ? $util.Long.prototype.toString.call(message.updatedAt) : options.longs === Number ? new $util.LongBits(message.updatedAt.low >>> 0, message.updatedAt.high >>> 0).toNumber() : message.updatedAt;
            var keys2;
            if (message.labels && (keys2 = Object.keys(message.labels)).length) {
                object.labels = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.labels[keys2[j]] = message.labels[keys2[j]];
            }
            if (message.buildVersion != null && message.hasOwnProperty("buildVersion"))
                object.buildVersion = message.buildVersion;
            return object;
        };

        /**
         * Converts this App to JSON.
         * @function toJSON
         * @memberof otsimo.App
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        App.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return App;
    })();

    otsimo.GameBuild = (function() {

        /**
         * Properties of a GameBuild.
         * @memberof otsimo
         * @interface IGameBuild
         * @property {string} [buildId] GameBuild buildId
         * @property {Array.<otsimo.ITask>} [tasks] GameBuild tasks
         * @property {otsimo.IApp} [app] GameBuild app
         * @property {otsimo.IAppSpec} [spec] GameBuild spec
         * @property {Array.<otsimo.IGameLocale>} [locales] GameBuild locales
         */

        /**
         * Constructs a new GameBuild.
         * @memberof otsimo
         * @classdesc Represents a GameBuild.
         * @constructor
         * @param {otsimo.IGameBuild=} [properties] Properties to set
         */
        function GameBuild(properties) {
            this.tasks = [];
            this.locales = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameBuild buildId.
         * @member {string}buildId
         * @memberof otsimo.GameBuild
         * @instance
         */
        GameBuild.prototype.buildId = "";

        /**
         * GameBuild tasks.
         * @member {Array.<otsimo.ITask>}tasks
         * @memberof otsimo.GameBuild
         * @instance
         */
        GameBuild.prototype.tasks = $util.emptyArray;

        /**
         * GameBuild app.
         * @member {(otsimo.IApp|null|undefined)}app
         * @memberof otsimo.GameBuild
         * @instance
         */
        GameBuild.prototype.app = null;

        /**
         * GameBuild spec.
         * @member {(otsimo.IAppSpec|null|undefined)}spec
         * @memberof otsimo.GameBuild
         * @instance
         */
        GameBuild.prototype.spec = null;

        /**
         * GameBuild locales.
         * @member {Array.<otsimo.IGameLocale>}locales
         * @memberof otsimo.GameBuild
         * @instance
         */
        GameBuild.prototype.locales = $util.emptyArray;

        /**
         * Creates a new GameBuild instance using the specified properties.
         * @function create
         * @memberof otsimo.GameBuild
         * @static
         * @param {otsimo.IGameBuild=} [properties] Properties to set
         * @returns {otsimo.GameBuild} GameBuild instance
         */
        GameBuild.create = function create(properties) {
            return new GameBuild(properties);
        };

        /**
         * Encodes the specified GameBuild message. Does not implicitly {@link otsimo.GameBuild.verify|verify} messages.
         * @function encode
         * @memberof otsimo.GameBuild
         * @static
         * @param {otsimo.IGameBuild} message GameBuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBuild.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.buildId);
            if (message.tasks != null && message.tasks.length)
                for (var i = 0; i < message.tasks.length; ++i)
                    $root.otsimo.Task.encode(message.tasks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.app != null && message.hasOwnProperty("app"))
                $root.otsimo.App.encode(message.app, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.spec != null && message.hasOwnProperty("spec"))
                $root.otsimo.AppSpec.encode(message.spec, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.locales != null && message.locales.length)
                for (var i = 0; i < message.locales.length; ++i)
                    $root.otsimo.GameLocale.encode(message.locales[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameBuild message, length delimited. Does not implicitly {@link otsimo.GameBuild.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.GameBuild
         * @static
         * @param {otsimo.IGameBuild} message GameBuild message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameBuild.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameBuild message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.GameBuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.GameBuild} GameBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBuild.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.GameBuild();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.buildId = reader.string();
                    break;
                case 2:
                    if (!(message.tasks && message.tasks.length))
                        message.tasks = [];
                    message.tasks.push($root.otsimo.Task.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.app = $root.otsimo.App.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.spec = $root.otsimo.AppSpec.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.locales && message.locales.length))
                        message.locales = [];
                    message.locales.push($root.otsimo.GameLocale.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameBuild message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.GameBuild
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.GameBuild} GameBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameBuild.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameBuild message.
         * @function verify
         * @memberof otsimo.GameBuild
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameBuild.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                if (!$util.isString(message.buildId))
                    return "buildId: string expected";
            if (message.tasks != null && message.hasOwnProperty("tasks")) {
                if (!Array.isArray(message.tasks))
                    return "tasks: array expected";
                for (var i = 0; i < message.tasks.length; ++i) {
                    var error = $root.otsimo.Task.verify(message.tasks[i]);
                    if (error)
                        return "tasks." + error;
                }
            }
            if (message.app != null && message.hasOwnProperty("app")) {
                error = $root.otsimo.App.verify(message.app);
                if (error)
                    return "app." + error;
            }
            if (message.spec != null && message.hasOwnProperty("spec")) {
                error = $root.otsimo.AppSpec.verify(message.spec);
                if (error)
                    return "spec." + error;
            }
            if (message.locales != null && message.hasOwnProperty("locales")) {
                if (!Array.isArray(message.locales))
                    return "locales: array expected";
                for (var i = 0; i < message.locales.length; ++i) {
                    error = $root.otsimo.GameLocale.verify(message.locales[i]);
                    if (error)
                        return "locales." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameBuild message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.GameBuild
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.GameBuild} GameBuild
         */
        GameBuild.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.GameBuild)
                return object;
            var message = new $root.otsimo.GameBuild();
            if (object.buildId != null)
                message.buildId = String(object.buildId);
            if (object.tasks) {
                if (!Array.isArray(object.tasks))
                    throw TypeError(".otsimo.GameBuild.tasks: array expected");
                message.tasks = [];
                for (var i = 0; i < object.tasks.length; ++i) {
                    if (typeof object.tasks[i] !== "object")
                        throw TypeError(".otsimo.GameBuild.tasks: object expected");
                    message.tasks[i] = $root.otsimo.Task.fromObject(object.tasks[i]);
                }
            }
            if (object.app != null) {
                if (typeof object.app !== "object")
                    throw TypeError(".otsimo.GameBuild.app: object expected");
                message.app = $root.otsimo.App.fromObject(object.app);
            }
            if (object.spec != null) {
                if (typeof object.spec !== "object")
                    throw TypeError(".otsimo.GameBuild.spec: object expected");
                message.spec = $root.otsimo.AppSpec.fromObject(object.spec);
            }
            if (object.locales) {
                if (!Array.isArray(object.locales))
                    throw TypeError(".otsimo.GameBuild.locales: array expected");
                message.locales = [];
                for (var i = 0; i < object.locales.length; ++i) {
                    if (typeof object.locales[i] !== "object")
                        throw TypeError(".otsimo.GameBuild.locales: object expected");
                    message.locales[i] = $root.otsimo.GameLocale.fromObject(object.locales[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameBuild message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.GameBuild
         * @static
         * @param {otsimo.GameBuild} message GameBuild
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameBuild.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.tasks = [];
                object.locales = [];
            }
            if (options.defaults) {
                object.buildId = "";
                object.app = null;
                object.spec = null;
            }
            if (message.buildId != null && message.hasOwnProperty("buildId"))
                object.buildId = message.buildId;
            if (message.tasks && message.tasks.length) {
                object.tasks = [];
                for (var j = 0; j < message.tasks.length; ++j)
                    object.tasks[j] = $root.otsimo.Task.toObject(message.tasks[j], options);
            }
            if (message.app != null && message.hasOwnProperty("app"))
                object.app = $root.otsimo.App.toObject(message.app, options);
            if (message.spec != null && message.hasOwnProperty("spec"))
                object.spec = $root.otsimo.AppSpec.toObject(message.spec, options);
            if (message.locales && message.locales.length) {
                object.locales = [];
                for (var j = 0; j < message.locales.length; ++j)
                    object.locales[j] = $root.otsimo.GameLocale.toObject(message.locales[j], options);
            }
            return object;
        };

        /**
         * Converts this GameBuild to JSON.
         * @function toJSON
         * @memberof otsimo.GameBuild
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameBuild.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameBuild;
    })();

    otsimo.Task = (function() {

        /**
         * Properties of a Task.
         * @memberof otsimo
         * @interface ITask
         * @property {otsimo.IBuildTask} [build] Task build
         * @property {otsimo.IDeployTask} [deploy] Task deploy
         * @property {otsimo.IPreviewTask} [preview] Task preview
         */

        /**
         * Constructs a new Task.
         * @memberof otsimo
         * @classdesc Represents a Task.
         * @constructor
         * @param {otsimo.ITask=} [properties] Properties to set
         */
        function Task(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Task build.
         * @member {(otsimo.IBuildTask|null|undefined)}build
         * @memberof otsimo.Task
         * @instance
         */
        Task.prototype.build = null;

        /**
         * Task deploy.
         * @member {(otsimo.IDeployTask|null|undefined)}deploy
         * @memberof otsimo.Task
         * @instance
         */
        Task.prototype.deploy = null;

        /**
         * Task preview.
         * @member {(otsimo.IPreviewTask|null|undefined)}preview
         * @memberof otsimo.Task
         * @instance
         */
        Task.prototype.preview = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Task task.
         * @member {string|undefined} task
         * @memberof otsimo.Task
         * @instance
         */
        Object.defineProperty(Task.prototype, "task", {
            get: $util.oneOfGetter($oneOfFields = ["build", "deploy", "preview"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Task instance using the specified properties.
         * @function create
         * @memberof otsimo.Task
         * @static
         * @param {otsimo.ITask=} [properties] Properties to set
         * @returns {otsimo.Task} Task instance
         */
        Task.create = function create(properties) {
            return new Task(properties);
        };

        /**
         * Encodes the specified Task message. Does not implicitly {@link otsimo.Task.verify|verify} messages.
         * @function encode
         * @memberof otsimo.Task
         * @static
         * @param {otsimo.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.build != null && message.hasOwnProperty("build"))
                $root.otsimo.BuildTask.encode(message.build, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.deploy != null && message.hasOwnProperty("deploy"))
                $root.otsimo.DeployTask.encode(message.deploy, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.preview != null && message.hasOwnProperty("preview"))
                $root.otsimo.PreviewTask.encode(message.preview, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link otsimo.Task.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.Task
         * @static
         * @param {otsimo.ITask} message Task message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Task.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.Task();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.build = $root.otsimo.BuildTask.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deploy = $root.otsimo.DeployTask.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.preview = $root.otsimo.PreviewTask.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.Task
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.Task} Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Task.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Task message.
         * @function verify
         * @memberof otsimo.Task
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Task.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.build != null && message.hasOwnProperty("build")) {
                properties.task = 1;
                var error = $root.otsimo.BuildTask.verify(message.build);
                if (error)
                    return "build." + error;
            }
            if (message.deploy != null && message.hasOwnProperty("deploy")) {
                if (properties.task === 1)
                    return "task: multiple values";
                properties.task = 1;
                error = $root.otsimo.DeployTask.verify(message.deploy);
                if (error)
                    return "deploy." + error;
            }
            if (message.preview != null && message.hasOwnProperty("preview")) {
                if (properties.task === 1)
                    return "task: multiple values";
                properties.task = 1;
                error = $root.otsimo.PreviewTask.verify(message.preview);
                if (error)
                    return "preview." + error;
            }
            return null;
        };

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.Task
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.Task} Task
         */
        Task.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.Task)
                return object;
            var message = new $root.otsimo.Task();
            if (object.build != null) {
                if (typeof object.build !== "object")
                    throw TypeError(".otsimo.Task.build: object expected");
                message.build = $root.otsimo.BuildTask.fromObject(object.build);
            }
            if (object.deploy != null) {
                if (typeof object.deploy !== "object")
                    throw TypeError(".otsimo.Task.deploy: object expected");
                message.deploy = $root.otsimo.DeployTask.fromObject(object.deploy);
            }
            if (object.preview != null) {
                if (typeof object.preview !== "object")
                    throw TypeError(".otsimo.Task.preview: object expected");
                message.preview = $root.otsimo.PreviewTask.fromObject(object.preview);
            }
            return message;
        };

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.Task
         * @static
         * @param {otsimo.Task} message Task
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Task.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.build != null && message.hasOwnProperty("build")) {
                object.build = $root.otsimo.BuildTask.toObject(message.build, options);
                if (options.oneofs)
                    object.task = "build";
            }
            if (message.deploy != null && message.hasOwnProperty("deploy")) {
                object.deploy = $root.otsimo.DeployTask.toObject(message.deploy, options);
                if (options.oneofs)
                    object.task = "deploy";
            }
            if (message.preview != null && message.hasOwnProperty("preview")) {
                object.preview = $root.otsimo.PreviewTask.toObject(message.preview, options);
                if (options.oneofs)
                    object.task = "preview";
            }
            return object;
        };

        /**
         * Converts this Task to JSON.
         * @function toJSON
         * @memberof otsimo.Task
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Task.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Task;
    })();

    otsimo.BuildTask = (function() {

        /**
         * Properties of a BuildTask.
         * @memberof otsimo
         * @interface IBuildTask
         * @property {string} [command] BuildTask command
         * @property {Array.<string>} [env] BuildTask env
         * @property {string} [gitRepo] BuildTask gitRepo
         * @property {string} [gitBranch] BuildTask gitBranch
         */

        /**
         * Constructs a new BuildTask.
         * @memberof otsimo
         * @classdesc Represents a BuildTask.
         * @constructor
         * @param {otsimo.IBuildTask=} [properties] Properties to set
         */
        function BuildTask(properties) {
            this.env = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BuildTask command.
         * @member {string}command
         * @memberof otsimo.BuildTask
         * @instance
         */
        BuildTask.prototype.command = "";

        /**
         * BuildTask env.
         * @member {Array.<string>}env
         * @memberof otsimo.BuildTask
         * @instance
         */
        BuildTask.prototype.env = $util.emptyArray;

        /**
         * BuildTask gitRepo.
         * @member {string}gitRepo
         * @memberof otsimo.BuildTask
         * @instance
         */
        BuildTask.prototype.gitRepo = "";

        /**
         * BuildTask gitBranch.
         * @member {string}gitBranch
         * @memberof otsimo.BuildTask
         * @instance
         */
        BuildTask.prototype.gitBranch = "";

        /**
         * Creates a new BuildTask instance using the specified properties.
         * @function create
         * @memberof otsimo.BuildTask
         * @static
         * @param {otsimo.IBuildTask=} [properties] Properties to set
         * @returns {otsimo.BuildTask} BuildTask instance
         */
        BuildTask.create = function create(properties) {
            return new BuildTask(properties);
        };

        /**
         * Encodes the specified BuildTask message. Does not implicitly {@link otsimo.BuildTask.verify|verify} messages.
         * @function encode
         * @memberof otsimo.BuildTask
         * @static
         * @param {otsimo.IBuildTask} message BuildTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && message.hasOwnProperty("command"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.command);
            if (message.env != null && message.env.length)
                for (var i = 0; i < message.env.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.env[i]);
            if (message.gitRepo != null && message.hasOwnProperty("gitRepo"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gitRepo);
            if (message.gitBranch != null && message.hasOwnProperty("gitBranch"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.gitBranch);
            return writer;
        };

        /**
         * Encodes the specified BuildTask message, length delimited. Does not implicitly {@link otsimo.BuildTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.BuildTask
         * @static
         * @param {otsimo.IBuildTask} message BuildTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BuildTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BuildTask message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.BuildTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.BuildTask} BuildTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.BuildTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = reader.string();
                    break;
                case 2:
                    if (!(message.env && message.env.length))
                        message.env = [];
                    message.env.push(reader.string());
                    break;
                case 3:
                    message.gitRepo = reader.string();
                    break;
                case 4:
                    message.gitBranch = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BuildTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.BuildTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.BuildTask} BuildTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BuildTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BuildTask message.
         * @function verify
         * @memberof otsimo.BuildTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BuildTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command"))
                if (!$util.isString(message.command))
                    return "command: string expected";
            if (message.env != null && message.hasOwnProperty("env")) {
                if (!Array.isArray(message.env))
                    return "env: array expected";
                for (var i = 0; i < message.env.length; ++i)
                    if (!$util.isString(message.env[i]))
                        return "env: string[] expected";
            }
            if (message.gitRepo != null && message.hasOwnProperty("gitRepo"))
                if (!$util.isString(message.gitRepo))
                    return "gitRepo: string expected";
            if (message.gitBranch != null && message.hasOwnProperty("gitBranch"))
                if (!$util.isString(message.gitBranch))
                    return "gitBranch: string expected";
            return null;
        };

        /**
         * Creates a BuildTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.BuildTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.BuildTask} BuildTask
         */
        BuildTask.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.BuildTask)
                return object;
            var message = new $root.otsimo.BuildTask();
            if (object.command != null)
                message.command = String(object.command);
            if (object.env) {
                if (!Array.isArray(object.env))
                    throw TypeError(".otsimo.BuildTask.env: array expected");
                message.env = [];
                for (var i = 0; i < object.env.length; ++i)
                    message.env[i] = String(object.env[i]);
            }
            if (object.gitRepo != null)
                message.gitRepo = String(object.gitRepo);
            if (object.gitBranch != null)
                message.gitBranch = String(object.gitBranch);
            return message;
        };

        /**
         * Creates a plain object from a BuildTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.BuildTask
         * @static
         * @param {otsimo.BuildTask} message BuildTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BuildTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.env = [];
            if (options.defaults) {
                object.command = "";
                object.gitRepo = "";
                object.gitBranch = "";
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = message.command;
            if (message.env && message.env.length) {
                object.env = [];
                for (var j = 0; j < message.env.length; ++j)
                    object.env[j] = message.env[j];
            }
            if (message.gitRepo != null && message.hasOwnProperty("gitRepo"))
                object.gitRepo = message.gitRepo;
            if (message.gitBranch != null && message.hasOwnProperty("gitBranch"))
                object.gitBranch = message.gitBranch;
            return object;
        };

        /**
         * Converts this BuildTask to JSON.
         * @function toJSON
         * @memberof otsimo.BuildTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BuildTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BuildTask;
    })();

    otsimo.DeployTask = (function() {

        /**
         * Properties of a DeployTask.
         * @memberof otsimo
         * @interface IDeployTask
         * @property {string} [type] DeployTask type
         */

        /**
         * Constructs a new DeployTask.
         * @memberof otsimo
         * @classdesc Represents a DeployTask.
         * @constructor
         * @param {otsimo.IDeployTask=} [properties] Properties to set
         */
        function DeployTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeployTask type.
         * @member {string}type
         * @memberof otsimo.DeployTask
         * @instance
         */
        DeployTask.prototype.type = "";

        /**
         * Creates a new DeployTask instance using the specified properties.
         * @function create
         * @memberof otsimo.DeployTask
         * @static
         * @param {otsimo.IDeployTask=} [properties] Properties to set
         * @returns {otsimo.DeployTask} DeployTask instance
         */
        DeployTask.create = function create(properties) {
            return new DeployTask(properties);
        };

        /**
         * Encodes the specified DeployTask message. Does not implicitly {@link otsimo.DeployTask.verify|verify} messages.
         * @function encode
         * @memberof otsimo.DeployTask
         * @static
         * @param {otsimo.IDeployTask} message DeployTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeployTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            return writer;
        };

        /**
         * Encodes the specified DeployTask message, length delimited. Does not implicitly {@link otsimo.DeployTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.DeployTask
         * @static
         * @param {otsimo.IDeployTask} message DeployTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeployTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeployTask message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.DeployTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.DeployTask} DeployTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeployTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.DeployTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeployTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.DeployTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.DeployTask} DeployTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeployTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeployTask message.
         * @function verify
         * @memberof otsimo.DeployTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeployTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            return null;
        };

        /**
         * Creates a DeployTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.DeployTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.DeployTask} DeployTask
         */
        DeployTask.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.DeployTask)
                return object;
            var message = new $root.otsimo.DeployTask();
            if (object.type != null)
                message.type = String(object.type);
            return message;
        };

        /**
         * Creates a plain object from a DeployTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.DeployTask
         * @static
         * @param {otsimo.DeployTask} message DeployTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeployTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.type = "";
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this DeployTask to JSON.
         * @function toJSON
         * @memberof otsimo.DeployTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeployTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DeployTask;
    })();

    otsimo.PreviewTask = (function() {

        /**
         * Properties of a PreviewTask.
         * @memberof otsimo
         * @interface IPreviewTask
         * @property {string} [uploadBucket] PreviewTask uploadBucket
         * @property {string} [uploadFolder] PreviewTask uploadFolder
         */

        /**
         * Constructs a new PreviewTask.
         * @memberof otsimo
         * @classdesc Represents a PreviewTask.
         * @constructor
         * @param {otsimo.IPreviewTask=} [properties] Properties to set
         */
        function PreviewTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreviewTask uploadBucket.
         * @member {string}uploadBucket
         * @memberof otsimo.PreviewTask
         * @instance
         */
        PreviewTask.prototype.uploadBucket = "";

        /**
         * PreviewTask uploadFolder.
         * @member {string}uploadFolder
         * @memberof otsimo.PreviewTask
         * @instance
         */
        PreviewTask.prototype.uploadFolder = "";

        /**
         * Creates a new PreviewTask instance using the specified properties.
         * @function create
         * @memberof otsimo.PreviewTask
         * @static
         * @param {otsimo.IPreviewTask=} [properties] Properties to set
         * @returns {otsimo.PreviewTask} PreviewTask instance
         */
        PreviewTask.create = function create(properties) {
            return new PreviewTask(properties);
        };

        /**
         * Encodes the specified PreviewTask message. Does not implicitly {@link otsimo.PreviewTask.verify|verify} messages.
         * @function encode
         * @memberof otsimo.PreviewTask
         * @static
         * @param {otsimo.IPreviewTask} message PreviewTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreviewTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uploadBucket != null && message.hasOwnProperty("uploadBucket"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uploadBucket);
            if (message.uploadFolder != null && message.hasOwnProperty("uploadFolder"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uploadFolder);
            return writer;
        };

        /**
         * Encodes the specified PreviewTask message, length delimited. Does not implicitly {@link otsimo.PreviewTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.PreviewTask
         * @static
         * @param {otsimo.IPreviewTask} message PreviewTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreviewTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreviewTask message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.PreviewTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.PreviewTask} PreviewTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreviewTask.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.PreviewTask();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uploadBucket = reader.string();
                    break;
                case 2:
                    message.uploadFolder = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PreviewTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.PreviewTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.PreviewTask} PreviewTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreviewTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreviewTask message.
         * @function verify
         * @memberof otsimo.PreviewTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreviewTask.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uploadBucket != null && message.hasOwnProperty("uploadBucket"))
                if (!$util.isString(message.uploadBucket))
                    return "uploadBucket: string expected";
            if (message.uploadFolder != null && message.hasOwnProperty("uploadFolder"))
                if (!$util.isString(message.uploadFolder))
                    return "uploadFolder: string expected";
            return null;
        };

        /**
         * Creates a PreviewTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.PreviewTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.PreviewTask} PreviewTask
         */
        PreviewTask.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.PreviewTask)
                return object;
            var message = new $root.otsimo.PreviewTask();
            if (object.uploadBucket != null)
                message.uploadBucket = String(object.uploadBucket);
            if (object.uploadFolder != null)
                message.uploadFolder = String(object.uploadFolder);
            return message;
        };

        /**
         * Creates a plain object from a PreviewTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.PreviewTask
         * @static
         * @param {otsimo.PreviewTask} message PreviewTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreviewTask.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.uploadBucket = "";
                object.uploadFolder = "";
            }
            if (message.uploadBucket != null && message.hasOwnProperty("uploadBucket"))
                object.uploadBucket = message.uploadBucket;
            if (message.uploadFolder != null && message.hasOwnProperty("uploadFolder"))
                object.uploadFolder = message.uploadFolder;
            return object;
        };

        /**
         * Converts this PreviewTask to JSON.
         * @function toJSON
         * @memberof otsimo.PreviewTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreviewTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PreviewTask;
    })();

    otsimo.GameLocale = (function() {

        /**
         * Properties of a GameLocale.
         * @memberof otsimo
         * @interface IGameLocale
         * @property {string} [language] GameLocale language
         * @property {Array.<otsimo.IMaterialGroup>} [groups] GameLocale groups
         * @property {Array.<otsimo.IComponent>} [components] GameLocale components
         */

        /**
         * Constructs a new GameLocale.
         * @memberof otsimo
         * @classdesc Represents a GameLocale.
         * @constructor
         * @param {otsimo.IGameLocale=} [properties] Properties to set
         */
        function GameLocale(properties) {
            this.groups = [];
            this.components = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLocale language.
         * @member {string}language
         * @memberof otsimo.GameLocale
         * @instance
         */
        GameLocale.prototype.language = "";

        /**
         * GameLocale groups.
         * @member {Array.<otsimo.IMaterialGroup>}groups
         * @memberof otsimo.GameLocale
         * @instance
         */
        GameLocale.prototype.groups = $util.emptyArray;

        /**
         * GameLocale components.
         * @member {Array.<otsimo.IComponent>}components
         * @memberof otsimo.GameLocale
         * @instance
         */
        GameLocale.prototype.components = $util.emptyArray;

        /**
         * Creates a new GameLocale instance using the specified properties.
         * @function create
         * @memberof otsimo.GameLocale
         * @static
         * @param {otsimo.IGameLocale=} [properties] Properties to set
         * @returns {otsimo.GameLocale} GameLocale instance
         */
        GameLocale.create = function create(properties) {
            return new GameLocale(properties);
        };

        /**
         * Encodes the specified GameLocale message. Does not implicitly {@link otsimo.GameLocale.verify|verify} messages.
         * @function encode
         * @memberof otsimo.GameLocale
         * @static
         * @param {otsimo.IGameLocale} message GameLocale message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLocale.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.language != null && message.hasOwnProperty("language"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.language);
            if (message.groups != null && message.groups.length)
                for (var i = 0; i < message.groups.length; ++i)
                    $root.otsimo.MaterialGroup.encode(message.groups[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.components != null && message.components.length)
                for (var i = 0; i < message.components.length; ++i)
                    $root.otsimo.Component.encode(message.components[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameLocale message, length delimited. Does not implicitly {@link otsimo.GameLocale.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.GameLocale
         * @static
         * @param {otsimo.IGameLocale} message GameLocale message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLocale.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLocale message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.GameLocale
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.GameLocale} GameLocale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLocale.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.GameLocale();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.language = reader.string();
                    break;
                case 2:
                    if (!(message.groups && message.groups.length))
                        message.groups = [];
                    message.groups.push($root.otsimo.MaterialGroup.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.components && message.components.length))
                        message.components = [];
                    message.components.push($root.otsimo.Component.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLocale message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.GameLocale
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.GameLocale} GameLocale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLocale.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLocale message.
         * @function verify
         * @memberof otsimo.GameLocale
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLocale.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.language != null && message.hasOwnProperty("language"))
                if (!$util.isString(message.language))
                    return "language: string expected";
            if (message.groups != null && message.hasOwnProperty("groups")) {
                if (!Array.isArray(message.groups))
                    return "groups: array expected";
                for (var i = 0; i < message.groups.length; ++i) {
                    var error = $root.otsimo.MaterialGroup.verify(message.groups[i]);
                    if (error)
                        return "groups." + error;
                }
            }
            if (message.components != null && message.hasOwnProperty("components")) {
                if (!Array.isArray(message.components))
                    return "components: array expected";
                for (var i = 0; i < message.components.length; ++i) {
                    error = $root.otsimo.Component.verify(message.components[i]);
                    if (error)
                        return "components." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameLocale message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.GameLocale
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.GameLocale} GameLocale
         */
        GameLocale.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.GameLocale)
                return object;
            var message = new $root.otsimo.GameLocale();
            if (object.language != null)
                message.language = String(object.language);
            if (object.groups) {
                if (!Array.isArray(object.groups))
                    throw TypeError(".otsimo.GameLocale.groups: array expected");
                message.groups = [];
                for (var i = 0; i < object.groups.length; ++i) {
                    if (typeof object.groups[i] !== "object")
                        throw TypeError(".otsimo.GameLocale.groups: object expected");
                    message.groups[i] = $root.otsimo.MaterialGroup.fromObject(object.groups[i]);
                }
            }
            if (object.components) {
                if (!Array.isArray(object.components))
                    throw TypeError(".otsimo.GameLocale.components: array expected");
                message.components = [];
                for (var i = 0; i < object.components.length; ++i) {
                    if (typeof object.components[i] !== "object")
                        throw TypeError(".otsimo.GameLocale.components: object expected");
                    message.components[i] = $root.otsimo.Component.fromObject(object.components[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameLocale message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.GameLocale
         * @static
         * @param {otsimo.GameLocale} message GameLocale
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLocale.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.groups = [];
                object.components = [];
            }
            if (options.defaults)
                object.language = "";
            if (message.language != null && message.hasOwnProperty("language"))
                object.language = message.language;
            if (message.groups && message.groups.length) {
                object.groups = [];
                for (var j = 0; j < message.groups.length; ++j)
                    object.groups[j] = $root.otsimo.MaterialGroup.toObject(message.groups[j], options);
            }
            if (message.components && message.components.length) {
                object.components = [];
                for (var j = 0; j < message.components.length; ++j)
                    object.components[j] = $root.otsimo.Component.toObject(message.components[j], options);
            }
            return object;
        };

        /**
         * Converts this GameLocale to JSON.
         * @function toJSON
         * @memberof otsimo.GameLocale
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLocale.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLocale;
    })();

    otsimo.MaterialGroup = (function() {

        /**
         * Properties of a MaterialGroup.
         * @memberof otsimo
         * @interface IMaterialGroup
         * @property {string} [name] MaterialGroup name
         * @property {Array.<otsimo.IMaterial>} [materials] MaterialGroup materials
         * @property {string} [specGroup] MaterialGroup specGroup
         */

        /**
         * Constructs a new MaterialGroup.
         * @memberof otsimo
         * @classdesc Represents a MaterialGroup.
         * @constructor
         * @param {otsimo.IMaterialGroup=} [properties] Properties to set
         */
        function MaterialGroup(properties) {
            this.materials = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MaterialGroup name.
         * @member {string}name
         * @memberof otsimo.MaterialGroup
         * @instance
         */
        MaterialGroup.prototype.name = "";

        /**
         * MaterialGroup materials.
         * @member {Array.<otsimo.IMaterial>}materials
         * @memberof otsimo.MaterialGroup
         * @instance
         */
        MaterialGroup.prototype.materials = $util.emptyArray;

        /**
         * MaterialGroup specGroup.
         * @member {string}specGroup
         * @memberof otsimo.MaterialGroup
         * @instance
         */
        MaterialGroup.prototype.specGroup = "";

        /**
         * Creates a new MaterialGroup instance using the specified properties.
         * @function create
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {otsimo.IMaterialGroup=} [properties] Properties to set
         * @returns {otsimo.MaterialGroup} MaterialGroup instance
         */
        MaterialGroup.create = function create(properties) {
            return new MaterialGroup(properties);
        };

        /**
         * Encodes the specified MaterialGroup message. Does not implicitly {@link otsimo.MaterialGroup.verify|verify} messages.
         * @function encode
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {otsimo.IMaterialGroup} message MaterialGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaterialGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.materials != null && message.materials.length)
                for (var i = 0; i < message.materials.length; ++i)
                    $root.otsimo.Material.encode(message.materials[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.specGroup);
            return writer;
        };

        /**
         * Encodes the specified MaterialGroup message, length delimited. Does not implicitly {@link otsimo.MaterialGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {otsimo.IMaterialGroup} message MaterialGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MaterialGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MaterialGroup message from the specified reader or buffer.
         * @function decode
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {otsimo.MaterialGroup} MaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaterialGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.otsimo.MaterialGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.materials && message.materials.length))
                        message.materials = [];
                    message.materials.push($root.otsimo.Material.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.specGroup = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MaterialGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {otsimo.MaterialGroup} MaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MaterialGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MaterialGroup message.
         * @function verify
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MaterialGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.materials != null && message.hasOwnProperty("materials")) {
                if (!Array.isArray(message.materials))
                    return "materials: array expected";
                for (var i = 0; i < message.materials.length; ++i) {
                    var error = $root.otsimo.Material.verify(message.materials[i]);
                    if (error)
                        return "materials." + error;
                }
            }
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                if (!$util.isString(message.specGroup))
                    return "specGroup: string expected";
            return null;
        };

        /**
         * Creates a MaterialGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {otsimo.MaterialGroup} MaterialGroup
         */
        MaterialGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.otsimo.MaterialGroup)
                return object;
            var message = new $root.otsimo.MaterialGroup();
            if (object.name != null)
                message.name = String(object.name);
            if (object.materials) {
                if (!Array.isArray(object.materials))
                    throw TypeError(".otsimo.MaterialGroup.materials: array expected");
                message.materials = [];
                for (var i = 0; i < object.materials.length; ++i) {
                    if (typeof object.materials[i] !== "object")
                        throw TypeError(".otsimo.MaterialGroup.materials: object expected");
                    message.materials[i] = $root.otsimo.Material.fromObject(object.materials[i]);
                }
            }
            if (object.specGroup != null)
                message.specGroup = String(object.specGroup);
            return message;
        };

        /**
         * Creates a plain object from a MaterialGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof otsimo.MaterialGroup
         * @static
         * @param {otsimo.MaterialGroup} message MaterialGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MaterialGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.materials = [];
            if (options.defaults) {
                object.name = "";
                object.specGroup = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.materials && message.materials.length) {
                object.materials = [];
                for (var j = 0; j < message.materials.length; ++j)
                    object.materials[j] = $root.otsimo.Material.toObject(message.materials[j], options);
            }
            if (message.specGroup != null && message.hasOwnProperty("specGroup"))
                object.specGroup = message.specGroup;
            return object;
        };

        /**
         * Converts this MaterialGroup to JSON.
         * @function toJSON
         * @memberof otsimo.MaterialGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MaterialGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MaterialGroup;
    })();

    return otsimo;
})();

module.exports = $root;
