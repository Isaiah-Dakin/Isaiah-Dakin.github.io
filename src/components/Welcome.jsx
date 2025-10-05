import ButtonDeck from './ButtonDeck'
import '../style/welcome.css'
import me from '../assets/me.jpg'    

function Welcome() 
{
    return (
    <>
        <div className='welcome'>
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