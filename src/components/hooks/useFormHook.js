import { useState } from 'react';


export default function useForm(cb) {
    const [item, setItem] = useState({});
    const handleInputChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(item, 'item is here')
        event.target.reset();
        // props.handleSubmit(item);
        // const m = {};
        cb(item)
        setItem({});
    }
    return {
        // item,
        handleSubmit,
        handleInputChange,
    }
}