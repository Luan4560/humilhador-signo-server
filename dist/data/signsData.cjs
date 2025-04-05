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
  Aries: ["teimoso", "impulsivo"],
  Touro: ["pregui\xE7oso", "comil\xE3o"],
  G\u00EAmeos: ["curioso", "indeciso"],
  C\u00E2ncer: ["sens\xEDvel", "apegado"],
  Le\u00E3o: ["orgulhoso", "dram\xE1tico"],
  Virgem: ["perfeccionista", "cr\xEDtico"],
  Libra: ["indeciso", "charme"],
  Escorpi\u00E3o: ["intenso", "vingativo"],
  Sagit\u00E1rio: ["aventureiro", "sincero"],
  Capric\u00F3rnio: ["ambicioso", "teimoso"],
  Aqu\u00E1rio: ["exc\xEAntrico", "independente"],
  Peixes: ["sonhador", "emotivo"]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  signsData
});
