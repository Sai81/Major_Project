import React, {Component} from 'react';
import { Link } from "react-router-dom";

class ShareDoc extends React.Component {
    //console.log(profile);
    render(){
    return (
        <div>
            ShareDoc {this.props.doc}
            <form>
                <label>Recipent Name : 
                <input 
                type="text" 
                ref={node => (this.recipent = node)}
                />
                </label><br/>
                <Link to = "/">
                <input type="button" value="Share" onClick={()=>this.props.shareDoc(
                    this.recipent.value,
                )}/>
                </Link>
            </form>
        </div>
        
        
    )
}
}

export default ShareDoc;