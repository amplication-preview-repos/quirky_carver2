import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubcategoryTitle } from "../subcategory/SubcategoryTitle";
import { PlaceTitle } from "../place/PlaceTitle";

export const SubSubcategoryCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="subcategory.id"
          reference="Subcategory"
          label="Subcategory"
        >
          <SelectInput optionText={SubcategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="places"
          reference="Place"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PlaceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
