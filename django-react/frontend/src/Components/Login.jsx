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

export const Login = () => {
  const TextStyle = {
    width: "70%",
    marginTop: "10px",
  };
  return (
    <div>
      <Grid>
        <Paper
          elevation={10}
          sx={{ width: "40%", m: "15vh auto", height: "400px", paddingTop: 5 }}
        >
          <Grid align="center">
            <Avatar sx={{backgroundColor:'#90c3ef'}}>
              <LockOutlined></LockOutlined>
            </Avatar>
            <Typography variant="h5" component="h1" textAlign="center" m>
              Login
            </Typography>
            <TextField label="Username" sx={TextStyle} />
            <TextField label="Password" type="password" sx={TextStyle} />
          </Grid>
          <Grid align="center">
            <Button
              color="primary"
              type="submit"
              variant="contained"
              sx={{marginTop:3}}
            >
              Sign In
            </Button>
          </Grid>
          <Grid align="center" m={5}>
            <Typography>Not a User?</Typography>
            <Link>Sign Up</Link>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
};
