import { useCallback, useEffect, useState } from "react";

const useMediaQuery = (
  query: string,
  onChange?: (event: MediaQueryListEvent) => void
) => {
  const [state, setState] = useState(window.matchMedia(query).matches);

  const onMediaChange = useCallback(
    (ev: MediaQueryListEvent) => {
      setState(ev.matches);
      onChange && onChange(ev);
    },
    [onChange]
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    media.addEventListener("change", onMediaChange);
    return () => {
      media.removeEventListener("change", onMediaChange);
    };
  }, [onMediaChange, query]);

  return state;
};

export default useMediaQuery;
