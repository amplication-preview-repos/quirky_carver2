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

import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { SUBCATEGORY_TITLE_FIELD } from "../subcategory/SubcategoryTitle";
import { SUBSUBCATEGORY_TITLE_FIELD } from "../subSubcategory/SubSubcategoryTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="Subcategory"
          target="categoryId"
          label="Subcategories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Category"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Place"
          target="categoryId"
          label="Places"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
