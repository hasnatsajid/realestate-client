const PropertyDescription = ({ onChangeInput }) => {
  return (
    <div className="property-description">
      <div className="title">
        <h1>Listing Description</h1>
      </div>

      <div className="description">
        <div className="form-input">
          <div className="label">
            <label htmlFor="title">Title</label>
          </div>
          <div className="input">
            <input type="text" name="title" onChange={onChangeInput} />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Description</label>
          </div>
          <div className="input">
            <textarea name="description" onChange={onChangeInput}></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;
