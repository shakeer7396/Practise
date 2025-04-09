import React from 'react'
import PropTypes from "prop-types";

const Greetings = ({name}) => {

  return <h2>Hello, {name} ! </h2>
}

// Default props
Greetings.defaultProps = {
  name: "Sadiq Bhai",
};

// PropTypes validation
Greetings.propTypes = {
  name: PropTypes.string,
};

export default Greetings;