import '../styles/components/landing.scss';
//import iconInfo from '../images/info2.png';
//import iconTeam from '../images/team2.png';
import { Link } from 'react-router-dom';
function Landing() {
  return (
    <>
      <div className='divStars'>
        <div className='bubbles'>
          <span styles='--i:11;'></span>
          <span styles='--i:12;'></span>
          <span styles='--i:24;'></span>
          <span styles='--i:10;'></span>
          <span styles='--i:14;'></span>
          <span styles='--i:23;'></span>
          <span styles='--i:18;'></span>
          <span styles='--i:16;'></span>
          <span styles='--i:19;'></span>
          <span styles='--i:20;'></span>
          <span styles='--i:22;'></span>
          <span styles='--i:25;'></span>
          <span styles='--i:18;'></span>
          <span styles='--i:21;'></span>
          <span styles='--i:15;'></span>
          <span styles='--i:13;'></span>
          <span styles='--i:26;'></span>
          <span styles='--i:17;'></span>
          <span styles='--i:13;'></span>
          <span styles='--i:28;'></span>
        </div>
      </div>
      <div className='btnLanding'>
        <Link to='/preview' className='btnStart'>
          <span id='span1'></span>
          <span id='span2'></span>
          <span id='span3'></span>
          <span id='span4'></span>
          Comenzar
        </Link>
      </div>
    </>
  );
}
export default Landing;
