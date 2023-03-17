import "./App.css";
import { Button, Typography } from "@mui/material";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AppleIcon from "@mui/icons-material/Apple";
import styled from "@emotion/styled";

function App() {
  return (
    <div>
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
    </div>
  );
}

const CustomButton = styled(Button)({
  backgroundColor: "blue",
  color: "white",
  border: "2px dashed black",
  "&:hover": {
    backgroundColor: "skyblue",
  },
});

export default App;
