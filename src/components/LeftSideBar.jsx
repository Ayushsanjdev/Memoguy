import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({ allNotes, delData }) => {

  return(
    <div className="leftsidebar">
    {allNotes.map((title) => (
      <ListItem button key={title.id} className="list">
        <ListItemText primary={title.title} />
        <DeleteIcon className="deleteIcon" onClick={delData} />
      </ListItem>
    ))}
    </div>
  ) 
};

export default LeftSideBar;
