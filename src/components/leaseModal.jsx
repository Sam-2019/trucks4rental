import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

const LeaseModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white !max-w-300">
        <DialogTitle />
        <DialogDescription />
        <Options onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default LeaseModal;

const Options = ({ onClose }) => {
  return (
    <div className="flex flex-row justify-center space-x-5">
      <p className="border-2 rounded-lg w-70 py-20 text-center">Local</p>
      <p className="border-2 rounded-lg w-70 py-20 text-center">
        International
      </p>
    </div>
  );
};
