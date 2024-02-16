import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Container, List, ListItem, ListItemAvatar, Avatar, ListItemText, Paper, TextField, Button, Grid } from '@mui/material';

const Chat = ({ username, socket }) => {
  const [users, setUsers] = useState([]);
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('new-user', (updatedUsers) => {
      setUsers(updatedUsers);
    });

    socket.on('new-message', (updatedMsgs) => {
      setMsgs(updatedMsgs);
    });

  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('send-message', { username, msg: input });
    setInput('');
  };

  const getAvatarColor = (username) => {
    // You can use a color library or create a custom function to generate a color based on the username
    // For simplicity, here's a basic example using a hash function
    const hashCode = (str) => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
      }
      return hash;
    };
    const color = `hsl(${hashCode(username) % 360}, 70%, 50%)`;
    return color;
  };
  return (
    <Container maxWidth="md"  style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', minHeight: '500px', backgroundColor: '#fff' }}>
      <Typography variant="h4" gutterBottom>
        Groupe Chat
      </Typography>

      <Paper elevation={3} style={{ padding: '16px', marginBottom: '16px', height: '300px', overflowY: 'auto', border: '1px solid #ddd', borderRadius: '8px' }}>
      <List>
  {msgs.map((msg, i) => (
    <ListItem key={i} style={{ backgroundColor: '#f5f5f5', borderRadius: '8px', marginBottom: '8px' }}>
      <ListItemAvatar>
        <Avatar style={{ backgroundColor: getAvatarColor(msg.username) }}>{msg.username[0].toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={msg.username}
        secondary={msg.msg}
        primaryTypographyProps={{ style: { fontWeight: 'bold', color: getAvatarColor(msg.username) } }}
        secondaryTypographyProps={{ style: { color: '#333' } }}
      />
    </ListItem>
  ))}
</List>
      </Paper>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              label="Type your message"
              variant="outlined"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Chat;
