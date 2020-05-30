import React, { Component } from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../preview-collection/preview-colllection.component';

class ShopPage extends Component {
	state = {
		collections: SHOP_DATA,
	};

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...otherCollectionProp }) => (
					<CollectionPreview key={id} {...otherCollectionProp} />
				))}
			</div>
		);
	}
}

export default ShopPage;
