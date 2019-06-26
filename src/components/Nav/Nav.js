import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <ul>

    <Link to="/home">
      <h2 className="nav-title">House Project</h2>
    </Link>
    <div className="nav-right">
   
          <li><a href="/home">{props.user.id ? 'Home' : 'Login / Register'}</a></li>
     
     
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
            <li><a href="/#info">Info Page</a></li>
            <li class="dropdown">
              <a href="/#rooms" class="dropbtn">Rooms</a>
              <div class="dropdown-content">
                <a href="/#kitchen">Kitchen</a>
                <a href="/#bathroom">Bathroom</a>
                <a href="/#bedroom">Bedroom</a>
              </div>
              </li>
          
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      <li><a href="/#about">About</a></li>
  </div>
  </ul>
  </div>
   

);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
