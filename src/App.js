import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Routes from './components/common/Routes'
import store from './redux/store'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

    return (
        <BrowserRouter>
					<Provider store={store}>
            <Navbar/>
            <Routes/>
					</Provider>
        </BrowserRouter>
    );
}

export default App;
