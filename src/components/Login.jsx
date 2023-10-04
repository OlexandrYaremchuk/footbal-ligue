import React from "react";

const Login = ({ closeModal }) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "grey",
        top: "10vh",
        left: "20vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={() => {
          closeModal();
        }}
      >
        Close
      </button>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
