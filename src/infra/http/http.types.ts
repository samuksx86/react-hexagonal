type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HttpRequest<TBody> = {
  method: HttpMethod;
  endpoint: string;
  body?: TBody;
  headers?: Record<string, string>;
};

export interface IHttpClient {
  sendRequest: <TResponse, TBody = unknown>(
    request: HttpRequest<TBody>
  ) => Promise<TResponse>;
}
