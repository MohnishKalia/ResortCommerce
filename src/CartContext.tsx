import React, { Dispatch, SetStateAction } from "react";
import { Resort } from './Items'
type Dis = Dispatch<SetStateAction<Resort[]>>;

const CartContext = React.createContext<[Resort[], Dis]>([[] as Resort[], (() => { }) as Dis]);
export default CartContext;