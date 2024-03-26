import './App.css';
import Agile from './components/Agile/Agile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Payment from './components/Img/Payment';

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Agile />}/>
          <Route path='/payment' element={<Payment />}/>
          {/* <Agile /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
