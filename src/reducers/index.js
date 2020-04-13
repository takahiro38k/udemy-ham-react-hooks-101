import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENTS} from '../actions'

// ++++----------------
// ####actionの例:
// typeは必須。ほかは本アプリのformに合わせた付加情報。
//
// action = {
//   type: 'CREATE_EVENT',
//   titile: '2020東京オリンピックのお知らせ',
//   body: '2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
// }
//
// --------++++--------
// ####既存のstateごとの条件分岐
//
// ◆空の場合
//
// # before
// state = []
//
// # after
// state = [
//   {
//     id: 1,
//     titile: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
//   }
// ]
//
//
// ◆stateが1つ以上存在する場合
//
// # before
// state = [
//   { id: 1, title: 'タイトル1', body: 'ボディー1'},
//   { id: 2, title: 'タイトル2', body: 'ボディー2'},
//   { id: 3, title: 'タイトル3', body: 'ボディー3'},
// ]
//
// # after
// state = [
//   { id: 1, title: 'タイトル1', body: 'ボディー1'},
//   { id: 2, title: 'タイトル2', body: 'ボディー2'},
//   { id: 3, title: 'タイトル3', body: 'ボディー3'},
//   {
//     id: 4,
//     titile: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては、、、、、、、'
//   }
// ]
//
// 上記の条件分岐をふまえて、下記でreducerを実装する。
// ----------------++++
/**
 * reducer
 * stateとactionを受け取り、新しいstateを返す。
 * switch文で分岐することが多い。
 *
 * 今回はeventを管理するreducerなので、eventsという名前で定義する。
 */
const events = (state = [], action) => {
  switch (action.type) {
    case CREATE_EVENT:
      const event = { title: action.title, body: action.body }
      const length = state.length
      /*
      let id
      if (length === 0) {
        id =1
      } else {
        id = state[length - 1].id + 1
      }

      上記を三項演算子にして定数idに代入
       */
      const id = length === 0 ? 1 : state[length - 1].id + 1
      /**
       * state配列の最後の要素に新しいイベントを追加する。
       * --------------------
       * ...state          既存のstateを返す。
       * {id, ...event }   {id: id, ...event }のshorthand。
       */
      return [...state, {id, ...event }]
    case DELETE_EVENT:
      return state.filter(event => event.id !== action.id)
    case DELETE_ALL_EVENTS:
      return []
    default:
      return state
  }
}

export default events
