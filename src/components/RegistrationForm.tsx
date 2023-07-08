import { createFormSchema} from "../utils/createFormModel.ts";
import {AutoForm} from "uniforms-antd";


const registrationSchema = createFormSchema({
    username: {
        label: 'User Name', type: String, min: 2, max: 20,
    },

    workExperience: {
        label: 'Work experience in years', type: Number,
        min: 0,
        max: 30,
    },

    mailingAddress: {
        type: Object,
        label: "Mailing Address",
    },
    "mailingAddress.street": {
        type: String,
        label: "Street",
    },
    "mailingAddress.city": {
        type: String,
        label: "City",
    },

    comments: {
        label: "Additional Comments",
        type: String,
        defaultValue: "",
        optional: true,
    },
})
export function RegistrationForm() {
    return <AutoForm schema={registrationSchema} onSubmit={(model: any) => alert(JSON.stringify(model, null, 2))} />;
}
