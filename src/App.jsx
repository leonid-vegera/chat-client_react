// #region imports
import {useState} from 'react';
import './App.css'
import {MessageForm} from './MessageForm.jsx';
import {MessageList} from './MessageList.jsx';
import axios from 'axios';
import {LongPollingLoader} from './LongPolling';
import {ServerSentEventsLoader} from './ServerSentEvents';
// #endregion

const API_URL = 'http://127.0.0.1:5050/messages';
const DataLoader = ({onData}) => {
  return (
      <ServerSentEventsLoader onData={onData} api={API_URL}/>
  )
};

export function App() {
  const [messages, setMessages] = useState([]);

  function saveData(message) {
    setMessages(current => [message, ...current])
  }

  return (
      <section className="section content">
        <DataLoader onData={saveData}/>
        <MessageForm/>
        <MessageList messages={messages}/>
      </section>
  )
}
