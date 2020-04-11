import React, { useState } from 'react'

/**
 * useState()の初期値は、下記2つの設定方法がある。
 * 1) 内部でinitialState(s)を設定する。
 * 2) 外部でdefaultPropsを設定する。
 */
const App = (props) => {
  const initialStates = {
    name: '',
    price: 1000,
  }

  /**
   * 1)の場合のuseState()
   */
  const [name, setName] = useState(initialStates.name)
  const [price, setPrice] = useState(initialStates.price)
  /**
   * 2)の場合のuseState( )
   */
  const [stock, setStock] = useState(props.stock)
  const [date, setDate] = useState(props.date)

  const reset = () => {
    setPrice(initialStates.price)
    setName(initialStates.name)
  }

  return (
    <>
      <p>現在の「{name}」は、{price}円、残り{stock}個です。</p>
      {/*
      setxxxx()
      # paraに値・関数どちらでも設定できる。
      # paraが関数の場合、その関数のparaに現在の状態を受け取ることができる。
        返り値は必ず状態を返すようにすること。
      # setxxxx()によって状態が変化すると、変更箇所が再renderされる。
       */}
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      {/*
      イベントハンドラはparaにeventオブジェクトを受け取ることができる。
      引数.target でイベントの起きた要素を取得できる。
       */}
      <input value={name} onChange={e => setName(e.target.value)}/>
      <p>日付 {date}</p>
    </>
  )
}

/**
 * defaultProps
 * コンポーネントのビルトインのプロパティ。defaultのpropsを設定できる。
 * APIで外部から持ってきた値をuseState()の初期値にしたい場合にも便利。
 */
App.defaultProps = {
  stock: 5,
  date: '2020-4-11',
}


/*
▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
▼Counterアプリ▼

const App = () => {
  // useState()
  // para   状態の初期値。今回はカウンターなので0を登録。
  // reVal  2要素の[]。0: 引数の値。1: 引数の状態を変更できる関数。
  const [count, setCount] = useState(0)
  // console.log({output}) // useState()の返り値の確認 => 2要素の[]

  // setCount()によって、状態が変更されると自動的に再renderされる。
  const increment = () => setCount(count + 1)
  // para 値(count +- 1)バージョン
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  // para 関数バージョン
  // 関数のparaに現在の状態を受け取ることができる。
  const increment2 = () => setCount((previousCount) => previousCount + 1)
  const decrement2 = () => setCount((previousCount) => previousCount - 1)
  const double = () => setCount((previousCount) => previousCount * 2)
  const divide3 = () => setCount((previousCount) => {
    *====
    if (previousCount % 3 === 0) {
      return (previousCount / 3)
    }
    return previousCount
    ====*
    // 上記の三項演算子バージョン
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={increment2}>+1  ver2</button>
        <button onClick={decrement2}>-1  ver2</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>3の倍数を3で割る</button>
      </div>
      <div>
      </div>
    </>
  )
}

▲Counterアプリ▲
▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲
 */

export default App
