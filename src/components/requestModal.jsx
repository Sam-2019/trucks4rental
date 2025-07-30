import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import Stepper from "./steps/stepper";

const RequestModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white !max-w-300">
        <DialogTitle />
        <DialogDescription />
        <Stepper onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default RequestModal;
