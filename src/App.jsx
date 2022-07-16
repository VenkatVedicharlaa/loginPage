import "./style.css";
import react from "react";

import {
  AppBar,
  Container,
  TextField,
  Toolbar,
  typography
} from "@material-ui/core";

const App = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <typography variant="h5">LoginPage</typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "70px", textAlign: "Left" }}>
        <typography variant="h2">
          see your growth and get consulting support!
        </typography>
      </Container>
      <Container>
        <div className="col-md-5">
          <form>
            <button className="btn  ggle">SignIn with Google</button>
            <br />
            <typography variant>Email* </typography>
            <br />
            <TextField
              type="text"
              style={{ width: "100%" }}
              label="mail@website.com"
              variant="outlined"
            />
            <br />
            <typography variant="h4">Password* </typography> <br />
            <TextField
              style={{ width: "100%" }}
              type="text"
              label="Mini.8charactore"
              variant="outlined"
            />
            <br />
            <button
              type="submit"
              className="btn bg-info mt-3"
              style={{ width: "100%" }}
            >
              Login
            </button>
            <br />
          </form>
        </div>
      </Container>
    </div>
  );
};
export default App;

{
  /* <button variant= "contained" color= "primary"></button> */
}
