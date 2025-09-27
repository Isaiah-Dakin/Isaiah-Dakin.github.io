// Style
import './style/app.css'
import './style/nav.css'

// components
import Welcome from './components/Welcome'

function App() 
{
  return (
    <>
      <div class="box">
        <div class="off-screen-menu">
            <a href="">home</a>
            <a href="">about</a>
            <a href="">projects</a>
            <a href="mailto:isaiah.dakin@gmail.com">contact</a>
        </div>

        <div class="logo" onClick={() => window.location.href=''} title='isaiahdakin.ca' alt="My signature."/>

        <nav>
            <div class="ham-menu" onClick={() => (document.querySelector('.off-screen-menu').classList.toggle('active'), document.querySelector('.ham-menu').classList.toggle('active'))}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>

        <div class="page-1">
          <div class="background-overlay"> 
            <div class="background"/> 
          </div>
          
          <Welcome />
        </div>
      </div>
    </>
  )
}

export default App