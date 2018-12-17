import React from 'react';

// create a context
const GardenContext = React.createContext();

// create a consumer for that context
// consumer is a high order component
const GardenConsumer = ({children, ...props}) => {
    return (
        <GardenContext.Consumer {...props}>
        {/* 
            R.Context creates an object with 2 main props, Provider and Consumer, 
            A HOC will avoid repeating this code
            The required syntax is accessing the context.consumer prop which is a component
            and giving it as a child a function {()=>{}} 
            That function receives as only param the context from what children read values
            And since it's a HOC, it must return the children component, which is wrapped inside
            the Consumer and gets context as a parameter
        */}
            {(context) => {
                {/* extra validation to ensure consumer is never used outside of the provider */}
                if (!context) {
                    throw new Error(
                        'Use it inside its provider!'
                    );
                }

                return children(context);
            }}
        </GardenContext.Consumer>
    );
}

export class Garden extends React.Component {
    // a sub-component inside uses the Consumer
    // and pass as child of it a FN that wraps the final rendered component
    // notice that the inner function destructures in its arguments the CONTEXT, and no the props
    // props are then spread out
    static Button = (props) => (
        <GardenConsumer>
            {
                ({on, toggle}) => {
                    <button onClick={toggle} on={on} {...props} />
                }
            }
        </GardenConsumer>
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
    // Notice state is defined below toggle() in order to pass the reference to this.toggle to the state
    // that's pretty curious but that way the whole updated state object is passed down to the Context in render()
    state = {on: false, toggle: this.toggle}

    // the third step is wrapping the children into the context.provider and setting the provider its original value
    // this way, every child in different nesting levels will get access to the context!
    render() {
        return (
            <GardenContext.Provider value={this.state}>
                {this.props.children}
            </GardenContext.Provider>
        )
    }
}