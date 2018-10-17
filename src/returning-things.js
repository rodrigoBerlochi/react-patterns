import React from 'react';

// usual returns
const Menu = (props) => {
    // single root return
    return (
        <ul>
            {
                props.items.map(el => {
                    <li key={el.value}>{el.displayValue}</li>
                })
            }
        </ul>
    );
}

//R16>
// fragments, import from React. Semantic helpful
const SideBar = props => {
    return (
        <Fragment>
            <div></div>
            <div></div>
        </Fragment>
    )
}

// arrays of element
const Items = props => {
    return [
        <li key={'red'}>{props.items[0]}</li>,
        <li key={'blue'}>{props.items[1]}</li>
    ];
}