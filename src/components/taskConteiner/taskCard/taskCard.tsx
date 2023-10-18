import './taskCard.scss'

interface taskProps {
    name: string,
    discription: string,
    complited: boolean,

}

function TaskCard({name, discription, complited}:taskProps) {
    return(
        <div className="taskCard">
            <div className="taskCard-title">{name}</div>
            <div className="taskCard-disc">{discription}</div>
            <div className="taslCard-compl">{complited}</div>
        </div>
    )
}

export default TaskCard;