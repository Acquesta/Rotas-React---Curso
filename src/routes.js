import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './paginas/inicio';
import SobreMim from './paginas/sobreMim';
import Menu from './components/menu';
import Rodape from 'components/rodape';
import PaginaPadrao from 'components/paginaPadrao';
import Post from 'paginas/post';
import NaoEncontrada from 'paginas/naoEncontrada';

function AppRoutes() {
  return (
    <BrowserRouter>

      <Menu />

      <Routes>
        <Route
          path='/'
          element={<PaginaPadrao />}
        >

          <Route
            index
            element={<Inicio />}
          />
          <Route
            path='sobremim'
            element={<SobreMim />}
          />

        </Route>

        <Route 
            path='posts/:id'
            element={<Post />}
        />

        <Route
          path='*'
          element={<NaoEncontrada />}
        />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
