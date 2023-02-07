import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {imageAltText, imageUrl} = imageDetails

  return (
    <div className="image-item">
      <img src={imageUrl} className="image" alt={imageAltText} />
    </div>
  )
}

export default ImageItem
