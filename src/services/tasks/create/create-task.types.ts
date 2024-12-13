export interface ICreateTaskRequest {
  title: string;
  description: string;
  status: string;
}

export interface ICreateTask {
  execute(body: ICreateTaskRequest): Promise<number>;
}
