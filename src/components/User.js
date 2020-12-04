import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {

    const { login, avatar_url } = user;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <div className="card mt-3 shadow border-0">
                <img src={avatar_url} alt="" className="img-fluid" />
                <div className="card-body">
                    <h5 className="card-title">{login}</h5>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm">Go Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default User