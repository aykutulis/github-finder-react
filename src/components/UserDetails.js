import React, { Fragment, useEffect, useContext } from 'react'
import Loading from './Loading'
import Repos from './Repos'
import GithubContext from '../context/github/githubContext'

const UserDetails = ({ match }) => {

    const { getUser, loading, user, repos, getUserRepos } = useContext(GithubContext);

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, []);

    const { name, avatar_url, location, html_url, bio, blog, public_repos, followers, following } = user;

    if (loading) {
        return <Loading />
    } else {
        return (
            <div className='container my-3'>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card shadow border-0">
                            <img src={avatar_url} className='card-img-top' />
                            <div className="card-body">
                                <p className="card-text">{name}</p>
                                {
                                    location &&
                                    <p>
                                        <i className='fas fa-map-marker-alt'></i> {location}
                                    </p>
                                }
                                <p>
                                    <a className='btn btn-dark btn-block btn-sm' href={html_url}>GitHub Profile</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="card shadow border-0">
                            <div className="card-body">
                                {
                                    bio &&
                                    <Fragment>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                    </Fragment>
                                }
                                {
                                    blog &&
                                    <Fragment>
                                        <h3>Blog</h3>
                                        <p>{blog}</p>
                                    </Fragment>
                                }
                                <div>
                                    <span className="badge badge-dark m-1">
                                        Followers: {followers}
                                    </span>
                                    <span className="badge badge-dark m-1">
                                        Follow: {following}
                                    </span>
                                    <span className="badge badge-dark m-1">
                                        Repos: {public_repos}
                                    </span>
                                </div>
                            </div>
                            <ul className="list-group list-group-flush">
                                <Repos repos={repos} />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails
