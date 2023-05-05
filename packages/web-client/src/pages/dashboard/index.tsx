import Box from "@mui/material/Box";
import Table from "components/table";
import Modal from "components/modal";
import NavDrawerLayoutWrapper from "components/layouts/NavDrawerLayoutWrapper";
import CustomTextField from "components/atoms/customTextfield";
import useDashboard from "./useDashboard";

const Dashboard = () => {
  const {
    columnData,
    rows,
    isLoaded,
    open,
    item,
    values,
    errors,
    handleClose,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useDashboard();

  return (
    <NavDrawerLayoutWrapper>
      <Box>
        <Table columns={columnData} rows={rows} isLoading={isLoaded} />
        <Modal
          handleClose={handleClose}
          open={open}
          item={item}
          modelHeader={item?.name}
          handleSubmit={handleSubmit}
          affirmativeActionBtnLabel="Update"
          cancelActionButton="Cancel"
        >
          <CustomTextField
            variant="outlined"
            fullWidth={true}
            id="start_price"
            name="start_price"
            label="Bid Price"
            value={values?.start_price || ""}
            error={Boolean(values.start_price && errors.start_price)}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={String(errors.start_price)}
            enableValidation={Boolean(values.start_price || errors.start_price)}
            autocomplete="off"
          />
        </Modal>
      </Box>
    </NavDrawerLayoutWrapper>
  );
};

export default Dashboard;
