import java.sql.*;
public class jdbc {
	public static void main(String args[]) {
	try {
	Class.forName("com.mysql.cj.jdbc.Driver"); 
	System.out.println("Success loading Mysql Driver!");
	}
	catch (Exception e) {
	System.out.print("Error loading Mysql Driver!");
	e.printStackTrace();
	}
	try {
	Connection connect = DriverManager.getConnection(
	"jdbc:mysql://localhost:3306/bbs"+"?serverTimezone=GMT%2B8","root","51302688");//java这个空填写的是你自己设的密码
	System.out.println("Success connect Mysql server!");
	Statement stmt = connect.createStatement();
	ResultSet rs = stmt.executeQuery("select * from test");
	//user 为你表的名称，可以在MySQL命令行用show tables；显示
	while (rs.next()) {
	System.out.println(rs.getString("replyName")); 
	}
	}
	catch (Exception e) {
		System.out.print("get data error!");
		e.printStackTrace();
		}
	}
}
