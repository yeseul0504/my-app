import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import ListPage from './pages/ListPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login/:id" element={<LoginPage />} />
      </Routes>
      <ListPage />
      <Footer />
    </div>
  );
}

export default App;
