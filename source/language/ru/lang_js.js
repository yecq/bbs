/*
	[Discuz!] (C)2001-2009 Comsenz Inc.
	This is NOT a freeware, use is subject to license terms

	Javascript Language variables

	$Id: lang_js.js by Valery Votintsev, codersclub.org

*/

//--------------------------------
//static/js/register.js

// Suggested email domains for registering:
var emaildomains = [
		'aol.com',
		'mail.ru',
		'gmail.com',
		'hotmail.com',
		'msn.com',
		'qip.ru',
		'rambler.ru',
		'yandex.ru',
		'yahoo.com'
		];

//--------------------------------
//static/js/common.js

var colortexts = {
	'Black'			: 'Чёрный',//'黑色',
	'Sienna'		: 'Охра',//'赭色',
	'DarkOliveGreen'	: 'Тёмный оливково-зеленый',//'暗橄榄绿色',
	'DarkGreen'		: 'Тёмно-зедёный',//'暗绿色',
	'DarkSlateBlue'		: 'Тёмный серо-голубой',//'暗灰蓝色',
	'Navy'			: 'Морская волна',//'海军色',
	'Indigo'		: 'Индиго',//'靛青色',
	'DarkSlateGray'		: 'Тёмно-зелёный',//'墨绿色',
	'DarkRed'		: 'Тёмно-красный',//'暗红色',
	'DarkOrange'		: 'Тёмно-оранжевый',//'暗桔黄色',
	'Olive'			: 'Оливковый',//'橄榄色',
	'Green'			: 'Зелёный',//'绿色',
	'Teal'			: 'Болотный',//'水鸭色',
	'Blue'			: 'Синий',//'蓝色',
	'SlateGray'		: 'Известняк',//'灰石色',
	'DimGray'		: 'Тёмно-серый',//'暗灰色',
	'Red'			: 'Красный',//'红色',
	'SandyBrown'		: 'Песочно-коричневый',//'沙褐色',
	'YellowGreen'		: 'Жёлто-зелёный',//'黄绿色',
	'SeaGreen'		: 'Бирюзовый',//'海绿色',
	'MediumTurquoise'	: 'Изумрудный',//'间绿宝石',
	'RoyalBlue'		: 'Королевский синий',//'皇家蓝',
	'Purple'		: 'Пурпурный Фиолетовый',//'紫色',
	'Gray'			: 'Серый',//'灰色',
	'Magenta'		: 'Лиловый Фиолетовый',//'红紫色',
	'Orange'		: 'Оранжевый',//'橙色',
	'Yellow'		: 'Жёлтый',//'黄色',
	'Lime'			: 'Лайм',//'酸橙色',
	'Cyan'			: 'Зелёно-голубой',//'青色',
	'DeepSkyBlue'		: 'Глубокий синий',//'深天蓝色',
	'DarkOrchid'		: 'Тёмно-фиолетовый',//'暗紫色',
	'Silver'		: 'Серебристый',//'银色',
	'Pink'			: 'Розовый',//'粉色',
	'Wheat'			: 'Светло-жёлтый',//'浅黄色',
	'LemonChiffon'		: 'Лимонный шёлк',//'柠檬绸色',
	'PaleGreen'		: 'Палевый',//'苍绿色',
	'PaleTurquoise'		: 'Малахитовый',//'苍宝石绿',
	'LightBlue'		: 'Ярко-синий',//'亮蓝色',
	'Plum'			: 'Сливовый',//'洋李色',
	'White'			: 'Белый' //'白色'
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
	'restore_last_saved'	: 'Вы уверены, что хотите восстановить контент из предыдущего сохранения?',//'您确定要恢复上次保存?',
	'cut_manually'		: 'Настройки Вашего браузера не разрешают автоматическое вырезание текста. Воспользуйтесь комбирацией клавиш (Ctrl X) для выполнения этой операции.',//'您的浏览器安全设置不允许编辑器自动执行剪切操作,请使用键盘快捷键(Ctrl+X)来完成',
	'copy_manually'		: 'Настройки Вашего браузера не разрешают автоматическое копирование. Воспользуйтесь комбирацией клавиш (Ctrl C) для выполнения этой операции.',//'您的浏览器安全设置不允许编辑器自动执行拷贝操作,请使用键盘快捷键(Ctrl+C)来完成',
	'paste_manually'	: 'Настройки Вашего браузера не разрешают автоматическую вставку. Воспользуйтесь комбирацией клавиш (Ctrl V) для выполнения этой операции.',//'您的浏览器安全设置不允许编辑器自动执行粘贴操作,请使用键盘快捷键(Ctrl+V)来完成',
	'graffiti_no_init'	: 'Не найдены данные для инициализации Граффити',//'找不到涂鸦板初始化数据',
	'ie5_only'		: 'Поддерживаются только браузеры версии IE 5.01 и выше',//'只支持IE 5.01以上版本',
	'edit_raw'		: 'Редактировать исходный код',//'编辑源码',
	'plain_text_warn'	: 'Преобразование в простой текст приведёт к полной потере форматирования!\nВы уверены, что хотите продолжить?',//'转换为纯文本时将会遗失某些格式。\n您确定要继续吗？',
	'browser_update'	: 'Ваш браузер не поддерживает эту функцию. Пожалуйста, обновите версию браузера.',//'你的浏览器不支持此功能，请升级浏览器版本',
	'tips'			: 'Советы',//'小提示',

//---------------------------
//static/image/editor/editor_function.js
// USED in: /source/admincp/admincp_feed.php
// USED in: /template/default/home/cpacecp_blog.htm
// USED in: /template/default/portal/portalcp_article.htm
// MOVED TO:
//static/js/editor_function.js
	'wysiwyg_only'		: 'Данная операция разрешена только в режиме WYSIWYG',//'本操作只在多媒体编辑模式下才有效',

//---------------------------
//static/image/admincp/cloud/cloud.js
	'int_cloud_test'	: 'Тестирование других облачных интерфейсов',//'云平台其他接口测试',
	'int_roaming_test'	: 'Тестирование других интерфейсов приложений',//'漫游其他接口测试',
	'int_qq_test'		: 'Тестирование других QQ интерфейсов',//'QQ互联接口测试',
	'server_busy'		: 'The server is busy, please try again later',//'服务器繁忙，请稍后再试',
	'tested_ok'		: 'The test is successful, time used: ',//'测试成功，耗时 ',
	'seconds'		: ' sec.',//' 秒',

//---------------------------
//static/image/admincp/cloud/qqgroup.js
	'select_topic_to_push'	: 'Выберите хотя бы одну тему для помещения в статьи',//'请至少推送一条头条主题和一条列表主题',
	'select_item_to_push'	: 'Выберите хотя бы один объект для помещения в статьи',//'请至少推送一条信息到列表区域',
	'loading'		: 'Загрузка...',//'加载中...',
	'push5reached'		: 'Количество преобразуемых объектов превышает 5! Уменьшите количество объектов и попробуйте ещё разок.',//'推送帖子已达到5条，请在右侧取消一些再重试。',
	'click_left'		: 'Левый клик',//'点击左侧',
	'push_to_list'		: 'помещает информацию в список',//'将信息推送到列表',
	'wait_image_upload'	: 'Загрузка изображения, ожидайте...',//'图片上传中，请稍后...',





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

	'prev_month'	: 'Пред. месяц',//'上一月',
	'next_month'	: 'След. месяц',//'下一月',
	'select_year'	: 'Выбор года',//'点击选择年份',
	'select_month'	: 'Выбор месяца',//'点击选择月份',
	'wday0'		: 'Вс',//'日',
	'wday1'		: 'Пн',//'一',
	'wday2'		: 'Вт',//'二',
	'wday3'		: 'Ср',//'三',
	'wday4'		: 'Чт',//'四',
	'wday5'		: 'Пт',//'五',
	'wday6'		: 'Сб',//'六',
	'month'		: 'Месяц',//'月',
	'today'		: 'Сегодня',//'今天',
	'hours'		: 'Часы',//'点',
	'minutes'	: 'Минуты',//'分',
	'halfhour'	: 'Half hour',//'分',
	'ok'		: 'Ok',//'OK',

//--------------------------------
//static/js/common.js

	'open_new_win'		: 'Открыть в новом окне',//'在新窗口打开',
	'actual_size'		: 'Реальный размер',//'实际大小',
	'close'			: 'Закрыть',//'关闭',
	'wheel_zoom'		: 'Используйте колесо мыши для масштабирования изображения',//'鼠标滚轮缩放图片',
	'reminder'		: 'Уведомление',//'提示信息',
	'submit'		: 'Подтвердить',//'确定',
	'cancel'		: 'Отмена',//'取消',
	'wait_please'		: 'Загрузка ...',//'请稍候...',
	'int_error'		: 'Внутренняя ошибка, не удаётся показать данный контент',//'内部错误，无法显示此内容',
	'flash_required'	: 'Для показа данного контента требуется установить Adobe Flash Player версии 9.0.124 или выше',//'此内容需要 Adobe Flash Player 9.0.124 或更高版本',
	'flash_download'	: 'Загрузить Flash Player',//'下载 Flash Player',
	'day1'			: '1 день',//'一天',
	'week1'			: '1 неделя',//'一周',
	'days7'			: '7 дней',//'7 天',
	'days14'		: '14 дней',//'14 天',
	'month1'		: '1 месяц',//'一个月',
	'month3'		: '3 месяца',//'三个月',
	'month6'		: '6 месяцев',//'半年',
	'year1'			: '1 год',//'一年',
	'custom'		: 'Произвольный период',//'自定义',
	'permanent'		: 'Постоянно',//'永久',
	'show_all_expr'		: 'Показать все смайлы',//'显示所有表情',
	'page_prev'		: 'Пред.',//'上页',
	'page_next'		: 'След.',//'下页',
	'copy2clipboard'	: 'Скопировать в буфер обмена',//'点此复制到剪贴板',
// ATTENTION!
// The next line must have the same value as in /template.php - 'enter_content' !!!
	'enter_search_string'	: 'Введите запрос',//'请输入搜索内容',
	'refresh_q&a'		: 'Обновить Вопрос/Ответ',//'刷新验证问答',
	'refresh_code'		: 'Обновить код',//'刷新验证码',
	'code_invalid'		: 'Неверный проверочный код, попытайтесь ещё раз',//'验证码错误，请重新填写',
	'q&a_invalid'		: 'Неверный ответ, попытайтесь ещё раз',//'验证问答错误，请重新填写',
	'code_clipboard'	: 'Данные скопированы в буфер обмена',//'代码已复制到剪贴板',
	'enter_link_url'	: 'Введите URL ссылки',//'请输入链接地址',
	'enter_link_text'	: 'Введите название ссылки',//'请输入链接文字',
	'enter_image_url'	: 'Введите URL изображения',//'请输入图片地址',
	'width_optional'	: 'Ширина (не обязательно)',//'宽(可选)',
	'height_optional'	: 'Высота (не обязательно)',//'高(可选)',
	'narrow_screen'		: 'Узкий экран',//'切换到窄版',
	'wide_screen'		: 'Широкий экран',//'切换到宽版',
	'logging_wait'		: 'Входим, ожидайте...',//'登录中，请稍后...',
	'notices_no'		: '[　　　]',//'【　　　】',
	'notices_yes'		: '[New]',//'【新提醒】',
	'sec_after_win_closed'	: ' сек. до закрытия окна',//' 秒后窗口关闭',
	'sec_after_page_jump'	: ' сек. до перехода',//' 秒后页面跳转',
	'jump_now'		: 'Перейти сейчас',//'立即跳转',
	'error_message'		: 'Сообщение об ошибке',//'错误信息',
	'ctrl_d_favorites'	: 'Для добавления в Избранное нажмите Ctrl + D',//'请按 Ctrl+D 键添加到收藏夹',
	'non_ie_manually'	: 'Для браузеров, отличных от IE, требуется ручная установка страницы в качестве домашней',//'非 IE 浏览器请手动将本站设为首页',
	'blind_enable'		: 'Enable blind experience',//'开启盲人体验',//tc:'開啟盲人體驗',
	'blind_disable'		: 'Disable blind experience',//'关闭盲人体验',//tc:'關閉盲人體驗',

//--------------------------------
//static/js/common_diy.js

	'edit'			: 'Редактировать',//'编辑',
	'warn_not_saved'	: 'Вы изменили текущие настройки. Если Вы сейчас выйдете, то все Ваши изменения будут утеряны.',//'您的数据已经修改,退出将无法保存您的修改。',
	'confirm_exit'		: 'При выходе все изменения будут утеряны. Вы уверены, что хотите выйти без сохранения?',//'退出将不会保存您刚才的设置。是否确认退出？',
	'select_image_upload'	: 'Выберите изображение для загрузки',//'请选择您要上传的图片',

//--------------------------------
//static/js/common_extra.js
//	'wait_please'		: 'Loading ...',//'请稍候...',
	'copy_failed'		: 'Ошибка копирования! Пожалуйста, выберите "Разрешить доступ"',//'复制失败，请选择“允许访问”',
	'prev'			: 'Пред.',//'上一张',
	'next'			: 'След.',//'下一张',
        'shortcut_add'		: 'Adding a desktop shortcut',//'添加桌面快捷',
        'shortcut_1'		: '1. Click "',//'1、点击"',
        'shortcut_1_1'		: 'Download desktop shortcut',//'下载桌面快捷',
        'shortcut_1_2'		: '", and after the download is completed, you can move the file to your desktop',//'"，下载完成后，可移动文件到系统桌面',
        'shortcut_2'		: '2. Click "',//'2、点击"',
        'shortcut_2_1'		: 'Download icon file',//'下载ICO图标',
        'shortcut_2_2'		: '", and after the download is completed, right-click on the desktop shortcut file -&gt; Properties -&gt; Change Icon, and select the downloaded ICO icon',//'"，下载完成后，右击桌面快捷文件->属性->更改图标，选择已下载的ICO图标即可',

//--------------------------------
//static/js/editor.js

	'restore_size_edit'	: 'Восстановить исходный размер',//'恢复编辑器大小',
	'full_screen_edit'	: 'На полный экран',//'全屏方式编辑',
	'current_length'	: 'Текущая длина',//'当前长度',
	'bytes'			: 'символов',//'字节',
	'system_limit'		: 'Системный лимит',//'系统限制',
	'up_to'			: '~',//'到',
	'check_length'		: 'Проверить длину',//'字数检查',
	'data_restored'		: 'Данные восстановлены',//'数据已恢复',
	'data_saved'		: 'Данные сохранены',//'数据已保存',
	'clear_all_sure'	: 'Вы уверены, что хотите очистить весь контент?',//'您确认要清除所有内容吗？',
	'hide_content'		: 'Скрытый контент',//'请输入要隐藏的信息内容',
	'free_content'		: 'Если Вы не укажете стоимость просмотра, Ваше сообщение будет доступно для бесплатного просмотра, ',//'如果您设置了帖子售价，请输入购买前免费可见的信息内容',
	'when_thread_replied'	: 'Показывать только после ответа в этой теме ',//'只有当浏览者回复本帖时才显示',
	'when_points_more'	: 'Показывать только если на счету у читателя больше, чем ',//'只有当浏览者积分高于',
	'when_show'		: 'Условия показа',//'时才显示',
	'table_rows'		: 'Строк таблицы',//'表格行数',
	'table_columns'		: 'Столбцов таблицы',//'表格列数',
	'table_width'		: 'Ширина таблицы: ',//'表格宽度: ',
	'bg_color'		: 'Цвет фона',//'背景颜色',
	'table_intro0'		: 'Помощь по созданию таблиц',//'快速书写表格提示',
	'table_intro1'		: '&quot;[tr=color]&quot; - Цвет фона строки<br />&quot;[td=Width]&quot; - Ширина столбца<br />&quot;[td=Column_Span,Row_Span,Width]&quot; - Установить Row-Span, Column-Span и ширину колонки<br /><br />Пример создания таблицы: ',//'“[tr=颜色]” 定义行背景<br />“[td=宽度]” 定义列宽<br />“[td=列跨度,行跨度,宽度]” 定义行列跨度<br /><br />快速书写表格范例：',
	'table_intro2'		: '[table]<br />Name:|Discuz!<br />Version:|X1.5<br />[/table]',//'[table]<br />Name:|Discuz!<br />Version:|X1<br />[/table]',
	'table_intro3'		: 'Используйте символ вертикальной черты &quot;|&quot; для разделения колонок. Если внутри ячейки нужен символ &quot;|&quot;, экранируйте его обратным слэшем: &quot;\\|&quot;. Разделяйте строки переводом строки: &quot;\\n&quot;.',//'用“|”分隔每一列，表格中如有“|”用“\\|”代替，换行用“\\n”代替。',
	'audio_url'		: 'Введите URL аудио-файла',//'请输入音乐文件地址',
	'video_url'		: 'Введите URL видео-файла',//'请输入视频地址',
	'auto_play'		: 'Автозапуск?',//'是否自动播放',
	'flash_url'		: 'Введите URL of Flash-файла ',//'请输入 Flash 文件地址',
	'enter_please'		: 'Пожалуйста, введите ',//'请输入第',
	'nth_parameter'		: '-й параметр',//' 个参数',
	'font'			: 'Шрифт',//'字体',
	'full_screen'		: 'На весь экран',//'全屏',
	'restore_size'		: 'Восстановить исходный размер',//'恢复',
	'general'		: 'Обычный режим',//'常用',
	'simple'		: 'Расширенный режим',//'高级',
	'bad_browser'		: 'Ваш браузер не поддерживает данную операцию',//'你的浏览器不支持此功能',
	'click_autosave_enable'	: 'Кликните здесь для разрешения авто-сохранения',//'点击开启自动保存',
	'autosave_enable'	: 'Разрешить авто-сохранение',//'开启自动保存',
	'autosave_disable'	: 'Запретить авто-сохранение',//'点击关闭自动保存',
	'autosave_enabled'	: 'Авто-сохранение разрешено',//'数据自动保存已开启',
	'autosave_disabled'	: 'Авто-сохранение запрещено',//'数据自动保存已关闭',
	'data_saved_at'		: 'Данные сохранены в',//'数据已于',
	'saved_time'		: '',//NOT REQUIRED IN ENGLISH!//'保存',
	'sec_before_saving'	: 'сек. до сохранения',//'秒后保存',
	'insert_quote'		: 'Вставить цитату',//'请输入要插入的引用',
	'insert_code'		: 'Вставить код',//'请输入要插入的代码',
	'enter_item_list'	: 'Введите элементы списка.\r\nОставьте пустым или кликните Отмена.',//'输入一个列表项目.\r\n留空或者点击取消完成此列表.',
	'width'			: 'Ширина',//'宽',
	'height'		: 'Высота',//'高',
	'audio_support'		: 'Поддерживаемые аудио-форматы: wma, mp3, ra, rm<br />Пример: http://server/audio.wma',//'支持 wma mp3 ra rm 等音乐格式<br />示例: http://server/audio.wma',
	'video_support'		: 'Поддерживаемые сайты: Youku, potatoes, 56, 6, cool video и ряд других.<br />Поддерживаемые видео-форматы: wmv avi rmvb mov swf flv<br />Пример: http://server/movie.wmv',//'支持优酷、土豆、56、酷6等视频站的视频网址<br />支持 wmv avi rmvb mov swf flv 等视频格式<br />示例: http://server/movie.wmv',
	'flash_support'		: 'Поддерживаемые Flash-форматы: swf flv<br />Пример: http://server/flash.swf',//'支持 swf flv 等 Flash 网址<br />示例: http://server/flash.swf',
	'paste_from_word'	: 'Вставить текст из MS Word',//'从 Word 粘贴内容',
	'paste_word_tip'	: 'Используйте комбинацию клавиш (Ctrl + V) для вставки текста из документа MS Word',//'请通过快捷键(Ctrl+V)把 Word 文件中的内容粘贴到上',
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

	'del_thread_sure'	: 'Вы уверены, что хотите удалить данную тему из списка популярных?',//'您确认要把此主题从热点主题中移除么？',
	'there_are'		: 'Имеется: ',//'有',
	'new_reply_exists'	: 'В теме есть новые ответы, клик для просмотра',//'有新回复的主题，点击查看',
//--------------------------------
//static/js/forum_google.js

	'search_net'	: 'Поиск в Интернет',//'网页搜索',
	'search_site'	: 'Поиск по сайту',//'站内搜索',
	'search'	: 'Искать',//'搜索',

//--------------------------------
//static/js/forum_moderate.js

	'choose_tread'	: 'Вуберите тему для модерирования',//'请选择需要操作的帖子',

//--------------------------------
//static/js/forum_post.js

	'internal_error'	: 'Внутренняя ошибка сервера',//'内部服务器错误',
	'upload_ok'		: 'Загрузка усппешно завершена',//'上传成功',
	'ext_not_supported'	: 'Файлы с таким расширением не поддерживаются',//'不支持此类扩展名',
	'sorry_ext_not_supported'	: 'Извините, файлы с таким расширением не поддерживаются.',//'对不起，不支持上传此类扩展名的附件。',
	'illegal_image_type'	: 'Недопустимый тип изображения',//'图片附件不合法',
	'can_not_save_attach'	: 'Ошибка сохранения загруженного файла',//'附件文件无法保存',
	'invalid_file'		: 'Данный тип файлов не поддерживается',//'没有合法的文件被上传',
	'illegal_operation'	: 'Недопустимая операция',//'非法操作',
	'enter_content'		: 'Введите заголовок или контент',//'请完成标题或内容栏',
	'select_category'	: 'Категория темы',//'请选择主题对应的分类',
	'select_category_info'	: 'Выберите подходящую категорию для Вашей темы',//'请选择主题对应的分类信息',
	'title_long'		: 'Длина заголовка превышает лимит 255 байт',//'您的标题超过 80 个字符的限制',
	'content_long'		: 'Длина заголовка не соответствует требованиям.\n\n',//'您的帖子长度不符合要求。\n\n',
	'ignore_pending_attach'	: 'Есть вложения, ожидающие модерации. Вы уверены, что хотите их игнорировать?',//'您有等待上传的附件，确认不上传这些附件吗？',
	'still_uploading'	: 'Некоторые файлы ещё в состоянии загрузки. Пожалуйста, подождите. Тема будет автоматически сохранена после завершения загрузки всх файлов...',//'您有正在上传的附件，请稍候，上传完成后帖子将会自动发表...',
	'no_data_recover'	: 'Нет данных для восстановления!',//'没有可以恢复的数据！',
	'content_overwrite'	: 'ВНИМАНИЕ!\nТекущий контент будет перезаписан сохранёнными данными!\nВы уверены, что хотите восстановить контент?',//'此操作将覆盖当前帖子内容，确定要恢复数据吗？',
	'upload_finished'	: 'Загрузка завершена!',//'附件上传完成！',
	'successfull'		: 'Успешно:',//'成功',
	'failed'		: 'Отвергнуто:',//'失败',
	'ones'			: 'файлов',//'个',
	'uploading'		: 'Загрузка...',//'上传中...',
	'select_image_files'	: 'Выберите файл изображения',//'请选择图片文件',
	'delete'		: 'Удалить',//'删除',
	'contains'		: 'Содержит ',//'包含',
	'img_attached_num'	: 'прикрепленных изображений',//'个图片附件',
	'files attached_num'	: 'прикреплённых файлов',//'个附件',
	'images'		: 'Изображения',//'图片',
	'attachments'		: 'Файлы',//'附件',
//	'upload_failed'		: 'Ошибка загрузки',//'上传失败',

	'attach_big'		: 'Размер файла превышает установленный лимит',//'服务器限制无法上传那么大的附件',
	'attach_group_big'	: 'Превышен суммарный объём загружаемых файлов для Вашей группы',//'用户组限制无法上传那么大的附件',
	'attach_type_big'	: 'Размер файла превышает установленный лимит для данного типа файлов',//'文件类型限制无法上传那么大的附件',
	'attach_daily_big'	: 'Превышен суточный лимит загружаемых файлов',//'本日已无法上传更多的附件',
	'validating_q&a'	: 'Проверка вопроса и ответа, ожидайте',//'验证问答校验中，请稍后',
	'validating_code'	: 'Проверка кода, ожидайте',//'验证码校验中，请稍后',
	'attach_type_disabled'	: 'Файлы данного типа запрещены к загрузке',//'附件类型被禁止',
	'attach_max'		: 'Не более чем ',//'不能超过',
	'vote_max_reached'	: 'Превышен лимит голосов: ',//'已达到最大投票数',
	'no_remote_attach'	: 'Извините, файл в сети не найден',//'抱歉，暂无远程附件',
	'delete_post_sure'	: 'Уверены, что надо удалить данное сообщение?',//'确定要删除该帖子吗？',
	'feed_add_confirm'	: 'Сообщение имеет платный доступ или специальные права для доступа, Вы уверены, что следует сгенерировать новостную запись для Ваших подписчиков?',//'由于您设置了阅读权限或出售帖，您确认还转播给您的听众看吗？',
//--------------------------------
//static/js/forum_viewthread.js

	'best_answer_sure'	: 'Вы уверены, что хотите присвоить данному ответу статус "Лучший ответ"?',//'您确认要把该回复选为“最佳答案”吗？',
	'premoderated'		: 'Ответы в данной категории публикуются только после проверки модератором',//'本版回帖需要审核，您的帖子将在通过审核后显示',
	'credit_confirm1'	: 'Стоимость скачивания ',//'下载需要消耗',
	'credit_confirm2'	: ' баллов. Вы уверены, что хотите скачать файл?',//'，您是否要下载？',
	'thread_to_clipboard'	: 'URL темы скопирован в буфер обмена',//'帖子地址已经复制到剪贴板',
	'click_to_enlarge'	: 'Кликните для увеличения изображения',//'点击放大',
	'notify_on_reply'	: 'Уведомлении о получении',//'接收回复通知',
	'notify_on_reply_cancel'	: 'Отменить уведомление о получении',//'取消回复通知',
	'share_connection_failed'	: 'Ошибка подключения к сервису закладок. Пожалуйста, повторите попытку позже',//'分享服务连接失败，请稍后再试',
	'qq_bind'		: 'Пожалуйста, подключите Ваш QQ аккаунт',//'请先绑定QQ账号',
	'quote_by'		: 'Quote by .*? in .*? code',//'本帖最后由 .*? 于 .*? 编辑',
	'copy_code'		: 'Копировать код',//'复制代码',
	'download_pocket_forum'	: 'Download Pocket Forum',//'下载掌上论坛',
	'pocket_forum_android'	: 'If Andriod version, Scan thw QR-code can be downloaded directly to the phone',//'Andriod版本，扫描二维码可以直接下载到手机',
	'pocket_forum_android_alt'	: 'Suitable for Android-based smartphones like Samsung/HTC/etc',//'适用于装有安卓系统的三星/HTC/小米等手机',
	'pocket_forum_ios'	: 'If iPhone used, Scan thw QR-code can be downloaded directly to the phone',//'iPhone版本，扫描二维码可以直接下载到手机',
	'pocket_forum_ios_alt'	: 'Suitable for Apple mobile phone',//'适用于苹果手机',
	'quick_reply_here'	: '#Quick Reply Here#', //'#在这里快速回复#',

//--------------------------------
//static/js/handlers.js
	'file_selected_exceed'	: 'Вы выбрали слишком много файлов.',//'您选择的文件个数超过限制。',
	'upload_number_exceed'	: 'Лимит на количество файлов исчерпан.',//'您已达到上传文件的上限了。',
	'can_choose_more'	: 'Вы можете добавить еще ',//'您还可以选择 ',
	'files'			: ' файлов',//' 个文件',
	'file_is_large'		: 'Размер файла слишком велик.',//'文件太大.',
	'file_is_empty'		: 'Файлов нулевого размера нам не нать.',//'不能上传零字节文件.',
	'file_type_disabled'	: 'Загрузка файлов этого типа запрещена.',//'禁止上传该类型的文件.',
	'unhandled_error'	: 'Непредвиденная ошибка',//'',
	'upload_progress'	: 'Загружено ',//'正在上传',
	'upload_cancelled'	: 'Отменено',//'取消上传',
	'file_description'	: 'Описание файла',//'图片描述',
	'image_upload_failed'	: 'Ошибка загрузки изображения',//'图片上传失败',
	'upload_failed'		: 'Ошибка загрузки',//'上传失败',
	'upload_completed'	: 'Загрузка завершена.',//'上传完成.',
	'upload_error'		: 'Сбой загрузки: ',//'',
	'config_error'		: 'Ошибка канфигурации',//'',
	'server_error'		: 'Ошибка (IO) сервера',//'',
	'security_error'	: 'Ошибка безопасности',//'',
	'upload_limit_exceed'	: 'Превышен лимит загрузки.',//'',
	'file_not_found'	: 'Файл не найден.',//'',
	'validation_failed'	: 'Ошибка проверки. Загрузка пропущена.',//'',
	'upload_stopped'	: 'Остановлено',//'',

//--------------------------------
//static/js/home.js
	'day'			: 'День',//'日',
	'category_empty'	: 'Название категории не должно быть пустым!',//'分类名不能为空！',

//--------------------------------
//static/js/home_ajax.js

//	'close'			: 'Close',//'关闭',
//	'wait_please'		: 'Loading ...',//'请稍候...',

//--------------------------------
//static/js/home_blog.js

	'title_length_invalid'	: 'Длина заголовка должна быть в пределах 1~80 символов',//'标题长度(1~80字符)不符合要求',

//--------------------------------
//static/js/home_common.js

	'show_orig_image'	: 'Показать оригинал изображения в отдельном окне',//'点击图片，在新窗口显示原始尺寸',
	'continue_sure'		: 'Вы уверены, что хотите продолжить?',//'您确定要执行本操作吗？',
	'select_item'		: 'Выберите объект для операции',//'请选择要操作的对象',
	'image_url_invalid'	: 'Недопустимый URL изображения',//'图片地址不正确',
	'audio_url_invalid'	: 'Недопустимый URL для аудио, не должен быть пустым',//'音乐地址错误，不能为空',

//!!!!! MayBe wrap this names!!
	'collapse'		: 'Свернуть',//'收起',
	'expand'		: 'Раскрыть',//'展开',

//--------------------------------
//static/js/home_friendselector.js

	'select_max'		: 'Вы можете выбрать не более',//'最多只允许选择',
	'users'			: 'пользователей',//'个用户',
	'allready_exists'	: 'Уже существует',//'已经存在',

//--------------------------------
//static/js/home_manage.js

	'you_friends_now'	: 'Теперь вы являетесь друзьями. Вы можете ',//'你们现在是好友了，接下来，您还可以：',
	'leave_message'		: 'Отправлять личные сообщения',//'给TA留言',
	'or'			: 'или',//'或者',
	'send_greeting'		: 'отправлять приветы',//'打个招呼',
	'reply'			: 'Ответ',//'回复',
	'comment'		: 'Комментарий',//'评论',
	'close_list'		: 'Закрыть список',//'收起列表',
	'more_feeds'		: 'Ещё активность',//'更多动态',

//--------------------------------
//static/js/home_uploadpic.js

	'image_type_invalid'	: 'Изображения с таким расширением не поддерживаются',//'对不起，不支持上传此类扩展名的图片',
	'insert_to_content'	: 'Кликните по файлу для вставки его в контент в текущую позицию курсора',//'点击这里插入内容中当前光标的位置',
	'insert'		: 'Вставить',//'插入',
	'image_description'	: 'Описание изображения',//'图片描述',
	'uploading_wait'	: 'Загрузка, ждём-с...',//'上传中，请等待',
	'retry'			: 'Повторить',//'重试',

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

	'delete_sure'		: 'Вы уверены, что хотите удалить эту информацию?',//'您确定要删除该数据吗？',
	'ignore_sure'		: 'Вы уверены, что хотите игнорировать эти данные?',//'您确定要屏蔽该数据吗？',
	'to'			: 'до',//'到',

	'choose_block'		: 'Выберите блок',//'选择模块',
	'blocks_found1'		: 'Найдено',//'找到',
	'blocks_found2'		: 'соответствующих блоков',//'个相应的模块',
	'blocks_not_found'	: 'Нет соответствующих блоков',//'没有相应的模块',
	'select_block'		: 'Пожалуйста, выберите блок!',//'请选择一个模块！',
	'show_settings'		: 'Показать настройки',//'展开设置项',
	'hide_settings'		: 'Скрыть настройки',//'收起设置项',
	'block_name_empty'	: 'Название блока не должно быть пустым',//'模块标识不能为空',
	'block_convert_sure'	: 'Вы уверены, что хотите изменить тип блока?',//'你确定要转换模块的类型从',
	'back'			: 'Назад',//'返回',
	'settings_expand'	: 'Показать настройки',//'展开设置项',
	'settings_hide'		: 'Скрыть настройки',//'收起设置项',
	'custom_content_error'	: 'Ошибка в контенте! HTML код: ',//'自定义内容错误，',
	'html_error'		: 'HTML код: ',//'HTML代码：',
	'tags_not_match'	: ' - теги не соответствуют',//' 标签不匹配',
	'entered'		: 'Have entered ',//'已输入 ',
	'exceed'		: 'Exceed ',//'超出 ',
	'title_length_bad'	: 'The title is incorrect',//'标题长度不正确',
	'summary_length_bad'	: 'Summary length is incorrect',//'简介长度不正确',

//--------------------------------
//static/js/portal_diy.js

	'choose_style'		: 'Выберите стиль',//'选择样式',
	'style'			: 'Стиль',//'样式',
	'style1'		: 'Стиль 1',//'样式1',
	'style2'		: 'Стиль 2',//'样式2',
	'style3'		: 'Стиль 3',//'样式3',
	'style4'		: 'Стиль 4',//'样式4',
	'style5'		: 'Стиль 5',//'样式5',
	'style6'		: 'Стиль 6',//'样式6',
	'style7'		: 'Стиль 7',//'样式7',
	'no_border'		: 'Без бордюра',//'无边框框架',
	'no_border_no_margin'	: 'Без бордюра, без отступов',//'无边框且无边距',

	'title'			: 'Заголовок',//'标题',
	'attribute'		: 'Атрибут',//'属性',
	'data'			: 'Данные',//'数据',
	'update'		: 'Обновить',//'更新',
	'export'		: 'Экспорт',//'导出',
	'repeat'		: 'Повторение',//'平铺',
	'no_repeat'		: 'Нет повторения',//'不平铺',
	'repeat_x'		: 'Повтор по горизонтали',//'横向平铺',
	'repeat_y'		: 'Повтор по вертикали',//'纵向平铺',
	'no_style'		: 'Без стиля',//'无样式',
	'solid_line'		: 'Сплошная линия',//'实线',
	'dotted_line'		: 'Пунктирная линия',//'点线',
	'dashed_line'		: 'Штриховая линия',//'虚线',
	'link'			: 'Ссылув',//'链接',
	'border'		: 'Бордюр',//'边框',
	'size'			: 'Размер',//'大小',
	'color'			: 'Цвет',//'颜色',
	'separate_config'	: 'Настройки отдельно',//'分别设置',
	'right'			: 'Справа',//'右',
	'bottom'		: 'Вниз',//'下',
	'top'			: 'Вверх',//'上',
	'left'			: 'Влево',//'左',
	'margin'		: 'Отступ',//'外边距',
	'padding'		: 'Padding',//'内边距',
	'bg_image'		: 'Фоновое изображение',//'背景图片',
	'class'			: 'Указанный класс стилей',//'指定class',
	'block'			: 'Блок',//'模块',
	'frame'			: 'Фрейм',//'框架',
	'onclick'		: 'onClick',//'点击',
	'onmouseover'		: 'onMouseover',//'滑过',
	'switch_type'		: 'Изменить тип',//'切换类型',
	'image'			: 'Изображение',//'图片',
	'position'		: 'Позиция',//'位置',
	'align_left'		: 'Выравнивание влево',//'居左',
	'align_right'		: 'Выравнивание вправо',//'居右',
	'offset'		: 'Смещение',//'偏移量',
//!!! mainly the same as 'color' !!!!!!
//	'colour'		: 'Colour',//'色',
	'add_new_title'		: 'Добавить новый заголовок',//'添加新标题',
	'delete_this_sure'	: 'Удалённые данные нельзя будет восстановить! Вы уверены, что хотите удалить эти данные?',//'您确实要删除吗,删除以后将不可恢复',
	'loading_content'	: 'Загрузка контента...',//'正在加载内容...',
	'modified_import'	: 'Чтобы внесённые Вами изменения вступили в силу, желательно сначала сохранить всё, что Вы тут наворотили, а потом импортировать сохранённый файл.',//'您已经做过修改，请保存后再做导出，否则导出的数据将不包括您这次所做的修改。',
	'total'			: 'Всего ',//'共',
	'blocks'		: 'блоков',//'个模块',
	'updating_the'		: 'обновление #',//'正在更新第',
	'done'			: 'готово',//'已完成',
	'start_updating'	: 'Начало обновления...',//'开始更新...',
	'update_block_data'	: 'Обновление данных блока',//'更新模块数据',
	'clear_diy_sure'	: 'Вы уверены, что хотите очистить данные настройки текущей страницы? После удаления уже невозможно будет восстановить эти данные.',//'您确实要清空页面上所在DIY数据吗,清空以后将不可恢复',
	'frame_not_found'	: 'Предупреждение: Фрейм не найден! Пожалуйста, добавьте сначала фрейм.',//'提示：未找到框架，请先添加框架。',
	'apply_all_pages'	: 'Применить ко всем страницам этого типа',//'应用于此类全部页面',
	'apply_current_page'	: 'Применить к текущей странице',//'只应用于本页面',
	'save_temp_sure'	: 'Сохранить временные данные?<br />Кликните "Сохранить" для сохранения, или "Отмена" для удаления временных данных.',//'是否保留暂存数据？<br />按确定按钮将保留暂存数据，按取消按钮将删除暂存数据。',
	'save_temp'		: 'Сохранить временные данные',//'保留暂存数据',
	'revert_last_saved'	: 'Вы уверены, что хотите откатить данные к предыдущим сохранённому результату?',//'您确定要恢复到上一版本保存的结果吗？',
	'continue_temp_sure'	: 'Продолжить работу с временными данными?',//'是否继续暂存数据的DIY？',
	'update_completed'	: 'Обновление завершено.',//'已更新完成。',
	'tab_label'		: 'Уровень вкладок',//'tab标签',
	'temp_action'		: 'Кликните по кнопке "Продолжить" для загрузки временных данных в текущий стиль страницы.<br />Кликните по кнопке "Удалить" для удаления временных данных.',//'按继续按钮将打开暂存数据并DIY，<br />按删除按钮将删除暂存数据。',
	'continue'		: 'Продолжить',//'继续',
	'block_no_rights'	: 'Sorry, you have no permission to add or edit block',//'抱歉，您没有权限添加或编辑模块',

//--------------------------------
//static/js/portal_diy_data.js
	'data_manage'		: 'Direct management of the block data',//'可直接管理模块数据',
	'quit'			: 'Quit',//'退出',
//--------------------------------
//static/js/qshare.js
	'from_tencent'		: 'Отправлено из Tencent',//"\u6211\u6765\u81EA\u4E8E\u817E\u8BAF\u5FAE\u535A\u5F00\u653E\u5E73\u53F0",

//--------------------------------
//static/js/register.js

	'username_invalid'	: 'Имя пользователя содержит недопустимые символы',//'用户名包含敏感字符',
	'username_short'	: 'Имя пользователя не должно быть короче 2х символов',//'用户名小于 3 个字符',
	'username_long'		: 'Имя пользователя не должно быть длиннее 15 символов',//'用户名超过 15 个字符',
	'passwords_not_equal'	: 'Введённые пароли не совпадают',//'两次输入的密码不一致',
	'email_invalid'		: 'Email содержит запрещённые символы',//'Email 包含敏感字符',
	'invite_code_invalid'	: 'Код приглашения содержит недопустимые символы',//'邀请码包含敏感字符',
	'password_fill'		: 'Введите пароль',//'请填写密码',
	'password_again'	: 'Повторите пароль',//'请再次输入密码',
	'email_fill'		: 'Введите email адрес',//'请输入邮箱地址',
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
	'at_friend'		: 'Используя @user, Вы можете создать ссылку на пользователя',//'@朋友账号，就能提醒他来看帖子',

//--------------------------------
//static/js/smilies.js

//--------------------------------
//static/js/space_diy.js

	'save_js'		: 'Сохранить javascript после показа',//'javascript脚本保存后显示',
	'settings'		: 'Настройки',//'设置',

//---------------------------
//static/js/swfupload.js

	'attach_file'		: 'Загрузка',

//---------------------------
//static/js/threadsort.js

	'select_please'		: 'Выберите, пожалуйста',//'请选择',
	'required_fill'		: 'Не заполнены обязательные поля',//'必填项目没有填写',
	'select_next_level'	: 'Выберите следующий уровень',//'请选择下一级',
	'numeric_invalid'	: 'Неверное числовое значение',//'数字填写不正确',
	'email_invalid'		: 'Неверный E-mail адрес',//'邮件地址不正确',
	'text_too_long'		: 'Введенное значение слишком длинное',//'填写项目长度过长',
	'value_is_greater'	: 'Введенное значение превышает максимально допустимое',//'大于设置最大值',
	'value_is_less'		: 'Введенное значение меньше разрешенного минимума',//'小于设置最小值',
	'enter_valid_url'	: 'Введите корректный URL, начинающийся с http://',//'请正确填写以http://开头的URL地址',

//--------------------------------
//static/js/upload.js

	'file_not_supported'	: 'Извините, данный тип файлов не поддерживается',//'对不起，不支持上传此类文件',
	'wait_upload'		: 'Wait for upload...',//'等待上传...',

//-------------------------------------
//source/function/function_admincp.php
	'version_uptodate'	: 'Вы используете самую актуальную версию Discuz!. Для своевременного обновления следуйте следующим советам.',

//-------------------------------------
//api/manyou/cloud_iframe.js
	'add_operation'		: 'Добавить к общим операциям',//'&#28155;&#21152;&#21040;&#24120;&#29992;&#25805;&#20316;',

//--------------------------------------------
//static/js/googlemap.js + static/js/editor.js

	'map_title'		: 'Гугло-Карта',//'google图',
	'map_insert'		: 'Вставить карту Гугл',//'插入google地图',
	'map_insert_tips'	: 'Для вставки карты необходимо ввести и найти адрес/название (временно поддерживается поиск только по одному слову!)',//'通过搜索插入google地图（暂只支持单点标注）！',
	'map_center_changed'	: 'Центр карты перемещён!',//'地图中心已经改变！',
	'map_wrong_address'	: 'Указанный адрес не найден!',//' 地址错误，未找到当前地址',

//-------------------------------------
//	''	: '',//'',

'fiction'	: '' // This key MUST BE THE LAST row!

};
