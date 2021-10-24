import React, { Component } from "react";

class Counter extends React.Component {
    state = {
        count: 0,
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;
        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>        
    }

    // Applying custom styles to elements
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }
    render() {
        return (
        <React.Fragment>
            
            { this.state.tags.length === 0 && 'Please create a new tag!' } {/* alternate method of conditional rendering */}
            { this.renderTags() }
        </React.Fragment>
        );
    }
    
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
