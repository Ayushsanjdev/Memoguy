import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({ allNotes, delData, setSelectedNote, selectedNote, selectedNoteIndex, setSelectedNoteIndex }) => {
  const handleListItemClick = (event, title) => {
    setSelectedNote(title);
  };

  const handleIndex = (event, id) => {
    setSelectedNoteIndex(id);
  }

  return (
    <div className="leftsidebar">
      {allNotes.map((notes) => (
        <section key={notes.id}>
          <ListItem
            button
            className="list"
            selected={selectedNote === notes.title || selectedNoteIndex === notes.id}
            onClick={(event) => handleListItemClick(event, notes.title) || handleIndex(event, notes.id)}
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
