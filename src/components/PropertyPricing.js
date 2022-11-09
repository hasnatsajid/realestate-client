const PropertyPricing = ({ onChangeInput }) => {
  return (
    <div className="property-pricing">
      <div className="title">
        <h1>Pricing</h1>
        {/* <h1>Availability & pricing</h1> */}
      </div>

      <div className="sub-title">{/* <h3>Make your property easier to find by selecting all the features below that apply.</h3> */}</div>

      <div className="pricing">
        {/* <div className="form-input">
          <div className="label">
            <label htmlFor="">Available from </label>
          </div>
          <div className="input">
            <input type="number" placeholder="sqm" name="listedAt" onChange={onChangeInput} />
          </div>
        </div> */}
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Price </label>
          </div>
          <div className="input">
            <input type="number" placeholder="$" name="price" onChange={onChangeInput} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyPricing;
