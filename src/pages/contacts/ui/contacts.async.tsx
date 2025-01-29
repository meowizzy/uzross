import { lazy } from "react";

const ContactsAsync = lazy(async () => import("./index"));

export default ContactsAsync;
