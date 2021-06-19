import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 150,
    backgroundColor: 'lightblue',
  },
  list: {
    border: '1px solid black',
    width: '100%',
    backgroundColor: 'spacegrey'
  }
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index} className={useStyles().list} >
      <ListItemText primary={'new note'} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

const LeftSideBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={450} width={150} itemSize={46} itemCount={10}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

export default LeftSideBar;