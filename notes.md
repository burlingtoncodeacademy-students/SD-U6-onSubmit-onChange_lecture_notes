## Re-rendering
- We can use a callback function to help with rendering processes.
- useState can take raw value but also a callback function.

ex: 
```jsx
const [ count, setCount ] = useState(0); // raw value
const [ count, setCount ] = useState(() => 0); // CB Function
```
- Callback function renders initial value ONCE.