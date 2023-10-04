import { createContext } from "react";
import { getLSItem } from "../utils/localStorage";

export const UserContext = createContext({
  token: getLSItem("token"),
  onChangeLogin: () => {},
});
