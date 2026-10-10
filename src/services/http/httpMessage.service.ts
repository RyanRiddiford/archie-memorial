import axiosClient from "./AxiosClient";
import type { Message, CreateMessage } from "../../types/message.type";

//Retrieve page of messages
export async function getMessagesPage(pageNum: number): Promise<Message[]> {
  const response = await axiosClient.get<Message[]>(`/messages/${pageNum}`);
  return response.data;
}

//Create message
export async function createMessage(data: CreateMessage): Promise<Message> {
  const response = await axiosClient.post<Message>("/messages", data);
  return response.data;
}
