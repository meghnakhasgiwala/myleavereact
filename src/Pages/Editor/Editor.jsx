



import { useEffect, useState } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai";



export default function Editor() {

  let [prompt, setprompt] = useState("")
  let [res, setres] = useState("")



  useEffect(() => {
    function hendlegemini() {
      const apiKey = "AIzaSyD0633Qh1dx9fLt0Z-vcbsee4EL4AJ6qQM";
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };

      async function run() {
        const chatSession = model.startChat({
          generationConfig,
          history: [ ],
        });
        if (prompt) {
          const result = await chatSession.sendMessage(prompt);
          setres(result.response.text());
          console.log(result.response.text());
        } else {
          console.log("No prompt provided.");
        }
      }
      run();
    }
    hendlegemini()
  }, [prompt])



  function formsubmit(e) {
    e.preventDefault()
    setprompt(e.target[0].value)
    
  }

 


  return (
    <div>
     
      <form onSubmit={(e) => formsubmit(e)}>
        <input type="text" />
        <button>submit</button>
      </form>


      
      <div sx={{ backgroundColor: "white", wordSpacing: 3 }} >{res}</div>
    </div>
  )
}