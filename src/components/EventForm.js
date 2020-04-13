import React, { useState } from 'react'

import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'

// 関数コンポーネントでは、propsを引数として受け取ることができる。
const EventForm = ({ state, dispatch }) => {
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
      type: CREATE_EVENT,
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
    if (result) dispatch({ type: DELETE_ALL_EVENTS })
  }

  const unCreatable = title === '' || body === ''

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          {/* labelタグのfor(htmlFor)とinputタグのidが一致することで、
      labelにフォーカスが当たるとinputのフォームが選択されるようになる。 */}
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm
