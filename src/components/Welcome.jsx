import ButtonDeck from './ButtonDeck'
import '../style/welcome.css'
import me from '../assets/me.jpg'    

function Welcome() 
{
    return (
    <>
        <div class='welcome'>
            <div class="portrait">
                <div class="portrait-card">
                    <div class="portrait-card-inner">
                        
                        <div class="portrait-front">
                            <img src={me} alt="A picture of me." class="portrait-img"/>
                        </div>

                        <div class="portrait-back">
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