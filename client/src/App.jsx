import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Link,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Page404 from './components/Page404';
import { useState, useEffect } from 'react';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await fetch(
                'http://localhost:3000/auth/is-verify',
                {
                    method: 'GET',
                    headers: { token: localStorage.token },
                }
            );
            const parseRes = await response.json();

            parseRes === true
                ? setIsAuthenticated(true)
                : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        isAuth();
    });

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route
                        path="/login"
                        element={
                            !isAuthenticated ? (
                                <Login setAuth={setAuth} />
                            ) : (
                                <Navigate to="/dashboard" />
                            )
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            !isAuthenticated ? (
                                <Register setAuth={setAuth} />
                            ) : (
                                <Navigate to="/dashboard" />
                            )
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            !isAuthenticated ? (
                                <Navigate to="/login" />
                            ) : (
                                <Dashboard setAuth={setAuth} />
                            )
                        }
                    />
                    <Route path="/" element={<Navigate to="/dashboard" />} />
                    <Route path="/404" element={<Page404 />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
