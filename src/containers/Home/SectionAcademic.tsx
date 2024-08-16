import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {};

const ConfigAcademic = [
  {
    image: "/static/profile/example-profile.png",
    name: "คณะวิทยาการสารสนเทศ",
  },
  {
    image: "/static/profile/example-profile.png",
    name: "คณะวิทยาการสารสนเทศ",
  },
  {
    image: "/static/profile/example-profile.png",
    name: "คณะวิทยาการสารสนเทศ",
  },
  {
    image: "/static/profile/example-profile.png",
    name: "คณะวิทยาการสารสนเทศ",
  },
];
const SectionAcademic = (props: Props) => {
  return (
    <Box padding="80px 0px" sx={{ background: "#FAEC9E" }}>
      <Grid
        container
        spacing={2}
        gap="100px 16px"
        sx={{
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {ConfigAcademic.map((item, index) => (
          <Grid item xs={12} sm={4} md={2} key={`card_${index + 1}`}>
            <Image
              src={item.image}
              alt="academic"
              width={206}
              height={206}
              style={{
                borderRadius: "50%",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                objectFit: "cover",
              }}
            />
            <Typography
              variant="body1"
              fontWeight={500}
              color="black"
              sx={{ marginTop: "16px" }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SectionAcademic;
