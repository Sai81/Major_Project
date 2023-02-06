import React, {Component} from 'react';
import { Link } from "react-router-dom";

class NewClaim extends React.Component {

    render(){
        return(
        <div class="form">
            <h2>Raise Insurance Claim</h2><br/>
            <form>
                <input 
                type="text" 
                placeholder = "claimDescription"
                ref={node => (this.claimDescription = node)}
                /><br/><br/>
                <input 
                type="text" 
                placeholder = "attendingPhysician"
                ref={node => (this.attendingPhysician = node)}
                /><br/><br/>

                <label> Admission Date :
                <input 
                type="date" 
                placeholder = "admissionDate"
                ref={node => (this.admissionDate = node)}
                /></label><br/><br/>
                
                <label> Discharge Date :
                <input 
                type="date" 
                placeholder = "dischargeDate"
                ref={node => (this.dischargeDate = node)}
                /></label><br/><br/>


                <input 
                type="text" 
                placeholder = "claimDiagnosisCode"
                ref={node => (this.claimDiagnosisCode = node)}
                /><br/><br/>
                <input 
                type="text" 
                placeholder = "ClaimProcedureCode"
                ref={node => (this.ClaimProcedureCode = node)}
                /><br/><br/>
                <Link to = "/user_claims">
                <input style={{backgroundColor:'green',color:'white`'}}type="button" value="Submit" onClick={()=>this.props.newClaim(
                    this.claimDescription.value,
                    this.attendingPhysician.value,
                    this.claimDiagnosisCode.value,
                    this.ClaimProcedureCode.value,
                    this.admissionDate.value,
                    this.dischargeDate.value
                )}/>
                </Link>
            </form>
        </div>
        );
    }
}




export default NewClaim;