import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import CollectionsOverview from './collections-overview.components';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpnner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpnner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

