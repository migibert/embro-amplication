import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RoleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="admin" source="admin" />
        <TextInput label="user" source="user" />
      </SimpleForm>
    </Create>
  );
};
