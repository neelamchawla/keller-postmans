import React, { useState, useEffect } from "react";
import './App.css';
import './App1.css';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Case from './Component/Case';
import Awards from './Component/Awards';
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {

  const [dataList, setDatas] = useState(null);
  useEffect(() => {
    fetch("https://php.spinxweb.net/keller-postman/wp-json/wp/v2/pages/6")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.acf);
          setDatas(result.acf);
        },
        (error) => {
          console.log(error);
          setDatas(null);
        }
      );
  }, []);

  if (!dataList) return <div>No Record Found</div>;

  return (
    <div className="App">
      <Navbar dataList={dataList} />
      <Main dataList={dataList} />
      <Case dataList={dataList} />
      <Awards dataList={dataList} />
      <Contact dataList={dataList} />
      <Footer />
    </div>
  );
}

export default App;
