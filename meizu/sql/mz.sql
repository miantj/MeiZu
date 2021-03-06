DROP DATABASE if exists mz;
CREATE DATABASE mz CHARSET=UTF8;
use mz;
SET NAMES utf8;

CREATE TABLE mz_user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO mz_user VALUES
	(20110100,'934854233@qq.com','123456'),
	(null,'574245289@qq.com','123456'),
	(null,'452246789@qq.com','123456'),
	(null,'457853789@qq.com','123456'),
	(null,'78533789@qq.com','123456'),
	(null,'3638575789@qq.com','123456');

CREATE TABLE gift(
  gift_ID INT PRIMARY KEY AUTO_INCREMENT,
  gift_name VARCHAR(64)
);
insert into gift values
	(1001,'1煤球'),
	(null,'5煤球'),
	(null,'20煤球'),
	(null,'路由器极速版'),
	(null,'魅族直柄伞'),
	(null,'蓝牙运动耳机'),
	(null,'猴年熊猫'),
	(null,'魅族定制背包');

create table lottery(
  lottery_ID int primary key auto_increment,
  lottery_uid int,
  lottery_gift_name varchar(64)
);
insert into lottery values
	(null,20110100,'路由器极速版'),
	(null,20110101,'5煤球'),
	(null,20110104,'路由器极速版'),
	(null,20110103,'魅族定制背包'),
	(null,20110105,'1煤球'),
	(null,20110102,'猴年熊猫'),
	(null,20110100,'路由器极速版'),
	(null,20110102,'魅族直柄伞'),
	(null,20110106,'蓝牙运动耳机'),
	(null,20110104,'20煤球'),
	(null,20110103,'魅族定制背包'),
	(null,20110105,'1煤球'),
	(null,20110102,'1煤球'),
	(null,20110100,'蓝牙运动耳机'),
	(null,20110102,'猴年熊猫'),
	(null,20110106,'1煤球'),
	(null,20110104,'20煤球'),
	(null,20110102,'猴年熊猫'),
	(null,20110100,'路由器极速版'),
	(null,20110102,'魅族直柄伞'),
	(null,20110106,'蓝牙运动耳机'),
	(null,20110104,'20煤球');

CREATE TABLE mz_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pic   VARCHAR(100) NOT NULL DEFAULT '',
   pname VARCHAR(50) NOT NULL DEFAULT '',
   pnameo VARCHAR(50) NOT NULL DEFAULT '',
   price VARCHAR(50) NOT NULL DEFAULT'',
   class VARCHAR(50) NOT NULL DEFAULT''
);
INSERT INTO mz_product VALUES
(null,'imgsc/Cgbj0FjbhiqAD-u0AACLpknYBQw244.jpg','立即购买','','',''),
(null,'imgsc/Cgbj0Vjbe36ARe7BAARw4nf6J5k867_180x180.png','魅蓝 5s礼盒版','4月3日购32G礼盒版赠耳机','¥899起',' class="xs"'),
(null,'imgsc/CnQOjViFdDaAfjXZAAI2Uq56IXM655_180x180.jpg','魅族PRO 6 Plus','64G版赠耳机和移动电源','¥2999',''),
(null,'imgsc/CnQOjVirnZeAITNAAAqULbIBw-M399_180x180.png','魅族PRO 6s','领劵立减50元 加赠保护套','¥2699起',''),
(null,'imgsc/CnQOjViHI4yAeMxqAAtuFSxnh1Q358_180x180.png','魅蓝 Note5','金属指纹大运存','¥1099起',''),
(null,'imgsc/Cix_s1isFNCALXTpAAj4ScedJ9k629_180x180.png','魅蓝 X','4月5日前领劵立减100元','¥1699起',''),
(null,'imgsc/CnQOjVi5PHuABlmaAAscQInnNPY816_180x180.png','魅蓝 Max','64G内存 6寸大屏 4100mAH快充','¥1699起',''),
(null,'imgsc/Cgbj0FjbevWAcC9pAA-EHA0Uf7A211_180x180.png','魅族MX6','购机享6期免息','¥1599起',''),
(null,'imgsc/CnQOjViprz6ASMMoAAndI9Fz2pU098_180x180.png','魅蓝 5s','3G大运存 18W快充','¥799起',' class="th"'),
(null,'imgsc/CnQOjVhhz32AKLh6AAuqcqE5YHc686_180x180.png','魅蓝 5','套餐含EP-21HD耳机','限时特惠¥788起',''),
(null,'imgsc/Cgbj0FjU1y6AURC-AACgFARC_QM889.jpg','立即购买','','',''),
(null,'imgsc/Cix_s1i8vEGAKx1oAAHOwfpsRUs571_180x180.png','魅族 EP51蓝牙运动耳机','轻装上阵 乐享动听','¥269',''),
(null,'imgsc/Cix_s1hGcvKAHjYyAAUNOZYx4Eg759_180x180.png','先锋SEC-E311BT蓝牙运动耳机','磁吸断电 运动防汗 智能一拖二','限时特惠¥249',''),
(null,'imgsc/Cgbj0VjU2zmAGEeHAACmccuvRdM787_180x180.png','铁三角 ATH-EQ300M','运动 出街利器 人声靓丽','限时特惠¥118',' class="xp"'),
(null,'imgsc/Cgbj0VjQkwiAMG3CAAC3eDP9djI163_180x180.png','森海塞尔CX215入耳式耳机','炫彩轻巧 高效降噪','¥219',''),
(null,'imgsc/Cgbj0VjU3CqAIJFpAAL2cOgdBDA534_180x180.png','飞傲M3无损音乐播放器','追忆校园青葱岁月','¥298',''),
(null,'imgsc/Cix_s1g77xmAQShaAAFOgMGKr9I877_180x180.jpg','罗马仕AU15兼容高通技术车充','QC2.0急速冲 单接口','¥49',''),
(null,'imgsc/Cgbj0VjU3JmAAGIlAARre8cY_ZU975_180x180.png','猎奇 广角微距补光手机镜头','支持3期免息','¥109',' class="th"'),
(null,'imgsc/Cix_s1f58keAaPqnAASqD7VuqpY814_180x180.png','OPICO 5口USB快充充电器','支持3期免息','¥119',' class="th"'),
(null,'imgsc/Cix_s1jGFNiAGo1lAAIXT7S3bdY478_180x180.png','魅族蓝牙自拍杆','还给你自由的双手','¥99',''),
(null,'imgsc/Cix_s1imyaCAGDUrAACQuSEtqAU210.jpg',' 立即购买','','',''),
(null,'imgsc/Cgbj0FjSKuaAdJvaAAWX1-z6F08407_180x180.png','北通阿修罗无线震动游戏手柄','支持四大平台','¥139',' class="th"'),
(null,'imgsc/Cgbj0FjU3byAaQiNAAPz4Wq7lzg069_180x180.png','CILNE-沁麟2.5L智能靠谱煲','一键搞定饭菜汤','¥229',' class="th"'),
(null,'imgsc/Cgbj0VjSKymAKZ07AAOdt4gxZmM849_180x180.png','Misfit Shine2 智能手环','模拟来电 分享定位','¥399',''),
(null,'imgsc/Cgbj0FjU3kyADX1JAAO4a9pMCY4515_180x180.png','Gowild公子小白情感智能机器人','云脑记忆 语音控制 无线链接','¥799',''),
(null,'imgsc/index55.png','暴风魔镜S1 虚拟现实智能VR眼镜','支持3期免息','¥199',''),
(null,'imgsc/Cgbj0FjPOpeAEGqtAAKSKp6L__o059_180x180.png','云麦好轻mini智能体脂秤','喝杯水都能感知的精准','¥89',' class="th"'),
(null,'imgsc/Cgbj0VjPNGeAXPgxAAGowe9Q8b0858_180x180.png','极路客 ( Goluk )G1 智能行车记录仪','精彩抓拍、一键分享、随时直播','¥299',''),
(null,'imgsc/Cgbj0FjU3fqAGm1qAASSGdlA3QM762_180x180.png','雷柏电竞级激光游戏鼠标V25','光学游戏鼠标 有线鼠标','¥149',' class="xp"'),
(null,'imgsc/Cgbj0VjU3hqARJEVAAQtZg3CAJ0286_180x180.png','微星GE62 6QD-1077XCN游戏笔记本','四核I7处理器 GTX960M独显','¥5999',''),
(null,'imgsc/CnQOjVf5m_CAfQJUAAC4mrIkAyY414.jpg','立即购买','','',''),
(null,'imgsc/CnQOjVhJD8yAcUSGAAS8IUVIV_8168_180x180.png','魅蓝 5s智能保护壳','清新亮丽 原质 原味','¥39',' class="xp"'),
(null,'imgsc/CnQOjVihUeOAbc5uAAGkrmRH8FU652_180x180.png','魅蓝 X高透保护膜','精选PET材料 强力吸附','¥29',''),
(null,'imgsc/CnQOjVhJEEOAAiZ1AASyGisZCmw374_180x180.png','魅蓝E 智能保护壳','清新亮丽 原质 原味','¥29',''),
(null,'imgsc/CnQOjVf5nOKAcs1tAAZWx0BCKuQ106_180x180.png','魅蓝E Loop Jacket环窗智能保护套','适用魅蓝 E','¥49',''),
(null,'imgsc/Cix_s1hJEG-AZ3GTAAKrLfyg1go759_180x180.png','PRO 6 Loop Jacket环窗智能保护套','适用魅族 PRO 6','¥49',''),
(null,'imgsc/CnQOjVh8hkqARwo-AAJdyfxjnVw196_180x180.jpg','魅蓝 Note5亲肤保护壳','纤薄舒适 恍若无物','¥59',''),
(null,'imgsc/Cix_s1iz0SKAIec3AAGaDSb5h4M965_180x180.png','PRO 6 Plus全贴合防爆保护膜','轻薄 精致 可靠 耐用','¥59','class="xp"'),
(null,'imgsc/CnQOjVirp9KAGCzGAAIH3XaAJjU035_180x180.png','魅蓝5 智能保护壳','清新亮丽 原质 原味','¥29',''),
(null,'imgsc/Cix_s1hchOeAK9CBAAFFjirPAYo692_180x180.png','PRO 6 Plus音乐智能保护套','音乐基因 未能忘却','¥99','');


CREATE TABLE mz_top_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pic   VARCHAR(100) NOT NULL DEFAULT '',
   pname VARCHAR(50) NOT NULL DEFAULT '',
   price VARCHAR(50) NOT NULL DEFAULT '',
   style INT
);
INSERT INTO mz_top_product VALUES
(null,'imgsc/CnQOjVhjjb6AcDdoABXIbr6WvK8260_126x126.png','魅族PRO 6 Plus','¥2999起',0),
(null,'imgsc/CnQOjVhAAfGATHD5AA1jPCtyxxQ710_126x126.png','魅族PRO 6s','¥2699',0),
(null,'imgsc/CnQOjVeE2E-AAGZCABHUf4HwKyw117_126x126.png','魅族PRO 6','¥2299',0),
(null,'imgsc/Cgbj0VjZzjiAMGEuAA7OmPNvWD8625_126x126.png','魅族PRO 5','¥2199',0),
(null,'imgsc/CnQOjViwBUiAZjKqAAndI9Fz2pU065_126x126.png','魅蓝5s','¥799起',1),
(null,'imgsc/CnQOjViHI4yAeMxqAAtuFSxnh1Q358_180x180.png','魅蓝 Note','¥999起',1),
(null,'imgsc/CnQOjVg-j0uAWlJIAAj4ScedJ9k483_126x126.png','魅蓝X','¥1699起',1),
(null,'imgsc/Cgbj0VjYdGWAAFuvAAvhVMfnh40745_180x180.png','魅蓝 Note3','¥799',1),
(null,'imgsc/Cix_s1hPyDuAJxWzAA2AnX1Gw9E114_126x126.png','魅蓝 3s','¥699',1),
(null,'imgsc/CnQOjVhPyGqAfuufAARv2SiuJEQ876_126x126.png','魅蓝 3','¥599',1),
(null,'imgsc/Cix_s1fDkdyAb0YGAEeDe0CxIV8257_126x126.png','魅蓝 U20','¥899起',1),
(null,'imgsc/CnQOjVihH3CADAB3AAbqolcyaco906_126x126.png','魅蓝 metal','¥699',1),
(null,'imgsc/Cgbj0VjZzjiAMGEuAA7OmPNvWD8625_126x126.png','魅族 MX6','¥1599起',2),
(null,'imgsc/Cix_s1eyhSCARORGAA2l_exLROk267_180x180.png','魅族 Max','¥1699',2),
(null,'imgsc/CnQOjVhBPVmANR70AAqiYLRv24w733_126x126.png','魅族 U10','¥799起',2),
(null,'imgsc/CnQOjVgtci-AYfQRAAR2vqNeyVA922_126x126.png','魅族HD50头戴式耳机','¥399',3),
(null,'imgsc/Cgbj0FjQkaOAenYdAAGCcE-7GwI810_126x126.png','先峰SEC-E311BT耳机','¥269',3),
(null,'imgsc/Cgbj0VjQkUGAS2nRAAJP_-1JwtY575_126x126.png','铁三角角 ATH-CKB50','¥299',3),
(null,'imgsc/CnQOjViZNjOAHa72AAGKFeIZ_zM096_126x126.png','森海塞尔 木馒头 In-Ear','¥749',3),
(null,'imgsc/Cix_s1iVOpyAT1ZEAAL_9wlIWj8270_126x126.png','方图手机K歌麦克风','¥268',3),
(null,'imgsc/Cgbj0VjTQkiAbMmUAAa099A9B8Y084_180x180.png','猫王小王子胡桃原木音箱','¥399',3),
(null,'imgsc/Cix_s1iZNteAYXd6AA8rGU1paRA348_126x126.png','JBL GO音乐金砖 蓝牙音箱','¥268',3),
(null,'imgsc/Cix_s1iZNbeAGg3PAAV7Darz1_I706_126x126.png','B&O PLAY A1蓝牙音箱','¥1898',3),
(null,'imgsc/CnQOjVhKHdWAf2EkAAK4RL9l4F8851_126x126.png','乐心体重称S1','¥99',4),
(null,'imgsc/Cix_s1jJDpWANDIAAAHHBr4HTLQ873_126x126.png','新游游戏手柄 魅族定制版','¥79',4),
(null,'imgsc/Cgbj0FjU3fqAGm1qAASSGdlA3QM762_180x180.png','雷柏电竞级激光游戏鼠标','¥149',4),
(null,'imgsc/Cix_s1hrFXmAUuv8AAH8vdkEC9M905_126x126.png','乐心心率手环MAMBO2','¥169',4),
(null,'imgsc/CnQOjVidYEGALArbAAHFhtrFdCs403_126x126.png','暴风魔镜S1 智能VR眼镜','¥199',4),
(null,'imgsc/Cix_s1imq8-AZlLQAAOqzSlfPuA761_126x126.png','魅族手环','¥229',4),
(null,'imgsc/CnQOjViZODaAA8U6AAGx_77qvgM196_126x126.png','Moikit mai麦开智能运动水杯','¥339',4),
(null,'imgsc/CnQOjViZOLOACLuPAANzSznhC4Q153_126x126.png','魅航智能行车记录仪MC6','¥399',4);

CREATE TABLE mz_left_product(
   pid   INT PRIMARY KEY AUTO_INCREMENT,
   pic   VARCHAR(100) NOT NULL DEFAULT '',
   pname VARCHAR(50) NOT NULL DEFAULT '',
   style INT
);
INSERT INTO mz_left_product VALUES
(null,'','魅族手机',0),
(null,'imgsc/Cix_s1iz2eyAHHYvAAI2Uq56IXM427_180x180.jpg','魅族PRO Plus',0),
(null,'imgsc/1450928403@126x126.png','魅族PRO 6s',0),
(null,'imgsc/1460456848@180x180.png','魅族 MX6',0),
(null,'imgsc/Cgbj0VjZzjiAMGEuAA7OmPNvWD8625_126x126.png','魅族PRO 6',0),
(null,'','魅蓝手机',0),
(null,'imgsc/Cix_s1eyhSCARORGAA2l_exLROk267_180x180.png','魅蓝 5s',0),
(null,'imgsc/Cix_s1g-j4qALvLOAAj4ScedJ9k572_180x180.png','魅蓝Note 5',0),
(null,'imgsc/Cix_s1jCQH2AHuvNAAndI9Fz2pU286_180x180.png','魅蓝 Note3',0),
(null,'imgsc/CnQOjVeE2E-AAGZCABHUf4HwKyw117_126x126.png','魅族 E',0),
(null,'imgsc/CnQOjVg7_iyAESCUAA9IpQ8-shg968_180x180.png','魅蓝 Max',0),
(null,'imgsc/CnQOjVg7_zCAWnDJAAf9-f-xq9Y316_180x180.png','魅蓝 U20',0),
(null,'','智能健康',1),
(null,'imgsc/CnQOjVhghU2AZSmxAAQ2Fq5Zq0g449_180x180.png','麦开 智能水杯',1),
(null,'imgsc/Cgbj0FjPOpeAEGqtAAKSKp6L__o059_180x180.png','乐心体脂称',1),
(null,'imgsc/Cgbj0VjMTQqARER0AAFFjirPAYo631_180x180.png','乐范魔力贴',1),
(null,'imgsc/Cix_s1iVOpyAT1ZEAAL_9wlIWj8270_126x126.png',' 智能肌肤喷雾仪',1),
(null,'imgsc/Cix_s1jGFNiAGo1lAAIXT7S3bdY478_180x180.png','智能环境监测仪',1),
(null,'imgsc/CnQOjVhzThuAEvhNAAETuWHy7oU493_180x180.png','智能香薰加湿器',1),
(null,'','智能生活',1),
(null,'imgsc/CnQOjVhTq-2AOwVoAALMlGvYg78126_180x180.png','控客无线插座',1),
(null,'imgsc/Cix_s1g77xmAQShaAAFOgMGKr9I877_180x180.jpg','智能灯泡',1),
(null,'imgsc/Cgbj0FjU3byAaQiNAAPz4Wq7lzg069_180x180.png','沁麟智能靠谱煲',1),
(null,'imgsc/Cgbj0VjPNGeAXPgxAAGowe9Q8b0858_180x180.png','智能摄像头',1),
(null,'imgsc/Cgbj0VjU3MSAA0QhAAGfRANhePI141_180x180.png','智能遥控',1),
(null,'imgsc/Cix_s1hsV7yARBRYAAGx_77qvgM344_180x180.png','智能调温养生壶',1),
(null,'','耳机',2),
(null,'imgsc/Cgbj0FjQkaOAenYdAAGCcE-7GwI810_126x126.png','魅族蓝牙运动耳机',2),
(null,'imgsc/Cgbj0VjPM8iAMV6HAAIqDw_QGRE075_180x180.png','先锋蓝牙运动耳机',2),
(null,'imgsc/Cgbj0VjQkUGAS2nRAAJP_-1JwtY575_126x126.png','森海塞尔耳机',2),
(null,'imgsc/Cgbj0VjQkwiAMG3CAAC3eDP9djI163_180x180.png','铁三角 耳机',2),
(null,'imgsc/Cgbj0VjU2zmAGEeHAACmccuvRdM787_180x180.png','JBL线控通话耳机',2),
(null,'imgsc/Cix_s1gFgPiAIisKAAJl7weQ3nI890_180x180.png','BeatsSolo3.0蓝牙',2),
(null,'','音箱',2),
(null,'imgsc/Cgbj0FjU2xeAU_GtAAbboUvsAC4496_180x180.png','魅族蓝牙小音箱',2),
(null,'imgsc/Cgbj0VjTQkiAbMmUAAa099A9B8Y084_180x180.png','JBL 蓝牙音响',2),
(null,'imgsc/CnQOjVhghU2AZSmxAAQ2Fq5Zq0g449_180x180.png','先锋无线蓝牙音箱',2),
(null,'imgsc/CnQOjVhzThuAEvhNAAETuWHy7oU493_180x180.png','B&O 蓝牙音箱',2),
(null,'imgsc/CnQOjVhcwM2AERI_AAKDLsonL-I739_180x180.png','猫王王子蓝牙音箱',2),
(null,'imgsc/Cix_s1iZNteAYXd6AA8rGU1paRA348_126x126.png','Beats 蓝牙音响',2),
(null,'','路由器',3),
(null,'imgsc/CnQOjVhKHdWAf2EkAAK4RL9l4F8851_126x126.png','魅族盒子',3),
(null,'imgsc/Cgbj0FjPOpeAEGqtAAKSKp6L__o059_180x180.png','魅族路由器',3),
(null,'imgsc/Cgbj0FjU3LaAFmbBAACVRHk1HFM912_180x180.png','迅雷下载宝',3),
(null,'','智能娱乐',3),
(null,'imgsc/CnQOjVeE2E-AAGZCABHUf4HwKyw117_126x126.png','极米无屏电视',3),
(null,'imgsc/Cgbj0FjU3kyADX1JAAO4a9pMCY4515_180x180.png','智能机器人',3),
(null,'imgsc/CnQOjVfriLuAWTKfAAG6mtx_wGE934_180x180.png','航拍器无人机',3),
(null,'imgsc/Cix_s1jENUOAH6CFAAPtb3y3Obc704_180x180.png','纽曼智能VR眼镜',3),
(null,'imgsc/index55.png','暴风魔镜智能VR',3),
(null,'','路由器',4),
(null,'imgsc/CnQOjVh8hkqARwo-AAJdyfxjnVw196_180x180.jpg','PRO 6音乐保护套',4),
(null,'imgsc/CnQOjVh9tR2AE-paAATN6O8PD3w810_180x180.png','PRO 6MAX保护套',4),
(null,'imgsc/CnQOjVhJD8yAcUSGAAS8IUVIV_8168_180x180.png','M魅蓝 X4保护套',4),
(null,'imgsc/CnQOjVhchSKAFEYyAAX06Xw4TTk361_180x180.png','PRO 6环窗保护套',4),
(null,'imgsc/Cix_s1ehVAyACMIkAALN7IQAbIM494_180x180.png','魅蓝 X保护套',4),
(null,'imgsc/Cix_s1hJEBWAUR4bAAS5eQoqYBI031_180x180.png','魅蓝 X5保护套',4),
(null,'','移动电源',4),
(null,'imgsc/Cgbj0VjU3MSAA0QhAAGfRANhePI141_180x180.png','移动电源标准版',4),
(null,'imgsc/Cix_s1f58keAaPqnAASqD7VuqpY814_180x180.png','移动电源快冲版',4),
(null,'','数据线',5),
(null,'imgsc/Cix_s1feCY6ABJ80AAHXId4TWtA427_180x180.png','Micro USB数据线',5),
(null,'imgsc/Cix_s1eFtXGAY_DuAACiUNg1SQg766_180x180.png','Type-C数据线',5),
(null,'imgsc/Cix_s1eFtHmAKzjJAABXVrwLVgU637_180x180.jpg','电源适配器',5),
(null,'imgsc/Cgbj0VjU3dKAQ56lAALRn19d2x0396_180x180.png','罗马仕快充适配器',5),
(null,'','办公设备',5),
(null,'imgsc/CnQOjVhTq-2AOwVoAALMlGvYg78126_180x180.png','ORICO插线板',5),
(null,'imgsc/Cgbj0VjlrPqASBEtAAGGfzBJRfQ937_180x180.png','航嘉雷盾排插',5),
(null,'imgsc/Cgbj0VjlrUqAP0bfAAOKv0xvaSo654_180x180.png','极米智能投影仪',5),
(null,'imgsc/Cgbj0VjTbM-APhAIAAJXLCli9as159_180x180.png','极米智能投影机',5),
(null,'imgsc/Cgbj0FjPNEeACIl8AAQF56Ez_3Q555_180x180.png','雷柏无线键鼠套装',5),
(null,'imgsc/Cgbj0FjU3fqAGm1qAASSGdlA3QM762_180x180.png','雷柏无线办公鼠标',5),
(null,'imgsc/Cgbj0Vjlrb2AO7ihAAVuw-i6AHY324_180x180.png','雷柏触控静音鼠标',5),
(null,'imgsc/Cgbj0FjlrZ6Aa6qtAANS1bElKIg367_180x180.png','雷柏电脑静音键盘',5),
(null,'','生活周边',6),
(null,'imgsc/CnQOjVgQZhWAexUeAAVBTlzLU4U933_180x180.png','魅族休闲双肩包',6),
(null,'imgsc/Cgbj0FjU3LaAFmbBAACVRHk1HFM912_180x180.png','迅雷下载宝',6),
(null,'','手机镜头',6),
(null,'imgsc/CnQOjVeMgROAf_ciAAcLtp4-zlA316.png','猎奇 手机镜头套装',6),
(null,'imgsc/CnQOjVeZd-aACZuLAFQ1DuBT8ZA231_180x180.png','猎奇 机器人镜头',6),
(null,'','自拍杆',6),
(null,'imgsc/CnQOjVfriLuAWTKfAAG6mtx_wGE934_180x180.png','航拍器无人机',6),
(null,'imgsc/Cix_s1jENUOAH6CFAAPtb3y3Obc704_180x180.png','纽曼智能VR眼镜',6),
(null,'imgsc/Cix_s1jGFNiAGo1lAAIXT7S3bdY478_180x180.png','魅族 线控自拍杆',6);

create table lottery_count(
  cID int primary key auto_increment,
  cTime varchar(32),
  cUserID int,
  cLeaveTimes int
);
