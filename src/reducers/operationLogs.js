import {
  ADD_OPERATION_LOG,
  DELETE_OPERATION_LOGS
} from '../actions'

const operationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt
      }
      /**
       * 新しいログを先頭に表示し、既存のログを以降に表示する。
       */
      return [operationLog, ...state]
    case DELETE_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs

