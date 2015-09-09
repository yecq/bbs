/*
	[Discuz!] (C)2001-2009 Comsenz Inc.
	This is NOT a freeware, use is subject to license terms

	Javascript Language variables

	$Id: lang_js.js by Valery Votintsev, codersclub.org
    Traduction par André13 discuz-fr.fr -28.déc.2011- modeur Bertrand
*/

//--------------------------------
//static/js/register.js

// Suggested email domains for registering: // Domaines de messagerie proposés pour inscription:
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
	'Black'			: 'Noir',//'黑色', // 'Black'
	'Sienna'		: 'Terre de Sienne',//'赭色', // 'Sienna'
	'DarkOliveGreen'	: 'Olive verte foncé',//'暗橄榄绿色', //  'Dark Olive Green'
	'DarkGreen'		: 'Vert Foncé',//'暗绿色', // 'Dark Green'
	'DarkSlateBlue'		: 'Gris foncé Bleu',//'暗灰蓝色', // 'Dark Gray Blue'
	'Navy'			: 'Marine',//'海军色', // 'Navy'
	'Indigo'		: 'Bleu indigo',//'靛青色', // 'Indigo'
	'DarkSlateGray'		: 'Vert Foncé',//'墨绿色', //  'Dark Green'
	'DarkRed'		: 'Rouge Foncé',//'暗红色', // 'Dark Red'
	'DarkOrange'		: 'Orange Foncé',//'暗桔黄色', // 'Dark Orange'
	'Olive'			: 'Olive',//'橄榄色',
	'Green'			: 'Vert',//'绿色', // 'Green'
	'Teal'			: 'Sarcelle',//'水鸭色', // 'Teal'
	'Blue'			: 'Bleu',//'蓝色', // 'Blue'
	'SlateGray'		: 'Calcaires',//'灰石色', //  'Limestone'
	'DimGray'		: 'Gris Foncé',//'暗灰色', // 'Dark Gray'
	'Red'			: 'Rouge',//'红色', // 'Red'
	'SandyBrown'		: 'Sable Marron',//'沙褐色', // 'Brown Sand'
	'YellowGreen'		: 'Jaune Vert',//'黄绿色', // 'Yellow Green'
	'SeaGreen'		: 'Mer Verte',//'海绿色', // 'Sea Green'
	'MediumTurquoise'	: 'Vert émeraude',//'间绿宝石', // 'Green emerald'
	'RoyalBlue'		: 'Bleu royal',//'皇家蓝', // 'Royal Blue'
	'Purple'		: 'Violet',//'紫色', // 'Purple'
	'Gray'			: 'Gris',//'灰色', // 'Gray'
	'Magenta'		: 'Rouge Pourpre',//'红紫色', // 'Red Purple'
	'Orange'		: 'Orange',//'橙色',
	'Yellow'		: 'Jaune',//'黄色', //  'Yellow'
	'Lime'			: 'Orange Acide',//'酸橙色', // 'Acid Orange'
	'Cyan'			: 'Bleu Vert',//'青色', // 'Blue Green'
	'DeepSkyBlue'		: 'Ciel bleu profond',//'深天蓝色', // 'Deep Sky Blue'
	'DarkOrchid'		: 'Violet Foncé',//'暗紫色', // 'Dark Purple'
	'Silver'		: 'Argent',//'银色', // 'Silver'
	'Pink'			: 'Rose',//'粉色', // 'Pink'
	'Wheat'			: 'Jaune Clair',//'浅黄色', // 'Light Yellow'
	'LemonChiffon'		: 'Soie Citron',//'柠檬绸色', // 'Lemon Silk'
	'PaleGreen'		: 'Cang vert',//'苍绿色', // 'Cang Green'
	'PaleTurquoise'		: 'Cang joyau vert',//'苍宝石绿', //  'Cang gem Green'
	'LightBlue'		: 'Bleu vif',//'亮蓝色', //  'Bright blue'
	'Plum'			: 'Couleur Prune',//'洋李色', // 'Plum color'
	'White'			: 'Blanc' //'白色' // 'White'
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
	'restore_last_saved'	: 'Etes-vous sûr de vouloir restaurer la dernière sauvegarde?',//'您确定要恢复上次保存?',
	'cut_manually'		: 'Vos paramètres de sécurité du navigateur ne permet pas l\'éditeur d\'exécuter automatiquement l\'opération de découpage. Utilisez le raccourci clavier (Ctrl X) pour terminer cette opération.',//'您的浏览器安全设置不允许编辑器自动执行剪切操作,请使用键盘快捷键(Ctrl+X)来完成',
	'copy_manually'		: 'Vos paramètres de sécurité du navigateur ne permet pas l\'éditeur d\'exécuter automatiquement l\'opération de copie. Utilisez le raccourci clavier (Ctrl C) pour terminer cette opération.',//'您的浏览器安全设置不允许编辑器自动执行拷贝操作,请使用键盘快捷键(Ctrl+C)来完成',
	'paste_manually'	: 'Vos paramètres de sécurité du navigateur ne permet pas l\'éditeur d\'exécuter automatiquement l\'opération de collage. Utilisez le raccourci clavier (Ctrl + V) pour terminer cette opération.',//'您的浏览器安全设置不允许编辑器自动执行粘贴操作,请使用键盘快捷键(Ctrl+V)来完成',
	'graffiti_no_init'	: 'Impossible de trouver des données d\'initialisation Graffiti',//'找不到涂鸦板初始化数据',
	'ie5_only'		: 'Pris en charge uniquement dans IE 5.01 ou version ultérieure',//'只支持IE 5.01以上版本',
	'edit_raw'		: 'Modifier le texte brut',//'编辑源码', // 'Edit Raw Text'
	'plain_text_warn'	: 'Conversion en texte clair perdra un peu de formatage!\nEtes-vous sûr de vouloir continuer?',//'转换为纯文本时将会遗失某些格式。\n您确定要继续吗？', // 'Converting to the plain text will lose some formatting!\nAre you sure you want to continue?'
	'browser_update'	: 'Votre navigateur ne supporte pas cette fonction, Svp. mettre à jour votre version du navigateur',//'你的浏览器不支持此功能，请升级浏览器版本', // 'Your browser does not support this feature, please upgrade your browser version'
	'tips'			: 'Conseils',//'小提示', // 'Tips'

//---------------------------
//static/image/editor/editor_function.js
// USED in: /source/admincp/admincp_feed.php
// USED in: /template/default/home/cpacecp_blog.htm
// USED in: /template/default/portal/portalcp_article.htm
// MOVED TO:
//static/js/editor_function.js
	'wysiwyg_only'		: 'Cette opération est effective uniquement pour le mode WYSIWYG',//'本操作只在多媒体编辑模式下才有效', // 'This operation is effective only for WYSIWYG mode'

//---------------------------
//static/image/admincp/cloud/cloud.js
	'int_cloud_test'	: 'Test autres interfaces de la plateforme de nuages',//'云平台其他接口测试', // 'Testing other cloud platform interface'
	'int_roaming_test'	: 'Test autres interfaces itinérants',//'漫游其他接口测试', // 'Testing other Roaming interface'
	'int_qq_test'		: 'Test QQ Interface Internet',//'QQ互联接口测试', //  'Testing QQ Internet interface'
	'server_busy'		: 'The server is busy, please try again later',//'服务器繁忙，请稍后再试',
	'tested_ok'		: 'The test is successful, time used: ',//'测试成功，耗时 ',
	'seconds'		: ' sec.',//' 秒',

//---------------------------
//static/image/admincp/cloud/qqgroup.js
	'select_topic_to_push'	: 'Choisissez au moins un sujet pour pousser aux articles',//'请至少推送一条头条主题和一条列表主题', // 'Select at least one topic for push to Articles'
	'select_item_to_push'	: 'Choisissez au moins un article pour le pousser aux articles',//'请至少推送一条信息到列表区域', // 'Select at least one item for push to Articles'
	'loading'		: 'Chargement...',//'加载中...', // 'Loading...'
	'push5reached'		: 'Appuyez au post plus de cinq fois et a atteint un certains nombres de fois, dans le droit de résilier un nombres et essayez à nouveau.',//'推送帖子已达到5条，请在右侧取消一些再重试。', // 'Push Post number has reached five, in the right to cancel a number and try again.' // Appuyez le Post est a atteint 5 fois, dans le droit de supprimer certains et essayez à nouveau.
	'click_left'		: 'Cliquez à gauche',//'点击左侧', // 'Click on the left'
	'push_to_list'		: 'Va pousser les informations vers la liste',//'将信息推送到列表', // 'Will push the information to the list'
	'wait_image_upload'	: 'Téléchargement Image, Svp. attendre...',//'图片上传中，请稍后...', //  'Upload image, please wait...'





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

	'prev_month'	: 'Mois Préc.',//'上一月', // 'Prev Month'
	'next_month'	: 'Mois Suiv.',//'下一月', // 'Next Month'
	'select_year'	: 'Choisir Année',//'点击选择年份', // 'Select Year'
	'select_month'	: 'Choisir Mois',//'点击选择月份', //  'Select Month'
	'wday0'		: 'Di',//'日', //  'Su'
	'wday1'		: 'Lu',//'一', // 'Mo'
	'wday2'		: 'Ma',//'二', // 'Tu'
	'wday3'		: 'Me',//'三', // 'We'
	'wday4'		: 'Je',//'四', // 'Th'
	'wday5'		: 'Ve',//'五', // 'Fr'
	'wday6'		: 'Sa',//'六', // 'Sa'
	'month'		: 'Mois',//'月', // 'Month'
	'today'		: 'Aujourd\'hui',//'今天', // 'Today'
	'hours'		: 'Heures',//'点', // 'Hours'
	'minutes'	: 'Minutes',//'分',
	'halfhour'	: 'Half hour',//'半小时',
	'ok'		: 'Ok',//'OK',

//--------------------------------
//static/js/common.js

	'open_new_win'		: 'Ovrir dans un New Fenêtre',//'在新窗口打开', // 'Open in new window'
	'actual_size'		: 'Taille Actuelle',//'实际大小', // 'Actual Size'
	'close'			: 'Fermer',//'关闭', // 'Close'
	'wheel_zoom'		: 'Utilisez la molette de la souris pour Zoomer/Dézoomer l\'image',//'鼠标滚轮缩放图片', // 'Use mouse wheel to zoom in/out the image'
	'reminder'		: 'Rappel',//'提示信息', // 'Reminder'
	'submit'		: 'Envoyer',//'确定', // 'Submit'
	'cancel'		: 'Annuler',//'取消', // 'Cancel'
	'wait_please'		: 'Chargement ...',//'请稍候...',
	'int_error'		: 'Erreur interne, ne peut pas afficher ce contenu',//'内部错误，无法显示此内容', // 'Internal Error, can not display this content'
	'flash_required'	: 'Ce contenu requiert Adobe Flash Player 9.0.124 ou ultérieure',//'此内容需要 Adobe Flash Player 9.0.124 或更高版本', // 'This content requires Adobe Flash Player 9.0.124 or later'
	'flash_download'	: 'Télécharger Flash Player',//'下载 Flash Player', // 'Download Flash Player'
	'day1'			: '1 Jour',//'一天', // '1 Day'
	'week1'			: '1 Semaine',//'一周', // '1 Week'
	'days7'			: '7 Jours',//'7 天', // '7 Days'
	'days14'		: '14 Jours',//'14 天', // '14 Days'
	'month1'		: '1 Mois',//'一个月', // '1 Month'
	'month3'		: '3 Mois',//'三个月', // '3 Months'
	'month6'		: '6 Mois',//'半年', // '6 Months'
	'year1'			: '1 Année',//'一年', // '1 Year'
	'custom'		: 'Personnalisé',//'自定义', //  'Custom'
	'permanent'		: 'Permanent',//'永久',
	'show_all_expr'		: 'Voir tous les Smileys',//'显示所有表情', // 'Show all smiles'
	'page_prev'		: 'Page Préc.',//'上页', // 'Prev Page'
	'page_next'		: 'Page Suiv.',//'下页', // 'Next Page'
	'copy2clipboard'	: 'Copiez au presse papier',//'点此复制到剪贴板', // 'Copy to clipboard'
// ATTENTION!
// The next line must have the same value as in /template.php - 'enter_content' !!!
	'enter_search_string'	: 'Entrez les mots recherchés',//'请输入搜索内容', //  'Enter search words'
	'refresh_q&a'		: 'Actualiser Q&R',//'刷新验证问答', //  'Refresh Q&A'
	'refresh_code'		: 'Actualiser Code',//'刷新验证码', // 'Refresh Code'
	'code_invalid'		: 'Code de sécurité incorrect, Svp. essayez de nouveau',//'验证码错误，请重新填写', //  'Wrong security code, please try again'
	'q&a_invalid'		: 'Mauvaise réponse, Svp. essayez de nouveau',//'验证问答错误，请重新填写', // 'Wrong answer, please try again'
	'code_clipboard'	: 'Le code a été copié dans le presse papier',//'代码已复制到剪贴板', // 'The code was copied to clipboard'
	'enter_link_url'	: 'Entrez le lien URL',//'请输入链接地址', // 'Enter the link URL'
	'enter_link_text'	: 'Entrez le lien Texte',//'请输入链接文字', //  'Enter the link text'
	'enter_image_url'	: 'Entrez URL image',//'请输入图片地址', // 'Enter the image URL'
	'width_optional'	: 'Largeur (optionnel)',//'宽(可选)', // 'Width (optional)'
	'height_optional'	: 'Hauteur (optionnel)',//'高(可选)', // 'Height (optional)'
	'narrow_screen'		: 'Petit Ecran',//'切换到窄版', //  'Narrow screen'
	'wide_screen'		: 'Grand Ecran',//'切换到宽版', // 'Wide screen'
	'logging_wait'		: 'Connexion en cours,Svp. Merci de patienter...',//'登录中，请稍后...', // 'Logging in, please wait...'
	'notices_no'		: '[　　　]',//'【　　　】',
	'notices_yes'		: '[Nouveau]',//'【新提醒】',
	'sec_after_win_closed'	: ' secondes avant que la fenêtre ne se ferme',//' 秒后窗口关闭', // ' seconds before the window closed'
	'sec_after_page_jump'	: ' secondes avant que la page ne se redirige',//' 秒后页面跳转', // ' seconds before the page redirect'
	'jump_now'		: 'Sauter dessuite',//'立即跳转', // 'Jump Now'
	'error_message'		: 'Message Erreur',//'错误信息', // 'Error Message'
	'ctrl_d_favorites'	: 'Pressez Ctrl + D touches pour ajouter aux favoris',//'请按 Ctrl+D 键添加到收藏夹', // 'Press Ctrl + D keys for add to Favorites'
	'non_ie_manually'	: 'Pour les non-IE navigateur Svp. Accueil réglée manuellement',//'非 IE 浏览器请手动将本站设为首页', // 'For non-IE browser please set Homepage manually'
	'blind_enable'		: 'Enable blind experience',//'开启盲人体验',//tc:'開啟盲人體驗',
	'blind_disable'		: 'Disable blind experience',//'关闭盲人体验',//tc:'關閉盲人體驗',

//--------------------------------
//static/js/common_diy.js

	'edit'			: 'Modifier',//'编辑', // 'Edit'
	'warn_not_saved'	: 'Vous avez modifié les données. Si vous quittez, toutes les modifications seront perdues.',//'您的数据已经修改,退出将无法保存您的修改。', // 'You have modified the data. If you exit, all the changes will be lost.'
	'confirm_exit'		: 'Toutes les modifications seront perdues si vous quittez. Etes-vous sûr de vouloir quitter maintenant?',//'退出将不会保存您刚才的设置。是否确认退出？', // 'All the changes will be lost if you exit. Are you sure you want to exit now?'
	'select_image_upload'	: 'Choisissez une image à télécharger',//'请选择您要上传的图片', // 'Select an image to upload'

//--------------------------------
//static/js/common_extra.js
//	'wait_please'		: 'Loading ...',//'请稍候...',
	'copy_failed'		: 'Copie échoué, Svp. choisissez "Autoriser Accès"',//'复制失败，请选择“允许访问”', // 'Copy failed, please select "Allow access"'
	'prev'			: 'Préc.',//'上一张', // 'Prev.'
	'next'			: 'Suiv.',//'下一张', // 'Next'
        'shortcut_add'		: 'Adding a desktop shortcut',//'添加桌面快捷',
        'shortcut_1'		: '1. Click "',//'1、点击"',
        'shortcut_1_1'		: 'Download desktop shortcut',//'下载桌面快捷',
        'shortcut_1_2'		: '", and after the download is completed, you can move the file to your desktop',//'"，下载完成后，可移动文件到系统桌面',
        'shortcut_2'		: '2. Click "',//'2、点击"',
        'shortcut_2_1'		: 'Download icon file',//'下载ICO图标',
        'shortcut_2_2'		: '", and after the download is completed, right-click on the desktop shortcut file -&gt; Properties -&gt; Change Icon, and select the downloaded ICO icon',//'"，下载完成后，右击桌面快捷文件->属性->更改图标，选择已下载的ICO图标即可',

//--------------------------------
//static/js/editor.js

	'restore_size_edit'	: 'Reprise Taille Editeur',//'恢复编辑器大小', // 'Resume editor size'
	'full_screen_edit'	: 'Editeur en plein écran',//'全屏方式编辑', // 'Full Screen Editor'
	'current_length'	: 'Longueur Actuelle',//'当前长度', // 'Current Length'
	'bytes'			: 'octets',//'字节', // 'bytes'
	'system_limit'		: 'Limite Système',//'系统限制', // 'System limit'
	'up_to'			: '~',//'到',
	'check_length'		: 'Comptez longueur',//'字数检查', // 'Length Count'
	'data_restored'		: 'Données ont été Restaurées',//'数据已恢复', // 'The Data was restored'
	'data_saved'		: 'Données Sauvées',//'数据已保存', // 'Data saved'
	'clear_all_sure'	: 'Etes-vous sûr de vouloir effacer tout le contenu?',//'您确认要清除所有内容吗？', //  'Are you sure to clear all the contents?'
	'hide_content'		: 'Cacher le contenu',//'请输入要隐藏的信息内容',
	'free_content'		: 'Si vous ne fixer pas un prix au post, les informations saisies peuvent être vus gratuitement avant de pouvoir acheter le contenu,',//'如果您设置了帖子售价，请输入购买前免费可见的信息内容', // If you did not set a post price, the entered information can be seen free of charge before purchasing the content
	'when_thread_replied'	: 'Voir que si l\'utilisateur Répond au Sujet ',//'只有当浏览者回复本帖时才显示',
	'when_points_more'	: 'Voir que lorsque l\'utilisateur à des points qui sont supérieure ',//'只有当浏览者积分高于', //  'Show only when the user points is more than '
	'when_show'		: 'Si montrer',//'时才显示', // 'When to show'
	'table_rows'		: 'Lignes du Tableau',//'表格行数', // 'Table Rows'
	'table_columns'		: 'Colonnes du Tableau',//'表格列数', // 'Table Columns'
	'table_width'		: 'Largeur du Tableau: ',//'表格宽度: ', //  'Table Width: '
	'bg_color'		: 'Couleur de Fond',//'背景颜色', // 'Background Color'
	'table_intro0'		: 'Conseils rapides tableau d\'écriture',//'快速书写表格提示', // 'Quick write table tips'
	'table_intro1'		: '&quot;[tr=color]&quot; Définir la couleur de fond de la ligne<br />&quot;[td=Width]&quot; Définir la largeur des colonnes<br />&quot;[td=Column_Span,Row_Span,Width]&quot; Définir la Ligne/Portée Colonne et Largeur<br /><br />Exemple de Tableau écrit Rapidement : ',//'“[tr=颜色]” 定义行背景<br />“[td=宽度]” 定义列宽<br />“[td=列跨度,行跨度,宽度]” 定义行列跨度<br /><br />快速书写表格范例：', // '&quot;[tr=color]&quot; Define the row background color<br />&quot;[td=Width]&quot; Define the column width<br />&quot;[td=Column_Span,Row_Span,Width]&quot; Define the Row/Column Span and Width<br /><br />Fast writing table example: '
	'table_intro2'		: '[table]<br />Nom:|Discuz!<br />Version:|X1.5<br />[/table]',//'[table]<br />Name:|Discuz!<br />Version:|X1<br />[/table]',
	'table_intro3'		: 'Utilisez &quot;|&quot; pour séparer les lignes, s\'il y a des &quot;|&quot; caractères dans les données, le remplacer par &quot;\\|&quot;, rangées séparées avec &quot;\\n&quot;.',//'用“|”分隔每一列，表格中如有“|”用“\\|”代替，换行用“\\n”代替。', // 'Use &quot;|&quot; to separate rows, if there is the &quot;|&quot; character in the data, replace it with &quot;\\|&quot;, separate rows with &quot;\\n&quot;.'
	'audio_url'		: 'URL entrée de fichier de musique',//'请输入音乐文件地址', // 'Input URL of music file'
	'video_url'		: 'URL Entrée de fichier vidéo',//'请输入视频地址', // 'Input URL of video file'
	'auto_play'		: 'Lecture Automatique?',//'是否自动播放', // 'Autoplay?'
	'flash_url'		: 'Svp. URL entrée du fichier Flash ',//'请输入 Flash 文件地址', // 'Please input URL of Flash file '
	'enter_please'		: 'Svp. entrez la',//'请输入第', // 'Please enter the'
	'nth_parameter'		: '-th paramètre',//' 个参数', // '-th parameter'
	'font'			: 'Font',//'字体', // 'Font'
	'full_screen'		: 'Plein écran',//'全屏', // 'Full Screen'
	'restore_size'		: 'Restaurer la taille',//'恢复', // 'Restore size'
	'general'		: 'Mode Général',//'常用', // 'General Mode'
	'simple'		: 'Mode Avancé',//'高级', // 'Advanced Mode'
	'bad_browser'		: 'Votre navigateur ne supporte pas cette fonction',//'你的浏览器不支持此功能', // 'Your browser does not support this feature'
	'click_autosave_enable'	: 'Cliquez ici pour activer la sauvegarde automatique',//'点击开启自动保存', // 'Click here for enable the auto-saving'
	'autosave_enable'	: 'Activer la sauvegarde automatique',//'开启自动保存', // 'Enable the auto-saving'
	'autosave_disable'	: 'Désactiver la sauvegarde automatique',//'点击关闭自动保存', // 'Disable the auto-saving'
	'autosave_enabled'	: 'Les Données de sauvegarde automatique Activé',//'数据自动保存已开启', // 'Data auto-saving enabled'
	'autosave_disabled'	: 'Les Données de sauvegarde automatique Désactivé',//'数据自动保存已关闭', // 'Data auto-saving disabled'
	'data_saved_at'		: 'Les données enregistrées en',//'数据已于', // 'Data saved at'
	'saved_time'		: '',//NOT REQUIRED IN ENGLISH!//'保存',
	'sec_before_saving'	: 's avant que la sauvegarde automatique',//'秒后保存', // 
	'insert_quote'		: 'Insérez la Citation',//'请输入要插入的引用', // 
	'insert_code'		: 'Insérez le Code',//'请输入要插入的代码', // 'Insert the Code'
	'enter_item_list'	: 'Entrez la liste des articles.\r\nLaissez vide, ou cliquez sur Annuler.',//'输入一个列表项目.\r\n留空或者点击取消完成此列表.', //    ....... // Leave blank, or click Cancel
	'width'			: 'Largeur',//'宽', //  'Width'
	'height'		: 'Hauteur',//'高', // 'Height'
	'audio_support'		: 'Pris en charge wma, mp3, ra, rm, et autres formats de musique<br />Exemple: http://server/audio.wma',//'支持 wma mp3 ra rm 等音乐格式<br />示例: http://server/audio.wma', // 
	'video_support'		: 'Pris en charge pour Youku, potatoes, 56, 6, vidéo cool et des stations d\'autres vidéos en <br /> soutien wmv avi rmvb mov swf flv formats vidéo <br /> Exemple: http://server/movie.wmv',//'支持优酷、土豆、56、酷6等视频站的视频网址<br />支持 wmv avi rmvb mov swf flv 等视频格式<br />示例: http://server/movie.wmv', // 'Supported for Youku, potatoes, 56, 6, cool video and other video stations at <br /> support wmv avi rmvb mov swf flv video formats <br /> Example: http://server/movie.wmv'
	'flash_support'		: 'Pris en charge Flash formats: swf flv <br /> Example: http://server/flash.swf',//'支持 swf flv 等 Flash 网址<br />示例: http://server/flash.swf', // 'Supported Flash formats: swf flv <br /> Example: http://server/flash.swf'
	'paste_from_word'	: 'Coller un contenu à partir de Word',//'从 Word 粘贴内容', //  'Paste a content from Word'
	'paste_word_tip'	: 'Svp. utiliser le raccourci (Ctrl + V) pour coller le contenu du document Word',//'请通过快捷键(Ctrl+V)把 Word 文件中的内容粘贴到上', // 'Please use shortcut (Ctrl + V) to paste the content from Word document'
	'show_tips'		: 'Show Tips',//'友情提示',
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

	'del_thread_sure'	: 'Etes-vous sûr de vouloir supprimer ce fil de discussions HOTs?',//'您确认要把此主题从热点主题中移除么？', // 'Are you sure you want to remove this thread from hot threads?'
	'there_are'		: 'Il y a ',//'有', // 'There are '
	'new_reply_exists'	: 'Le sujet a de Nouvelles réponses, cliquez sur Afficher',//'有新回复的主题，点击查看', // 'The thread has new replies, click on View'
//--------------------------------
//static/js/forum_google.js

	'search_net'	: 'Recherche sur le Net',//'网页搜索', //  'Search in the Net'
	'search_site'	: 'Recherche sur le Site',//'站内搜索', // 'Search in the site'
	'search'	: 'RechercheR',//'搜索', // 'search'

//--------------------------------
//static/js/forum_moderate.js

	'choose_tread'	: 'Choisir le fil du sujet à modéré',//'请选择需要操作的帖子', //  'Choose the thread to moderate'

//--------------------------------
//static/js/forum_post.js

	'internal_error'	: 'Erreur Interne du Serveur',//'内部服务器错误', // 'Internal Server Error'
	'upload_ok'		: 'Transféré avec Succès',//'上传成功', // 'Uploaded Successfully'
	'ext_not_supported'	: 'Cette extension de fichier n\'est pas supporté',//'不支持此类扩展名', // 'This file extension is not supported'
	'sorry_ext_not_supported'	: 'Désolé, l\'extension du fichier n\'est pas pris en charge.',//'对不起，不支持上传此类扩展名的附件。', // 
	'illegal_image_type'	: 'Type Image Illégale',//'图片附件不合法', // 'Illegal image type'
	'can_not_save_attach'	: 'Impossible de sauvegarder le fichier en Pièce jointe',//'附件文件无法保存', // 'Can not save Attachment file'
	'invalid_file'		: 'Aucun fichier légitime a été téléchargé',//'没有合法的文件被上传', // 'No legitimate file was uploaded'
	'illegal_operation'	: 'Opération Illégale',//'非法操作', // 'Illegal Operation'
	'enter_content'		: 'Entrez le titre ou le contenu',//'请完成标题或内容栏', // 'Enter the title or content'
	'select_category'	: 'Choisissez une catégorie correspondante pour le Sujet',//'请选择主题对应的分类', // 'Select a corresponding category for the thread'
	'select_category_info'	: 'Choisissez une catégorie correspondant à l\'information sur le sujet',//'请选择主题对应的分类信息', // 'Select a corresponding category for the thread information'
	'title_long'		: 'Titre en longueur dépasse la limite de 255 caractères',//'您的标题超过 80 个字符的限制', // 'Title length exceeds the limit of 255 characters'
	'content_long'		: 'La longueur du contenu ne répond pas aux exigences.\n\n',//'您的帖子长度不符合要求。\n\n', //  'The content length does not meet the requirements.\n\n'
	'ignore_pending_attach'	: 'Il y a des pièces jointes en attente, vous êtes sûr de vouloir ignorer?',//'您有等待上传的附件，确认不上传这些附件吗？', // 'There are pending attachments, are you sure to ignore it?'
	'still_uploading'	: 'Certaines pièces jointes sont toujours en téléchargements, Svp. patienter. Le sujet sera publié automatiquement après que les fichiers ont étés téléchargés...',//'您有正在上传的附件，请稍候，上传完成后帖子将会自动发表...', // 'Some attachments are still uploading, please wait. The thread will be published automaticly after the files was uploaded...'
	'no_data_recover'	: 'Aucune donnée ne peut être récupéré!',//'没有可以恢复的数据！', // 'No data can be recoverd!' - 'No data can be recovered!'
	'content_overwrite'	: 'Attention:\nContenu actuel sera remplacé par les données enregistrées!\nEtes-vous sûr de restaurer les données?',//'此操作将覆盖当前帖子内容，确定要恢复数据吗？', // 'Warning:\nCurrent content will be overwritten with the saved data!\nAre you sure to restore the data?'
	'upload_finished'	: 'Le téléchargement est terminé!',//'附件上传完成！', // 'Uploading is finished!'
	'successfull'		: 'Réussie:',//'成功', //  'Successfull:'
	'failed'		: 'échec:',//'失败', //  'Failed:'
	'ones'			: 'celles',//'个', // 'ones'
	'uploading'		: 'Chargement...',//'上传中...', // 'Uploading...'
	'select_image_files'	: 'Choisissez les fichiers images',//'请选择图片文件', //  'Select image files'
	'delete'		: 'Supprimer',//'删除', // 'Delete'
	'contains'		: 'Contient ',//'包含', // 'Contains ' 
	'img_attached_num'	: 'images joints',//'个图片附件', // 'images attached'
	'files attached_num'	: 'fichiers joints',//'个附件', // 'files attached'
	'images'		: 'Images',//'图片', // 'Images'
	'attachments'		: 'pièces jointes',//'附件', // 'attachments'
//	'upload_failed'		: 'Echec lors du transfert',//'上传失败', // 'Upload Failed'

	'attach_big'		: 'Taille des pièces jointes dépasses la limite autorisée',//'服务器限制无法上传那么大的附件', // 'Attachment size exceeds the allowed limit'
	'attach_group_big'	: 'Vous avez des pièces jointe du groupe d\'utilisateurs dont la taille totale dépasse la limite autorisée',//'用户组限制无法上传那么大的附件', //  'You user group total attachment size exceeds allowed limit'
	'attach_type_big'	: 'Ce type de fichier joint la taille totale dépasse la limite autorisée',//'文件类型限制无法上传那么大的附件', // 'This file type total attachment size exceeds allowed limit'
	'attach_daily_big'	: 'Taille des pièces jointes totale quotidienne dépasse la limite autorisée',//'本日已无法上传更多的附件', // 'Daily total attachment size exceeds allowed limit'
	'validating_q&a'	: 'Validation des Q & R, Svp.veuillez patienter, merci',//'验证问答校验中，请稍后', // 'Validating the Q & A, please wait'
	'validating_code'	: 'Validation du code, Svp.veuillez patienter, merci',//'验证码校验中，请稍后', // 'Validating the code, please wait'
	'attach_type_disabled'	: 'Ce type de pièce jointe est désactivé',//'附件类型被禁止', //  'This attachment type is disabled'
	'attach_max'		: 'Ne dépassant pas',//'不能超过', //  'Not larger than'
	'vote_max_reached'	: 'A atteint le nombre maximum de votes: ',//'已达到最大投票数', //  'Reached the maximum number of votes: '
	'no_remote_attach'	: 'Désolé, aucune pièce jointe distant ou liée',//'抱歉，暂无远程附件', // 'Sorry, no remote attachment'
	'delete_post_sure'	: 'Sûr que vous voulez supprimer ce message?',//'确定要删除该帖子吗？', // 'Sure you want to delete this post?'
	'feed_add_confirm'	: 'Because of you have set read permission or sell the post, do you confirm also the broadcast to your listeners to see?',//'由于您设置了阅读权限或出售帖，您确认还转播给您的听众看吗？',
//--------------------------------
//static/js/forum_viewthread.js

	'best_answer_sure'	: 'Etes-vous sûr de vouloir définir ce poste en tant que "Meilleure Réponse"?',//'您确认要把该回复选为“最佳答案”吗？', //  'Are you sure you want to define this post as the "Best Answer"?'
	'premoderated'		: 'Les réponses à cette catégorie doivent être vérifiés. Votre message sera affiché après la vérification',//'本版回帖需要审核，您的帖子将在通过审核后显示', //  'Replies to this category must be audited. Your post will be displayed after the verification'
	'credit_confirm1'	: 'Coûts du téléchargement ',//'下载需要消耗', // 'Download costs '
	'credit_confirm2'	: ' points, êtes-vous sûr de télécharger?',//'，您是否要下载？', //  ' points, are you sure to download?'
	'thread_to_clipboard'	: 'Sujet du fil de discussion a été copié dans le presse-papiers',//'帖子地址已经复制到剪贴板', //  'Thread address was copied to the clipboard'
	'click_to_enlarge'	: 'Cliquez pour agrandir',//'点击放大', // 'Click to enlarge'
	'notify_on_reply'	: 'Recevoir une notification réponse',//'接收回复通知', // 'Receive reply notification'
	'notify_on_reply_cancel'	: 'Annuler la notification réponse',//'取消回复通知', // 'Cancel reply notification'
	'share_connection_failed'	: 'Connexion à part échoué, Svp. réessayer plus tard',//'分享服务连接失败，请稍后再试', // 'Connection to share failed, please try again later'
	'qq_bind'		: 'Svp. lier votre compte QQ',//'请先绑定QQ账号', // 'Please bind your QQ account'
	'quote_by'		: 'Citation par .*? dans .*? code',//'本帖最后由 .*? 于 .*? 编辑', // 'Quote by .*? in .*? code'
	'copy_code'		: 'Copiez le code',//'复制代码', // 'Copy code'
	'download_pocket_forum'	: 'Download Pocket Forum',//'下载掌上论坛',
	'pocket_forum_android'	: 'If Andriod version, Scan thw QR-code can be downloaded directly to the phone',//'Andriod版本，扫描二维码可以直接下载到手机',
	'pocket_forum_android_alt'	: 'Suitable for Android-based smartphones like Samsung/HTC/etc',//'适用于装有安卓系统的三星/HTC/小米等手机',
	'pocket_forum_ios'	: 'If iPhone used, Scan thw QR-code can be downloaded directly to the phone',//'iPhone版本，扫描二维码可以直接下载到手机',
	'pocket_forum_ios_alt'	: 'Suitable for Apple mobile phone',//'适用于苹果手机',

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
	'day'			: 'Jour',//'日', //  'Day'
	'category_empty'	: 'Nom de la catégorie ne peut pas être vide!',//'分类名不能为空！', // 'Category name can not be empty!'

//--------------------------------
//static/js/home_ajax.js

//	'close'			: 'Close',//'关闭',
//	'wait_please'		: 'Loading ...',//'请稍候...',

//--------------------------------
//static/js/home_blog.js

	'title_length_invalid'	: 'Longueur du titre (devrait être de 1 ~ 80 caractères) ne répond pas au condition',//'标题长度(1~80字符)不符合要求', //  'Title length (should be 1~80 characters) does not meet the requirement'

//--------------------------------
//static/js/home_common.js

	'show_orig_image'	: 'Afficher cette image originale dans une New fenêtre',//'点击图片，在新窗口显示原始尺寸', // 'Show original image in a new window'
	'continue_sure'		: 'Etes-vous sûr de procéder?',//'您确定要执行本操作吗？', // 'Are you sure to proceed?'
	'select_item'		: 'Svp. choisir l\'élément pour fonctionner avec',//'请选择要操作的对象', //  'Please choose the item to operate with'
	'image_url_invalid'	: 'Incorrecte image URL',//'图片地址不正确', // 'Incorrect image URL'
	'audio_url_invalid'	: 'Incorrecte URL audio, ne peut pas être vide',//'音乐地址错误，不能为空', // 'Incorrect audio URL, can not be empty'

//!!!!! MayBe wrap this names!!
	'collapse'		: 'Réduire',//'收起', // 'Collapse'
	'expand'		: 'Développer',//'展开', // 'Expand'

//--------------------------------
//static/js/home_friendselector.js

	'select_max'		: 'Vous pouvez choisir jusqu\'à',//'最多只允许选择', // 'You can select up to'
	'users'			: 'utilisateurs',//'个用户', //  'users'
	'allready_exists'	: 'Existe déjà',//'已经存在', //  'Already exists'

//--------------------------------
//static/js/home_manage.js

	'you_friends_now'	: 'Vous êtes maintenant des amis, vous pouvez ',//'你们现在是好友了，接下来，您还可以：', // 'You are friends now, you can '
	'leave_message'		: 'Laisser un message',//'给TA留言', //  'Leave a message'
	'or'			: 'ou',//'或者', // 'or'
	'send_greeting'		: 'Envoyer voeux',//'打个招呼', // 'send greeting'
	'reply'			: 'Répondre',//'回复', // 'Reply'
	'comment'		: 'Comment.',//'评论', // 'Comment'
	'close_list'		: 'Fermer la Liste',//'收起列表', //  'Close the List'
	'more_feeds'		: 'Plus de flux',//'更多动态', // 'More Feeds'

//--------------------------------
//static/js/home_uploadpic.js

	'image_type_invalid'	: 'Désolé, l\'image avec une telle extension n\'est pas pris en charge',//'对不起，不支持上传此类扩展名的图片', //  'Sorry, image with such extension does not supported'
	'insert_to_content'	: 'Cliquez ici pour l\'insérer dans le contenu à la position actuelle du curseur',//'点击这里插入内容中当前光标的位置', // 'Click here to insert into the content at current cursor position'
	'insert'		: 'Insérer',//'插入', // 'Insert'
	'image_description'	: 'Description Image',//'图片描述', // 'Image Description'
	'uploading_wait'	: 'Chargement, Svp. attendre',//'上传中，请等待', // 'Uploading, Please wait'
	'retry'			: 'Réessayer',//'重试', //  'Retry'

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

	'delete_sure'		: 'Etes-vous sûr de vouloir supprimer ces données?',//'您确定要删除该数据吗？', // 'Are you sure to delete this data?'
	'ignore_sure'		: 'Etes-vous sûr d\'ignorer ces données?',//'您确定要屏蔽该数据吗？', // 'Are you sure to ignore this data?'
	'to'			: 'à',//'到', // 'to'

	'choose_block'		: 'Choisissez un Bloc',//'选择模块', // 'Choose block'
	'blocks_found1'		: 'Trouvé',//'找到', // 'Found'
	'blocks_found2'		: 'Blocs Correspondants',//'个相应的模块', // 'corresponding blocks'
	'blocks_not_found'	: 'Pas de blocs correspondants',//'没有相应的模块', //'No corresponding blocks' 
	'select_block'		: 'Svp. choisissez un bloc!',//'请选择一个模块！', // 'Please select a block!'
	'show_settings'		: 'Voir les paramètres',//'展开设置项', // 'Show settings'
	'hide_settings'		: 'Cacher les paramètres',//'收起设置项', // 'Hide settings'
	'block_name_empty'	: 'Nom du bloc ne peut pas être vide',//'模块标识不能为空', // 'Block name can not be empty'
	'block_convert_sure'	: 'Etes-vous sûr que vous voulez convertir le bloc de type',//'你确定要转换模块的类型从', //  'Are you sure you want to convert the block from type'
	'back'			: 'Retour',//'返回', // 'Back' 
	'settings_expand'	: 'Développer Paramètre',//'展开设置项', // 'Expand setting'
	'settings_hide'		: 'Cacher Paramètre',//'收起设置项', // 'Hide setting'
	'custom_content_error'	: 'Erreur de contenu personnalisé! Le code HTML: ',//'自定义内容错误，', // 'Custom content error! HTML code: '
	'html_error'		: 'HTML Code: ',//'HTML代码：',
	'tags_not_match'	: ' - Mots clés ou Tags ne correspondent pas',//' 标签不匹配', // ' - Tags does not match'
	'entered'		: 'Have entered ',//'已输入 ',
	'exceed'		: 'Exceed ',//'超出 ',
	'title_length_bad'	: 'The title is incorrect',//'标题长度不正确',
	'summary_length_bad'	: 'Summary length is incorrect',//'简介长度不正确',

//--------------------------------
//static/js/portal_diy.js

	'choose_style'		: 'Choisir un style',//'选择样式', // 'Choose a Style'
	'style'			: 'Style',//'样式',
	'style1'		: 'Style1',//'样式1',
	'style2'		: 'Style2',//'样式2',
	'style3'		: 'Style3',//'样式3',
	'style4'		: 'Style4',//'样式4',
	'style5'		: 'Style5',//'样式5',
	'style6'		: 'Style6',//'样式6',
	'style7'		: 'Style7',//'样式7',
	'no_border'		: 'Aucun bord du Cadre',//'无边框框架',
	'no_border_no_margin'	: 'Aucun bord, Aucune marge',//'无边框且无边距',

	'title'			: 'Titre',//'标题', // 'Title'
	'attribute'		: 'Attribut',//'属性', // Attribute
	'data'			: 'Donnée',//'数据', // 'data'
	'update'		: 'Mise à jour',//'更新', // 'Update'
	'export'		: 'Exporter',//'导出', // 'Export'
	'repeat'		: 'Répéter',//'平铺', // 'Repeat'
	'no_repeat'		: 'Pas de répétition',//'不平铺', //  'No repeat'
	'repeat_x'		: 'Répéter Horizontal',//'横向平铺', // 'Repeat Horizontal'
	'repeat_y'		: 'Répéter Vertical',//'纵向平铺', // 'Repeat Vertical'
	'no_style'		: 'Aucun style',//'无样式', // 'No style'
	'solid_line'		: 'Solid Line',//'实线',
	'dotted_line'		: 'Ligne en pointillé',//'点线', // 'Dotted Line'
	'dashed_line'		: 'Ligne pointillée',//'虚线', // 'Dased Line'
	'link'			: 'Lien',//'链接', //  'Link'
	'border'		: 'Bord',//'边框', // 'Border'
	'size'			: 'Taille',//'大小', // 'Size'
	'color'			: 'Couleur',//'颜色', //  'Color'
	'separate_config'	: 'Config. séparés',//'分别设置', // 'Separate Config'
	'right'			: 'Droit',//'右', // 'Right'
	'bottom'		: 'Dessous',//'下', // 'Bottom'
	'top'			: 'Top',//'上',
	'left'			: 'Gauche',//'左', // 'Left'
	'margin'		: 'Marge',//'外边距', //  'Margin'
	'padding'		: 'Remplissage',//'内边距', // 'Padding'
	'bg_image'		: 'Image de Fond',//'背景图片', // 'Background Image'
	'class'			: 'Désignation des Catégories',//'指定class', // 'Designated Class'
	'block'			: 'Bloc',//'模块', // 'Block'
	'frame'			: 'Cadre',//'框架', // 'Frame'
	'onclick'		: 'SurClic',//'点击', // 'onClick'
	'onmouseover'		: 'SurvolSouris',//'滑过', //  'onMouseover'
	'switch_type'		: 'Type de Commutateur',//'切换类型', // 'Switch Type'
	'image'			: 'Image',//'图片',
	'position'		: 'Position',//'位置',
	'align_left'		: 'Aligné à gauche',//'居左', // 'Left Align'
	'align_right'		: 'Aligné à droite',//'居右',  // 'Right Align'
	'offset'		: 'décalage',//'偏移量', // 'Offset'
//!!! mainly the same as 'color' !!!!!!
//	'colour'		: 'Colour',//'色',
	'add_new_title'		: 'Ajout. New Titre',//'添加新标题', // 'Add New Title'
	'delete_this_sure'	: 'Etes-vous sûr de le supprimer? Il ne peut pas être restauré si vous le supprimez.',//'您确实要删除吗,删除以后将不可恢复', // 'Are you sure to delete it? It can not be restored if you delete it.'
	'loading_content'	: 'Chargement du contenu...',//'正在加载内容...',  // 'Loading content...'
	'modified_import'	: 'Vous avez fait quelques modifications, Svp. à l\'importation après l\'avoir enregistré, sinon les données importées ne seront  pas inclus dans la modification cette fois-ci..',//'您已经做过修改，请保存后再做导出，否则导出的数据将不包括您这次所做的修改。', // 'You have made some modifications, please import it after you save it, otherwise the imported data won\'t include modification of this time.'
	'total'			: 'Total ',//'共',
	'blocks'		: 'blocs',//'个模块',
	'updating_the'		: 'actualisation #',//'正在更新第', // 'updating #'
	'done'			: 'fini',//'已完成', // 'done'
	'start_updating'	: 'Démarrer la mise à jour...',//'开始更新...',  // 'Start Updating...'
	'update_block_data'	: 'Mise à Jour des Blocs de Données',//'更新模块数据', // 'Updating block data'
	'clear_diy_sure'	: 'Etes-vous sûr de vouloir effacer la page de données en cours de BRICO DIY? Il ne peut pas être restauré si vous décidé de le nettoyé.',//'您确实要清空页面上所在DIY数据吗,清空以后将不可恢复', // 'Are you sure to clear the current page DIY data? It can not be restored if you clear it.'
	'frame_not_found'	: 'Attention: Frame ou Cadre non trouvé, Svp. ajouter la frame.',//'提示：未找到框架，请先添加框架。', // 'Warning: Frame not found, please add frame.'
	'apply_all_pages'	: 'Appliquer à tous les pages de ce type',//'应用于此类全部页面',  // 'Apply to all this type pages'
	'apply_current_page'	: 'Appliquer à la page Actuelle',//'只应用于本页面', // 'Apply to current page'
	'save_temp_sure'	: 'Sauvegarder les Données Temporaires?<br />Cliquez sur Envoyer pour enregistrer les données temporaires, cliquez sur Annuler pour effacer les données temporaires.',//'是否保留暂存数据？<br />按确定按钮将保留暂存数据，按取消按钮将删除暂存数据。', // 'Save temporary data?<br />Click submit to save the temporary data, click cancel to delete the temporary data.'
	'save_temp'		: 'Enregistrer les Données Temporaires',//'保留暂存数据',  // 'Save the temporary data'
	'revert_last_saved'	: 'Etes-vous sûr de vouloir revenir à la version précédente des résultats enregistrés?',//'您确定要恢复到上一版本保存的结果吗？', // 'Are you sure you want to revert to previous version of saved results?'
	'continue_temp_sure'	: 'Continuer le DIY BRICO avec des données temporaires?',//'是否继续暂存数据的DIY？',  // 'Continue to DIY with temporary data?'
	'update_completed'	: 'La Mise à Jour est Terminée.',//'已更新完成。',  // 'Updating is completed.'
	'tab_label'		: 'Tab Etiquettes',//'tab标签',  // 'Tab Label'
	'temp_action'		: 'Cliquez sur le bouton "Continuer" pour charger les données temporaires dans le style actuel,<br />Cliquez sur le bouton "Supprimer"  pour supprimer des données temporaires.',//'按继续按钮将打开暂存数据并DIY，<br />按删除按钮将删除暂存数据。', // 'Click the "Continue" button to load the temporary data into current style,<br />Click the "Delete" button for delete temporary data.'
	'continue'		: 'Continue',//'继续',
	'block_no_rights'	: 'Sorry, you have no permission to add or edit block',//'抱歉，您没有权限添加或编辑模块',

//--------------------------------
//static/js/portal_diy_data.js
	'data_manage'		: 'Direct management of the block data',//'可直接管理模块数据',
	'quit'			: 'Quit',//'退出',
//--------------------------------
//static/js/qshare.js
	'from_tencent'		: 'Je viens de microblogging Tencent une plateforme ouverte',//"\u6211\u6765\u81EA\u4E8E\u817E\u8BAF\u5FAE\u535A\u5F00\u653E\u5E73\u53F0", // 'I come from Tencent microblogging an open platform'

//--------------------------------
//static/js/register.js

	'username_invalid'	: 'Nom Utilisateur Contient des Caractères Invalides',//'用户名包含敏感字符', // 'User name contains invalid characters'
	'username_short'	: 'Nom Utilisateur est Infèrieure a 2 Caractères',//'用户名小于 3 个字符', // 'User name is shorter than 3 characters'
	'username_long'		: 'Nom Utilisateur est Plus Long que 15 Caractères',//'用户名超过 15 个字符',  // 'User name is longer than 15 characters'
	'passwords_not_equal'	: 'Les 2 Mots de Passe ne Correspondent Pas',//'两次输入的密码不一致',  // 'Two passwords does not match'
	'email_invalid'		: 'E-mail Contient des Caractères Invalides',//'Email 包含敏感字符', // 'Email contains invalid characters'
	'invite_code_invalid'	: 'Code Invitation Contient des Caractères Invalides',//'邀请码包含敏感字符', // 'Invitation code contains invalid characters'
	'password_fill'		: 'Svp. Remplir le Mot de Passe',//'请填写密码',  // 'Please fill the password'
	'password_again'	: 'Svp. Entrez le Mot de Passe',//'请再次输入密码',  // 'Please enter the password again'
	'email_fill'		: 'Svp. entrez une adresse E-mail',//'请输入邮箱地址',  // 'Please enter email address'
	'length_min'		: ', Minimum length',//', 最小长度为 '
	'chars'			: ' characters',//' 个字符',
	'password_strength'	: 'Password strength: ',//'密码强度:',
	'pw_weak'		: 'Weak',//'弱',
	'pw_middle'		: 'Middle',//'中',
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

	'save_js'		: 'Enregistrer le javascript après son Affichage',//'javascript脚本保存后显示', // 'Save the javascript after the show'
	'settings'		: 'Réglages',//'设置', // 'Settings'

//---------------------------
//static/js/swfupload.js

	'attach_file'		: 'Attachment',

//---------------------------
//static/js/threadsort.js

	'select_please'		: 'Choisissez Svp.',//'请选择',  // 'Select please'
	'required_fill'		: 'Les champs obligatoires ne sont pas remplis',//'必填项目没有填写', // 'Required fields not filled'
	'select_next_level'	: 'Svp. Choisir le prochain niveau',//'请选择下一级', // 'Please select the next level'
	'numeric_invalid'	: 'La valeur numérique est invalide',//'数字填写不正确',  // 'Numeric value is invalid'
	'email_invalid'		: 'Adresse E-mail est invalide',//'邮件地址不正确',  // 'E-mail address is invalid'
	'text_too_long'		: 'Valeur du champ est trop long',//'填写项目长度过长',  // 'Field value is too long'
	'value_is_greater'	: 'Value is greater than the maximum',//'大于设置最大值',
	'value_is_less'		: 'La valeur est inférieure au minimum',//'小于设置最小值', // 'Value is less than minimum'
	'enter_valid_url'	: 'Please enter correct URL address beginning with http://',//'请正确填写以http://开头的URL地址',

//--------------------------------
//static/js/upload.js

	'file_not_supported'	: 'Désolé, ce type de fichier n\'est pas supporté',//'对不起，不支持上传此类文件', // 'Sorry, this file type is unsupported'
	'wait_upload'		: 'Wait for upload...',//'等待上传...',

//-------------------------------------
//source/function/function_admincp.php
	'version_uptodate'	: 'Vous utilisez actuellement Up-to-date de la version de Discuz! programme. Svp. consulter les conseils suivants pour apporter des améliorations en temps opportun.', // 'You are currently using Up-to-date version of Discuz! program. Please refer to the following tips to make timely upgrades.'

//-------------------------------------
//api/manyou/cloud_iframe.js
	'add_operation'		: 'Ajouter à des opérations courantes',//'&#28155;&#21152;&#21040;&#24120;&#29992;&#25805;&#20316;', // 'Add to common operations'

//--------------------------------------------
//static/js/googlemap.js + static/js/editor.js

	'map_title'		: 'Cartes de Google',//'google图',
	'map_insert'		: 'Insérez la carte Google',//'插入google地图',
	'map_insert_tips'	: 'Insérer Google Maps en cherchant l\'adresse (temporaire ne supporte que une étiquette simple!)',//'通过搜索插入google地图（暂只支持单点标注）！',
	'map_center_changed'	: 'Le centre de la carte est changée!',//'地图中心已经改变！',
	'map_wrong_address'	: 'Mauvaise adresse! Adresse actuelle n\'a pas été trouvé',//' 地址错误，未找到当前地址',

//-------------------------------------
//	''	: '',//'',

'fiction'	: '' // This key MUST BE THE LAST row!

};
