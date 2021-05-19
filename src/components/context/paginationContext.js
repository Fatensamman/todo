import React, { useState } from 'react';

export const PaginationContext = React.createContext();

function Pagination(props) {

  const [thisPage, setThisPage] = useState(1);
  const [PerPage, setPerPage] = useState(3);
  const indexOfLastItem = thisPage * PerPage;
  const indexOfFirstItem = indexOfLastItem - PerPage;

  // sort difficulty
  const list = props.list.sort((a, b) => {
    if (a.difficulty > b.difficulty) {
      return 1;
    } else {
      return -1;
    }
  });

  let item = list.slice(indexOfFirstItem, indexOfLastItem);
  const pag = pageNumber => setThisPage(pageNumber);
  const setItems = numberOfPages => setPerPage(numberOfPages);

  const state = {
    thisPage,
    PerPage,
    setThisPage,
    setPerPage,
    pag,
    item,
    setItems,
  }
  // value its the same as state
  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default Pagination;