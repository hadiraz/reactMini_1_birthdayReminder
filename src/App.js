import React, { useState } from "react";
import "./assets/app.css"
import Data from "./assets/data" ;
import List from "./List"
function ShowContent(){
    const [peopleData , setPeople] = useState(Data) ;
    const clearAllItems = () => {
        setPeople([])
    }
    return(
        <main>
           <section className="main-box">
               <div className="top-side">
               <h2>{peopleData.length} birthdays today</h2>
               </div>
               <List people={peopleData} />
               {
               peopleData.length>0 ? <button class="button" onClick={clearAllItems}>Clear All</button> : ""
               }
           </section> 
        </main>
    )
}

export default ShowContent ;