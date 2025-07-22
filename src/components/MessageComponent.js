import axios from "axios";
import { useEffect, useState } from "react";

function MessageComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    readAllMessages();
  }, []);

  const readAllMessages = async () => {
    // Integration
    const url = "http://localhost:8080/message/readall";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(url, { headers });
    console.log(response.data);

    // dynamic update from backend
    setMessages(response.data);
  };

  const createMessage = async () => {
    // Integration
    const url = "http://localhost:8080/message/create";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const payload = { message: message };
    const response = await axios.post(url, payload, { headers });
    console.log(response.data);

    setMessage(""); // Clear input field
    readAllMessages();
  };

  return (
    <div>
      <h1>Message Component</h1>

      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message..." />
      <input type="button" value="CreateMessage" onClick={createMessage} />
      <input type="button" value="ReadAllMessage" onClick={readAllMessages} />

      {messages.map((item, index) => (
        <div key={index}>
          <h3>{item.message}</h3>
        </div>
      ))}
    </div>
  );
}
export default MessageComponent;
