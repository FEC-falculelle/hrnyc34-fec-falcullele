import React from 'react';

const Thumbnail = ({url, setCurIndex, index}:any) => {


  const styles = {
    backgroundImage: `url(${url.thumbnail_url})`,
    height: `50px`,
    width: `50px`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: `no-repeat`
  };

  const handleHoverOn = (e:any) => {
    e.preventDefault();
    console.log(e.target.id);
    setCurIndex(e.target.id);
  }

  return (
    <div className='thumbnail-img' id={`${index}`} style={styles} onMouseEnter={handleHoverOn}/>
    )
};

export default Thumbnail