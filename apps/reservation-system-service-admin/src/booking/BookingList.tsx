import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EXPERIENCE_TITLE_FIELD } from "../experience/ExperienceTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
