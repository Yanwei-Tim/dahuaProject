SET NAMES "UTF8";
DROP DATABASE IF EXISTS dahua;
CREATE DATABASE dahua CHARSET=UTF8;
USE dahua;

-- 创建轮播表
CREATE TABLE nav_advPic(
  did INT PRIMARY KEY AUTO_INCREMENT,
  pic_name VARCHAR(64),
  pic VARCHAR(64)
);

INSERT INTO nav_advpic VALUES(
	NULL,'第一张','2016-09-308500.jpg'
),(
	NULL,'第二张','2016-09-297124.jpg'
),(
	NULL,'第三张','2016-09-293512.jpg'
),(
	NULL,'第四张','2016-09-308791.jpg'
),(
	NULL,'第五张','2016-09-292345.jpg'
),(
	NULL,'第六张','2016-09-308793.jpg'
);

--新品速递数据表
CREATE TABLE pro_advpic(
  id INT PRIMARY KEY AUTO_INCREMENT,
  pro_pic VARCHAR(64),
  pro_name VARCHAR(64),
  pro_model VARCHAR(64),
  pro_dec  VARCHAR(128)
);

INSERT INTO pro_advpic VALUES(
   NULL,'2016-09-304336.jpg','智能分析服务器','DH-IVS-B5024A-V2','DH-IVS-V2系列是大华自主研发的新一代智能视频分析服务器，面向通用...'),
 ( NULL,'2016-09-302343.jpg','16盘位智能4K NVR 90','DH-NVR9064','DH-NVR9064产品是大华新一代网络硬盘录像机。DH-NVR9064系列产品支持主...'),
 ( NULL,'2016-09-302991.jpg','精品录播一体机','DH-TRS1000-EX','支持8路SDI、1个HDMI、1个VGA视频输入， 4个HDMI、3个VGA视频输出 支持7...'),
 ( NULL,'2016-09-305452.jpg','常态化录播一体机','DH-TRS1000-NX','支持4路SDI、1个HDMI、1个VGA视频输入， 4个HDMI、3个VGA视频输出 支持7...'),
 ( NULL,'2016-09-304515.jpg','高清(200万像素)星光级R型','DH-IPC-HDBW5233(8)R(-AS)','采用超低照度 200万(1920*1080) CMOS图像传感器，低照度效果好，图像清晰度'),
 ( NULL,'2016-09-305452.jpg','单盘位经济型NVR 61HS-','DH-NVR6104/08HS-S1','DH-NVR61HS-S1系列产品是一款高性能的网络硬盘录像机。产品具备本地预览、视'),
 ( NULL,'2016-09-301573.jpg','高清（200万像素)星光迷你防','DH-IPC-HDB4233(8)C-SA系列','采用星光级超低照度200万(1920*1080)CMOS图像传感器,低照度效果'),
 ( NULL,'2016-09-301891.jpg','高清（400万像素)超宽动态迷','DH-IPC-HDB4431(6)C-SA系列','采用超低照度400万(2688*1520)CMOS图像传感器,低照度效果好，图像清晰度高 可'),
 ( NULL,'2016-09-302008.jpg','高清(200万像素)星光级R型','DH-IPC-HDBW5233(8)R(-AS)','采用超低照度 200万(1920*1080) CMOS图像传感器，低照度效果好，图像清晰度'),
 ( NULL,'2016-09-302008.jpg','单盘位经济型NVR 61HS-','DH-NVR6104/08HS-S1','DH-NVR61HS-S1系列产品是一款高性能的网络硬盘录像机。产品具备本地预览、视'),
 ( NULL,'2016-09-302343.jpg','高清（200万像素)星光迷你防','DH-IPC-HDB4233(8)C-SA系列','采用星光级超低照度200万(1920*1080)CMOS图像传感器,低照度效果'),
 ( NULL,'2016-09-303648.jpg','高清（400万像素)超宽动态迷','DH-IPC-HDB4431(6)C-SA系列','采用超低照度400万(2688*1520)CMOS图像传感器,低照度效果好，图像清晰度高 可')
