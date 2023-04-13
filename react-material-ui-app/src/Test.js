import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AppleIcon from "@mui/icons-material/Apple";
import styled from "@emotion/styled";
import { blue, green, red } from "@mui/material/colors";

export default function Test() {
  return (
    <div>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <Box
          flex={1}
          // padding
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          // padding
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          // padding
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
      {/* <Button>hello World!</Button> */}
      {/* 기본 */}
      <Button startIcon={<AccessTimeFilledIcon />} variant="text">
        hello World!
      </Button>
      <Button variant="contained" size="large" fullWidth="true">
        hello World!
      </Button>
      <Button endIcon={<AppleIcon />} variant="outlined">
        Apple
      </Button>
      {/* sx 사용 - 커스텀하기 */}
      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "yellow",
          },
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>커스텀버튼</CustomButton>
      {/* 타이포 그래피 */}
      <Typography variant="h1" gutterBottom>
        h1.heading
      </Typography>
      <Button color="secondary">ThemeBtn</Button>
      <CustomThemeButton>Theme Custom Buttom</CustomThemeButton>

      <Root>
        <Typography>down md : red</Typography>
        <Typography>up md : blue</Typography>
        <Typography>up lg : green</Typography>
      </Root>
    </div>
  );
}

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  border: "2px dashed black",
  "&:hover": {
    backgroundColor: "skyblue",
  },
  "&:disabled": {
    backgroundColor: "white",
    color: "black",
  },
}));

const CustomButton = styled(Button)({
  backgroundColor: "blue",
  color: "white",
  border: "2px dashed black",
  "&:hover": {
    backgroundColor: "skyblue",
  },
});
