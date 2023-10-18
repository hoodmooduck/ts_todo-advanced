export type ContextType = {
    activeModal?: string;
    activeProject: number,
    closeModal: ()=> void,
    openNewProject?: ()=> void,
    openChangeProject?: ()=> void,
    openNewTask?: () => void, 
    openProject: (id: number) => number,
};

export type taskTypes =  {
    id: number,
    name: string,
    discription: string,
    complete: boolean
}
  
export interface ProjectTypes {
    id: number,
    name: string,
    tasks: taskTypes[],
}
  