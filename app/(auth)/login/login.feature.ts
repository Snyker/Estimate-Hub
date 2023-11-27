import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup.string()
        .email("L'email doit être valide.")
        .required("L'email est obligatoire."),
    password: yup.string()
        .min(6, 'Le mot de passe ne doit pas être inférieur à 6 caractères.')
        .max(64, 'Le mot de passe ne doit pas excéder 64 caractères.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,64}$/, "Le mot de passe doit respecter les conditions.")
        .required("Le mot de passe est obligatoire.")
});

export const loginDefaultValue = {
    email: '',
    password: ''
}
