import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { CreateNewPost, IndexPage, LoginPage, RegisterPage } from './pages';
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create" element={<CreateNewPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
