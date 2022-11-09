import { useEffect } from 'react';
import { useState } from 'react';

const PropertyDetail = ({ onChangeInput, setNewProperty, newProperty }) => {
  const [beds, setBeds] = useState(1);
  const [baths, setBaths] = useState(1);
  const [parking, setParking] = useState(1);

  const onChangeParam = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setNewProperty((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(newProperty);
  };

  useEffect(() => {
    setNewProperty((prev) => ({
      ...prev,
      beds: beds,
    }));
  }, [beds]);
  useEffect(() => {
    setNewProperty((prev) => ({
      ...prev,
      baths: baths,
    }));
  }, [baths]);
  useEffect(() => {
    setNewProperty((prev) => ({
      ...prev,
      parking: parking,
    }));
  }, [parking]);

  return (
    <div className="property-details">
      <div className="title">
        <h1>Property Details</h1>
      </div>

      <div className="sub-title">
        <h3>What type of property do you have?</h3>
      </div>

      <div className="types">
        <select name="property_type" id="property_type" onChange={onChangeParam}>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
      <div className="beds">
        <h3>Bedrooms</h3>
        <div className="counter">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setBeds((prev) => ++prev);
            }}
          >
            <div className="plus">+</div>
          </button>
          <div className="count" name="beds">
            {beds}
          </div>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setBeds((prev) => prev && --prev);
            }}
          >
            <div className="minus">-</div>
          </button>
        </div>
      </div>
      <div className="baths">
        <h3>Bathrooms</h3>
        <div className="counter">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setBaths((prev) => ++prev);
            }}
          >
            <div className="plus">+</div>
          </button>
          <div className="count" name="baths">
            {baths}
          </div>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setBaths((prev) => prev && --prev);
            }}
          >
            <div className="minus">-</div>
          </button>
        </div>
      </div>
      <div className="parking">
        <h3>Parking Spaces</h3>
        <div className="counter">
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setParking((prev) => ++prev);
            }}
          >
            <div className="plus">+</div>
          </button>
          <div className="count" name="parking">
            {parking}
          </div>
          <button
            className="button"
            onClick={(e) => {
              e.preventDefault();
              setParking((prev) => prev && --prev);
            }}
          >
            <div className="minus">-</div>
          </button>
        </div>
      </div>

      <div className="form-input">
        <div className="label">
          <label htmlFor="">Category </label>
        </div>
        <div className="input">
          <input type="text" placeholder="sqm" name="type" onChange={onChangeInput} />
        </div>
      </div>

      <div className="form-input">
        <div className="label">
          <label htmlFor="">Land area (optional) </label>
        </div>
        <div className="input">
          <input type="number" placeholder="sqm" name="area" onChange={onChangeInput} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
