import LogIn from './components/log-in-page/LogIn';
import HomePage from './components/home-page/HomePage';
import Nav from './components/navigation/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registr from './components/log-in-page/registr-page/Registr';
import { userContext } from './components/provider/userProvider'
import { useContext } from 'react'

import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";

function App() {

  const { currentUser } = useContext(userContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Events" element={<Events />} />
          {!currentUser && <Route path='login' element={<LogIn />} />}
          <Route path='registr' element={<Registr />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
