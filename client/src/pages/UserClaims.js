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
           {props.claims.map(claim=>(
            <div class="item">
               <p>
                   <big class="ListItemTitle">{claim[1]}</big>
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