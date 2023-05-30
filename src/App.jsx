import { Formulario } from "./Pages/formulario";
import { Home } from "./Pages/Home";
import { useState } from "react";
import "./App.css";

function App() {
  const [user,setUser] =useState([])
  return (
    <>
      <div>
        {
          !user.length > 0
          ?<Formulario setUser={setUser}/>
          :<Home user={user} setUser={setUser}/>

        }
      </div>
    </>
  );
}

export default App;
