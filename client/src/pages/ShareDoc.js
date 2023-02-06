import React, {Component} from 'react';
import { Link } from "react-router-dom";

class ShareDoc extends React.Component {
    //console.log(profile);
    render(){
    return (
        <div class="Tile">
            <h2>{this.props.doc[4]}</h2><br/>
            <h3>Owner : {this.props.doc[2]}</h3><br/>
            <p><b>Owner Address :</b> {this.props.doc[1]}</p><br/>
            <p><b>Document Address :</b> <Link to="https://ipfs.io/ipfs/QmZ9G5oBCwisCFa7hUW1g6mm6uSmr6UhReXR6d8RdbqYNv?filename=MP_Sample.pdf">Click Here</Link></p><br/>
            <p><b>Condition Keyword :</b> {this.props.doc[6]}</p><br/>
            <p><b>Document Description :</b> {this.props.doc[5]}</p><br/>
            <form>  
                <input 
                type="text" 
                placeholder="Recipent Name"
                ref={node => (this.recipent = node)}
                /><br/>
                <Link to = "/">
                <input style={{color:"white",backgroundColor:"Green"}}type="button" value="Share" onClick={()=>this.props.shareDoc(
                    this.recipent.value,
                )}/>
                </Link>
            </form>
        </div>
        
        
    )
}
}

export default ShareDoc;