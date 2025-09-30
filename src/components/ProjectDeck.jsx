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
        <div class='p-deck'>
            <div class="p-d-button" title="https://ultradungeon.ca/about.html" onClick={() => window.location.href='https://ultradungeon.ca/about.html'}>
                <img class="bg" src={udbg}/>
                <div class="lg-holder">
                    <img class="lg" src={udlg}/>
                </div>
                <p>
                    The original indie title ULTRADUNGEON. In development since 2023, created with the Godot 4.3 engine & C# scripting.
                </p>
            </div>

            <div class="p-d-button" title="https://isaiahdakin.ca" onClick={() => window.location.href=''}>
                <img class="bg" src={idbg}/>
                <div class="lg-holder">
                    <img class="lg" src={idlg}/>
                </div>
                <p>
                    My very own web-page, an SPA created using React.js and Vite. Hosted through GitHub pages.
                </p>
            </div>

            <div class="p-d-button" title="https://ultradungeon.ca" onClick={() => window.location.href='https://ultradungeon.ca'}>
                <img class="bg" src={udwbg}/>
                <div class="lg-holder">
                    <img class="lg" src={udwlg}/>
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