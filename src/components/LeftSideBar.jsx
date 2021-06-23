import React, {useState} from "react";
import { Divider } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({ allNotes, delData }) => {

  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  }

  return(
    <div className="leftsidebar">
    {allNotes.map((title) => (
      <section key={title.id}>
      <ListItem button className="list" selected={selectedIndex === title.id}
          onClick={(event) => handleListItemClick(event, title.id)}>
        <ListItemText primary={title.title} />
        <DeleteIcon className="deleteIcon" onClick={delData} />
      </ListItem>
      <Divider></Divider>
      </section>
    ))}
    </div>
  ) 
};

export default LeftSideBar;
