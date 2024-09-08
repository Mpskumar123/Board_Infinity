import React, { useState, useEffect } from 'react';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';
import { addTask, fetchTasks, deleteTask } from './firestoreOperations';
import Typography from '@mui/material/Typography';
import Logo from './images/logo.png';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const loadTasks = async () => {
      const tasks = await fetchTasks();
      setTasks(tasks);
    };
    loadTasks();
  }, []);

  const handleAddTask = (status) => {
    setOpenModal(true);
  };

  const handleSubmitTask = async (task) => {
    await addTask(task);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
    setOpenModal(false);
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    const updatedTasks = await fetchTasks();
    setTasks(updatedTasks);
  };

  return (
    <div className="main-container">
      <Typography
        color={'goldenrod'}
        variant="h6"
        component="div"
        style={{ paddingTop: '20px', paddingLeft: '20px' }}
      >
        <img src={Logo} alt="logo" height={'70'} width="100" />
      </Typography>
      <div className="create-container">
        <span>Desktop & Mobile Application</span>
        <Button
          variant="contained"
          className="create-task-button"
          sx={{
            backgroundColor: '#8a31e5',
            borderRadius: '8px',
            height: '50px',
            width: '150px',
            fontSize: '16px',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#8a31e5',
            }
          }}
          onClick={() => setOpenModal(true)}
        >
          Create Task
        </Button>
      </div>
      <div className="columns-container">
        <TaskColumn
          title="TODO"
          tasks={tasks.filter((task) => task.status === 'TODO')}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          headerColor="#8a30e5"
          className="task-column"
        />
        <TaskColumn
          title="IN PROGRESS"
          tasks={tasks.filter((task) => task.status === 'IN PROGRESS')}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          headerColor="#ffc14e"
          className="task-column"
        />
        <TaskColumn
          title="COMPLETED"
          tasks={tasks.filter((task) => task.status === 'COMPLETED')}
          handleAddTask={handleAddTask}
          handleDeleteTask={handleDeleteTask}
          headerColor="#06c270"
          className="task-column"
        />
      </div>
      <TaskModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        handleSubmit={handleSubmitTask}
      />
    </div>
  );
}

export default App;
