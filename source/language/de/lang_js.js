/*
	[Discuz!] (C)2001-2009 Comsenz Inc.
	This is NOT a freeware, use is subject to license terms

	Javascript Language variables

	$Id: lang_js.js by Valery Votintsev, codersclub.org
        German Translation (2010-09-20) by Coldcut - http://www.cybertipps.com
*/

//--------------------------------
//static/js/register.js

// Suggested email domains for registering:
var emaildomains = [
		'aol.com',
		'gmail.com',
		'hotmail.com',
		'msn.com',
		'qq.com',
		'yahoo.com'
		];

//--------------------------------
//static/js/common.js

var colortexts = {
	'Black'			: 'Schwarz',//'Black',//'黑色',
	'Sienna'		: 'Ocker',//'Sienna',//'赭色',
	'DarkOliveGreen'	: 'Dunkelolivgrün',//'Dark Olive Green',//'暗橄榄绿色',
	'DarkGreen'		: 'Dunkelgrün',//'Dark Green',//'暗绿色',
	'DarkSlateBlue'		: 'Graunblau',//'Dark Gray Blue',//'暗灰蓝色',
	'Navy'			: 'Marineblau',//'Navy',//'海军色',
	'Indigo'		: 'Indigo',//'靛青色',
	'DarkSlateGray'		: 'Dunkelblaugrau',//'Dark Green',//'墨绿色',
	'DarkRed'		: 'Dunkelrot',//'Dark Red',//'暗红色',
	'DarkOrange'		: 'Dunkel Orange',//'Dark Orange',//'暗桔黄色',
	'Olive'			: 'Oliv',//'橄榄色',
	'Green'			: 'Grün',//'Green',//'绿色',
	'Teal'			: 'Teal',//'水鸭色',
	'Blue'			: 'Blau',//'Blue',//'蓝色',
	'SlateGray'		: 'Kalkstein',//'Limestone',//'灰石色',
	'DimGray'		: 'Dunkelgrau',//'Dark Gray',//'暗灰色',
	'Red'			: 'Rot',//'Red',//'红色',
	'SandyBrown'		: 'Browner Sand',//'Brown Sand',//'沙褐色',
	'YellowGreen'		: 'Gelbgrün',//'Yellow Green',//'黄绿色',
	'SeaGreen'		: 'Seegrün',//'Sea Green',//'海绿色',
	'MediumTurquoise'	: 'Smaragdgrün',//'Green emerald',//'间绿宝石',
	'RoyalBlue'		: 'Königsblau',//'Royal Blue',//'皇家蓝',
	'Purple'		: 'Violet',//'Purple',//'紫色',
	'Gray'			: 'Grau',//'Gray',//'灰色',
	'Magenta'		: 'Rot-violett',//'Red Purple',//'红紫色',
	'Orange'		: 'Orange',//'橙色',
	'Yellow'		: 'Gelb',//'Yellow',//'黄色',
	'Lime'			: 'Limone',//'Acid Orange',//'酸橙色',
	'Cyan'			: 'Blaugrün',//'Blue Green',//'青色',
	'DeepSkyBlue'		: 'Tiefblau',//'Deep Sky Blue',//'深天蓝色',
	'DarkOrchid'		: 'Orchidee',//'Dark Purple',//'暗紫色',
	'Silver'		: 'Silber',//'Silver',//'银色',
	'Pink'			: 'Pink',//'粉色',
	'Wheat'			: 'Hellgelb',//'Light Yellow',//'浅黄色',
	'LemonChiffon'		: 'Zitronengelb',//'Lemon Silk',//'柠檬绸色',
	'PaleGreen'		: 'Cang-grün',//'Cang Green',//'苍绿色',
	'PaleTurquoise'		: 'Türkis',//'Cang gem Green',//'苍宝石绿',
	'LightBlue'		: 'Hellblau',//'Bright blue',//'亮蓝色',
	'Plum'			: 'Zwetschkenblau',//'Plum color',//'洋李色',
	'White'			: 'Weiß' //'White' //'白色'
};

/*
',',	//'，',
'.',	//'。',
':',	//'点',
'!',	//'！'
'&laquo;',//'《',
'&raquo;',//'》',
*/


//--------------------------------

var lng = {

//---------------------------
//static/image/editor/editor_base.js
// USED in /source/module/home/home_editor.php
// MOVE TO:
//static/js/editor_base.js
	'restore_last_saved'	: 'Bist du sicher das du es wiederherstellen möchtest?',//'Are you sure you want to restore to last saved?',//'您确定要恢复上次保存?',
	'cut_manually'		: 'Die Sicherheitseinstellungen deines Browsers erlauben keine automatische Cut Funktion . Verwende die Tastenkombination (Ctrl X) um dies Auszuführen.',//'Your browser security settings does not permit the editor to automatically execute the Cutting operation. Use the keyboard shortcut (Ctrl X) to complete this operation.',//'您的浏览器安全设置不允许编辑器自动执行剪切操作,请使用键盘快捷键(Ctrl+X)来完成',
	'copy_manually'		: 'Die Sicherheitseinstellungen deines Browsers erlauben keine automatische Copy Funktion. Verwende die Tastenkombination (Ctrl C) um dies Auszuführen.',//'Your browser security settings does not permit the editor to automatically execute the Copy operation. Use the keyboard shortcut (Ctrl C) to complete this operation.',//'您的浏览器安全设置不允许编辑器自动执行拷贝操作,请使用键盘快捷键(Ctrl+C)来完成',
	'paste_manually'	: 'Die Sicherheitseinstellungen deines Browsers erlauben keine automatische Paste Funktion. Verwende die Tastenkombination (Ctrl V) um dies Auszuführen.',//'Your browser security settings does not permit the editor to automatically execute the Paste operation. Use the keyboard shortcut (Ctrl V) to complete this operation.',//'您的浏览器安全设置不允许编辑器自动执行粘贴操作,请使用键盘快捷键(Ctrl+V)来完成',
	'graffiti_no_init'	: 'Kann keine Graffiti Initialisations Daten finden',//'Can not find the Graffiti initialization data',//'找不到涂鸦板初始化数据',
	'ie5_only'		: 'Unterstützt nur IE 5.01 oder Neuer',//'Supported only in IE 5.01 or later',//'只支持IE 5.01以上版本',
	'edit_raw'		: 'Raw Text bearbeiten',//'Edit Raw Text',//'编辑源码',
	'plain_text_warn'	: 'Bei der Umstellung auf den Normaltext gehen einige Formatierungen verloren!\nBist du sicher das du fortfahren möchtest?',//'Converting to the plain text will lose some formatting!\nAre you sure you want to continue?',//'转换为纯文本时将会遗失某些格式。\n您确定要继续吗？',
	'browser_update'	: 'Dein Browser unterstützt diese Funktion nicht, bitte aktualisiere deine Browser Version',//'Your browser does not support this feature, please upgrade your browser version',//'你的浏览器不支持此功能，请升级浏览器版本',
	'tips'			: 'Tipps',//'Tips',//'小提示',

//---------------------------
//static/image/editor/editor_function.js
// USED in: /source/admincp/admincp_feed.php
// USED in: /template/default/home/cpacecp_blog.htm
// USED in: /template/default/portal/portalcp_article.htm
// MOVED TO:
//static/js/editor_function.js
	'wysiwyg_only'		: 'Dieser Vorgang ist nur im WYSIWYG-Modus wirksam',//'This operation is effective only for WYSIWYG mode',//'本操作只在多媒体编辑模式下才有效',

//---------------------------
//static/image/admincp/cloud/cloud.js
	'int_cloud_test'	: 'Andere Cloud Platform Interfacees testen',//'云平台其他接口测试',
	'int_roaming_test'	: 'Ander Roaming Interfaces testen',//'漫游其他接口测试',
	'int_qq_test'		: 'QQ Internet Interface testen',//'QQ互联接口测试',
	'server_busy'		: 'The server is busy, please try again later',//'服务器繁忙，请稍后再试',
	'tested_ok'		: 'The test is successful, time used: ',//'测试成功，耗时 ',
	'seconds'		: ' sec.',//' 秒',

//---------------------------
//static/image/admincp/cloud/qqgroup.js
	'select_topic_to_push'	: 'Wähle mindestens ein Thema um den Artikel zu Pushen',//'请至少推送一条头条主题和一条列表主题',
	'select_item_to_push'	: 'Wähle mindestens ein Element um den Artikel zu Pushen',//'请至少推送一条信息到列表区域',
	'loading'		: 'Loading...',//'加载中...',
	'push5reached'		: 'Push Beitrag hat fünf erreicht, versuche die Nummer zu storniereen und versuche es erneut.',//'推送帖子已达到5条，请在右侧取消一些再重试。',
	'click_left'		: 'Klicke auf der linken Seite',//'点击左侧',
	'push_to_list'		: 'Die Information wird auf die Liste gepusht',//'将信息推送到列表',
	'wait_image_upload'	: 'Bild hochladen, bitte warten...',//'图片上传中，请稍后...',





//---------------------------
//upload/static/js/autoloadpage.js
	'loading_content_wait'	: 'Loading content, wait please...',//'正在加载, 请稍后...',

//---------------------------
//upload/static/js/at.js
//	'enter_username'	: 'Please enter the user name',//'请输用户名',

//--------------------------------
//static/js/calendar.js
//static/js/forum_calendar.js
//static/js/home_calendar.js

	'prev_month'	: 'Vorheriges Monat',//'上一月',
	'next_month'	: 'Nächstes Monat',//'下一月',
	'select_year'	: 'Auswahl Jahr',//'点击选择年份',
	'select_month'	: 'Auswahl Monath',//'点击选择月份',
	'wday0'		: 'So',//'日',
	'wday1'		: 'Mo',//'一',
	'wday2'		: 'Di',//'二',
	'wday3'		: 'Mi',//'三',
	'wday4'		: 'Do',//'四',
	'wday5'		: 'Fr',//'五',
	'wday6'		: 'Sa',//'六',
	'month'		: 'Monat',//'月',
	'today'		: 'Heute',//'今天',
	'hours'		: 'Stunden',//'点',
	'minutes'	: 'Minuten',//'分',
	'halfhour'	: 'Half hour',//'半小时',
	'ok'		: 'Ok',//'OK',

//--------------------------------
//static/js/common.js

	'open_new_win'		: 'In neuem Fenster öffnen',//'在新窗口打开',
	'actual_size'		: 'Aktuelle Grösse',//'实际大小',
	'close'			: 'Schließen',//'关闭',
	'wheel_zoom'		: 'Benutze das Mausrad um das Bild zu Zoomen',//'鼠标滚轮缩放图片',
	'reminder'		: 'Erinnerung',//'提示信息',
	'submit'		: 'Speichern',//'确定',
	'cancel'		: 'Abbrechen',//'取消',
	'wait_please'		: 'Loading ...',//'请稍候...',
	'int_error'		: 'Interner Fehler, kann diesen Inhalt nicht darstellen',//'内部错误，无法显示此内容',
	'flash_required'	: 'Dieser Inhalt benötigt Adobe Flash Player 9.0.124 oder Neuer',//'此内容需要 Adobe Flash Player 9.0.124 或更高版本',
	'flash_download'	: 'Download Flash Player',//'下载 Flash Player',
	'day1'			: '1 Tag',//'一天',
	'week1'			: '1 Woche',//'一周',
	'days7'			: '7 Tage',//'7 天',
	'days14'		: '14 Tage',//'14 天',
	'month1'		: '1 Monat',//'一个月',
	'month3'		: '3 Monate',//'三个月',
	'month6'		: '6 Monate',//'半年',
	'year1'			: '1 Jahr',//'一年',
	'custom'		: 'Custom',//'自定义',
	'permanent'		: 'Permanent',//'永久',
	'show_all_expr'		: 'Alle Smiles zeigen',//'显示所有表情',
	'page_prev'		: 'Vorherige Seite',//'上页',
	'page_next'		: 'Nächste Seite',//'下页',
	'copy2clipboard'	: 'In die Zwischenablage kopieren',//'点此复制到剪贴板',
// ATTENTION!
// The next line must have the same value as in /template.php - 'enter_content' !!!
	'enter_search_string'	: 'Suche Inhalt',//'请输入搜索内容',
	'refresh_q&a'		: 'Aktualisiere Q&A',//'刷新验证问答',
	'refresh_code'		: 'Aktualisiere Code',//'刷新验证码',
	'code_invalid'		: 'Falscher Sicherheitscode, bitte nochmal versuchen',//'验证码错误，请重新填写',
	'q&a_invalid'		: 'Falsche Antwort, bitte nochmal versuchen',//'验证问答错误，请重新填写',
	'code_clipboard'	: 'Der Code wurde in die Zwischenablage kopiert',//'代码已复制到剪贴板',
	'enter_link_url'	: 'Link URL eingeben',//'请输入链接地址',
	'enter_link_text'	: 'Link Text eingeben',//'请输入链接文字',
	'enter_image_url'	: 'Bild URL eingeben',//'请输入图片地址',
	'width_optional'	: 'Weite (optional)',//'宽(可选)',
	'height_optional'	: 'Höhe (optional)',//'高(可选)',
	'narrow_screen'		: 'Schmales Bild',//'切换到窄版',
	'wide_screen'		: 'Weites Bild',//'切换到宽版',
	'logging_wait'		: 'Logging, bitte warten...',//'登录中，请稍后...',
	'notices_no'		: '[　　　]',//'【　　　】',
	'notices_yes'		: '[Neu]',//'【新提醒】',
	'sec_after_win_closed'	: ' Sekunden bevor das Fenster geschlossen wird',//' 秒后窗口关闭',
	'sec_after_page_jump'	: ' Sekunden bevor die Seite weitergeleitet wird',//' 秒后页面跳转',
	'jump_now'		: 'Gehe jetzt',//'立即跳转',
	'error_message'		: 'Fehler Meldung',//'错误信息',
	'ctrl_d_favorites'	: 'Drücke die Tasten Ctrl + D um zu den Favoriten hinzuzufügen',//'请按 Ctrl+D 键添加到收藏夹',
	'non_ie_manually'	: 'Für Nicht-IE Browser bitte Homepage manuell hinzufügen',//'非 IE 浏览器请手动将本站设为首页',
	'blind_enable'		: 'Enable blind experience',//'开启盲人体验',//tc:'開啟盲人體驗',
	'blind_disable'		: 'Disable blind experience',//'关闭盲人体验',//tc:'關閉盲人體驗',

//--------------------------------
//static/js/common_diy.js

	'edit'			: 'Bearbeiten',//'编辑',
	'warn_not_saved'	: 'Du hast die Daten modifiziert. Die Daten gehen verloren wenn du jetzt beendest.',//'您的数据已经修改,退出将无法保存您的修改。',
	'confirm_exit'		: 'Alle Daten gehen verloren wenn du beendest. Bist du sicher das du beenden möchtest?',//'退出将不会保存您刚才的设置。是否确认退出？',
	'select_image_upload'	: 'Wähle ein Foto zum hochladen',//'请选择您要上传的图片',

//--------------------------------
//static/js/common_extra.js
//	'wait_please'		: 'Loading ...',//'请稍候...',
	'copy_failed'		: 'Kopieren fehlgeschlagen, bitte wähle "Zugriff erlauben"',//'复制失败，请选择“允许访问”',
	'prev'			: 'Zurück',//'上一张',
	'next'			: 'Weiter',//'下一张',
        'shortcut_add'		: 'Adding a desktop shortcut',//'添加桌面快捷',
        'shortcut_1'		: '1. Click "',//'1、点击"',
        'shortcut_1_1'		: 'Download desktop shortcut',//'下载桌面快捷',
        'shortcut_1_2'		: '", and after the download is completed, you can move the file to your desktop',//'"，下载完成后，可移动文件到系统桌面',
        'shortcut_2'		: '2. Click "',//'2、点击"',
        'shortcut_2_1'		: 'Download icon file',//'下载ICO图标',
        'shortcut_2_2'		: '", and after the download is completed, right-click on the desktop shortcut file -&gt; Properties -&gt; Change Icon, and select the downloaded ICO icon',//'"，下载完成后，右击桌面快捷文件->属性->更改图标，选择已下载的ICO图标即可',

//--------------------------------
//static/js/editor.js

	'restore_size_edit'	: 'Wiederaufnahme der Editor Größe',//'恢复编辑器大小',
	'full_screen_edit'	: 'Full Screen Editor',//'全屏方式编辑',
	'current_length'	: 'Derzeitige Länge',//'当前长度',
	'bytes'			: 'Bytes',//'字节',
	'system_limit'		: 'System limit',//'系统限制',
	'up_to'			: '~',//'到',
	'check_length'		: 'Länge',//'字数检查',
	'data_restored'		: 'Daten wurden wiederhergestellt',//'数据已恢复',
	'data_saved'		: 'Daten gespeichert',//'数据已保存',
	'clear_all_sure'	: 'Bist du sicher das du den Inhalt bereinigen möchtest?',//'您确认要清除所有内容吗？',
	'hide_content'		: 'Inhalt verstecken',//'请输入要隐藏的信息内容',
	'free_content'		: 'Wenn du nicht einen Beitrags Preis festgelegt hast, können die eingegebenen Informationen kostenlos vor dem Kauf der Inhalte angesehen werden, ',//'如果您设置了帖子售价，请输入购买前免费可见的信息内容',
	'when_thread_replied'	: 'Nur anzeigen wenn der Benutzer auf das Thema antwortet ',//'只有当浏览者回复本帖时才显示',
	'when_points_more'	: 'Nur anzeigen wenn die Benutzerpunkte höher sind als ',//'只有当浏览者积分高于',
	'when_show'		: 'Wann zeigen',//'时才显示',
	'table_rows'		: 'Tabellenzeilen',//'表格行数',
	'table_columns'		: 'Tabellenspalten',//'表格列数',
	'table_width'		: 'Tabellenweite: ',//'表格宽度: ',
	'bg_color'		: 'Hintergrund Farbe',//'背景颜色',
	'table_intro0'		: 'Tabellentipps schreiben',//'快速书写表格提示',
	'table_intro1'		: '&quot;[tr=color]&quot; Definieren Sie die Zeile Hintergrundfarbe<br />&quot;[td=Width]&quot; Definieren Sie die Spaltenbreite<br />&quot;[td=Column_Span,Row_Span,Width]&quot; Definieren Sie die Zeile / Spalte Spannweite und Breite<br /><br />Schneller Schreibtisch Beispiel: ',//'“[tr=颜色]” 定义行背景<br />“[td=宽度]” 定义列宽<br />“[td=列跨度,行跨度,宽度]” 定义行列跨度<br /><br />快速书写表格范例：',
	'table_intro2'		: '[table]<br />Name:|Discuz!<br />Version:|X1.5<br />[/table]',//'[table]<br />Name:|Discuz!<br />Version:|X1<br />[/table]',
	'table_intro3'		: 'Verwende &quot;|&quot; auf separaten Zeilen, wenn es ein &quot;|&quot; Zeichen in den Daten ist, ersetze es mit &quot;\\|&quot;, separate Zeilen mit &quot;\\n&quot;.',//'用“|”分隔每一列，表格中如有“|”用“\\|”代替，换行用“\\n”代替。',
	'audio_url'		: 'URL der Musikdatei eingeben',//'请输入音乐文件地址',
	'video_url'		: 'URL der Videodatei eingeben',//'请输入视频地址',
	'auto_play'		: 'Autoplay?',//'是否自动播放',
	'flash_url'		: 'Bitte die URL der Flashdatei eingeben ',//'请输入 Flash 文件地址',
	'enter_please'		: 'Bitte eingeben ',//'请输入第',
	'nth_parameter'		: '-th Parameter',//' 个参数',
	'font'			: 'Schriftart',//'字体',
	'full_screen'		: 'Vollansicht',//'全屏',
	'restore_size'		: 'Grösse wiederherstellen',//'恢复',
	'general'		: 'Genereller Modus',//'常用',
	'simple'		: 'Erweiterter Modus',//'高级',
	'bad_browser'		: 'Dein Browser unterstützt dieses Feature nicht',//'你的浏览器不支持此功能',
	'click_autosave_enable'	: 'Für die automatische Speicherung hier klicken',//'点击开启自动保存',
	'autosave_enable'	: 'Automatische Speicherung aktivieren',//'开启自动保存',
	'autosave_disable'	: 'Automatische Speicherung deaktivieren',//'点击关闭自动保存',
	'autosave_enabled'	: 'Datenspeicherung aktiviert',//'数据自动保存已开启',
	'autosave_disabled'	: 'Datenspeicherung deaktiviert',//'数据自动保存已关闭',
	'data_saved_at'		: 'Daten wurden gespeichert in ',//'数据已于',
	'saved_time'		: '',//NOT REQUIRED IN ENGLISH!//'保存',
	'sec_before_saving'	: 'S. vor automatischer Speicherung',//'秒后保存',
	'insert_quote'		: 'Zitat eingeben',//'请输入要插入的引用',
	'insert_code'		: 'Code eingeben',//'请输入要插入的代码',
	'enter_item_list'	: 'Artikelliste eingeben.\r\nLeer lassen oder abbrechen.',//'输入一个列表项目.\r\n留空或者点击取消完成此列表.',
	'width'			: 'Weite',//'宽',
	'height'		: 'Höhe',//'高',
	'audio_support'		: 'Unterstützt wma, mp3, ra, rm, und andere Musik Formate<br />Beispiel: http://server/audio.wma',//'支持 wma mp3 ra rm 等音乐格式<br />示例: http://server/audio.wma',
	'video_support'		: 'Unterstützt für Youku, Potatoes, 56, 6, CoolVideo und andere Video Stationen und <br /> Support wmv avi rmvb mov swf flv Video Formate <br /> Beispiel: http://server/movie.wmv',//'支持优酷、土豆、56、酷6等视频站的视频网址<br />支持 wmv avi rmvb mov swf flv 等视频格式<br />示例: http://server/movie.wmv',
	'flash_support'		: 'Unterstützte Flash Format: swf flv <br /> Beispiel: http://server/flash.swf',//'支持 swf flv 等 Flash 网址<br />示例: http://server/flash.swf',
	'paste_from_word'	: 'Inhalt von Word einfügen',//'从 Word 粘贴内容',
	'paste_word_tip'	: 'Tasenkombination (Ctrl + V) verwenden um den Inhalt aus Word einzufügen',//'请通过快捷键(Ctrl+V)把 Word 文件中的内容粘贴到上',
	'show_tips'		: 'Freundlich Tipps',//'Show Tips',//'友情提示',
	'expire_days'		: 'Valid for (days)',//'有效天数',
	'expire_days_invalid'	: 'Distance from the posting date is greater than the number of days when the label automatically expire',//'距离发帖日期大于这个天数时标签自动失效',
	'download_remote'	: 'Downloading remote attachment, please wait ...',//'正在下载远程附件，请稍等……',
	'create_post_directory'	: 'Create post directory',//'创建帖子目录',
	'page_number'		: 'Page number',//'页码',
	'jump_to_page'		: 'Jump to specified page',//'跳转到指定的页',
	'jump_to_page_comment'	: 'Use [page] tag for add a page break',//'用 [page] 对当前帖子分页后的页码',
	'jump_to_post'		: 'Jump to specified post',//'跳转到指定的帖子',
	'jump_tip_pid'		: 'Post TID and PID',//'帖子的 TID 和 PID',
	'add_indent'		: 'Add the first line indent',//'添加行首缩进',
	'enter_post_password'	: 'Please enter the post password',//'请输入帖子密码',
	'begin_flash_img'	: 'Enter the beginning Flash or image animation URL',//'请输入开头动画 Flash 或 图片 地址',
	'begin_click_url'	: 'Click on the link URL',//'点击链接地址',
	'begin_stay_seconds'	: 'Display seconds',//'停留秒数',
	'begin_disappearance'	: 'Disappear effect after loading',//'载入、消失的效果',
	'none'			: 'None',//'无',
	'begin_fade'		: 'Fade',//'淡入淡出',
	'begin_explosive'	: 'Explode',//'展开闭合',
	'begin_info'		: 'Supported formats: swf flv jpg gif png<br/>Width range: 400~1024, Height range: 300~640<br/>Example: http://server/flash.swf',//'支持 swf flv jpg gif png 网址<br />宽高范围: 宽400~1024 高300~640<br />示例: http://server/flash.swf',

//--------------------------------
//static/js/forum.js

	'del_thread_sure'	: 'Bist du sicher das du dieses Thema aus den heissen Themen entfernen möchtest?',//'您确认要把此主题从热点主题中移除么？',
	'there_are'		: 'Es sind ',//'有',
	'new_reply_exists'	: 'Das Thema hat neue Antworten, klicke um sie anzusehen',//'有新回复的主题，点击查看',
//--------------------------------
//static/js/forum_google.js

	'search_net'	: 'Suche im Netz',//'网页搜索',
	'search_site'	: 'Suche auf der Seite',//'站内搜索',
	'search'	: 'Suche',//'搜索',

//--------------------------------
//static/js/forum_moderate.js

	'choose_tread'	: 'Wähle ein Thema zum moderieren',//'请选择需要操作的帖子',

//--------------------------------
//static/js/forum_post.js

	'internal_error'	: 'Interner Server Fehler',//'内部服务器错误',
	'upload_ok'		: 'Erfolgreich hochgeladen',//'上传成功',
	'ext_not_supported'	: 'Diese Dateiendung wird nicht unterstützt',//'不支持此类扩展名',
	'sorry_ext_not_supported'	: 'Sorry, diese Dateiendung wird nicht unterstützt.',//'对不起，不支持上传此类扩展名的附件。',
	'illegal_image_type'	: 'Illegal Bild Typ',//'图片附件不合法',
	'can_not_save_attach'	: 'Anhang kann nicht gespeichert werden',//'附件文件无法保存',
	'invalid_file'		: 'Keine berechtigte Date wurde hochgeladen',//'没有合法的文件被上传',
	'illegal_operation'	: 'Illegale Operation',//'非法操作',
	'enter_content'		: 'Titel oder Inhalt eingeben',//'请完成标题或内容栏',
	'select_category'	: 'Wähle eine entsprechende Kategorie für das Thema',//'请选择主题对应的分类',
	'select_category_info'	: 'Wähle eine entsprechende Kategorie für die Themen-Information',//'请选择主题对应的分类信息',
	'title_long'		: 'Title Länge überschreitet die Grenze von 255 Zeichen',//'您的标题超过 80 个字符的限制',
	'content_long'		: 'Inhalt Länge entspricht nicht den Anforderungen.\n\n',//'您的帖子长度不符合要求。\n\n',
	'ignore_pending_attach'	: 'Es sind noch ausständige Anhänge vorhanden. Bist du sicher das du sie ignorieren möchtest?',//'您有等待上传的附件，确认不上传这些附件吗？',
	'still_uploading'	: 'Einige Anhänge werden noch hochgeladen, Bitte warte. Das Thema wird automatisch erstellt sobald alle Anhänge hochgeladen wurden...',//'您有正在上传的附件，请稍候，上传完成后帖子将会自动发表...',
	'no_data_recover'	: 'Es können keine Daten wiederhergstellt werden!',//'没有可以恢复的数据！',
	'content_overwrite'	: 'Warnung:\nAktuelle Inhalte werden mit den gespeicherten Daten überschrieben!\nBist du sicher das du die Daten wiederherstellen möchtest?',//'此操作将覆盖当前帖子内容，确定要恢复数据吗？',
	'upload_finished'	: 'Hochladen beendet!',//'附件上传完成！',
	'successfull'		: 'Erfolgreich:',//'成功',
	'failed'		: 'Fehlgeschlagen:',//'失败',
	'ones'			: 'Diejenigen',//'个',
	'uploading'		: 'Uploading...',//'上传中...',
	'select_image_files'	: 'Bilddateien auswählen',//'请选择图片文件',
	'delete'		: 'Löschen',//'删除',
	'contains'		: 'Beinhaltet ',//'包含',
	'img_attached_num'	: 'Bilder angehängt',//'个图片附件',
	'files attached_num'	: 'Dateien angehängt',//'个附件',
	'images'		: 'Bilder',//'图片',
	'attachments'		: 'Anhänge',//'附件',
//	'upload_failed'		: 'Hochladen fehlgeschlagen',//'上传失败',

	'attach_big'		: 'Anlagengröße überschreitet das zulässige Limit',//'服务器限制无法上传那么大的附件',
	'attach_group_big'	: 'Die Nutzergruppe Größe von Dateianhängen überschreitet die zulässige Grenze',//'用户组限制无法上传那么大的附件',
	'attach_type_big'	: 'Dieser Dateityp überschreitet die zulässige Grenze der Grössen von Dateianhängen',//'文件类型限制无法上传那么大的附件',
	'attach_daily_big'	: 'Die täglich Größe von Dateianhängen überschreitet die zulässige Grenze',//'本日已无法上传更多的附件',
	'validating_q&a'	: 'Überprüfung der Q & A, bitte warten',//'验证问答校验中，请稍后',
	'validating_code'	: 'Überprüfung des Codes, bitte warten',//'验证码校验中，请稍后',
	'attach_type_disabled'	: 'Dieser Anhangtyp ist deaktiviert',//'附件类型被禁止',
	'attach_max'		: 'Nicht grösser als',//'不能超过',
	'vote_max_reached'	: 'Maximale Anzahl an Votes erreicht: ',//'已达到最大投票数',
	'no_remote_attach'	: 'Sorry, kein Fernanhang erlaubt',//'抱歉，暂无远程附件',
	'delete_post_sure'	: 'Bist du sicher das du diesen Beitrag löschen möchtest?',//'确定要删除该帖子吗？',
	'feed_add_confirm'	: 'Because of you have set read permission or sell the post, do you confirm also the broadcast to your listeners to see?',//'由于您设置了阅读权限或出售帖，您确认还转播给您的听众看吗？',
//--------------------------------
//static/js/forum_viewthread.js

	'best_answer_sure'	: 'Bist du sicher das du diesen Beitrag als "Beste Antwort" definieren möchstest?',//'您确认要把该回复选为“最佳答案”吗？',
	'premoderated'		: 'Antworten auf diese Kategorie müssen geprüft werden. Dein Beitrag wird nach der Überprüfung angezeigt werden',//'本版回帖需要审核，您的帖子将在通过审核后显示',
	'credit_confirm1'	: 'Download Kosten ',//'下载需要消耗',
	'credit_confirm2'	: ' Punkte, möchtest du downloaden?',//'，您是否要下载？',
	'thread_to_clipboard'	: 'Themen Adresse wurde in die Zwischenablage kopiert',//'帖子地址已经复制到剪贴板',
	'click_to_enlarge'	: 'Zum Vergrössern anklicken',//'点击放大',
	'notify_on_reply'	: 'Antwort Benachrichtigungen erhalten',//'接收回复通知',
	'notify_on_reply_cancel'	: 'Benachrichtigungsantworten abbrechen',//'取消回复通知',
	'share_connection_failed'	: 'Teilen fehlgeschlagen, bitte später nochmal versuchen',//'分享服务连接失败，请稍后再试',
	'qq_bind'		: 'Bitte binde deinen QQ Account',//'请先绑定QQ账号',
	'quote_by'		: 'Zitat von .*? in .*? Code',//'本帖最后由 .*? 于 .*? 编辑',
	'copy_code'		: 'Code kopieren',//'复制代码',
	'download_pocket_forum'	: 'Download Pocket Forum',//'下载掌上论坛',
	'pocket_forum_android'	: 'If Andriod version, Scan thw QR-code can be downloaded directly to the phone',//'Andriod版本，扫描二维码可以直接下载到手机',
	'pocket_forum_android_alt'	: 'Suitable for Android-based smartphones like Samsung/HTC/etc',//'适用于装有安卓系统的三星/HTC/小米等手机',
	'pocket_forum_ios'	: 'If iPhone used, Scan thw QR-code can be downloaded directly to the phone',//'iPhone版本，扫描二维码可以直接下载到手机',
	'pocket_forum_ios_alt'	: 'Suitable for Apple mobile phone',//'适用于苹果手机',
	'quick_reply_here'	: '#Quick Reply Here#', //'#在这里快速回复#',

//--------------------------------
//static/js/handlers.js
	'file_selected_exceed'	: 'You have selected too many files.',//'您选择的文件个数超过限制。',
	'upload_number_exceed'	: 'You cannot add any more files.',//'您已达到上传文件的上限了。',
	'can_choose_more'	: 'You yet can choose ',//'您还可以选择 ',
	'files'			: ' files',//' 个文件',
	'file_is_large'		: 'File is too large.',//'文件太大.',
	'file_is_empty'		: 'You can not upload a zero byte file.',//'不能上传零字节文件.',
	'file_type_disabled'	: 'Upload of such type files is disabled.',//'禁止上传该类型的文件.',
	'unhandled_error'	: 'Unhandled Error',//'',
	'upload_progress'	: 'Uploaded ',//'正在上传',
	'upload_cancelled'	: 'Cancelled',//'取消上传',
	'file_description'	: 'File Description',//'图片描述',
	'image_upload_failed'	: 'Image upload failed',//'图片上传失败',
	'upload_failed'		: 'Upload failed',//'上传失败',
	'upload_completed'	: 'Upload completed.',//'上传完成.',
	'upload_error'		: 'Upload Error: ',//'',
	'config_error'		: 'Configuration Error',//'',
	'server_error'		: 'Server (IO) Error',//'',
	'security_error'	: 'Security Error',//'',
	'upload_limit_exceed'	: 'Upload limit exceeded.',//'',
	'file_not_found'	: 'File not found.',//'',
	'validation_failed'	: 'Failed Validation.  Upload skipped.',//'',
	'upload_stopped'	: 'Stopped',//'',

//--------------------------------
//static/js/home.js
	'day'			: 'Tag',//'日',
	'category_empty'	: 'Kategorie Name darf nicht leer sein!',//'分类名不能为空！',

//--------------------------------
//static/js/home_ajax.js

//	'close'			: 'Close',//'关闭',
//	'wait_please'		: 'Loading ...',//'请稍候...',

//--------------------------------
//static/js/home_blog.js

	'title_length_invalid'	: 'Titel Länge (sollte 1~80 Zeichen haben) erfüllt nicht die Anforderungen',//'标题长度(1~80字符)不符合要求',

//--------------------------------
//static/js/home_common.js

	'show_orig_image'	: 'Original Bild in neuem Fenster anzeigen',//'点击图片，在新窗口显示原始尺寸',
	'continue_sure'		: 'Bist du sciher das du fortfahren möchtest?',//'您确定要执行本操作吗？',
	'select_item'		: 'Bitte wähle ein Element aus',//'请选择要操作的对象',
	'image_url_invalid'	: 'Falsche Bild URL',//'图片地址不正确',
	'audio_url_invalid'	: 'Falsche Audio URL, darf nicht leer sein',//'音乐地址错误，不能为空',

//!!!!! MayBe wrap this names!!
	'collapse'		: 'Zusammenziehen',//'收起',
	'expand'		: 'Erweitert',//'展开',

//--------------------------------
//static/js/home_friendselector.js

	'select_max'		: 'Du kannst auswählen bis zu',//'最多只允许选择',
	'users'			: 'Benutzer',//'个用户',
	'allready_exists'	: 'Existiert bereits',//'已经存在',

//--------------------------------
//static/js/home_manage.js

	'you_friends_now'	: 'Ihr seid nun Freunde und könnt ',//'你们现在是好友了，接下来，您还可以：',
	'leave_message'		: 'Hinterlasse eine Nachricht',//'给TA留言',
	'or'			: 'oder',//'或者',
	'send_greeting'		: 'sende Grüsse',//'打个招呼',
	'reply'			: 'Antwort',//'回复',
	'comment'		: 'Kommentar',//'评论',
	'close_list'		: 'Liste schließen',//'收起列表',
	'more_feeds'		: 'Mehr Feeds',//'更多动态',

//--------------------------------
//static/js/home_uploadpic.js

	'image_type_invalid'	: 'Sorry, Bilder mit einer solchen Erweiterung werden nicht unterstützt',//'对不起，不支持上传此类扩展名的图片',
	'insert_to_content'	: 'Klicke hier, um den Inhalt auf der aktuellen Cursor-Position einzufügen',//'点击这里插入内容中当前光标的位置',
	'insert'		: 'Eingeben',//'插入',
	'image_description'	: 'Bild Beschreibung',//'图片描述',
	'uploading_wait'	: 'Uploading, Bitte warten',//'上传中，请等待',
	'retry'			: 'Wiederholen',//'重试',

//---------------------------
//static/js/makehtml.js
	'generate'		: 'Generate ',//'生成',
	'generate_ok'		: ' generated successfully',//'生成成功',
	'generate_error'	: ' generation failed',//'生成失败',
	'generate_start'	: 'Start generating of ',//'开始生成 ',
	'generate_click_continue'	: 'If your browser does not respond, Click to continue...',//'如果您的浏览器没有反应，请点击继续...',
	'generate_completed'	: ' generation is completed',//' 生成完成',
	'generate_total'	: 'Total need to generate ',//'本次共需要生成 ',
	'generate_files'	: ' files, Successfully generated ',//' 文件，成功生成 ',
	'generate_first'	: 'generated first ',//'正在生成第 ',
	'generate_percent'	: 'has been completed ',//'已经完成 ',

//---------------------------
//static/js/mobile/common.js
	'first'		: 'First ',//'第 ',
	'page'		: 'Page',//'页',
	'pages'		: ' pages',//'页',
	'prev_page'	: 'Prev',//'上一页',
	'next_page'	: 'Next',//'下一页',
	
	'click_to_reload'	: 'Click to reload',//'点击重新加载',
	'loading_now'		: 'Loading...',//'正在加载...',

	'geo_timeout'		: 'Get location timeout, please try again',//'获取位置超时，请重试',
	'geo_error'		: 'Unable to detect your current location',//'无法检测到您的当前位置',
	'geo_permission'	: 'Please allow normal access to your current location',//'请允许能够正常访问您的当前位置',
	'unknown_error'		: 'Unknown error occurred',//'发生未知错误',
	'touch_down_refresh'	: 'Touch down to refresh',//'下拉可以刷新',
	'touch_up_refresh'	: 'Touch UP to refresh',//'松开可以刷新',

//--------------------------------
//static/js/portal.js

	'delete_sure'		: 'Bist du sicher das du diese Daten löschen möchtest?',//'您确定要删除该数据吗？',
	'ignore_sure'		: 'Bist du sicher das du diese Daten ignorieren möchtest?',//'您确定要屏蔽该数据吗？',
	'to'			: 'to',//'到',

	'choose_block'		: 'Wähle Block',//'选择模块',
	'blocks_found1'		: 'Gefunden',//'找到',
	'blocks_found2'		: 'Entsprechende Blöcke',//'个相应的模块',
	'blocks_not_found'	: 'Keine entsprechenden Blöcke',//'没有相应的模块',
	'select_block'		: 'Bitte Block auswählen!',//'请选择一个模块！',
	'show_settings'		: 'Einstellung zeigen',//'展开设置项',
	'hide_settings'		: 'Einstellung verstecken',//'收起设置项',
	'block_name_empty'	: 'Block Name darf nicht leer sein',//'模块标识不能为空',
	'block_convert_sure'	: 'Bist du sicher das du diesen Block zuu diesem Typ konvertieren möchtest',//'你确定要转换模块的类型从',
	'back'			: 'Zurück',//'返回',
	'settings_expand'	: 'Einstellung erweitern',//'展开设置项',
	'settings_hide'		: 'Einstellung verstecken',//'收起设置项',
	'custom_content_error'	: 'Inhalt Fehler! HTML Code: ',//'自定义内容错误，',
	'html_error'		: 'HTML Code: ',//'HTML代码：',
	'tags_not_match'	: ' - Tags stimmen nicht überein',//' 标签不匹配',
	'entered'		: 'Have entered ',//'已输入 ',
	'exceed'		: 'Exceed ',//'超出 ',
	'title_length_bad'	: 'The title is incorrect',//'标题长度不正确',
	'summary_length_bad'	: 'Summary length is incorrect',//'简介长度不正确',

//--------------------------------
//static/js/portal_diy.js

	'choose_style'		: 'Wähle ein Style',//'选择样式',
	'style'			: 'Style',//'样式',
	'style1'		: 'Style1',//'样式1',
	'style2'		: 'Style2',//'样式2',
	'style3'		: 'Style3',//'样式3',
	'style4'		: 'Style4',//'样式4',
	'style5'		: 'Style5',//'样式5',
	'style6'		: 'Style6',//'样式6',
	'style7'		: 'Style7',//'样式7',
	'no_border'		: 'Kein Rahmen Frame',//'无边框框架',
	'no_border_no_margin'	: 'Keine Rahmen, kein Rand',//'无边框且无边距',

	'title'			: 'Titel',//'标题',
	'attribute'		: 'Attribute',//'属性',
	'data'			: 'Daten',//'数据',
	'update'		: 'Update',//'更新',
	'export'		: 'Export',//'导出',
	'repeat'		: 'Wiederholen',//'平铺',
	'no_repeat'		: 'Keine Wiederholung',//'不平铺',
	'repeat_x'		: 'Horizontale wiederholen',//'横向平铺',
	'repeat_y'		: 'Vertikale wiederholen',//'纵向平铺',
	'no_style'		: 'Kein Style',//'无样式',
	'solid_line'		: 'Durchgehende Linie',//'实线',
	'dotted_line'		: 'Gepunktete Linie',//'点线',
	'dashed_line'		: 'Gestrichelte Linie',//'虚线',
	'link'			: 'Link',//'链接',
	'border'		: 'Rahmen',//'边框',
	'size'			: 'Grösse',//'大小',
	'color'			: 'Farbe',//'颜色',
	'separate_config'	: 'Separate Konfiguration',//'分别设置',
	'right'			: 'Rechts',//'右',
	'bottom'		: 'Unten',//'下',
	'top'			: 'Top',//'上',
	'left'			: 'Links',//'左',
	'margin'		: 'Grenze',//'外边距',
	'padding'		: 'Padding',//'内边距',
	'bg_image'		: 'Hintergrund Bild',//'背景图片',
	'class'			: 'Bezeichnete Klasse',//'指定class',
	'block'			: 'Block',//'模块',
	'frame'			: 'Frame',//'框架',
	'onclick'		: 'onClick',//'点击',
	'onmouseover'		: 'onMouseover',//'滑过',
	'switch_type'		: 'Schalter des Typs',//'切换类型',
	'image'			: 'Bild',//'图片',
	'position'		: 'Position',//'位置',
	'align_left'		: 'Linksbündig',//'居左',
	'align_right'		: 'Rechtsbündig',//'居右',
	'offset'		: 'Offset',//'偏移量',
//!!! mainly the same as 'color' !!!!!!
//	'colour'		: 'Colour',//'色',
	'add_new_title'		: 'Neuen Titel hinzufügen',//'添加新标题',
	'delete_this_sure'	: 'Bist du sicher das du es löschen möchtest? Es kann nicht mehr wiederhergestellt werden.',//'您确实要删除吗,删除以后将不可恢复',
	'loading_content'	: 'Inhalt ladet...',//'正在加载内容...',
	'modified_import'	: 'Du hast einige Modifikationen vorgenommen, bitte importiere sie nachdem sie gespeichert sind, ansonsten erhalten die importierten Daten keine Änderung.',//'您已经做过修改，请保存后再做导出，否则导出的数据将不包括您这次所做的修改。',
	'total'			: 'Insgesammt ',//'共',
	'blocks'		: 'Blöcke',//'个模块',
	'updating_the'		: 'updating #',//'正在更新第',
	'done'			: 'Fertig',//'已完成',
	'start_updating'	: 'Start Updating...',//'开始更新...',
	'update_block_data'	: 'Blockdaten updaten',//'更新模块数据',
	'clear_diy_sure'	: 'Bist du sicher das du die DIY Daten bereinigen möchtest? Es kann nicht mehr wiederhergestellt werden.',//'您确实要清空页面上所在DIY数据吗,清空以后将不可恢复',
	'frame_not_found'	: 'Warnung: Frame wurde nicht gefunden. Bitte Frame hinzufügen.',//'提示：未找到框架，请先添加框架。',
	'apply_all_pages'	: 'Auf allen Seiten anwenden',//'应用于此类全部页面',
	'apply_current_page'	: 'Auf dieser Seite anwenden',//'只应用于本页面',
	'save_temp_sure'	: 'Temporäre Daten speichern?<br />Klicke auf Speichern um die Daten zu speichern, klicke auf Abbrechen um die temporären Daten zu löschen.',//'是否保留暂存数据？<br />按确定按钮将保留暂存数据，按取消按钮将删除暂存数据。',
	'save_temp'		: 'Temporäre Daten speichern',//'保留暂存数据',
	'revert_last_saved'	: 'Bist du sicher das du die zuvor erstellten Ergebnisse speichern möchtest?',//'您确定要恢复到上一版本保存的结果吗？',
	'continue_temp_sure'	: 'Fortsetzen mit DIY mit den temporären Daten?',//'是否继续暂存数据的DIY？',
	'update_completed'	: 'Updating ist Komplett.',//'已更新完成。',
	'tab_label'		: 'Tab Label',//'tab标签',
	'temp_action'		: 'Klick auf den "Fortsetzen" Button um die temporären Daten zu übernehmen,<br />Klicke den "Löschen" Button um die temporären Daten zu löschen.',//'按继续按钮将打开暂存数据并DIY，<br />按删除按钮将删除暂存数据。',
	'continue'		: 'Fortsetzen',//'继续',
	'block_no_rights'	: 'Sorry, you have no permission to add or edit block',//'抱歉，您没有权限添加或编辑模块',

//--------------------------------
//static/js/portal_diy_data.js
	'data_manage'		: 'Direct management of the block data',//'可直接管理模块数据',
	'quit'			: 'Quit',//'退出',
//--------------------------------
//static/js/qshare.js
	'from_tencent'		: 'Ich komme aus der Tencent Microblogging offenen Plattform',//"\u6211\u6765\u81EA\u4E8E\u817E\u8BAF\u5FAE\u535A\u5F00\u653E\u5E73\u53F0",

//--------------------------------
//static/js/register.js

	'username_invalid'	: 'Benutzername enthält ungültige Zeichen',//'用户名包含敏感字符',
	'username_short'	: 'Benutzername ist kürzer als 2 Zeichen',//'用户名小于 3 个字符',
	'username_long'		: 'Benutzername ist länger als 15 Zeichen',//'用户名超过 15 个字符',
	'passwords_not_equal'	: 'Die beiden Passworte stimmen nicht überein',//'两次输入的密码不一致',
	'email_invalid'		: 'E-Mail enthält ungültige Zeichen',//'Email 包含敏感字符',
	'invite_code_invalid'	: 'Einladungs-Code enthält ungültige Zeichen',//'邀请码包含敏感字符',
	'password_fill'		: 'Bitte Passwort eingeben',//'请填写密码',
	'password_again'	: 'Bitte Passwort nochmal eingeben',//'请再次输入密码',
	'email_fill'		: 'Bitte E-Mail Adresse eingeben',//'请输入邮箱地址',
	'length_min'		: ', Minimum length',//', 最小长度为 '
	'chars'			: ' characters',//' 个字符',
	'password_strength'	: 'Password strength: ',//'密码强度:',
	'pw_weak'		: 'Weak',//'弱',
	'pw_middle'		: 'So-so',//'中',
	'pw_strong'		: 'Strong',//'强',
	'pass_short'		: 'Password is too short, must be not less than ',//'密码太短，不得少于 ',
	'digital'		: 'Digital',//'数字',
	'lowercase'		: 'Lowercase letters',//'小写字母',
	'capitals'		: 'Capital letters',//'大写字母',
	'specials'		: 'Special symbols',//'特殊符号',
	'pw_weak_info'		: 'Weak password, the password must contain ',//'密码太弱，密码中必须包含 ',
	'leave_blank_old_pass'	: 'Leave blank if you do not need to change the password',//'如不需要更改密码，此处请留空',

//--------------------------------
//static/js/seditor.js
	'enter_username'	: 'Please enter the user name',//'请输用户名',
	'at_friend'		: '@user, you can remind him to view the post',//'@朋友账号，就能提醒他来看帖子',

//--------------------------------
//static/js/smilies.js

//--------------------------------
//static/js/space_diy.js

	'save_js'		: 'Nach der Ansicht Javascript speichern',//'javascript脚本保存后显示',
	'settings'		: 'Einstellungen',//'设置',

//---------------------------
//static/js/swfupload.js

	'attach_file'		: 'Attachment',

//---------------------------
//static/js/threadsort.js

	'select_please'		: 'Bitte auswählen',//'请选择',
	'required_fill'		: 'Benötigte Felder wurden nicht ausgefüllt',//'必填项目没有填写',
	'select_next_level'	: 'Nächsten Level auswählen',//'请选择下一级',
	'numeric_invalid'	: 'Numerischer Wert ist ungültig',//'数字填写不正确',
	'email_invalid'		: 'E-mail Adresse ist ungültig',//'邮件地址不正确',
	'text_too_long'		: 'Feldwert ist zu lang',//'填写项目长度过长',
	'value_is_greater'	: 'Wert ist größer als das erlaubte Maximum',//'大于设置最大值',
	'value_is_less'		: 'Wert ist kleiner als das erlaubte Minimum',//'小于设置最小值',
	'enter_valid_url'	: 'Please enter correct URL address beginning with http://',//'请正确填写以http://开头的URL地址',

//--------------------------------
//static/js/upload.js

	'file_not_supported'	: 'Sorry, dieser Dateityp wird nicht unterstützt',//'对不起，不支持上传此类文件',
	'wait_upload'		: 'Wait for upload...',//'等待上传...',

//-------------------------------------
//source/function/function_admincp.php
	'version_uptodate'	: 'Du verwendest zur Zeit die Up-to-date Version von Discuz!. Bitte beachte die folgenden Tipps, um rechtzeitig Upgrades machen.',

//-------------------------------------
//api/manyou/cloud_iframe.js
	'add_operation'		: 'In gemeinsame Operationen hinzufügen',//'&#28155;&#21152;&#21040;&#24120;&#29992;&#25805;&#20316;',

//--------------------------------------------
//static/js/googlemap.js + static/js/editor.js

	'map_title'		: 'Google Maps',//'google图',
	'map_insert'		: 'Google Map eingeben',//'插入google地图',
	'map_insert_tips'	: 'Google Maps für Adressen Suche (vorübergehend nur Einzellne unterstützt!)',//'通过搜索插入google地图（暂只支持单点标注）！',
	'map_center_changed'	: 'Das Maps Center wurde geändert!',//'地图中心已经改变！',
	'map_wrong_address'	: 'Falsche Adresse! Adresse wurde nicht gefunden',//' 地址错误，未找到当前地址',

//-------------------------------------
//	''	: '',//'',

'fiction'	: '' // This key MUST BE THE LAST row!

};
