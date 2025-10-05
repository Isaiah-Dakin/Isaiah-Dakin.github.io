import '../style/button_deck.css'

import spotify from '../assets/icon-spotify.png'
import steam from '../assets/icon-steam.png'
import instagram from '../assets/icon-instagram.webp'
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

            <div className="b-d-button" title="@Dr.Zeus">
                <img src={steam} alt="Logo owned by Valve."/>
                <button onClick={() => window.location.href='https://steamcommunity.com/id/Doc_Zeus/'} />
            </div>

            <div className="b-d-button" title="@Sai">
                <img src={spotify} alt="Logo owned by Spotify."/>
                <button onClick={() => window.location.href='https://open.spotify.com/user/r74p9kub0d9sqf0x2whfaiamh?si=a17ca90944a4400a'} />
            </div>
        </div>
    </>
  )
}

export default ButtonDeck