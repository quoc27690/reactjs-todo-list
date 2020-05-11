import React from "react";
import "./App.css";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import TabMenu from "./components/TabMenu";

import {
  HomeOutlined ,
  GiftOutlined ,
  CloudUploadOutlined,
  CoffeeOutlined,
  ToolOutlined ,
} from "@ant-design/icons";

function App() {
  return (
    <div className="container mt-3 text-center">
      <div className="row">
        <div className="col">
          <Header />
          <br />
          <LoginForm email='abc@example.com'/>
          <br />
          <div className='d-flex justify-content-center'>
            <TabMenu component={HomeOutlined } label='Home'/>
            <TabMenu component={GiftOutlined } label='Deals'/>
            <TabMenu component={CloudUploadOutlined} label='Upload'/>
            <TabMenu component={CoffeeOutlined} label='Work'/>
            <TabMenu component={ToolOutlined } label='Settings'/>
          </div>
          <hr/>
          <TodoItem title="mua bim bim" />
          <TodoItem title="di cho" />
          <TodoItem title="tam bien" />
        </div>
      </div>
    </div>
  );
}

export default App;
