import Image from 'react-bootstrap/Image';
import holdingHands from '../../assets/images/holdHands.jpg';


function HoldingHandsModule() {
  return (
    <div className="holding-hands-container">
      <div className="holding-hands-content">
        <section id="title-wrapper">
          <h1 id="main-title" className="text-css">Get help with your addiction</h1>
          <p id="title-paragraph" className="text-css">If you or someone you know is concerned about gambling habits or shows signs of gambling addiction, seeking professional help and support is crucial. Many resources and organizations provide assistance for individuals struggling with gambling-related issues. Getting help with gambling addiction involves recognizing the problem, seeking professional support, and accessing resources designed to assist in recovery. Here are steps to take:</p>
        </section>
      </div>
      <Image src={holdingHands} fluid id="addiction-hold-hands" />
    </div>
  );
}

export default HoldingHandsModule;
