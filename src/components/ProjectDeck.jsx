import '../style/project_deck.css'

import udbg from '../assets/ud-background-2.jpg'
import udlg from '../assets/logo-ud-yellow.png'

import idbg from '../assets/id-background.jpg'
import idlg from '../assets/signature.png'

import udwbg from '../assets/udw-background.jpg'
import udwlg from '../assets/udca.png'

function ProjectDeck() 
{
    return (
    <>
        <div className='p-deck'>
            <div className="p-d-button" title="https://ultradungeon.ca/about.html" onClick={() => window.location.href='https://ultradungeon.ca/about.html'}>
                <img className="bg" src={udbg}/>
                <div className="lg-holder">
                    <img className="lg" src={udlg}/>
                </div>
                <p>
                    The original indie title ULTRADUNGEON. In development since 2023, created with the Godot 4.3 engine & C# scripting.
                </p>
            </div>

            <div className="p-d-button" title="https://isaiahdakin.ca" onClick={() => window.location.href=''}>
                <img className="bg" src={idbg}/>
                <div className="lg-holder">
                    <img className="lg" src={idlg}/>
                </div>
                <p>
                    My very own web-page, an SPA created using React.js and Vite. Hosted through GitHub pages.
                </p>
            </div>

            <div className="p-d-button" title="https://ultradungeon.ca" onClick={() => window.location.href='https://ultradungeon.ca'}>
                <img className="bg" src={udwbg}/>
                <div className="lg-holder">
                    <img className="lg" src={udwlg}/>
                </div>
                <p>
                    A dive into simple web dev focusing on ULTRADUNGEON. Created with HTML/CSS & GitHub pages.
                </p>
            </div>
        </div>
    </>
  )
}

export default ProjectDeck