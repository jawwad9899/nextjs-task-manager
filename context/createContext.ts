import { createContext } from "react";
import { TaskButtonType } from "@/@types/Types";

export const Context = createContext<TaskButtonType | null>(null);
