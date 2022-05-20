import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Paper from '@mui/material/Paper';
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import AddchartRoundedIcon from "@mui/icons-material/AddchartRounded";
import WatchRoundedIcon from "@mui/icons-material/WatchRounded";

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <InsertChartOutlinedSharpIcon></InsertChartOutlinedSharpIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">DIAGNOSTICA</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <AddchartRoundedIcon></AddchartRoundedIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">
                                ANALISI DETTAGLIATA
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <WatchRoundedIcon></WatchRoundedIcon>
                            </ListItemIcon>
                            <ListItemText typography="true">POLAR</ListItemText>
                        </ListItem>
                    </List>
                </Box>
        
      </Drawer>
    </Box>
  );
}
