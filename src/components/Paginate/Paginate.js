import { useState } from "react"

export default function Paginate({getPreviousPage, getNextPage, selectedPage}) {


  return (
    <div>
        <span onClick={getPreviousPage}>previous</span>{selectedPage}<span onClick={getNextPage}>next</span>
    </div>
  )
}