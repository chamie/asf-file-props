"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getASFProps = void 0;
const fs_1 = require("fs");
const commont_1 = require("./commont");
async function getASFProps(filePath) {
    try {
        const buffer = await fs_1.promises.readFile(filePath);
        const filePropsObjectPos = buffer.indexOf(commont_1.filePropsObjectGuid);
        if (filePropsObjectPos === -1) {
            console.error("ASF file header not found.");
            return null;
        }
        return (0, commont_1.getFields)(buffer, filePropsObjectPos);
    }
    catch (error) {
        console.error("Error reading ASF file:", error);
        return null;
    }
}
exports.getASFProps = getASFProps;
