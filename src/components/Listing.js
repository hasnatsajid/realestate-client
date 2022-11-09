import { Link } from 'react-router-dom';
import { BiBed, BiBath, BiCar } from 'react-icons/bi';
import { FaHouseUser } from 'react-icons/fa';

const Listing = ({ img, Agent, listing }) => {
  return (
    <article className="listing">
      <Link to={`/posts/${listing._id}`}>
        <div className="listing__container">
          <div className="listing__agent">
            <div className="listing__agent-name">
              <span>
                <FaHouseUser />
              </span>
              {listing.agent.name}
            </div>
            <div className="listing__agent-company">
              <img src={listing.agent.image} />
              {/* <Image src={listing.agent.image} layout="fill" /> */}
            </div>
          </div>
          <div className="listing__featured-img">
            <img src={listing.photos[0]} />
          </div>
          <div className="listing__details">
            <div className="listing__details-price">${listing.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</div>
            <div className="listing__details-title">{listing.title}</div>
            <div className="listing__details-additional">
              <div className="prop">
                <BiBed />
                <span className="beds">{listing.beds}</span>
              </div>
              <div className="prop">
                <BiBath />
                <span className="baths">{listing.baths}</span>
              </div>
              <div className="prop">
                <BiCar />
                <span className="parking">{listing.parking}</span>
              </div>
              <span className="property-type">{listing.property_type}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Listing;
