import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({
  allNotes,
  delData,
  setSelectedNote,
  selectedNote,
  selectedNoteIndex,
  setSelectedNoteIndex,
  selectedNoteBody,
  setSelectedNoteBody,
}) => {
  
  const handleListItemClick = (event, title) => {
    setSelectedNote(title);
  };

  const handleIndex = (event, id) => {
    setSelectedNoteIndex(id);
  };

  const handleBody = (event, body) => {
    setSelectedNoteBody(body);
  };

  return (
    <div className="leftsidebar">
      {allNotes.map((notes) => (
        <section key={notes.id}>
          <ListItem
            button
            className="list"
            selected={
              selectedNoteIndex === notes.id
            }
            onClick={(event) => {
              handleListItemClick(event, notes.title);
              handleIndex(event, notes.id);
              handleBody(event, notes.body);
            }}
          >
            <ListItemText primary={notes.title} />
            {selectedNoteIndex ?
            <DeleteIcon className="deleteIcon" 
              onClick={delData} /> : ''}
          </ListItem>
        </section>
      ))}
    </div>
  );
};

export default LeftSideBar;
