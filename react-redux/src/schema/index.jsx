import * as  yup from "yup";

export const singupSchema = yup.object({
    username:yup.string().min(2).max(25).required("Please entery your name"),
    email:yup.string().email().required("Please enter your email"),
    password: yup.string().min(6).required('please enter your password'),
    confirmPassword:yup.string().required().oneOf([yup.ref('password'),null], " password must match"),
});