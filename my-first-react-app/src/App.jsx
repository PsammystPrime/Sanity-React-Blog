// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import hero from './assets/01.png'
// import hero2 from './assets/320x220.png'
import './App.css'
import './styles/framework.css'
import './styles/custom.flexslider.css'
import './styles/layout.css'

export function Nav1(){
  return (
    <div className="wrapper row0">
      <div id="topbar" className="hoc clear"> 
        <div className="fl_left">
          <ul className="nospace">
            <li id={1}><i className="fa fa-clock-o"></i> Mon. - Sun. 8am - 5pm</li>
            <li id={2}><i className="fa fa-phone"></i> +(254) 7 1604 1426</li>
            <li id={3}><i className="fa fa-envelope-o"></i> PsammystPrime384@gmail.com</li>
          </ul>
        </div>
        <div className="fl_right">
          <ul className="nospace">
            <li id={4}><a href="/"><i className="fa fa-lg fa-home"></i></a></li>
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
      <h1><a href="index.html">The Nairobi Times</a></h1>
    </div>
    <nav id="mainav" className="fl_right">
      <ul className="clear">
        <li id={11} className="active"><a href="/">Home</a></li>
        <li id={22}><a className="drop" href="#">Pages</a>
          <ul>
            <li id={33}><a href="pages/gallery.html">Gallery</a></li>
            <li id={44}><a href="pages/full-width.html">Full Width</a></li>
            <li id={55}><a href="pages/sidebar-left.html">Sidebar Left</a></li>
            <li id={66}><a href="pages/sidebar-right.html">Sidebar Right</a></li>
            <li id={77}><a href="pages/basic-grid.html">Basic Grid</a></li>
          </ul>
        </li>
        <li id={88}><a className="drop" href="#">CATEGORIES</a>
          <ul>
            <li id={99}><a href="#">Productivity</a></li>
            <li id={100}><a className="drop" href="#">Software Dev + Technology</a>
              <ul>
                <li id={101}><a href="#">Frontend Development</a></li>
                <li id={102}><a href="#">Web3</a></li>
                <li id={103}><a href="#">Headless CMS</a></li>
              </ul>
            </li>
            <li id={104}><a href="#">Writing</a></li>
          </ul>
        </li>
        <li id={105}><a href="/all">PORTFOLIO</a></li>
        <li id={106}><a href="/featured">LIVE BLOGS</a></li>
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
          <footer><a className="btn" href="#">Explore Repo &raquo;</a></footer>
        </article>
      </div>
  )
}

export function TopStories() {
  return(
      <div className="wrapper row3">
        <section className="hoc container clear"> 
          <div className="sectiontitle">
            <h3 className="heading">Top Stories</h3>
            <p>Get the Latest in Town Trends all in one place</p>
          </div>
          <ul className="nospace group services">
            <li id={200} className="one_third first">
              <article><a href="#"><i className="icon fa fa-ils"></i></a>
                <h6 className="heading">Devin; how true is it?</h6>
                <p>Eget auctor sit amet bibendum in quam quisque sit amet posuere felis eget sollicitudin sem [&hellip;]</p>
                <footer><a href="#">Read More &raquo;</a></footer>
              </article>
            </li>
            <li id={202} className="one_third">
              <article><a href="#"><i className="icon fa fa-ioxhost"></i></a>
                <h6 className="heading">Getting started with Solidity</h6>
                <p>Massa in a massa a mauris euismod bibendum id et purus aenean posuere placerat dui vitae [&hellip;]</p>
                <footer><a href="#">Read More &raquo;</a></footer>
              </article>
            </li>
            <li id={202} className="one_third">
              <article><a href="#"><i className="icon fa fa-yelp"></i></a>
                <h6 className="heading">Increasing developer Productivity</h6>
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

export function Authors() {
  return(
      <div className="wrapper bgded overlay" >
            <article className="hoc container"> 
              <div className="sectiontitle">
                <h3 className="heading">Industry Movers Quotes</h3>
                <p>Get to know what they say when they say.</p>
              </div>
              <ul className="nospace group">
                <li id={13} className="one_half first borderedbox inspace-15">
                  <blockquote>Tackle the hard things, that is where growth lies. After conquering repeat. The Sky is not the limit, but a limit. Overcome it!! </blockquote>
                  <p className="right bold">Psammyst Prime / Developer</p>
                </li>
                <li id={14} className="one_half borderedbox inspace-15">
                  <blockquote>Lacinia quis consectetur dolor dignissim vestibulum iaculis quam vel commodo dictum quisque efficitur vestibulum odio sed facilisis nullam justo ipsum maximus sed ullamcorper vitae aliquam eget augue</blockquote>
                  <p className="right bold">Jane Doe / CEO</p>
                </li>
              </ul>
            </article>
      </div>
  )
}

export function Features() {
  return(
      <div className="wrapper row3">
        <section className="hoc container clear"> 
          <div className="sectiontitle">
            <h3 className="heading">FEATURED ARTICLES</h3>
            <p>Auctor in mattis nisl sed finibus eu dui eget scelerisque dolor.</p>
          </div>
          <ul className="nospace group">
            <li className="one_third first">
              <article>
                <img className="inspace-10 btmspace-30 borderedbox" src={hero} alt="img1"/>
                <ul className="nospace btmspace-10 inline pushright font-xs">
                  <li><i className="fa fa-calendar-o"></i> 06/01/2024</li>
                  <li><i className="fa fa-comments"></i> <a href="#">19</a></li>
                </ul>
                <h6 className="heading font-x1">Content Management Systems...&hellip;</h6>
                <footer><a className="btn" href="#">Read More &raquo;</a></footer>
              </article>
            </li>
            <li className="one_third">
              <article>
                <a href="#"><img className="inspace-10 btmspace-30 borderedbox" src={hero} alt=""/></a>
                <ul className="nospace btmspace-10 inline pushright font-xs">
                  <li><i className="fa fa-calendar-o"></i> 06/01/2023</li>
                  <li><i className="fa fa-comments"></i> <a href="#">392</a></li>
                </ul>
                <h6 className="heading font-x1">Getting Started with Webpack...&hellip;</h6>
                <footer><a className="btn" href="#">Read More &raquo;</a></footer>
              </article>
            </li>
            <li className="one_third">
              <article>
                <a href="#"><img className="inspace-10 btmspace-30 borderedbox" src={hero} alt=""/></a>
                <ul className="nospace btmspace-10 inline pushright font-xs">
                  <li><i className="fa fa-calendar-o"></i> 06/01/2024</li>
                  <li><i className="fa fa-comments"></i> <a href="#">139</a></li>
                </ul>
                <h6 className="heading font-x1">Getting the Best Audience for your...&hellip;</h6>
                <footer><a className="btn" href="#">Read More &raquo;</a></footer>
              </article>
            </li>
          </ul>
        </section>
      </div>
  )
}

export function Contact() {
  return(
    <div className="wrapper row4 bgded overlay">
      <div id="footer" className="hoc clear"> 
        <div className="one_third first">
          <h6 className="heading">Contact Us</h6>
          <ul className="nospace linklist contact">
            <li id={32}><i className="fa fa-map-marker"></i>
              <address>
              Kahawa Sukari, Nairobi Kenya.
              </address>
            </li>
            <li id={33}><i className="fa fa-phone"></i> +(254)7 1604 1426</li>
            <li id={34}><i className="fa fa-fax"></i> +(254)7 1604 1426</li>
            <li id={35}><i className="fa fa-envelope-o"></i> PsammystPrime384@gmail.com</li>
          </ul>
        </div>
        <div className="one_third">
          <h6 className="heading">Email Us</h6>
          <p className="nospace btmspace-30">Report an issue or write for us</p>
          <form method="post" action="#">
            <fieldset>
              <legend>Newsletter:</legend>
              <input className="btmspace-15" type="text" value="" placeholder="Name" />
              <input className="btmspace-15" type="text" value="" placeholder="Email" />
              
              <button type="submit" value="submit">Submit</button>
            </fieldset>
          </form>
        </div>
        <div className="one_third">
          <h6 className="heading">What our readers Say</h6>
          <ul className="nospace linklist">
            <li id={42}>
              <article>
                <h2 className="nospace font-x1"><a href="#">Anonymous client</a></h2>
                <time className="font-xs block btmspace-10" /*datetime="2045-04-06"*/ >Friday, 6<sup>th</sup> April 2022</time>
                <p className="nospace">This guys are the best professionals [&hellip;]</p>
              </article>
            </li>
            <li id={43}>
              <article>
                <h2 className="nospace font-x1"><a href="#">Kenyan Hustler</a></h2>
                <time className="font-xs block btmspace-10" /*datetime=2045-04-05"*/ >Thursday, 5<sup>th</sup> April 2024</time>
                <p className="nospace">Clear and concise News[&hellip;]</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  }

export function Footer() {
    return(
      <div className="wrapper row5">
        <div id="copyright" className="hoc clear"> 
          <p className="fl_left">Copyright &copy; 2024 - All Rights Reserved </p>
          <p className="fl_right">Made with love by <a target="_blank" href="https://www.github.com/psammystprime/">PsammystPrime</a></p>
        </div>
      </div>
    )}
  
export function Return(){
     return  <a id="backtotop" href="#top"><i className="fa fa-chevron-up"></i></a>
     
}
function App(){
  return (
    <main id='top'>
      <Nav1/>
      <Nav2/>
      <Greeting/>
      <TopStories/>
      <Authors/>
      <Features/>
      <Contact/>
      <Footer/>
      <Return/>
    </main>
  )
  
}

 {/* <div id= "slides" classNameName="bgded overlay">
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
</div> */}
  


export default App
