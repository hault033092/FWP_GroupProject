import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function CustomDialog({ open, handleClose, data }) {
  //   console.log(data);
  const { title, description, budget, skills, jobCategory, client } = data;
  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle variant="h7" className="border-b">Client's name: {client}</DialogTitle>
        <DialogContent>
          <Typography variant="h5" className="!text-center !m-4">Title: {title}</Typography>
          <hr />
          <DialogContentText variant="h6" component="p" className="py-2 !mt-4">
            Description: {description}
          </DialogContentText>
          <Typography variant="h6" className="!py-1 !mt-4">
            <span style={{fontWeight: 'bold'}}>Skills: </span>{skills}
          </Typography>
          <div className="flex justify-between">
            <Typography variant="h6"><span style={{fontWeight: 'bold'}}>Job: </span>{jobCategory}</Typography>
            <Typography variant="h6"> <span style={{fontWeight: 'bold'}}>Budget: </span>${budget}</Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            className="!bg-yellow-300 !hover:bg-yellow-400 !relative !px-3 !py-2 !rounded-md !font-semibold !text-black !tracking-normal !text-sm "
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CustomDialog;
