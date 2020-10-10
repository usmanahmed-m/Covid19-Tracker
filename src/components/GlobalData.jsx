import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import NumberFormat from "react-number-format";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(100),
      height: theme.spacing(18.3),
    },
  },
}));

const useTypo = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: "#3f72af",
    padding: theme.spacing(1),
    color: "white",
  },
}));

const useHeading = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    color: "#112d4e",
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypo = useTypo();
  const classHeading = useHeading();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const apiData = await fetch(
        "https://api.thevirustracker.com/free-api?global=stats"
      );

      const apiJson = await apiData.json();

      setData(apiJson);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <strong>Data loading</strong>
      </div>
    );
  } else
    return (
      <div className={classes.root}>
        <Paper elevation={3}>
          <div className={classTypo.root}>{"Global Cases"}</div>
          <div className={classHeading.root}>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={data && data.results && data.results[0].total_cases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>{"Global Active Cases"}</div>
          <div className={classHeading.root}>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={
                  data &&
                  data.results &&
                  data.results[0].total_active_cases + data &&
                  data.results &&
                  data.results[0].total_unresolved
                }
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>{"Global Recovered Cases"}</div>
          <div className={classHeading.root}>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={data && data.results && data.results[0].total_recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </div>
        </Paper>
        <Paper elevation={3}>
          <div className={classTypo.root}>{"Global Fatalities"}</div>
          <div className={classHeading.root}>
            <Typography variant="h4" gutterBottom>
              <NumberFormat
                value={data && data.results && data.results[0].total_deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Typography>
          </div>
        </Paper>
      </div>
    );
}
