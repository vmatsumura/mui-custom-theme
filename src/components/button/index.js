import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import colors from '../../theme/colors'

const styles = theme => ({
    contained: {
        backgroundColor: colors.dataPurple100
    }
})

const CustomButton = ({ classes, children, ...props }) => {
    return (
        <Button
            classes={classes}
            {...props}
        >
            {children}
        </Button>
    )
}

CustomButton.defaultProps = {}

CustomButton.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary']),
    variant: PropTypes.string,
}

export default withStyles(styles, { name: 'CustomButton' })(CustomButton)