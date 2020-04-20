import * as Yup from "yup";

export const rutSchema = Yup.string()
  .min(8, "Rut tiene que tener mínimo 6 dígitos")
  .max(19)
  .matches(/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/, "Rut inválido")
  .required("Rut requerido");
