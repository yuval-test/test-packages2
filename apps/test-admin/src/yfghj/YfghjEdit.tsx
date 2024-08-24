import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const YfghjEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ds" source="ds" />
      </SimpleForm>
    </Edit>
  );
};
