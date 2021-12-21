import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loader from "./components/Loader";
import Countdown from "./components/Countdown";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}></Suspense>
      <div className="App">
        <header className="App-header">
          <Loader/>
          <Countdown/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
