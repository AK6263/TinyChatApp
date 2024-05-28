import MessageBox from "./MessageBox";
import { useState } from "react";
import { Ollama } from "ollama";

function App() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const getLLMOutput = async (userMessage) => {
    const ollama = new Ollama();
    const res = await ollama.generate({
      model: "tinyllama",
      prompt: userMessage,
      keep_alive: "1s",
    });
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: res.response, type: "bot" },
    ]);
    console.log(res);
  };

  const sendInputMessage = () => {
    const newMessage = { text: userInput, type: "user" };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    getLLMOutput(userInput);
    setUserInput("");
  };

  return (
    <>
      <div className="main-container">
        <div className="chat-container">
          {messages.map((value, index) => {
            return (
              <MessageBox key={index} text={value.text} type={value.type} />
            );
          })}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendInputMessage();
              }
            }}
          />
          <button onClick={sendInputMessage}>Send</button>
        </div>
      </div>
    </>
  );
}

export default App;
