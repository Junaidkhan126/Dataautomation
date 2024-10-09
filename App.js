import React from "react";
import Siderbar from "./compoents/Siderbar";

const App = () => {
  return (
    <>
      <Siderbar />
    </>
  );
};

export default App;

// import * as React from "react";
// import {
//   Box,
//   Drawer,
//   AppBar,
//   CssBaseline,
//   Toolbar,
//   List,
//   Typography,
//   Divider,
//   ListItem,
//   ListItemIcon,
//   Avatar,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
// } from "@mui/material";
// import {
//   DomainVerificationOutlined,
//   EventNoteOutlined,
//   EventOutlined,
//   ExpandMoreSharp,
//   FolderSharedOutlined,
//   HowToRegSharp,
// } from "@mui/icons-material";

// const drawerWidth = 240;

// const drawerItems = [
//   { icon: <FolderSharedOutlined />, label: "Email Campaign", color: "#d50000" },
//   { icon: <EventOutlined />, label: "Marketing", color: "#eeff41" },
//   {
//     icon: <DomainVerificationOutlined />,
//     label: "Infrastructure",
//     color: "#8e24aa",
//   },
//   { icon: <HowToRegSharp />, label: "Engineering", color: "#1de9b6" },
// ];

// const cardContent = (
//   <>
//     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//       Word of the Day
//     </Typography>
//     <Typography variant="h5" component="div">
//       be
//       {
//         <Box
//           component="span"
//           sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//         >
//           •
//         </Box>
//       }
//       nev
//       {
//         <Box
//           component="span"
//           sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//         >
//           •
//         </Box>
//       }
//       o
//       {
//         <Box
//           component="span"
//           sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//         >
//           •
//         </Box>
//       }
//       lent
//     </Typography>
//     <Typography sx={{ mb: 1.5 }} color="text.secondary">
//       adjective
//     </Typography>
//     <Typography variant="body2">
//       well meaning and kindly.
//       <br />
//       {'"a benevolent smile"'}
//     </Typography>
//   </>
// );

// export default function Sidebar() {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap>
//             Website updates
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ display: "flex", p: "12px" }}>
//           <ExpandMoreSharp />
//           <Typography sx={{ fontFamily: "serif" }}>STARRED</Typography>
//         </Box>
//         <Box sx={{ overflow: "auto" }}>
//           <Box
//             sx={{
//               display: "flex",
//               p: "12px",
//               backgroundColor: "#e0e0e0",
//               borderRadius: "20px",
//             }}
//           >
//             <Avatar
//               sx={{ backgroundColor: "#40c4ff", m: "4px" }}
//               variant="rounded"
//             >
//               <EventNoteOutlined />
//             </Avatar>
//             <Typography variant="h6" sx={{ fontFamily: "serif", pt: "6px" }}>
//               Website updates
//             </Typography>
//           </Box>
//           <Box sx={{ display: "flex", p: "12px" }}>
//             <ExpandMoreSharp />
//             <Typography sx={{ fontFamily: "serif" }}>RECENT</Typography>
//           </Box>
//           <List>
//             {drawerItems.map((item, index) => (
//               <ListItem key={index}>
//                 <ListItemIcon>
//                   <Avatar
//                     sx={{ backgroundColor: item.color, m: "4px" }}
//                     variant="rounded"
//                   >
//                     {item.icon}
//                   </Avatar>
//                 </ListItemIcon>
//                 <Typography variant="h6" sx={{ fontFamily: "serif" }}>
//                   {item.label}
//                 </Typography>
//               </ListItem>
//             ))}
//           </List>
//           <Typography
//             variant="h6"
//             sx={{ fontFamily: "serif", textAlign: "center" }}
//           >
//             View all projects
//           </Typography>
//         </Box>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {[
//             "Summary",
//             "Board",
//             "List",
//             "Calendar",
//             "Timeline",
//             "Forms",
//             "Pages",
//             "Issues",
//             "Reports",
//             "Shortcuts",
//             "Apps",
//             "Project settings",
//           ].map((text) => (
//             <Typography
//               key={text}
//               variant="h6"
//               sx={{ p: "4px", fontFamily: "serif", textAlign: "center" }}
//             >
//               {text}
//             </Typography>
//           ))}
//           <ExpandMoreSharp sx={{ mt: "10px" }} />
//         </Box>
//         <Divider />
//         <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
//           {[...Array(5)].map((_, index) => (
//             <Card key={index} sx={{ minWidth: 275 }}>
//               <CardContent>{cardContent}</CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// }
