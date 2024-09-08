import React from 'react';
import './TaskColumn.css';
import { Card, Typography, Chip } from '@mui/material';
import { AccessTime } from '@mui/icons-material';

const TaskColumn = ({ title, tasks, color,headerColor }) => {
  const headerTitleClass = title === 'IN PROGRESS' ? 'header-title-in-progress' : '';
  return (
    <div className="outer-container" >
      <div className="header" style={{ backgroundColor: headerColor }}>

      <h3 className={`header-title ${headerTitleClass}`}>
          {title}
        </h3>
      </div>
      <div className="task-list-container">
        {tasks.map((task, index) => (
          <Card key={index} className="task-card">
            <div className="task-header">
              <Chip label={task.priority} className={`priority-chip ${task.priority.toLowerCase()}`} />
              <Typography className="task-task-title">{task.title}</Typography>
            </div>
            <Typography className="task-description">{task.description}</Typography>
            <div className="task-footer">
              <AccessTime className="time-icon" />
              <Typography className="task-date">{task.date}</Typography>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
