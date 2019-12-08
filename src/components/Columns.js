import React from 'react'

const types = {
}

/** Fixed width image with header text links to Project page */
const Columns = (props) => (
    <div>
      {props.children}
    </div>
)

Columns.propTypes = types;

export default Columns
