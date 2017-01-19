import React, { Component } from 'react';

class ClickOutside extends Component {
    
    constructor() {
        super();
        
        this.onClickOutside = this.onClickOutside.bind(this);
        
        this.componentNode = undefined;
    }

    onClickOutside(e) {
        
        if (!this.componentNode || !this.componentNode.contains(e.target)) {
            this.props.onClickOutside(event);
        }
    }
    
    componentDidMount() {
        document.addEventListener('click', this.onClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('click', this.onClickOutside);
    }
    
    render() {
        return <div ref={(el) => this.componentNode = el}>{this.props.children}</div>;
    }
}

export default ClickOutside;