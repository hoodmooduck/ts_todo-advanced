import { useState } from 'react';
import './taskCard.scss'

interface taskProps {
    name: string,
    discription: string,
    complited: boolean,

}

function TaskCard({name, discription, complited}:taskProps) {

    const [openTask, setOpenTask] = useState<boolean>(false)

    const openCard = () => {
        setOpenTask((val) => !val)
    }

    return(
        <div onClick={() =>  openCard()} className="taskCard">
            <div className="taskCard-title">{name}</div>
            <div className="taskCard-disc">{discription}</div>
            <div className={`taskCard-compl ${!complited? 'noComp' : 'comp'}`}></div>
            {openTask ? <div className="open">открыто</div> : null}
        </div>
    )
}

export default TaskCard;