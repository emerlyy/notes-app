import { useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  elementRef: React.RefObject<T | null>,
  handler: () => void,
  attached = true
) => {
  useEffect(() => {
    if (!attached) return;

    let insideMouseDown = false;

    const handleMouseDown = (event: MouseEvent) => {
      if (!elementRef.current) return;
      insideMouseDown = elementRef.current.contains(event.target as Node);
    };

    const handleClick = (event: MouseEvent) => {
      if (!elementRef.current) return;
      const clickInsideRef =
        !elementRef.current.contains(event.target as Node) && !insideMouseDown;
      if (clickInsideRef) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, handler, attached]);
};
