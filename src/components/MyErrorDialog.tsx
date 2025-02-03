import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

interface ErrorDialogProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

// const navigate=useNavigate();
// const onClose2=()=>{
// navigate('/')
// }

const MyErrorDialog = ({ open, onClose, message }: ErrorDialogProps) => (

  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Error</DialogTitle>
    <DialogContent>{message}</DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
  
);

export default MyErrorDialog;