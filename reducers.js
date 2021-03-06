/**
  Author:"NguyenBach228"
  20161122
*/

import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, Visibili tyFilters }
        from './actions'
import { SHOW_ALL } = VisibilityFilters

function todos(state = [], action ) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false;
        }
      ]
    case: TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
     default:
      return state
  }
}

const todoApp = combineReducers ({
  visibilityFilter,
  todos
})


export default todoApp
