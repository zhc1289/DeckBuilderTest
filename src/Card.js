import React from 'react'

const cardStyle = {
    marginBottom: '-3px',
    display: 'inline-block',
}

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.handleOnDragStart = this.handleOnDragStart.bind(this);
    }

    handleOnDragStart(e) {
        let {url} = this.props;
        e.dataTransfer.setData("text/plain", url);
    }
    
    render() {
        let {url, style} = this.props;
        style = {...style, ...cardStyle}

        return (
            <img
                draggable={true} 
                src={url}
                data-url={url}
                alt="placeholder"
                style={cardStyle}
                onDragStart={this.handleOnDragStart}
            />
        )
    }
}