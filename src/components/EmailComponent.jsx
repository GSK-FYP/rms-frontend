import React, { useState } from 'react';
import { Box, Typography, Badge, IconButton, Dialog, DialogTitle, DialogContent, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { EmailOutlined, DeleteOutlined } from '@mui/icons-material';

const EmailComponent = () => {
  const [open, setOpen] = useState(false);
  const [emails, setEmails] = useState([
    { id: 1, subject: 'Application For School Head', content: 'Amazon Web Services', date: '2023-07-05, 3:23 AM'},
    { id: 2, subject: 'Permission To Be Absent', content: 'LinkedIn', date: '2023-07-04, 9:47 PM' },
    { id: 3, subject: 'Email 3', content: 'Ann from Hyperskill', date: '2023-07-03, 9:47 PM' },
    { id: 4, subject: 'Email 1', content: 'Dani from Hashnode', date: '2023-07-05, 9:47 PM' },
    { id: 5, subject: 'Email 2', content: 'edX Team', date: '2023-07-04, 9:47 PM' },
    { id: 6, subject: 'Email 3', content: 'This is the content of email 3', date: '2023-07-03, 9:47 PM' },
    { id: 7, subject: 'Email 1', content: 'This is the content of email 1', date: '2023-07-05, 8:25 PM'},
    { id: 8, subject: 'Email 2', content: 'This is the content of email 2', date: '2023-07-04, 3:23 AM' },
    { id: 9, subject: 'Email 3', content: 'This is the content of email 3', date: '2023-07-03, 9:47 PM' },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (emailId) => {
    setEmails((prevEmails) => prevEmails.filter((email) => email.id !== emailId));
  };

  return (
    <Box>
      <IconButton onClick={handleOpen}>
        <Badge badgeContent={emails.length === 0 ? '0' : emails.length} color="error">
          <EmailOutlined />
        </Badge>
      </IconButton>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle color="secondary" fontSize={20} textAlign="center">
          Emails
        </DialogTitle>
        <DialogContent>
          {emails.length === 0 ? (
            <Typography variant="body1">No emails to display</Typography>
          ) : (
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>Subject</TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>Correspondents</TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>Date</TableCell>
                  <TableCell sx={{ fontSize: 16, fontWeight: 'bold' }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {emails.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell sx={{ fontSize: 14, fontWeight: '400' }}>{email.subject}</TableCell>
                    <TableCell sx={{ fontSize: 14, fontWeight: '400' }}>{email.content}</TableCell>
                    <TableCell sx={{ fontSize: 14, fontWeight: '400' }}>{email.date}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(email.id)}>
                        <DeleteOutlined />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          <Button onClick={handleClose} color="primary" variant="contained" fullWidth>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default EmailComponent;
