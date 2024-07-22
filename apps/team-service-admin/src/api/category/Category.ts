import { Skill } from "../skill/Skill";

export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  skills?: Array<Skill>;
};
