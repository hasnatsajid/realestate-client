import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';

import { BiBed, BiBath, BiCar, BiRuler, BiCctv } from 'react-icons/bi';
import { FaHouseUser, FaSwimmingPool } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { MdSecurity, MdOutlinePark } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';

import { useSelector, useDispatch } from 'react-redux';

import house1 from '../images/houses/house1.jpg';
import house2 from '../images/houses/house2.jpg';
import house3 from '../images/houses/house3.jpg';
import house4 from '../images/houses/house4.jpg';
import { getListing } from '../actions/listings';
import Layout from './UI/Layout';

const amenities = {
  garage: <GiHomeGarage />,
  park: <MdOutlinePark />,
  security: <MdSecurity />,
  'swimming pool': <FaSwimmingPool />,
};

const ListingDetail = () => {
  const { listing, isLoading } = useSelector((state) => state.listings);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListing(id));
  }, [id]);

  if (!listing) return null;

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <Layout>
      <div className="detail">
        {/* Image Gallery */}

        <div className="title">
          {listing.title}, <span> {listing.location.state}</span>
        </div>

        <Swiper
          // spaceBetween={50}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
        >
          {listing.photos.map((image) => {
            return (
              <SwiperSlide key={image}>
                <img src={image} className="slider-img" alt="" />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>

        <div className="listing-content">
          <div className="wrapper">
            <div className="main-content">
              <div className="price">$ {listing.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}</div>
              <div className="meta">
                <div className="beds">
                  <BiBed />
                  <span>{listing.beds}</span>
                </div>
                <div className="baths">
                  <BiBath />
                  <span>{listing.baths}</span>
                </div>
                <div className="parking">
                  <BiCar />
                  <span>{listing.parking}</span>
                </div>
                <div className="area">
                  <BiRuler />
                  <span>{listing.area.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')} sqft</span>
                </div>
              </div>
              <div className="description">
                <h3>Description</h3>
                <div>{listing.description}</div>
              </div>
              <div className="amenities">
                <h3>Amenities</h3>
                <div className="wrapper">
                  {listing.amenities.map((amenity) => (
                    <div className="amenity" key={amenity}>
                      {amenities[amenity.toLowerCase()]}
                      <span>{amenity}</span>
                    </div>
                  ))}
                  {/* <div className="amenity">
                  <FaSwimmingPool />
                  <span>Swimming Pool</span>
                </div>
                <div className="amenity">
                  <MdSecurity />
                  <span>24 hour security</span>
                </div>
                <div className="amenity">
                  <GiHomeGarage />
                  <span>Garage</span>
                </div>
                <div className="amenity">
                  <MdOutlinePark />
                  <span>Park</span>
                </div> */}
                </div>
              </div>
            </div>
            <div className="agent-section">new</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
