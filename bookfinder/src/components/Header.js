import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink}  from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#ccccff'}} position='sticky'>
            <Toolbar>
              <NavLink to='/' style={{color:"white"}}>
            <Typography><BookIcon sx={{color:"#000066"}}/></Typography>
              </NavLink>
              <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center", color: "#000066", fontFamily: "Arial, sans-serif", fontWeight: "bold", fontSize: "28px", textShadow: "1px 1px #ccccff" }}> Library Book Finder </Typography>
            <Tabs sx={{ml:'auto'}} textColor="inherit" indicatorColor="secondary"  value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label='Add Books' sx={{color:"#000066"}}/>
                <Tab LinkComponent={NavLink} to="/books" label='Books' sx={{color:"#000066"}}/>
                <Tab LinkComponent={NavLink} to="/about" label='About Us' sx={{color:"#000066"}}/>
            </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header;
