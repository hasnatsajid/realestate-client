import React, { useState, useEffect, useRef } from 'react';
import SearchBlock from './SearchBlock';

import { IoLocationOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import Modal from './UI/Modal';

import { provinces } from '../data/states';
import Districts from './Search/Districts';

const MainSearch = () => {
  const refOne = useRef(null);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [states, setStates] = useState([]);
  const [statesActive, setStatesActive] = useState(false);
  const [districtsActive, setDistrictsActive] = useState(false);
  const [districts, setDistricts] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [buyActive, setBuyActive] = useState(true);

  const toggleFilter = () => {
    setIsFilterActive((prev) => !prev);
  };

  const onChangingCategory = () => {
    setBuyActive((prev) => !prev);
  };

  const onStateSearch = (e) => {
    console.log('on state search');
    e.preventDefault();
    setStatesActive(true);
  };

  const onDistrictSearch = (districts) => {
    setDistricts(districts);
    setStatesActive(false);
    setDistrictsActive(true);
  };

  const goBack = (e) => {
    e.preventDefault();
    setStatesActive(true);
    setDistrictsActive(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
  }, []);

  const handleOutsideClick = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      // console.log('clicked outside');
      setDrawerOpen(false);
    }
    // else {
    // console.log('clicked inside');
    // setDrawerOpen(true);
    // }
  };

  useEffect(() => {
    setStates(provinces);
  }, []);

  return (
    <div className="main-search" ref={refOne}>
      <div className="search-container">
        <div className="search-items">
          <div className={`search-item ${buyActive && 'active'}`} onClick={onChangingCategory}>
            <p>Buy</p>
            <span></span>
          </div>
          <div className={`search-item ${!buyActive && 'active'}`} onClick={onChangingCategory}>
            <p>Rent</p>
            <span></span>
          </div>
        </div>
        <div className="search-block">
          <SearchBlock setDrawerOpen={setDrawerOpen} />
          <button className="filters" onClick={toggleFilter}>
            Filters
          </button>
          <button className="search">Search</button>
        </div>
        {drawerOpen && (
          <div className="search-drawer">
            {!statesActive && !districtsActive && (
              <Link to="/" onClick={onStateSearch}>
                <div className="item">
                  <span>
                    <IoLocationOutline />
                  </span>
                  <div className="area">Search by Province</div>
                </div>
              </Link>
            )}
            {statesActive && (
              <div className="states">
                <div className="item">
                  {/* <div className="back" onClick={goBack}>
                    <TiArrowBack />
                    <p>Select other state</p>
                  </div> */}
                  All States
                </div>
                {states &&
                  states.map((state) => (
                    <div className="item" key={state.name} onClick={() => onDistrictSearch(state.districts)}>
                      <span>
                        <IoLocationOutline />
                      </span>
                      <div className="area">{state.name}</div>
                    </div>
                  ))}
              </div>
            )}
            {districtsActive && <Districts goBack={goBack} districts={districts} />}
          </div>
        )}
      </div>
      {isFilterActive && (
        <Modal heading="Filters" toggleFilter={toggleFilter}>
          <div className="filters-modal">
            <div className="field">
              <h2>Property Type</h2>
              <div className="content">
                <div className="types">
                  <div className="type">
                    <label htmlFor="house">House</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type">
                    <label htmlFor="house">Condo</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type">
                    <label htmlFor="house">Commercial</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type"></div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />

            <div className="field">
              <h2>Price</h2>
              <div className="content">
                <div className="prices">
                  <div className="min">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Min</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="max">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Max</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />

            <div className="field">
              <h2>Beds</h2>
              <div className="content">
                <div className="prices">
                  <div className="min">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Min</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="max">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Max</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MainSearch;
