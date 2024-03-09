import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItemButton, ListItemText, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <Container  paddingLeft="5px">
      <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>Revenue FAQ</Typography>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif' }}>How can I track my revenue?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Times New Roman' }}>
            You can track your revenue by accessing the "Reports" section in your account dashboard. There, you will find detailed information about your earnings and sales.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif' }}>When will I receive my revenue payouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Times New Roman' }}>
            Revenue payouts are processed on a monthly basis. Payouts for a specific month are usually made within the first week of the following month.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif' }}>What payment methods are available for revenue payouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Times New Roman' }}>
            Currently, we support revenue payouts via bank transfer and PayPal. You can choose your preferred method and provide the necessary details for us to initiate the payout.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif' }}>Are there any fees associated with revenue payouts?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Times New Roman' }}>
            Depending on your chosen payout method, there may be transaction fees involved. Please refer to our terms and conditions or contact our support team for more information regarding the fees associated with revenue payouts.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif' }}>How can I update my payout information?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Times New Roman' }}>
            You can update your payout information by navigating to the "Account Settings" section in your dashboard. There, you will find an option to manage your payout preferences and update your payment details.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Additional Resources</Typography>
        <List sx={{ mt: 2 }}>
          <ListItemButton component="a" href="/help-center">
            <ListItemText primary="Help Center" />
          </ListItemButton>
          <ListItemButton component="a" href="/contact-us">
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </List>
      </Box>
    </Container>
  );
};

export default FAQ;
