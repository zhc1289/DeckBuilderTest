import React from 'react';
import Card from './Card';

const CardStackStyle = {
    display: 'inline-block',
    width: '145px',
    minHeight: '75vh',
    maxHeight: '75vh',
    overflow: 'hidden',
    textAlign: 'center',
    padding: '10px',
}

export default class CardStack extends React.Component {

    render() {
        //multiples of 185 pixels for small
        var cards  = this.props.cards.map((url, index) => {
            return <Card url={url} key={index} style={{transform: `translateY(-${185 * index}px)`}} />
        });

        return(
            <div style={CardStackStyle}>
                {cards}
            </div>
        )
    }
}