import { createSlice } from '@reduxjs/toolkit';

// import { fetchListings } from '../../actions/listings';

const initialState = {
  listings: [],
};

export const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    // getListings: (state, action) => {
    //   const data = fetchListings();
    //   console.log('Listings : ', data);
    //   state.listings = data;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { getListings } = listingsSlice.actions;

export default listingsSlice.reducer;
