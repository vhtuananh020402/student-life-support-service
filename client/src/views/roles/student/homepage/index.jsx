import { useEffect, useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';

// project imports
import EarningCard from './EarningCard';
import WelcomeCard from './WelcomeCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';

import HowToUse from './HowToUseCard';
import TicketsTable from '../utilities/TicketsTable';
import ProfileCard from '../utilities/ProfileCard';

import { gridSpacing } from 'store/constant';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import UpgradePlanCard from '../layout/MainLayout/Header/ProfileSection/UpgradePlanCard';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>

      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
              <WelcomeCard isLoading={isLoading} />
          </Grid>


          {/* <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>

          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
                />
              </Grid>
            </Grid>
          </Grid> */}


        </Grid>
      </Grid>



      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>

          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>

        </Grid>
      </Grid> */}



      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>

          <Grid item lg={4} md={12} sm={12} xs={12} >
            <ProfileCard isLoading={isLoading} />
          </Grid>


          <Grid item lg={4} md={12} sm={12} xs={12} >
            <HowToUse isLoading={isLoading} />
          </Grid>


          {/* <Grid item lg={4} md={12} sm={12} xs={12} >
            <HowToUse isLoading={isLoading} />
          </Grid> */}
          
          {/* <Grid item lg={4} md={12} sm={12} xs={12} >
            <UpgradePlanCard isLoading={isLoading} />
          </Grid> */}



          {/* <Grid item xs={12} md={12}>
              <TotalIncomeLightCard
                  {...{
                    isLoading: isLoading,
                    // total: 203,
                    label: 'Total Income',
                    icon: <StorefrontTwoToneIcon fontSize="inherit" />
                  }}
              />
          </Grid> */}
          
          {/* <Grid item xs={12} md={12}>
            <TicketsTable isLoading={isLoading} />
          </Grid> */}
          


        </Grid>
      </Grid>


      

    </Grid>
  );
};

export default Dashboard;
