import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import Content from './components/Content';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts`).then(res => setData(res.data)).catch(e => console.log(e))
  }, [])

  return (
    <div className="App">
      <Navbar data={data} />
      <Content />
    </div>
  );
}

export default App;
