import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originals, actions ,horror,romance,comedy,documentaries} from './urls';

function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title="Netflix Originals"/>
    <RowPost url={actions} title="Actions" isSmall/>
    <RowPost url={horror} title="Horror" isSmall/>
    <RowPost url={comedy} title="Comedy Movies" isSmall/>
    <RowPost url={romance} title="Romance Movies" isSmall/>
    <RowPost url={documentaries} title="Documentaries" isSmall/>
    
    </div>
  );
}

export default App;
