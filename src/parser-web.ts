import { ASFFileProps } from "./ASFFileProps";
import { filePropsObjectGuid, getFields } from "./commont";

export const getASFProps = async (file: File): Promise<ASFFileProps | null> => {
    const arrayBuffer: ArrayBuffer = await file.slice(0, 1024).arrayBuffer();
    const buffer = new DataView(arrayBuffer);

    // Search for ASF file properties object GUID in first 1024 bytes
    let filePropsObjectPos = -1;
    for (let i = 0; i <= arrayBuffer.byteLength - filePropsObjectGuid.length; i++) {
        let found = true;
        for (let j = 0; j < filePropsObjectGuid.length; j++) {
            if (buffer.getUint8(i + j) !== filePropsObjectGuid[j]) {
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

    const result = getFields(buffer, filePropsObjectPos);

    return (result);
};