/**
1- mapStateToProps is a key point for performance. If we recreate an array on each event,
we get a new render, because each array is different that previous. Explore -> Reselect.js
to memoize changes

2- render must not be an arrow function, because it is recreated each time. 

3- Use react dev tools checking highlight updates

4- Use PureComponents


 */