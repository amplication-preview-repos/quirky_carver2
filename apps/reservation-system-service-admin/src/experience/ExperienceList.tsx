import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { GUIDE_TITLE_FIELD } from "../guide/GuideTitle";

export const ExperienceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Experiences"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
