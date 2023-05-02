import React from 'react'

function StateImage({ images }) {
  console.log(images)

  const mappedImages = images.map(image => {
    return (
      <img key={image.id} src={image.url} alt={image.altText} />
    )
  })

  console.log(mappedImages)

  return (
    <div> {mappedImages}</div>
  )
}

export default StateImage