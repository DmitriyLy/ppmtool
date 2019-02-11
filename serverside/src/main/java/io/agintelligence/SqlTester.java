package io.agintelligence;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SqlTester {

    static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost:3306/ppmtcourse";


    static final String USER = "ppmtool";
    static final String PASS = "ppmtool";

    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection(DB_URL,USER,PASS);
    }



}
