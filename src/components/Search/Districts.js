import { IoLocationOutline } from 'react-icons/io5';
import { TiArrowBack } from 'react-icons/ti';

const Districts = ({ districts, goBack }) => {
  return (
    <div className="districts">
      <div className="item" onClick={goBack}>
        <div className="back">
          <TiArrowBack />
          <p>Select other state</p>
        </div>
      </div>
      {districts &&
        districts.map((district) => (
          <div className="item" key={district}>
            <span>
              <IoLocationOutline />
            </span>
            <div className="area">{district}</div>
          </div>
        ))}
    </div>
  );
};

export default Districts;
