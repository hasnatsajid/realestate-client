import MainSearch from '../MainSearch';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="hero">
        <div className="home-container">
          <div className="search-bar">
            <h1>Search your property</h1>
            <MainSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
