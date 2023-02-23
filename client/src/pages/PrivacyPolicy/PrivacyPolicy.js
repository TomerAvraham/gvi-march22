import React from "react";
import { Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        marginTop: 8,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <div sx={{ margin: "4, 0" }}>
        <Typography variant="h6" gutterBottom>
          Introduction
        </Typography>
        <Typography variant="body1" gutterBottom>
          This Privacy Policy explains how we collect, use, and disclose your
          personal information when you use our website.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Collection of Personal Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We collect your personal information when you fill out a form on our
          website or interact with us in other ways, such as via email or social
          media.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Use of Personal Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We use your personal information to provide you with our products and
          services and to improve and personalize your experience on our
          website.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Disclosure of Personal Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may disclose your personal information to third-party service
          providers who help us operate our website and provide our products and
          services.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at privacy@yourwebsite.com.
        </Typography>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
