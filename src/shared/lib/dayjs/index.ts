import dayjs from "dayjs";
import "dayjs/locale/en";
import "dayjs/locale/ru";
import "dayjs/locale/uz";

export const dayjsSetup = () => {
  dayjs.locale(localStorage.getItem("i18nextLng") || "uz");
};
