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
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="outlined-firstName"
              label="First Name"
              variant="outlined"
              {...register("firstName", { required: true })}
              error={errors.firstName}
              helperText={errors.firstName && "First Name is required"}
            />
            <TextField
              id="outlined-lastName"
              label="Last Name"
              variant="outlined"
              {...register("lastName", { required: true })}
              error={errors.lastName}
              helperText={errors.lastName && "Last Name is required"}
            />

            <TextField
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
              id="outlined-role"
              label="Role"
              variant="outlined"
              {...register("role", { required: true })}
              error={errors.role}
              helperText={errors.role && "Role is required"}
            />
            <TextField
              id="outlined-startUp"
              label="Start-Up"
              variant="outlined"
              {...register("startUp")}
            />
            <TextField
              id="outlined-mentoring"
              label="Mentoring"
              variant="outlined"
              {...register("mentoring")}
            />
            <TextField
              id="outlined-location"
              label="Location"
              variant="outlined"
              {...register("location")}
            />
            <TextField
              id="outlined-lnkd"
              label="LNKD"
              variant="outlined"
              {...register("lnkd")}
            />
            <TextField
              id="outlined-facebook"
              label="Facebook"
              variant="outlined"
              {...register("facebook")}
            />
            <TextField
              id="outlined-instagram"
              label="Instagram"
              variant="outlined"
              {...register("instagram")}
            />
            <TextField
              id="outlined-github"
              label="GitHub"
              variant="outlined"
              {...register("github")}
            />
            <TextField
              id="outlined-expertise"
              label="Expertise"
              variant="outlined"
              {...register("expertise")}
            />
            <TextField
              id="outlined-phonenumber"
              label="Phone Number"
              variant="outlined"
              {...register("phoneNumber", { required: true })}
              error={errors.phoneNumber}
              helperText={errors.phoneNumber && "Phone Number is required"}
            />
            <TextField
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
