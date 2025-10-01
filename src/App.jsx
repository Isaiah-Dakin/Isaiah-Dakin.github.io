// Style
import './style/app.css'
import './style/nav.css'
import './style/fade-in-element.css'

// components
import Welcome from './components/Welcome'
import ProjectDeck from './components/ProjectDeck'
import FadeInOnScroll from './components/FadeInOnScroll'

// assets
import signature from "./assets/signature.png"
import bg from "./assets/bg.gif"

function App() 
{
  return (
    <>
      <div class="box">
        <div class="off-screen-menu">
            <a href="">Home.</a>
            <a href="">About.</a>
            <a href="">Projects.</a>
            <a href="mailto:isaiah.dakin@gmail.com">Contact.</a>
        </div>

        <div class="logo" onClick={() => window.location.href=''} title='isaiahdakin.ca'>
          <img src={signature} alt="My signature."/>
        </div>

        <nav>
            <div class="ham-menu" onClick={() => (document.querySelector('.off-screen-menu').classList.toggle('active'), document.querySelector('.ham-menu').classList.toggle('active'))}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <div class="background">
          <img src={bg} alt='A rainy city skyline.'/>
        </div> 

        <div class="sub-box-1">
          <FadeInOnScroll>
            <Welcome />
          </FadeInOnScroll>
        </div>

        <div class="sub-box-2">
          <FadeInOnScroll>
            <h1>My Projects.</h1>
            <ProjectDeck />
          </FadeInOnScroll>
        </div>
        
      </div>
    </>
  )
}

export default App