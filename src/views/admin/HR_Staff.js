import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import AdminSidebar from "../admin/Admin_Sidebar";
import { getAllUsers } from "../../controllers/User";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTrash } from '@fortawesome/free-solid-svg-icons';

class HR_Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
        }
    }

    componentDidMount() {
        this.loadUsers();
      }
    
      loadUsers = () => {
        getAllUsers()
          .then(result => {
            // console.log(result);
            this.setState({ Users: result });
          })
          .catch(err => {
            // console.log(err);
          });
      };
    

    render(){
        const { Users } = this.state;
        return(
            <div className="bg-light wd-wrapper">
                <AdminSidebar />
                <div className="wrapper-wx" >
                    <div className="container-fluid" >
                        <div className="row">
                            <div className="col-12">
                                <h5 className="text-dark bold-normal py-2 bg-white shadow-sm px-2 mt-3 rounded">
                                Human Resource Management Staff 
                                <span className="badge badge-success mx-2 ">Add HR Staff Member</span>
                                </h5>
                            </div>
                            <div className="col-12" >
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                    <form className=" py-2  px-3 "  >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6 className="form-label py-2">First  Name *</h6>
                                                <input
                                                    type="text"
                                                    name="fname"
                                                    placeholder="John"
                                                    className="form-control" 
                                                    // value={fname} onChange={(e) => this.formDetails(e)} 
                                                    required></input>

                                                <h6 className="form-label py-2 mt-2">Email *</h6>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="johndoe@gmail.com"
                                                    className="form-control" 
                                                    // value={email} onChange={(e) => this.formDetails(e)} 
                                                    required></input>
                                            </div>
                                            <div className="col-md-6">
                                                <h6 className="form-label py-2 ">Last  Name *</h6>
                                                <input
                                                    type="text"
                                                    name="lname"
                                                    placeholder="Doe"
                                                    className="form-control" 
                                                    // value={lname} onChange={(e) => this.formDetails(e)} 
                                                    required></input>
                                                <h6 className="form-label py-2 mt-2">Password  *</h6>
                                                <input
                                                    type="password"
                                                    name="name"
                                                    placeholder="Automaticaly Generate and Email"
                                                    className="form-control" disabled></input>
                                            </div>
                                            <div className="col-md-12 mt-4">
                                                <div className="d-flex">
                                                    <button type="reset" className="px-2 btn btn-secondary  btn-sm bold-normal ml-auto" >
                                                        Cancel
                                                </button>
                                                    <button type="submit" className="px-2 btn btn-dark  btn-sm bold-normal ml-2"   >
                                                        Add Manager
                                                </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card border-0 shadow-sm rounded mt-3 bg-white pb-2">
                                    <h5 className="text-dark bold-normal py-2 bg-white px-2">
                                        All Human Resource Managers
                                </h5>
                                    <div className="table-responsive px-2">
                                        <table className="table table-stripped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Join Date</th>
                                                    <th scope="col">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {this.filterByCategory().map((item) =>
                                                this.displayAllManagers(item)
                                                )}
                                                {/* {managers.map(item => this.displayAllManagers(item))} */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    filterByCategory = () => {
        const { Users } = this.state;
        if (Users != null) {
          return Users.filter((p) => p.role == 'HR-Manager');
        }
      };
    

    displayAllManagers = item => {
        return (
            <tr key={item._id}>

                <td>{item.email}</td>
                <td>{item.name}</td>
                <td>{item.role}</td>
                {/* <td>{moment(new Date(item.created_at)).format('YYYY MMM DD')}</td> */}
                <td>
                    <button className="btn btn-danger btn-sm px-2 mr-2">
                        <FontAwesomeIcon icon={faTrash}  />
                    </button>
                    <a className="btn btn-info btn-sm px-2 mr-2"   >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </td>
            </tr>
        );
    }

}

export default withRouter(HR_Staff);