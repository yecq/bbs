<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: lang_update.php by Valery Votintsev, codersclub.org
 *
 *	Arabic by Khalid El-Nahhal, http://www.ar-discuz.org
 */

$lang = array(

//===========================
// Main Update Procedure
//---------------------------
//utility/update.php

	'del_update_lock'		=> 'يجب دخول ال ftp , حذف ملف  ./data/update.lock ثم اعد تحديث الصفحة.',//'请您先登录服务器ftp,手工删除 ./data/update.lock 文件,再次运行本文件进行升级.',
	'sql_file'			=> ' ملف SQL  ',//'SQL文件 '
	'does_not_exist'		=> '  غير موجود ',//' 不存在',
	'table_delete_completed'	=> 'حذف الجداول والحقول تم بنجاح ',//'删除表和字段操作完成了',
	'close_before_update'		=> ' الرجاء اغلق الدخول للمنتدى قبل عملية الترقية . ',//'请先关闭站点再执行此升级操作',
	'ucenter160update'		=> 'الرجاء ترقية  UCenter الخاص بك إلى الإصدار  1.6.0 أو احدث.<br>إذا كنت تستعمل Discuz!X مع UCenter, الرجاء ترقية  UCenter باستخدام uc_server/upgrade/upgrade3.php',//'请先升级UCenter到1.6.0以上版本。<br>如果使用为Discuz! X自带UCenter，请先运行uc_server/upgrade/upgrade3.php进行升级',
	'db_will_upgrade'		=> '<b>ملاحظة:</b><br>&nbsp;&nbsp;&nbsp;البرنامج سوف يدخل على احدث قاعدة بيانات موجودة لإعادة التوافق ما بين ديسكاز و Ucenter .<br>',//'说明：<br>本升级程序会参照最新的SQL文件,对数据库进行同步升级.',
	'check_latest_version'		=> 'تأكد من ملف ./data/install.sql بأنه في أحدث إصدار!',//'请确保当前目录下 ./data/install.sql 文件为最新版本.',
	'check_plugins'			=> 'بعد الترقية بنجاح, اغلق كل الهاكات ليعمل ديسكاز بالشكل الصحيح. بعد ذلك قم بفتح هاك تلو الآخر لمعرفة أن كان هناك خطأ في احداها بأن تقوم بترقيته لتوافق مع إصدار ديسكاز الحالي .',//'升级完成后会关闭所有插件以确保正常运行，请站长逐个开启每一个插件检测是否兼容新版本。',
	'upgade_start'			=> 'جاهز, بدء عملية الترقية',//'准备完毕,升级开始',
	'contacts'			=> ' تواصل: ',//' 联系方式:',
	'ready_to_db_upgrade'		=> 'جاهز, ستكون الخطوة التالية ترقية بنية قاعدة البيانات',//'准备完毕,进入下一步数据库结构升级',
	'sql_empty'			=> ' ملف SQL فارغ , تأكد من ذلك',//'SQL文件内容为空,请确认',
	'db_structure_upgraded'		=> 'تم ترقية بنية قاعدة البيانات بنجاح, إضغط هنا لترقية باقي البيانات',//'数据库结构升级完毕,进入下一步数据升级操作',
	'add_table'			=> 'إضافة جدول  ',//'添加表 ',
	'sql_error'			=> ' خطأ. الرجاء تنفيذ عبارة SQL التالية بالطريقة اليدوية , ثم قم بإعادة عملية الترقية',//' 出错,请手工执行以下SQL语句后,再重新运行本升级程序',
//	'sql_error'			=> ' Error. Please perform the following update statement by hand, then re-run the upgrade program',//'出错,请手工执行以下升级语句后,再重新运行本升级程序',
	'completed'			=> ' تم بنجاح',//'完成',
	'upgrade_table'			=> 'ترقية جدول ',//'升级表 ',
	'table_rename'			=> 'تغيير إسم جدول  ',//'表改名 ',
	'sql_statement'			=> 'جملة ترقية  SQL ',//'升级SQL语句',
	'check_table'			=> 'افحص جدول ',//'检查表 ',
	'skip_table'			=> ' تم بنجاح, بدون ترقية, تجاوز',//' 完成,不需升级,跳过',
	'real_names_updated'		=> 'تم ترقية الإسم',//'实名功能升级完毕',
	'real_name'			=> 'الإسم الحقيقي',//'真实姓名',
	'real_name_progress'		=> 'عملية ترقية الأسماء الحقيقية:',//'实名功能升级中',
	'users_updated'			=> 'عملية ترقية إسماء الأعضاء تمت بنجاح',//'用户栏目升级完毕',
	'recommended_webmaster'		=> 'مستحسن من قبل الإدارة',//'站长推荐',
	'article_tags'			=>  array (
					    1 => 'أصلي',//'原创',
					    2 => 'نشط',//'热点',
					    3 => 'صور',//'组图',
					    4 => 'أخبار مثيرة',//'爆料',
					    5 => 'أخبار',//'头条',
					    6 => 'شرائح',//'幻灯',
					    7 => 'متابعة',//'滚动',
					    8 => 'مستحسن',//'推荐',
					    ),
	'anonymous'			=> 'مجهول',//'匿名',
	'politics'			=> 'السياسات',//'政治',
	'advertising'			=> 'إعلان',//'广告',
	'userreasons'			=> 'قوي!\r\nمفيد\r\nرائع!\r\nالافضل!\r\nممتع',//'很给力!\r\n神马都是浮云\r\n赞一个!\r\n山寨\r\n淡定'
	'plugin_center'			=> 'Discuz! مركز هاك',//'Discuz! 扩展中心',
	'plugin_forum'			=> 'Discuz! هاك',//'Discuz! 扩展中心最新的论坛插件',
	'settings_updated'		=> 'تهانيناً, تم ترقية الإعدادات بنجاح',//'配置项升级完成',
	'group_setting_updated'		=> 'تم ترقية إعدادات المجموعات بنجاح',//'管理组设置升级完成',
	'clean_feeds'			=> 'مسح الأخبار التالفة',//'清理过期动态',
	'cron_completed'		=> 'تم ترقية مهام Cron بنجاح',//'计划任务升级完成',
	'color_card'			=> 'بطاقة الالوان',//'变色卡',
	'color_card_descr'		=> 'يمكنك تغيير لون أو تنسيق عنوان موضوع معين',//'可以将帖子或日志的标题高亮，变更颜色',
	'visitor_card'			=> 'بطاقة الاكتشاف',//'显身卡',
	'visitor_card_descr'		=> 'يمكنك رؤية من هو الشخص المتخفي.',//'可以查看一次匿名用户的真实身份。',
	'anonymous_card'		=> 'بطاقة التخفي',//'匿名卡',
	'anonymous_card_descr'		=> 'إظهار إسمك كمخفي في المواقع المميزة.',//'在指定的地方，让自己的名字显示为匿名。',
	'apps_completed'		=> 'تم ترقية معلومات اتطبيق بنجاح',//'漫游应用统计升级完成',
	'navigation_completed'		=> 'تم ترقية معلومات شريط التنقل بنجاح',//'导航数据升级完成',
	'group_status_completed'	=> 'تم ترقية حالة المجموعات بنجاح',//'版块状态升级完毕',
	'recommendations_completed'	=> 'تم ترقية المستحسنات بنجاح',//'回帖推荐升级完毕',
	'users_completed'		=> 'تم ترقية الأعضاء بنجاح',//'用户升级完毕',
	'daylogin'			=> 'الدخول اليومي',//'每天登录',
	'portalcomment'			=> 'تعليقات المقالة',//'文章评论',
	'points_rules_completed'	=> 'تم ترقية نظام النقاط بنجاح',//'积分规则升级完毕',
	'custom_bbcode_completed'	=> 'تم ترقية صلاحيات اكواد BBCode بنجاح',//'自定义代码权限升级完毕',
	'edited_by'			=> 'تم التعديل بواسطة ',//'编辑采用',
	'stamps_completed'		=> 'تم ترقية أختام الموضوع بنجاح',//'鉴定图章升级完毕',
	'perms_updated'			=> 'تم ترقية الصلاحيات بنجاح',//'模块缩略图权限升级完毕',
	'block_permissions_completed'	=> 'تم ترقية البلوكات بنجاح',//'模块权限升级完毕',
	'portal_completed'		=> 'تم ترقية قنوات المجلة بنجاح',//'门户频道权限升级完毕',
	'articles_updated'		=> 'تم ترقية المقالات بنجاح',//'文章评论升级完毕',
	'article_comments_completed'	=> 'تم ترقية تعليقات المدونة بنجاح',//'文章封面图升级完毕',
	'blocks_completed'		=> 'تمت الترقية بنجاح',//'模块模板升级完毕',
	'scripts_completed'		=> 'تمت الترقية بنجاح',//'模块脚本升级完毕',
	'group_permissions_completed'	=> 'تمت الترقية بنجاح',//'用户组权限升级完毕',
	'group_home_completed'		=> 'تمت الترقية بنجاح',//'群组首页升级完毕',
	'domains_completed'		=> 'تمت الترقية بنجاح',//'域名设置升级完毕',
	'new_pm_completed'		=> 'تمت الترقية بنجاح',//'新短消息状态重置完毕',
	'view_img_completed'		=> 'تمت الترقية بنجاح',//'查看图片权限升级完毕',
	'realname_verify'		=> 'مراجعة الإسم الحقيقي',//'实名认证升级中',
	'video_verify'			=> 'مراجعة الفيديو',//'视频认证',
	'real_name_verification'	=> 'مراجعة الإسم الحقيقي',//'实名认证升级中',
	'real_name_verification_completed'	=> 'تمت الترقية بنجاح',//'认证数据升级完毕',
	'attachment_upgrade'		=> 'تحديث جدول مرفقات المنتدى ... ',//'论坛附件表升级中 ... ',
	'attachment_upgraded'		=> 'تمت الترقية بنجاح.',//'论坛附件表升级完毕',
	'topic_image_skip'		=> 'لا يمكن معالجة صور المواضيع, تم التجاوز.',//'主题图片表无法处理，跳过',
	'topic_image_upgraded'		=> 'تم ترقية صور المواضيع',//'主题图片表处理完毕',
	'topic_image_upgrade'		=> 'ترقية صور المواضيع ... ',//'主题图片表处理中 ... ',
	'verify_updated'		=> 'ترقية معلومات المراجعة تمت بنجاح.',//'审核数据升级完毕',
	'founder_updated'		=> 'تمت ترقية معلومات المؤسس بنجاح',//'创始人数据升级完毕',
	'plugins_updated'		=> 'تمت ترقية لغة حزم الهاكات بنمجاح.',//'插件语言包数据升级完毕',
	'config_default_lost'		=> 'config_global_default.php غير موجود,قم بإعادة رفعه.',//'config_global_default.php was lost, please reupload this file.',
	'data_processing_completed'	=> 'تمت معالجة البيانات بنجاح',//'数据处理完成',
	'config_not_writable'		=> '"config/config_global.php" تم ترقيته بنجاح, لا يمكن الكتابة على مجلد  "config/" , لقد قمنا بحفظ الملف الذي قمنا بترقيته في  "data/" , الرجاء انقل هذا الملف إلى هذا المجلد "config/" ووافق على الاستبدال أن وجد.',//'"config/config_global.php" 文件已更新,由于 "config/" 目录不可写入,我们已将更新的文件保存到 "data/" 目录下,请通过 FTP 软件将其转移到 "config/" 目录下覆盖源文件.',
	'config_continue'		=> 'بعد إكمال هذه العملية انقر هنا للإستمرار',//'当您完成上述操作后点击这里继续',
	'data_delete_next'		=> 'تم حذف البيانات بنجاح, الذهاب للخطوة التالية',//'数据删除不处理,进入下一步',
	'tables_unused'			=> '<strong>جداول البيانات التالية</strong> غير مستعملين بعد المقارنة بالقاعدة الاصلية:<br>هل تريد حذفها',//'以下 <strong>数据表</strong> 与标准数据库相比是多余的:<br>您可以根据需要自行决定是否删除',
	'index'				=> 'فهرس',//'索引',
	'field'				=> 'حقل',//'字段',
	'fields_unused'			=> '<strong>الحقول التالية</strong> غير مستعملة بعد مقارنتها بالقاعدة الاصلية:<br>قرر ما ذا كنت تريد حذفهم',//'以下 <strong>字段</strong> 与标准数据库相比是多余的:<br>您可以根据需要自行决定是否删除',
	'tables_fields_no_unused'	=> 'تمت المقارنة مع قاعدة البيانات الاصلية, لا يوجد جداول اضافية أو حقول اضافية.',//'与标准数据库相比,没有需要删除的数据表和字段',
	'click_next_step'		=> 'انقر للذهاب للخطوة التالية',//'请点击进入下一步',
	'submit_delete'			=> 'تأكيد الحذف',//'提交删除',
	'ignore_unused'			=> 'يمكنك تجاهل الحقول والجداول الاضافية',//'您也可以忽略多余的表和字段',
	'next_step_directly'		=> 'الذهاب للخطوة التالية مباشرة',//'直接进入下一步',
	'default_style_restore_sure'	=> 'خل تريد استعادة الاستايل الافتراضي السابق?',//'请确认是否要恢复默认风格？',
	'yes'				=> 'نعم',//'是',
	'no'				=> 'لا',//'否',
	'default_style_restored'	=> 'تم استعادة الاستايل الافتراضي, الذهاب للمرحلة الأخرى',//'默认风格已恢复,进入下一步',
	'cache_update'			=> 'ترقية الملفات المؤقتة, الرجاء الرجوع ...',//'缓存更新中，请稍候 ...',
	'database_updated'		=> 'مبروك, تم ترقية بنية قاعدة البيانات! لأسباب امنية, إحذف هذا الملف.',//'恭喜，数据库结构升级完成！为了数据安全，请删除本文件。',
	'jump_to'			=> 'الإنتقال إلى ...',//'跳转中...',
	'database_update'		=> 'عملية ترقية قاعدة البيانات',//'数据库升级程序',
	'database_update_tool'		=> 'أداة ترقية قاعدة البيانات',//'数据库升级工具',
	'update_start'			=> 'بدء الترقية',//'升级开始',
	'database_update_structure'	=> 'ترقية قاعدة البيانات',//'数据库结构添加与更新',
	'data_update'			=> 'ترقية البيانات',//'数据更新',
	'database_delete_structure'	=> 'حذف البيانات الغير مستعملة',//'数据库结构删除',
	'update_completed'		=> 'تم الترقية بنجاح',//'升级完成',
	'reports_completed'		=> 'ترقية التقارير تم بنجاح',//'举报升级完成',
	'magics_updated'		=> 'ترقية الدعائم تم بنجاح',//'道具升级完成',
	'birthday'			=> 'تاريخ الميلاد',//'出生日期',
//-----------------------------------------------------------------------------
// Added in X2.5:
	'table_optimize'	=> 'تحسين جدول',//'优化数据表',
	'close_wait'		=> 'موقعك ليس مغلقاً, جاري الإغلاق تلقائياً, إنتظر قليلاً...',//'您的站点未关闭，正在关闭，请稍后...',
	'length'		=> '[الطول]',//'[时长]',
	'status'		=> '[الحالة]',//'[状态]',
	'info'			=> '[معلومات]',//'[信息]',
	'next_step_wait'	=> 'جاهز للإنتقال للخطوة التالية, إنتظر قليلاً...',//'准备进入下一步操作，请稍后...',
	'upgrade_wait'		=> 'جاري عملية الترقية, الرجاء الإنتظار...',//'正在升级数据，请稍后...',
//	'ready_to_db_upgrade'	=> 'Ready to enter the next step: upgrade the database structure',//'准备完毕，进入下一步数据库结构升级',
	'patches_dayly'		=> 'الوصول اليومي للإصلاحات الأمنية',//'每日获取安全补丁',
	'regular_publish'	=> 'المواضيع العادية المنشورة',//'定时发布主题',
	'archive_weekly'	=> 'التحديث الاسبوعي للبث',//'每周广播归档',
	'updates_daily'		=> 'عدد فحوصات التحديث اليومي',//'更新每日查看数',
	'users_daily'		=> 'التحديث اليومي لجداول الأعضاء',//'每日用户表优化',
	'collection_follow'	=> 'Collection followed rule (Taobao album subscription)',//'淘专辑被订阅',
	'new_post'		=> 'المشاركات الجديدة',//'新人帖',
	'moderated_completed'	=> 'تم ترقية بيانات المشرفين بنجاح',//'审核数据转换完毕',
	'medal_completed'	=> 'تم ترقية بيانات الأوسمة بنجاح',//'用户勋章数据升级完毕',
	'data_update_completed'	=> 'تم ترقية البيانات بنجاح',//'数据升级结束',
	'group_stat_completed'	=> 'ترقية بيانات المجموعات تمت بنجاح',//'论坛版块统计数据升级完毕',
//-----------------------------------------------------------------------------
// Added in X3.0:
	'cron_todayheats_daily'	=> 'التحديث اليومي لعداد المواضيع اليومية',//'统计今日热帖',
	'hot_posts_completed'	=> 'تم التحديث',//'热帖处理完毕',
	'reminder_update_completed'	=> 'تم الانتهاء',//'提醒数据升级完毕',
	'layout_update_completed'	=> 'تم الانتهاء من ترقية اعدادات الطبقات',//'布局方案设置升级完毕',
	'processed_from'	=> 'بدء المعالجة من ',//'正在处理从 ',
	'starting_from'		=> ' تبدء من ',//' 开始 ',
	'popular_posts'		=> 'المشاركات المشهورة',//'的热帖',
//To lang_template:
	'default_layout'	=> 'الطبقة الافتراضية',//'默认方案',
	'qq_bbcode_description'	=> 'QQ online status, points icon and his/her chat',//'显示 QQ 在线状态，点这个图标可以和他（她）聊天',
	'qq_enter'		=> 'ادخل رقم QQ ',//'请输入 QQ 号码',
	'qq_onlne_status'	=> 'Set QQ online status',//'设置QQ在线状态',
	'open_soso'		=> '<br><br>Tips:<br>In order to reduce the forum loading, this upgrade will help you to use our website Geo-location search service.<br>You can go to',//'<br><br>友情提示：<br>为更好的降低论坛搜索时的数据压力，本次升级已经帮本站开通纵横搜索服务。<br>你可以在',
	'open_soso_link'	=> 'AdminCP -&gt; Cloud platform -&gt; Geo-location search Management',//'站点后台-&gt;云平台-&gt;纵横搜索 进行管理',
	'parameter_invalid'	=> 'Invalid parameter',//'请求的参数不正确',
	'update_sql'		=> '<br><br><b>The following is a database upgrade statement being executed:</b><br>',//'<br><br><b>以下是正在执行的数据库升级语句:</b><br>',
	'builtin'			=> 'Built-in',//'内置',
	'birthdist'			=> 'Birth District',//'出生县',
	'birthdist_info'		=> 'Birth District/County',//'出生行政区/县',
	'birthcommunity'		=> 'Birth Community',//'出生小区',
	'birthcommunity_info'		=> '',//'',
	'birthcity'			=> 'Birth City',//'出生地',
	'residecity'			=> 'Reside City',//'居住地',
	'birthday'			=> 'Birthday',//'出生日期',
	'idcardtype'			=> 'Document type',//'证件类型',
	'alipay'			=> 'AliPay',//'支付宝',
	'taobao'			=> 'TaoBao',//'阿里旺旺',
	'basic_info'			=> 'Basic info',//'基本资料',
	'education_info'		=> 'Education info',//'教育情况',
	'work_info'			=> 'Work info',//'工作情况',
	'personal_info'			=> 'Personal Info',//'个人信息',
	'reglinkname'			=> 'Registration',//'注册',
//SPOILER TAG by jaideejung007
//	'spoiler'		=> 'Spoiler',//'สปอยล์',
//	'spoiler_hide'		=> '[Spoil] click to hide the text',//'[Spoil] คลิกเพื่อซ่อนข้อความ',
//	'spoiler_show'		=> '[Spoil] Click to see hidden text',//'[Spoil] คลิกเพื่อดูข้อความที่ซ่อนไว้',
//	'spoiler_placeholder'	=> 'Enter the text you want to hide in spoiler',//'กรอกข้อความที่คุณต้องการสปอยล์',

);
