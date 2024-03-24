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

export function Nav2() {
return(
<div className="wrapper row1">
  <header id="header" className="hoc clear"> 
    <div id="logo" className="fl_left">
      <h1><a href="index.html">Doggax</a></h1>
    </div>
    <nav id="mainav" className="fl_right">
      <ul className="clear">
        <li id={11} className="active"><a href="index.html">Home</a></li>
        <li id={22}><a className="drop" href="#">Pages</a>
          <ul>
            <li id={33}><a href="pages/gallery.html">Gallery</a></li>
            <li id={44}><a href="pages/full-width.html">Full Width</a></li>
            <li id={55}><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li id={66}><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li id={77}><a href="pages/basic-grid.html">Basic Grid</a></li>
          </ul>
        </li>
        <li id={88}><a className="drop" href="#">Dropdown</a>
          <ul>
            <li id={99}><a href="#">Level 2</a></li>
            <li id={100}><a className="drop" href="#">Level 2 + Drop</a>
              <ul>
                <li id={101}><a href="#">Level 3</a></li>
                <li id={102}><a href="#">Level 3</a></li>
                <li id={103}><a href="#">Level 3</a></li>
              </ul>
            </li>
            <li id={104}><a href="#">Level 2</a></li>
          </ul>
        </li>
        <li id={105}><a href="#">Link Text</a></li>
        <li id={106}><a href="#">Link Text</a></li>
      </ul>
    </nav>
  </header>
</div>
)
}

export function Greeting() {
  return(
    <div className="wrapper bgded overlay" >
  <article className="hoc container center"> 
    <h6 className="heading font-x3">Aloha, Welcome to my Blog</h6>
    <p className="btmspace-30">This is where I document my Frontend Experiences</p>
    <footer><a className="btn" href="#">Sign in &raquo;</a></footer>
  </article>
</div>
  )
}

export function TopStories() {
  return(
    <div className="wrapper row3">
  <section className="hoc container clear"> 
    <div className="sectiontitle">
      <h3 className="heading">Ante leo bibendum</h3>
      <p>Nec libero tempus sit amet aliquet enim dignissim suspendisse.</p>
    </div>
    <ul className="nospace group services">
      <li id={200} className="one_third first">
        <article><a href="#"><i className="icon fa fa-ils"></i></a>
          <h6 className="heading">Nulla facilisi nunc</h6>
          <p>Eget auctor sit amet bibendum in quam quisque sit amet posuere felis eget sollicitudin sem [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </article>
      </li>
      <li id={202} className="one_third">
        <article><a href="#"><i className="icon fa fa-ioxhost"></i></a>
          <h6 className="heading">Sit amet sollicitudin</h6>
          <p>Massa in a massa a mauris euismod bibendum id et purus aenean posuere placerat dui vitae [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </article>
      </li>
      <li id={202} className="one_third">
        <article><a href="#"><i className="icon fa fa-yelp"></i></a>
          <h6 className="heading">Ligula at consectetur</h6>
          <p>Elementum sed pretium neque vitae diam suscipit eu vehicula nisl aliquet habitant morbi [&hellip;]</p>
          <footer><a href="#">Read More &raquo;</a></footer>
        </article>
      </li>
    </ul>
    <div className="clear"></div>
  </section>
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
