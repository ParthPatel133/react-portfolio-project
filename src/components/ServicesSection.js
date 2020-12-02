import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () => {
  return (
    <div>
      <div className='services'>
        <div className='description'>
          <h2>
            High <span>quality</span> services
          </h2>
          <div className='cards'>
            <div className='card'>
              <div className='icon'>
                <img src={clock} alt='clock-icon' />
                <h3>Efficient</h3>
              </div>
              <p>Your project will done efficiently.</p>
            </div>
            <div className='card'>
              <div className='icon'>
                <img src={teamwork} alt='teamwork-icon' />
                <h3>Teamwork</h3>
              </div>
              <p>Experienced Team</p>
            </div>
            <div className='card'>
              <div className='icon'>
                <img src={diaphragm} alt='diaphragm-icon' />
                <h3>Diaphragm</h3>
              </div>
              <p>Your project will done efficiently.</p>
            </div>
            <div className='card'>
              <div className='icon'>
                <img src={money} alt='money-icon' />
                <h3>Affordable</h3>
              </div>
              <p>Affordable price</p>
            </div>
          </div>
        </div>
      </div>
      <img src={home2} alt='video filming' />
    </div>
  );
};

export default ServicesSection;
