package bick.Service;

import bick.domian.Bike;
import org.springframework.data.geo.GeoResult;

import java.util.List;

public interface BikeService {
    void save(Bike bike);
    List<GeoResult<Bike>> find(double longitude, double latitude);
}
