import { Skill } from "../skill/Skill";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  skills?: Array<Skill>;
};
