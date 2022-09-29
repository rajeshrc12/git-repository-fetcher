import React, { useEffect, useState } from 'react'
import GitUserDetails from '../git-user-details/GitUserDetails';
import GitUserRepos from '../git-user-repos/GitUserRepos';
import Pagination from 'react-responsive-pagination';
import Swal from 'sweetalert2';
import "./git-user-info.css";
const GitUserInfo = () => {
  const userData= JSON.parse(sessionStorage.getItem("userdata"));
  const [repos,setRepos] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  //console.log(Math.ceil(userData.public_repos/8));
  const handlePageClick = (e) =>{
    if(e!==currentPage)
    {
      Swal.fire('Fetching Please Wait!');
      Swal.showLoading();
      setCurrentPage(e);
      fetch(`https://api.github.com/users/${userData.login}/repos?per_page=8&page=${e}`)
        .then(req => req.json())
        .then(res => {
          setRepos(res);
          Swal.hideLoading();
          Swal.fire('All Repository Loaded');
        });
    }
  }
  useEffect(()=>{
    Swal.fire('Fetching Please Wait!');
    Swal.showLoading();
    fetch(`https://api.github.com/users/${userData.login}/repos?per_page=8&page=1`)
      .then(req => req.json())
      .then(res => {
        setRepos(res);
        Swal.hideLoading();
        Swal.fire('All Repository Loaded');
      });
  },[]);
  return (
    <div className="git_user_info_container">
      <GitUserDetails gituser={userData}/>
      <GitUserRepos gitrepos={repos}/>
      <div className="page">
      <Pagination 
      current={currentPage}
      total={Math.ceil(userData.public_repos/8)}
      onPageChange={handlePageClick}
      previousLabel="<<"
      nextLabel=">>"
      />
      </div>
    </div>
  )
}

export default GitUserInfo