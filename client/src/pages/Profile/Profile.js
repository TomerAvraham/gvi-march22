import React from "react";
import {updateUserbyid} from "../../services/user.service"
import { useForm } from "react-hook-form";
import AdbIcon from '@mui/icons-material/Adb';
import {
  Grid,
  TextField,
  Paper,
  Box,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import classes from "../Profile/Profile.module.css";

const updateUser="";

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    updateUser=data;
    console.log(data);
    updateUserbyid()
  };

  const TextFieldArray=[
    {label:"First Name",register:"firstName"},
    {label:"Last Name",register:"lastName"},
    {label:"Start-Up",register:"startUp"},
    {label:"Mentoring",register:"mentoring"},
    {label:"Location",register:"location"},
    {label:"About",register:"about"},
    {label:"LNKD",register:"lnkd"},
    {label:"Facebook",register:"facebook"},
    {label:"Instagram",register:"instagram"},
    {label:"GitHub",register:"github"},
    {label:"Expertise",register:"expertise"},
  ]

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <Typography variant="h4" gutterBottom className={classes.title_design}>
            Update Profile Information
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
 
         {TextFieldArray.map((Table,index)=>{
          return(
              <TextField
              className={classes.margin_textfield}
              key={index}
              label={Table.label}
              variant="outlined"
              {...register(Table.register)}
            />
          )
         })}

            <TextField
              className={classes.margin_textfield}
              label="Phone Number"
              variant="outlined"
              {...register("phoneNumber", { 
                pattern:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i,
                })}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber && "Enter a valid phone number"}
            />
             <TextField
              className={classes.margin_textfield}
              label="Email"
              variant="outlined"
              {...register("email", {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              error={errors.email}
              helperText={errors.email && "Enter a valid email address"}
            />
            <Button variant="contained" type="submit" className={classes.button_design}>
              Submit
            </Button>
          </form>
        </Grid>
        <Divider orientation="vertical" flexItem>
          GVI
        </Divider>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3} className={classes.paper_design}>
            <Box p={2} className={classes.box_design}>
            <Typography variant="h5" gutterBottom className={classes.text_paper_design}>
               Please Enter your correct and updated 
               information to continue using the website
              </Typography>
              <img 
                className={classes.img_design}
                src="/profileIconToProfilePage.png"
                alt="Profile Icon"
                >
              </img>
              <Typography className={classes.text_paper_design}>THANK YOU</Typography>
              <div className={classes.company_div}>
              <AdbIcon/>
              <Typography className={classes.gvi_design}>GVI</Typography>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
export {updateUser};
