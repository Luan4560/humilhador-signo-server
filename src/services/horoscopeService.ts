import { signsData } from "../data/signsData.js";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export const getSarcasticHoroscope = async (
  name: string,
  sign: string
): Promise<string> => {
  try {
    const traits = signsData[sign.toLocaleLowerCase()];

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `
      Olha só, eu preciso que você me ajude a 
      criar uma descrição do lado sombrio de um signo zodiacal, 
      porque, aparentemente, ${name} aqui, do signo de ${traits}, 
      acha que vive numa bolha de perfeição estelar. 
      Por favor, me entregue um texto tão sarcasticamente 
      brilhante que até as estrelas vão revirar os olhos de inveja. 
      Foque nos defeitos mais ridículos e irritantes desse signo, 
      com aquele humor esperto que faz a gente rir enquanto concorda em segredo. 
      Nada de xingamentos, porque ${name} pode ser sensível demais pra lidar com a 
      verdade nua e crua, mas capriche no tom de 'você sabe que é assim mesmo'.
      Vamos lá, destrua essa ilusão zodiacal com classe!
      `,
    });

    return response.text;
  } catch (error) {
    console.log(error, "Invalid Sign");
  }
};
