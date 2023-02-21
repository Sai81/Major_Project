import React from "react";
import { Link } from "react-router-dom";
import DocsSearchBar from "../components/DocsSearchBar"

const UserDocs = props => {
    /*const docList = docs.foreach(element => {
        return(
            <docListItem doc={element}/>
            <button class="refresh_button" value="Refresh" OnClick={()=>props.refresh()}>Refresh</button>
        );
    });*/
    return (
        <div>
            
            <div class="doc_search_bar">
                <input type="text" placeholder="Search.."/>
                <Link to='/upload'>
                <button class="new_doc_button"> New Document </button>
                </Link>
            </div>
            
           {props.docs.map(doc=>(
            <div class="item">
               <p>
                   <big class="ListItemTitle">{doc[2]}</big>
                   <Link to="/view_doc"><button class="btn" onClick={()=>props.viewFunction(Number(doc[3]))}>View</button></Link>
                </p>
                <p>Owner : {doc[1]}
                <Link to='/share_doc'>
                <button class="shr" onClick={()=>props.viewFunction(Number(doc[3]))}>Share</button>
                </Link></p>
           </div>
           ))} 
        </div>
    );
}

export default UserDocs;

