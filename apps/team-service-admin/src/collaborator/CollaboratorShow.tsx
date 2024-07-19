import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COLLABORATOR_TITLE_FIELD } from "./CollaboratorTitle";
import { TEAM_TITLE_FIELD } from "../team/TeamTitle";

export const CollaboratorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstname" source="firstname" />
        <TextField label="lastname" source="lastname" />
        <TextField label="entrydate" source="entrydate" />
        <TextField label="position" source="position" />
        <TextField label="birthdate" source="birthdate" />
        <ReferenceField label="Team" source="team.id" reference="Team">
          <TextField source={TEAM_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="CollaboratorSkill"
          target="collaboratorId"
          label="CollaboratorSkills"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
