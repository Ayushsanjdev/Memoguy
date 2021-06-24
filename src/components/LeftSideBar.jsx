import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({ allNotes, delData, setSelectedNote, selectedNote }) => {
  const handleListItemClick = (event, index) => {
    setSelectedNote(index);
  };

  // const handleDelete = () => {
  //   let confirmation = confirm("Are you sure you want to delete ?");
  //   confirmation === true ? handleListItemClick() || delData() : "";
  // };

  return (
    <div className="leftsidebar">
      {allNotes.map((notes) => (
        <section key={notes.id}>
          <ListItem
            button
            className="list"
            selected={selectedNote === notes.title}
            onClick={(event) => handleListItemClick(event, notes.id)}
          >
            <ListItemText primary={notes.title} />
            <DeleteIcon className="deleteIcon" onClick={delData} />
          </ListItem>
        </section>
      ))}
    </div>
  );
};

export default LeftSideBar;
