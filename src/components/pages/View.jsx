
import React,{useState,useEffect} from "react";
import {useParams,Link} from "react-router-dom";
import axios from "axios";
function View(){
    const {id} = useParams();
    const [user,updateuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    useEffect(function(){
        loadUser();
    },[]);
    async function loadUser()
    {
        const res=await axios.get("http://localhost:5000/users/"+id);
        updateuser(res.data);
    }
    return (<div><Link exact to="/" ><button className="btn btn-lg btn-primary abc" style={{margin: "10px",marginLeft: "0"}}>BACK TO HOME</button></Link>
    <table className="table table-hover table-striped">
    <tbody>
      <tr>
        <th scope="row">Id</th>
        <td>{user.id}</td>
        </tr>
        <tr>
        <th scope="row">Name</th>
        <td>{user.name}</td>
        </tr>
        <tr>
        <th scope="row">Username</th>
        <td>{user.username}</td>
        </tr>
        <tr>
        <th scope="row">Email</th>
        <td>{user.email}</td>
        </tr>
        <tr>
        <th scope="row">Phone Number</th>
        <td>{user.phone}</td>
        </tr>
        <tr>
        <th scope="row">Website</th>
        <td>{user.website}</td>
        </tr>

    </tbody>
  </table></div>);    
}
export default View;