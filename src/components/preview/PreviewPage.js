import React from 'react';
import PreviewListRow from './PreviewListRow';

const PreviewPage = (data) => {
  let imagesUrl = JSON.stringify(data.data);
  imagesUrl = JSON.parse(imagesUrl);
  return(
    <div className="imagesContainer">
        {imagesUrl['0'].data.map((item, index) => <PreviewListRow key={index} data={item}/>)}
    </div>
  );
};

export default PreviewPage;
