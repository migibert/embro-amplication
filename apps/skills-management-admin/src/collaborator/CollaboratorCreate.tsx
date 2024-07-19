import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SkillLevelTitle } from "../skillLevel/SkillLevelTitle";

export const CollaboratorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="position" source="position" />
        <ReferenceArrayInput
          source="skillLevels"
          reference="SkillLevel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SkillLevelTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
