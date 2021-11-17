setTimeout(() => {
                     
  const config = {
  productId: parseInt(this.sectionId), // Required
  injectionParent: 'form#AddToCartForm-' + this.sectionId, // The node that will have the widget injected in
  injectionMethod: 'prepend', // How will the widget be injected 
  selectors: {
    price: [
            '#PriceA11y-' + this.sectionId,
            '.product__price',
            '.product__price-wrap-' + this.sectionId,
            '#PriceA11y-' + this.sectionId
           ], // the selectors that will be updated based on subscription
    variant: ['.variant__input-' + this.sectionId] // The variants to watch for to update the subscription prices
  }
};
window.ReChargeWidget.createWidget(config);
}, 500);
