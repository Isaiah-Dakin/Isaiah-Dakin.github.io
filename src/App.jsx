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
            <a href="index.html">home</a>
            <a href="index.html#about-container">about</a>
            <a href="index.html#projects-container">projects</a>
            <a href="contact.html">contact</a>
        </div>

        <div class="logo" onClick={() => window.location.href='https://isaiahdakin.ca/'} />

        <nav>
            <div class="ham-menu">
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