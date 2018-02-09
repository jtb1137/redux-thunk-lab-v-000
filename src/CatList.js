import React from 'react';

const CatList = ({ catPics }) => {
  let catsHTML;

  if (catPics.length > 0) {
    catsHTML = catPics.map(cat => <img alt='cat' src={`${cat.url}`} />);
  }

  return (
    <div>
      {catsHTML}
    </div>
  )
}

export default CatList;