import { Link } from "react-router-dom";
const UserProfile = props => {
    //console.log(profile);
    return (
        <div class="Tile">
                <h2>User Type : {props.profile[5]}</h2><br/>
                <h3>User Name : {props.profile[1]}</h3><br/>
                <p><b>User Address :</b> {props.profile[0]}</p><br/>
                <p><b>Age :</b> {props.profile[2]}</p><br/>
                <p><b>Gender :</b> {props.profile[3]}</p><br/>
                <p><b>BMI :</b> {props.profile[4]}</p><br/>
                <p><b>Height :</b> {props.profile[12]}</p><br/>
                <p><b>Weight :</b> {props.profile[13]}</p><br/>
                <p><b>Date of birth :</b> {props.profile[7]}</p><br/>
                <p><b>Employment Status :</b> {props.profile[8]}</p><br/>
                <p><b>Employment Duration :</b> {props.profile[9]}</p><br/>
                <p><b>Marital Status :</b> {props.profile[10]}</p><br/>
                <p><b>Number of dependents :</b> {props.profile[11]}</p>
                <br/>
                <Link to="/">
            <input style={{
                backgroundColor:'Red',
                color:"white"
            }}type="button" onClick={()=>props.logout()} value="Logout"/>
            </Link>
        </div>
        
    )
}

export default UserProfile;
