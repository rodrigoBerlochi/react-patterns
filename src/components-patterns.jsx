import React from 'react';

// SFC, stateless function components
// do not extend class component, possible optimization skipping checkings and reducing memory allocation
// pure component
const _handleClick = (param, event) => {

}; // move out method/event handler declarations

const List = ({prop1, prop2}) => // props destructuring, arrow function, body not wrapped
    <ul onClick={_handleClick}> 
        {/* here more JSX */}
    </ul>

export default List;

// drawbacks: no REFS, no life-cycle methods

/*************************************************** */

// Conditional components
// ternary for 2 options
{this.props.isButton
    ? <Button />
    : <Link />}

// simple logic AND for single option
{!!this.props.isButton && <Button />} // always CAST left side operand to avoid potencial rendering of 0 or other falsy values

/************************************** */

//arrow functions
const mapStateToProps = ({prop}) => ({  // skip extra return and  {}
     prop: prop
});

// destructuring, spread
render () {
    const {p1, p2, p3} = this.props;
}

render () {
    return <Clock {...this.props}
}

// ES6 shorthand method decl
Clock.defaultProps = {
    onClick () {
        // do default stuff
    }
}

// "do a lot without saying too much" -- beautiful code

