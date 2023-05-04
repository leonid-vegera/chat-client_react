// #region imports
import { useEffect, useState } from 'react';
import './App.css';
import { MessageForm } from './MessageForm.jsx';
import { MessageList } from './MessageList.jsx';
import { WebSocketComponent } from './WebSocket';
// #endregion

const API_URL = 'ws://127.0.0.1:5050';

export function App() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState({});

  useEffect(() => {
    const socket = new WebSocket(API_URL);
    setSocket(socket);

    return () => {
      socket.close();
    };
  }, []);

  /*якщо socket змінюється, попередня підписка зберігається і замінюється новою підпискою на новий WebSocket */
  useEffect(() => {
    if (!socket.addEventListener) {
      return;
    }

    const handleMessage = (event) => {
      const message = JSON.parse(event.data);
      saveData(message);
    };

    socket.addEventListener('message', handleMessage);

    return () => {
      socket.removeEventListener('message', handleMessage);
    };
  }, [socket]);


  function saveData(message) {
    setMessages(current => [message, ...current]);
  }

  function sendMessage(text) {
    if (!socket.addEventListener) {
      return;
    }

    socket.send(text);
  }

  return (
    <section className="section content">
      <WebSocketComponent/>
      <MessageForm sendMessage={sendMessage}/>
      <MessageList messages={messages}/>
    </section>
  );
}
