import "./App.css";
import { httpApi } from "./api/httpApi";
import { useEffect, useState } from "react";

function App() {
  const [slip, setSlip] = useState("");

  const { get } = httpApi();

  const getSlip = async () => {
    try {
      const resp = await get("/advice");
      console.log(resp);
      setSlip(resp.slip);
      console.log(slip);
    } catch (error) {
      console.log(error);
      return error.resp;
    }
  };

  useEffect(() => {
    getSlip();
    // eslint-disable-next-line
  }, []);

  return <div className="App"></div>;
}

export default App;
