"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getASFProps = void 0;
const commont_1 = require("./commont");
const getASFProps = async (file) => {
    const arrayBuffer = await file.slice(0, 1024).arrayBuffer();
    const buffer = new DataView(arrayBuffer);
    // Search for ASF file properties object GUID in first 1024 bytes
    let filePropsObjectPos = -1;
    for (let i = 0; i <= arrayBuffer.byteLength - commont_1.filePropsObjectGuid.length; i++) {
        let found = true;
        for (let j = 0; j < commont_1.filePropsObjectGuid.length; j++) {
            if (buffer.getUint8(i + j) !== commont_1.filePropsObjectGuid[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            filePropsObjectPos = i;
            break;
        }
    }
    if (filePropsObjectPos === -1) {
        console.error("ASF file header not found.");
        return null;
    }
    const result = (0, commont_1.getFields)(buffer, filePropsObjectPos);
    return (result);
};
exports.getASFProps = getASFProps;
