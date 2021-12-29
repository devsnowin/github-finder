import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { Repos } from '../../repos/Repos.component';
import GithubContext from '../../../context/github/githubContext';
import "./User.style.css"

const User = () => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;

  // Get the current params
  const { username } = useParams();
  
  useEffect(() => {
    getUser(username);
    getUserRepos(username);
  }, [])

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;
  
  const loaderStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    color: 'rgb(48, 40, 73)'
}

  if (loading) return <PulseLoader css={loaderStyle} />
  else {
    return (
      <div className='container'>
        <Link to="/" className="btn-back btn">Back to home</Link>
        Hireable: {''}
        {
          hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
              <i className='fas fa-times-circle text-danger' />
          )
        }

        <div className="profile-card">
          <div className="user">
            <div className="image">
              <img src={avatar_url} alt="profile-img" className="image__img" />
            </div>
            <h1>{login}</h1>
            <p>Location: { location }</p>
          </div>
          <div className="profile-content">
            <h2>Bio</h2>
            <p>{ bio }</p>
            <a href={html_url} target="_blank" className="btn btn-github">Vist GitHub Profile</a>
            <p>Username: { name }</p>
            <p>Company: { company }</p>
            <p>Website: <a href={
              (!/^https?:\/\//i.test(blog)) ? 'https://' + blog : blog
            } target="_blank">{ blog }</a></p>
          </div>
        </div>

        <div className="badges-card">
          <p className="badges following">Followers: { followers }</p>
          <p className="badges followers">Following: { following }</p>
          <p className="badges public-repo">Public Repo: { public_repos }</p>
          <p className="badges public-gist">Public Gists: { public_gists }</p>
        </div>
        
        <Repos repos={repos}/>
      </div>

      
    )
  }
}

export default User
