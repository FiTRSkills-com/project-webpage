import React from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { FourUp } from './components/fourUp';

export const App = () => {
    return <div className="app"> 
        <Navbar />
        <Home />
        {/* <FourUp /> */}
    </div>
};

export default App;