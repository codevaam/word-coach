import { GoogleLogout } from 'react-google-login'
import Router from 'next/router'
import axios from 'axios'

const logout = () => {
  Router.push('/login')
}

const search = () => {
  console.log(localStorage.getItem('courses'))
  
}

const TopNav = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a href="/" className="navbar-brand text-primary">Courses</a>
      <form className="form-inline mr-auto">
        <input className="form-control search-input" type="search" placeholder="Search" aria-label="Search" onChange={search}/>
      </form>
      <a href="/profile" className="navbar-brand text-primary">Devam</a>
      <GoogleLogout
        clientId="854332407368-a8hm1e15v8qc7epntk1443tu9q2dm8m6.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={logout}
      >
      </GoogleLogout>
    </nav>
    <style jsx>{`
      nav {
        background-color: rgba(255, 255, 255, 0.0);
      }
      @media(max-width: 768px) {
        .search-input {
          display: none;
        }
      }
      `}
    </style>
  </>
);
export default TopNav


// <div>
    //   <div className="header2 bg-success-gradiant shadow-sm">
    //     <div className="">
    //       <nav className="navbar navbar-expand-lg h2-nav">
    //         <a className="navbar-brand" href="#">
    //           <h3 className="text-uppercase font-weight-bold text-white m-0">Game</h3>
    //         </a>
    //         <button
    //           className="navbar-toggler"
    //           type="button"
    //           data-toggle="collapse"
    //           data-target="#header2"
    //           aria-controls="header2"
    //           aria-expanded="false"
    //           aria-label="Toggle navigation"
    //         >
    //           <span className="icon-menu"></span>
    //         </button>
    //         <div className="collapse navbar-collapse hover-dropdown" id="header2">



    //         </div>
    //       </nav>
    //     </div>
    //   </div>
    // </div>