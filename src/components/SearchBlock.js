import { IoLocationSharp } from 'react-icons/io5';

const SearchBlock = ({ setDrawerOpen }) => {
  const onFocusing = () => {
    setDrawerOpen(true);
    // console.log('drawer opened');
  };

  const onBluring = () => {
    // setDrawerOpen(false);
  };

  return (
    <div className="search-input">
      <IoLocationSharp />
      <input type="search" name="" id="" placeholder="Search province or city" onFocus={onFocusing} onBlur={onBluring} />
    </div>
  );
};

export default SearchBlock;
