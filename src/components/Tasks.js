import PropTypes from 'prop-types';
import Task from './Task';


const Tasks = (props) => {
    // eslint-disable-next-line no-unused-vars



    return (
        <div>
            {props.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}></Task>
            )
            )}
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func,
    onToggle: PropTypes.func
};


export default Tasks;