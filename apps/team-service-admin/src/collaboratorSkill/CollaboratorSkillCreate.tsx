import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CollaboratorTitle } from "../collaborator/CollaboratorTitle";

export const CollaboratorSkillCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="proficiency" source="proficiency" />
        <TextInput label="Skill" source="skill" />
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
