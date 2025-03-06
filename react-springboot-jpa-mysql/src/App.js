import './App.css';
import Home from './pages/home';
import Layout from './pages/Layout';
import Login from './pages/Login';
import './css/indexStyle.css';
import JoinsForm from './pages/JoinsForm';
import JoinsEdit from './pages/JoinsEdit';
import Board from './pages/Board';
import BoardForm from './pages/BoardForm';
import BoardInfo from './pages/BoardInfo';
import BoardEdit from './pages/BoardEdit';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/joinsForm" element={<JoinsForm/>}></Route>
          <Route path="/joinsEdit" element={<JoinsEdit/>}></Route>
          <Route path="/board" element={<Board/>}></Route>
          <Route path="/boardForm" element={<BoardForm/>}></Route>
          <Route path="/boardInfo" element={<BoardInfo/>}></Route>
          <Route path="/boardEdit" element={<BoardEdit/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
