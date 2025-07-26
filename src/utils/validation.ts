export const validationRules = {
    text: {
        regex: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/,
        message: 'Solo letras, espacios, guiones y apóstrofes.'
    },
    email: {
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Formato de correo electrónico inválido.'
    },
    // ... Resto de reglas de validación ...
};

export const validateField = (value: string, type: string) => {
    // ... Lógica de validación ...
};
