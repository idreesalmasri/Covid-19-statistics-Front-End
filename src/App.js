import Footer from "./Components/Footer/Footer.js"
import Header from "./Components/Header/Header"
import NavBar from './Components/Navbar/Navbar'
import TotalStatistics from './Components/Main/Home/Total/TotalStatistics'
import AllCountries from "./Components/Main/AllCountries/AllCountries.js"
import MyRecords from "./Components/Main/Records/myRecords.js"
import { useState } from "react"
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <>
      <Header />
      <NavBar setActiveTab={setActiveTab}/>
      {activeTab==="Home"?<TotalStatistics />:null}
      {activeTab==="All Countries"?<AllCountries activeTab={activeTab} />:null}
      {activeTab==="My Records"?<MyRecords activeTab={activeTab}/>:null}
      <Footer />
    </>
  );
}

export default App;
