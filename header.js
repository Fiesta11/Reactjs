import { useState } from "react";

const Titles = () => (
    <a href="/">
        <img className="logo" alt = "img" src = "https://scontent.fknu2-1.fna.fbcdn.net/v/t39.30808-6/302441959_486213156849687_1897954130219057783_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uXq45qCHd28AX_3gU6i&_nc_ht=scontent.fknu2-1.fna&oh=00_AfBERXT6PvyYST2IK5oWiPOxM_lvBZgmtvWfx_pAZHcV7A&oe=63EC9C24"/>
    </a>
);
 const Header = () => {
    let t = "Food Villa"
    const[title , settitle] = useState("Food Villa");
    return (
         <div className="header">
             {Titles()}
             <h1>{title}</h1>
             <button onClick={()=> {
               settitle("New Food Villa")
             }}>Submit</button>

         <div className="nav_items">
             <ul>
                 <li>Home</li>
                 <li>About</li>
                 <li>Contact</li>
                 <li>Cart</li>
             </ul>
         </div>
         </div>
     );
 };



 export default Header;