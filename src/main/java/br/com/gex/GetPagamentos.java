/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.gex;

import com.flexmonster.compressor.Compressor;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author jjunior
 */
public class GetPagamentos extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
            Connection connection = DriverManager.getConnection("jdbc:mysql://10.10.40.179:3306/giex", "giex", "7xt3Dw87");
            String query = "SELECT * FROM giex.BI_PAGAMENTOS";
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);

            InputStream inputStream = Compressor.compressDb(resultSet);

            response.setContentType("text/plain");
            OutputStream outputStream = response.getOutputStream();
            int length = 0;
            byte[] buffer = new byte[10240];
            while ((length = inputStream.read(buffer)) > 0) {
                outputStream.write(buffer, 0, length);
                outputStream.flush();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

}
