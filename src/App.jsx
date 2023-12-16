import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/detail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:nomor" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
