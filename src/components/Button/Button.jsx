import PropTypes from 'prop-types';
import styles from "./styles.module.css"
export default function Button({ onClick }) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>Load more</button>
    )
}
Button.defaultProps = {
    onClick: function () { }
}
Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}