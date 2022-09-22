/*
	WEB 303 Assignment 1 - jQuery
	Name: - Rozario Gurraj
	Student ID: - 0813851
*/

$(document).ready(function(){
	
	// Using Change Event for function
	$("input").change(function(){
		let payout = $("#yearly-salary").val();
		let percent = $("#percent").val();

		let amount = (( payout * percent)/ 100);
		$("#amount").text('$' + amount.toFixed(2));
	});
});