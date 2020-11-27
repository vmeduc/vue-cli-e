export interface Message {
  id: number,
  text: string
  author?: string
}

export interface MessengerState {
  messages: Message[]
}