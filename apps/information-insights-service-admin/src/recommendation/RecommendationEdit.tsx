import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlaceTitle } from "../place/PlaceTitle";

export const RecommendationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="details" multiline source="details" />
        <ReferenceInput source="place.id" reference="Place" label="Place">
          <SelectInput optionText={PlaceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
