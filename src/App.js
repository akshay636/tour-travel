
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Plans from './components/Plans';
import Home from './components/Home';
import Footer from './components/Footer'
import Newslist from './components/Newslist';
import Weather from './components/Movies';
import Movies from './components/Movies';
import Trains from './components/Trains'
import Searchbar from './components/Searchbar';
import TodoList from './components/TodoList';

function App() {
  const [mode, setmode] = useState('light');
  const [txt, settxt] = useState('enable Dark mode')
  const theme = () => {
    if (mode === 'light') {
      setmode('dark');
      settxt('dark mode on');
      document.body.style.backgroundColor = 'black';

    }
    else {
      setmode('light')
      settxt('enable Dark mode')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div className="App">
      <Navbar
        txt={txt}
        mode={mode}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Home mode={mode} />} />
        <Route path='/about' element={<Aboutus/>}></Route>
        <Route path='/home' element={<Home mode={mode}></Home>}></Route>
        <Route path='/contact' element={<Contact mode={mode}></Contact>}></Route>
        <Route path='/plans' element={<Plans
        mode={mode}
        ></Plans>}></Route>
        <Route path='/Train' element={<Trains
        mode={mode}></Trains>}></Route>
        <Route path='/news' element={<Newslist
          mode={mode}
        />}></Route>
        <Route path='/Movies' element={<Movies
          mode={mode}
        />}></Route>
        <Route path='/users' element={<Searchbar
          mode={mode}
        />}></Route>
        <Route path='/todo' element={<TodoList
          mode={mode}
        />}></Route>
        
        
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
