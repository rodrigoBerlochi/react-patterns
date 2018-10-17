import React from 'react';

// easy way of creation
// refs are suitable only for class component (instances)

class ModuleX extends React.PureComponent {
    constructor() {
        this.inputRef = React.createRef();
    }
    onSubmit() {
        this.refs.inputRef.current.value = ''; // .current to access DOM node or mounted instance
    }
    render() {
        return <input name='city' ref={this.inputRef} />
    }
}