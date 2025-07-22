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
    <div className="row justify-content-center ">
      <div className="col-12 col-md-6 bg-light p-5 mt-">
        <div>
          <input
            className="form-control form-control-lg mb-3"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter Message..."
          />
          <input className="btn btn-outline-success" type="button" value="CreateMessage" onClick={createMessage} />
          <input className="btn btn-outline-success" type="button" value="ReadAllMessage" onClick={readAllMessages} />

          <div className="mb-3 mt-3">
            {messages.map((item, index) => (
              <div key={index} className="alert alert-success mt-1 mb-0">
                <h3>{item.message}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageComponent;
