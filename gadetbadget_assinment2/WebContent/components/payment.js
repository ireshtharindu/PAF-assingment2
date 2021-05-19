$(document).ready(function() 
		{  
	if ($("#alertSuccess").text().trim() == "")  
    {   
		$("#alertSuccess").hide();  
     }  
	     $("#alertError").hide(); 
	  
});

$(document).on("click", "#btnSave", function(event) 
		{  
			$("#alertSuccess").text("");  
			$("#alertSuccess").hide();  
			$("#alertError").text("");  
			$("#alertError").hide(); 
			
			
			var status = validateItemForm();  
			if (status != true)  
			{   
				$("#alertError").text(status);   
				$("#alertError").show();   
				return;  
			} 
			
			var type = ($("#hidinvoiceIDSave").val() == "") ? "POST" : "PUT"; 
			
			$.ajax( 
			{  
				url : "paymentAPI",  
				type : type,  
				data : $("#formItem").serialize(),  
				dataType : "text",  
				complete : function(response, status)  
				{   
					onPaymentSaveComplete(response.responseText, status);  
					
				} 
			
		}); 
}); 
		
function onPaymentSaveComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully saved.");    
			$("#alertSuccess").show(); 

			$("#divItemsGrid").html(resultSet.data);   
		} else if (resultSet.status.trim() == "error")   
		{    
			$("#alertError").text(resultSet.data);    
			$("#alertError").show();   
		} 

		} else if (status == "error")  
		{   
			$("#alertError").text("Error while saving.");   
			$("#alertError").show();  
		} else  
		{   
			$("#alertError").text("Unknown error while saving..");   
			$("#alertError").show();  
		} 

		$("#hidinvoiceIDSave").val("");  
		$("#formPayment")[0].reset(); 
		
}

$(document).on("click", ".btnRemove", function(event) 
{  
	$.ajax(  
	{   
		url : "ItemAPI",   
		type : "DELETE",   
		data : "InvoiceID=" + $(this).data("Invoiceid"),   
		dataType : "text",   
		complete : function(response, status)   
		{    
			onPaymentDeleteComplete(response.responseText, status);   
		}  
	}); 
}); 


function onPaymentDeleteComplete(response, status) 
{  
	if (status == "success")  
	{   
		var resultSet = JSON.parse(response); 

		if (resultSet.status.trim() == "success")   
		{    
			$("#alertSuccess").text("Successfully deleted.");    
			$("#alertSuccess").show(); 

			$("#divPaymentGrid").html(resultSet.data);   
			} else if (resultSet.status.trim() == "error")   
			{    
				$("#alertError").text(resultSet.data);    
				$("#alertError").show();   
			} 

			} else if (status == "error")  
			{   
				$("#alertError").text("Error while deleting.");   
				$("#alertError").show();  
			} else  
			{   
				$("#alertError").text("Unknown error while deleting..");   
				$("#alertError").show();  
			} 
	} 

$(document).on("click", ".btnUpdate", function(event) 
{     
	$("#hidinvoiceIDSave").val($(this).closest("tr").find('#hidIDUpdate').val());     
	$("#CusID").val($(this).closest("tr").find('td:eq(0)').text());     
	$("#ProductID").val($(this).closest("tr").find('td:eq(1)').text());     
	$("#ProductName").val($(this).closest("tr").find('td:eq(2)').text());     
	$("#ServiceCharge").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#Quantity").val($(this).closest("tr").find('td:eq(4)').text()); 
	$("#TotalPayment").val($(this).closest("tr").find('td:eq(5)').text()); 
}); 


function validatePaymentForm() 
{  
	// CODE  
	if ($("#CusID").val().trim() == "")  
	{   
		return "Insert cusID.";   
	}

	
	if ($("#ProductID").val().trim() == "")  
	{   
		return "Insert product ID.";  
	} 
	if ($("#ProductName").val().trim() == "")  
	{   
		return "Insert Product name.";  
	} 
	 
	 // is numerical value  
	var tmpPrice = $("#ServiceCharge").val().trim();  
	if (!$.isNumeric(tmpPrice))  
	{   
		return "Insert a numerical value for service charge.";  
	} 
	
	 // is numerical value  
	var tmpPrice = $("#Quantity").val().trim();  
	if (!$.isNumeric(tmpPrice))  
	{   
		return "Insert a numerical value forquentity.";  
	} 
	 // is numerical value  
	var tmpPrice = $("#TotalPayment").val().trim();  
	if (!$.isNumeric(tmpPrice))  
	{   
		return "Insert a numerical value fot total payment";  
	} 
	 

	 // convert to decimal price  
	$("#ServiceCharge").val(parseFloat(tmpPrice).toFixed(3)); 
	 
	// convert to decimal price  
	$("#Quantity").val(parseFloat(tmpPrice).toFixed(4)); 
	
	// convert to decimal price  
	$("#TotalPayment").val(parseFloat(tmpPrice).toFixed(5)); 
	
	
	
	 
	 return true;
	
}