// Style
import './style/app.css'
import './style/nav.css'

// components
import Welcome from './components/Welcome'
import ProjectDeck from './components/ProjectDeck'

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

        <div class="logo" onClick={() => window.location.href=''} title='isaiahdakin.ca' alt="My signature."/>

        <nav>
            <div class="ham-menu" onClick={() => (document.querySelector('.off-screen-menu').classList.toggle('active'), document.querySelector('.ham-menu').classList.toggle('active'))}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <div class="background-overlay"> 
          <div class="background"/> 
        </div>

        <div class="sub-box-1">
          <Welcome />
        </div>
        <div class="sub-box-2">
          <ProjectDeck />
        </div>

      </div>
    </>
  )
}

export default App