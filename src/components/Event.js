import React, { useContext } from 'react'

import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

// 関数コンポーネントでは、propsを引数として受け取ることができる。
// const Event = ({ dispatch, event }) => {
/**
 * contextの導入により、dispatch propsを引数として受け取ることが不要となる。
 */
const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext)
  const id = event.id
  const handleClickDeleteButton = () => {
    const result = window.confirm(`イベント(id=${id})を本当に削除してもよろしいですか？`)
    if (result) dispatch({ type: DELETE_EVENT, id })
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
