import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SkillTitle } from "../skill/SkillTitle";
import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";

export const SkillLevelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
