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
                    service type positions at multiple different companies.
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
            <h1>A Brief Introduction.</h1>
            <Collapsible>
              <About>
                <p className='full-p'>
                  Hi I'm Isaiah, 
                  <br/><br/>
                  A 23 year old computer science student in my final year of studies at UNB's Fredericton campus.
                  I'm passionate about the field of software development & following graduation will be seeking junior level 
                  development, research, and IT positions.
                  <br/>
                  &emsp;I took an interest in software from a young age, attending private programming lessons as well as
                  programming courses in school. Ever since then, my passion for programming has only grown. My primary project 
                  today is the indie title ULTRADUNGEON which I have been co-developing with a fellow BCS graduate & my long-time 
                  friend <a href='https://nathanyoung.ca'>Nathan Young</a> since early 2023. Please navigate to the projects tab 
                  to read more about the project.
                  <br/>
                  &emsp;As a computer science student and hobbyist developer, I spend a lot of my time indoors. In addition to creating my own 
                  video game, I consider myself an avid "gamer". However, my personal interests extend beyond electronics! I'm 
                  a big-time nature enjoyer, spending time camping, hiking, & exploring the outdoors. Furthermore, I consider myself a novice 
                  gardener, enthusiastic guitar player, & have a big love for dogs (especially mine).
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