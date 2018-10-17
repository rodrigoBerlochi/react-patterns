import React from 'react';
import { createCache, createResource } from 'react-cache';

let cache = createCache();

let resourceN = createResource(
    (id) => {
        return fetch(`uri/${id}`).then(response => {
            return response.json();
        });
    }
);

// when the id prop chances, a new request is triggered and the cache is updated
// 
let MyComponent = ({id}) => {
    let data = resourceN.read(cache, id);

    return (
        <h1>data.title</h1>
    )
}
