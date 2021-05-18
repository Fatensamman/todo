import React,{ useState } from 'react';

export const PaginationContext = React.createContext();

function PaginationContextProvider(props){
const [items,setItems] = useState()
const [itemNum,setItemNum] = useState(3)
const [] = useState()

const state ={
    items,
    setItems,
    itemNum,
    setItemNum
};

return <PaginationContext.Provider value ={state}></PaginationContext.Provider>
}


export default PaginationContextProvider