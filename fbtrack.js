function fb_view_content() {

  fbq('track', 'ViewContent');
    // fbq(
    //     'track', 'ViewContent', { 
    //       content_type: 'product',
    //       content_ids: ['1234'],
    //       content_name: 'ABC Leather Sandal',
    //       content_category: 'Shoes'
    //       value: 0.50,
    //       currency: 'USD'
    //     }
    // );
    console.log("View Content Triggered!");


}


function fb_search() {
  fbq('track', 'Search');
  console.log("Facebook Search Event Triggered!");
    // fbq(
    //     'track', 'Search', { 
    //       search_string: 'leather sandals',
    //       content_category: 'Product Search',
    //       content_ids: ['1234', '2424', '1318', '6832'],
    //       value: 0.50,
    //       currency: 'USD'
    //     }
    //   );
}

function fb_purchase() {
  fbq('track', 'Purchase', { value: 0.00, currency: 'USD' });
  console.log("Facebook Purchase Event Triggered!");
    // fbq(
    //     'track', 'Purchase', { 
    //       content_type: 'product',
    //       contents: [
    //         { 'id': '1234', 'quantity': 2, },
    //         { 'id': '4642', 'quantity': 1, }
    //       ],
    //       value: 25.00,
    //       currency: 'USD'
    //     }
    //   );
}

function fb_initial_checkout() {
  fbq('track', 'InitiateCheckout');
  console.log("Facebook Initial Checkout Event Triggered!");
}



function fb_add_to_cart() {
  fbq('track', 'AddToCart');
  console.log("Facebook Add to Cart event triggered!");
    // fbq('track', 'AddToCart', {
    //     content_name: 'Really Fast Running Shoes', 
    //     content_category: 'Apparel & Accessories > Shoes',
    //     content_ids: ['1234'],
    //     content_type: 'product',
    //     value: 4.99,
    //     currency: 'USD' 
    //   });
}

function fb_contact() {
  fbq('track', 'Contact');
  console.log("Facebook Contact event triggered!");
}