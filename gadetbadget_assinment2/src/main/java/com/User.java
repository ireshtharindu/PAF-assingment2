package com;

public class User {

	public String login(String un, String pw) {
		System.out.println("Login method called");
		String output = "";
		if (!un.equals("asd"))// Hard coded test value
		{
			output = "Invalid username";
		} else if (un.equals("asd"))// Hard coded test value
		{
			if (!pw.equals("asd"))// Hard coded test value
			{
				output = "Invalid password";
			} else if (pw.equals("asd"))// Hard coded test value
			{
				output = "success";
			}
		}
		return output;
	}

}
