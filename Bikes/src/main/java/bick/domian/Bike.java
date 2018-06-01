package bick.domian;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexType;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexed;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

//关联MongoDB中的Collection
@Document(collection = "bikes")
public class Bike {

    @Id
    private String id;

    //数组的第一个元素是经度，第二个元素是纬度
    @GeoSpatialIndexed(type = GeoSpatialIndexType.GEO_2DSPHERE)
    private double[] location;
    private int status;
    @Indexed
    private long bikeNo;

    public double[] getLocation() {
        return location;
    }

    public void setLocation(double[] location) {
        this.location = location;
    }

    public long getBikeNo() {
        return bikeNo;
    }

    public void setBikeNo(long bikeNo) {
        this.bikeNo = bikeNo;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Bike{" +
                "id='" + id + '\'' +
                ", location=" + Arrays.toString(location) +
                ", status=" + status +
                ", bikeNo=" + bikeNo +
                '}';
    }
}
