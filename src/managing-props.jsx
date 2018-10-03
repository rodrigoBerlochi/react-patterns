import React from 'react';
import { PropType } from 'prop-types';

/**
 * If using class approach for styling,
 * create a Map with the keys for the consumer and the 
 * needed values internally
 * Then map[key] returns the right class name
 * and proptypes can be implement using also the 
 * Map (see at the bottom)
 */
const colorToClassMap = {
    primary: 'summary--primary',
    secondary: 'summary--secondary',
    warning: 'summary--warning',
    danger: 'summary--danger',
};

/*
 Get props by destructuring
 and add a ...rest at the end
 to give the change to the consumer of 
 pass-through extra props that are set 
 as html attribute (also data-x)
*/
export const Summary = ({
    title,
    children,
    color,
    ...rest
}) => {
    return (
        <div {...rest} className={colorToClassMap[color]}> 
            {children}
        </div>
    );
};

const Colors = Object.keys(colorToClassMap);

Summary.propType = {
    color: PropType.oneOf(Colors)
};