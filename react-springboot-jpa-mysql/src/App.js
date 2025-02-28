import './App.css';
import Home from './pages/home';
import Layout from './pages/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
