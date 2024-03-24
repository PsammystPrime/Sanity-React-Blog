// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './styles/layout.css'

export function Nav1(){
  return (
    <div className="wrapper row0">
      <div id="topbar" className="hoc clear"> 
        <div className="fl_left">
          <ul className="nospace">
            <li id={1}><i className="fa fa-clock-o"></i> Mon. - Fri. 8am - 5pm</li>
            <li id={2}><i className="fa fa-phone"></i> +00 (123) 456 7890</li>
            <li id={3}><i className="fa fa-envelope-o"></i> info@domain.com</li>
          </ul>
        </div>
        <div className="fl_right">
          <ul className="nospace">
            <li id={4}><a href="#"><i className="fa fa-lg fa-home"></i></a></li>
            <li id={5}><a href="#" title="Login"><i className="fa fa-lg fa-sign-in"></i></a></li>
            <li id={6}><a href="#" title="Sign Up"><i className="fa fa-lg fa-edit"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    )
}


function App() {
  return(
    
  )
}

/* <div id= "slides" classNameName="bgded overlay">
  <div  classNameName="hoc clear"> 

    <div classNameName="flexslider basicslider">
      <ul classNameName="slides">
        <li id={} id={11} >
          <article key={22}>
            <p>Lacinia</p>
            <h3 classNameName="heading">Maximus dapibus justo</h3>
            <p>Tellus magna at velit praesent non justo</p>
            <footer><a classNameName="btn" href="#">Pretium pharetra</a></footer>
          </article>
        </li>
        <li id={} id = {12}>
          <article>
            <p>Lacinia</p>
            <h3 classNameName="heading">Imperdiet vitae suspendisse</h3>
            <p>Non tincidunt dui nullam tortor eget aliquam</p>
            <footer><a classNameName="btn" href="#">Aliquet consectetur</a></footer>
          </article>
        </li>
        <li id={} id={13}>
          <article>
            <p>Lacinia</p>
            <h3 classNameName="heading">Vivamus gravida ex quis</h3>
            <p>Sit amet at mauris vivamus eget leo nunc</p>
            <footer><a classNameName="btn" href="#">Lacinia facilisis</a></footer>
          </article>
        </li>
      </ul>
    </div>
  </div>
</div> */
  


export default App
