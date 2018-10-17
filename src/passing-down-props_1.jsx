import React from 'react';
/**
 * 
 * Use children components on different levels, it only work if can access
 * to every level explicitly 
 */
const PassingDownProps_1 = (props) => {
    const name = props.user;
    return (
        <Level_1>
            <Level_2>
                <Nested user={name} />
            </Level_2>
        </Level_1>
    );
};

export default PassingDownProps_1;