import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { ListContextProvider } from './context/ListContext';

const Router = () => {
  return (
    <BrowserRouter>
      <ListContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </ListContextProvider>
    </BrowserRouter>
  );
};

export default Router;
