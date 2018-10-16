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

let MyComponent = ({id}) => {
    let data = resourceN.read(cache, id);

    return (
        <h1>data.title</h1>
    )
}
