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


class App extends React.Component {
  DMR = null;
  account="";
  state = {
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
    let [dmr,accounts]=await InitialiseWeb3();
    this.DMR=dmr;
    this.account = accounts[0];
    this.setState({account:this.account});
    let docs = await this.DMR.methods.myDocs().call();
    let profile = await this.DMR.methods.userProfile().call();
    let claims = await this.DMR.methods.myClaims().call();
    let allclaims = await this.DMR.methods.allClaims().call();
    this.setState({user_profile:profile,user_docs: docs,user_claims:claims,all_claims:allclaims});
  }

  viewDocument = async(docId) => {
    const document = await this.DMR.methods.viewDoc(docId).call();
    this.setState({doc_viewing:document,doc_viewing_id:docId});
    console.log(this.state.doc_viewing);

    /*const navigate = useNavigate();
    navigate('/profile',{replace:false});*/
  }

  viewClaim = async(claimId) => {
    const claim = await this.DMR.methods.viewClaim(claimId).call();
    this.setState({claim_viewing:claim});
    //navigate to view claim page
  }

  addDoc = async(docAddress,docName,docDescription) => {
    await this.DMR.methods.addDoc(docAddress,docName,docDescription).send({from: this.state.account});
    let docs = await this.DMR.methods.myDocs().call();
    this.setState({user_docs:docs});
  }

  newClaim = async(claimDesc) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    await this.DMR.methods.raiseClaim(claimDesc,today).send({from: this.state.account});
    let claims = await this.DMR.methods.myClaims().call();
    this.setState({user_claims:claims});
  }

  shareDoc = async(recipent) => {
    await this.DMR.methods.shareDoc(this.state.doc_viewing[2],recipent,this.state.doc_viewing_id).send({from: this.state.account});
  }

  render(){
  return (
    //<div>account right now is {this.state.account}</div>
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={
              <UserDocs docs={this.state.user_docs}
              viewFunction ={this.viewDocument}/>
            }/>
            <Route exact path='/profile' element={
              <UserProfile profile={this.state.user_profile}
              doc={this.state.doc_viewing}/>
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
              <ViewClaimAgent claim={this.state.claim_viewing}/>
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

export default App;
