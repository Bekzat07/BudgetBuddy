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
