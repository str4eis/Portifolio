
//componentes
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Formacao from './pages/Formacao/Formacao';
import Hobbies from './pages/Hobbies/Hobbies';
import Trabalhos from './pages/Trabalhos/Trabalhos';

//styles //CSS
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <header>
        <img src="/icon.jpg" height="70px" width="70px" alt="Logo" />

        
      </header>

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/hobbies' element={<Hobbies/>} />
          <Route path='/formacao' element={<Formacao/>} />
          <Route path='/trabalhos' element={<Trabalhos/>} />
        </Routes>
      </BrowserRouter>


      <footer>
        <div className="p1">
          <p>Instagram</p>
          <i style={{ fontSize: '24px' }} className="fa">
            &#xf16d;
          </i>
          <br />
          <a
            className="item"
            href="https://www.instagram.com/_str4is/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @_str4is
          </a>
        </div>
        <div className="p2">
          <p>Linkedin</p>
          <i style={{ fontSize: '24px' }} className="fa">
            &#xf08c;
          </i>
          <br />
          <a
            className="item"
            href="https://www.linkedin.com/in/estervitoriareis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ester Reis
          </a>
        </div>
        <div className="p3">
          <p>Whatsapp</p>
          <i style={{ fontSize: '24px' }} className="fa">
            &#xf232;
          </i>
          <br />
          <a
            className="item"
            href="https://api.whatsapp.com/send?phone=5581985563424"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
          </a>
        </div>
        <div className="p4">
          <p>GitHub</p>
          <i style={{ fontSize: '24px' }} className="fa">
            &#xf09b;
          </i>
          <br />
          <a
            className="item"
            href="https://github.com/str4eis"
            target="_blank"
            rel="noopener noreferrer"
          >
            str4is
          </a>
        </div>
      </footer>
    </div>

  );
}

export default App;
