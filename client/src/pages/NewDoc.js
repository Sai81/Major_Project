import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NewDoc extends React.Component {

    render(){
        return(
        <div>
            <form>
                <label>Document Address : 
                <input 
                type="text" 
                ref={node => (this.docAddress = node)}
                />
                </label><br/>

                <label>Document Name : 
                <input 
                type="text" 
                ref={node => (this.docName = node)}
                />
                </label><br/>

                <label>Document Description : 
                <input 
                type="text" 
                ref={node => (this.docDescription = node)}
                />
                </label><br/>
                <Link to = "/">
                <input type="button" value="Upload" onClick={()=>this.props.addDoc(
                    this.docAddress.value,
                    this.docName.value,
                    this.docDescription.value
                )}/>
                </Link>
            </form>
        </div>
        );
    }
}




export default NewDoc;