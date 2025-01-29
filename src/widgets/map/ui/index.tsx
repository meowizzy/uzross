import { Iframe } from "@ui/iframe/ui";
import { getMap } from "../lib/getMap";

type PropsType = {
  longitude: string;
  latitude: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  loading?: boolean;
  error?: boolean;
  className?: string;
};

export const Map = (props: PropsType) => {
  const {
    longitude,
    latitude,
    borderRadius = "var(--radius-md)",
    width = "200px",
    height = "162px",
    ...restProps
  } = props;

  return (
    <Iframe
      src={getMap(longitude, latitude)}
      borderRadius={borderRadius}
      width={width}
      height={height}
      {...restProps}
    />
  );
};
