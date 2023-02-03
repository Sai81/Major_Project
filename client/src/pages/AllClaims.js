import { Link } from "react-router-dom";


const AllClaims = props => {
    //console.log(profile);
        return (
            <div>
               {props.claims.map(claim=>(
                <div class="item">
                   <p>
                       <big class="ListItemTitle">{claim[1]}</big>
                       <Link to='/view_claim_agent'>
                           <button class="btn" onClick={()=>props.viewClaimForAgent(Number(claim[3]))}>View</button>
                       </Link>
                    </p>
                       <p>Date : {claim[2]}</p>
               </div>
               ))} 
            </div>
        );
        
    
}

export default AllClaims;