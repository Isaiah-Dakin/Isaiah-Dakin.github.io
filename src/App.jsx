// Style
import './style/app.css'
import './style/nav.css'

// components
import React from 'react'
import Welcome from './components/Welcome'
import ProjectDeck from './components/ProjectDeck'
import FadeInOnScroll from './components/FadeInOnScroll'
import About from './components/About'
import Collapsible from './components/Collapsible'

// assets
import signature from "./assets/signature.png"
import bg from "./assets/bg.gif"
import resume from "./assets/Isaiah-JC-D-Resume(redacted).pdf"

function App() 
{
  return (
    <>
      <nav>
      <div className="logo">
        <div className='logo-img-container' onClick={() => window.location.href=''} title='isaiahdakin.ca'>
          <img src={signature} alt="My signature."/>
        </div>
      </div>
        <div className='nav-button-container'>
          <div className='nav-button'>
            <a href='#about' title='About me.'>About</a>
          </div>
          <div className='nav-button'>
            <a href='#projects' title='My projects.'>Projects</a>
          </div>
          <div className='nav-button'>
            <a href={resume} title='My resume (redacted version).'>Resume</a>
          </div>
          <div className='nav-button'>
            <a href='mailto:isaiah.dakin@gmail.com' title='Contact me.'>Contact</a>
          </div>
        </div>
      </nav>

      <div className="box">
        {/* home page */}
        <FadeInOnScroll>
        <div className="background">
          <img src={bg} alt='A rainy city skyline.'/>
        </div> 

        <div className="sub-box-1">
        <Welcome />
        </div>

        </FadeInOnScroll>
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
                    &emsp; As a university student, I do not offer a hefty list of prior workplace experience. However, through my
                    university education and personal projects, I have gained a sizeable quantity of skills and experiences in the
                    field of software development.
                    <br/><br/>
                    Please see the provided list of my technial skills and technologies that I have experience with. 
                    <br/><br/>
                    In addition to technical experience, I have over 7 years of experience serving customers in
                    service-type positions at multiple companies.
                </p>

                <p className="skill-p">
                    <span>Languages:</span><br/>
                    &#8594; Java <br/>
                    &#8594; Python <br/>
                    &#8594; [Java & Type] Script<br/>
                    &#8594; Racket [Lisp]<br/>
                    &#8594; C# <br/>
                    &#8594; HTML & CSS <br/>
                    &#8594; C <br/>
                    &#8594; ASM & ML <br/>
                </p>

                <p className="skill-p">
                    <span>Other:</span><br/>
                    &#8594; Windows [7&#8594;11] <br/>
                    &#8594; Linux [Ubuntu & Mint] <br/>
                    &#8594; Godot [v4.x - .NET] <br/>
                    &#8594; Unity <br/>
                    &#8594; React.js <br/>
                    &#8594; Flask <br/>
                    &#8594; SQL [MariaDB] <br/>
                    &#8594; Git [Raw & Desktop] <br/>
                </p>
              </About>
            </Collapsible>
        </div>
        </FadeInOnScroll>

        {/* general */}
        <FadeInOnScroll>
          <div className="sub-box-1-1">
            <h1>A Brief Introduction.</h1>
            <Collapsible>
              <About>
                <p className='full-p'>
                  Nice to meet you, I'm Isaiah, 
                  <br/><br/>
                  &emsp;I am a 23 year old computer science student in the final term of my undergraduate studies at UNB's Fredericton campus.
                  I am deeply passionate about the field of software development & am currently seeking opportunities to broaden my experience
                  within the computer science discipline in a professional context.
                  <br/><br/>
                  I took an interest in software from a young age, attending private programming lessons as well as
                  programming courses in middle-school. Since then, my passion for programming has only grown. My primary project 
                  today is the indie video game ULTRADUNGEON. I have been co-developing ULTRADUNGEON with a fellow BCS graduate & my long-time 
                  friend <a href='https://nathanyoung.ca'>Nathan Young</a> since early 2023, and continue to make frequent additions.
                  Please navigate to the projects tab to read more about ULTRADUNGEON.
                  <br/><br/>
                  In addition to ULTRADUNGEON, I have taken part in multiple other personal and academic projects primarily involving web
                  development and HCI research. Feel free to check out my resume for details regarding these projects.
                  <br/><br/>
                  Thanks for visiting my web page!
                  <br/>
                  Isaiah :)
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