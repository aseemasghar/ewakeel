import React from 'react'
import { Link } from 'react-router-dom'
import './UserList.css'
import { useDispatch } from "react-redux";
import { admindeleteUser } from '../../Actions/User';
import { getAllLawyers } from '../../Actions/User';

const LawyerList = ({
    name,
  email,
  city,
  userId,
}) => {

    const dispatch = useDispatch();
    const deleteUserHandler = async () => {
     const isSure = window.confirm("Are you sure to delete this User");
     if(isSure){
      await dispatch(admindeleteUser(userId));
      dispatch(getAllLawyers());
     }
    };

  
  return (
    <>
       <div className="container">
<div className="abc">
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered">
        <thead>
          <tr>
          
            <th  className='text-primary'  scope="col">Lawyer Name</th>
            <th  className='text-primary'  scope="col">Email</th>
            <th  className='text-primary'  scope="col">City</th>
            <th  className='text-primary'  scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{name}</th>
            <td>{email}</td>
            <td>{city}</td>
            <td className='d-flex flex-direction-row'>
              <Link to={`/admin/lawyer/${userId}`} type="button" className="btn btn-primary  mx-1"><i className="far fa-eye"></i></Link>
            <button onClick={deleteUserHandler} type="button" className="btn btn-danger"><i className="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default LawyerList