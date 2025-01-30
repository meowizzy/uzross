import { FormEventHandler, memo, useEffect } from "react";
import { $callbackForm } from "@features/callback";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { Textarea } from "@ui/textarea";
import { Title } from "@ui/title";
import SuccessIcon from "@assets/svg/success.svg";
import cls from "../styles.module.scss";

export const CallbackForm = memo(() => {
  const { t } = useTranslation("home");
  const { success, loading, error } = useUnit($callbackForm.store);

  const onSubmitForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const name = formData.get("name").toString();
    const phone = formData.get("phone").toString();
    const email = formData.get("email").toString();
    const message = formData.get("message").toString();

    $callbackForm.effect({
      name,
      phone,
      email,
      message,
    });
  };

  if (success) {
    return (
      <div className={cls.successDialog}>
        <div className={cls.successIcon}>
          <SuccessIcon />
        </div>
        <Title
          size={"xl"}
          title={
            "Заявка успешно отправлена. Мы свяжемся с Вами в ближайшее время."
          }
        />
      </div>
    );
  }

  return (
    <div className={cls.callbackForm}>
      <Title
        title={t("fields.sendMessage")}
        size={"lg"}
        className={cls.callbackFormTitle}
      />
      <form onSubmit={onSubmitForm}>
        <div className={cls.formField}>
          <Input
            placeholder={t("fields.name")}
            name={"name"}
            required
            wrapperClassName={cls.callbackFormInput}
          />
        </div>
        <div className={cls.formField}>
          <Input
            placeholder={t("fields.phone")}
            name={"phone"}
            required
            wrapperClassName={cls.callbackFormInput}
          />
        </div>
        <div className={cls.formField}>
          <Input
            placeholder={t("fields.email")}
            name={"email"}
            type={"email"}
            required
            wrapperClassName={cls.callbackFormInput}
          />
        </div>
        <div className={cls.formField}>
          <Textarea
            placeholder={t("fields.message")}
            name={"message"}
            required
            rows={4}
            wrapperClassName={cls.callbackFormInput}
          />
        </div>
        <Button
          loading={loading}
          type="submit"
          className={cls.callbackFormSubmit}
        >
          {t("fields.send")}
        </Button>
      </form>
    </div>
  );
});
