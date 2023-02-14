import { Rest_card } from "./rest_card";
import { res_list } from "../configure"
import { useState,useEffect } from "react";


function filter_data(search_text , restaurant){
    const fi =   restaurant.filter((rest) => rest.name.includes(search_text));
    return fi; 
}

const Body = () => {

    const [search_text , setsearch_text] = useState("");
    // const[search_click , setsearch_click] = useState("false");
    const[restaurant , setrestaurant] = useState(res_list);
    // console.log("render");
    useEffect(()=>{
        console.log("hello");
    } , [search_text]);
    return (
        <>
            <div className="search_container">
            < input type = "text" 
              className="search_input" 
              placeholder="search" 
              value={search_text}
              onChange = {(e) => {
               setsearch_text(e.target.value);
              }}           
              />
            <button className="search_btn" onClick={()=>{
              const data = filter_data(search_text , restaurant);
              setrestaurant(data);
            }}>Search</button>
        
           </div>
            <div className="rest_list">
               {
                restaurant.map((res) => {
                    return (
                     <Rest_card {...res}
                    key = {res.id}/>
                    );
                })
               } 

                {/* <Rest_card{...res_list[0]}/>
                <Rest_card{...res_list[1]}/>
                <Rest_card{...res_list[2]}/>
                <Rest_card{...res_list[3]}/>
                <Rest_card{...res_list[4]}/>
                <Rest_card{...res_list[5]}/>
                <Rest_card{...res_list[6]}/>
                <Rest_card{...res_list[7]}/> */}
        
                {/* {Rest_card(res_list[0])}
                {Rest_card(res_list[1])}
                {Rest_card(res_list[2])}
                {Rest_card(res_list[3])}
                {Rest_card(res_list[4])}
                {Rest_card(res_list[5])}
                {Rest_card(res_list[6])}
                {Rest_card(res_list[7])} */}
            </div>
        </>

    );
};

export default Body;