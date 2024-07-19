import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";
import { TeamSkillTitle } from "../teamSkill/TeamSkillTitle";

export const TeamEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="collaborators"
          reference="Collaborator"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollaboratorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="teamSkills"
          reference="TeamSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeamSkillTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
