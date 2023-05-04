import CancelIcon from "@mui/icons-material/Cancel";
import LandingPage from "./pages";
import { SnackbarProvider, closeSnackbar } from "notistack";

function App() {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={1}
        autoHideDuration={2500}
        action={(snackbarId) => (
          <CancelIcon onClick={() => closeSnackbar(snackbarId)}></CancelIcon>
        )}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <LandingPage />
      </SnackbarProvider>
    </div>
  );
}

export default App;
