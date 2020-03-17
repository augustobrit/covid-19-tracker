import React from "react";
import ReactDOM from "react-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";

const Navigation = () => {
  const value = 0;
  const handleChange = () => {};

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction label="Recents" value="recents" />
      <BottomNavigationAction label="Favorites" value="favorites" />
      <BottomNavigationAction label="Nearby" value="nearby" />
      <BottomNavigationAction label="Folder" value="folder" />
    </BottomNavigation>
  );
};

export default Navigation;
