export function get(object: any, key: string, defValue?: any) {
  return object[key] || defValue;
}
