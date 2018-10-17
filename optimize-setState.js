import React from

class House extends React.Component {
    onClickPlus(state, props) {
        this.setState(() => {
            if (state.amount === props.max) {
                return null; // return null from inside of a function-setState to avoid re-rendering & state updates
            }

            return {amount: amount + 1}
        });
    }
    render () {

    }
}