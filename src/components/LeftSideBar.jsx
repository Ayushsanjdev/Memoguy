import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";
import DeleteIcon from "@material-ui/icons/Delete";

const LeftSideBar = ({ showNotes }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
      maxWidth: 200,
    },
    list: {
      width: "100%",
      padding: "1rem",
      borderRadius: "5px",
      backgroundColor: "lightblue",
    },
  }));

  const classes = useStyles();

  function renderRow(props) {
    const { index, style } = props;

    return showNotes.map((notes) => (
      <>
        <ListItem button style={style} key={index} className={useStyles().list}>
          <ListItemText primary={showNotes.notes} />
          <DeleteIcon className="deleteIcon" />
        </ListItem>
      </>
    ));
  }

  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  return (
    <div className={classes.root}>
      <FixedSizeList height={450} width={200} itemSize={56} itemCount={5}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
};

export default LeftSideBar;
