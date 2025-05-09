import React from 'react'

export default function Navhead() {
  return (
    <nav>
            <div className="nav-section">
                <div className="nav-logo">
                    <img src="./logo.png" alt="logo" />
                    <h3 >envato<span className="nav-market">market</span></h3>
                </div>
                <div className="nav-buy">
                    <button type="button" className="btn btn-success">Buy</button>
                </div>
            </div>
        </nav>

  )
}
