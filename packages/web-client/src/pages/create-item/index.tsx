import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { bidItemSchema } from "schema";
import { createBidItemsValues } from "utils/constant";
import { useDispatch } from "react-redux";
import { TCreateItem, TGenericType } from "utils/types";
import { FormControl } from "@mui/material";
import NavDrawerLayoutWrapper from "components/layouts/NavDrawerLayoutWrapper";
import CustomTextField from "components/atoms/customTextfield";
import { createBidItems } from "redux/thunks/bid.thunks";

const CreateItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<TGenericType>();
  const { values, errors, handleChange, handleBlur, handleSubmit } =
    useFormik<TCreateItem>({
      initialValues: createBidItemsValues,
      validationSchema: bidItemSchema,
      validateOnMount: true,
      onSubmit: async (values) => {
        dispatch(createBidItems(values));
        navigate("/");
      },
    });
  return (
    <NavDrawerLayoutWrapper>
      <Box
        sx={{
          padding: "14px 22px 1px 22px",
        }}
      >
        <Typography variant="h4" fontWeight={700} mb={2}>
          Create Item
        </Typography>
        <FormControl
          onSubmit={handleSubmit as () => void}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <CustomTextField
            variant="outlined"
            fullWidth={true}
            id="name"
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(values.name && errors.name)}
            helperText={errors.name}
            enableValidation={Boolean(values.name || errors.name)}
            autocomplete="off"
          />
          <CustomTextField
            variant="outlined"
            fullWidth={true}
            id="start_price"
            name="start_price"
            label="Start Price"
            value={String(values.start_price)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(values.start_price && errors.start_price)}
            helperText={errors.start_price}
            enableValidation={Boolean(values.start_price || errors.start_price)}
            autocomplete="off"
          />
          <CustomTextField
            variant="outlined"
            fullWidth={true}
            id="time_window"
            name="time_window"
            label="Time Window"
            value={String(values?.time_window)}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(values.time_window && errors.time_window)}
            helperText={errors.time_window}
            enableValidation={Boolean(values.time_window || errors.time_window)}
            autocomplete="off"
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
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit as () => void}
            >
              Create Item
            </Button>
          </Box>
        </FormControl>
      </Box>
    </NavDrawerLayoutWrapper>
  );
};

export default CreateItem;
