import { useContext, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleteHandlerContext, EditHandlerContext } from "../App";

const TaskItem = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(DeleteHandlerContext);
  const handleEdit = useContext(EditHandlerContext);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-5 rounded hover:bg-gradient-to-r hover:from-teal-800 hover:to-gray-800 group">
      <div className="task-item-left flex gap-3">
        <span>
          <input
            type="checkbox"
            className="accent-teal-400"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
        </span>

        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, task.id)}>
            <input
              type="text"
              required
              className="bg-transparent border-b-2 outline-none border-gray-600 pb-1 focus: border-teal-500"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}
        {!task.isEditable && (
          <p
            className={`group-hover:text-teal-400 ${
              isChecked
                ? `line-through text-gray-500 group-hover:text-teal-600`
                : null
            }`}
          >
            {task.text}
          </p>
        )}
      </div>
      <div className="task-item-right flex gap-3">
        <button onClick={() => handleEdit(task.id)}>
          {" "}
          <FiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />{" "}
        </button>
        <button onClick={() => handleDelete(task.id)}>
          {" "}
          <FiTrash className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />{" "}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
