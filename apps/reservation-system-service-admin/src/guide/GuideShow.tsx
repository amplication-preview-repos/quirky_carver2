import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { GUIDE_TITLE_FIELD } from "./GuideTitle";

export const GuideShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="rating" source="rating" />
        <TextField label="availability" source="availability" />
        <TextField label="coverage" source="coverage" />
        <TextField label="name" source="name" />
        <TextField label="bio" source="bio" />
        <ReferenceManyField
          reference="Experience"
          target="guideId"
          label="Experiences"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
