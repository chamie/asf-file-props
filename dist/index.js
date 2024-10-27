"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_node_1 = require("./parser-node");
const parser_web_1 = require("./parser-web");
exports.default = {
    node: parser_node_1.getASFProps,
    web: parser_web_1.getASFProps,
};
