import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const sendEmail = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-email', {
        to: receiver,
        subject,
        text,
      });
      console.log('Server response:', response);
  
      if (response.status === 200) {
        alert('Email sent successfully!');
      } else {
        console.error('Error sending email. Server response:', response.data);
      }
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  };
  

  return (
    <div>
      <h1>Email Sender</h1>
      <div>
        <label>Sender:</label>
        <input type="text" value={sender} onChange={(e) => setSender(e.target.value)} />
      </div>
      <div>
        <label>Receiver:</label>
        <input type="text" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
      </div>
      <div>
        <label>Subject:</label>
        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div>
        <label>Text:</label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default App;
