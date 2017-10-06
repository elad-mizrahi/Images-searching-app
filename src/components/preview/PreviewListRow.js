import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PreviewListRow = (data) => {
  return (
      <img className="image" src={data.data} alt="an image from Flickr Api"/>
  );
};

PreviewListRow.propTypes = {
  data: PropTypes.string.isRequired
};

export default PreviewListRow;
