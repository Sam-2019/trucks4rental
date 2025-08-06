import { useState } from "react";
import ForeignForm from "./form";

const Foreign = ({ onClose }) => {
  const [active, setActve] = useState(null);
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      {!active && <div></div>}
      {active === "form" && <ForeignForm onClose={onClose} />}
    </div>
  );
};

export default Foreign;
