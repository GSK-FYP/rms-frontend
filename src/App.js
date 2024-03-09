import React, {useState} from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";
// import {Box} from "@mui/material"
// import CreateAccount from "./components/Account/CreateAccount";
// import LoginAccount from "./components/Account/loginAccount";
import Business from "./components/Business";
import Buildings from "./components/Buildings";
import {GlobalContext, useContextMode} from "./theme";
import Divider from "@mui/material/Divider";
import Sidebar from "./global/sidebar";
import Home from "./scenes/Home";
// import LineGraph from "./scenes/line";
// import Fees from "./scenes/Fees&Fines";
// import { PieChart } from "./components/PieChart";
import Pie from "./scenes/Pie";
// import { Navigate } from "react-router-dom";
// import FinancialPerformace from "./scenes/Home/FinancialPerformace";
import {OpenLayers} from "./scenes/Map/Map";
import Entry from "./components/Entry";
import Users from "./components/Users";
import BusinessEntry from "./components/BusinessEntry";

function App() {
  const [theme, colorMode] = useContextMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <GlobalContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* <CreateAccount/> */}
            {/* <LoginAccount/> */}
            {/*<Topbar setIsSidebar={setIsSidebar} />*/}
            <Divider variant="middle" light="true" />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Map" element={<OpenLayers />} />
              {/* <Route path="/Fees" element={<Fees />} /> */}
              {/*<Route path="/Calendar" element={<Calendar />} />*/}
              {/*<Route path="/PieChart" element={<Pie />} />*/}
              {/*<Route path="/LineGraph" element={<LineGraph />} />*/}
              {/*<Route path="/ProfilePage" element={<ProfilePage />} />*/}
              {/*<Route path="/Settings" element={<Settings />} />*/}
              {/*<Route path="/Privacy" element={<Privacy />} />*/}
              <Route path='Business' element={<Business/>} />
              <Route path='Buildings' element={<Buildings/>} />
              <Route path='Users' element={<Users/>}/>
              <Route path='BuildingDetails/:building_id' element={<Entry/>}/>
              <Route path='BusinessDetails/:business_id' element={<BusinessEntry/>}/>
              {/* <Route path="/faq" element={<FAQ />} /> */}
              {/*<Route path="/FAQ" element={<FAQ />} />*/}

              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
