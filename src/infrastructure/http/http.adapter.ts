import axios, { AxiosError, AxiosInstance } from "axios";
import { HttpRequest, IHttpClient } from "./http.types";

export class HttpClient implements IHttpClient {
  private constructor(
    private readonly api: AxiosInstance = axios,
    private readonly baseUrl: string = "http://localhost:3000/"
  ) {}

  static create(): HttpClient {
    return new HttpClient();
  }

  async sendRequest<TBody, TResponse>(
    request: HttpRequest<TBody>
  ): Promise<TResponse> {
    const { endpoint, method, body, headers } = request;

    try {
      const { data } = await this.api.request<TResponse>({
        url: `${this.baseUrl}${endpoint}`,
        method,
        data: body,
        headers,
      });

      return data;
    } catch (er) {
      const error = er as AxiosError;
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      throw new Error(`Error ${status}: ${message}`);
    }
  }
}
