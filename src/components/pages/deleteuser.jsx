import Axios from "axios";
import React,{useEffect} from "react";
import {useParams,useHistory} from "react-router-dom";
function DeleteUser(){
    let history=useHistory();
    const {id} = useParams();
    useEffect(()=>
    {
        deleteUser();
    },[]);
    async function deleteUser(){
       const res=await Axios.delete("http://localhost:5000/users/"+id);
       console.log(res);
        history.push("/");
    }
    return <h1>Item Deleted</h1>;
}
export default DeleteUser;