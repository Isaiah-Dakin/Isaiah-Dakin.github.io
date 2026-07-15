import ButtonDeck from './ButtonDeck'
import '../style/welcome.css'
import me from '../assets/me.jpg' 
import resume from "../assets/Isaiah-JC-D-Resume(redacted).pdf"
import signature from "../assets/signature.png"   

function Welcome() 
{
    return (
    <>
        <div className='welcome'>

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

            <div className="portrait">
                <div className="portrait-card">
                    <div className="portrait-card-inner">
                        
                        <div className="portrait-front">
                            <img src={me} alt="A picture of me." className="portrait-img"/>
                        </div>

                        <div className="portrait-back">
                            <h2> contact: <br/> isaiah.dakin@gmail.com </h2>
                        </div>
                    </div>
                </div>
            </div>

            <ButtonDeck />
        </div>
    </>
  )
}

export default Welcome