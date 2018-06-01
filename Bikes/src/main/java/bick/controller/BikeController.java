package bick.controller;

import bick.Exception.UserUpdateException;
import bick.Service.BikeService;
import bick.Service.UserService;
import bick.domian.Bike;
import bick.domian.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.GeoResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BikeController {
    @Autowired
    private BikeService bikeService;
    @Autowired
    private UserService userService;

    @ResponseBody
    @PostMapping("/addBike")
    public String addBick(@RequestBody Bike bike){
        bike.setId(bike.getId().substring(0,bike.getId().indexOf(".")));
        bikeService.save(bike);

        return "bike is added";
    }


    @ResponseBody
    @GetMapping("/findBike")
    public List<GeoResult<Bike>> findBike(double longitude, double latitude){
        List<GeoResult<Bike>> geoResult = bikeService.find(longitude,latitude);
        return geoResult;
    }
    @ResponseBody
    @PostMapping("/deposit")
    public boolean deposit(@RequestBody User user){
        boolean flag = true;
        try {
            userService.update(user);
        }catch (UserUpdateException e){
            e.printStackTrace();
        }
        return flag;
    }


}
