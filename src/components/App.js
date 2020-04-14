import React, { useReducer } from 'react'
// jQueryに依存することなく、最低限styleを適用できるようにする。
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import AppContext from '../contexts/AppContext'
/**
 * eventsという名前で実装したが、
 * ここではわかりやすくreducerという名前でimportする。
 */
import reducer from '../reducers'

// console.log({AppContext}) // contextの中身確認

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
  // const [state, dispatch] = useReducer(reducer, [])
  /**
   * combineReducers()を導入したことで、stateが[]から{}に変化。
   * それにともない、useReducer()の2nd paraを修正
   */
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    /**
     * Providerコンポーネント(context)
     * contextのProviderコンポーネントは、valueという特別なpropsで値を設定できる。
     * valueは、Providerコンポーネントのwrap内において、
     * Consumerコンポーネントで引数として受け取ることができる。
     */
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        {/*
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
        contextの導入により、propsの設定が不要となる。
         */}
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App
