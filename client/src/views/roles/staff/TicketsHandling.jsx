import React, { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import MainCard from 'views/roles/student/ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// Axios instance for API requests
import axiosInstance from '../../../api/axiosInstance';  // Adjust the import path as needed

import TicketsHandlingListCard from './utilities/TicketsHandlingListCard';



const TicketsHandling = () => {
  const [ticketCardUpdate, setTicketCardUpdate] = useState(false);

  const handleTicketCardUpdate = () => {
    setTicketCardUpdate((prevState) => !prevState); // Toggle the state to trigger a re-render
  };

  return (
    // <MainCard title="Ticket List">
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
          {/* Pass profileUpdated to trigger refetch or rerender in ProfileCard */}
          <TicketsHandlingListCard onTicketCardUpdate={handleTicketCardUpdate} />
        </Grid>



      </Grid>

    // </MainCard>
  );
}

export default TicketsHandling;
