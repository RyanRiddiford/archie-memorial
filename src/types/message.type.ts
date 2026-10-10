

export interface Message {
    id: Number,
    content: String
};

export type CreateMessage = Omit<Message, "id">;