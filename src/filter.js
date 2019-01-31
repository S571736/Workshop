import React from 'react';

const Filter = ({ filterKey, placeholder, value, onChange}) =>
<input
    type = "search"
    placeholder = {placeholder}
    value = {value}
    onChange = {event => {
        onChange(filterKey, event)
    }}
/>

export default Filter;