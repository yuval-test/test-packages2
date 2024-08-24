import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const YfghjCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ds" source="ds" />
      </SimpleForm>
    </Create>
  );
};
