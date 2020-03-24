import React from 'react';
import classes from './Notifications.module.css';

// Redux
import { closeSnackbar } from '../../store/actions/index';
import { connect } from 'react-redux';

// Material UI
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function Notifications(props) {
    console.log(props.snackbarOpen);
    return <>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.snackbarOpen}
        autoHideDuration={6000}
        onClose={props.onCloseSnackbar}
        message={props.snackbarMessage}
        action={
          <>
            <IconButton size="small" aria-label="close" color="inherit" onClick={props.onCloseSnackbar}>
              <CloseIcon />
            </IconButton>
          </>
        }
      />
    </>
}

const mapStateToProps = state => {
    return {
        snackbarOpen: state.notification.snackbarOpen,
        snackbarMessage: state.notification.snackbarMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseSnackbar: () => dispatch(closeSnackbar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
