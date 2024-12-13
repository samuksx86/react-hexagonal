import { IHttpClient } from "@/infra/http/http.types";
import { ICreateTask, ICreateTaskRequest } from "./create-task.types";

export class CreateTaskService implements ICreateTask {
  constructor(private readonly httpClient: IHttpClient) {}

  public async execute(body: ICreateTaskRequest) {
    const createdTaskId = await this.httpClient.sendRequest<
      number,
      ICreateTaskRequest
    >({
      endpoint: "tasks",
      method: "POST",
      body,
    });
    return createdTaskId;
  }
}
