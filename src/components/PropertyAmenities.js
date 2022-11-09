import { useState } from 'react';

const PropertyAmenities = ({ setNewProperty, newProperty }) => {
  const [features, setFeatures] = useState([]);

  const onChangeCheckbox = (e) => {
    if (e.target.checked === true) {
      setFeatures((prev) => [...prev, e.target.name]);
    } else {
      setFeatures((elements) => elements.filter((el) => el !== e.target.name));
    }

    setNewProperty((prev) => ({
      ...prev,
      ['amenities']: features,
    }));
  };

  return (
    <div className="property-amenities">
      <div className="title">
        <h1>Property Features</h1>
      </div>

      <div className="sub-title">
        <h3>Make your property easier to find by selecting all the features below that apply.</h3>
      </div>

      <div className="amenities">
        <div className="amenities-wrapper">
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="balcony" id="" onChange={onChangeCheckbox} />
            </div>
            <label htmlFor="balcony">Balcony</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="furnished" id="" onChange={onChangeCheckbox} />
            </div>
            <label htmlFor="furnished">Furnished</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="swimming pool" id="" onChange={onChangeCheckbox} />
            </div>
            <label htmlFor="swimming">Swimming pool</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="garage" id="" onChange={onChangeCheckbox} />
            </div>
            <label htmlFor="garage">Garage</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="solar" id="" onChange={onChangeCheckbox} />
            </div>
            <label htmlFor="solar">Solar</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAmenities;
