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

// src/services/horoscopeService.ts
var horoscopeService_exports = {};
__export(horoscopeService_exports, {
  getSarcasticHoroscope: () => getSarcasticHoroscope
});
module.exports = __toCommonJS(horoscopeService_exports);
var import_genai = require("@google/genai");
var ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
var getSarcasticHoroscope = async (name, sign) => {
  if (!name || !sign) {
    throw new Error("Name and sign are required");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `eu preciso que voc\xEA me ajude a criar uma descri\xE7\xE3o do lado sombrio de um signo zodiacal, porque,
       aparentemente, ${name} aqui, do signo de ${sign}, acha que vive numa bolha de perfei\xE7\xE3o estelar. 
       Por favor, me entregue um texto t\xE3o sarcasticamente brilhante que at\xE9 as estrelas v\xE3o revirar os olhos de inveja. 
       Foque nos defeitos mais rid\xEDculos e irritantes desse signo, com aquele humor esperto que faz a gente rir enquanto concorda em segredo. 
       Nada de xingamentos, porque ${name} pode ser sens\xEDvel demais pra lidar com a verdade nua e crua, mas capriche no tom de 'voc\xEA sabe que \xE9 assim mesmo'. 
       Vamos l\xE1, destrua essa ilus\xE3o zodiacal com classe!`
    });
    return response.text;
  } catch (error) {
    console.log(error, "Invalid Sign");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getSarcasticHoroscope
});
