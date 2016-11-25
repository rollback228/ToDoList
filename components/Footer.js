/**
  Author:"NguyenBach228"
  20161123
*/

import React froom 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {" , "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {" , "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
