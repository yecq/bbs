<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *      Traduit par Andre13 : discuz-fr.fr 27-déc-2011
 *      $Id: lang_core.php by Valery Votintsev, codersclub.org
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(
	'nextpage'	=> 'Suiv.', // Next
	'prevpage'	=> 'Pr&#233;c.', // Previous
	'pageunit'		=> 'Pages',//'页',
	'total'			=> 'Total',//'共',
	'10k'			=> '10K',//'万',
	'pagejumptip'		=> 'Entrez le num&#233;ro de page et appuyez sur Entr&#233;e pour le saut rapide',//'输入页码，按回车快速跳转',  //  'Enter the page number and press Enter for quick jump',
	'date'	=> array(
		'before'	=> ' auparavant', // ' ago'
		'day'		=> 'jours', // days
		'yday'		=> ' 1 jour auparavant', // '1 day ago'
		'byday'		=> ' 2 jours auparavant', // '2 days ago'
		'hour'		=> 'heure', // hour
		'half'		=> 'mi', // half - moitié 
		'min'		=> 'min.', // min
		'sec'		=> 'sec.', // sec
		'now'		=> 'maintenant', // now
	),
	'yes'	=> 'Oui', // Yes
	'no'	=> 'Non', // No
	'weeks'	=> array(
		1 => 'Lun', // Mon
		2 => 'Mar', // Tue
		3 => 'Mer', // Wed
		4 => 'Jeu', // Thu
		5 => 'Ven', // Fri
		6 => 'Sam', // Sat
		7 => 'Dim', // Sun
	),
	'dot'		=> '. ', // '.'
	'archive'	=> 'Archive', // Archive
	'portal'	=> 'Portail', // Portal
	'end'		=> 'Fin', // End

	'seccode_image_tips'		=> 'Svp. Veuillez saisir les mots<br />',  
	'seccode_image_ani_tips'	=> 'Svp. Veuillez saisir le nombre maximum<br />', 
	'seccode_sound_tips'		=> 'Svp. Veuillez saisir les mots que vous avez entendu ou vu<br />',  
	'secqaa_tips'			=> 'Svp. Veuillez saisir la r&#233;ponse &#224; la question<br />', 

	'fullblankspace'	=> '&nbsp;',//'　',

	'title_goruptype'	=> ' type', // ' type'
	'title_of'		=> '\'s ', // '\'s '
	'title_board_message'	=> 'Conseils', // Tips
	'title_view_all'	=> 'Voir tout', // View all
	'title_activity'	=> 'Activit&#233;', // Activity
	'title_friend_activity'	=> 'Amis\'s Activit&#233;s', // 'Friends\'s activities'
	'title_my_activity'	=> 'Mes Activit&#233;s', // My activities
	'title_newest_activity'	=> 'Derni&#232;res Activit&#233;s', // 'Latest activities'
	'title_top_activity'	=> 'Hot Activit&#233;s', // 'Hot activities'
	'title_album'		=> 'Album', // Album
	'title_friend_album'	=> 'Amis\' Album', // 'Friends\' alubm'
	'title_my_album'	=> 'Mon Album', // 'My album'
	'title_newest_update_album'	=> 'Derniers albums M&#224;J', // 'Latest updated albums'
	'title_hot_pic_recommend'	=> 'Recommand&#233; Images', // 'Recommended images'
	'title_blog'			=> 'Blog', // Blog
	'title_friend_blog'		=> 'Amis\' Blogs', // 'Friends\' blogs'
	'title_my_blog'			=> 'Mon Blog', // 'My blog'
	'title_post_new_blog'		=> 'Post un New Blog', // 'Post new blog'
	'title_newest_blog'		=> 'Dernier Blogs', // 'Latest blogs'
	'title_recommend_blog'		=> 'Recommand&#233; blogs', // 'Recommended blogs'
	'title_debate'			=> 'D&#233;bats', // Debate
	'title_friend_debate'		=> 'Amis\' D&#233;bats', // 'Friends\' debates'
	'title_my_debate'		=> 'Mes D&#233;bats', // 'My debates'
	'title_create_new_debate'	=> 'Post New D&#233;bats', // 'Post new debates'
	'title_my_create_debate'	=> 'J&#180;ai cr&#233;&#233; un d&#233;bat', // 'I created debates'
	'title_my_join_debate'	=> 'Rejoint un d&#233;bat', // 'Joined debates'
	'title_newest_debate'	=> 'Dernier D&#233;bats', // 'Latest debates'
	'title_top_debate'	=> 'Hot d&#233;bats', // 'Hot debates'
	'title_doing'		=> 'Agiss.', // Doing
	'title_newest_doing'	=> 'Agiss.', // Doing
	'title_me_friend_doing'	=> 'Je & Ami\' agissement', // 'I & friends\' doings'
	'title_doing_view_me'	=> 'Actes', // My doings
	'title_thread_favorite'	=> 'Sujets favoris', // 'Threads favorites'
	'title_forum_favorite'	=> 'Forum favoris', // Forum favorites
	'title_group_favorite'	=> '{gorup} favoris', // '{gorup} favorites'
	'title_blog_favorite'	=> 'Blog favoris', // 'Blog favorites'
	'title_album_favorite'	=> 'Album favoris', // 'Album favorites'
	'title_article_favorite'	=> 'Article favoris', // Article favorites
	'title_all_favorite'	=> 'Tout les favoris', // All favorites
	'title_friend_list'	=> 'Liste d&#180;Amis', // Friends list
//	'title_of'		=> '\'s ', // '\'s '
	'title_all_poll'	=> 'Tout les sondages', // 'All polls'
	'title_we_poll'		=> 'Amis sondages', // 'Friends\' polls'
	'title_me_poll'		=> 'Mes sondages', // 'My polls'
	'title_hot_poll'	=> 'Hot sondages', // 'Hot polls'
	'title_dateline_poll'	=> 'Dernier Sondages', // 'Latest polls'
	'title_all_reward'	=> 'Tout les Bonus', // 'All rewards'
	'title_we_reward'	=> 'Amis\' Bonus', // 'Friends\' rewards'
	'title_me_reward'	=> 'Mes Bonus', // 'My rewards'
	'title_hot_reward'	=> 'Bonus Hot', // 'Hot rewards'
	'title_dateline_reward'	=> 'Derni&#232;r Bonus', // 'Latest rewards'
	'title_share_all'	=> 'Tout', // All
	'title_share_link'	=> 'Site Web', // Website
	'title_share_video'	=> 'Vid&#233;o', // Video
	'title_share_music'	=> 'Musique', // Music
	'title_share_flash'	=> 'Flash', // 
	'title_share_poll'	=> 'Sondage', // Poll
	'title_share_pic'	=> 'Image', // Image
	'title_share_album'	=> 'Album', // Album
	'title_share_blog'	=> 'Blog', // Blog
	'title_share_space'	=> 'Utilisateur', // User
	'title_share_thread'	=> 'Sujet', // Thread
	'title_share_article'	=> 'Article', // Article
	'title_share_tag'	=> 'TAG', // TAG
	'title_share'		=> 'Partage', // Share
	'title_thread'		=> 'Sujet', // Thread
	'title_all_thread'	=> 'Tout Sujets', // 'All threads'
	'title_we_thread'	=> 'Amis\' Sujets', // 'Friends\' threads'
	'title_me_thread'	=> 'Mes Sujets', // My threads
	'title_hot_thread'	=> 'Hot Sujets', // Hot threads
	'title_dateline_thread'	=> 'Dernier Sujets', // Latest threads
	'title_trade'		=> 'Commerces', // Trade
	'title_all_trade'	=> 'Tout les commerces', // All trades
	'title_we_trade'	=> 'Amis\' commercants', // Friends\' trades
	'title_me_trade'	=> 'Mes m&#233;tiers', // My trades
	'title_hot_trade'	=> 'Hot M&#233;tiers', // Hot trades
	'title_dateline_trade'	=> 'Dernier m&#233;tiers', // Latest trades
	'title_tradelog_trade'	=> 'Journaux du Commerce', // Trade logs
	'title_eccredit_trade'	=> 'Cotes Cr&#233;dit', // Credit rating
	'title_credit'		=> 'Points', // Points
	'title_friend_add'	=> 'Ajout.Amis', // Add friends
	'title_people_might_know'	=> 'Vous savez peut-&#234;tre', // You may know
	'title_friend_request'		=> 'Amis demande', // Friends request
	'title_search_friend'		=> 'Rech. Amis', // Search friends
	'title_invite_friend'		=> 'Inviter Amis', // Invite friends
	'title_password_security'	=> 'Mot de passe', // Password
	'title_flash_upload'	=> 'Transfert Group&#233;', // Bulk upload
	'title_cam_upload'	=> 'Appareil photo', // Camera photo
	'title_normal_upload'	=> 'Commun T&#233;l&#233;ch.', // Common upload
	'title_newthread_post'	=> 'Post sujets', // Post threads
	'title_reply_post'	=> 'Join/R&#233;ponse sujets', // Join/Reply threads
	'title_edit_post'	=> 'Modif. sujets', // Edit threads
	'title_newtrade_post'	=> 'Posts M&#233;tiers', // Post trades
	'title_magics_shop'	=> 'Accessoires Magasin', // Props shop
	'title_magics_hot'	=> 'Accessoires Hot', // Hot props
	'title_magics_user'	=> 'Mes Accessoires', // My props
	'title_magics_log'	=> 'Accessoires Journaux', // Props logs
	'title_medals_list'	=> 'M&#233;dailles', // Medals
	'title_setup'		=> 'Param&#232;tres', // Setting
	'title_memcp_blog'	=> 'Post blogs', // Post blogs
	'title_memcp_upload'	=> 'Chargement', // Upload
	'title_memcp_share'	=> 'Ajouter partages', // Add shares
	'title_memcp_sendmail'	=> 'Mail Avis', // Mail notice
	'title_memcp_privacy'	=> 'Confidentialit&#233;', // Privacy
	'title_memcp_avatar'	=> 'Avatar', // Avatar
	'title_memcp_profile'	=> 'Profil', // Profile
//vot	'title_memcp_sendmail'	=> 'Mail Avis', // Mail notice
	'title_memcp_credit'	=> 'Points', // Points
	'title_memcp_friend'	=> 'Amis', // Friends
	'title_memcp_usergroup'	=> 'Groupe Utilis.', // Usergroup
	'title_memcp_album'	=> 'Modif. albums', // Edit albums
	'title_memcp_poke'	=> 'Salut', // Poke
	'title_memcp_videophoto'	=> 'Vid&#233;o certifi&#233;', // Video certified //modify
	'title_memcp_comment'		=> 'Commentaire', // Comment
	'title_memcp_eccredit'		=> 'Cr&#233;dit Rangs', // Credit rating
	'title_memcp_promotion'		=> 'Promotion Acc&#232;s', // Access Promotion
	'title_task'			=> 'T&#226;che', // Task
	'title_login'			=> 'Connexion', // Login
	'title_ranklist_picture'	=> 'Rangs Image', // Image ranking
	'title_ranklist_member'		=> 'Rangs User ', // User ranking // Rang Utilisateur
	'title_ranklist_thread'		=> 'Rangs Sujet', // Thread ranking
	'title_ranklist_blog'		=> 'Blog Rangs', // Blog ranking
	'title_ranklist_poll'		=> 'Rangs Sondage', // Poll ranking
	'title_ranklist_activity'	=> 'Rangs Activit&#233;', // Activity ranking
	'title_ranklist_forum'		=> 'Rangs Forum', // Forum ranking
	'title_ranklist_group'		=> 'Rangs Groupe', // Group ranking
	'title_ranklist_app'		=> 'Rangs Appl.', // Apps Ranking
	'title_ranklist_index'		=> 'Tout les Rangs', // All rankings
	'title_ranklist_rankname'	=> 'Rang',//'排行榜',  //  'Rank',
	'title_search'			=> 'Recherche ', // 'Search '
	'title_topic_management'	=> 'Gestion sujets', // Create topics
	'title_portal_management'	=> 'Gestion portail', // Manage portal
	'title_portalblock_management'	=> 'Gestion modules', // Manage modules
	'title_block_management'	=> 'Gestion modules', // Manage modules
	'title_blockdata_management'	=> 'Poussez Mod&#233;ration', // Moderate push
	'title_index_management'	=> 'Canal', // Channel
	'title_article_management'	=> 'Publi&#233; articles', // Publish articles
	'title_category_management'	=> 'Gestion articles', // Manage articles

	'title_stats'			=> 'Stats Site', // Site statistics
	'title_stats_basic'		=> 'Info Base', // Basic Info
	'title_stats_forumstat'		=> 'Stats Forum', // Forum statistics
	'title_stats_team'		=> 'Gestion &#201;quipe', // Manager team
	'title_stats_modworks'		=> 'Gestion Stats', // Management statistics
	'title_stats_memberlist'	=> 'Liste Membres', // Member list
	'title_stats_trend'		=> 'Tendance Stats', // Trend statistics

	'title_memcp_pm'		=> 'Env. M.P', // 'Send P.M.'
	'title_memcp_domain'		=> 'Mon domaine Espace', // My space domain
	'title_userapp'			=> 'Apps', // Apps
	'title_userapp_index_all'	=> 'Tout', // All
	'title_userapp_index_we'	=> 'Amis', // Friends
	'title_userapp_index_me'	=> 'Je joue', // 'I\'m playing'
	'title_userapp_manage'		=> 'Gestion {userapp}', // 'Manage {userapp}'

	'title_collection'		=> 'Collection',//'淘帖',  //  'Collection',
	'title_collection_create'	=> 'Cr&#233;er collection',//'创建淘专辑',  //   'Create collection',
	'title_collection_edit'		=> 'Modifier collection',//'编辑淘专辑',  //  'Edit collection',
	'title_collection_comment_list'	=> 'Liste Comment.',//'评论列表',  //  'Comment list',
	'title_collection_followers_list'	=> 'Adeptes',//'订阅用户列表',  //  'Followers',

	'faq'				=> 'FAQ', // FAQ
	'search'			=> 'Recherche', // 'Search'
	'page'				=> 'Page {page}', // 'First page{page}'

	'close'				=> 'Fermer',//'关闭',  //  'Close',

//--------------------------------------------------------------------------
// Added by Valery Votintsev

//source/include/misc/misc_security.php
	'attackevasive_1_subject'	=> 'Limite de fr&#233;quence de rafra&#238;chissement', // 'Limite de fr&#233;quence de rafra&#238;chissement'
	'attackevasive_1_message'	=> 'Vous visitez le site trop rapidement, moins de deux secondes! Svp. veuillez patienter encore un peu...', // 'You visit the site too fast, less than two seconds! Please wait a little...'
	'attackevasive_2_subject'	=> 'Acc&#232;s via des serveurs proxy est limit&#233;e', // 'Access throug proxy servers is restricted'
	'attackevasive_2_message'	=> 'L&#180;acc&#232;s au site via un serveur proxy est restreinte pour l&#180;&#233;crasement. Svp. Veuillez supprimer vos param&#232;tres de configuration de proxy, et l&#180;acc&#232;s au site directement.', // 'Access to the site through a proxy servers is restricted for mow. Please remove your proxy setting configuration, and access to the site directly.'
	'attackevasive_4_subject'	=> 'Ouvrir rechargement de la page', // 'Open the page reload'
	'attackevasive_4_message'	=> 'Bienvenue sur le site, la page est en rechargement, Svp. merci de patienter un moment...', // 'Welcome to the site, the page is re-loading, please wait ...'

//Months Names
	'month_name'	=> array('Mois','Janvier','F&#233;vrier','Mars','Avril','Mai','Juin','Juillet','Ao&#251;t','Septembre','Octobre','Novembre','D&#233;cembre'), // array('Month','January','February','March','April','May','June','July','August','September','October','November','December'),

);

