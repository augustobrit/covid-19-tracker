import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GlobalIcon from "@material-ui/icons/PeopleSharp";
import MapIcon from "@material-ui/icons/MapSharp";
import NewsIcon from "@material-ui/icons/FileCopy";

const Navigation = () => {
  const handleChange = () => {};

  const useStyles = makeStyles({
    root: {
      width: 500
    }
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global" icon={<GlobalIcon />} />
      <BottomNavigationAction label="Map" icon={<MapIcon />} />
      <BottomNavigationAction label="News" icon={<NewsIcon />} />
    </BottomNavigation>
  );
};

export default Navigation;
