export type Role = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  admin: string | null;
  user: string | null;
};
