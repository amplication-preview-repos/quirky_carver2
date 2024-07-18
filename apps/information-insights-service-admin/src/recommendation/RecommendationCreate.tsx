import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaceTitle } from "../place/PlaceTitle";

export const RecommendationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="details" multiline source="details" />
        <ReferenceInput source="place.id" reference="Place" label="Place">
          <SelectInput optionText={PlaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
