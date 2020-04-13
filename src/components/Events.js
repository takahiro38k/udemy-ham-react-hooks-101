import React from 'react'

import Event from './Event'

const Events = ({ state, dispatch }) => {
  return (
    <>
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
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </>
  )
}

export default Events
