import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const generationConfig = {
    temperature: 0.9,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
  };
  
const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro", generationConfig});



async function generatecontent(){
    try{
        const prompt = "what is the capital of India?"
        const data = await model.generateContent(prompt)
        const response = await data.response
        const text = response.text()
        console.log(text)

    }catch(error){
        console.error("Error generating content", error)
    }
}

generatecontent();
