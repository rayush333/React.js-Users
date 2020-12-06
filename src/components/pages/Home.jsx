import React,{useState,useEffect} from 'react';
import axios from "axios";
import List from "../layout/List";
function Home(){
    const [users, updateusers] = useState([]);
    useEffect(()=>{
        loadUsers();
    },[]);
    const loadUsers = async () => {
        const res=await axios.get("http://localhost:5000/users");
        updateusers(res.data);
    };

    return <div className="container-fluid"> 
    <h1>Home Page</h1>
    <table className="table table-hover table-striped border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
  {users.map(function(user,index){
        return <List user={user} key={index} />;
    })}
  </tbody>
</table>
    
    </div>;
}
export default Home;