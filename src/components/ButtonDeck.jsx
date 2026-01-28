import '../style/button_deck.css'

import instagram from '../assets/icon-ig.png'
import linkedin from '../assets/icon-linkedin.png'
import github from '../assets/icon-github.png'

function ButtonDeck() 
{
    return (
    <>
        <div className='b-deck'>
            <div className="b-d-button" title="GitHub/Isaiah-Dakin" alt="Logo owned by GitHub.">
                <img src={github}/>
                <button onClick={() => window.location.href='https://github.com/Isaiah-Dakin'} />
                
            </div>

            <div className="b-d-button" title="In/isaiahdakin">
                <img src={linkedin} alt="Logo owned by LinkedIn."/>
                <button onClick={() => window.location.href='https://www.linkedin.com/in/isaiahdakin'} />
            </div>

            <div className="b-d-button" title="@isaiahdakin">
                <img src={instagram} alt="Logo owned by Instagram."/>
                <button onClick={() => window.location.href='https://www.instagram.com/isaiahdakin'} />
            </div>
        </div>
    </>
  )
}

export default ButtonDeck