import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { EXPERIENCE_TITLE_FIELD } from "../experience/ExperienceTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="date" source="date" />
        <TextField label="duration" source="duration" />
        <TextField label="status" source="status" />
        <BooleanField label="confirmedByGuide" source="confirmedByGuide" />
        <TextField label="User" source="user" />
        <ReferenceField
          label="Experience"
          source="experience.id"
          reference="Experience"
        >
          <TextField source={EXPERIENCE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
