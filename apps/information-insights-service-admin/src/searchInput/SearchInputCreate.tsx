import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SearchInputCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="query" source="query" />
      </SimpleForm>
    </Create>
  );
};
