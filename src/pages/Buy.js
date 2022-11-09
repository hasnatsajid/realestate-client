import AdvanceSearch from '../components/AdvanceSearch';
import Layout from '../components/UI/Layout';
import Listing from '../components/Listing';

import house1 from '../images/houses/house1.jpg';
import house2 from '../images/houses/house2.jpg';

import Agent1 from '../images/realestates/newdoor.jpg';
// import Agent2 from '/images/realestates/penhomes.jpg';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyListings } from '../actions/listings';

const Buy = () => {
  const { listings, isLoading } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buyListings());
  }, []);

  if (!listings.length && !isLoading) return 'No Listings';

  return (
    <div className="buy">
      <Layout>
        <AdvanceSearch />
        <div className="listings">
          <div className="listings__container">
            <div className="category-info">
              <h3>{listings.length} Results of Property For Sale in Thailand</h3>
              {listings && listings.map((listing) => <Listing key={listing._id} img={house1} listing={listing} Agent={Agent1} />)}
              {/* <Listing img={house2} listing={listing} Agent={'/images/realestates/penhomes.jpg'} /> */}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Buy;
