// Named Export
// math.js
export const add = (a,b) => a+b;
export const sub = (a,b) => a-b;

// Default Export
// Counter.jsx
import Counter from './Counter';
export default function Counter() {
    return <h1>Counter</h1>;   
}

// Mixed Export
import App, { version } from "./App";
export default App;
export const version = "1.0";
