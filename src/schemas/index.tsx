import * as Yup from "yup";
import { rutSchema } from "./fields";

export const LoginSchema = Yup.object().shape({
  rut: rutSchema
});
