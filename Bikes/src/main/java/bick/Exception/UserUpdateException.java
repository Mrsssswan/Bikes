package bick.Exception;

public class UserUpdateException extends Exception {
    public UserUpdateException(String message, Throwable cause) {
        super("用户更新失败", cause);
    }
}
