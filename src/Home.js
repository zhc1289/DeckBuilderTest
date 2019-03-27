import React from 'react';
import Search from './Search';
import CardBox from './CardBox'
import './app.css'
import Decklist from './Decklist';
import Metrics from './Metrics'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Search/>
        <div className="flexboxes">
          <CardBox/>
          <div>
            <Metrics/>
            <Decklist/>
          </div>
        </div>
        <img className="background" src="https://stmed.net/sites/default/files/kingdom-of-heaven-wallpapers-29683-4482399.jpg" alt="default"/>
      </div>
    )
  }
}
