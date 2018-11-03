export const chooseTasks = (tasks: any, id: string, stage: string) => {
  if(tasks.length > 0) {
    return tasks.filter((task: any) => (task.parentId === id && task.stage === stage))
  } 
};
