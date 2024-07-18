import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GuideList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Guides"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="rating" source="rating" />
        <TextField label="availability" source="availability" />
        <TextField label="coverage" source="coverage" />
        <TextField label="name" source="name" />
        <TextField label="bio" source="bio" />
      </Datagrid>
    </List>
  );
};
