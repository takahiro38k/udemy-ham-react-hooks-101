import React, { useReducer } from 'react'
// jQueryに依存することなく、最低限styleを適用できるようにする。
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'

import Events from './Events'
import reducer from '../reducers'

const App = () => {
  /*
  useReducer(reducer, initialArg[, init])
  ++++----------------
  1st para   reducer
  2nd para   stateの初期値
  3rd para   stateの初期化時に発火するcallback
  reVal      [state, dispatch]
  ----------------++++
   */
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid">
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
