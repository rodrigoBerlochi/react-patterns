export const getMaximun = list => {
    return list.reduce((max, current) => (max > current) ? max : current, 0);
};

export const fromArrOfObjToString = (list, property) => {
    list.reduce((result, current, i, vector) => {
        return `${result}${list.property}${(i !== vector.length ? ', ' : '')}`;
    }, '');
};

export const removeElement = (list, propToEval, condition) => {
    return list.filter((item) => {
        return item[propToEval] !== condition;
    });
};

/**
 * 
 * 
 */
export const compose = (...fns) => {
    arg => fns.reduce((composed, fn) => {
        return fn(composed);
    }, arg)
};
/**
 * Usage
 * const ask3Wishes = compose(whish1, whish2, whish3);
 * ask3Whishes('happy birthday')
 */
59