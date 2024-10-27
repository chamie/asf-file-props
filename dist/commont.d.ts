/// <reference types="node" />
/// <reference types="node" />
import { ASFFileProps } from "./ASFFileProps";
/** Representation of the `ASF_File_Properties_Object` GUID, see [specs, p.89](https://download.microsoft.com/download/7/9/0/790fecaa-f64a-4a5e-a430-0bccdab3f1b4/ASF_Specification.doc) */
export declare const filePropsObjectGuid: Uint8Array;
export declare const getFields: (buffer: Buffer | DataView, propsObjectOffset: number) => ASFFileProps;
