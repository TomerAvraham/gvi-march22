import React from "react";
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

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom>
            Shoval and Shahaf
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={classes.margin_textfield}
              id="outlined-firstName"
              label="First Name"
              variant="outlined"
              {...register("firstName", { required: true })}
              error={errors.firstName}
              helperText={errors.firstName && "First Name is required"}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-lastName"
              label="Last Name"
              variant="outlined"
              {...register("lastName", { required: true })}
              error={errors.lastName}
              helperText={errors.lastName && "Last Name is required"}
            />

            <TextField
              className={classes.margin_textfield}
              id="outlined-email"
              label="Email"
              variant="outlined"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              error={errors.email}
              helperText={errors.email && "Enter a valid email address"}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-role"
              label="Role"
              variant="outlined"
              {...register("role", { required: true })}
              error={errors.role}
              helperText={errors.role && "Role is required"}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-startUp"
              label="Start-Up"
              variant="outlined"
              {...register("startUp")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-mentoring"
              label="Mentoring"
              variant="outlined"
              {...register("mentoring")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-location"
              label="Location"
              variant="outlined"
              {...register("location")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-lnkd"
              label="LNKD"
              variant="outlined"
              {...register("lnkd")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-facebook"
              label="Facebook"
              variant="outlined"
              {...register("facebook")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-instagram"
              label="Instagram"
              variant="outlined"
              {...register("instagram")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-github"
              label="GitHub"
              variant="outlined"
              {...register("github")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-expertise"
              label="Expertise"
              variant="outlined"
              {...register("expertise")}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-phonenumber"
              label="Phone Number"
              variant="outlined"
              {...register("phoneNumber", { required: true })}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber && "Phone Number is required"}
            />
            <TextField
              className={classes.margin_textfield}
              id="outlined-about"
              label="About"
              variant="outlined"
              {...register("about")}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>

        <Divider orientation="vertical" flexItem>
          VERTICAL
        </Divider>
        <Grid item xs={5}>
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
