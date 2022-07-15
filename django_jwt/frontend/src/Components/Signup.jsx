import {
  Avatar,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import React from "react";

export const Signup = () => {
  const TextStyle = {
    width: "81%",
    marginTop: "10px",
  };
  const TextStyle1 = {
    width: "40%",
    marginTop: "10px",
    marginLeft: "3px",
    marginRight: "3px",
  };
  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          sx={{ width: "40%", m: "3vh auto", height: "600px", paddingTop: 5 }}
        >
          <Grid align="center">
            <Avatar sx={{ backgroundColor: "#90c3ef" }}>
              <LockOutlined></LockOutlined>
            </Avatar>
            <Typography variant="h5" component="h1" textAlign="center" m>
              Sign Up
            </Typography>
            <TextField label="First Name" sx={TextStyle1}/>
            <TextField label="Last Name" sx={TextStyle1}/>
            <TextField label="Phone Number" type='tel' sx={TextStyle} />
            <TextField label="Email" type='email' sx={TextStyle} />
            <TextField label="Password" type="password" sx={TextStyle} />
            <TextField label="Confirm Password" type="password" sx={TextStyle} />
          </Grid>
          <Grid align="center">
            <Button
              color="primary"
              type="submit"
              variant="contained"
              sx={{ marginTop: 3 }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid align="center" m={5}>
            <Typography>Already a User?</Typography>
            <Link>Login</Link>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
