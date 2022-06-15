import React from 'react';
import './App.css';
import Converter from "./pages/Converter";
import {Routes, Route} from "react-router-dom";
import Currencies from "./pages/Currencies";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout/>}>
        <Route index element={<Converter/>}/>
        <Route path="currencies" element={<Currencies/>}/>
      </Route>
    </Routes>
  );
}

export default App;
