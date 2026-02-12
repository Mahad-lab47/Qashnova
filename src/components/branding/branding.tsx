import { Box, Typography } from "@mui/material";

export default function Brranding() {
  // let name: string[] = ["Mahad", "hbjhb", "hbgjh"];

  // name.map((items, index) => {
  //   console.log(index, items);
  // });
  let users: { name: string; age: number }[] = [
    { name: "Ali", age: 20 },
    { name: "Ahmed", age: 22 },
  ];
  users.map((items, index) => {
    console.log(items.name);
  });
  return (
    <Box>
      <Typography variant="h1">Branding</Typography>
    </Box>
  );
}
