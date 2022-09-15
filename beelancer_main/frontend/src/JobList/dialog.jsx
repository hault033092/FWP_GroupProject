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
        {/* <DialogTitle variant="h4">client's name</DialogTitle> */}
        <DialogContent>
          <Typography variant="h5">{title}</Typography>
          <DialogContentText variant="h6" component="p" className="py-2">
            {description}
          </DialogContentText>
          <Typography variant="h6" className="!py-1">
            Skills: {skills}
          </Typography>
          <div className="flex justify-between">
            <Typography variant="h6">Job: {jobCategory}</Typography>
            <Typography variant="h6">Budget: ${budget}</Typography>
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
