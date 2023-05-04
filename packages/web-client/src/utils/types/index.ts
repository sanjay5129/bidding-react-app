import React from "react";

export interface IRoutesObject {
  path: string;
  component: JSX.Element;
  exact: boolean;
  text: string;
}
export interface ISignin {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface ICreateItemWithoutId {
  name: string;
  start_price: number | undefined;
  time_window: number | undefined;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface IColumn {
  name: string;
  current_price: string;
  duration: string;
}
export interface IModal {
  open: boolean;
  handleClose: () => void;
  item: ICreateItem | undefined;
  children:JSX.Element;
  modelHeader:string | undefined;
  handleSubmit:Function;
  affirmativeActionBtnLabel:string;
  cancelActionButton: string;
}
export interface IModalInput {
  bid_price: string;
}

export interface ICreateItem {
  _id: string | undefined;
  name: string;
  start_price: number | undefined;
  time_window: number | undefined;
}

export interface ICommon {
  isLoading: boolean;
  success: boolean;
}

export interface IBidSliceState extends ICommon  {
  items: ICreateItem[];
}
export interface IDeposit {
  amount: number | undefined;
}
export interface IState {
  bidItems: IBidSliceState;
  user: IUserSlice;
  login:ILoginSlice
}
export interface IColumnData {
  id: string;
  label: string;
  align: "right" | "left" | "center" | "inherit" | "justify" | undefined;
  type?: string;
  buttonLabel?: string;
  onClick?: Function;
}
export interface IColumnDataType2 {
  id: string;
  label: string;
  align: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  type: string;
}
export interface IColumnProp {
  columns: IColumnData[];
}
export interface ITableBody {
  columns: IColumnData[];
  rows: ICreateItem[];
}
export interface ITableComponent {
  columns: IColumnData[];
  rows: ICreateItem[];
  isLoading?: boolean;
}

export interface IColumnParam {
  handleClickOpen: (data: ICreateItem) => void;
}
export interface ILoginSlice{
  isLoading:boolean;
  success: boolean;
  
}
export type MyFormData = {
  username: string;
  password: string;
};
export type FormDataPrice = {
  start_price: TGenericType;
};
export type TCreateItem = {
  name: string;
  start_price: number | undefined;
  time_window: number | undefined;
};
export type TObj = {
  data: TGenericType;
  item: TGenericType;
};

export type TUpdateItem = {
  id: string;
  data: TGenericType;
  item: TGenericType;
};

export type TGenericBlur =
  | React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
  | undefined;

export type TGenericType = any;

export interface IUser {
  _id: string;
  email: string;
  active: boolean;
}

export interface IUserSlice extends ICommon {
    user: IUser | null
}