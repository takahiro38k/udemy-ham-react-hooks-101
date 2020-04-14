import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      return state
    case DELETE_ALL_OPERATION_LOGS:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      /**
       * 新しいログを先頭に表示し、既存のログを以降に表示する。
       */
      return [operationLog, ...state]
    default:
      return state
  }
}

export default operationLogs

