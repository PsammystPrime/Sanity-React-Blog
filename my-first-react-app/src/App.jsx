// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import hero from "./assets/01.png";
// import hero2 from './assets/320x220.png'
import "./App.css";
import "./styles/framework.css";
import "./styles/custom.flexslider.css";
import "./styles/layout.css";

import { Link } from "react-router-dom";

export function Nav1() {
  return (
    <div className="wrapper row0">
      <div id="topbar" className="hoc clear">
        <div className="fl_left">
          <ul className="nospace">
            <li id={1}>
              <i className="fa fa-clock-o"></i> Mon. - Sun. 8am - 5pm
            </li>
            <li id={2}>
              <i className="fa fa-phone"></i> +(254) 7 1604 1426
            </li>
            <li id={3}>
              <i className="fa fa-envelope-o"></i> PsammystPrime384@gmail.com
            </li>
          </ul>
        </div>
        <div className="fl_right">
          <ul className="nospace">
            <li id={4}>
              <Link to="/">
                <i className="fa fa-lg fa-home"></i>
              </Link>
            </li>
            <li id={5}>
              <Link to="#" title="Login">
                <i className="fa fa-lg fa-sign-in"></i>
              </Link>
            </li>
            <li id={6}>
              <Link to="#" title="Sign Up">
                <i className="fa fa-lg fa-edit"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Nav2() {
  return (
    <div className="wrapper row1">
      <header id="header" className="hoc clear">
        <div id="logo" className="fl_left">
          <h1>
            <Link to="index.html">The Nairobi Times</Link>
          </h1>
        </div>
        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li id={11} className="active">
              <Link to="/">Home</Link>
            </li>
            <li id={22}>
              <Link className="drop" href="#">
                Trending
              </Link>
              <ul>
                <li id={33}>
                  <Link to="pages/gallery.html">Gallery</Link>
                </li>
                <li id={44}>
                  <Link to="pages/full-width.html">Full Width</Link>
                </li>
                <li id={55}>
                  <Link to="pages/sidebar-left.html">Sidebar Left</Link>
                </li>
                <li id={66}>
                  <Link to="pages/sidebar-right.html">Sidebar Right</Link>
                </li>
                <li id={77}>
                  <Link to="pages/basic-grid.html">Basic Grid</Link>
                </li>
              </ul>
            </li>
            <li id={88}>
              <Link className="drop" href="#">
                CATEGORIES
              </Link>
              <ul>
                <li id={99}>
                  <Link to="#">Productivity</Link>
                </li>
                <li id={100}>
                  <Link className="drop" href="#">
                    Software Dev + Technology
                  </Link>
                  <ul>
                    <li id={101}>
                      <Link to="#">Frontend Development</Link>
                    </li>
                    <li id={102}>
                      <Link to="#">Web3</Link>
                    </li>
                    <li id={103}>
                      <Link to="#">Headless CMS</Link>
                    </li>
                  </ul>
                </li>
                <li id={104}>
                  <Link to="#">Writing</Link>
                </li>
              </ul>
            </li>
            <li id={105}>
              <Link to="/all">All Blogs</Link>
            </li>
            <li id={106}>
              <Link to="/featured">Featured</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export function Greeting() {
  return (
    <div className="wrapper bgded overlay">
      <article className="hoc container center">
        <h6 className="heading font-x3">Aloha, Welcome to my Blog</h6>
        <p className="btmspace-30">
          This is where I document my Frontend Experiences
        </p>
        <footer>
          <Link className="btn" href="#">
            Explore Repo &raquo;
          </Link>
        </footer>
      </article>
    </div>
  );
}

export function TopStories() {
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <h3 className="heading">Top Stories</h3>
          <p>Get the Latest in Town Trends all in one place</p>
        </div>
        <ul className="nospace group services">
          <li id={200} className="one_third first">
            <article>
              <Link to="#">
                <i className="icon fa fa-ils"></i>
              </Link>
              <h6 className="heading">Devin; how true is it?</h6>
              <p>
                Eget auctor sit amet bibendum in quam quisque sit amet posuere
                felis eget sollicitudin sem [&hellip;]
              </p>
              <footer>
                <Link to="#">Read More &raquo;</Link>
              </footer>
            </article>
          </li>
          <li id={202} className="one_third">
            <article>
              <Link to="#">
                <i className="icon fa fa-ioxhost"></i>
              </Link>
              <h6 className="heading">Getting started with Solidity</h6>
              <p>
                Massa in Link massa Link mauris euismod bibendum id et purus
                aenean posuere placerat dui vitae [&hellip;]
              </p>
              <footer>
                <Link to="#">Read More &raquo;</Link>
              </footer>
            </article>
          </li>
          <li id={202} className="one_third">
            <article>
              <Link to="#">
                <i className="icon fa fa-yelp"></i>
              </Link>
              <h6 className="heading">Increasing developer Productivity</h6>
              <p>
                Elementum sed pretium neque vitae diam suscipit eu vehicula nisl
                aliquet habitant morbi [&hellip;]
              </p>
              <footer>
                <Link to="#">Read More &raquo;</Link>
              </footer>
            </article>
          </li>
        </ul>
        <div className="clear"></div>
      </section>
    </div>
  );
}

export function Authors() {
  return (
    <div className="wrapper bgded overlay">
      <article className="hoc container">
        <div className="sectiontitle">
          <h3 className="heading">Industry Movers Quotes</h3>
          <p>Get to know what they say when they say.</p>
        </div>
        <ul className="nospace group">
          <li id={13} className="one_half first borderedbox inspace-15">
            <blockquote>
              Tackle the hard things, that is where growth lies. After
              conquering repeat. The Sky is not the limit, but Link limit.
              Overcome it!!{" "}
            </blockquote>
            <p className="right bold">Psammyst Prime / Developer</p>
          </li>
          <li id={14} className="one_half borderedbox inspace-15">
            <blockquote>
              Lacinia quis consectetur dolor dignissim vestibulum iaculis quam
              vel commodo dictum quisque efficitur vestibulum odio sed facilisis
              nullam justo ipsum maximus sed ullamcorper vitae aliquam eget
              augue
            </blockquote>
            <p className="right bold">Jane Doe / CEO</p>
          </li>
        </ul>
      </article>
    </div>
  );
}

export function Features() {
  return (
    <div className="wrapper row3">
      <section className="hoc container clear">
        <div className="sectiontitle">
          <h3 className="heading">FEATURED ARTICLES</h3>
          <p>
            Auctor in mattis nisl sed finibus eu dui eget scelerisque dolor.
          </p>
        </div>
        <ul className="nospace group">
          <li className="one_third first">
            <article>
              <img
                className="inspace-10 btmspace-30 borderedbox"
                src={hero}
                alt="img1"
              />
              <ul className="nospace btmspace-10 inline pushright font-xs">
                <li>
                  <i className="fa fa-calendar-o"></i> 06/01/2024
                </li>
                <li>
                  <i className="fa fa-comments"></i> <Link to="#">19</Link>
                </li>
              </ul>
              <h6 className="heading font-x1">
                Content Management Systems...&hellip;
              </h6>
              <footer>
                <Link className="btn" href="#">
                  Read More &raquo;
                </Link>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <Link to="#">
                <img
                  className="inspace-10 btmspace-30 borderedbox"
                  src={hero}
                  alt=""
                />
              </Link>
              <ul className="nospace btmspace-10 inline pushright font-xs">
                <li>
                  <i className="fa fa-calendar-o"></i> 06/01/2023
                </li>
                <li>
                  <i className="fa fa-comments"></i> <Link to="#">392</Link>
                </li>
              </ul>
              <h6 className="heading font-x1">
                Getting Started with Webpack...&hellip;
              </h6>
              <footer>
                <Link className="btn" href="#">
                  Read More &raquo;
                </Link>
              </footer>
            </article>
          </li>
          <li className="one_third">
            <article>
              <Link to="#">
                <img
                  className="inspace-10 btmspace-30 borderedbox"
                  src={hero}
                  alt=""
                />
              </Link>
              <ul className="nospace btmspace-10 inline pushright font-xs">
                <li>
                  <i className="fa fa-calendar-o"></i> 06/01/2024
                </li>
                <li>
                  <i className="fa fa-comments"></i> <Link to="#">139</Link>
                </li>
              </ul>
              <h6 className="heading font-x1">
                Getting the Best Audience for your...&hellip;
              </h6>
              <footer>
                <Link className="btn" href="#">
                  Read More &raquo;
                </Link>
              </footer>
            </article>
          </li>
        </ul>
      </section>
    </div>
  );
}

export function Contact() {
  return (
    <div className="wrapper row4 bgded overlay">
      <div id="footer" className="hoc clear">
        <div className="one_third first">
          <h6 className="heading">Contact Us</h6>
          <ul className="nospace linklist contact">
            <li id={32}>
              <i className="fa fa-map-marker"></i>
              <address>Kahawa Sukari, Nairobi Kenya.</address>
            </li>
            <li id={33}>
              <i className="fa fa-phone"></i> +(254)7 1604 1426
            </li>
            <li id={34}>
              <i className="fa fa-fax"></i> +(254)7 1604 1426
            </li>
            <li id={35}>
              <i className="fa fa-envelope-o"></i> PsammystPrime384@gmail.com
            </li>
          </ul>
        </div>
        <div className="one_third">
          <h6 className="heading">Email Us</h6>
          <p className="nospace btmspace-30">Report an issue or write for us</p>
          <form method="post" action="#">
            <fieldset>
              <legend>Newsletter:</legend>
              <input
                className="btmspace-15"
                type="text"
                value=""
                placeholder="Name"
              />
              <input
                className="btmspace-15"
                type="text"
                value=""
                placeholder="Email"
              />

              <button type="submit" value="submit">
                Submit
              </button>
            </fieldset>
          </form>
        </div>
        <div className="one_third">
          <h6 className="heading">What our readers Say</h6>
          <ul className="nospace linklist">
            <li id={42}>
              <article>
                <h2 className="nospace font-x1">
                  <Link to="#">Anonymous client</Link>
                </h2>
                <time
                  className="font-xs block btmspace-10" /*datetime="2045-04-06"*/
                >
                  Friday, 6<sup>th</sup> April 2022
                </time>
                <p className="nospace">
                  This guys are the best professionals [&hellip;]
                </p>
              </article>
            </li>
            <li id={43}>
              <article>
                <h2 className="nospace font-x1">
                  <Link to="#">Kenyan Hustler</Link>
                </h2>
                <time
                  className="font-xs block btmspace-10" /*datetime=2045-04-05"*/
                >
                  Thursday, 5<sup>th</sup> April 2024
                </time>
                <p className="nospace">Clear and concise News[&hellip;]</p>
              </article>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="wrapper row5">
      <div id="copyright" className="hoc clear">
        <p className="fl_left">Copyright &copy; 2024 - All Rights Reserved </p>
        <p className="fl_right">
          Made with love by{" "}
          <Link target="_blank" href="https://www.github.com/psammystprime/">
            PsammystPrime
          </Link>
        </p>
      </div>
    </div>
  );
}

export function Return() {
  return (
    <Link id="backtotop" href="#top">
      <i className="fa fa-chevron-up"></i>
    </Link>
  );
}
function App() {
  return (
    <main id="top">
      <Nav1 />
      <Nav2 />
      <Greeting />
      <TopStories />
      <Authors />
      <Features />
      <Contact />
      <Footer />
      <Return />
    </main>
  );
}

{
  /* <div id= "slides" classNameName="bgded overlay">
  <div  classNameName="hoc clear"> 

    <div classNameName="flexslider basicslider">
      <ul classNameName="slides">
        <li id={} id={11} >
          <article key={22}>
            <p>Lacinia</p>
            <h3 classNameName="heading">Maximus dapibus justo</h3>
            <p>Tellus magna at velit praesent non justo</p>
            <footer><Link classNameName="btn" href="#">Pretium pharetra</Link></footer>
          </article>
        </li>
        <li id={} id = {12}>
          <article>
            <p>Lacinia</p>
            <h3 classNameName="heading">Imperdiet vitae suspendisse</h3>
            <p>Non tincidunt dui nullam tortor eget aliquam</p>
            <footer><Link classNameName="btn" href="#">Aliquet consectetur</Link></footer>
          </article>
        </li>
        <li id={} id={13}>
          <article>
            <p>Lacinia</p>
            <h3 classNameName="heading">Vivamus gravida ex quis</h3>
            <p>Sit amet at mauris vivamus eget leo nunc</p>
            <footer><Link classNameName="btn" href="#">Lacinia facilisis</Link></footer>
          </article>
        </li>
      </ul>
    </div>
  </div>
</div> */
}

export default App;
