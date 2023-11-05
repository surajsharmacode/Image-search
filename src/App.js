
import './App.css';
import SearchBar from './components/SearchBar';
import ImageLists from './components/ImageLists';
import { useState } from 'react';

function App() {
  let [info, setInfo]=useState("");
  return (
    <div className="App">
    <SearchBar setInfo={setInfo}/>
   <ImageLists images={info}/>
    
    </div>
  );
}

export default App;
