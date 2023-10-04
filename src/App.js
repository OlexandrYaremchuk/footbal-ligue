import { useEffect, useState } from "react";
import "./App.css";
import League from "./League";
import Loading from './components/Loading';

import Home from './components/Home';

import Login from "./components/Login";


function App() {
  const [modal, setModal] = useState(false);
  function openModal() {
    setModal(true);
  }
  function closeModal() {
    setModal(false);
  }
  useEffect(() => {
    setTimeout(closeModal, 5000);
  }, [modal]);

  return (
    <div className="App">

<League/>
<Home/>

      <button
        onClick={() => {
          openModal();
        }}
      >
        Login
        {modal && <Login closeModal={closeModal} />}
      </button>
      <League />

    </div>
  );
}

export default App;
