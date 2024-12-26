import { useImperativeHandle, useRef} from "react";
import { createPortal } from "react-dom";

export default function Modal({ref, children, ...props}) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));

  return createPortal(
    <dialog ref={ref} {...props}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
