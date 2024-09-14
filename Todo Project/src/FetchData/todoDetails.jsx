import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
} from "@mui/material";

function TodoDetailsShow({ todoDetails, openDialog, onClose }) {
  console.log(todoDetails);

  return (
    <>
      <Dialog open={openDialog} onClose={onClose}>
        <DialogTitle>{todoDetails.todo}</DialogTitle>
        <DialogContent>
          <p>User Id: {todoDetails.userId}</p>
          <p>Completed: {todoDetails.completed ? "Completed" : "Pending"}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default TodoDetailsShow;
