import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

// 関数コンポーネントでは、propsを引数として受け取ることができる。
const Events = ({ state, dispatch }) => {
  /**
   * Providerコンポーネントのvalueプロップスを受け取れるよう、
   * contextを設定。
   */
  const value = useContext(AppContext)

  return (
    <>
      {/*
      Consumerコンポーネント(context)
      下記の形式のとおり、関数の引数としてProviderコンポーネントからvalueを受け取り、
      処理を行える。
      <context名.Consumer>{value => {}}</context名.Consumer>
      --------------------
      <AppContext.Consumer>
        {value => { return <div>{value}</div> }}
      </AppContext.Consumer>
       */}
      {/*
      !!!!! WARNING !!!!!
      上記はHooksが登場する前の書き方。
      Hooks登場後のcontextでは、上記にあるuseContext()を設定し、
      下記のようにシンプルに書くことができる。
       */}
      <div>{value}</div>

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
