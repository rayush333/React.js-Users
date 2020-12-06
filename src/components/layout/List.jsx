import React from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';
function List(props){
    return <tr><th scope="row">{props.user.id}</th>
    <td>{props.user.name}</td>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td className="td">
    <Link exact to={"/users/"+props.user.id}><Button variant="contained" color="primary" className="butt">
    <VisibilityIcon />
    </Button></Link>
    <Link exact to={"/edit/"+props.user.id}><Button variant="contained" color="default" className="butt">
    <EditIcon />
    </Button></Link>
    <Link exact to={"/delete/"+props.user.id}><Button variant="contained" color="secondary" className="butt">
    <DeleteIcon />
    </Button></Link></td>
    </tr>;
}
export default List;