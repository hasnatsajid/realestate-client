import { useState } from 'react';

const PropertyLocation = ({ setNewProperty, newProperty }) => {
  const [location, setLocation] = useState({});

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setLocation((prev) => ({
      ...prev,
      [name]: value,
    }));

    setNewProperty((prev) => ({
      ...prev,
      location: location,
    }));
    console.log(newProperty);
  };

  return (
    <div className="property-pricing">
      <div className="title">
        <h1>Location</h1>
      </div>

      <div className="pricing">
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Country </label>
          </div>
          <div className="input">
            <input type="text" placeholder="" name="country" onChange={onChangeInput} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">State </label>
          </div>
          <div className="input">
            <input type="text" placeholder="" name="state" onChange={onChangeInput} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">City </label>
          </div>
          <div className="input">
            <input type="text" placeholder="" name="city" onChange={onChangeInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLocation;
