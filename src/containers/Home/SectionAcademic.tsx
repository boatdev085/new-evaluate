import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const ConfigAcademic = [
  {
    image: "/static/profile/example-profile.png",
    isMain: true,
  },
  {
    image: "/static/profile/example-profile.png",
  },
  {
    image: "/static/profile/example-profile.png",
  },
  {
    image: "/static/profile/example-profile.png",
  },
  {
    image: "/static/profile/example-profile.png",
  },
];
const SectionAcademic = (props: Props) => {
  return (
    <Box padding="80px 16px">
      <Typography
        variant="h1"
        sx={{ textAlign: "center", marginBottom: "30px" }}
      >
        คณะนักวิชาการ
      </Typography>
      <Typography variant="body2" sx={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore
      </Typography>
      <Grid
        container
        spacing={2}
        gap="100px 16px"
        sx={{
          marginTop: "30px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {ConfigAcademic.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={item.isMain ? 12 : 4}
            md={item.isMain ? 12 : 2}
            key={`card_${index + 1}`}
          >
            <Image
              src={item.image}
              alt="academic"
              width={item.isMain ? 245 : 173}
              height={item.isMain ? 267 : 206}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionAcademic;
