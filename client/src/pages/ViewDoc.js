import { Link } from "react-router-dom";

const ViewDoc = ({doc}) => {
    //console.log(profile);
    return (
        <div class="Tile">
            <h2>{doc[4]}</h2><br/>
            <h3>Owner : {doc[2]}</h3><br/>
            <p><b>Owner Address :</b> {doc[1]}</p><br/>
            <p><b>Document Address :</b> <Link to="https://ipfs.io/ipfs/QmZ9G5oBCwisCFa7hUW1g6mm6uSmr6UhReXR6d8RdbqYNv?filename=MP_Sample.pdf">Click Here</Link></p><br/>
            <p><b>Condition Keyword :</b> {doc[6]}</p><br/>
            <p><b>Document Description :</b> {doc[5]}</p><br/>
        </div>
        
    )
}

export default ViewDoc;