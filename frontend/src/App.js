
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './componets/About.js';
import AddBook from './componets/Addbook.js';
import Booklist from './componets/Booklist.js';
import BookStore from './componets/BookStore.js';
import Contact from './componets/Contact.js';
import Header from './componets/Header.js';
import Home from './componets/Home.js';
import Login from './componets/Login.js';
import Ragister from './componets/Ragister.js';
import Updatebook from './componets/Updatebook.js';


function App() {

  return (<>
    <div className=" app-background">
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/ragister' element={<Ragister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/addbook' element={<BookStore />} />
        <Route path='/addbook' element={<AddBook />} />
        <Route path='/booklist' element={<Booklist />} />
        <Route path='/updatebook/:id' element={<Updatebook />} />

      </Routes>
    </div>
  </>

  );
}

export default App;


