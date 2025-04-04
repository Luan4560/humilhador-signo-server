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

// src/data/signsData.ts
var signsData_exports = {};
__export(signsData_exports, {
  signsData: () => signsData
});
module.exports = __toCommonJS(signsData_exports);
var signsData = {
  aries: ["teimoso", "impulsivo"],
  touro: ["pregui\xE7oso", "comil\xE3o"],
  gemeos: ["curioso", "indeciso"],
  cancer: ["sens\xEDvel", "apegado"],
  leao: ["orgulhoso", "dram\xE1tico"],
  virgem: ["perfeccionista", "cr\xEDtico"],
  libra: ["indeciso", "charme"],
  escorpiao: ["intenso", "vingativo"],
  sagitario: ["aventureiro", "sincero"],
  capricornio: ["ambicioso", "teimoso"],
  aquario: ["exc\xEAntrico", "independente"],
  peixes: ["sonhador", "emotivo"]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  signsData
});
