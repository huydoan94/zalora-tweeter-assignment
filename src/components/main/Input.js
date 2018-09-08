import React from 'react';
import PropTypes from 'prop-types';
import InputMaterial from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './Input.styles';

function Input({
  label, onChange, autoFocus, classes, value, disabled, errorMessage,
}) {
  return (
    <div className={classes.input}>
      <InputLabel>{label}</InputLabel>
      <InputMaterial
        value={value}
        onChange={onChange}
        autoFocus={autoFocus}
        disabled={disabled}
        className={classes.inputBox}
        error={errorMessage !== undefined}
      />
      {errorMessage && <span className={classes.errorMessage}>{errorMessage}</span>}
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  classes: PropTypes.object.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
};

Input.defaultProps = {
  value: undefined,
  label: '',
  onChange: () => { },
  autoFocus: false,
  disabled: false,
  errorMessage: undefined,
};

export default withStyles(styles)(Input);
