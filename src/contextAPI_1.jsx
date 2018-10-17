import React from 'react';

const { Provider, Consumer } = React.createContext(defaultVal);

<Provider value={store}>
    <div>
        <ComponentA>
            <Consumer>
                {value => (<Title>{value.title}</Title>)}
            </Consumer>
        </ComponentA>
    </div>
</Provider>

// Another example

// file 1
const XContext = { // this is the data to share
    prop: true,
    toogleProp: () => {} // here we can place a function to toggle the prop, that way the component inside the Consumer can
    // CHANGE the value of the context!!  Implementation could be here OR inside some other component and passed as a prop to the provider.
    // see Example_B 
};

export const XCtxt = React.createContext(XContext); // create the context, the export and import where it is needed

// file 2
import { XCtxt } from './file1';

// XCtxt.Provider is present but unused since the Consumer is already linked to that Provider
// Usually the Provider wraps a Consumer. A Consumer will use context from the closest Provider above in the tree
export const ComponentB = (props) => {
    return (
        <XCtxt.Consumer> {/* consumer wraps a function that must return elements and get context as argument */}
            {ctxt => {
                <div {...props}>{ctxt.prop}</div>
            }}
        </XCtxt.Consumer>
    );
}


// Example_B  Notices the val for value must not be created right inside the Provider if it is into a render method
// chances are it will re render due to the fact itself of assigning a value that is being created in the rendering
// move that value to this.state and use a reference to it value={this.state.ctt}
<XCtxt.Provider value={{
    prop: this.state.prop,
    toogleProp: () => { /*implementation*/ }
}}>
</XCtxt.Provider>

// Example_C: Multi-context
// each one is a separated node and must be nested in the expected order:
const Page = React.createContext(val2);
const User = React.createContext(val3);

const MyHome = () => {
    return (
        <Page.Consumer>
        {page => (
            <User.Consumer>
                {
                    /*In this level we define the actual component that will have access to BOTH consumers arguments*/
                    (user) => {
                        return (
                            <Home pageCtxt={page} userCtxt={user} /> // Example_D, see below.
                        );
                    }
                }
            </User.Consumer>
        )}    
        </Page.Consumer>
    );
};

// Example_D: here we saw Home gets both contexts as attributes, so they are available in this.props inside Home definition
// lifecycle methods can read those contexts from there:
 componentDidMount () {
     this.props.pageCtxt;
 }

 // Example_E: Context API and HOC can solve the i18n needs or theme needs. A HOC can take the work of assigning the consumer
 // to each component that needs it
 import {i18n} from 'i18n';
 const I18n = React.createContext(i18n);

 export const withLocalization = (component) => {
     return React.forwardRef((props, ref) => { // use this so ref points to the component nested and not to the consumer! do ref.current.focus()
         return (
            <I18n.Consumer>
                {i18n => <component i18n={i18n} {...props} ref={ref} />}
            </I18n.Consumer>
         );
     })
 }; 


