<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>

<%@page import="com.payment"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/Item.js"></script>
</head>

<body>


	<div class="container">
		<div class="row">
			<div class="col">
				<h1>Items Management</h1>
				<form id="formItem" name="formItem">

					payment Id: <input id="CusID" name="CusID" type="text"
						class="form-control"><br> 
					Product ID: <input id="productid" name="productid" type="text"
						class="form-control"><br>
					Product name: <inpuid="ProductName" name="ProductName" type="text" 
						class="form-control"><br>

					Service charge: <input id="ServiceCharge" name="ServiceCharge" type="text"
						class="form-control"><br> 
					Quentity: <input
						id="Quantity" name="Quantity" type="text" class="form-control"><br>
					
					Total Payment: <input id="TotalPayment" name="TotalPayment" type="text"
						class="form-control"><br> 

					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input 
						id="hidItemIDSave" name="hidItemIDSave" value="">


				</form>


				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>

			</div>

			<br>

			<div id="divItemsGrid">
				<%
				payment paymentObj = new payment();
				out.print(paymentObj.readPayments());
				%>

			</div>
		</div>
	</div>

</body>
</html>