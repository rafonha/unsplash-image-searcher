import React from 'react'
import ImageShow from './ImageShow'

export default function ImageList({images = []}) {

  const renderImages = images.map(image => {
    return <ImageShow image={image} key={image.id} />
  });

  return (
    <>
      <h2>Image Results</h2>
      {images.length <= 0 ? <p>No images to show.</p> : <></>}
      {images.length > 0 ? renderImages : <></>}
    </>
  )
}
