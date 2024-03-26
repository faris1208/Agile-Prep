import './App.css';
import './components/Navbar/navbar.css';
import './components/Footer/footer.css';
import './components/Payment/payment.css';
import Agile from './components/Agile/Agile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './components/Payment/Payment';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Agile />}/>
          <Route path='/payment' element={<Payment />}/>
          {/* <Agile /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
