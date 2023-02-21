
const Login = props => {
    //console.log(profile);
    return (
        <div class="Tile" style={{textAlign:"center"}}>
            <h4>Welcome to</h4><br/>
            <h1 style={{ 
          color: 'Black', 
        }}>MedBlocks</h1>
            <p>Click below button to login<br/><br/><br/></p>
            <p style={{ 
          color: 'Red', 
        }}>NOTE : Make sure you are connected to Ethereum Network and have Metamask extension enabled in your browser</p>
            <br/><input style={{ 
          backgroundColor: 'Blue',
          color: 'white', 
        }}value="Login" type="button" onClick={()=>props.login()}/>
            <p>Don't have an account?   <a href="/">Sign Up</a></p>
        </div>
        
    )
}

export default Login;