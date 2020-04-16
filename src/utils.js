/**
 *  一般的に使われることが多いので、ISO 形式 (ISO 8601) を採用。
 */
export const timeCurrentIso8601 = () => (new Date()).toISOString()
