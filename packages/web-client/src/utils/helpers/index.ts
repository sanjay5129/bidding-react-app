import { ACCESS_TOK } from "utils/constant";

export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  const value = localStorage.getItem(key);
  return value;
}
export function clearLocalStorage() {
  localStorage.clear();
}

export function getTokenAttached() {
  return `Bearer ${localStorage.getItem(ACCESS_TOK)}`;
}
