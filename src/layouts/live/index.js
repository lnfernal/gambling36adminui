

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";
import * as React from 'react';

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";



// Vision UI Dashboard React example components
import DashboardLayout from "components/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Navbars/DashboardNavbar";
import Footer from "components/Footer";

// Data
import authorsTableData from "layouts/live/data/authorsTableData";
import projectsTableData from "layouts/live/data/projectsTableData";

import colors from "assets/theme/base/colors";
import { AiFillClockCircle } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import MySelect from "components/Select";


function Live() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  const { grey, black, info, light } = colors;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Grid item xs={12} md={6} lg={5}>
        <VuiBox display="flex" alignItems="center">
          <VuiBox
            border="2px solid"
            borderRadius="20px"
            borderColor={grey[600]}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="22px 20px"
          >
            {/* <Visa width="25px" /> */}
            <VuiTypography px={2} variant="button" color="white" fontWeight="medium">
              ထွက်မည့်အချိန် သတ်မှတ်ရန်
            </VuiTypography>
            <VuiBox ml="auto" lineHeight={0} >
              <AiFillClockCircle width="25px" />
            </VuiBox>
          </VuiBox>
          <VuiTypography pl={2} variant="button" color="white" fontWeight="medium">
            16:00
          </VuiTypography>
        </VuiBox>

      </Grid>
      <VuiBox display="flex" flexWrap="wrap" justifyContent="space-between">
        <Grid item xs={12} md={6} lg={5} py={2}>
          <VuiBox
            border="2px solid"
            borderRadius="20px"
            borderColor={grey[600]}
            bgColor={black.light}
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="22px 20px"
            height={250}
          >
            <VuiTypography pl={2} variant="button" color="white" fontWeight="medium">
              Live Video
            </VuiTypography>
          </VuiBox>
          <VuiBox display="flex" justifyContent="start" p={2}>
            <VuiButton variant="contained" color="info" size="small">
              Start
            </VuiButton>
          </VuiBox>
        </Grid>


        <Grid item xs={12} md={5} lg={3} py={2} px={1}>
          <VuiBox
            border="2px solid"
            borderRadius="20px"
            borderColor={grey[600]}
            bgColor={info.charts[800]}
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            p="22px 20px"
            height={250}
          >
            <VuiBox>
              <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                ကြေငြာထည့်ရန် ပုံရွေးမည်
              </VuiTypography>
              <VuiBox display='flex'>
                <Grid item xs={7} md={7} lg={7}>
                  {/* <VuiBox
                  border="2px solid"
                  borderRadius="10px"
                  borderColor={grey[600]}
                  bgColor={grey[500]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="12px 20px"
                  my="12px"
                >

                  <BsCardImage width="25px" color="white" />
                </VuiBox> */}
                  <input type="file" multiple accept="image/*" onChange={() => { }} />
                </Grid>

              </VuiBox>
            </VuiBox>
            <VuiBox py={2}>
              <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                ကြေငြာစာသား ထည့်မည်
              </VuiTypography>
              <VuiBox display='flex'>
                <Grid item xs={7} md={7} lg={7}>
                  {/* <VuiBox
                  border="2px solid"
                  borderRadius="10px"
                  borderColor={grey[600]}
                  bgColor={grey[500]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="12px 20px"
                  my="12px"
                >

                  <BsCardImage width="25px" color="white" />
                </VuiBox> */}
                  <input type="text" placeholder="  စာသား" style={{ height: 30, width: 200, borderRadius: 7, paddingLeft: 10 }} />
                </Grid>

              </VuiBox>
            </VuiBox>
            <VuiBox display="flex" justifyContent="center">
              <VuiButton variant="contained" color="info" size="small">
                Save
              </VuiButton>
            </VuiBox>

          </VuiBox>
        </Grid>
        <Grid item xs={12} md={5} lg={3} py={2} px={1}>
          <VuiBox
            border="2px solid"
            borderRadius="20px"
            borderColor={grey[600]}
            bgColor={info.charts[800]}
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            p="22px 20px"
            height={250}
          >
            <VuiBox>
              <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                အတိတ်စိမ်းထည့်ရန် ပုံရွေးမည်
              </VuiTypography>
              <VuiBox display='flex'>
                <Grid item xs={12} md={7} lg={7}>
                  {/* <VuiBox
                  border="2px solid"
                  borderRadius="10px"
                  borderColor={grey[600]}
                  bgColor={grey[500]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="12px 20px"
                  my="12px"
                >

                  <BsCardImage width="25px" color="white" />
                </VuiBox> */}
                  <input type="file" multiple accept="image/*" onChange={() => { }} />
                </Grid>

              </VuiBox>
            </VuiBox>
            <VuiBox py={2}>
              <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                အတိတ်စိမ်းစာသား ထည့်မည်
              </VuiTypography>
              <VuiBox display='flex'>
                <Grid item xs={12} md={7} lg={7}>
                  {/* <VuiBox
                  border="2px solid"
                  borderRadius="10px"
                  borderColor={grey[600]}
                  bgColor={grey[500]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="12px 20px"
                  my="12px"
                >

                  <BsCardImage width="25px" color="white" />
                </VuiBox> */}
                  <input type="text" placeholder="  စာသား" style={{ height: 30, width: 200, borderRadius: 7, paddingLeft: 10 }} />
                </Grid>

              </VuiBox>
            </VuiBox>
            <VuiBox display="flex" justifyContent="center">
              <VuiButton variant="contained" color="info" size="small">
                Save
              </VuiButton>
            </VuiBox>

          </VuiBox>
        </Grid>
       
        <Grid item xs={12} md={5} lg={3} py={1} px={1}>
          <VuiBox
            border="2px solid"
            borderRadius="20px"
            borderColor={grey[600]}
            bgColor={info.charts[800]}
            // display="flex"
            // justifyContent="center"
            // alignItems="center"
            p="22px 20px"
            height={250}
          >
            <VuiBox width={200}>
              <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                ထွက်ကောင်ရွေးမည်
              </VuiTypography>
              <MySelect options={Options} />
            </VuiBox>
            <VuiBox py={2}>

              <VuiBox display='flex'>
                <Grid item xs={7} md={7} lg={7}>
                  {/* <VuiBox
                  border="2px solid"
                  borderRadius="10px"
                  borderColor={grey[600]}
                  bgColor={grey[500]}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p="12px 20px"
                  my="12px"
                >

                  <BsCardImage width="25px" color="white" />
                </VuiBox> */}
                  <VuiTypography pl={0} py="2" variant="button" color="white" fontWeight="medium">
                    အဆ ထည့်မည်
                  </VuiTypography>
                  <input type="number" placeholder="  အဆ" style={{ height: 30, width: 200, borderRadius: 7, paddingLeft: 10 }} />
                </Grid>

              </VuiBox>
            </VuiBox>
            <VuiBox display="flex" justifyContent="center">
              <VuiButton variant="contained" color="info" size="small">
                Save
              </VuiButton>
            </VuiBox>

          </VuiBox>
        </Grid>
      </VuiBox>
      <VuiBox>

      </VuiBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Live;

const Options = [
  { value: '1', label: 'မျောက်' },
  { value: '2', label: 'ဆင်' },
  { value: '3', label: 'လိပ်' }
]