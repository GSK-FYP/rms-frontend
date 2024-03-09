import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Lock } from '@mui/icons-material';

const Privacy = () => {
  return (
    <Container padding="5px">
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom color="secondary"  sx={{textDecoration: "underline"}}>
          Revenue Privacy Policy
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary"  >
          Information We Collect
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus ultricies risus, sed dignissim
          lacus malesuada eget. Vestibulum ut nisi massa. Donec rutrum semper felis, vitae bibendum mauris gravida
          sit amet. In hac habitasse platea dictumst. Aliquam vitae ullamcorper tortor.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary" >
          How We Use Your Information
        </Typography>
        <Typography variant="body1">
          Phasellus tristique mi sed faucibus mattis. Nunc euismod, mauris vel eleifend pulvinar, risus elit
          tristique purus, in tempus metus orci eu sapien. Sed tincidunt, felis eget fringilla sollicitudin, ipsum
          arcu commodo lacus, vitae interdum dolor urna non augue. Quisque gravida turpis sed ipsum vulputate
          tincidunt. Donec sit amet iaculis dui, non ullamcorper lacus.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary" >
          Security and Data Retention
        </Typography>
        <Typography variant="body1">
          Mauris varius lorem et justo laoreet vestibulum. In sed felis pretium, ullamcorper tellus et, bibendum
          metus. Proin vitae pulvinar elit. Sed pretium purus a ex efficitur, a congue nunc ultrices. Suspendisse
          ac pellentesque nulla, nec convallis ex. Sed vehicula magna lacus, id aliquam mauris rutrum ac.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary" >
          Your Privacy Rights
        </Typography>
        <Typography variant="body1">
          Nullam consequat, ligula sit amet porttitor fermentum, arcu mi suscipit est, a aliquet nulla mi id lorem.
          Curabitur volutpat pellentesque diam ut malesuada. Proin a nisl a arcu varius laoreet.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary" >
          Contact Us
        </Typography>
        <Typography variant="body1">
          If you have any questions about our privacy policy, please contact us at privacy@revenue.com.
        </Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h5" gutterBottom color="secondary" >
          Additional Resources
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Privacy Policy" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Lock />
            </ListItemIcon>
            <ListItemText primary="Terms of Service" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Privacy;
