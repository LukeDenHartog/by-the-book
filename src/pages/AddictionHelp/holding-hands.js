import Image from 'react-bootstrap/Image';
import holdingHands from '../../assets/images/holdHands.jpg'

function HoldingHandsModule() {
  return (
    <div class="img-flexbox-container">
  <Image src={holdingHands} fluid id="addiction-hold-hands"/>
    </div>
  )
}

export default HoldingHandsModule;