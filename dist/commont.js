"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFields = exports.filePropsObjectGuid = void 0;
/** Representation of the `ASF_File_Properties_Object` GUID, see [specs, p.89](https://download.microsoft.com/download/7/9/0/790fecaa-f64a-4a5e-a430-0bccdab3f1b4/ASF_Specification.doc) */
exports.filePropsObjectGuid = Uint8Array.from([0xA1, 0xDC, 0xAB, 0x8C, 0x47, 0xA9, 0xCF, 0x11, 0x8E, 0xE4, 0x00, 0xC0, 0x0C, 0x20, 0x53, 0x65]);
const isBuffer = (buf) => buf.readBigUint64LE !== undefined;
const getFields = (buffer, propsObjectOffset) => {
    let read;
    if (isBuffer(buffer)) {
        read = offset => buffer.readBigUint64LE(offset);
    }
    else {
        read = offset => buffer.getBigUint64(offset);
    }
    // For the full list of this object's properties see specs, p.7.
    let offset = propsObjectOffset;
    offset += 40;
    const fileSize = read(offset);
    offset += 8;
    const creationDate = read(offset);
    offset += 16;
    const playDuration = read(offset);
    offset += 16;
    const preRoll = read(offset);
    const durationInSeconds = Number(playDuration / 10000n - preRoll) / 1000;
    return {
        creationDate,
        fileSize,
        playDuration,
        preRoll,
        durationInSeconds,
    };
};
exports.getFields = getFields;
