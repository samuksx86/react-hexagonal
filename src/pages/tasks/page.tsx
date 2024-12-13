import { HttpClient } from "@/infra/http/http.adapter";
import { CreateTaskService } from "@/services/tasks/create/create-task.service";
import { useTasksModel } from "./task.model";
import { TasksView } from "./task.view";

export function Tasks() {
  const httpRequest = HttpClient.create();
  const createTask = new CreateTaskService(httpRequest);
  const methods = useTasksModel({
    createTask,
  });
  return <TasksView {...methods} />;
}
