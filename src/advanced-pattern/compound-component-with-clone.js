import React from 'react';

function hasChild(child) {
    for (const property in Toggle) {
      if (Toggle.hasOwnProperty(property)) {
        if (child.type === Toggle[property]) {
          return true
        }
      }
    }
    return false
  }

class Example1 extends React.Component {
    // class property to declare state
    state = { on: true }

    // a Compound component has children components declared as static own props
    // use always static to allow consuming it as Example1.SomeComponent
    // it should be a simple component and it must be a functional component
    // here also spreading remaining props as attributes
    static SomeComponent = ({on, text, ...props}) => (
        on ? <h1 {...props}>{text}</h1> : null
    )

    // class prop + arrow fn
    toggle = () => {
        this.setState(
            // destructuring state & using fn instead of just an object to keep in the closure
            // a ref to the state at that moment
            ({on}) => ( {on: !on} )
        , () => {
            // optional second argument for setState, callback to let consumer know state was updated
            this.props.onToggle(this.state.on);
        });
    }

    render () {
        // destructuring state
        const {on} = this.state;
        // children isn't a regular array, and even could not be an array at all,
        // it could be null or undefined or a single element
        // React.Children.map provides the mapping functionality and deals with non-array values

        /*
        This approach using Children.map + cloneElement is great to pass props to  ONLY the first level of children
        Following nested levels won't have access to props from this parent level. Alternative: Use context
        */
        return React.Children.map(this.props.children, child => {
            if (hasChild(child)) {
                return React.cloneElement(child, {
                    on: on,
                    toggle: toggle
                })
            } else {
                return child
            }
        });
    }
}
/*
Usage
<Example1>
    <Example1.SomeComponent color="#fff">

    </Example1.SomeComponent>
</Example1>

Direct child of Example1 will be the static prop that is a sub-component
- to ensure children have access to the state and utility methods, we need to pass them as props
Here we use React.Children.map to iterate children and cloneElement to create a clone and passing it everything
as props. 
*/

export default Example1;