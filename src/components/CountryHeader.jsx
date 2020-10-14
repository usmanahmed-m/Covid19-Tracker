import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SelectCountry from "./SelectCountry";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "#112d4e",
    textAlign: "left",
  },
}));

export default function CountryHeader() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    async function fetchData() {

      setLoading(true);
  
      const apiData = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
  
      let apiJson = await apiData.json();
    
      apiJson = apiJson.countryitems;
  
      setData(apiJson);
  
      setLoading(false)
  
    }

    fetchData()

  }, []);


console.log(data);

  if(loading){
    return <div>Loading</div>
 } else 
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#dbe2ef" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COUNTRY DATA
          </Typography>
          <SelectCountry data={data} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
