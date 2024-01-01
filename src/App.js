import "./App.css";
import { useRoutes } from "react-router-dom";
import routers from "./routes/routes";
import Theme from "./layout/Theme";
import { useLayoutEffect, useState } from "react";
import GetData from "./asset/fetching/GetData";

export default function App() {
  let [, ForceUpdate] = useState(null);

  useLayoutEffect(() => {
    // const allData = JSON.parse(localStorage.getItem("allData"));
    const allData = GetData();

    console.log(allData);
    ForceUpdate(allData);
  }, []);

  const Routers = useRoutes(routers);

  return <Theme>{Routers}</Theme>;
}
