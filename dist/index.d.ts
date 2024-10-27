import { getASFProps as node } from './parser-node';
declare const _default: {
    node: typeof node;
    web: (file: File) => Promise<import("./ASFFileProps").ASFFileProps | null>;
};
export default _default;
