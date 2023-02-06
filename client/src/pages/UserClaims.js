import React from "react";
import { Link } from "react-router-dom";

const UserClaims = props => {
    /*const docList = docs.foreach(element => {
        return(
            <docListItem doc={element}/>
        );
    });*/
    return (
        <div>
            <div class="doc_search_bar">
                <input type="text" placeholder="Search.."/>
                <Link to='/new_claim'>
                <button class="new_doc_button"> New Claim </button>
                </Link>
            </div>
           {props.claims.map(claim=>(
            <div class="item">
               <p>
                   <big class="ListItemTitle">{claim[0]}</big>
                   <Link to='/view_claim'>
                       <button class="btn" onClick={()=>props.viewClaim(Number(claim[3]))}>View</button>
                   </Link>
                </p>
                   <p>Date : {claim[2]}</p>
           </div>
           ))} 
        </div>
    );
}

export default UserClaims;