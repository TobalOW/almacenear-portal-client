import { Notyf } from "notyf";
import "notyf/notyf.min.css";

import { requiredParam } from "../../utils";

const customTypes: any = {
  duration: 7000,
  position: {
    x: "right",
    y: "top",
  },
  types: [
    {
      type: "warning",
      background: "orange",
      dismissible: true,
    },
    {
      type: "error",
      background: "indianred",
      dismissible: true,
    },
  ],
};

export const notify = (
  type: string = requiredParam("Toast type"),
  message: string = requiredParam("Toast message")
) => {
  const toast: any = new Notyf(customTypes);

  return toast.open({ type, message });
};
