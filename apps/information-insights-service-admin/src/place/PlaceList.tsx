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
import { SUBCATEGORY_TITLE_FIELD } from "../subcategory/SubcategoryTitle";
import { SUBSUBCATEGORY_TITLE_FIELD } from "../subSubcategory/SubSubcategoryTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const PlaceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Places"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="location" source="location" />
        <TextField label="type" source="typeField" />
        <ReferenceField
          label="Subcategory"
          source="subcategory.id"
          reference="Subcategory"
        >
          <TextField source={SUBCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SubSubcategory"
          source="subsubcategory.id"
          reference="SubSubcategory"
        >
          <TextField source={SUBSUBCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
