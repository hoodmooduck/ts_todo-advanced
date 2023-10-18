import {  createContext } from "react";
import { ContextType } from "./types";

const Context = createContext<ContextType>({
    activeModal: 'close',
    activeProject: 0,
    closeModal: ()=> 'close',
    openNewProject: ()=> 'newPr',
    openChangeProject: ()=>'chanPr',
    openNewTask: ()=> 'newTask',
    openProject: (id: number) => id,
});

export default Context

