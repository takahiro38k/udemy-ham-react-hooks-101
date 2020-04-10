import React, { useState } from 'react'

const App = () => {
  // useState()
  // para   状態の初期値。今回はカウンターなので0を登録。
  // reVal  2要素の[]。0: 引数の値。1: 引数を設定できる関数。
  const [count, setCount] = useState(0)
  // console.log({output}) // useState()の返り値の確認 => 2要素の[]

  // setCount()によって、状態が変更されると自動的に再renderされる。
  // para 値(count +- 1)バージョン
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  // para 関数バージョン
  // 関数のparaに現在の状態を受け取ることができる。
  const increment2 = () => setCount((previousCount) => previousCount + 1)
  const decrement2 = () => setCount((previousCount) => previousCount - 1)
  const double = () => setCount((previousCount) => previousCount * 2)
  const divide3 = () => setCount((previousCount) => {
    /*
    if (previousCount % 3 === 0) {
      return (previousCount / 3)
    }
    return previousCount
     */
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

export default App
