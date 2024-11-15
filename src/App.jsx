import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Experienc from "./components/Experienc";
import Guia from "./pages/Guia";
import NavBar from './components/NavBar';
import { useAuth } from './components/useAuth';
import Guia2 from './pages/Guia2';
import Login from './pages/Login';
import Arquitectura from './pages/Arquitectura';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Experienc />} />
        <Route exact path="guia" element={<Guia />} />
        <Route exact path="login/guia2/:id" element={<Guia2 />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="arquitectura" element={<Arquitectura />} />
        {/* <Route exact path="idioma" element={<LanguageSwitcher />} /> */}
      </Routes>
    </>
  );
}

export default App;
