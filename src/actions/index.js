/**
 * actionのtypeを定数とすることで、デバッグのコストを低くできる
 * (typoの場合、エラーが発生するのですぐにわかる)。
 *
 * 定数として代入せずにコーディングしてtypoした場合、
 * reducerのswitch文でdefaultとして処理され、エラーが発生せず、
 * 修正箇所にとても気づきにくくなってしまう。
 */
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const DELETE_ALL_EVENTS = 'DELETE_ALL_EVENTS'

export const ADD_OPERATION_LOG = 'ADD_OPERATION_LOG'
export const DELETE_OPERATION_LOGS = 'DELETE_OPERATION_LOGS'
