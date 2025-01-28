export const getMap = (
  longitude: string | number,
  latitude: string | number,
) => {
  return `https://yandex.ru/map-widget/v1/?ll=${longitude}%2C${latitude}&z=15&pt=${longitude},${latitude},pm2rdm`;
};
