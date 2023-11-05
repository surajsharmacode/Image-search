import React from 'react'

const ImageLists = ({images}) => {
  return (
    <div className='image-list'>
      {
        images &&
        images.map((image)=>(
          
           <div className='image-container'>
           <img src={image.urls.small} alt={image.alt_description}/>
           </div>
        ))
      }
    </div>
  )
}

export default ImageLists;

