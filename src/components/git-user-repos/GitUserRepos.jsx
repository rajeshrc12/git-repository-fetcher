import React from 'react'
import "./git-user-repos.css";
const GitUserRepos = (props) => {
  //console.log(props.gitrepos);
  return (
    <>
    {props.gitrepos.length === 0?<div className='norepo'>No Repos</div>:
    <div className="git_user_repos_container">
    {props.gitrepos.map((e,i)=> {
      return (
        <div key={i} className="git_user_repos_card">
          <div className="git_repos_title">
          <a className='link' target="_blank" rel="noreferrer" href={e.html_url}>{e.name.length >35?e.name.slice(0,35)+"..":e.name}</a> 
          </div>
          <div className="git_repos_title_data">
            <div className="git_repos_desc">
            {e.description?e.description.slice(0,50)+"...":"No Description"}
            </div>
            <div className="git_repos_langs" style={{display:e.language?"block":"none"}}>
              <div className="git_repos_lang">
              {e.language}
              </div>
            </div>
          </div>
        </div>
      );
    })}

  </div>
    }
    </>
    
  )
}

export default GitUserRepos