import './index.css'

const ImageItem = props => {
  const {imageDetails} = props
  const {imageAltText, imageUrl} = imageDetails

  return (
    <li className="image-item">
      <img src={imageUrl} className="image" alt={imageAltText} />
    </li>
  )
}

export default ImageItem
