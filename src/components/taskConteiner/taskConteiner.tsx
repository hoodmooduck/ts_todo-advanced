import { useState, useContext,ChangeEvent, useEffect } from 'react'
import { ProjectTypes, taskTypes } from '../types'
import './taskConteiner.scss'
import Modal from '../modal/modal'
import Context from '../context'
import TaskCard from './taskCard/taskCard'

function TaskConteiner() {    
    const { activeModal, activeProject ,openNewTask, closeModal }  = useContext(Context);

    const [nameTask, setNameTask] = useState<string>('')
    const changeNameProj = (e : ChangeEvent<HTMLInputElement>) => {
        setNameTask(e.target.value)       
    }
    const [nameTask_disc, setNameTask_disc] = useState<string>('')
    const changeNameProj_disc = (e : ChangeEvent<HTMLInputElement>) => {
        setNameTask_disc(e.target.value)       
    }



    const [projects, setProjects] = useState<ProjectTypes[]>([])

    const checkProjects: () => ProjectTypes[] = () => {
        if(localStorage.getItem('projects')){
            return JSON.parse(localStorage.getItem('projects') || "");
        }
        else{
            localStorage.setItem('projects', JSON.stringify(projects))
            return JSON.parse(localStorage.getItem('projects') || "");
        }

        
    }


    const initTask = () => {
        if(nameTask !== ''){
            const task: taskTypes = {
                id: projects[activeProject].tasks.length,
                name: nameTask,
                discription: nameTask_disc,
                complete: false
            }
            projects[activeProject].tasks.push(task)
            localStorage.setItem('projects', JSON.stringify([...projects]))
            setNameTask('')
            setNameTask_disc('')
        }
    }
    
    useEffect(()=>{
        setProjects(checkProjects())
    }, [activeModal])

    
    return (
        <div className="taskConteiner">
            <div className="taskConteinerColumn">
                <div className="taskConteiner-title">
                    {
                        projects.length === 0 ? 
                        `создайте проект`
                        :
                        `${projects[activeProject].name}`
                    }
                </div>

                <div className="tasksList">
                    {
                        projects.length === 0 ? 
                        null
                        :
                        <div onClick={openNewTask} className="btnNewTask">+ новая задача</div>
                        
                    }
                    {
                        projects.length === 0 ? 
                        null
                        :
                        projects[activeProject].tasks.map((el)=>(
                            <TaskCard name={el.name} discription={el.discription} complited={el.complete} key={el.id}></TaskCard>
                        ))
                    }
                </div>

            </div>
            {
                activeModal === 'open' ?
                <Modal closeModal={closeModal}>
                    <div className="modalForm">
                        <input onChange={changeNameProj} value={nameTask} className='modalInput' type="text" placeholder='имя задачи' />
                        <input onChange={changeNameProj_disc} value={nameTask_disc} className='modalInput' type="text" placeholder='описание задачи' />
                        <input onClick={initTask} className='modalButton' type="button" value='создать' />
                    </div> 
                </Modal>
                : 
                null
            }
        </div>
    )
}

export default TaskConteiner;
