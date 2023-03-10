import {Component} from 'react'

import LanguageGreetingsItem from '../LanguageGreetingsItem'

import ImageItem from '../ImageItem'

import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class MultilingualGreetings extends Component {
  state = {
    activeLanguageId: languageGreetingsList[0].id,
  }

  setActiveLanguageId = Id => {
    this.setState({activeLanguageId: Id})
  }

  getActiveTabImages = () => {
    const {activeLanguageId} = this.state
    const filteredList = languageGreetingsList.filter(
      eachSearchedImage => eachSearchedImage.id === activeLanguageId,
    )

    return filteredList
  }

  render() {
    const {activeLanguageId} = this.state
    const filteredList = this.getActiveTabImages()
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="greetings-list">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageGreetingsItem
              key={eachLanguage.Id}
              languageDetails={eachLanguage}
              setActiveLanguageId={this.setActiveLanguageId}
              isActive={activeLanguageId === eachLanguage.id}
            />
          ))}
        </ul>
        {filteredList.map(eachImage => (
          <ImageItem key={eachImage.Id} imageDetails={eachImage} />
        ))}
      </div>
    )
  }
}

export default MultilingualGreetings
