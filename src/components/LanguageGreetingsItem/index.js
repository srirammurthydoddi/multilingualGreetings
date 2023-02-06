import './index.css'

const LanguageGreetingsItem = props => {
  const {languageDetails, isActive, setActiveLanguageId} = props
  const {buttonText, id} = languageDetails
  const greetingClassName = isActive ? 'button active' : 'button'

  const onClickButton = () => {
    setActiveLanguageId(id)
  }

  return (
    <li className="greeting-list-item">
      <button
        type="button"
        onClick={onClickButton}
        className={greetingClassName}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageGreetingsItem
