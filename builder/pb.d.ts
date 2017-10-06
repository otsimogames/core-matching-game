import * as $protobuf from "protobufjs";

/** Namespace otsimo. */
export namespace otsimo {

    /** LabelSelectorOperator enum. */
    enum LabelSelectorOperator {
        In = 0,
        NotIn = 1,
        Exists = 2,
        DoesNotExist = 3,
        Gt = 4,
        Lt = 5
    }

    /** Properties of a LabelSelectorRequirement. */
    interface ILabelSelectorRequirement {

        /** LabelSelectorRequirement key */
        key?: string;

        /** LabelSelectorRequirement operator */
        operator?: otsimo.LabelSelectorOperator;

        /** LabelSelectorRequirement values */
        values?: string[];
    }

    /** Represents a LabelSelectorRequirement. */
    class LabelSelectorRequirement {

        /**
         * Constructs a new LabelSelectorRequirement.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ILabelSelectorRequirement);

        /** LabelSelectorRequirement key. */
        public key: string;

        /** LabelSelectorRequirement operator. */
        public operator: otsimo.LabelSelectorOperator;

        /** LabelSelectorRequirement values. */
        public values: string[];

        /**
         * Creates a new LabelSelectorRequirement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelSelectorRequirement instance
         */
        public static create(properties?: otsimo.ILabelSelectorRequirement): otsimo.LabelSelectorRequirement;

        /**
         * Encodes the specified LabelSelectorRequirement message. Does not implicitly {@link otsimo.LabelSelectorRequirement.verify|verify} messages.
         * @param message LabelSelectorRequirement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ILabelSelectorRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelSelectorRequirement message, length delimited. Does not implicitly {@link otsimo.LabelSelectorRequirement.verify|verify} messages.
         * @param message LabelSelectorRequirement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ILabelSelectorRequirement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelSelectorRequirement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelSelectorRequirement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.LabelSelectorRequirement;

        /**
         * Decodes a LabelSelectorRequirement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelSelectorRequirement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.LabelSelectorRequirement;

        /**
         * Verifies a LabelSelectorRequirement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelSelectorRequirement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelSelectorRequirement
         */
        public static fromObject(object: { [k: string]: any }): otsimo.LabelSelectorRequirement;

        /**
         * Creates a plain object from a LabelSelectorRequirement message. Also converts values to other types if specified.
         * @param message LabelSelectorRequirement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.LabelSelectorRequirement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelSelectorRequirement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LabelSelectorTerm. */
    interface ILabelSelectorTerm {

        /** LabelSelectorTerm expressions */
        expressions?: otsimo.ILabelSelectorRequirement[];
    }

    /** Represents a LabelSelectorTerm. */
    class LabelSelectorTerm {

        /**
         * Constructs a new LabelSelectorTerm.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ILabelSelectorTerm);

        /** LabelSelectorTerm expressions. */
        public expressions: otsimo.ILabelSelectorRequirement[];

        /**
         * Creates a new LabelSelectorTerm instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelSelectorTerm instance
         */
        public static create(properties?: otsimo.ILabelSelectorTerm): otsimo.LabelSelectorTerm;

        /**
         * Encodes the specified LabelSelectorTerm message. Does not implicitly {@link otsimo.LabelSelectorTerm.verify|verify} messages.
         * @param message LabelSelectorTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ILabelSelectorTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelSelectorTerm message, length delimited. Does not implicitly {@link otsimo.LabelSelectorTerm.verify|verify} messages.
         * @param message LabelSelectorTerm message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ILabelSelectorTerm, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelSelectorTerm message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelSelectorTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.LabelSelectorTerm;

        /**
         * Decodes a LabelSelectorTerm message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelSelectorTerm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.LabelSelectorTerm;

        /**
         * Verifies a LabelSelectorTerm message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelSelectorTerm message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelSelectorTerm
         */
        public static fromObject(object: { [k: string]: any }): otsimo.LabelSelectorTerm;

        /**
         * Creates a plain object from a LabelSelectorTerm message. Also converts values to other types if specified.
         * @param message LabelSelectorTerm
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.LabelSelectorTerm, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelSelectorTerm to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LabelSelector. */
    interface ILabelSelector {

        /** LabelSelector terms */
        terms?: otsimo.ILabelSelectorTerm[];
    }

    /** Represents a LabelSelector. */
    class LabelSelector {

        /**
         * Constructs a new LabelSelector.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ILabelSelector);

        /** LabelSelector terms. */
        public terms: otsimo.ILabelSelectorTerm[];

        /**
         * Creates a new LabelSelector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelSelector instance
         */
        public static create(properties?: otsimo.ILabelSelector): otsimo.LabelSelector;

        /**
         * Encodes the specified LabelSelector message. Does not implicitly {@link otsimo.LabelSelector.verify|verify} messages.
         * @param message LabelSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ILabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelSelector message, length delimited. Does not implicitly {@link otsimo.LabelSelector.verify|verify} messages.
         * @param message LabelSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ILabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelSelector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.LabelSelector;

        /**
         * Decodes a LabelSelector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.LabelSelector;

        /**
         * Verifies a LabelSelector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelSelector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelSelector
         */
        public static fromObject(object: { [k: string]: any }): otsimo.LabelSelector;

        /**
         * Creates a plain object from a LabelSelector message. Also converts values to other types if specified.
         * @param message LabelSelector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.LabelSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelSelector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SimpleLabelSelector. */
    interface ISimpleLabelSelector {

        /** SimpleLabelSelector matchLabels */
        matchLabels?: { [k: string]: string };
    }

    /** Represents a SimpleLabelSelector. */
    class SimpleLabelSelector {

        /**
         * Constructs a new SimpleLabelSelector.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ISimpleLabelSelector);

        /** SimpleLabelSelector matchLabels. */
        public matchLabels: { [k: string]: string };

        /**
         * Creates a new SimpleLabelSelector instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SimpleLabelSelector instance
         */
        public static create(properties?: otsimo.ISimpleLabelSelector): otsimo.SimpleLabelSelector;

        /**
         * Encodes the specified SimpleLabelSelector message. Does not implicitly {@link otsimo.SimpleLabelSelector.verify|verify} messages.
         * @param message SimpleLabelSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ISimpleLabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SimpleLabelSelector message, length delimited. Does not implicitly {@link otsimo.SimpleLabelSelector.verify|verify} messages.
         * @param message SimpleLabelSelector message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ISimpleLabelSelector, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleLabelSelector message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SimpleLabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.SimpleLabelSelector;

        /**
         * Decodes a SimpleLabelSelector message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SimpleLabelSelector
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.SimpleLabelSelector;

        /**
         * Verifies a SimpleLabelSelector message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SimpleLabelSelector message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SimpleLabelSelector
         */
        public static fromObject(object: { [k: string]: any }): otsimo.SimpleLabelSelector;

        /**
         * Creates a plain object from a SimpleLabelSelector message. Also converts values to other types if specified.
         * @param message SimpleLabelSelector
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.SimpleLabelSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SimpleLabelSelector to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Point. */
    interface IPoint {

        /** Point x */
        x?: number;

        /** Point y */
        y?: number;
    }

    /** Represents a Point. */
    class Point {

        /**
         * Constructs a new Point.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IPoint);

        /** Point x. */
        public x: number;

        /** Point y. */
        public y: number;

        /**
         * Creates a new Point instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Point instance
         */
        public static create(properties?: otsimo.IPoint): otsimo.Point;

        /**
         * Encodes the specified Point message. Does not implicitly {@link otsimo.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link otsimo.Point.verify|verify} messages.
         * @param message Point message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.Point;

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.Point;

        /**
         * Verifies a Point message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Point
         */
        public static fromObject(object: { [k: string]: any }): otsimo.Point;

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @param message Point
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.Point, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Point to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VectorArray. */
    interface IVectorArray {

        /** VectorArray points */
        points?: otsimo.IPoint[];
    }

    /** Represents a VectorArray. */
    class VectorArray {

        /**
         * Constructs a new VectorArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IVectorArray);

        /** VectorArray points. */
        public points: otsimo.IPoint[];

        /**
         * Creates a new VectorArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VectorArray instance
         */
        public static create(properties?: otsimo.IVectorArray): otsimo.VectorArray;

        /**
         * Encodes the specified VectorArray message. Does not implicitly {@link otsimo.VectorArray.verify|verify} messages.
         * @param message VectorArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IVectorArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VectorArray message, length delimited. Does not implicitly {@link otsimo.VectorArray.verify|verify} messages.
         * @param message VectorArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IVectorArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VectorArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VectorArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.VectorArray;

        /**
         * Decodes a VectorArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VectorArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.VectorArray;

        /**
         * Verifies a VectorArray message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VectorArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VectorArray
         */
        public static fromObject(object: { [k: string]: any }): otsimo.VectorArray;

        /**
         * Creates a plain object from a VectorArray message. Also converts values to other types if specified.
         * @param message VectorArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.VectorArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VectorArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DrawSteps. */
    interface IDrawSteps {

        /** DrawSteps steps */
        steps?: otsimo.IVectorArray[];
    }

    /** Represents a DrawSteps. */
    class DrawSteps {

        /**
         * Constructs a new DrawSteps.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IDrawSteps);

        /** DrawSteps steps. */
        public steps: otsimo.IVectorArray[];

        /**
         * Creates a new DrawSteps instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrawSteps instance
         */
        public static create(properties?: otsimo.IDrawSteps): otsimo.DrawSteps;

        /**
         * Encodes the specified DrawSteps message. Does not implicitly {@link otsimo.DrawSteps.verify|verify} messages.
         * @param message DrawSteps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IDrawSteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrawSteps message, length delimited. Does not implicitly {@link otsimo.DrawSteps.verify|verify} messages.
         * @param message DrawSteps message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IDrawSteps, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrawSteps message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrawSteps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.DrawSteps;

        /**
         * Decodes a DrawSteps message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrawSteps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.DrawSteps;

        /**
         * Verifies a DrawSteps message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrawSteps message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrawSteps
         */
        public static fromObject(object: { [k: string]: any }): otsimo.DrawSteps;

        /**
         * Creates a plain object from a DrawSteps message. Also converts values to other types if specified.
         * @param message DrawSteps
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.DrawSteps, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrawSteps to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppMetadata. */
    interface IAppMetadata {

        /** AppMetadata visibleName */
        visibleName?: string;

        /** AppMetadata summary */
        summary?: string;

        /** AppMetadata description */
        description?: string;

        /** AppMetadata logo */
        logo?: string;

        /** AppMetadata icon */
        icon?: string;

        /** AppMetadata images */
        images?: string[];

        /** AppMetadata keywords */
        keywords?: string[];

        /** AppMetadata infoSlug */
        infoSlug?: string;
    }

    /** Represents an AppMetadata. */
    class AppMetadata {

        /**
         * Constructs a new AppMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IAppMetadata);

        /** AppMetadata visibleName. */
        public visibleName: string;

        /** AppMetadata summary. */
        public summary: string;

        /** AppMetadata description. */
        public description: string;

        /** AppMetadata logo. */
        public logo: string;

        /** AppMetadata icon. */
        public icon: string;

        /** AppMetadata images. */
        public images: string[];

        /** AppMetadata keywords. */
        public keywords: string[];

        /** AppMetadata infoSlug. */
        public infoSlug: string;

        /**
         * Creates a new AppMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppMetadata instance
         */
        public static create(properties?: otsimo.IAppMetadata): otsimo.AppMetadata;

        /**
         * Encodes the specified AppMetadata message. Does not implicitly {@link otsimo.AppMetadata.verify|verify} messages.
         * @param message AppMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IAppMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppMetadata message, length delimited. Does not implicitly {@link otsimo.AppMetadata.verify|verify} messages.
         * @param message AppMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IAppMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.AppMetadata;

        /**
         * Decodes an AppMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.AppMetadata;

        /**
         * Verifies an AppMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppMetadata
         */
        public static fromObject(object: { [k: string]: any }): otsimo.AppMetadata;

        /**
         * Creates a plain object from an AppMetadata message. Also converts values to other types if specified.
         * @param message AppMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.AppMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AccessMode enum. */
    enum AccessMode {
        PUBLIC = 0,
        OWNER = 1
    }

    /** ComponentType enum. */
    enum ComponentType {
        TEXT = 0,
        IMAGE = 1,
        AUDIO = 2,
        COLOR = 3,
        NUMBER = 4,
        VIDEO = 5,
        FILE = 6,
        VECTOR_ARRAY = 7,
        DRAW_STEPS = 8,
        METADATA = 9,
        I18N = 10
    }

    /** Properties of a Component. */
    interface IComponent {

        /** Component id */
        id?: string;

        /** Component description */
        description?: string;

        /** Component type */
        type?: otsimo.ComponentType;

        /** Component key */
        key?: string;

        /** Component value */
        value?: otsimo.Component.IValue;

        /** Component locales */
        locales?: string[];

        /** Component labels */
        labels?: { [k: string]: string };

        /** Component accessMode */
        accessMode?: otsimo.AccessMode;

        /** Component createdBy */
        createdBy?: string;

        /** Component disabled */
        disabled?: boolean;

        /** Component createdAt */
        createdAt?: (number|Long);

        /** Component updatedAt */
        updatedAt?: (number|Long);

        /** Component version */
        version?: (number|Long);
    }

    /** Represents a Component. */
    class Component {

        /**
         * Constructs a new Component.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IComponent);

        /** Component id. */
        public id: string;

        /** Component description. */
        public description: string;

        /** Component type. */
        public type: otsimo.ComponentType;

        /** Component key. */
        public key: string;

        /** Component value. */
        public value?: (otsimo.Component.IValue|null);

        /** Component locales. */
        public locales: string[];

        /** Component labels. */
        public labels: { [k: string]: string };

        /** Component accessMode. */
        public accessMode: otsimo.AccessMode;

        /** Component createdBy. */
        public createdBy: string;

        /** Component disabled. */
        public disabled: boolean;

        /** Component createdAt. */
        public createdAt: (number|Long);

        /** Component updatedAt. */
        public updatedAt: (number|Long);

        /** Component version. */
        public version: (number|Long);

        /**
         * Creates a new Component instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Component instance
         */
        public static create(properties?: otsimo.IComponent): otsimo.Component;

        /**
         * Encodes the specified Component message. Does not implicitly {@link otsimo.Component.verify|verify} messages.
         * @param message Component message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Component message, length delimited. Does not implicitly {@link otsimo.Component.verify|verify} messages.
         * @param message Component message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Component message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.Component;

        /**
         * Decodes a Component message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.Component;

        /**
         * Verifies a Component message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Component message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Component
         */
        public static fromObject(object: { [k: string]: any }): otsimo.Component;

        /**
         * Creates a plain object from a Component message. Also converts values to other types if specified.
         * @param message Component
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.Component, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Component to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Component {

        /** Properties of a Value. */
        interface IValue {

            /** Value str */
            str?: string;

            /** Value number */
            number?: number;

            /** Value url */
            url?: string;

            /** Value vector */
            vector?: otsimo.IVectorArray;

            /** Value steps */
            steps?: otsimo.IDrawSteps;

            /** Value metadata */
            metadata?: otsimo.IAppMetadata;
        }

        /** Represents a Value. */
        class Value {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: otsimo.Component.IValue);

            /** Value str. */
            public str: string;

            /** Value number. */
            public number: number;

            /** Value url. */
            public url: string;

            /** Value vector. */
            public vector?: (otsimo.IVectorArray|null);

            /** Value steps. */
            public steps?: (otsimo.IDrawSteps|null);

            /** Value metadata. */
            public metadata?: (otsimo.IAppMetadata|null);

            /** Value value. */
            public value?: string;

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: otsimo.Component.IValue): otsimo.Component.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link otsimo.Component.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: otsimo.Component.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link otsimo.Component.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: otsimo.Component.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.Component.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.Component.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): otsimo.Component.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: otsimo.Component.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Material. */
    interface IMaterial {

        /** Material id */
        id?: string;

        /** Material name */
        name?: string;

        /** Material description */
        description?: string;

        /** Material labels */
        labels?: { [k: string]: string };

        /** Material components */
        components?: otsimo.IComponent[];

        /** Material version */
        version?: (number|Long);

        /** Material accessMode */
        accessMode?: otsimo.AccessMode;

        /** Material createdBy */
        createdBy?: string;

        /** Material disabled */
        disabled?: boolean;

        /** Material createdAt */
        createdAt?: (number|Long);

        /** Material updatedAt */
        updatedAt?: (number|Long);
    }

    /** Represents a Material. */
    class Material {

        /**
         * Constructs a new Material.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IMaterial);

        /** Material id. */
        public id: string;

        /** Material name. */
        public name: string;

        /** Material description. */
        public description: string;

        /** Material labels. */
        public labels: { [k: string]: string };

        /** Material components. */
        public components: otsimo.IComponent[];

        /** Material version. */
        public version: (number|Long);

        /** Material accessMode. */
        public accessMode: otsimo.AccessMode;

        /** Material createdBy. */
        public createdBy: string;

        /** Material disabled. */
        public disabled: boolean;

        /** Material createdAt. */
        public createdAt: (number|Long);

        /** Material updatedAt. */
        public updatedAt: (number|Long);

        /**
         * Creates a new Material instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Material instance
         */
        public static create(properties?: otsimo.IMaterial): otsimo.Material;

        /**
         * Encodes the specified Material message. Does not implicitly {@link otsimo.Material.verify|verify} messages.
         * @param message Material message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Material message, length delimited. Does not implicitly {@link otsimo.Material.verify|verify} messages.
         * @param message Material message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IMaterial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Material message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.Material;

        /**
         * Decodes a Material message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Material
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.Material;

        /**
         * Verifies a Material message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Material message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Material
         */
        public static fromObject(object: { [k: string]: any }): otsimo.Material;

        /**
         * Creates a plain object from a Material message. Also converts values to other types if specified.
         * @param message Material
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.Material, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Material to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FileAsset. */
    interface IFileAsset {

        /** FileAsset id */
        id?: string;

        /** FileAsset url */
        url?: string;

        /** FileAsset name */
        name?: string;

        /** FileAsset keywords */
        keywords?: string[];
    }

    /** Represents a FileAsset. */
    class FileAsset {

        /**
         * Constructs a new FileAsset.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IFileAsset);

        /** FileAsset id. */
        public id: string;

        /** FileAsset url. */
        public url: string;

        /** FileAsset name. */
        public name: string;

        /** FileAsset keywords. */
        public keywords: string[];

        /**
         * Creates a new FileAsset instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileAsset instance
         */
        public static create(properties?: otsimo.IFileAsset): otsimo.FileAsset;

        /**
         * Encodes the specified FileAsset message. Does not implicitly {@link otsimo.FileAsset.verify|verify} messages.
         * @param message FileAsset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IFileAsset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileAsset message, length delimited. Does not implicitly {@link otsimo.FileAsset.verify|verify} messages.
         * @param message FileAsset message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IFileAsset, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileAsset message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileAsset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.FileAsset;

        /**
         * Decodes a FileAsset message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileAsset
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.FileAsset;

        /**
         * Verifies a FileAsset message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileAsset message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileAsset
         */
        public static fromObject(object: { [k: string]: any }): otsimo.FileAsset;

        /**
         * Creates a plain object from a FileAsset message. Also converts values to other types if specified.
         * @param message FileAsset
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.FileAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileAsset to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ComponentSpec. */
    interface IComponentSpec {

        /** ComponentSpec key */
        key?: string;

        /** ComponentSpec type */
        type?: otsimo.ComponentType;

        /** ComponentSpec isAdvanced */
        isAdvanced?: boolean;

        /** ComponentSpec parent */
        parent?: otsimo.ComponentSpec.Parent;

        /** ComponentSpec simple */
        simple?: otsimo.ISimpleLabelSelector;

        /** ComponentSpec advanced */
        advanced?: otsimo.ILabelSelector;

        /** ComponentSpec description */
        description?: string;
    }

    /** Represents a ComponentSpec. */
    class ComponentSpec {

        /**
         * Constructs a new ComponentSpec.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IComponentSpec);

        /** ComponentSpec key. */
        public key: string;

        /** ComponentSpec type. */
        public type: otsimo.ComponentType;

        /** ComponentSpec isAdvanced. */
        public isAdvanced: boolean;

        /** ComponentSpec parent. */
        public parent: otsimo.ComponentSpec.Parent;

        /** ComponentSpec simple. */
        public simple?: (otsimo.ISimpleLabelSelector|null);

        /** ComponentSpec advanced. */
        public advanced?: (otsimo.ILabelSelector|null);

        /** ComponentSpec description. */
        public description: string;

        /** ComponentSpec labelSelector. */
        public labelSelector?: string;

        /**
         * Creates a new ComponentSpec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ComponentSpec instance
         */
        public static create(properties?: otsimo.IComponentSpec): otsimo.ComponentSpec;

        /**
         * Encodes the specified ComponentSpec message. Does not implicitly {@link otsimo.ComponentSpec.verify|verify} messages.
         * @param message ComponentSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IComponentSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ComponentSpec message, length delimited. Does not implicitly {@link otsimo.ComponentSpec.verify|verify} messages.
         * @param message ComponentSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IComponentSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ComponentSpec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ComponentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.ComponentSpec;

        /**
         * Decodes a ComponentSpec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ComponentSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.ComponentSpec;

        /**
         * Verifies a ComponentSpec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ComponentSpec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ComponentSpec
         */
        public static fromObject(object: { [k: string]: any }): otsimo.ComponentSpec;

        /**
         * Creates a plain object from a ComponentSpec message. Also converts values to other types if specified.
         * @param message ComponentSpec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.ComponentSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ComponentSpec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ComponentSpec {

        /** Parent enum. */
        enum Parent {
            APP = 0,
            GROUP = 1
        }
    }

    /** Properties of a LabelSelectorSerializor. */
    interface ILabelSelectorSerializor {

        /** LabelSelectorSerializor simple */
        simple?: otsimo.ISimpleLabelSelector;

        /** LabelSelectorSerializor advanced */
        advanced?: otsimo.ILabelSelector;
    }

    /** Represents a LabelSelectorSerializor. */
    class LabelSelectorSerializor {

        /**
         * Constructs a new LabelSelectorSerializor.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ILabelSelectorSerializor);

        /** LabelSelectorSerializor simple. */
        public simple?: (otsimo.ISimpleLabelSelector|null);

        /** LabelSelectorSerializor advanced. */
        public advanced?: (otsimo.ILabelSelector|null);

        /** LabelSelectorSerializor labelSelector. */
        public labelSelector?: string;

        /**
         * Creates a new LabelSelectorSerializor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LabelSelectorSerializor instance
         */
        public static create(properties?: otsimo.ILabelSelectorSerializor): otsimo.LabelSelectorSerializor;

        /**
         * Encodes the specified LabelSelectorSerializor message. Does not implicitly {@link otsimo.LabelSelectorSerializor.verify|verify} messages.
         * @param message LabelSelectorSerializor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ILabelSelectorSerializor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LabelSelectorSerializor message, length delimited. Does not implicitly {@link otsimo.LabelSelectorSerializor.verify|verify} messages.
         * @param message LabelSelectorSerializor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ILabelSelectorSerializor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LabelSelectorSerializor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LabelSelectorSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.LabelSelectorSerializor;

        /**
         * Decodes a LabelSelectorSerializor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LabelSelectorSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.LabelSelectorSerializor;

        /**
         * Verifies a LabelSelectorSerializor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LabelSelectorSerializor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LabelSelectorSerializor
         */
        public static fromObject(object: { [k: string]: any }): otsimo.LabelSelectorSerializor;

        /**
         * Creates a plain object from a LabelSelectorSerializor message. Also converts values to other types if specified.
         * @param message LabelSelectorSerializor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.LabelSelectorSerializor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LabelSelectorSerializor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialSelectGroup. */
    interface IMaterialSelectGroup {

        /** MaterialSelectGroup groupName */
        groupName?: string;

        /** MaterialSelectGroup componentSpecs */
        componentSpecs?: otsimo.IComponentSpec[];
    }

    /** Represents a MaterialSelectGroup. */
    class MaterialSelectGroup {

        /**
         * Constructs a new MaterialSelectGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IMaterialSelectGroup);

        /** MaterialSelectGroup groupName. */
        public groupName: string;

        /** MaterialSelectGroup componentSpecs. */
        public componentSpecs: otsimo.IComponentSpec[];

        /**
         * Creates a new MaterialSelectGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaterialSelectGroup instance
         */
        public static create(properties?: otsimo.IMaterialSelectGroup): otsimo.MaterialSelectGroup;

        /**
         * Encodes the specified MaterialSelectGroup message. Does not implicitly {@link otsimo.MaterialSelectGroup.verify|verify} messages.
         * @param message MaterialSelectGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IMaterialSelectGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaterialSelectGroup message, length delimited. Does not implicitly {@link otsimo.MaterialSelectGroup.verify|verify} messages.
         * @param message MaterialSelectGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IMaterialSelectGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaterialSelectGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MaterialSelectGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.MaterialSelectGroup;

        /**
         * Decodes a MaterialSelectGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MaterialSelectGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.MaterialSelectGroup;

        /**
         * Verifies a MaterialSelectGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaterialSelectGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialSelectGroup
         */
        public static fromObject(object: { [k: string]: any }): otsimo.MaterialSelectGroup;

        /**
         * Creates a plain object from a MaterialSelectGroup message. Also converts values to other types if specified.
         * @param message MaterialSelectGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.MaterialSelectGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialSelectGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppSpec. */
    interface IAppSpec {

        /** AppSpec id */
        id?: string;

        /** AppSpec name */
        name?: string;

        /** AppSpec repository */
        repository?: string;

        /** AppSpec command */
        command?: string;

        /** AppSpec env */
        env?: string[];

        /** AppSpec components */
        components?: otsimo.IComponentSpec[];

        /** AppSpec selects */
        selects?: otsimo.IMaterialSelectGroup[];

        /** AppSpec createdBy */
        createdBy?: string;

        /** AppSpec disabled */
        disabled?: boolean;

        /** AppSpec createdAt */
        createdAt?: (number|Long);

        /** AppSpec updatedAt */
        updatedAt?: (number|Long);
    }

    /** Represents an AppSpec. */
    class AppSpec {

        /**
         * Constructs a new AppSpec.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IAppSpec);

        /** AppSpec id. */
        public id: string;

        /** AppSpec name. */
        public name: string;

        /** AppSpec repository. */
        public repository: string;

        /** AppSpec command. */
        public command: string;

        /** AppSpec env. */
        public env: string[];

        /** AppSpec components. */
        public components: otsimo.IComponentSpec[];

        /** AppSpec selects. */
        public selects: otsimo.IMaterialSelectGroup[];

        /** AppSpec createdBy. */
        public createdBy: string;

        /** AppSpec disabled. */
        public disabled: boolean;

        /** AppSpec createdAt. */
        public createdAt: (number|Long);

        /** AppSpec updatedAt. */
        public updatedAt: (number|Long);

        /**
         * Creates a new AppSpec instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppSpec instance
         */
        public static create(properties?: otsimo.IAppSpec): otsimo.AppSpec;

        /**
         * Encodes the specified AppSpec message. Does not implicitly {@link otsimo.AppSpec.verify|verify} messages.
         * @param message AppSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IAppSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppSpec message, length delimited. Does not implicitly {@link otsimo.AppSpec.verify|verify} messages.
         * @param message AppSpec message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IAppSpec, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppSpec message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.AppSpec;

        /**
         * Decodes an AppSpec message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppSpec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.AppSpec;

        /**
         * Verifies an AppSpec message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppSpec message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppSpec
         */
        public static fromObject(object: { [k: string]: any }): otsimo.AppSpec;

        /**
         * Creates a plain object from an AppSpec message. Also converts values to other types if specified.
         * @param message AppSpec
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.AppSpec, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppSpec to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppMaterialGroup. */
    interface IAppMaterialGroup {

        /** AppMaterialGroup groupName */
        groupName?: string;

        /** AppMaterialGroup materialIds */
        materialIds?: string[];

        /** AppMaterialGroup specGroup */
        specGroup?: string;
    }

    /** Represents an AppMaterialGroup. */
    class AppMaterialGroup {

        /**
         * Constructs a new AppMaterialGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IAppMaterialGroup);

        /** AppMaterialGroup groupName. */
        public groupName: string;

        /** AppMaterialGroup materialIds. */
        public materialIds: string[];

        /** AppMaterialGroup specGroup. */
        public specGroup: string;

        /**
         * Creates a new AppMaterialGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppMaterialGroup instance
         */
        public static create(properties?: otsimo.IAppMaterialGroup): otsimo.AppMaterialGroup;

        /**
         * Encodes the specified AppMaterialGroup message. Does not implicitly {@link otsimo.AppMaterialGroup.verify|verify} messages.
         * @param message AppMaterialGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IAppMaterialGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppMaterialGroup message, length delimited. Does not implicitly {@link otsimo.AppMaterialGroup.verify|verify} messages.
         * @param message AppMaterialGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IAppMaterialGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppMaterialGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppMaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.AppMaterialGroup;

        /**
         * Decodes an AppMaterialGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppMaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.AppMaterialGroup;

        /**
         * Verifies an AppMaterialGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppMaterialGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppMaterialGroup
         */
        public static fromObject(object: { [k: string]: any }): otsimo.AppMaterialGroup;

        /**
         * Creates a plain object from an AppMaterialGroup message. Also converts values to other types if specified.
         * @param message AppMaterialGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.AppMaterialGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppMaterialGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AppMaterialGroupSerializor. */
    interface IAppMaterialGroupSerializor {

        /** AppMaterialGroupSerializor appMaterialGroups */
        appMaterialGroups?: otsimo.IAppMaterialGroup[];
    }

    /** Represents an AppMaterialGroupSerializor. */
    class AppMaterialGroupSerializor {

        /**
         * Constructs a new AppMaterialGroupSerializor.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IAppMaterialGroupSerializor);

        /** AppMaterialGroupSerializor appMaterialGroups. */
        public appMaterialGroups: otsimo.IAppMaterialGroup[];

        /**
         * Creates a new AppMaterialGroupSerializor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppMaterialGroupSerializor instance
         */
        public static create(properties?: otsimo.IAppMaterialGroupSerializor): otsimo.AppMaterialGroupSerializor;

        /**
         * Encodes the specified AppMaterialGroupSerializor message. Does not implicitly {@link otsimo.AppMaterialGroupSerializor.verify|verify} messages.
         * @param message AppMaterialGroupSerializor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IAppMaterialGroupSerializor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppMaterialGroupSerializor message, length delimited. Does not implicitly {@link otsimo.AppMaterialGroupSerializor.verify|verify} messages.
         * @param message AppMaterialGroupSerializor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IAppMaterialGroupSerializor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppMaterialGroupSerializor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppMaterialGroupSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.AppMaterialGroupSerializor;

        /**
         * Decodes an AppMaterialGroupSerializor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppMaterialGroupSerializor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.AppMaterialGroupSerializor;

        /**
         * Verifies an AppMaterialGroupSerializor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AppMaterialGroupSerializor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppMaterialGroupSerializor
         */
        public static fromObject(object: { [k: string]: any }): otsimo.AppMaterialGroupSerializor;

        /**
         * Creates a plain object from an AppMaterialGroupSerializor message. Also converts values to other types if specified.
         * @param message AppMaterialGroupSerializor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.AppMaterialGroupSerializor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppMaterialGroupSerializor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an App. */
    interface IApp {

        /** App id */
        id?: string;

        /** App spec */
        spec?: string;

        /** App name */
        name?: string;

        /** App components */
        components?: otsimo.IComponent[];

        /** App materialGroups */
        materialGroups?: otsimo.IAppMaterialGroup[];

        /** App env */
        env?: string[];

        /** App createdBy */
        createdBy?: string;

        /** App disabled */
        disabled?: boolean;

        /** App createdAt */
        createdAt?: (number|Long);

        /** App updatedAt */
        updatedAt?: (number|Long);

        /** App labels */
        labels?: { [k: string]: string };

        /** App buildVersion */
        buildVersion?: string;
    }

    /** Represents an App. */
    class App {

        /**
         * Constructs a new App.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IApp);

        /** App id. */
        public id: string;

        /** App spec. */
        public spec: string;

        /** App name. */
        public name: string;

        /** App components. */
        public components: otsimo.IComponent[];

        /** App materialGroups. */
        public materialGroups: otsimo.IAppMaterialGroup[];

        /** App env. */
        public env: string[];

        /** App createdBy. */
        public createdBy: string;

        /** App disabled. */
        public disabled: boolean;

        /** App createdAt. */
        public createdAt: (number|Long);

        /** App updatedAt. */
        public updatedAt: (number|Long);

        /** App labels. */
        public labels: { [k: string]: string };

        /** App buildVersion. */
        public buildVersion: string;

        /**
         * Creates a new App instance using the specified properties.
         * @param [properties] Properties to set
         * @returns App instance
         */
        public static create(properties?: otsimo.IApp): otsimo.App;

        /**
         * Encodes the specified App message. Does not implicitly {@link otsimo.App.verify|verify} messages.
         * @param message App message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified App message, length delimited. Does not implicitly {@link otsimo.App.verify|verify} messages.
         * @param message App message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IApp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an App message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.App;

        /**
         * Decodes an App message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns App
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.App;

        /**
         * Verifies an App message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an App message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns App
         */
        public static fromObject(object: { [k: string]: any }): otsimo.App;

        /**
         * Creates a plain object from an App message. Also converts values to other types if specified.
         * @param message App
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.App, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this App to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameBuild. */
    interface IGameBuild {

        /** GameBuild buildId */
        buildId?: string;

        /** GameBuild tasks */
        tasks?: otsimo.ITask[];

        /** GameBuild app */
        app?: otsimo.IApp;

        /** GameBuild spec */
        spec?: otsimo.IAppSpec;

        /** GameBuild locales */
        locales?: otsimo.IGameLocale[];
    }

    /** Represents a GameBuild. */
    class GameBuild {

        /**
         * Constructs a new GameBuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IGameBuild);

        /** GameBuild buildId. */
        public buildId: string;

        /** GameBuild tasks. */
        public tasks: otsimo.ITask[];

        /** GameBuild app. */
        public app?: (otsimo.IApp|null);

        /** GameBuild spec. */
        public spec?: (otsimo.IAppSpec|null);

        /** GameBuild locales. */
        public locales: otsimo.IGameLocale[];

        /**
         * Creates a new GameBuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameBuild instance
         */
        public static create(properties?: otsimo.IGameBuild): otsimo.GameBuild;

        /**
         * Encodes the specified GameBuild message. Does not implicitly {@link otsimo.GameBuild.verify|verify} messages.
         * @param message GameBuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IGameBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameBuild message, length delimited. Does not implicitly {@link otsimo.GameBuild.verify|verify} messages.
         * @param message GameBuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IGameBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.GameBuild;

        /**
         * Decodes a GameBuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.GameBuild;

        /**
         * Verifies a GameBuild message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameBuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameBuild
         */
        public static fromObject(object: { [k: string]: any }): otsimo.GameBuild;

        /**
         * Creates a plain object from a GameBuild message. Also converts values to other types if specified.
         * @param message GameBuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.GameBuild, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameBuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task build */
        build?: otsimo.IBuildTask;

        /** Task deploy */
        deploy?: otsimo.IDeployTask;

        /** Task preview */
        preview?: otsimo.IPreviewTask;
    }

    /** Represents a Task. */
    class Task {

        /**
         * Constructs a new Task.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.ITask);

        /** Task build. */
        public build?: (otsimo.IBuildTask|null);

        /** Task deploy. */
        public deploy?: (otsimo.IDeployTask|null);

        /** Task preview. */
        public preview?: (otsimo.IPreviewTask|null);

        /** Task task. */
        public task?: string;

        /**
         * Creates a new Task instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Task instance
         */
        public static create(properties?: otsimo.ITask): otsimo.Task;

        /**
         * Encodes the specified Task message. Does not implicitly {@link otsimo.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Task message, length delimited. Does not implicitly {@link otsimo.Task.verify|verify} messages.
         * @param message Task message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.ITask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.Task;

        /**
         * Decodes a Task message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.Task;

        /**
         * Verifies a Task message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Task message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Task
         */
        public static fromObject(object: { [k: string]: any }): otsimo.Task;

        /**
         * Creates a plain object from a Task message. Also converts values to other types if specified.
         * @param message Task
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.Task, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Task to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuildTask. */
    interface IBuildTask {

        /** BuildTask command */
        command?: string;

        /** BuildTask env */
        env?: string[];

        /** BuildTask gitRepo */
        gitRepo?: string;

        /** BuildTask gitBranch */
        gitBranch?: string;
    }

    /** Represents a BuildTask. */
    class BuildTask {

        /**
         * Constructs a new BuildTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IBuildTask);

        /** BuildTask command. */
        public command: string;

        /** BuildTask env. */
        public env: string[];

        /** BuildTask gitRepo. */
        public gitRepo: string;

        /** BuildTask gitBranch. */
        public gitBranch: string;

        /**
         * Creates a new BuildTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuildTask instance
         */
        public static create(properties?: otsimo.IBuildTask): otsimo.BuildTask;

        /**
         * Encodes the specified BuildTask message. Does not implicitly {@link otsimo.BuildTask.verify|verify} messages.
         * @param message BuildTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IBuildTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuildTask message, length delimited. Does not implicitly {@link otsimo.BuildTask.verify|verify} messages.
         * @param message BuildTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IBuildTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuildTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuildTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.BuildTask;

        /**
         * Decodes a BuildTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuildTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.BuildTask;

        /**
         * Verifies a BuildTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuildTask message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuildTask
         */
        public static fromObject(object: { [k: string]: any }): otsimo.BuildTask;

        /**
         * Creates a plain object from a BuildTask message. Also converts values to other types if specified.
         * @param message BuildTask
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.BuildTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuildTask to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeployTask. */
    interface IDeployTask {

        /** DeployTask type */
        type?: string;
    }

    /** Represents a DeployTask. */
    class DeployTask {

        /**
         * Constructs a new DeployTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IDeployTask);

        /** DeployTask type. */
        public type: string;

        /**
         * Creates a new DeployTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeployTask instance
         */
        public static create(properties?: otsimo.IDeployTask): otsimo.DeployTask;

        /**
         * Encodes the specified DeployTask message. Does not implicitly {@link otsimo.DeployTask.verify|verify} messages.
         * @param message DeployTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IDeployTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeployTask message, length delimited. Does not implicitly {@link otsimo.DeployTask.verify|verify} messages.
         * @param message DeployTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IDeployTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeployTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeployTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.DeployTask;

        /**
         * Decodes a DeployTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeployTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.DeployTask;

        /**
         * Verifies a DeployTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeployTask message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeployTask
         */
        public static fromObject(object: { [k: string]: any }): otsimo.DeployTask;

        /**
         * Creates a plain object from a DeployTask message. Also converts values to other types if specified.
         * @param message DeployTask
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.DeployTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeployTask to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PreviewTask. */
    interface IPreviewTask {

        /** PreviewTask uploadBucket */
        uploadBucket?: string;

        /** PreviewTask uploadFolder */
        uploadFolder?: string;
    }

    /** Represents a PreviewTask. */
    class PreviewTask {

        /**
         * Constructs a new PreviewTask.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IPreviewTask);

        /** PreviewTask uploadBucket. */
        public uploadBucket: string;

        /** PreviewTask uploadFolder. */
        public uploadFolder: string;

        /**
         * Creates a new PreviewTask instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PreviewTask instance
         */
        public static create(properties?: otsimo.IPreviewTask): otsimo.PreviewTask;

        /**
         * Encodes the specified PreviewTask message. Does not implicitly {@link otsimo.PreviewTask.verify|verify} messages.
         * @param message PreviewTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IPreviewTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PreviewTask message, length delimited. Does not implicitly {@link otsimo.PreviewTask.verify|verify} messages.
         * @param message PreviewTask message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IPreviewTask, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreviewTask message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PreviewTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.PreviewTask;

        /**
         * Decodes a PreviewTask message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PreviewTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.PreviewTask;

        /**
         * Verifies a PreviewTask message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PreviewTask message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PreviewTask
         */
        public static fromObject(object: { [k: string]: any }): otsimo.PreviewTask;

        /**
         * Creates a plain object from a PreviewTask message. Also converts values to other types if specified.
         * @param message PreviewTask
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.PreviewTask, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PreviewTask to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLocale. */
    interface IGameLocale {

        /** GameLocale language */
        language?: string;

        /** GameLocale groups */
        groups?: otsimo.IMaterialGroup[];

        /** GameLocale components */
        components?: otsimo.IComponent[];
    }

    /** Represents a GameLocale. */
    class GameLocale {

        /**
         * Constructs a new GameLocale.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IGameLocale);

        /** GameLocale language. */
        public language: string;

        /** GameLocale groups. */
        public groups: otsimo.IMaterialGroup[];

        /** GameLocale components. */
        public components: otsimo.IComponent[];

        /**
         * Creates a new GameLocale instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLocale instance
         */
        public static create(properties?: otsimo.IGameLocale): otsimo.GameLocale;

        /**
         * Encodes the specified GameLocale message. Does not implicitly {@link otsimo.GameLocale.verify|verify} messages.
         * @param message GameLocale message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IGameLocale, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLocale message, length delimited. Does not implicitly {@link otsimo.GameLocale.verify|verify} messages.
         * @param message GameLocale message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IGameLocale, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLocale message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLocale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.GameLocale;

        /**
         * Decodes a GameLocale message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLocale
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.GameLocale;

        /**
         * Verifies a GameLocale message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLocale message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLocale
         */
        public static fromObject(object: { [k: string]: any }): otsimo.GameLocale;

        /**
         * Creates a plain object from a GameLocale message. Also converts values to other types if specified.
         * @param message GameLocale
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.GameLocale, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLocale to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MaterialGroup. */
    interface IMaterialGroup {

        /** MaterialGroup name */
        name?: string;

        /** MaterialGroup materials */
        materials?: otsimo.IMaterial[];

        /** MaterialGroup specGroup */
        specGroup?: string;
    }

    /** Represents a MaterialGroup. */
    class MaterialGroup {

        /**
         * Constructs a new MaterialGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: otsimo.IMaterialGroup);

        /** MaterialGroup name. */
        public name: string;

        /** MaterialGroup materials. */
        public materials: otsimo.IMaterial[];

        /** MaterialGroup specGroup. */
        public specGroup: string;

        /**
         * Creates a new MaterialGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MaterialGroup instance
         */
        public static create(properties?: otsimo.IMaterialGroup): otsimo.MaterialGroup;

        /**
         * Encodes the specified MaterialGroup message. Does not implicitly {@link otsimo.MaterialGroup.verify|verify} messages.
         * @param message MaterialGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: otsimo.IMaterialGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MaterialGroup message, length delimited. Does not implicitly {@link otsimo.MaterialGroup.verify|verify} messages.
         * @param message MaterialGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: otsimo.IMaterialGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MaterialGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): otsimo.MaterialGroup;

        /**
         * Decodes a MaterialGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MaterialGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): otsimo.MaterialGroup;

        /**
         * Verifies a MaterialGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MaterialGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MaterialGroup
         */
        public static fromObject(object: { [k: string]: any }): otsimo.MaterialGroup;

        /**
         * Creates a plain object from a MaterialGroup message. Also converts values to other types if specified.
         * @param message MaterialGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: otsimo.MaterialGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MaterialGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
