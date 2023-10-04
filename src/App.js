import { useEffect, useState } from "react";
import "./App.css";
import League from "./League";
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
