/* eslint-disable no-console */

import {Link} from 'react-router';
import PreviewPage from './../preview/PreviewPage';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as imageActions from '../../actions/imageActions';
import HistoryPage from './../history/HistoryPage';

class SearchPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      image: {
        query: ''
      }
    };

    this.onQueryChange = this.onQueryChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.reloadImages = this.reloadImages.bind(this);
    this.clearResults = this.clearResults.bind(this);
  }

  onQueryChange(event) {
    const image = this.state.image;
    image.query = event.target.value;
    this.setState({image});
  }

  onClickSave() {
    this.props.actions.loadImages(this.state.image.query);
  }

  reloadImages(imagesUrlArray, query) {
    this.props.actions.reloadImagesFromHistory(imagesUrlArray, query);

  }
  clearResults(){
    this.props.actions.clearAllResults();
  }

  render() {
    const {images, searchHistory} = this.props;
    return (
      <div className="searchInputContainer">
        <div>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                onChange={this.onQueryChange}
                value={this.state.image.query}
                placeholder="e.g. 'Paris City'"/>
            </div>
            <div className="buttonsContainer">
                <input
                  type="submit"
                  className="button is-success is-outlined is-fullwidth"
                  value="Search Images"
                  onClick={this.onClickSave}/>
              <div className="control">
                <input
                  type="submit"
                  className="button is-danger is-outlined is-fullwidth"
                  value="Clear Results"
                  onClick={this.clearResults}/>
              </div>
            </div>
          </div>
        </div><br/>
        <HistoryPage data={searchHistory} func={this.reloadImages}/>
        <PreviewPage data={images}/>
      </div>
    );
  }
}

SearchPage.propTypes = {
  images: PropTypes.array.isRequired,
  searchHistory: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {images: state.images, searchHistory: state.searchHistory};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(imageActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
