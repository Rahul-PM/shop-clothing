import React, { useEffect, lazy, Suspense } from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from '../../components/error-boundary/error-boundary.component';

import { selectedIsCollectionLoaded } from '../../redux/shop/shop.selector';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() =>
    import('../../components/collections-overview/collections-overview.container'));

const CollectionPageContainer = lazy(() =>
    import('../../pages/collection/collection.container'));

const ShopPage = ({ match, fetchCollectionsStart }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}
                    />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer}
                    />
                </Suspense>
            </ErrorBoundary>
        </div>
    );

}

const mapPropToState = createStructuredSelector({
    IsCollectionLoaded: selectedIsCollectionLoaded
});
const mapDispatchToPtops = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});
export default connect(mapPropToState,
    mapDispatchToPtops)
    (ShopPage);