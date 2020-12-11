import React from 'react';

const Loader = ({ loading, searchValue }) => {
  return (
    <>
      {
        loading && <div>fetching books for <strong>{searchValue}</strong></div>
      }
    </>
  )
}

export default Loader;