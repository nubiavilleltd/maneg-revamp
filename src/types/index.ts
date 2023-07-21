export interface News {
  id: number;
  image: string;
  title: string;
  content: string;
  date: string;
}

export interface Comment {
  id: number;
  username: string;
  message: string;
  avatar: string;
  createdAt: string;
  // likes: number;
}
