// import React,{ useState } from 'react';

// export const sortContext = React.createContext();

// function sortContextProvider(props){
// const [items,setItems] = useState()
// const [itemNum,setItemNum] = useState(3)
// const [sortType,setSortType] = useState(false)

// const state ={
//     items,
//     setItems,
//     itemNum,
//     setItemNum,
//     sortType,
//     setSortType
// };

// return <sortContext.Provider value ={state}></sortContext.Provider>
// }


// export default sortContextProvider
// import React, { useState } from 'react';

// export const PaginationContext = React.createContext();

// function PaginationProvider(props) {
// 	const [list, setList] = useState([]);
// 	const [items, setItems] = useState([]);
// 	const [itemsNum, setItemsNum] = useState(3);
// 	const [page, setPage] = useState(1);
// 	const [offset, setOffset] = useState(0);
// 	const [sortType, setSortType] = useState(false);

// 	const state = {
// 		list,
// 		setList,
// 		items,
// 		setItems,
// 		itemsNum,
// 		setItemsNum,
// 		sortType,
// 		setSortType,
// 		page,
// 		setPage,
// 		offset,
// 		setOffset,
// 	};

// 	return (
// 		<PaginationContext.Provider value={state}>
// 			{props.children}
// 		</PaginationContext.Provider>
// 	);
// }

// export default PaginationProvider;