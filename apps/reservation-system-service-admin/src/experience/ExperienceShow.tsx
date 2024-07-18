import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { EXPERIENCE_TITLE_FIELD } from "./ExperienceTitle";
import { GUIDE_TITLE_FIELD } from "../guide/GuideTitle";

export const ExperienceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="duration" source="duration" />
        <TextField label="price" source="price" />
        <TextField label="pricingRule" source="pricingRule" />
        <TextField label="description" source="description" />
        <ReferenceField label="Guide" source="guide.id" reference="Guide">
          <TextField source={GUIDE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Booking"
          target="experienceId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
