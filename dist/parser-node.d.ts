/// <reference types="node" />
/// <reference types="node" />
import { promises as fsp, PathLike } from 'fs';
import { ASFFileProps } from './ASFFileProps';
export declare function getASFProps(filePath: PathLike | fsp.FileHandle): Promise<ASFFileProps | null>;
