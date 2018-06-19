package bick.Service;

import bick.domian.Bike;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.geo.GeoResult;
import org.springframework.data.geo.GeoResults;
import org.springframework.data.geo.Metrics;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.NearQuery;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BikeServiceImpl implements BikeService {
    @Autowired
    private MongoTemplate mongoTemplate;
    @Override
    public void save(Bike bike) {
        mongoTemplate.insert(bike,"bikes");
    }
    /**
     * 根据当前经纬度查找附近单车
     * @param longitude 经度
     * @param latitude 纬度
     * @return 附近单车
     */
    @Override
    public List<GeoResult<Bike>> find(double longitude, double latitude) {
        NearQuery nearQuery = NearQuery.near(longitude,latitude);
        //查找的范围和距离,显示100m以内的单车
        nearQuery.maxDistance(2, Metrics.KILOMETERS);
        GeoResults<Bike> results = mongoTemplate.geoNear(nearQuery.query(new Query(Criteria.where("status").is(0)).limit(20)),Bike.class);
       return results.getContent();
    }
}
