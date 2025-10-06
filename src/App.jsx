// Style
import './style/app.css'
import './style/nav.css'

// components
import Welcome from './components/Welcome'
import ProjectDeck from './components/ProjectDeck'
import FadeInOnScroll from './components/FadeInOnScroll'
import About from './components/About'
import Collapsible from './components/Collapsible'

// assets
import signature from "./assets/signature.png"
import bg from "./assets/bg.gif"

function App() 
{
  return (
    <>
      <div className="box">
        <div className="off-screen-menu">
            <a href="">Home.</a>
            <a href="#about">About.</a>
            <a href="#projects">Projects.</a>
            <a href="mailto:isaiah.dakin@gmail.com">Contact.</a>
        </div>

        <div className="logo" onClick={() => window.location.href=''} title='isaiahdakin.ca'>
          <img src={signature} alt="My signature."/>
        </div>

        <nav>
            <div className="ham-menu" onClick={() => (document.querySelector('.off-screen-menu').classList.toggle('active'), document.querySelector('.ham-menu').classList.toggle('active'))}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <div className="background">
          <img src={bg} alt='A rainy city skyline.'/>
        </div> 

        {/* home page */}
        <div className="sub-box-1">
          <FadeInOnScroll>
            <Welcome />
          </FadeInOnScroll>
        </div>
        
        {/* projects */}
        <FadeInOnScroll>
        <div className="sub-box-1-1" id='projects'>
            <h1>My Projects.</h1>
            <ProjectDeck />
        </div>
        </FadeInOnScroll>

        {/* skills */}
        <FadeInOnScroll>
        <div className="sub-box-1-1" id='about'>
            <h1>Skills & Experience.</h1>
            <Collapsible>
              <About>
                <p>
                    As a student, I can't offer a hefty list of prior professional experience. However, through my
                    education and personal projects, I have gained a sizeable quantity of skills and experiences in the
                    field of software development.
                    <br/>
                    &emsp;In addition to technical experience, I have over 7 years of experience working with customers in
                    'service' type positions at multiple different companies.
                    <br/>
                    &emsp;I have an excellent work ethic and hold pride in my work, both inside & outside of the workplace.
                </p>

                <p className="skill-p">
                    <span>Languages:</span><br/>
                    &#8594; Java <br/>
                    &#8594; Python <br/>
                    &#8594; (Java/Type)Script<br/>
                    &#8594; Racket (Lisp)<br/>
                    &#8594; C# <br/>
                    &#8594; C <br/>
                    &#8594; ASM & ML <br/>
                </p>

                <p className="skill-p">
                    <span>Other:</span><br/>
                    &#8594; Windows (7/10) <br/>
                    &#8594; Linux (Ubuntu/Mint)<br/>
                    &#8594; Godot <br/>
                    &#8594; Unity <br/>
                    &#8594; React.js <br/>
                    &#8594; SQL (MariaDB) <br/>
                    &#8594; Git (Raw & Desktop) <br/>
                </p>
              </About>
            </Collapsible>
        </div>
        </FadeInOnScroll>

        {/* general */}
        <FadeInOnScroll>
        <div className="sub-box-1-1">
          <h1>The Boring Stuff.</h1>
          <Collapsible>
            <About>
              <p>
                stuff about me idk...
              </p>
            </About>
          </Collapsible>
        </div>
        </FadeInOnScroll>

      </div>
    </>
  )
}

export default App