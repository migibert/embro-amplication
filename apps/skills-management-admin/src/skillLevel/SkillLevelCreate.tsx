import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkillTitle } from "../skill/SkillTitle";
import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";

export const SkillLevelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="level" source="level" />
        <ReferenceInput source="skill.id" reference="Skill" label="Skill">
          <SelectInput optionText={SkillTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="collaborator.id"
          reference="Collaborator"
          label="Collaborator"
        >
          <SelectInput optionText={CollaboratorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
