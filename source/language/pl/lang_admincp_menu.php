<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $ID: lang_admincp_menu.php by Valery Votintsev, codersclub.org
 *      polish language pack by kaaleth ( kaaleth-discuzpl@windowslive.com )
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(


	'header_index'		=> 'Strona główna',//'首页',
	'header_global'		=> 'Ustawienia',//'全局',
	'header_forum'		=> 'Fora',//'论坛',
	'header_user'		=> 'Użytkownicy',//'用户',
	'header_topic'		=> 'Tematy',//'内容',
	'header_extended'	=> 'Rozszerzenia',//'扩展',
	'header_plugin'		=> 'Pluginy',//'插件',
	'header_style'		=> 'Style',//'界面',
	'header_adv'		=> 'Reklamy',//'广告',
	'header_tools'		=> 'Narzędzia',//'工具',
	'header_uc'		=> 'UCenter',//
	'header_welcome'	=> 'Witaj',//'您好',
	'header_logout'		=> 'Wyloguj',//'退出',
	'header_bbs'		=> 'Strona główna forum',//'站点首页',
	'header_portal'		=> 'Portal',//'门户',
	'header_group'		=> 'Grupy',//'群组',
	'header_safe'		=> 'Antyspam',//'防灌水',
	'header_founder'	=> 'Ekipa',//'站长',
	'header_cloudaddons'	=> 'Aplikacje',//'应用中心',


	'menu_home'			=> 'Strona główna',//'管理中心首页',
	'menu_home_clearhistorymenus'	=> 'Wyczyść historię nawigacji',//'清空历史操作',

	'menu_setting_basic'		=> 'Podstawowe',//'站点信息',
	'menu_setting_access'		=> 'Rejestracja',//'注册与访问控制',
	'menu_setting_customnav'	=> 'Nawigacja',//'导航栏',
	'menu_setting_styles'		=> 'Ustawienia stylu',//'界面设置',
	'menu_setting_optimize'		=> 'Optymalizacja',//'优化设置',
	'menu_setting_seo'		=> 'SEO',//'SEO设置',
	'menu_setting_functions'	=> 'Moduły',//'站点功能',
	'menu_setting_domain'		=> 'Domeny',//'域名设置',
	'menu_setting_user'		=> 'Zezwolenia',//'用户权限',
	'menu_setting_credits'		=> 'Kredyty',//'积分设置',
	'menu_setting_mail'		=> 'Emaile',//'邮件设置',
	'menu_setting_sec'		=> 'Antyspam',//'防灌水设置',
	'menu_setting_datetime'		=> 'Data/Czas',//'时间设置',
	'menu_setting_attachments'	=> 'Załączniki',//'上传设置',
	'menu_setting_imgwater'		=> 'Znaki wodne',//'水印设置',
	'menu_setting_uc'		=> 'Ustawienia UCenter',//'UCenter 设置',
	'menu_setting_uchome'		=> 'Ustawienia UHome',//'UCHome 设置',
	'menu_setting_follow'		=> 'Follows',//'广播设置',
	'menu_setting_home'		=> 'Przestrzenie',//'空间设置',
	'menu_setting_search'		=> 'Wyszukiwanie',//'搜索设置',
	'menu_setting_district'		=> 'Regiony',//'地区设置',
	'menu_setting_ranklist'		=> 'Ranking',//'排行榜设置',
	'menu_setting_mobile'		=> 'Dostęp mobile',//'手机访问设置',
	'menu_setting_tag'		=> 'Tagi',//'标签管理',
	'menu_setting_antitheft'	=> 'Anti-capture settings',//'防采集设置',

	'menu_forums'			=> 'Lista forów',//'版块管理',
	'menu_forums_merge'		=> 'Łączenie forów',//'版块合并',
	'menu_forums_threadtypes'	=> 'Typy tematów',//'主题分类',
	'menu_forums_infotypes'		=> 'Typy forów',//'分类信息',//vot: !!! May be 'Sort IDs',//'Category(ies)',/
	'menu_forums_infooption'	=> 'Ustawienia typów',//'分类信息选项',
	'menu_grid'			=> 'Nagłówek 4-okienkowy',//'首页四格',

	'menu_members_add'		=> 'Dodaj nowego',//'添加用户',
	'menu_members_edit'		=> 'Edytuj',//'用户管理',
	'menu_members_newsletter'	=> 'Newsletter',//'发送通知',
	'menu_members_mobile'		=> 'Powiadomienia SMS',//'发送手机通知',
	'menu_usertag'			=> 'Tagi',//'用户标签',
	'menu_members_edit_ban_user'	=> 'Banicja',//'禁止用户',
	'menu_members_ipban'		=> 'Banicja IP',//'禁止 IP',
	'menu_members_credits'		=> 'Przyznaj kredyty',//'积分奖惩',
	'menu_members_profile'		=> 'Pola profilów',//'用户栏目',
	'menu_members_profile_group'	=> 'Grupy',//'用户栏目分组',
	'menu_members_verify_setting'	=> 'Weryfikacje',//'认证设置',
	'menu_members_stat'		=> 'Statystyki',//'资料统计',
	'menu_moderate_modmembers'	=> 'Nowi użytkownicy',//'审核新用户',
	'menu_profilefields'		=> 'Pola profilu',//'用户栏目定制',
	'menu_admingroups'		=> 'Grupy administratorów',//'管理组',
	'menu_usergroups'		=> 'Grupy użytkowników',//'用户组',
	'menu_follow'			=> 'Obserwacje',//'推荐关注',
	'menu_defaultuser'		=> 'Domyślni użytkownicy',//'推荐好友',

	'menu_moderate_posts'		=> 'Moderacja',//'内容审核',
	'menu_moderate_blogs'		=> 'Blogi',//'审核日志',
	'menu_moderate_doings'		=> 'Aktywność',//'审核记录',
	'menu_moderate_pictures'	=> 'Obrazki',//'审核图片',
	'menu_moderate_shares'		=> 'Udostępnienia',//'审核分享',
	'menu_moderate_comments'	=> 'Komentarze',//'审核评论/留言',
	'menu_moderate_articles'	=> 'Artykuły',//'审核文章',
	'menu_moderate_articlecomments'	=> 'Komentarze artykułów',//'审核文章评论',
	'menu_maint_threads'		=> 'Tematy',//'主题管理',
	'menu_maint_prune'		=> 'Czyszczenie',//'批量删帖',
	'menu_maint_attaches'		=> 'Załączniki',//'附件管理',
	'menu_maint_threads_group'	=> 'Tematy',//'群组主题管理',
	'menu_maint_prune_group'	=> 'Czyszczenie',//'群组批量删帖',
	'menu_maint_attaches_group'	=> 'Załączniki',//'群组附件管理',
	'menu_setting_collection'	=> 'Kolekcje',//'淘帖管理',
	'menu_posting_tags'		=> 'Tagi',//'标签管理',
	'menu_posting_censors'		=> 'Cenzura',//'词语过滤',
	'menu_maint_report'		=> 'Raporty',//'用户举报',
	'menu_threads_forumstick'	=> 'Multi Forum Stick',//'多版块置顶',
	'menu_post_position_index'	=> 'Optymalizacja postów',//'帖子优化',
	'menu_postcomment'		=> 'Zarządzanie komentarzami',//'帖子点评管理',
	'menu_maint_doing'		=> 'Zarządzanie obserwacjami',//'记录管理',
	'menu_maint_blog'		=> 'Zarządzanie blogami',//'日志管理',
		'menu_maint_blog_recycle_bin'	=> 'Kosz blogów',//'日志回收站',
	'menu_maint_feed'		=> 'Zarządzanie aktywnością',//'动态管理',
	'menu_maint_album'		=> 'Zarządzanie albumami',//'相册管理',
	'menu_maint_pic'		=> 'Zarządzanie obrazkami',//'图片管理',
	'menu_maint_comment'		=> 'Komentarze/Posty',//'评论/留言管理',
	'menu_maint_share'		=> 'Zarządzanie udostępnieniami',//'分享管理',

	'menu_posting_attachtypes'	=> 'Załączniki',//'附件类型尺寸',
	'menu_moderate_recyclebin'	=> 'Kosz :: tematy',//'主题回收站',
	'menu_moderate_recyclebinpost'	=> 'Kosz :: odpowiedzi',//'回帖回收站',

	'menu_founder'			=> 'Informacje',//'站点信息',
	'menu_founder_perm'		=> 'Administracja',//'后台管理团队',
	'menu_founder_groupperm'	=> 'Edycja zezwoleń grupy - {group}',//'编辑团队职务权限 - {group}',
	'menu_founder_permgrouplist'	=> 'Edycja zezwoleń - {perm}',//'编辑权限 - {perm}',
	'menu_founder_memberperm'	=> 'Edycja zezwoleń użytkownika - {username}',//'编辑团队成员 - {username}',

	'menu_patch'			=> 'Bezpieczeństwo',//'安全中心',
	'menu_upgrade'			=> 'Aktualizacja online',//'在线升级',
	'menu_optimizer'		=> 'Kreator optymalizacji',//'优化大师',
	'menu_security'			=> 'Bezpieczeństwo',//'安全大师',

	'menu_addons'			=> 'Centrum aplikacji',//'应用中心',
	'menu_plugins'			=> 'Plugins',//'插件',
	'menu_tasks'			=> 'Zadania',//'站点任务',
	'menu_magics'			=> 'Magics',//'道具中心',
	'menu_medals'			=> 'Medale',//'勋章中心',
	'menu_misc_help'		=> 'Pomoc',//'站点帮助',
	'menu_google'			=> 'Wyszukiwarka Google',//'Google 搜索',
	'menu_ec'			=> 'Handel elektroniczny',//'电子商务',
	'menu_card'			=> 'Recharge card close',//'充值卡密',

	'menu_styles'			=> 'Style',//'风格管理',
	'menu_styles_templates'		=> 'Szablony',//'模板管理',
	'menu_posting_smilies'		=> 'Uśmieszki',//'表情管理',
	'menu_click'			=> 'Oceny',//'表态动作',
	'menu_thread_icon'		=> 'Ikony tematów',//'主题图标',
	'menu_thread_stamp'		=> 'Pieczęcie',//'主题图章',
	'menu_posting_editor'		=> 'Edytor postów',//'编辑器设置',
	'menu_misc_onlinelist'		=> 'Ikony grup',//'在线列表图标',

	'menu_misc_link'		=> 'Linki',//'友情链接',
	'menu_misc_relatedlink'		=> 'Related Links',//'关联链接',
	'memu_focus_topic'		=> 'Gorące tematy',//'站长推荐',
	'menu_adv_custom'		=> 'Reklamy strony',//'站点广告',

	'menu_misc_announce'		=> 'Ogłoszenia',//'站点公告',
	'menu_tools_updatecaches'	=> 'Cache',//'更新缓存',
	'menu_tools_postposition'	=> 'Optimize Post positioning',//'高楼贴优化',
	'menu_tools_updatecounters'	=> 'Aktualizacja statystyk',//'更新统计',
	'menu_tools_javascript'		=> 'Javascript calls',//'数据调用',
	'menu_tools_relatedtag'		=> ' Tags related',//' 标签聚合',
	'menu_tools_creditwizard'	=> 'Points Wizard',//'积分策略向导',
	'menu_tools_fileperms'		=> 'Uprawnienia plików',//'文件权限检查',
	'menu_tools_hookcheck'		=> 'Sprawdzanie hooków',//'嵌入点校验',
	'menu_tools_filecheck'		=> 'Sumy kontrolne plików',//'文件校验',
	'menu_forum_scheme'		=> 'Site Program Scheme',//'站点方案管理',
	'menu_db'			=> 'Baza danych',//'数据库',
	'menu_postsplit'		=> 'Split Posts',//'帖子分表',
	'menu_threadsplit'		=> 'Thread Tables',//'主题分表',
	'menu_membersplit'		=> 'Tablice użytkowników',//'用户表优化',
	'menu_logs'			=> 'Historia logów',//'运行记录',
	'menu_custommenu_manage'	=> 'Kreator menu',//'常用操作管理',
	'menu_misc_cron'		=> 'Zaplanowane zadania',//'计划任务',

	'menu_article'			=> 'Article Management',//'文章管理',
	'menu_portalcategory'		=> 'Article Categories',//'文章分类',
	'menu_blogcategory'		=> 'Blog Categories',//'日志分类',
	'menu_albumcategory'		=> 'Album Categories',//'相册分类',
	'menu_block'			=> 'Blocks Management',//'模块管理',
	'menu_blockstyle'		=> 'Block Styles',//'模块样式',
	'menu_portalpermission'		=> 'Portal permissions',//'权限列表',
	'menu_blockxml'			=> 'Third-party blocks',//'第三方模块',
	'menu_topic'			=> 'Topic Management',//'专题管理',
	'menu_html'			=> 'HTML management',//'HTML管理',
	'menu_diytemplate'		=> 'Custom Styles Management',//'DIY页面管理',

	'menu_group_setting'		=> 'Ustawienia ogólne',//'群组设置',
	'menu_group_type'		=> 'Kategorie grup',//'群组分类',
	'menu_group_manage'		=> 'Zarządzanie grupami',//'群组管理',
	'menu_group_userperm'		=> 'Zezwolenia grup',//'群主权限',
	'menu_group_level'		=> 'Poziomy grup',//'群组等级',
	'menu_group_mod'		=> 'Moderacja grup',//'审核群组',

	'menu_safe_setting'		=> 'Ustawienia ogólne',//'基本设置',
	'menu_safe_security'		=> 'Waterproof wall',//'防水墙',
	'menu_safe_seccheck'		=> 'Authentication Settings',//'验证设置',
	'menu_safe_accountguard'	=> 'Account bodyguard',//'帐号保镖',

	'menu_setting_manyou'		=> 'Ustawienia Manyou',//'Manyou 设置',
	'menu_setting_qqconnect'	=> 'Ustawienia QQ',//'QQ 绑定设置',

	'menu_cloud_doctor'		=> 'Narzędzia diagnostyczne',//'诊断工具',

	'admincp_title'			=> $_G['setting']['bbname'].' - Administracja',//$_G['setting']['bbname'].' 管理中心',

// Added by Valery Votintsev
	'menu_setting_language'		=> 'Języki',
);

