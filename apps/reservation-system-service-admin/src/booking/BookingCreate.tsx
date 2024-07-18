import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { ExperienceTitle } from "../experience/ExperienceTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
