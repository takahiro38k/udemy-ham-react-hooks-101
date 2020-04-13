import React, { useReducer, useState } from 'react'
// jQueryに依存することなく、最低限styleを適用できるようにする。
import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
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
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    /**
     * preventDefault()
     * ページの再読み込み(画面遷移)を防止する。SPAでは重要な処理。
     */
    e.preventDefault()

    // console.log({title, body}) // titleとbodyを取得できているか確認。
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })

    /**
     * 「イベントを作成する」ボタンをクリックしたらフォームの値をクリア。
     */
    setTitle('')
    setBody('')
  }

  const deleteAllEvents = e => {
    /**
     * preventDefault()
     * ページの再読み込み(画面遷移)を防止する。SPAでは重要な処理。
     */
    e.preventDefault()
    /**
     * https://developer.mozilla.org/ja/docs/Web/API/Window/confirm
     */
    const result = window.confirm('全てのイベントを本当に削除してもよろしいですか？')
    if (result) dispatch({ type: 'DELETE_ALL_EVENT' })
  }

  const unCreatable = title === '' || body === ''

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          {/* labelタグのfor(htmlFor)とinputタグのidが一致することで、
            labelにフォーカスが当たるとinputのフォームが選択されるようになる。 */}
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/*
          下記エラーを抑止するため、uniqueなkeyが必須となる。
          Warning: Each child in a list should have a unique "key" prop.
          ここではmap()の2nd paraであるindexをkeyとして使用。
          */}
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  )
}

export default App
