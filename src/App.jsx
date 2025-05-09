// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navhead from './component/Navhead'
import Navbar from './component/Navbar'
import Herosection from './component/Herosection'
import Heroafter from './component/Heroafter'
import Imagepart from './component/Imagepart'
import Description from './component/Description'

function App() {


  return (
    <>
        <div className="main-div">
<Navhead />
<Navbar />
<Herosection />
<Heroafter />
<Imagepart />
<Description />

        </div>
    </>
  )
}

export default App
