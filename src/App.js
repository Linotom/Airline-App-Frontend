import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookTickets from './components/BookTickets';
import CancelTicket from './components/CancelTicket';
import Header from './components/Header';
import SearchTicket from './components/SearchTicket';

function App() {
  return (
  <BrowserRouter>
  <Routes>
<Route path='/' element={<BookTickets/>}/>
<Route path='/cancel' element={<CancelTicket/>}/>
<Route path='/search' element={<SearchTicket/>}/>
 </Routes>
  </BrowserRouter>
  );
}

export default App;
