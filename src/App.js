import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <BrowserRouter>
            <Sidebar /> {/* left sidebar of application */}
            <Routes>
              <Route
                path='/rooms/:roomId'
                element={<Chat /> /* main chat section of application */}
              ></Route>
              <Route path='/' element={<Chat />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
