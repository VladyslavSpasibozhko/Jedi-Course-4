import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Routes from './components/common/Routes'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    return (
        <BrowserRouter>
            <Navbar/>
            <Routes/>
        </BrowserRouter>
    );
}

export default App;
