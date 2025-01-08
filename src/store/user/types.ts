export type UserForm = {
  isLoading: boolean;
  currentUser: User | null;
};

export type User = {
  email: string;
  _id: string;
  phone: string;
  image: string;
};
