import { useState } from 'react';
import classes from "./counter.module.scss"
export const Counter = () => {
const [state, setState] = useState(0)

    return (
        <div className={classes.btn}>{state}
            <button className={classes.dtn} onClick={() => setState(state + 1)}>+</button>
        </div>
    );
};

