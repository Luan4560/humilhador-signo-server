var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app.ts
var app_exports = {};
__export(app_exports, {
  default: () => app_default
});
module.exports = __toCommonJS(app_exports);
var import_fastify = __toESM(require("fastify"), 1);
var import_config = require("dotenv/config");

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

// src/middleware/validateInput.ts
var validateInput = (request, reply, done) => {
  const { name, sign } = request.body;
  if (!name || !sign) {
    reply.code(400).send({ error: "Nome e signo s\xE3o obrigat\xF3rios " });
    return;
  }
  done();
};

// src/routes/hosroscopeRoutest.ts
async function horoscopeRoutes(fastify2) {
  fastify2.post("/api/horoscope", { preHandler: validateInput }, getHoroscope);
}

// src/app.ts
var import_cors = __toESM(require("@fastify/cors"), 1);
var app = (0, import_fastify.default)();
app.register(import_cors.default, { origin: "*" });
app.get("/", (_, reply) => {
  reply.send({ test: "Ping" });
});
app.register(horoscopeRoutes);
app.listen({ port: 8080, host: "0.0.0.0" }).then(() => {
  console.log(`Server running on port 8080`);
});
var app_default = app;
