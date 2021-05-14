package com;

import model.Buyer;
import javax.servlet.http.HttpServlet;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@WebServlet("/paymentAPI")
public class paymentAPI extends HttpServlet {

		
		private static final long serialVersionUID = 1L;

		payment paymentObj = new payment();
		
		public paymentAPI() {
			super();

		}

		protected void doGet(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException 
		{

			response.getWriter().append("Served at: ").append(request.getContextPath());
		}

		protected void doPost(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException 
		{
			
			String output = paymentObj.insertPayment(request.getParameter("cusid"), request.getParameter("productid"),
					request.getParameter("productname"), request.getParameter("servicecg"), 
					request.getParameter("quantity"), request.getParameter("totpay"));
			response.getWriter().write(output);
			
		}

		protected void doPut(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException 
		{
			Map paras = getParasMap(request);
			String output = paymentObj.updatePayment(paras.get("hidpaymentIDSave").toString(), paras.get("cusid").toString(),
					paras.get("productid").toString(), paras.get("productname").toString(), paras.get("servicecg").toString(),paras.get("quantity").toString(),paras.get("totpay").toString());
			response.getWriter().write(output);
		}

		protected void doDelete(HttpServletRequest request, HttpServletResponse response)
				throws ServletException, IOException 
		{
			Map paras = getParasMap(request);
			String output = paymentObj.deletePayment(paras.get("InvoiceID").toString());
			response.getWriter().write(output);
		}
		
		private static Map getParasMap(HttpServletRequest request) 
		{
			Map<String, String> map = new HashMap<String, String>();
			try {
				Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
				String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
				scanner.close();
				String[] params = queryString.split("&");
				for (String param : params) {
					String[] p = param.split("=");
					map.put(p[0], p[1]);
				}
			} catch (Exception e) {
			}
			return map;
		}	

}
