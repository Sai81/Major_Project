import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NewClaim extends React.Component {

    render(){
        return(
        <div>
            <form>
                <label>Claim Description : 
                <input 
                type="text" 
                ref={node => (this.claimDescription = node)}
                />
                </label><br/>
                <Link to = "/user_claims">
                <input type="button" value="Upload" onClick={()=>this.props.newClaim(
                    this.claimDescription.value
                )}/>
                </Link>
            </form>
        </div>
        );
    }
}




export default NewClaim;