/**
types: 
-global state (in redux)
-component state (setState)
-relative state held by a parent and passed to children by props
-provided state  using context
 */

 // Pattern 1: props-drilling
 /*
 Redux stores global state. Container components communicates with that state. 
 They pass down state to inner dumb components using their props. Changes to State 
 happen only in Containers, via function references passed down as props also to children. 
 Great just for 1 or 2 layers of component trees.
 Containers have internal state (setState) which is derived to children.
 */

 // Pattern 2: redux-centric
 /*
 Similar to props-drilling, but state is directly into Redux and container have no own
 internal state to pass to children. Children have also access to global state. 
 Good: no deeper prop drilling. 
 Bad: all state is in global, and no separation of responsibilities. Eveeryone reads state.
 */

 // Patter 3: stateless components
 /*
Container are also stateless components, using functions instead of classes (Pattern 2) and no 
internal state. Thats a chaos because every component is ajust a function that can read the global
state, which is the only one. Can't reset partial state on componentWillUnmount, we can just read 
global state. 
 */

 // Pattern 4: Provided state (the winner)
 /*
 It uses context API. We have also Global state handled by Redux, and below this layer, a Container
 layer, where several containers read/write the global state, and even create their own states which
 are passed down to a third layer of Contexts-Providers. The fourth layer is of presentational components, 
 which use Consumers to read any state attribute as a prop from the Context. No prop drilling. 
 No matter where a dumb-component is because it reads from Context and it is eveerywhere, not from parent. 
 Auto reset of state on unmounting. 
 */

 /*
 Thoughts: I'm missing in this models a separation between application state and component state. 
 Lots of complex components need state like isOpen, searchTerm, etc. These are state attributes
 with a very short time of life, changing quickly, and only meaningful for that component. 
 Those mustn't be in the global state. 
 Global state should have only state attributes concerning to the whole application.
 */