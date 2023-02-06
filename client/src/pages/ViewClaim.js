const ViewClaim = ({claim}) => {
    //console.log(profile);
    return (
        <div class="Tile">
            <h2>{claim[3]}</h2><br/>
            <h3>Claiment Name : {claim[2]}</h3><br/>
            <p><b>Claiment Address :</b> {claim[1]}</p><br/>
            <p><b>Claim Id :</b> {claim[0]}</p><br/>
            <p><b>Date Raised :</b> {claim[4]}</p><br/>
            <p><b>Attending Physician :</b> {claim[9]}</p><br/>
            <p><b>Claim Diagnosis Code :</b> {claim[10]}</p><br/>
            <p><b>Claim Procedure Code :</b> {claim[11]}</p><br/>
            <p><b>Admission Date :</b> {claim[12]}</p><br/>
            <p><b>Discharge Date :</b> {claim[13]}</p><br/>
            <h3>Response : {claim[8]}</h3>
        </div>
        
    )
}

export default ViewClaim;