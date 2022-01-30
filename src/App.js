import React from 'react';
import { Navbar } from './components/navbar';
import { Home } from './components/home';
import { FourUp } from './components/fourUp';
import { Time } from './components/time';
import { Metrics } from './components/metrics';
import { Plan } from './components/plan';
import { Error } from './components/error';
import { Routes, Route } from "react-router-dom";

export const App = () => {
    return <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fourup" element={<FourUp />} />
            <Route path="time" element={<Time />} />
            <Route path="plan" element={<Plan />} />
            <Route path="metrics" element={<Metrics />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </div>
};

export default App;