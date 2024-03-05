import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Page404 from './components/Page404';

function App() {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/404" element={<Page404 />} />
                    <Route path="/*" element={<Navigate to="/404" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
