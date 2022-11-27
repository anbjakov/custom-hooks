import {useState} from 'react';

const useCounter = (initialValue=1)=>{
    const DEFAULT_VALUE = 1;
    if (initialValue<1) {
        initialValue = DEFAULT_VALUE
    }
    const [counterValue, setCounter] = useState(initialValue);
    const increase = ()=> setCounter((prevValue)=>prevValue+1);
    const decrease = ()=> setCounter((prevValue)=>prevValue===DEFAULT_VALUE ? DEFAULT_VALUE :prevValue-1)

    return {
        counterValue,
        increase,
        decrease,
        setCounter
    }
}
export default useCounter