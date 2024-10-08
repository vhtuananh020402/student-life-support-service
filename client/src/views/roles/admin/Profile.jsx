import React, { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MuiTypography from '@mui/material/Typography';


// project imports
import { gridSpacing } from 'store/constant';
import MainCard from './ui-component/cards/MainCard';

// Axios instance for API requests
import axiosInstance from '../../../api/axiosInstance';  // Adjust the import path as needed

import ProfileCard from './utilities/ProfileCard';
import SchoolDetailsCard from './utilities/SchoolDetailsCard';

// ==============================|| Profile ||============================== //

const Profile = () => {


  return (
  <MainCard title="Personal Information">
    <Grid container spacing={gridSpacing}>

      <Grid item xs={12} sm={6}>
            <ProfileCard />
      </Grid>

      <Grid item xs={12} sm={6}>
            <SchoolDetailsCard/>
      </Grid>


      
    </Grid>
  </MainCard>
  );
}

export default Profile;
