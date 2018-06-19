package bick.Service;

import bick.Exception.UserUpdateException;
import bick.domian.User;

public interface UserService {
    boolean sendMsg(String code,String phone);
    boolean verify(String phoneNum,String code);
    void register(User user);
    void update(User user) throws UserUpdateException;
}
