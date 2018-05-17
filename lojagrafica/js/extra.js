function delivery(order_id, opt){
	var url = '/dashboard_client/delivery/' + order_id + '/' + opt;
	window.self.location.href = url;
}

// function approved(orderItemArt_id, approved){
// 	url = "/checkout/approved/" + orderItemArt_id + '/' + approved;
// 	window.self.location.href = url;
// }
