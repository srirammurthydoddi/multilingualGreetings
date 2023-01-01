import {Component} from 'react'

import GreetingItem from '../GreetingItem'

import './index.css'

const {languageGreetingsList} = this.props

class MultilingualGreetings extends Component {
  state = {
    activeGreetingId: languageGreetingsList[0].id,
  }

  setActiveGreetingId = id => {
    this.setState({
      activeGreetingId: id,
    })
  }

  render() {
    const {activeGreetingId} = this.state
    const {imageUrl, imageAltText} = languageGreetingsList[activeGreetingId]
    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="greetings-list">
          {languageGreetingsList.map(eachLanguage => (
            <GreetingItem
              key={eachLanguage.id}
              greetingDetails={eachLanguage}
              isActive={activeGreetingId === eachLanguage.id}
              setActiveGreetingId={this.setActiveGreetingId}
            />
          ))}
        </ul>
        <img src={imageUrl} className="image" alt={imageAltText} />
      </div>
    )
  }
}

export default MultilingualGreetings
