package io.agintelligence.exceptions;

public class InvalidLoginResponse {
    private String username;
    private String passsword;

    public InvalidLoginResponse() {
        this.username = "Invalid Username";
        this.passsword = "Invalid Password";
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPasssword() {
        return passsword;
    }

    public void setPasssword(String passsword) {
        this.passsword = passsword;
    }
}
