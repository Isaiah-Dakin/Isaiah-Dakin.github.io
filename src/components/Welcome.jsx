import ButtonDeck from './ButtonDeck'
import '../style/welcome.css'
import me from '../assets/me.jpg'    

function Welcome() 
{
    return (
    <>
        <div class='welcome'>
            <div class="portrait">
                <img src={me} alt="A picture of me." class="portrait-img"/>
            </div>

            <ButtonDeck />
        </div>
    </>
  )
}

export default Welcome