<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: lang_misc.php by Valery Votintsev, codersclub.org
 *      Arabic by Khalid El-Nahhal, http://www.ar-discuz.org
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(
	'discuz_lang'		=> 'ملحق',
	'contact'		=> 'مراسلة :',
	'anonymous'		=> 'مجهول',//'匿名',
	'anonymoususer'		=> 'مجهول',
	'guestuser'		=> 'زائر',
	'has_expired'		=> 'هذه المعلومات منتهية الصلاحية',
	'click_view'		=> 'إضغط للعرض',
	'never_expired'		=> 'غير محدود',
	'sort_update'		=> 'تحديث',
	'sort_upload'		=> 'رفع',
	'view_noperm'		=> 'محتوى مخفي',
	'post_hidden'		=> '**** مخفي بواسطة الكاتب ****',//'**** 本内容被作者隐藏 ****',
	'post_banned'		=> '**** الكاتب محظور أو محذوف ****',//'**** 作者被禁止或删除 内容自动屏蔽 ****',
	'post_single_banned'	=> '**** هذه المشاركة محظورة ****',//'**** 该帖被屏蔽 ****',
	'message_ishidden_hiddenreplies'	=> 'هذه المشاركة تظهر لكاتبها فقط',//'此帖仅作者可见',
	'post_reply_quote'		=> '{author} رد في  {time}',//'{author} 发表于 {time}',
	'post_edit'			=> "[i=s] تم تعديله بواسطة  {editor} في  {edittime} [/i]\n\n",//'[i=s] 本帖最后由 {editor} 于 {edittime} 编辑 [/i]\n\n',
	'post_edit_regexp'		=> '/^\[i=s\] تم تعديله بواسطة  .*? في .*? \[\/i\]\n\n/s',//'/^\[i=s\] 本帖最后由 .*? 于 .*? 编辑 \[\/i\]\n\n/s',
	'post_edithtml'			=> '[i=s] تم تعديله بواسطة  {editor} في {edittime} [/i]<br /><br />',//'[i=s] 本帖最后由 {editor} 于 {edittime} 编辑 [/i]<br /><br />',
	'post_edithtml_regexp'		=> '/^\[i=s\] تم تعديله بواسطة .*? في .*? \[\/i\]&lt;br \/&gt;&lt;br \/&gt;/s',//'/^\[i=s\] 本帖最后由 .*? 于 .*? 编辑 \[\/i\]&lt;br \/&gt;&lt;br \/&gt;/s',
	'post_editnobbcode'		=> '[ المشاركة عدلت بواسطة {editor} في {edittime} ]\n\n',//'[ 本帖最后由 {editor} 于 {edittime} 编辑 ]\n\n',
	'post_editnobbcode_regexp'	=> '/^\[ المشاركة عدلت بواسطة .*? في .*? \]\n\n/s',//'/^\[ 本帖最后由 .*? 于 .*? 编辑 \]\n\n/s',
	'post_reply'			=> 'رد',//'回复',
	'post_thread'			=> 'إضافة موضوع',//'的帖子',

	'price'				=> 'السعر',
	'pay_view'			=> 'السجل',//销售记录
	'attachment_buy'		=> 'شراء',

	'post_trade_yuan'		=> ' وحدة ',//'元',
	'post_trade_seller'		=> 'البائع',//'卖家',
	'post_trade_name'		=> 'إسم المنتج',//'商品名称',
	'post_trade_price'		=> 'السعر',//'商品价格',
	'post_trade_quality'		=> 'الجودة',//'商品成色',
	'post_trade_locus'		=> 'الموقع',//'商品所在地',
	'post_trade_transport_type'	=> 'تسليم الضرائب بواسطة ',//'物流方式',
	'post_trade_transport_seller'	=> 'بائع',//'卖家承担运费',
	'post_trade_transport_buyer'	=> 'مشتري',//'买家承担运费',
	'post_trade_transport_mail'	=> 'بريد',//'平邮',
	'post_trade_transport_express'	=> 'بريد سريع',//'快递',
	'post_trade_transport_virtual'	=> 'بدون تسليم',//'虚拟物品或无需邮递',
	'post_trade_transport_physical'	=> 'الدفع عند التسليم',//'买家收到货物后直接支付给物流公司',
//vot	'post_trade_locus'		=> 'الموقع',//'所在地点',
	'post_trade_description'	=> 'وصف المنتج',//'商品描述',
	'post_trade_pm_subject'		=> '[صفقة]',//'[议价]',
	'post_trade_pm_buynum'		=> 'شراء الكمية',//'购买数量',
	'post_trade_pm_wishprice'	=> 'السعر المرغوب',//'我期望的价格是',
	'post_trade_pm_reason'		=> 'سبب للتفاوض',//'我议价的理由是',
	'postappend_content'		=> 'إضافة مشاركة',//'补充内容',
	'payment_unit'			=> ' وحدة ',//'元',

	'attach'			=> 'المرفقات',//'附件',
	'attach_pay'			=> 'المرفقات المدفوعة',//'收费附件',
	'attach_credits_policy'		=> 'عرض سياسة البيع',//'查看积分策略说明',
	'attach_img'			=> 'إرفاق صور',//'图片附件',
	'attach_readperm'		=> 'قراءة الصلاحيات',//'阅读权限',
	'attach_img_zoom'		=> 'إضغط لعرض الصورة بالحجم الكامل في نافذة جديدة.\\n CTRL + عجلة الماوس للتقريب أو التبعيد.',//'点击在新窗口查看全图\\nCTRL+鼠标滚轮放大或缩小',
	'attach_img_thumb'		=> 'إضغط هنا لعرض الصورة بالحجم الكامل',//'点击在新窗口查看全图',
	'attach_downloads'		=> 'التحميلات',//'下载次数',

	'post_trade_transport'		=> 'الضريبة',//'邮费',
//vot	'post_trade_transport_mail'	=> 'البريد',//'平邮',
	'post_trade_quality'		=> 'نوع المنتج',//'商品成色',
	'post_trade_quality_new'	=> 'جديد',//'全新',
	'post_trade_quality_secondhand'	=> 'مستعمل',//'二手',

	'trade_unstart'			=> '<font color="gray">إنتظر للمعالجة</font>',//'<font color="gray">未生效的交易</font>',
	'trade_waitbuyerpay'		=> 'إنتظر للدفع',//'等待买家付款',
	'trade_waitsellerconfirm'	=> 'إنتظر موافقة البائع',//'交易已创建，等待卖家确认',
	'trade_sysconfirmpay'		=> 'إنتظر موافقة البائع لتأكيد الدفع',//'确认买家付款中，暂勿发货',
	'trade_waitsellersend'		=> 'تم الدفع. إنتظر بائع الشحن',//'买家已付款，等待卖家发货',
	'trade_waitbuyerconfirm'	=> 'تم النقل. إنتظر موافقة المشتري',//'卖家已发货，买家确认中',
	'trade_syspayseller'		=> 'تم التسليم. إنتظر الدفع للبائع',//'买家确认收到货，等待支付宝打款给卖家',
	'trade_finished'		=> '<font color="green">تمت العملية بنجاح</font>',//'<font color="green">交易成功结束</font>',
	'trade_closed'			=> '<font color="gray">تم غلق التجارة (غير مكتمل)</font>',//'<font color="gray">交易中途关闭（未完成）</font>',
	'trade_waitselleragree'		=> 'إنتظر لموافقة البائع على إعادة الاموال',//'等待卖家同意退款',
	'trade_sellerrefusebuyer'	=> 'البائع رفض شروط المشتري, إنتظر لمشتري آخر',//'卖家拒绝买家条件，等待买家修改条件',
	'trade_waitbuyerreturn'		=> 'البائع وافق على إعادة الاموال, الإنتظار لرجوع المنتج إلى البائع',//'卖家同意退款，等待买家退货',
	'trade_waitsellerconfirmgoods'	=> 'الإنتظار لاستقبال البائع منتجاته',//'等待卖家收货',
	'trade_waitalipayrefund'	=> 'تم اتفاق الطرفان, إنتظر لاعادة الاموال من نظام الدفع ',//'双方已经一致，等待支付宝退款',
	'trade_alipaycheck'		=> 'إنتظر لاعادة الاموال من النظام',//'支付宝处理中',
	'trade_overedrefund'		=> 'إعادة الاموال اكتمل',//'结束的退款',
	'trade_refundsuccess'		=> '<font color="green">تمت العملية بنجاح</font>',//'<font color="green">退款成功</font>',
	'trade_refundclosed'		=> '<font color="green">إعادة الأموال مغلق</font>',//'<font color="green">退款关闭</font>',

	'trade_offline_1'		=> 'بدأ المعاملات',//'交易单生效',
	'trade_offline_4'		=> 'لقد دفعت وانتظر التسليم.',//'我已付款，等待卖家发货',
	'trade_offline_5'		=> 'تم الشحن.',//'我已发货',
	'trade_offline_7'		=> 'لقد تلقيت المنتجات ، والمعاملة بنجاح',//'我收到货，交易成功结束',
	'trade_offline_8'		=> 'إلغاء هذه الصفقة.',//'取消此次交易',
	'trade_offline_10'		=> 'أريد أن أعود، في انتظار البائع يوافق على استرداد الأموال.',//'我要退货，等待卖家同意退款',
	'trade_offline_11'		=> 'يرفض البائع الاسترداد.',//'卖家拒绝退款',
	'trade_offline_12'		=> 'وافق البائع على الاسترداد.',//'卖家同意退款',
	'trade_offline_13'		=> 'لقد عدت بانتظاربائع المنتجات الواردة.',//'我已退货，等待卖家收货',
	'trade_offline_17'		=> 'البائع تلقى المنتجات التي ارجعت',//'卖家收到退货，已退款',

	'trade_message_4'		=> 'أدخل طريقة الدفع ومعلومات الحساب',//'可输入付款方式、银行账号等信息',
	'trade_message_5'		=> 'أدخل شركة الشحن والفواتير وغيرها من المعلومات',//'可输入发货公司、发货单号等信息',
	'trade_message_13'		=> 'أدخل شركة الشحن والفواتير وغيرها من المعلومات',//'可输入发货公司、发货单号等信息',

	'credit_payment'		=> 'إعادة شحن/تعبئة النقاط',//'积分充值',
	'credit_forum_payment'		=> 'إعادة شحن/تعبئة نقاط المنتدى',//'论坛积分充值',
	'credit_forum_royalty'		=> 'الضريبة',//'交易手续费',
	
	'credit_total'			=> 'مجموع النقاط',
	
	'invite_payment'		=> 'شراء رمز الدعوة',
	'invite_forum_payment'		=> 'شراء رمز الدعوة',
	'invite_forum_payment_unit'	=> '$',
	'invite_forum_royalty'		=> 'رسوم المعاملات',

	'formulaperm_regdate'		=> 'تاريخ التسجيل',//'注册时间',
	'formulaperm_regday'		=> 'أيام بعد التسجيل',//'注册天数',
	'formulaperm_regip'		=> 'التسجيل IP',//'注册IP',
	'formulaperm_lastip'		=> 'آخر  IP ',//'最后登录IP',
	'formulaperm_buyercredit'	=> 'تقييم كمشتري',//'买家信用评价',
	'formulaperm_sellercredit'	=> 'تقييم كبائع',//'卖家信用评价',
	'formulaperm_digestposts'	=> 'المميز',//'精华帖数',
	'formulaperm_posts'		=> 'المشاركات',//'发帖数',
	'formulaperm_threads'		=> 'المواضيع',//'主题数',
	'formulaperm_oltime'		=> 'وقت التواجد (ساعة)',//'在线时间(小时)',
	'formulaperm_pageviews'		=> 'مشاهدات الصفحة',//'页面浏览量',
	'formulaperm_and'		=> ' و ',//'并且',
	'formulaperm_or'		=> ' أو ',//'或者',
	'formulaperm_extcredits'	=> ' نقاط مخصصة ',//'自定义积分',

	'login_normal_mode'		=> 'متواجد',//'在线',
	'login_switch_invisible_mode'	=> 'التحويل للوضع المخفي',//'切换在线状态',
	'login_switch_normal_mode'	=> 'التحويل للوضع المتواجد',//'我要上线',
	'login_invisible_mode'		=> 'مخفي',//'隐身',

	'eccredit_explain'		=> 'السبب',//'解释',

	'google_site_0'			=> 'في الانترنت',//'网页搜索',
	'google_site_1'			=> 'في المنتدى',//'站内搜索',
	'google_sa'			=> 'بحث',//'搜索',

	'modcp_logs_action_home'	=> 'لوحة التحكم ',//'面板首页',
	'modcp_logs_action_moderate'	=> 'إشراف',//'审核',
	'modcp_logs_action_member'	=> 'تعديل عضو',//'用户管理',
	'modcp_logs_action_forumaccess'	=> 'صلاحيات العضو',//'用户权限',
	'modcp_logs_action_thread'	=> 'إدارة المواضيع',//'主题管理',
	'modcp_logs_action_forum'	=> 'ادار الأقسام',//'版块管理',
	'modcp_logs_action_announcement'	=> 'الإعلانات',//'公告',
	'modcp_logs_action_log'		=> 'إدارة المدونات',//'管理日志',
	'modcp_logs_action_stat'	=> 'إحصائيات المشرفين',//'管理统计',

	'modcp_logs_action_login'	=> 'تسجيل الدخول',//'登录',

	'uch_selectalbum'		=> 'إختيار الألبوم',//'请选择相册',
	'uch_noalbum'			=> 'أنت لا تملك أي ألبوم, ',//'你还没有相册，',
	'click_here'			=> 'إضغط هنا',//'点击这里',
	'uch_createalbum'		=> ' إنشاء ألبوم جديد!',//'创建自己的相册吧！',

	'pm_from'		=> ' من ',//'发件人',
	'pm_to'			=> ' إلى ',//'收件人',
	'pm_date'		=> ' التاريخ ',//'日期',

	'share_message'		=> 'السلام عليكم! لقد رأيت هذا الموضوع في  {$_G[setting][bbname]}, أعتقد انه مفيد, لذلك انصحك به.\\n\\nTitle: $thread[subject]\\nالوصلة: [url={$threadurl}]{$threadurl}[/url]\\n\\n اتمنى أن يعجبك .',

	'week_0'		=> 'الأحد',//'星期日',
	'week_1'		=> 'الإثنين',//'星期一',
	'week_2'		=> 'الثلاثاء',//'星期二',
	'week_3'		=> 'الأربعاء',//'星期三',
	'week_4'		=> 'الخميس',//'星期四',
	'week_5'		=> 'الجمعة',//'星期五',
	'week_6'		=> 'السبت',//'星期六',

	'y_m_d'		=> 'Y-m-d',//'Y年m月d日',

	'notice_actor'		=> ', و لذا في الإجمالي: $actorcount شخص',//'等 $actorcount 人',

	'perms_allowvisit'		=> 'الوصول للأقسام',//'访问论坛',
	'perms_readaccess'		=> 'صلاحيات القراءة',//'阅读权限',
	'perms_allowviewpro'		=> 'عرض معلومات الأعضاء',//'查看用户资料',
	'perms_allowinvisible'		=> 'وضع التخفي',//'隐身',
	'perms_allowsearch'		=> 'إستخدام البحث',//'使用搜索',
	'perms_allownickname'		=> 'السماح باستخدام إسم ظاهري',//'使用昵称',
	'perms_allowcstatus'		=> 'حالات مخصصة',//'自定义头衔',
	'perms_allowpost'		=> 'إضافة موضوع',//'发新话题',
	'perms_allowreply'		=> 'إضافة رد',//'发表回复',
	'perms_allowpostpoll'		=> 'إضافة إستطلاع',//'发起投票',
	'perms_allowvote'		=> 'تصويت',//'参与投票',
	'perms_allowpostreward'		=> 'إضافة طلب',//'发表悬赏',
	'perms_allowpostactivity'	=> 'إضافة فعالية',//'发表活动',
	'perms_allowpostdebate'		=> 'إضافة تحدي',//'发表辩论',
	'perms_allowposttrade'		=> 'إضافة منتج',//'发表交易',
	'perms_maxsigsize'		=> 'الطول الأقصى للتوقيع',//'最大签名长度',
	'perms_allowsigbbcode'		=> 'إستخدام BBCode في التوقيع',//'签名中使用 Discuz! 代码',
	'perms_allowsigimgcode'		=> 'إستخدام [img]  في التوقيع',//'签名中使用 [img] 代码',
	'perms_maxbiosize'		=> 'أقصى طول للنبذة الشخصية',//'自我介绍最大长度',
	'perms_allowrecommend'		=> 'إضافة موضوع مستحسن',//'主题评价影响值',
	'perms_allowbiobbcode'		=> 'إستخدام BBCode في النبذة',//'自我介绍中使用 Discuz! 代码',
	'perms_allowbioimgcode'		=> 'إستخدام [img] في النبذة',//'自我介绍中使用 [img] 代码',
	'perms_allowgetattach'		=> 'تحميل المرفقات',//'下载/查看附件',
	'perms_allowgetimage'		=> 'عرض الصورة',
	'perms_allowpostattach'		=> 'رفع مرفقات',//'发布附件',
	'perms_allowpostimage'		=> 'رفع صورة',
	'perms_allowsetattachperm'	=> 'السماح لوضع صلاحيات المرفقات',//'允许设置附件权限',
	'perms_maxspacesize'		=> 'أقصى مساحة له',//'空间大小',
	'perms_maxattachsize'		=> 'أقصى مساحة للمرفقات',//'单个最大附件尺寸',
	'perms_maxsizeperday'		=> 'أقصى مساحة للمرفقات في اليوم الواحد',//'每天最大附件总尺寸',
	'perms_maxattachnum'		=> 'أقصى عدد للمرفقات في اليوم الواحد',//'每天最大附件数量',
//vot	'perms_allowbioimgcode'		=> 'إستخدام [img] في النبذة',//'自我介绍中使用 [img] 代码',
	'perms_attachextensions'	=> 'نوع المرفقات',//'附件类型',
	'perms_allowstickthread'	=> 'تثبيت موضوع',//'主题置顶',
	'perms_allowdigestthread'	=> 'مواضيع مميزة',//'主题精华',
	'perms_allowstickthread_value'	=> 'تثبيت',//'置顶',
	'perms_allowdigestthread_value'	=> 'مواضيع مميزة',//'精华',
	'perms_allowbumpthread'		=> 'إعلاء المواضيع',//'提升主题',
	'perms_allowhighlightthread'	=> 'تنسيق العنوان',//'主题高亮',
	'perms_allowrecommendthread'	=> 'إضافة كمستحسن',//'主题推荐',
	'perms_allowstampthread'	=> 'إضافة ختم',//'主题鉴定',
	'perms_allowclosethread'	=> 'إغلاق',//'主题关闭',
	'perms_allowmovethread'		=> 'نقل موضوع',//'主题移动',
	'perms_allowedittypethread'	=> 'تعديل نوع موضوع',//'编辑主题分类',
	'perms_allowcopythread'		=> 'نسخ',//'主题复制',
	'perms_allowmergethread'	=> 'دمج',//'主题合并',
	'perms_allowsplitthread'	=> 'تقسيم',//'主题分割',
	'perms_allowrepairthread'	=> 'إصلاح',//'主题修复',
	'perms_allowrefund'		=> 'إعادة النقاط',//'强制退款',
	'perms_alloweditpoll'		=> 'تعديل إستطلاع',//'编辑投票',
	'perms_allowremovereward'	=> 'حذف طلب',//'移除悬赏',
	'perms_alloweditactivity'	=> 'تعديل فعالية',//'管理活动',
	'perms_allowedittrade'		=> 'تعديل منتج',//'管理商品',
	'perms_alloweditpost'		=> 'تعديل مشاركة',//'编辑帖子',
	'perms_allowwarnpost'		=> 'تحذير مشاركات',//'警告帖子',
	'perms_allowbanpost'		=> 'حظر مشاركات',//'屏蔽帖子',
	'perms_allowdelpost'		=> 'حذف مشاركات',//'删除帖子',
	'perms_allowviewreport'		=> 'عرض تبيلغ',//'查看用户报告',
	'perms_allowmodpost'		=> 'إدارة المشاركات',//'审核帖子',
	'perms_allowmoduser'		=> 'إدارة الأعضاء',//'审核用户',
	'perms_allowbanuser'		=> 'حظر عضو',//'禁止用户',
	'perms_allowbanip'		=> 'حظر  IP ',//'禁止 IP',
	'perms_allowedituser'		=> 'تعديل عضو',//'编辑用户',
	'perms_allowmassprune'		=> 'حذف موضوع/مشاركة',//'批量删帖',
	'perms_allowpostannounce'	=> 'إضافة إعلان',//'发布公告',
	'perms_disablepostctrl'		=> 'غير مقيد',//'发帖不受限制',
	'perms_allowviewip'		=> 'مشاهدة  IP ',//'允许查看 IP',
	'perms_viewperm'		=> 'مشاهدة قسم',//'浏览版块',
	'perms_postperm'		=> 'إضافة موضوع',//'发新话题',
	'perms_replyperm'		=> 'إضافة رد',//'发表回复',
	'perms_getattachperm'		=> 'تحميل مرفقات',//'下载/查看附件',
	'perms_postattachperm'		=> 'رفع مرفقات',//'上传附件',
	'perms_postimageperm'		=> 'رفع صور',//'上传图片',
	'perms_allowblog'		=> 'نشر مدونات',//'发表日志',
	'perms_allowdoing'		=> 'إضافة أفعال',//'发表记录',
	'perms_allowupload'		=> 'رفع صورة',//'上传图片',
	'perms_allowshare'		=> 'منشورات',//'发布分享',
	'perms_allowpoke'		=> 'إرسال تحية',//'允许打招呼',
	'perms_allowfriend'		=> 'إضافة صديق',//'允许加好友',
	'perms_allowclick'		=> 'تقييم',//'允许表态',
	'perms_allowmyop'		=> 'إستخدام تطبيقات',//'允许使用应用',
	'perms_allowcomment'		=> 'نشر تعليق',//'发表留言/评论',
	'perms_allowstatdata'		=> 'عرض تقارير بيانات الإحصائية',//'查看统计数据报表',
	'perms_allowstat'		=> 'مشاهدة الإحصائيات',//'允许查看趋势统计',
	'perms_allowpostarticle'	=> 'نشر مقالات',
	'perms_raterange'		=> 'السماح بالتقييمات',
	'perms_allowcommentpost'	=> 'السماح بالتعليق على المشاركات',
	'perms_allowat'			=> 'السماح @ شخص',
	'perms_allowreplycredit'	=> 'السماح بمكافأة الرد',
	'perms_allowposttag'		=> 'السماح بالكلمات الدلالية',
	'perms_allowcreatecollection'	=> 'السماح بإنشاء ألبوم',
	'perms_allowsendpm'		=> 'السماح بإرسال رسالة',
	'perms_maximagesize'		=> 'الحد الأقصى من حجم الصورة الواحدة',
	'perms_allowmediacode'		=> 'السماح باستخدام رمز الوسائط المتعددة',

	'join_topic'		=> 'إنضمام في موضوع',//'参与话题',
	'join_poll'		=> 'تصويت في إستطلاع',//'参与投票',
	'buy_trade'		=> 'بيع منتج',//'购买商品',
	'join_reward'		=> 'الإجابة على طلب',//'参与悬赏',
	'join_activity'		=> 'الإشتراك في فعالية',//'参与活动',
	'join_debate'		=> 'الإشتراك في التحدي',//'参与辩论',
	'at_invite'		=> '@ دعوة أصدقائي',

	'lower'			=> 'أقل من ',//'低于',
	'higher'		=> 'أكثر من',//'高于',
	'report_msg_your'	=> ' الخاص بك ',
	'report_noreward'	=> ' لا يوجد حافز ',
	'activity_viewimg'	=> 'انقر لعرض ',

	'crime_postreason'	=> '{reason} &nbsp; <a href="forum.php?mod=redirect&goto=findpost&pid={pid}&ptid={tid}" target="_blank" class="xi2">التفاصيل</a>',
	'crime_reason'		=> '{reason}',

	'connectguest_message_search'	=> array('لم يتم تسجيل الدخول', 'تم تسجيل الدخول'),
	'connectguest_message_replace'	=> array('ليس الان <a href="member.php?mod=connect">تحسين الحساب الحالي</a> or <a href="member.php?mod=connect&ac=bind">اتصال بعضوية موجودة</a>', 'انت تحتاج الى  <a href="member.php?mod=connect">تحسين معلومات الحساب الحالي</a> or <a href="member.php?mod=connect&ac=bind">اتصال بعضويةموجودة</a> '),//array('尚未 <a href="member.php?mod=connect">完善帐号信息</a> 或 <a href="member.php?mod=connect&ac=bind">绑定已有帐号</a> ', '您需要先 <a href="member.php?mod=connect">完善帐号信息</a> 或 <a href="member.php?mod=connect&ac=bind">绑定已有帐号</a> '),
	'connectguest_message_mobile_search'	=> array('لم يتم تسجيل الدخول', 'تم تسجيل الدخول'),
	'connectguest_message_mobile_replace'	=> 'تزويد معلومات حساب الحالي او الاتصال بعضوية موجودة, ',//'在电脑版完善资料或绑定已有帐号，',

	'avatar'		=> 'الصورة الرمزية',
	'signature'		=> 'التوقيع',
	'custom_title'		=> 'الحالة المخصصة',

	'forum_guide'		=> 'الاحصائيات',

	'patch_site_have'	=> 'هناك  ',
	'patch_is_fixed'	=> ' ثغرة (ات) تم إصلاحها',
	'patch_need_fix'	=> 'ثغرة (ات) لم يتم إصلاحها',
	'patch_fixed_status'	=> 'تم الاصلاح',
	'patch_unfix_status'	=> 'لم يتم الاصلاح',
	'patch_fix_failed_status'	=> 'فشل الاصلاح',
	'patch_fix_right_now'	=> 'إصلاح الآن',
	'patch_view_fix_detail'	=> 'التفاصيل',
	'patch_name'		=> 'الاسم',
	'patch_dateline'	=> 'التاريخ',
	'patch_status'		=> 'الحالة',
	'patch_close'		=> 'إغلاق',

	'plugin_title'		=> 'تطبيق تحديث التذكير',
	'plugin_memo'		=> 'أنت تملك <span class="xi1">{number}</span> تطبيق يمكن أن يتم تحديثه',
	'plugin_link'		=> 'تحديث الآن',

	'seccode'		=> 'Verification code',//'验证码',
	'seccode_update'	=> 'Renew',//'换一个',
	'seccode_player'	=> '<span style="padding:2px"><img border="0" style="vertical-align:middle" src="static/image/common/seccodeplayer.gif" /> <a href="javascript:;" onclick="window.document.seccodeplayer_{idhash}.SetVariable(\'isPlay\', 1)">Play the verification code</a></span>',//'<span style="padding:2px"><img border="0" style="vertical-align:middle" src="static/image/common/seccodeplayer.gif" /> <a href="javascript:;" onclick="window.document.seccodeplayer_{idhash}.SetVariable(\'isPlay\', 1)">播放验证码</a></span>',
	'secqaa'		=> 'Secure Answer',//'验证问答',

	'mobileoem_creditrule'	=> 'Mobile Forum Registration',//'掌上论坛签到',

// Added by Valery Votintsev, codersclub.org
	'poll_reply_no_perms'	=> 'لا يمكنك الرد على التصويت',//'您不能对自己的回帖进行投票',
	'poll_replyed_already'	=> 'لقد قمت بالرد مسبقاً',//'您已经对此回帖投过票了',
	'poll_voted_ok'		=> 'لقد قمت بالتصويت بنجاح',//'投票成功',
);

