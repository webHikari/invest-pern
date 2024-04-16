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


import Index from './components/Index';
import About from './components/About';
import Warranty from './components/Warranty.jsx';

import { useState, useEffect } from 'react';
import URL from './components/Configuration';



function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (boolean) => {
        setIsAuthenticated(boolean);
    };

    const isAuth = async () => {
        try {
            const response = await fetch(
                URL() + 'auth/is-verify',
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
                                <Navigate to="/" />
                            ) : (
                                <Dashboard setAuth={setAuth} />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/"
                        element={<Index setAuth={setAuth}/>}
                    />
                    <Route 
                        path="/about"
                        element={<About />}
                    />
                    <Route 
                        path="/warranty"
                        element={<Warranty />}
                    />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
           </Router>
    );
}

export default App;
