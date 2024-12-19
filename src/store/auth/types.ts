export type AuthForm = {
  isLoading: boolean;
  user: User | null;
};

export type User = {
  email: string;
  _id: string;
  phone: string;
  accessToken: string;
};

export type LoginForm = {
  email: string;
  password: string;
};
