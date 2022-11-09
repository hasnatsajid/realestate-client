import { useState } from 'react';

const PropertyContact = ({ setNewProperty, onChangeInput, newProperty }) => {
  const [agent, setAgent] = useState({});

  const onChangeAgent = (e) => {
    const { name, value } = e.target;

    if (name !== 'image') {
      setAgent((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      const image = value.slice(value.lastIndexOf('\\') + 1);

      setAgent((prev) => ({
        ...prev,
        [name]: image,
      }));
    }

    setNewProperty((prev) => ({
      ...prev,
      agent: agent,
    }));
  };

  return (
    <div className="property-contact">
      <div className="title">
        <h1>Contact details</h1>
      </div>

      <div className="sub-title">
        <h3>Enter your contact details below for billing, and listing purposes.</h3>
      </div>

      <div className="contact">
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Name </label>
          </div>
          <div className="input">
            <input type="text" name="name" placeholder="" onChange={onChangeAgent} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Email</label>
          </div>
          <div className="input">
            <input type="email" name="email" placeholder="" onChange={onChangeAgent} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Mobile number </label>
          </div>
          <div className="input">
            <input type="tel" name="phone" placeholder="" onChange={onChangeAgent} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Profile Pic </label>
          </div>
          <div className="input">
            <input type="file" name="image" placeholder="" onChange={onChangeAgent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyContact;
