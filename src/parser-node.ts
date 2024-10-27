import { promises as fsp, PathLike } from 'fs';
import { ASFFileProps } from './ASFFileProps';
import { filePropsObjectGuid, getFields } from './commont';

export async function getASFProps(filePath: PathLike | fsp.FileHandle): Promise<ASFFileProps | null> {
    try {
        const buffer = await fsp.readFile(filePath);

        const filePropsObjectPos = buffer.indexOf(filePropsObjectGuid);
        if (filePropsObjectPos === -1) {
            console.error("ASF file header not found.");
            return null;
        }

        return getFields(buffer, filePropsObjectPos);
    } catch (error) {
        console.error("Error reading ASF file:", error);
        return null;
    }
}