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

// src/controllers/horoscopeController.ts
var horoscopeController_exports = {};
__export(horoscopeController_exports, {
  getHoroscope: () => getHoroscope
});
module.exports = __toCommonJS(horoscopeController_exports);

// src/data/signsData.ts
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

// src/services/horoscopeService.ts
var import_genai = require("@google/genai");
var ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
var getSarcasticHoroscope = async (name, sign) => {
  try {
    const traits = signsData[sign.toLocaleLowerCase()];
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
      Olha s\xF3, eu preciso que voc\xEA me ajude a 
      criar uma descri\xE7\xE3o do lado sombrio de um signo zodiacal, 
      porque, aparentemente, ${name} aqui, do signo de ${traits}, 
      acha que vive numa bolha de perfei\xE7\xE3o estelar. 
      Por favor, me entregue um texto t\xE3o sarcasticamente 
      brilhante que at\xE9 as estrelas v\xE3o revirar os olhos de inveja. 
      Foque nos defeitos mais rid\xEDculos e irritantes desse signo, 
      com aquele humor esperto que faz a gente rir enquanto concorda em segredo. 
      Nada de xingamentos, porque ${name} pode ser sens\xEDvel demais pra lidar com a 
      verdade nua e crua, mas capriche no tom de 'voc\xEA sabe que \xE9 assim mesmo'.
      Vamos l\xE1, destrua essa ilus\xE3o zodiacal com classe!
      `
    });
    return response.text;
  } catch (error) {
    console.log(error, "Invalid Sign");
  }
};

// src/controllers/horoscopeController.ts
var getHoroscope = async (request, reply) => {
  const { name, sign } = request.body;
  const message = await getSarcasticHoroscope(name, sign);
  return reply.send({ message });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getHoroscope
});
