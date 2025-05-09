import React from 'react'

export default function Navbar() {
  return (
   <>

    <header className="navbar-heading">
            <div className="navbar">
                <div className="navbar-logo">
                    <img src="./navbar-logo.png" alt="" />
                </div>
                <div className="navbar-content">
                    <ul style={{display:'flex'}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Features</li>
                        <li>Pages
                            <select name="" id="">
                                <option value="">Integration</option>
                                <option value="">pricing</option>
                                <option value="">Team</option>
                                <option value="">career</option>
                                <option value="">FAQs</option>
                            </select>
                        </li>
                        <li>contact</li>
                    </ul>
                </div>
                <div className="navbar-contact">
                    <i className="fa-solid fa-phone"></i>
                    <div className="callus"> call logs</div>
                    <button>Get started</button>
                </div>
            </div>

        </header>
        <hr />

   </>
  )
}
