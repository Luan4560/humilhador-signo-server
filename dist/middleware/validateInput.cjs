var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/middleware/validateInput.ts
var validateInput_exports = {};
__export(validateInput_exports, {
  validateInput: () => validateInput
});
module.exports = __toCommonJS(validateInput_exports);
var validateInput = (request, reply, done) => {
  const { name, sign } = request.body;
  if (!name || !sign) {
    reply.code(400).send({ error: "Nome e signo s\xE3o obrigat\xF3rios " });
    return;
  }
  done();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  validateInput
});
