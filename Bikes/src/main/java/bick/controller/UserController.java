package bick.controller;

import bick.Service.UserService;
import bick.domian.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService service;

    @ResponseBody
    @GetMapping("/getcode.bike")
    public boolean getVerityCode(String nationCode,String phoneNum){

        return  service.sendMsg(nationCode,phoneNum);
    }

    @PostMapping("/verify.bike")
    @ResponseBody
    public Boolean verify(String phoneNum,String verifyCode){

        return service.verify(phoneNum,verifyCode);
    }

    @PostMapping("/register.bike")
    @ResponseBody
    public boolean register(@RequestBody User user){
        boolean flag = true;
        try {
            service.register(user);
        }catch (Exception e){
            flag = false;
            e.printStackTrace();
        }
        return flag;
    }
}
