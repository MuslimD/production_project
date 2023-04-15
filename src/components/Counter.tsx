import { useState } from 'react';
import "./Counter.scss"
export const Counter = () => {
const [state, setState] = useState(0)

    return (
        <div className='div'>{state}
            <button onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

