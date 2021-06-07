import React, { useState, useEffect } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    updateTask(tempObj);
  };

  return (
    <div>
      <div className="form-group">
        <label>Task Name</label>
        <input
          type="text"
          className="form-control"
          value={taskName}
          onChange={handleChange}
          name="taskName"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          rows="5"
          className="form-control"
          value={description}
          onChange={handleChange}
          name="description"
        />
      </div>
    </div>
  );
};

export default EditTaskPopup;
