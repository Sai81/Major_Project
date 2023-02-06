import { Link } from "react-router-dom";

const ViewClaimAgent = props => {
    //console.log(profile);
    return (
        <div>
            <div class="Tile">
            <h2>{props.claim[3]}</h2><br/>
            <h3>Claiment Name : {props.claim[2]}</h3><br/>
            <p><b>Claiment Address :</b> {props.claim[1]}</p><br/>
            <p><b>Claim Id :</b> {props.claim[0]}</p><br/>
            <p><b>Date Raised :</b> {props.claim[4]}</p><br/>
            <p><b>Attending Physician :</b> {props.claim[9]}</p><br/>
            <p><b>Claim Diagnosis Code :</b> {props.claim[10]}</p><br/>
            <p><b>Claim Procedure Code :</b> {props.claim[11]}</p><br/>
            <p><b>Admission Date :</b> {props.claim[12]}</p><br/>
            <p><b>Discharge Date :</b> {props.claim[13]}</p><br/>
            <h3>Response : {props.claim[8]}</h3>
            </div>
            <div class="profile">
                <h2>Report</h2><br/>
                <p>Suspected Fraud : {props.claim[5]}</p>
                <p>Risk (out of 8) : {props.claim[6]}</p>
                <p>Premium : {props.claim[7]}</p>
            </div>
            <div class="actions_bar">
                <Link to='/'>
                    <button class="approveClaim" value="Approve" onClick={()=>props.approveClaim(props.claim[0])}>Approve</button>
                </Link>
                <Link to='/'>
                    <button class="rejectClaim" value="Reject" onClick={()=>props.rejectClaim(props.claim[0])}>Reject</button>
                </Link>
            </div>
        </div>
        
    )
}

export default ViewClaimAgent;