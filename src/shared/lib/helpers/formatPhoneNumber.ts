export const formatPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) {
    return null;
  }

  return phoneNumber.split(" ").join("");
};
