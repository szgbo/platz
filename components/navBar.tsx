import React from 'react';
// import styles from '../styles/NavBar.module.css'


const NavBar = () => {

  return (
    <>
      <form>
        <label className="label">
          <div className="toggle">
            <input className="toggle-state" type="checkbox" name="check" value="check"/>
            <div className="indicator"></div>
          </div>
        </label>
      </form>
      <ul>
          <li>
            <button>
              hello
            </button>
          </li>
          <li>
            <button>
              hello
            </button>
          </li>
      </ul>
      
    </>
  )
}

export default NavBar;
