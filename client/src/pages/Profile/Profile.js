import React from "react";
import {updateUserbyid} from "../../services/user.service"
import { useForm } from "react-hook-form";
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

function Profile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit =  async (data) => {
    console.log(data)
    await updateUserbyid(data);
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
          <Typography variant="h3" gutterBottom className={classes.title_design}>
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
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item xs={12} md={6} lg={4}>
          <Paper elevation={3}>
            <Box p={2}>
              <Typography variant="h5" gutterBottom>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
