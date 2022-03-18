import React from "react";
import BackEnd from './BackEnd.png';
import FrontEnd from './FrontEnd.png';
import { Button } from 'react-bootstrap';


function Profile(p) {
    function handleName ()
    {
        return alert(` Welcome  ${p.fullName}`);
    }
    
    const name =p.fullName;
    const bio = p.bio;
    const prof =p.profession;
    const imgp= (prof==="Front End Developer") ? FrontEnd : BackEnd  ;


    
    return (
        <div style={{ textAlign:"center", width:"400px", height:"600px", backgroundColor:"#955251", margin:"50px 50px", borderRadius:"20% 0 20% 0"}}>
            
            <img src={imgp} style={{width : "200px" , height:"250px" , textAlign:"center" , marginTop:"30px"}} alt="profile" />
            
            <h1 style={{color:"white", fontSize:"28pt" , marginTop :"20px"}}>{name}</h1>
            <h2  style={{color:"#000080"}}>{prof}</h2>
            <p style={{padding :"10px" , textAlign:"justify" , backgroundColor: "white"}}>{bio}</p>
            <Button variant="info" onClick={handleName}>Click ME</Button>

        </div>
    ) ;

    
}

export default Profile;
