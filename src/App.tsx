import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ErrorPage } from './pages/ErrorPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='*'
        element={<ErrorPage title='404' description='Página no encontrada' buttonText='Volver al inicio' />}
      />
    </Routes>
  );
};
export default App;
