import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loader from "./components/Loader";
import Countdown from "./components/Countdown";
import Message from "./views/message";

function App() {
  const [newYear, setNewYear] = useState(1);
  const [inputName, setInputName] = useState({
    nombre: "",
    color: "",
    mensaje: ""
  });

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}></Suspense>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <header className="App-header">
              <Loader newYear={newYear} />
              <Countdown setNewYear={setNewYear} newYear={newYear} inputName={inputName} setInputName={setInputName} />
            </header>
          </div>
        } />
        <Route path="/content" element={<Message inputName={inputName} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
