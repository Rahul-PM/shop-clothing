import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPage from '../../pages/collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectedIsCollectionLoaded } from '../../redux/shop/shop.selector';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';


const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render() {
        const { match, IsCollectionLoaded } = this.props
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}
                />
                <Route path={`${match.path}/:collectionId`} render={(props) =>
                    <CollectionPageWithSpinner isLoading={!IsCollectionLoaded} {...props} />}
                />
            </div>
        );
    }
}

const mapPropToState = createStructuredSelector({
    IsCollectionLoaded: selectedIsCollectionLoaded
});
const mapDispatchToPtops = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapPropToState,
    mapDispatchToPtops)(ShopPage);