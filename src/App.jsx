// #region imports
import {useState} from 'react';
import './App.css'
import {MessageForm} from './MessageForm.jsx';
import {MessageList} from './MessageList.jsx';
import {ShortPollingLoader} from './ShortPolling';
import axios from 'axios';
// #endregion

const API_URL = 'http://127.0.0.1:5050/messages';
const DataLoader = ({onData}) => {
  function loadData() {
    axios.get(API_URL)
        .then(res => {
          onData(res.data);
        })
  }

  return (
      <ShortPollingLoader loadData={loadData}/>
  )
};

export function App() {
  const [messages, setMessages] = useState([]);

  function saveData(messagesFromServer) {
    setMessages(messagesFromServer)
  }

  return (
      <section className="section content">
        <DataLoader onData={saveData}/>

        <MessageForm/>
        <MessageList messages={messages}/>
      </section>
  )
}
