﻿//数据获取和异步刷新
var json = '{ "image1": {"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news1.jpg","title": "纽约现大批华人假僧尼行乞 多人已被捕","description": "人潮汹涌的曼哈顿时报广场，向来是打扮成米老鼠、超级英雄和其它玩偶人的聚集行乞之地。近日，又加入大批穿着橘色、棕色或灰色僧袍的“僧尼”，样貌大部分是剃光头的华人男子，也有一些类似装扮的女子。面对记者访问，这些穿僧袍的男子对他们来自哪里闪烁其词，拒绝答复任何有关背景或训练的问题，他们大多说汉语，口音听似来自中国各地。","link":"http://news.qq.com/a/20140708/013243.htm#p=1"},"image2": {"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news2.jpg","title": "在线影展：北京-你视而不见的日与夜","description": "从历史古都到超级都市，北京有着无数种视觉图景。生长于北京的摄影记者贺顿，对这座城市在记忆与当下之间呈现的巨大差异如鲠在喉，他致力于寻找那些大多数人难以发现又或者视而不见的视角，他镜头中的北京，是一种细节与全景并置的视觉“复调”，是刁钻的视角对庸常景物的再造，也是他对自身城市记忆一次荒腔走板的复述。","link":"http://news.qq.com/photon/zaixianyingzhan/beijing.htm"},"image3": {"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news3.jpg","title": "海南文昌村民立日本侵略军将领跪地谢罪石像","description": "为纪念被日本侵略军残忍杀害的亲人，海南文昌市东阁镇金牛流坑村村民凌先生特地请人雕刻时任日本侵略军将领的石像，让他们跪在凌先生亲人的坟茔前谢罪。图为跪在一座碑文显示为凌妣陈氏嬬人之墓前的日本侵略军将领，海军中将迈滕信竹，陆军中将佐贺，陆军少将安滕利吉，旅团长少将饭田祥二郎。","link":"http://news.qq.com/a/20140709/013548.htm#p=1"},"image4":{"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news4.jpg","title": "古寺里年轻和尚的现代生活","description": "在经济浪潮、商业繁华席卷城市之都时，习惯了被高楼林立、街道纵横包裹其中的济南市民，往往忽略了仅距市中心2.5公里远、海拔仅有285米高的千佛山上，有一座见证了历史变迁、风云变幻的庙宇。","link":"http://news.qq.com/a/20140709/010169.htm#p=1"},"image5": {"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news5.jpg","title": "等待重生的孩子","description": "从贵州远赴重庆、患上脑干胶质瘤的四岁男孩“狗狗”日渐衰弱，父母八方寻医，药石无灵，邱培亮夫妇带着儿子住在出租房的目的，是等待“狗狗”安然离去，将他的器官及遗体全部捐献。","link":"http://news.qq.com/a/20140708/069891.htm"},"image6": {"url": "http://jessicayuan2012.github.io/hw_4_newsPicInfo/news6.jpg","title": "合肥传销者暴力阻法耍无赖被抬走","description": "2014年7月8日，安徽合肥，执法人员查处“涉传”旅游大巴。据合肥市蜀山区工商分局负责人介绍，根据群众举报以及各镇街园的先期摸排，每天上午，在赖少其艺术馆、省博物馆等地都有停靠的旅游大巴车，以一天800元的包车费用，拉着传销人员到合肥市的各大景点进行参观，并集中“上课”，对他们进行洗脑式教育。合肥赖少其艺术馆门前，一位暴力阻挠执法的传销人员，被执法人员抬到公安执法车前。","link":"http://news.qq.com/a/20140709/005529.htm#p=1"}}'

var picInfo = JSON.parse(json);

var imgs = $('#content img');
$(imgs[0]).attr('src', picInfo.image1.url);
$(imgs[1]).attr('src', picInfo.image2.url);
$(imgs[2]).attr('src', picInfo.image3.url);
$(imgs[3]).attr('src', picInfo.image4.url);
$(imgs[4]).attr('src', picInfo.image5.url);
$(imgs[5]).attr('src', picInfo.image6.url);

var titles = $('#content h3');
titles[0].innerHTML = '1/6 ' + picInfo.image1.title;
titles[1].innerHTML = '2/6 ' + picInfo.image2.title;
titles[2].innerHTML = '3/6 ' + picInfo.image3.title;
titles[3].innerHTML = '4/6 ' + picInfo.image4.title;
titles[4].innerHTML = '5/6 ' + picInfo.image5.title;
titles[5].innerHTML = '6/6 ' + picInfo.image6.title;

var imgLinks = $('#content a');
$(imgLinks[0]).attr('href', picInfo.image1.link);
$(imgLinks[1]).attr('href', picInfo.image2.link);
$(imgLinks[2]).attr('href', picInfo.image3.link);
$(imgLinks[3]).attr('href', picInfo.image4.link);
$(imgLinks[4]).attr('href', picInfo.image5.link);
$(imgLinks[5]).attr('href', picInfo.image6.link);

var imgDes = $('#content p');
imgDes[0].innerHTML = picInfo.image1.description;
imgDes[1].innerHTML = picInfo.image2.description;
imgDes[2].innerHTML = picInfo.image3.description;
imgDes[3].innerHTML = picInfo.image4.description;
imgDes[4].innerHTML = picInfo.image5.description;
imgDes[5].innerHTML = picInfo.image6.description;