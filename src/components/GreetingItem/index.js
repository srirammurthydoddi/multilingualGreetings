import './index.css'

const GreetingItem = props => {
  const {languageDetails, isActive, setActiveLanguageId} = props
  const {buttonText, id} = languageDetails
  const greetingClassName = isActive ? `greeting active` : `greeting in-active`

  const onClickButton = () => {
    setActiveLanguageId(id)
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
