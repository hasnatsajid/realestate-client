import { Link } from 'react-router-dom';

import { CgArrowLongRightC } from 'react-icons/cg';
import House1 from '../images/houses/house1.jpg';
import House2 from '../images/houses/house2.jpg';
import House3 from '../images/houses/house3.jpg';
import House4 from '../images/houses/house4.jpg';

const LatestProjects = () => {
  return (
    <div className="latest">
      <div className="latest__wrapper">
        <div className="latest__heading">
          <div className="latest__heading-title">
            <h1>Latest Projects</h1>
          </div>
          <div className="latest__heading-more">
            <Link to="/">
              <span>View More</span>
              <CgArrowLongRightC />
            </Link>
          </div>
        </div>
        <div className="latest__listings">
          <div className="latest__listings-item">
            <img src={House1} alt="house 1" />
            <h3>Bangkok beautiful house</h3>
            <p>A beautiful house near nonthaburi city</p>
          </div>
          <div className="latest__listings-item">
            <img src={House2} alt="house 2" />
            <h3>Phuket beautiful house</h3>
            <p>A beautiful house near nonthaburi city</p>
          </div>
          <div className="latest__listings-item">
            <img src={House3} alt="house 3" />
            <h3>Pattaya city house</h3>
            <p>A beautiful house near nonthaburi city</p>
          </div>
          <div className="latest__listings-item">
            <img src={House4} alt="house 4" />
            <h3>Nonthaburi house</h3>
            <p>A beautiful house near nonthaburi city</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
