import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { ExperienceTitle } from "../experience/ExperienceTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <NumberInput step={1} label="duration" source="duration" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="confirmedByGuide" source="confirmedByGuide" />
        <TextInput label="User" source="user" />
        <ReferenceInput
          source="experience.id"
          reference="Experience"
          label="Experience"
        >
          <SelectInput optionText={ExperienceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
