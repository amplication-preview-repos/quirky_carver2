import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { GuideTitle } from "../guide/GuideTitle";
import { BookingTitle } from "../booking/BookingTitle";

export const ExperienceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <NumberInput step={1} label="duration" source="duration" />
        <NumberInput label="price" source="price" />
        <div />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="guide.id" reference="Guide" label="Guide">
          <SelectInput optionText={GuideTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="bookings"
          reference="Booking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BookingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
