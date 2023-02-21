import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NewDoc extends React.Component {

    render(){
        return(
        <div class="form">
            <form>
                <input 
                type="text" 
                placeholder="Document Name"
                ref={node => (this.docName = node)}
                /><br/><br/>
 
                <input 
                type="text" 
                placeholder="Document Description"
                ref={node => (this.docDescription = node)}
                /><br/><br/>
                <input 
                type="text" 
                placeholder="Condition Keyword"
                ref={node => (this.conditionKeyword = node)}
                /><br/><br/>
                <input 
                type="text" 
                placeholder = "Document Address"
                ref={node => (this.docAddress = node)}
                /><br/><br/>
                <Link to = "/">
                <input type="button" value="Upload" onClick={()=>this.props.addDoc(
                    this.docAddress.value,
                    this.docName.value,
                    this.docDescription.value,
                    this.conditionKeyword.value
                )}/>
                </Link>
            </form>
        </div>
        );
    }
}




export default NewDoc;