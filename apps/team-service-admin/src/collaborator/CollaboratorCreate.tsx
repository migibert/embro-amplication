import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TeamTitle } from "../team/TeamTitle";
import { CollaboratorSkillTitle } from "../collaboratorSkill/CollaboratorSkillTitle";

export const CollaboratorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstname" source="firstname" />
        <TextInput label="lastname" source="lastname" />
        <DateTimeInput label="entrydate" source="entrydate" />
        <TextInput label="position" source="position" />
        <DateTimeInput label="birthdate" source="birthdate" />
        <ReferenceInput source="team.id" reference="Team" label="Team">
          <SelectInput optionText={TeamTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="collaboratorSkills"
          reference="CollaboratorSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CollaboratorSkillTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
