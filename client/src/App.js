import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import InitialiseWeb3 from './components/Web3';

import UserDocs from './pages/UserDocs';
import UserProfile from './pages/UserProfile';
import UserClaims from './pages/UserClaims';
import ViewClaim from './pages/ViewClaim';
import NewClaim from './pages/NewClaim';
import ShareDoc from './pages/ShareDoc';
import NewDoc from './pages/NewDoc';
import AllClaims from './pages/AllClaims';
import ViewClaimAgent from './pages/ViewClaimAgent';
import ViewDoc from './pages/ViewDoc';
import Login from './pages/Login';
import AgentNavbar from './components/AgentNavbar';
import DocNavbar from './components/DocNavbar';
import Upload from './pages/Upload';

class App extends React.Component {
  DMR = null;
  account="";
  state = {
    status: '',
    account: '',
    user_profile: {},
    user_docs: [],
    user_claims: [],
    doc_viewing: [],
    doc_viewing_id: 0,
    claim_viewing: [],
    all_claims: []
  }

  async componentWillMount() {
    /*let [dmr,accounts]=await InitialiseWeb3();
    this.DMR=dmr;
    this.account = accounts[0];
    this.setState({account:this.account});*/
    this.setState({status:'offline'});
    /*let docs = await this.DMR.methods.myDocs().call();
    let profile = await this.DMR.methods.userProfile().call();
    let claims = await this.DMR.methods.myClaims().call();
    let allclaims = await this.DMR.methods.allClaims().call();
    this.setState({user_profile:profile,user_docs: docs,user_claims:claims,all_claims:allclaims});
  */}

  logout = () => {
    this.setState({status:'offline'});
    this.setState({user_profile:{},user_docs: [],user_claims:[],all_claims:[]});
  }

  login = async() =>{
    let [dmr,accounts]=await InitialiseWeb3();
    this.DMR=dmr;
    this.account = accounts[0];
    this.setState({account:this.account});
    //account is ACTUALLY CHANGING
    let docs = [];
    let profile = {};
    let claims = [];
    let allclaims = [];
    docs = await this.DMR.methods.myDocs().call({from: this.state.account});
    profile = await this.DMR.methods.userProfile().call({from: this.state.account});
    claims = await this.DMR.methods.myClaims().call({from: this.state.account});
    allclaims = await this.DMR.methods.allClaims().call({from: this.state.account});
    this.setState({user_docs: docs});
    this.setState({user_profile:profile});
    this.setState({user_claims:claims});
    this.setState({all_claims:allclaims});
    this.setState({status:'online'});

  }

  refresh = async() =>{
    let docs = [];
    let profile = {};
    let claims = [];
    docs = await this.DMR.methods.myDocs().call({from: this.state.account});
    profile = await this.DMR.methods.userProfile().call({from: this.state.account});
    claims = await this.DMR.methods.myClaims().call({from: this.state.account});
    this.setState({user_profile:profile,user_docs: docs,user_claims:claims});
  }

  viewDocument = async(docId) => {
    const document = await this.DMR.methods.viewDoc(docId).call({from: this.state.account});
    this.setState({doc_viewing:document,doc_viewing_id:docId});
    console.log(this.state.doc_viewing);

    /*const navigate = useNavigate();
    navigate('/profile',{replace:false});*/
  }

  viewClaim = async(claimId) => {
    const claim = await this.DMR.methods.viewClaim(claimId).call({from: this.state.account});
    this.setState({claim_viewing:claim});
    //navigate to view claim page
  }

  addDoc = async(docAddress,docName,docDescription,conditionKeyword) => {
    await this.DMR.methods.addDoc(docAddress,docName,docDescription,conditionKeyword).send({from: this.state.account});
    let docs = await this.DMR.methods.myDocs().call({from: this.state.account});
    this.setState({user_docs:docs});
  }

  approveClaim = async(claimNo) => {
    console.log("approve called");
    await this.DMR.methods.approveClaim(claimNo).send({from: this.state.account});
  }

  rejectClaim = async(claimNo) => {
    console.log("reject called");
    await this.DMR.methods.rejectClaim(claimNo).send({from: this.state.account});
  }

  newClaim = async(claimDesc,
    attendingPhysician,
    claimDiagnosisCode,
    ClaimProcedureCode,
    admissionDate,
    dischargeDate) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    let fraudStatus = "No";
    let risk  = "5";
    let premium = "56000";
    await this.DMR.methods.raiseClaim(claimDesc,today,attendingPhysician,fraudStatus,
      risk,
      premium,
      claimDiagnosisCode,
      ClaimProcedureCode,
      admissionDate,
      dischargeDate).send({from: this.state.account});
    let claims = await this.DMR.methods.myClaims().call({from: this.state.account});
    this.setState({user_claims:claims});
  }

  shareDoc = async(recipent) => {
    await this.DMR.methods.shareDoc(this.state.doc_viewing[2],recipent,this.state.doc_viewing_id).send({from: this.state.account});
  }

  render(){
    console.log(this.state.status);
    console.log(this.state.account);
    console.log(this.state.user_profile[5]);
    if(this.state.status === 'online'){
      if(this.state.user_profile[5] === "Patient"){
        return (
          //<div>account right now is {this.state.account}</div>
          <Router>
            <div className="App">
              <Navbar />
              <div className="content">
                <Routes>
                  <Route exact path='/' element={
                    <UserDocs docs={this.state.user_docs}
                    viewFunction ={this.viewDocument}
                    refresh={this.refresh}/>
                  }/>
                  <Route exact path='/profile' element={
                    <UserProfile profile={this.state.user_profile}
                    logout={this.logout}/>
                  }/>
                  <Route exact path='/user_claims' element={
                    <UserClaims claims={this.state.user_claims}
                    viewClaim={this.viewClaim}/>
                  }/>
      
                  <Route exact path='/new_claim' element={
                    <NewClaim newClaim={this.newClaim}/>
                  }/>
      
                  <Route exact path='/view_claim' element={
                    <ViewClaim claim={this.state.claim_viewing}/>
                  }/>
                  <Route exact path='/share_doc' element={
                    <ShareDoc doc={this.state.doc_viewing}
                    shareDoc={this.shareDoc}/>
                  }/>
                  <Route exact path='/new_doc' element={
                    <NewDoc addDoc={this.addDoc}/>
                  }/>
                  <Route exact path='/all_claims' element={
                    <AllClaims claims={this.state.all_claims}
                    viewClaimForAgent={this.viewClaim}/>
                  }/>
                  <Route exact path='/view_claim_agent' element={
                    <ViewClaimAgent claim={this.state.claim_viewing}
                    rejectClaim = {this.rejectClaim}
                    approveClaim = {this.approveClaim}/>
                  }/>
                  <Route exact path='/view_doc' element={
                    <ViewDoc doc={this.state.doc_viewing}/>
                  }/>
                  <Route exact path='/upload' element={
                    <Upload/>
                  }/>
                </Routes>
              </div>
            </div>
          </Router>
        );
      }
      else if(this.state.user_profile[5] === "Doctor"){
        return (
          //<div>account right now is {this.state.account}</div>
          <Router>
            <div className="App">
              <DocNavbar />
              <div className="content">
                <Routes>
                  <Route exact path='/' element={
                    <UserDocs docs={this.state.user_docs}
                    viewFunction ={this.viewDocument}
                    refresh={this.refresh}/>
                  }/>
                  <Route exact path='/profile' element={
                    <UserProfile profile={this.state.user_profile}
                    logout={this.logout}/>
                  }/>
                  <Route exact path='/user_claims' element={
                    <UserClaims claims={this.state.user_claims}
                    viewClaim={this.viewClaim}/>
                  }/>
      
                  <Route exact path='/new_claim' element={
                    <NewClaim newClaim={this.newClaim}/>
                  }/>
      
                  <Route exact path='/view_claim' element={
                    <ViewClaim claim={this.state.claim_viewing}/>
                  }/>
                  <Route exact path='/share_doc' element={
                    <ShareDoc doc={this.state.doc_viewing}
                    shareDoc={this.shareDoc}/>
                  }/>
                  <Route exact path='/new_doc' element={
                    <NewDoc addDoc={this.addDoc}/>
                  }/>
                  <Route exact path='/all_claims' element={
                    <AllClaims claims={this.state.all_claims}
                    viewClaimForAgent={this.viewClaim}/>
                  }/>
                  <Route exact path='/view_claim_agent' element={
                    <ViewClaimAgent claim={this.state.claim_viewing}
                    rejectClaim = {this.rejectClaim}
                    approveClaim = {this.approveClaim}/>
                  }/>
                  <Route exact path='/view_doc' element={
                    <ViewDoc doc={this.state.doc_viewing}/>
                  }/>
                  <Route exact path='/upload' element={
                    <Upload/>
                  }/>
                </Routes>
              </div>
            </div>
          </Router>
        );

      }
      else if(this.state.user_profile[5] === "Insurance"){
        return (
          //<div>account right now is {this.state.account}</div>
          <Router>
            <div className="App">
              <AgentNavbar />
              <div className="content">
                <Routes>
                  <Route exact path='/upload' element={
                    <Upload/>
                  }/>
                  <Route exact path='/' element={
                    <AllClaims claims={this.state.all_claims}
                    viewClaimForAgent={this.viewClaim}/>
                  }/>
                  <Route exact path='/profile' element={
                    <UserProfile profile={this.state.user_profile}
                    logout={this.logout}/>
                  }/>
                  <Route exact path='/user_claims' element={
                    <UserClaims claims={this.state.user_claims}
                    viewClaim={this.viewClaim}/>
                  }/>
      
                  <Route exact path='/new_claim' element={
                    <NewClaim newClaim={this.newClaim}/>
                  }/>
      
                  <Route exact path='/view_claim' element={
                    <ViewClaim claim={this.state.claim_viewing}/>
                  }/>
                  <Route exact path='/share_doc' element={
                    <ShareDoc doc={this.state.doc_viewing}
                    shareDoc={this.shareDoc}/>
                  }/>
                  <Route exact path='/new_doc' element={
                    <NewDoc addDoc={this.addDoc}/>
                  }/>
                  <Route exact path='/all_claims' element={
                    <AllClaims claims={this.state.all_claims}
                    viewClaimForAgent={this.viewClaim}/>
                  }/>
                  <Route exact path='/view_claim_agent' element={
                    <ViewClaimAgent claim={this.state.claim_viewing}
                    rejectClaim = {this.rejectClaim}
                    approveClaim = {this.approveClaim}/>
                  }/>
                  <Route exact path='/view_doc' element={
                    <ViewDoc doc={this.state.doc_viewing}/>
                  }/>
                </Routes>
              </div>
            </div>
          </Router>
        );

      }
  
          }
          else if(this.state.status === 'offline'){
            return(
              <Router>
              <div className="App">
                <div className="content">
                  <Routes>
                    <Route exact path='/' element={
                    <Login 
                    login ={this.login}/>
                    }/>
                    <Route exact path='/upload' element={
                    <Upload/>
                    }/>
                  </Routes>
                </div>
                </div>
              </Router>
            );

          }
}
}

export default App;
