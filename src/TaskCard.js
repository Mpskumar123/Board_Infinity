import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TaskCard = ({ task, handleDeleteTask }) => {
  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography variant="body1">{task.name}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Button color="secondary" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
