import { Agent } from "http";

export interface StringArray {
  [index: number]: string;
}

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}

function historyIdentify<T>(arg: Array<T>): Array<T> {
  return arg;
}

function currentIdentify<T>(arg: Array<T>): Array<T> {
  return arg;
}
