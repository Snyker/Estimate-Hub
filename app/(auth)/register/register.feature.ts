import * as yup from 'yup';

export const registerSchema = yup.object({
    email: yup.string()
        .email("L'email doit être valide.")
        .required("L'email est obligatoire."),
    password: yup.string()
        .min(6, 'Le mot de passe ne doit pas être inférieur à 6 caractères.')
        .max(64, 'Le mot de passe ne doit pas excéder 64 caractères.')
        .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,64}$/, "Le mot de passe doit respecter les conditions.")
        .required("Le mot de passe est obligatoire."),
    firstName: yup.string()
        .min(2, 'Le prénom ne doit pas être inférieur à 2 caractères.')
        .max(64, 'Le prénom ne doit pas excéder 64 caractères.')
        .required("Le prénom est obligatoire."),
    lastName: yup.string()
        .min(2, 'Le nom de famille ne doit pas être inférieur à 2 caractères.')
        .max(64, 'Le nom de famille ne doit pas excéder 64 caractères.')
        .required("Le nom de famille est obligatoire.")
});

export const registerDefaultValue = {
    email: '',
    password: ''
}
