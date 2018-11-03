export default interface Task {
  id: string,
  parentId: string,
  taskName: string,
  worker: string,
  stage: string
};
