import React from "react";
import "./App.css";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="container mt-3 text-center">
      <div className="row">
        <div className="col">
        <Header />
        <br/>
        <LoginForm />
        <TodoItem title="mua bim bim" />
        <TodoItem title="di cho" />
        <TodoItem title="tam bien" />
        </div>

      </div>
    </div>
  );
}

export default App;
