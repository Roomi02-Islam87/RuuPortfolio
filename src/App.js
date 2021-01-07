import React from "react";
import './App.css';
import MyNavbar from "./components/my-Navbar/mynavbar.component";
import MyCarausel from "./components/my-carausel/my-carausel.component"
import TitleMessage from "./components/title-message/title-message.component"




const App= () => {
  return (
    <div>
      <MyNavbar/>
      <MyCarausel/>
      <TitleMessage/>
      
          </div>
  );
}

export default App;
