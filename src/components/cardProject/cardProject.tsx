import './cardProject.scss'
import { taskTypes } from '../types';

interface cardProjectProps {
    id: number,
    name: string,
    tasks: taskTypes[],
    onClick: (id: number) => number,
}



function CardProject({id, name, onClick, tasks} : cardProjectProps) {

    return (
        <div onClick={() => onClick(id)} className="cardProject">
            <span className="cardProjectTitle">
                {`${name}`}
            </span>
            <div className="cardProjectTasks">
                {
                    `tasks: ${tasks.length}`
                }
            </div>
        </div>
    )
}

export default CardProject;