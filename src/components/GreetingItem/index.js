import './index.css'

const GreetingItem = props => {
  const {greetingDetails, isActive, setActiveGreetingId} = props
  const {buttonText, id} = greetingDetails
  const greetingClassName = isActive ? `greeting active` : `greeting`

  const onClickButton = () => {
    setActiveGreetingId(id)
  }

  return (
    <li className="greeting-list-item">
      <button
        type="button"
        className={greetingClassName}
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingItem
