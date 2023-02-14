import React from "react";
import  ReactDOM from "react-dom/client";
// import Header from "./components/header"
import Header from "./components/header"
import Body from "./components/body"
import Footer  from "./components/footer";
console.log("Utrsav");


const Applayout = () => {
   return (
   <>
     <Header/>
    <Body/>
    <Footer/>
   </>
);
};
// const container = React.createElement("div", { id: "container" , hellow : "World" }, heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);