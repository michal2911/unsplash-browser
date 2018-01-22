import React from 'react';
import { connect } from 'react-redux';

import { fetchFeaturedCollections } from '../actions/collections';
import CollectionListItem from '../components/CollectionListItem';


class SectionList extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  componentDidMount() {
    this.props.fetchFeaturedCollections();
  }

  renderSections() {
    return Object.values(this.props.collections).map(collection => {
      return <CollectionListItem key={collection.id} collection={collection}/>;
    });
  }

  render() {
    console.log(this.props.collections);
    if(!this.props.collections) {
      return <div>Wczytywanie...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          {this.renderSections.bind(this)()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    collections: state.collections.dict
  };
}

export default connect(mapStateToProps, { fetchFeaturedCollections })(SectionList);
