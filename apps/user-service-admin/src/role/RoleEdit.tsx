import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RoleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="admin" source="admin" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Edit>
  );
};
