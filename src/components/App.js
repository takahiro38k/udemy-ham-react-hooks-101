import React, { useEffect, useReducer } from 'react'
// jQueryに依存することなく、最低限styleを適用できるようにする。
import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from '../contexts/AppContext'
/**
 * eventsという名前で実装したが、
 * ここではわかりやすくreducerという名前でimportする。
 */
import reducer from '../reducers'

const APP_KEY = 'appWithRedux'

// console.log({AppContext}) // contextの中身確認

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
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
   * それにともない、useReducer()の2nd paraを修正。
   */
  /**
   * JSON.parse()
   * 引数に渡したJSON形式の文字列を、JSオブジェクトに変換する。
   */
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  /**
   * stateが変更されるたび、localStorageにstateを保存する。
   */
  useEffect(() => {
    /**
     * JSON.stringify()
     * 引数に渡したJSオブジェクトを、JSON形式の文字列に変換する。
     */
    // console.log(JSON.stringify(state))
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])

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
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App
