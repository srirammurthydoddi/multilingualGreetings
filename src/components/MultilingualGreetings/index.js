import {Component} from 'react'

import GreetingItem from '../GreetingItem'

import './index.css'

class MultilingualGreetings extends Component {
  state = {
    activeLanguageId: 0,
  }

  setActiveLanguageId = Id => {
    this.setState({activeLanguageId: Id})
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguageId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[activeLanguageId]
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="greetings-list">
          {languageGreetingsList.map(eachLanguage => (
            <GreetingItem
              key={eachLanguage.Id}
              languageDetails={eachLanguage}
              setActiveLanguageId={this.setActiveLanguageId}
              isActive={activeLanguageId === eachLanguage.Id}
            />
          ))}
        </ul>
        <img src={imageUrl} className="image" alt={imageAltText} />
      </div>
    )
  }
}

export default MultilingualGreetings
