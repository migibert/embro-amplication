import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { COLLABORATOR_TITLE_FIELD } from "../collaborator/CollaboratorTitle";

export const CollaboratorSkillShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="proficiency" source="proficiency" />
        <TextField label="Skill" source="skill" />
        <ReferenceField
          label="Collaborator"
          source="collaborator.id"
          reference="Collaborator"
        >
          <TextField source={COLLABORATOR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
