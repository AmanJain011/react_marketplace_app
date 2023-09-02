import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/register';
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
