import React from "react";
import { Container, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const PrivacyPolicy = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 5,
      }}
    >
      <Typography variant="h4" gutterBottom>
        {/* <PrivacyTipIcon fontSize="large" color="primary"/> */}
        Privacy Policy
      </Typography>
      <Typography variant="p" align="center" fontSize={18} mb={5} gutterBottom>
        This Privacy Policy explains how we collect, use, and disclose your
        personal information when you use our website.
      </Typography>

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Introduction</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This Privacy Policy explains how we collect, use, and disclose
              your personal information when you use our website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Collection of Personal Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We collect your personal information when you fill out a form on
              our website or interact with us in other ways, such as via email
              or social media.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Use of Personal Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We use your personal information to provide you with our products
              and services and to improve and personalize your experience on our
              website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography>Disclosure of Personal Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We may disclose your personal information to third-party service
              providers who help us operate our website and provide our products
              and services.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography>Contact Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you have any questions or concerns about our Privacy Policy,
              please contact us at privacy@yourwebsite.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
