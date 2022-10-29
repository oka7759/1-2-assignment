import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Header from './components/header/Header';
import { ListContextProvider } from './context/ListContext';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <ListContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </ListContextProvider>
    </BrowserRouter>
  );
};

export default Router;
