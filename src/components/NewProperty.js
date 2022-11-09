import { useState } from 'react';
// import { newPropertyOptions } from '../utils/newPropertyOptions';
import PropertyAmenities from './PropertyAmenities';
import PropertyContact from './PropertyContact';
import PropertyDescription from './PropertyDescription';
import PropertyDetail from './PropertyDetail';
import PropertyImages from './PropertyImages';
import PropertyLocation from './PropertyLocation';
import PropertyPricing from './PropertyPricing';
import PropertySubmit from './PropertySubmit';
import Divider from './UI/Divider';

const NewProperty = () => {
  const [newProperty, setNewProperty] = useState({});

  const onSubmitProperty = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/listings', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProperty),
    });

    const result = await response.json();
    console.log(result);
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setNewProperty((prev) => ({
      ...prev,
      [name]: value,
    }));

    console.log(newProperty);
  };

  return (
    <div className="new-property">
      <div className="detail-wrapper">
        <form onSubmit={onSubmitProperty}>
          <PropertyDetail setNewProperty={setNewProperty} newProperty={newProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyAmenities setNewProperty={setNewProperty} newProperty={newProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyPricing setNewProperty={setNewProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyDescription setNewProperty={setNewProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyImages newProperty={newProperty} setNewProperty={setNewProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyContact setNewProperty={setNewProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertyLocation newProperty={newProperty} setNewProperty={setNewProperty} onChangeInput={onChangeInput} />
          <Divider />
          <PropertySubmit />
        </form>
      </div>
    </div>
  );
};

export default NewProperty;
