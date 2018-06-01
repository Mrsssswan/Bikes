package bick.Service;

import bick.domian.User;
import com.github.qcloudsms.SmsSingleSender;
import com.github.qcloudsms.SmsSingleSenderResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private StringRedisTemplate redisTemplate;
    @Autowired
    private MongoTemplate mongoTemplate;
    @Override
    public boolean sendMsg(String code, String phone) {
        boolean flag = true;
        //调用腾讯的短信接口
                                       int appid = Integer.parseInt(redisTemplate.opsForValue().get("appid"));
        String appKey = redisTemplate.opsForValue().get("appKey");
        //生成一个随机数字
        String param = (int)(Math.random()*9+1)+"";
        SmsSingleSender ssender = new SmsSingleSender(appid, appKey);
        SmsSingleSenderResult result = null;
        //短信还没审核通过，暂时停用
//        try {
//            //发送短信
//            result = ssender.send(0,code,phone,param+"为您的登录验证码。如非本人操作，请忽略本短信 ","","");
//            //将发送手机号作为key，验证码为value保存到redis中
//            redisTemplate.opsForValue().set(phone,code,300, TimeUnit.SECONDS);
//        } catch (HTTPException e) {
//            flag = false;
//            e.printStackTrace();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
        System.out.print(result);

        return flag;
    }

    @Override
    public boolean verify(String phoneNum, String code) {
        boolean flag = false;
        //调用RedisTemplate
        String c = redisTemplate.opsForValue().get(phoneNum);
        if(c!=null&&c.equals(code)){
            flag = true;
        }
        return true;
    }

    @Override
    public void register(User user) {
        mongoTemplate.insert(user);
    }

    @Override
    public void update(User user) {
        //这里存在一些问题，不仅仅要更新押金，还应该更新用户已充值押金状态
        mongoTemplate.updateFirst(new Query(Criteria.where("phoneNum").is(user.getPhoneNum())),
                Update.update("deposit",user.getDeposit()),User.class);
    }
}
