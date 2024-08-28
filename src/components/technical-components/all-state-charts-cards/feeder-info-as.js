import React from 'react';
import Chart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';
import { Box, CardContent, Grid, Typography, Stack, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

const FeederInfoTechnicalAS = () => {
  const theme = useTheme();

  const commonChartOptions = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: false },
      height: 200,
      width: '100%',
    },
    colors: ['#70c78d', '#00734d', '#c5c770'],
    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: '60%',
        barHeight: '60%',
        distributed: true,
        endingShape: 'rounded',
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => val,
      position: 'top',
      style: {
        fontSize: '10px',
        colors: ['#304758'],
        fontWeight: 700,
      },
      offsetY: -20,
    },
    legend: { show: false },
    grid: { show: false },
    xaxis: {
      categories: [['Kano'], ['Katsina'], ['Jigawa']],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { show: true },
    },
    yaxis: {
      labels: {
        show: false,
        formatter: (val) => val + ' Hrs',
      },
    },
    tooltip: { theme: theme.palette.mode === 'dark' ? 'dark' : 'light' },
  };

  const bandAdataseries = [{ name: '', data: [94, 62, 38] }];
  const bandBdataseries = [{ name: '', data: [21, 32, 12] }];
  const bandCdataseries = [{ name: '', data: [14, 26, 20] }];
  const bandDdataseries = [{ name: '', data: [14, 26, 20] }];
  const bandEdataseries = [{ name: '', data: [14, 26, 20] }];

  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Typography variant="h5">Asset Overview</Typography>
          <Stack direction="row" spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: '#70c78d', svg: { display: 'none' } }}
              ></Avatar>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontSize="12px"
                  fontWeight={700}
                  color="textSecondary"
                >
                  Kano
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: '#00734d', svg: { display: 'none' } }}
              ></Avatar>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontSize="12px"
                  fontWeight={700}
                  color="textSecondary"
                >
                  Katsina
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: '#c5c770', svg: { display: 'none' } }}
              ></Avatar>
              <Box>
                <Typography
                  variant="subtitle2"
                  fontSize="12px"
                  fontWeight={700}
                  color="textSecondary"
                >
                  Jigawa
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={commonChartOptions}
                    series={bandAdataseries}
                    type="bar"
                    height="220px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Feeder Count
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={commonChartOptions}
                    series={bandBdataseries}
                    type="bar"
                    height="220px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Peak Load
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <BlankCard>
              <CardContent sx={{ p: '20px' }}>
                <Box>
                  <Chart
                    options={commonChartOptions}
                    series={bandCdataseries}
                    type="bar"
                    height="220px"
                  />
                </Box>
                <Box justifyContent="center" mt={1}>
                  <Typography variant="h6" fontWeight={600} textAlign="center" mb={1}>
                    Customer Population
                  </Typography>
                </Box>
              </CardContent>
            </BlankCard>
          </Grid>
        </Grid>
      </CardContent>
    </BlankCard>
  );
};

export default FeederInfoTechnicalAS;
