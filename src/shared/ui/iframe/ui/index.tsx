import React, { memo, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

type PropsType = Omit<
  React.IframeHTMLAttributes<HTMLIFrameElement>,
  "loading"
> & {
  className?: string;
  loading?: boolean;
  error?: boolean;
  borderRadius?: string;
  width: string;
  height: string;
  skeletonTheme?: "light" | "dark" | "darken";
};

type TIframeState = {
  loading: boolean;
  error: boolean;
};

export const Iframe = memo((props: PropsType) => {
  const {
    className,
    onLoad,
    onError,
    loading,
    borderRadius,
    width,
    height,
    skeletonTheme = "light",
    error,
    ...restProps
  } = props;
  const [iframeState, setIframeState] = useState<TIframeState>({
    loading: true,
    error: false,
  });
  const timerRef = useRef(null);

  const classesCompose = cn(cls.iframeWrapper, className, {
    [cls.loaded]: !iframeState.loading,
  });

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const onLoadIframe = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    setIframeState((prevState) => {
      return {
        ...prevState,
        loading: false,
        error: false,
      };
    });

    if (onLoad) {
      onLoad(event);
    }
  };

  const onErrorIframe = (event: React.SyntheticEvent<HTMLIFrameElement>) => {
    setIframeState((prevState) => {
      return {
        ...prevState,
        error: true,
        loading: false,
      };
    });

    if (onError) {
      onError(event);
    }
  };

  const handleTimeout = () => {
    setIframeState((prevState) => {
      return {
        ...prevState,
        error: true,
        loading: false,
      };
    });
  };

  useEffect(() => {
    if (iframeState.loading) {
      timerRef.current = setTimeout(handleTimeout, 10000);
    } else {
      clearTimeout(timerRef.current);
    }
  }, [iframeState.loading]);

  if (error || iframeState.error) {
    return null;
  }

  return (
    <div className={classesCompose} style={{ borderRadius, width, height }}>
      {(iframeState.loading || loading) && (
        <Skeleton
          className={cls.skeleton}
          borderRadius={borderRadius}
          width={"100%"}
          height={"100%"}
          theme={skeletonTheme}
        />
      )}
      <iframe onLoad={onLoadIframe} onError={onErrorIframe} {...restProps} />
    </div>
  );
});
