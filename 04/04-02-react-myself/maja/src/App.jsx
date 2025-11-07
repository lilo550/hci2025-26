import { useState } from 'react'
import reactLogo from './assets/IMG_7141.jpg'
import viteLogo from './assets/1.png'
import visLogo from './assets/vis.png'
import exampleImg from './assets/Img3.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Maja Gießmann</h1>
      <div className="container">
        <div className="card">
          <a href="https://www.hs-ansbach.de/bachelor/visualisierung-und-interaktion-in-digitalen-medien" target="_blank">
            <img src={visLogo} className="logo" alt="VIS logo" />
          </a>
          <p>Visualisierung und Interaktion <br />in digitalen Medien</p>
        </div>
        <div className="imgCard">
          <img src={reactLogo}/>
        </div>   
        <div className="card">
          <h3>Tools</h3>
          <div className="containerList">
            <ul>
              <li>Blender</li>
              <li>Corel Draw</li>
              <li>Unity</li>
            </ul>
            <ul>
              <li>C4D</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
        <div className="imgCard">
          <img src={viteLogo}/>
        </div>
        <div className="card">
          <h3>Hobbies</h3>
          <ul>
            <li>3D</li>
            <li>Triathlon</li>
            <li>Webdesign</li>
          </ul>
        </div>
        <div className="imgCard">
          <img src={exampleImg}/>
        </div>
      </div>
    </>
  )
}

export default App



