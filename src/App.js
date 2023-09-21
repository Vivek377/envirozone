import { useContext, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import axios from 'axios';
import { ContentContext } from './context/ContentContextProvider';
import Content from './components/Content';

function App() {
  const [data, setData] = useState([]);
  const { file } = useContext(ContentContext);

  console.log(file);

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
