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
} from "react-admin";

import { PLACE_TITLE_FIELD } from "./PlaceTitle";
import { SUBCATEGORY_TITLE_FIELD } from "../subcategory/SubcategoryTitle";
import { SUBSUBCATEGORY_TITLE_FIELD } from "../subSubcategory/SubSubcategoryTitle";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const PlaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Recommendation"
          target="placeId"
          label="Recommendations"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="title" source="title" />
            <TextField label="details" source="details" />
            <ReferenceField label="Place" source="place.id" reference="Place">
              <TextField source={PLACE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
