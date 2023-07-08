import {SchemaDefinitionWithShorthand} from "simpl-schema/dist/esm/types";
import SimpleSchema from "simpl-schema";
import SimpleSchema2Bridge from "uniforms-bridge-simple-schema-2";

export function createFormSchema(schemaDef: SchemaDefinitionWithShorthand) {
    const formSchema = new SimpleSchema(schemaDef);
    const formBridge = new SimpleSchema2Bridge({schema: formSchema});
    return formBridge;
}
