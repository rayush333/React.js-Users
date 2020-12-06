
import Axios from "axios";
import React,{useState,useEffect} from "react";
import {useHistory,useParams} from "react-router-dom";

function EditUser(){
    const [user,updateuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    let history=useHistory();
    const {id} = useParams();
    async function loadUser()
    {
        const res=await Axios.get("http://localhost:5000/users/"+id);
        console.log(res.data);
        updateuser(function(){
            return res.data;
        });
    }
    useEffect(() =>
    {
        loadUser();
    },[]);
  
    function handleChange(event){
        const {name,value} = event.target;
        updateuser((prev) =>
        {
            return {
                ...prev,
                [name]: value
            };
        });
    }
        async function handleSubmit(event){
        event.preventDefault();
        const res=await Axios.patch("http://localhost:5000/users/"+id,user);
        console.log(res);
        history.push("/");
    }
    return (
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name"  onChange={handleChange} value={user.name} />
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="username" onChange={handleChange} value={user.username} />
  </div>
  <div class="form-group">
    <label for="email123">Email</label>
    <input type="email" class="form-control" id="email123" name="email" onChange={handleChange} value={user.email} />
  </div>
  <div class="form-group">
    <label for="k">Phone Number</label>
    <input type="text" class="form-control" id="k" name="phno" onChange={handleChange} value={user.phone} />
  </div>
  <div class="form-group">
    <label for="d">Website</label>
    <input type="text" class="form-control" id="d" name="website" onChange={handleChange} value={user.website} />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
}
export default EditUser;