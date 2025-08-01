import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import LocalForm from "./local";
import InternationalForm from "./international";

const LeaseModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white !max-w-100 md:!max-w-200">
        <DialogTitle />
        <DialogDescription />
        <Lease onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default LeaseModal;

const Lease = ({ onClose }) => {
  const [active, setActve] = useState(null);
  return (
    <div>
      {!active && (
        <div className="flex flex-row justify-center space-x-5">
          <p
            className="border-2 rounded-lg w-40 md:w-70 py-20 text-center"
            onClick={() => setActve("local")}
          >
            Local
          </p>
          <p
            className="border-2 rounded-lg w-40 md:w-70 py-20 text-center"
            onClick={() => setActve("international")}
          >
            International
          </p>
        </div>
      )}

      {active === "local" && <LocalForm onClose={onClose} />}
      {active === "international" && <InternationalForm onClose={onClose} />}
    </div>
  );
};
