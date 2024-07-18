import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ExperienceTitle } from "../experience/ExperienceTitle";

export const GuideCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="rating" source="rating" />
        <div />
        <div />
        <TextInput label="name" source="name" />
        <TextInput label="bio" multiline source="bio" />
        <ReferenceArrayInput
          source="experiences"
          reference="Experience"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExperienceTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
