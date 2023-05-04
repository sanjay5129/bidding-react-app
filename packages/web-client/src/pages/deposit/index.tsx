import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { IDeposit } from "utils/types";

import NavDrawerLayoutWrapper from "components/layouts/NavDrawerLayoutWrapper";

const Deposit = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState<IDeposit>({
    amount: undefined,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: IDeposit) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <NavDrawerLayoutWrapper>
      <Box
        sx={{
          padding: "14px 22px 1px 22px",
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          Deposit
        </Typography>

        <Box
          component="form"
          sx={{
            padding: "0.5rem 0",
            display: "flex",
            flexDirection: "column",
            rowGap: "1rem",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Amount"
            variant="outlined"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            fullWidth
            autoComplete="off"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem 0",
              columnGap: "1rem",
            }}
          >
            <Button variant="outlined" onClick={() => navigate("/")}>
              cancel
            </Button>
            <Button variant="contained" type="submit">
              create
            </Button>
          </Box>
        </Box>
      </Box>
    </NavDrawerLayoutWrapper>
  );
};

export default Deposit;
