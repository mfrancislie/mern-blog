import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { IndexPage, LoginPage, RegisterPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
