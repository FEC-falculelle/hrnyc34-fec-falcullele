import React from 'react';

const Thumbnail = ({url, setCurIndex, index, curIndex}:any) => {

  let isSelected = Number(curIndex) === index;

  console.log(isSelected);

  const styles = {
    backgroundImage: `url(${url.thumbnail_url})`,
    height: `50px`,
    width: `50px`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: `no-repeat`
  };

  const handleHoverOn = (e:any) => {
    e.preventDefault();
    setCurIndex(e.target.id);
  }

  const classes : string[] = [
      'thumbnail-img',
      'isSelectedThumbnail'
  ]
    return (
     isSelected ?
        <div className={'thumbnail-img'} id={`${index}`} style={styles} onMouseEnter={handleHoverOn}>
          <div className='isSelectedThumbnail' id={`${index}`} />
      </div> :
      <div>
      <div className='thumbnail-img' id={`${index}`} style={styles} onMouseEnter={handleHoverOn}/>
      </div>

    )


};

export default Thumbnail