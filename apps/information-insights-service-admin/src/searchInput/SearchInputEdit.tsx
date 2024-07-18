import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SearchInputEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="query" source="query" />
      </SimpleForm>
    </Edit>
  );
};
