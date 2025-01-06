export type AuthForm = {
  isLoading: boolean;
  user: User | null;
  isAuthenticated: boolean;
};

export type User = {
  email: string;
  _id: string;
  phone: string;
  accessToken: string;
  refreshToken: string;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type RegisterForm = {
  email: string;
  password: string;
  phone: string;
  name: string;
};
