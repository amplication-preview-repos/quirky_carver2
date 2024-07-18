import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubcategoryTitle } from "../subcategory/SubcategoryTitle";
import { SubSubcategoryTitle } from "../subSubcategory/SubSubcategoryTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { RecommendationTitle } from "../recommendation/RecommendationTitle";

export const PlaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <div />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="subcategory.id"
          reference="Subcategory"
          label="Subcategory"
        >
          <SelectInput optionText={SubcategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="subSubcategory.id"
          reference="SubSubcategory"
          label="SubSubcategory"
        >
          <SelectInput optionText={SubSubcategoryTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="Category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="recommendations"
          reference="Recommendation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecommendationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
