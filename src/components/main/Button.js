import React from 'react';
import PropTypes from 'prop-types';
import ButtonMaterial from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import cx from 'classnames';

import styles from './Button.styles';

function Button({
  className, disabled, label, classes, onClick,
}) {
  return (
    <ButtonMaterial
      className={cx(className, classes.button)}
      disabled={disabled}
      disableRipple
      size="small"
      onClick={onClick}
    >
      {label}
    </ButtonMaterial>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: () => { },
};

export default withStyles(styles)(Button);
