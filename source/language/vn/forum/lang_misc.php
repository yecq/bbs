<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *		Translate by DCV team - http://www.discuz.vn
 *      $Id: lang_misc.php 20740 2011-03-02 09:55:01Z liulanbo $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(
	'discuz_lang' => 'misc',
	'contact' => 'Liên hệ: ',
	'anonymous' => 'Vô danh',
	'anonymoususer' => 'Vô danh',
	'guestuser' => 'Truy cập',
	'has_expired' => 'Thông tin này đã hết hạn',
	'click_view' => 'Nhấn vào đây để xem',
	'never_expired' => 'Không bao giờ hết hạn',
	'sort_update' => 'Cập nhật',
	'sort_upload' => 'Tải lên',
	'view_noperm' => 'Ẩn nội dung',
	'post_hidden' => '**** Nội dung bị tác giả đặt ẩn ****',
	'post_banned' => '**** Tác giả bị cấm hoặc bị xóa, nội dung tự động bị ẩn ****',
	'post_single_banned' => '**** Nội dung bị cấm xem ****',
	'message_ishidden_hiddenreplies' => 'Bài này chỉ tác giả mới được xem',
	'post_reply_quote' => '{author} gửi lúc {time}',
	'post_edit' => "[i=s] Bài được {editor} sửa lúc  {edittime} [/i]\n\n",
	'post_edit_regexp' => '/^\[i=s\] Bài được .*? sửa lúc .*?  \[\/i\]\n\n/s',
	'post_edithtml' => '[i=s] Bài được {editor} sửa lúc {edittime} [/i]<br /><br />',
	'post_edithtml_regexp' => '/^\[i=s\] Bài được .*? sửa lúc .*?  \[\/i\]&lt;br \/&gt;&lt;br \/&gt;/s',
	'post_editnobbcode' => '[ Bài được {editor} sửa lúc {edittime} ]\n\n',
	'post_editnobbcode_regexp' => '/^\[ Bài được  .*?  sửa lúc .*?  \]\n\n/s',
	'post_reply' => 'Trả lời',
	'post_thread' => 'Bài mới',

	'price' => 'Giá',
	'pay_view' => 'Danh sách mua',
	'attachment_buy' => 'Mua',

	'post_trade_yuan' => 'Đồng',
	'post_trade_seller' => 'Người mua',
	'post_trade_name' => 'Sản phẩm',
	'post_trade_price' => 'Giá',
	'post_trade_quality' => 'Số lượng',
	'post_trade_locus' => 'Sản xuất',
	'post_trade_transport_type' => 'Vận chuyển',
	'post_trade_transport_seller' => 'Người bán',
	'post_trade_transport_buyer' => 'Người mua',
	'post_trade_transport_mail' => 'Thường',
	'post_trade_transport_express' => 'Chuyển nhanh',
	'post_trade_transport_virtual' => 'Vận tải ảo',
	'post_trade_transport_physical' => 'Người mua tự trả phí sau nhận hàng',
//vot	'post_trade_locus' => 'Sản xuất',
	'post_trade_description' => 'Mô tả',
	'post_trade_pm_subject' => '[giá]',
	'post_trade_pm_buynum' => 'Số lượng',
	'post_trade_pm_wishprice' => 'Tôi muốn giá là',
	'post_trade_pm_reason' => 'Lý do',
	'postappend_content' => 'Bổ xung',
	'payment_unit' => 'VNĐ',

	'attach' => 'Đính kèm',
	'attach_pay' => 'Bán đính kèm',
	'attach_credits_policy' => 'Quy định điểm',
	'attach_img' => 'Đính kèm hình ảnh',
	'attach_readperm' => 'Quyền đọc',
	'attach_img_zoom' => 'Bấm hình để xem hình gốc \\nCTRL+ lăn chuột giữa để phóng to hoặc thu nhỏ',
	'attach_img_thumb' => 'Bấm vào hình để xem hình gốc',
	'attach_downloads' => 'Số lần tải',

	'post_trade_transport' => 'Vận chuyển',
//vot	'post_trade_transport_mail' => 'Thường',
	'post_trade_quality' => 'Số lượng',
	'post_trade_quality_new' => 'Mới',
	'post_trade_quality_secondhand' => 'Hàng cũ',

	'trade_unstart' => '<font color="gray">Giao dịch chưa bắt đầu</font>',
	'trade_waitbuyerpay' => 'Đợi chuyển tiền',
	'trade_waitsellerconfirm' => 'Giao dịch đã thành công, chờ người bán xác nhận',
	'trade_sysconfirmpay' => 'Người mua đang xác nhận, tạm thời chưa gửi hàng',
	'trade_waitsellersend' => 'Người mua đã chuyển tiền, đợi người bán gửi hàng',
	'trade_waitbuyerconfirm' => 'Người bán đã chuyển hàng, người mua đang xác nhận',
	'trade_syspayseller' => 'Người mua đã nhận được hàng, chờ người bán nhận tiền',
	'trade_finished' => '<font color="green">Giao dịch kết thúc thành công</font>',
	'trade_closed' => '<font color="gray">Giao dịch đóng(chưa hoàn thành)</font>',
	'trade_waitselleragree'  => 'Chờ cho người bán hoàn toàn đồng ý',
	'trade_sellerrefusebuyer' => 'Người bán từ chối yêu cầu người mua, đang chờ người mua thay đổi yêu cầu',
	'trade_waitbuyerreturn' => 'Bên bán đồng ý hoàn lại tiền, chờ đợi cho người mua trả lại',
	'trade_waitsellerconfirmgoods' => 'Chờ đợi để nhận hàng hoá bán',
	'trade_waitalipayrefund' => 'Hai bên đã đồng ý, chờ Alipay trả tiền',
	'trade_alipaycheck' => 'Alipay đang sử lý',
	'trade_overedrefund' => 'Kết thúc hoàn trả',
	'trade_refundsuccess' => '<font color="green">Trả lại thành công</font>',
	'trade_refundclosed' => '<font color="green">Đóng</font>',

	'trade_offline_1' => 'Giao dịch ngày',
	'trade_offline_4' => 'Tôi đã trả tiền, đang chờ người bán chuyển hàng',
	'trade_offline_5' => 'Tôi đã vận chuyển hàng hóa',
	'trade_offline_7' => 'Tôi nhận được hàng hoá, ký kết giao dịch thành công',
	'trade_offline_8' => 'Hủy bỏ giao dịch',
	'trade_offline_10' => 'Tôi muốn trả hàng lại, chờ đợi người bán đồng ý hoàn trả',
	'trade_offline_11' => 'Người bán từ chối hoàn trả',
	'trade_offline_12' => 'Bên bán đồng ý hoàn trả',
	'trade_offline_13' => 'Tôi đã trả lại, chờ đợi người bán nhận được',
	'trade_offline_17' => 'Người bán nhận được hàng, và đã hoàn lại tiền',

	'trade_message_4' => 'Nhập phương thức thanh toán, số tài khoản ngân hàng và các thông tin khác',
	'trade_message_5' => 'Nhập công ty vận chuyển, hóa đơn, và các thông tin khác',
	'trade_message_13' => 'Nhập công ty vận chuyển, hóa đơn, và các thông tin khác',

	'credit_payment' => 'Thêm điểm',
	'credit_forum_payment' => 'Thêm điểm diễn đàn',
	'credit_forum_royalty' => 'Thủ tục giao dịch',

	'credit_total' => 'Tổng điểm',

	'invite_payment' => 'Mua mã lời mời',
	'invite_forum_payment' => 'Mua mã lời mời',
	'invite_forum_payment_unit' => 'VND',
	'invite_forum_royalty' => 'Phí giao dịch',

	'formulaperm_regdate' => 'Giờ đăng ký',
	'formulaperm_regday' => 'Ngày đăng ký',
	'formulaperm_regip' => 'IP đăng ký',
	'formulaperm_lastip' => 'IP đăng nhập',
	'formulaperm_buyercredit' => 'Người mua bình chọn',
	'formulaperm_sellercredit' => 'Người bán bình chọn',
	'formulaperm_digestposts' => 'Số bài tinh hoa',
	'formulaperm_posts' => 'Số bài gửi',
	'formulaperm_threads' => 'Số chủ đề',
	'formulaperm_oltime' => 'Online (giờ)',
	'formulaperm_pageviews' => 'Lượt xem',
	'formulaperm_and' => 'và',
	'formulaperm_or' => 'hoặc',
	'formulaperm_extcredits' => 'Thiết đặt điểm',

	'login_normal_mode'		=> 'Online',//'在线',
	'login_switch_invisible_mode' => 'Đổi trạng thái',
	'login_switch_normal_mode' => 'Tôi muốn online',
	'login_invisible_mode' => 'Ẩn danh',

	'eccredit_explain' => 'Giải thích',

	'google_site_0' => 'Tìm kiếm trên web',
	'google_site_1' => 'Tìm kiếm diễn đàn',
	'google_sa' => 'Tìm',

	'modcp_logs_action_home' => 'Tin nội bộ',
	'modcp_logs_action_moderate' => 'Xét duyệt',
	'modcp_logs_action_member' => 'Quản lý người dùng',
	'modcp_logs_action_forumaccess' => 'Quyền thành viên',
	'modcp_logs_action_thread' => 'Quản lý chủ đề',
	'modcp_logs_action_forum' => 'Quản lý forum',
	'modcp_logs_action_announcement' => 'Quản lý thông báo',
	'modcp_logs_action_log' => 'Quản lý blog',
	'modcp_logs_action_stat' => 'Quản lý thống kê',

	'modcp_logs_action_login' => 'Đăng nhập',

	'uch_selectalbum' => 'Chọn album',
	'uch_noalbum' => 'Cạn chưa có album nào,',
	'click_here' => ' Bấm vào đây',
	'uch_createalbum' => 'Tạo album mới !',

	'pm_from' => 'Người gửi',
	'pm_to' => 'Người nhận',
	'pm_date' => 'Thời gian',

	'share_message' => 'Bạn thân mến! tớ thấy ở {$_G[setting][bbname]} có bài viết này, rất có giá trị nên gửi cho bạn xem. \\n\\n$thread[subject]\\n địa chỉ [url={$threadurl}]{$threadurl}[/url]\\n\\n hy vọng bạn sẽ thích.',

	'week_0' => 'Chủ nhật',
	'week_1' => 'Thứ 2',
	'week_2' => 'Thứ 3',
	'week_3' => 'Thứ 4',
	'week_4' => 'Thứ 5',
	'week_5' => 'Thứ 6',
	'week_6' => 'Thứ 7',

	'y_m_d'		=> 'Y-m-d',//'Y年m月d日',

	'notice_actor' => 'Đợi $actorcount người',

	'perms_allowvisit' => 'Xem diễn đàn',
	'perms_readaccess' => 'Quyền đọc',
	'perms_allowviewpro' => 'Thông tin cá nhân',
	'perms_allowinvisible' => 'Ẩn danh',
	'perms_allowsearch' => 'Tìm kiếm',
	'perms_allownickname' => 'Dùng biệt danh',
	'perms_allowcstatus' => 'Đặt trạng thái',
	'perms_allowpost' => 'Gửi bài mới',
	'perms_allowreply' => 'Gửi trả lời',
	'perms_allowpostpoll' => 'Gửi bầu chọn',
	'perms_allowvote' => 'Tham gia bầu chọn',
	'perms_allowpostreward' => 'Gửi khen thưởng',
	'perms_allowpostactivity' => 'Đăng hoạt động',
	'perms_allowpostdebate' => 'Đăng tranh luận',
	'perms_allowposttrade' => 'Đăng giao dịch',
	'perms_maxsigsize' => 'Độ dài tối đa chữ ký',
	'perms_allowsigbbcode' => 'Sử dụng mã Discuz! trong chữ ký',
	'perms_allowsigimgcode' => 'Sử dụng mã [img]  trong chữ ký',
	'perms_maxbiosize' => 'Độ dài tự giới thiệu',
	'perms_allowrecommend' => 'Cho phép giới thiệu',
	'perms_allowbiobbcode' => 'Sử dụng mã Discuz! trong phần tự giới thiệu',
	'perms_allowbioimgcode' => 'Sử dụng mã [img] trong phần tự giới thiệu',
	'perms_allowgetattach' => 'Tải/xem đính kèm',
	'perms_allowgetimage' => 'Xem ảnh',
	'perms_allowpostattach' => 'Tải lên đính kèm',
	'perms_allowpostimage' => 'Tải lên',
	'perms_allowsetattachperm' => 'Cho phép thay đổi quyền hạn tập tin',
	'perms_maxspacesize' => 'Dung lượng blog',
	'perms_maxattachsize' => 'Dung lượng tối đa 1 file mỗi ngày',
	'perms_maxsizeperday' => 'Dung lượng tối đa một tập tin',
	'perms_maxattachnum' => 'Số lượng tập tin tối đa mỗi ngày',
//vot	'perms_allowbioimgcode' => 'Sử dụng mã [img] trong phần tự giới thiệu',
	'perms_attachextensions' => 'Loại tập tin',
	'perms_allowstickthread' => 'Đính chủ đề',
	'perms_allowdigestthread' => 'Chủ đề tinh hoa',
	'perms_allowstickthread_value' => 'Đính cấp',
	'perms_allowdigestthread_value' => 'Tinh hoa',
	'perms_allowbumpthread' => 'Đặt chủ đề lên cao',
	'perms_allowhighlightthread' => 'Màu chủ đề',
	'perms_allowrecommendthread' => 'Đề cử',
	'perms_allowstampthread' => 'Xác định chủ đề',
	'perms_allowclosethread' => 'Đóng chủ đề',
	'perms_allowmovethread' => 'Di chuyển chủ đề',
	'perms_allowedittypethread' => 'Sửa phân loại',
	'perms_allowcopythread' => 'Chép chủ đề',
	'perms_allowmergethread' => 'Nhập chủ đề',
	'perms_allowsplitthread' => 'Chia chủ đề',
	'perms_allowrepairthread' => 'Sửa chủ đề',
	'perms_allowrefund' => 'Bắt buộc hoàn trả',
	'perms_alloweditpoll' => 'Sửa bỏ phiếu',
	'perms_allowremovereward' => 'Hủy bỏ phần thưởng',
	'perms_alloweditactivity' => 'Quản lý hoạt động',
	'perms_allowedittrade' => 'Quản lý hàng',
	'perms_alloweditpost' => 'Sửa bài viết',
	'perms_allowwarnpost' => 'Cảnh cáo',
	'perms_allowbanpost' => 'Ẩn bài viết',
	'perms_allowdelpost' => 'Xóa bài viết',
	'perms_allowviewreport' => 'Xem báo cáo',
	'perms_allowmodpost' => 'Duyệt bài viết',
	'perms_allowmoduser' => 'Duyệt user',
	'perms_allowbanuser' => 'Cấm thành viên',
	'perms_allowbanip' => 'Cấm IP',
	'perms_allowedituser' => 'Sửa thành viên',
	'perms_allowmassprune' => 'Xóa hàng loạt',
	'perms_allowpostannounce' => 'Đăng thông báo',
	'perms_disablepostctrl' => 'Gửi bài không hạn chế',
	'perms_allowviewip' => 'Được xem IP',
	'perms_viewperm' => 'Xen diễn đàn',
	'perms_postperm' => 'Gửi bài mới',
	'perms_replyperm' => 'Gửi trả lời',
	'perms_getattachperm' => 'Tải/Xem đính kèm',
	'perms_postattachperm' => 'Tải lên đính kèm',
	'perms_postimageperm' => 'Tải ảnh lên',
	'perms_allowblog' => 'Viết Blog',
	'perms_allowdoing' => 'Viết tâm trạng',
	'perms_allowupload' => 'Được tải lên',
	'perms_allowshare' => 'Được chia sẻ',
	'perms_allowpoke' => 'Được chào hỏi',
	'perms_allowfriend' => 'Được kết bạn',
	'perms_allowclick' => 'Được động thái',
	'perms_allowmyop' => 'Được dùng ứng dụng',
	'perms_allowcomment' => 'Lời nhắn/Bình luận',
	'perms_allowstatdata' => 'Xem thống kê dữ liệu báo cáo',
	'perms_allowstat' => 'Được xem thống kê',
	'perms_allowpostarticle' => 'Được đăng bài viết',
	'perms_raterange' => 'Được tham gia xếp hạng',
	'perms_allowcommentpost' => 'Cho phép tham gia đánh giá',
	'perms_allowat' => 'Cho phép @người',
	'perms_allowreplycredit' => 'Cho phép thiết lập trả lời phần thưởng',
	'perms_allowposttag' => 'Cho phép thiết lập tag',
	'perms_allowcreatecollection' => 'Cho phép tạo trình sửa Album',
	'perms_allowsendpm' => 'Cho phép gửi tin',
	'perms_maximagesize' => 'Kích thước tối đa của hình ảnh',
	'perms_allowmediacode' => 'Cho phép sử dụng mã media',

	'join_topic' => 'Tham gia chủ đề',
	'join_poll' => 'Tham gia bình chọn',
	'buy_trade' => 'Mua hàng',
	'join_reward' => 'Tham gia vào thưởng',
	'join_activity' => 'Tham gia hoạt động',
	'join_debate' => 'Tham gia tranh luận',
	'at_invite' => '@ Bạn bè của tôi',

	'lower' => 'Thấp nhất',
	'higher' => 'Cao nhất',
	'report_msg_your' => 'Của bạn ',
	'report_noreward' => 'Không khen thưởng',
	'activity_viewimg' => 'Nhấn vào để xem',

	'crime_postreason' => '{reason} &nbsp; <a href="forum.php?mod=redirect&goto=findpost&pid={pid}&ptid={tid}" target="_blank" class="xi2">Chi tiết </a>',
	'crime_reason'		=> '{reason}',

	'connectguest_message_search' => array('Chưa đăng nhập', 'đăng nhập'),
	'connectguest_message_replace' => array('Chưa <a href="member.php?mod=connect" class="xi2">điền thông tin cá nhân hoàn chỉnh </a> hoặc <a href="member.php?mod=connect&ac=bind" class="xi2">tài khoản hiện có đã bị đóng</a> ', 'Trước tiên <a href="member.php?mod=connect" class="xi2">hãy điền thông tin tài khoản</a> hoặc <a href="member.php?mod=connect&ac=bind" class="xi2"> mở tài khoản hiện có</a> '),
	'connectguest_message_mobile_search' => array('Chưa đăng nhập', 'đăng nhập'),
	'connectguest_message_mobile_replace' => 'Hoàn thành thông tin tài khoảng trên Mobile',

	'avatar'		=> 'Avatar',//'头像',
	'signature' => 'Chữ ký',
	'custom_title' => 'Tiêu đề',

	'forum_guide' => 'Xem',

	'patch_site_have' => 'Trang web của bạn',
	'patch_is_fixed' => 'Lỗ hổng bảo mật, đã được xác định.',
	'patch_need_fix' => 'Xin hãy sửa chữa lỗ hỏng bảo mật.',
	'patch_fixed_status' => 'Đã được sửa',
	'patch_unfix_status' => 'Chưa được sửa',
	'patch_fix_failed_status' => 'Sửa tâm trạng thất bại',
	'patch_fix_right_now' => 'Sửa tâm trạng thành công',
	'patch_view_fix_detail' => 'Chi tiết',
	'patch_name' => 'Tên',
	'patch_dateline' => 'Ngày đăng tậm trạng',
	'patch_status' => 'Hiện tâm trạng',
	'patch_close'		=> 'Close',//'关闭',

	'plugin_title' => 'Áp dụng các lời nhắc nhở cập nhật',
	'plugin_memo' => 'Bạn có <span class="xi1">{number}</span> cập nhật ứng dụng',
	'plugin_link' => 'Cập nhật',

	'seccode'		=> 'Verification code',//'验证码',
	'seccode_update'	=> 'Renew',//'换一个',
	'seccode_player'	=> '<span style="padding:2px"><img border="0" style="vertical-align:middle" src="static/image/common/seccodeplayer.gif" /> <a href="javascript:;" onclick="window.document.seccodeplayer_{idhash}.SetVariable(\'isPlay\', 1)">Play the verification code</a></span>',//'<span style="padding:2px"><img border="0" style="vertical-align:middle" src="static/image/common/seccodeplayer.gif" /> <a href="javascript:;" onclick="window.document.seccodeplayer_{idhash}.SetVariable(\'isPlay\', 1)">播放验证码</a></span>',
	'secqaa'		=> 'Secure Answer',//'验证问答',

	'mobileoem_creditrule'	=> 'Mobile Forum Registration',//'掌上论坛签到',

// Added by Valery Votintsev, codersclub.org
	'poll_reply_no_perms'	=> 'You can not reply the poll',//'您不能对自己的回帖进行投票',
	'poll_replyed_already'	=> 'You have already replied this poll',//'您已经对此回帖投过票了',
	'poll_voted_ok'		=> 'You have voted successfully',//'投票成功',
);

