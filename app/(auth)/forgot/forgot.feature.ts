import * as yup from 'yup';

export const forgotSchema = yup.object({
    email: yup.string()
        .email("L'email doit être valide.")
        .required("L'email est obligatoire."),
});

export const forgotDefaultValue = {
    email: '',
}
