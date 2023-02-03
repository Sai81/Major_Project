// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

/*struct claimDetails{
    string detail;
}*/

struct insuranceClaim{
    address claiment;
    string claimentName;
    string claimDesc;
    string dateRaised;
    //claimDetails details;
    string fraudStatus;
    string risk;
    string premium;
    string response;//pending/approved/rejected
}

struct claimTitle{
    string claimDesc;
    string claimentName;
    string dateRaised;
    uint256 claimId;
}


contract InsuranceManager{
    insuranceClaim[] internal claims;
    uint256 internal noOfClaims;//must initialise
    //address insuranceCompany Account;..from this u pay to the user

    function compare(string memory str1, string memory str2) internal pure returns (bool) {
        if (bytes(str1).length != bytes(str2).length) {
            return false;
        }
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }

    function newClaim(address _claiment, string memory _claimentName,string memory _claimDesc,string memory _dateRaised) internal returns(uint256) {
        claims.push(
            insuranceClaim(
                _claiment,
                _claimentName,
                _claimDesc,
                _dateRaised,
                "not decided",//randomise
                "not decided",//randomise
                "not decided",//randomise
                "pending"
            )
        );
        uint256 result = noOfClaims;
        noOfClaims++;
        return result;
    }

    function viewClaim(uint256 _claimNo) public view returns(insuranceClaim memory){
        require(_claimNo<=noOfClaims);
        return(claims[_claimNo]);
    }

    function claimResponse(uint256 _claimNo,string memory _response) public{
        //TODO : pay if response is approved
        claims[_claimNo].response = _response;
    }

    function allClaims() public view returns(insuranceClaim[] memory){
        return claims;
    }

}

//FROM HERE...documents part

struct document{
    address owner;
    string ownerName;
    string docAddress;
    string docName;
    string docDescription;
}

struct docTitle{
    address owner;
    string ownerName;
    string docName;
    uint256 docId;
}

contract documentDatabase{
    document[] internal docs;
    uint256 internal noOfDocs;//must intialise

    function newDoc(
        address owner,
        string memory ownerName,
        string memory docAddress,
        string memory docName,
        string memory docDescription
    ) internal returns(uint256){
        docs.push(
            document(
                owner,
                ownerName,
                docAddress,
                docName,
                docDescription
            )
        );
        uint256 result = noOfDocs;
        noOfDocs++;
        return result;
    }

    function viewDoc(uint256 _docNo) public view returns(document memory){
        require(_docNo<=noOfDocs);
        return(docs[_docNo]);
    }
}

//FROM HERE : user part

struct user{
    address userAddress;
    string userName;
    uint256 age;
    string gender;
    string bmi;
    string profession;
    string userType;//PATIENT/DOC/AGENT
    bool exists;//THE EXISTS one
}

contract UserRegistry{
    mapping(address=>user) users;
    mapping(string=>address) nameToAddress;

    function userExists() public view returns(bool) {
        return(users[msg.sender].exists == true);
    }

    function newUser(
        address userAddress,
        string memory userName,
        uint256 age,
        string memory gender,
        string memory bmi,
        string memory profession,
        string memory userType
    ) internal {

        users[userAddress] = user(
            userAddress,
            userName,
            age,
            gender,
            bmi,
            profession,
            userType,
            true
        );

        nameToAddress[userName] = userAddress;
    }

    function userProfile() public view returns(user memory){
        return users[msg.sender];
    }
}

contract RecordManagementSystem is InsuranceManager, documentDatabase, UserRegistry{

    mapping(address=>docTitle[]) internal userDocs;
    mapping(address=>claimTitle[]) internal userClaims;
    
    document[] internal resultDocs;
    insuranceClaim[] internal resultClaims;

    constructor(){
        newUser(0xB3727Ca43f0f19366d9773bb09e2270ABFe022ea,"Sai",21,"Male","","","Patient");
        newUser(0x4A1D3a2b866EFfd8f1dBCA048B4b162E5f7aFb1d,"Leela",21,"Female","","","Doctor");        
        newUser(0xaBf3a1072dDC44621a187BD2C10c5F19320ab6c6,"Sreegeethi",21,"Female","","","Insurance");
        
        addDoc("abc","Malaria Report","abc");
        addDoc("efg","Covid Report","efg");
    }

    function addDoc(
        string memory docAddress,
        string memory docName,
        string memory docDescription
        ) public {
            uint256 newDocNum = newDoc(
                msg.sender,
                users[msg.sender].userName,
                docAddress,
                docName,
                docDescription
            );

            userDocs[msg.sender].push(
                docTitle(
                    msg.sender,
                    users[msg.sender].userName,
                    docName,
                    newDocNum
                )
            );
        }
    
    function shareDoc(string memory recipent,uint256 docId) public {
        userDocs[nameToAddress[recipent]].push(
            docTitle(
                    msg.sender,
                    docs[docId].docName,
                    docId
                )
        );
    }

    function myDocs() public view returns(docTitle[] memory){
        return userDocs[msg.sender];
    }

    function raiseClaim(string memory _claimDesc, string memory _dateRaised) public {
        uint256 newClaimId = newClaim(
            msg.sender,
            users[msg.sender].userName,
            _claimDesc,
            _dateRaised
        );

        userClaims[msg.sender].push(
            claimTitle(
                users[msg.sender].userName,
                _claimDesc,
                _dateRaised,
                newClaimId
            )
        );
    }

    function myClaims() public view returns(claimTitle[] memory){
        return userClaims[msg.sender];
    }
}


// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

/*struct claimDetails{
    string detail;
}*/

struct insuranceClaim{
    address claiment;
    string claimentName;
    string claimDesc;
    string dateRaised;
    //claimDetails details;
    string fraudStatus;
    string risk;
    string premium;
    string response;//pending/approved/rejected
}

struct claimTitle{
    string claimDesc;
    string claimentName;
    string dateRaised;
    uint256 claimId;
}


contract InsuranceManager{
    insuranceClaim[] internal claims;
    uint256 internal noOfClaims;//must initialise
    //address insuranceCompany Account;..from this u pay to the user

    function compare(string memory str1, string memory str2) internal pure returns (bool) {
        if (bytes(str1).length != bytes(str2).length) {
            return false;
        }
        return keccak256(abi.encodePacked(str1)) == keccak256(abi.encodePacked(str2));
    }

    function newClaim(address _claiment, string memory _claimentName,string memory _claimDesc,string memory _dateRaised) internal returns(uint256) {
        claims.push(
            insuranceClaim(
                _claiment,
                _claimentName,
                _claimDesc,
                _dateRaised,
                "not decided",//randomise
                "not decided",//randomise
                "not decided",//randomise
                "pending"
            )
        );
        uint256 result = noOfClaims;
        noOfClaims++;
        return result;
    }

    function viewClaim(uint256 _claimNo) public view returns(insuranceClaim memory){
        require(_claimNo<=noOfClaims);
        return(claims[_claimNo]);
    }

    function claimResponse(uint256 _claimNo,string memory _response) public{
        //TODO : pay if response is approved
        claims[_claimNo].response = _response;
    }

    function allClaims() public view returns(insuranceClaim[] memory){
        return claims;
    }

}

//FROM HERE...documents part

struct document{
    address owner;
    string ownerName;
    string docAddress;
    string docName;
    string docDescription;
}

struct docTitle{
    address owner;
    string ownerName;
    string docName;
    uint256 docId;
}

contract documentDatabase{
    document[] internal docs;
    uint256 internal noOfDocs;//must intialise

    function newDoc(
        address owner,
        string memory ownerName,
        string memory docAddress,
        string memory docName,
        string memory docDescription
    ) internal returns(uint256){
        docs.push(
            document(
                owner,
                ownerName,
                docAddress,
                docName,
                docDescription
            )
        );
        uint256 result = noOfDocs;
        noOfDocs++;
        return result;
    }

    function viewDoc(uint256 _docNo) public view returns(document memory){
        require(_docNo<=noOfDocs);
        return(docs[_docNo]);
    }
}

//FROM HERE : user part

struct user{
    address userAddress;
    string userName;
    uint256 age;
    string gender;
    string bmi;
    string profession;
    string userType;//PATIENT/DOC/AGENT
    bool exists;//THE EXISTS one
}

contract UserRegistry{
    mapping(address=>user) users;
    mapping(string=>address) nameToAddress;

    function userExists() public view returns(bool) {
        return(users[msg.sender].exists == true);
    }

    function newUser(
        address userAddress,
        string memory userName,
        uint256 age,
        string memory gender,
        string memory bmi,
        string memory profession,
        string memory userType
    ) internal {

        users[userAddress] = user(
            userAddress,
            userName,
            age,
            gender,
            bmi,
            profession,
            userType,
            true
        );

        nameToAddress[userName] = userAddress;
    }

    function userProfile() public view returns(user memory){
        return users[msg.sender];
    }
}

contract RecordManagementSystem is InsuranceManager, documentDatabase, UserRegistry{

    mapping(address=>docTitle[]) internal userDocs;
    mapping(address=>claimTitle[]) internal userClaims;
    
    document[] internal resultDocs;
    insuranceClaim[] internal resultClaims;

    constructor(){
        newUser(0xB3727Ca43f0f19366d9773bb09e2270ABFe022ea,"Sai",21,"Male","","","Patient");
        newUser(0x4A1D3a2b866EFfd8f1dBCA048B4b162E5f7aFb1d,"Leela",21,"Female","","","Doctor");        
        newUser(0xaBf3a1072dDC44621a187BD2C10c5F19320ab6c6,"Sreegeethi",21,"Female","","","Insurance");
        
        addDoc("abc","Malaria Report","abc");
        addDoc("efg","Covid Report","efg");
    }

    function addDoc(
        string memory docAddress,
        string memory docName,
        string memory docDescription
        ) public {
            uint256 newDocNum = newDoc(
                msg.sender,
                users[msg.sender].userName,
                docAddress,
                docName,
                docDescription
            );

            userDocs[msg.sender].push(
                docTitle(
                    msg.sender,
                    users[msg.sender].userName,
                    docName,
                    newDocNum
                )
            );
        }
    
    function shareDoc(string memory docName,string memory recipent,uint256 docId) public {
        userDocs[nameToAddress[recipent]].push(
            docTitle(
                    msg.sender,
                    docs[docId].docName,
                    docName,
                    docId
                )
        );
    }

    function myDocs() public view returns(docTitle[] memory){
        return userDocs[msg.sender];
    }

    function raiseClaim(string memory _claimDesc, string memory _dateRaised) public {
        uint256 newClaimId = newClaim(
            msg.sender,
            users[msg.sender].userName,
            _claimDesc,
            _dateRaised
        );

        userClaims[msg.sender].push(
            claimTitle(
                users[msg.sender].userName,
                _claimDesc,
                _dateRaised,
                newClaimId
            )
        );
    }

    function myClaims() public view returns(claimTitle[] memory){
        return userClaims[msg.sender];
    }
}
