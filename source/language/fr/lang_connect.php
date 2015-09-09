<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *       Traduction By: Andre13 et Bertrand discuz-fr.fr Support French
 *      $Id: lang_connect.php by Valery Votintsev, codersclub.org
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(

	'feed_sync_success'		=> 'Flux synchronisation r&#233;ussie', // 'Feed successful synchronization'
	'deletethread_sync_success'	=> 'Effacer Rubrique de la synchronisation avec Succ&#232;s ', // 'Delete topic successful synchronization'
	'deletethread_sync_failed'	=> 'La synchronisation a &#233;chou&#233; le sujet Effacer', // 'Delete topic synchronization failed'
	'server_busy'			=> 'D&#233;sol&#233;, Il existe actuellement des probl&#232;mes de r&#233;seau ou de serveur occup&#233;, Svp. essayer &#224; nouveau plus tard. ', // 'Sorry, currently there are network problems or server busy, please try again later. '
	'share_token_outofdate'		=> 'Pour la s&#233;curit&#233; de votre compte, S&#180;il vous pla&#238;t veuillez utiliser le compte QQ pour vous connecter de nouveau afin de mettre &#224; jour les m&#233;canismes du compte s&#233;curitaire<br/><br/>Cliquez <a href={login_url}><img src=static/image/common/qq_login.gif class=vm alt="QQ connexion" /></a>, la page sera redirig&#233;',//'为了您的账号安全，请使用QQ帐号重新登录，将为您升级帐号安全机制<br/><br/>点击<a href={login_url}><img src=static/image/common/qq_login.gif class=vm alt=QQ登录 /></a>页面将发生跳转', //  'For your account security, Please use QQ account to log in again for upgrade your account security mechanisms<br/><br/>Click <a href={login_url}><img src=static/image/common/qq_login.gif class=vm alt="QQ login" /></a>, the page will redirected',
	'share_success'			=> 'Succ&#232;s du Partage', // 'Sharing success'
	'broadcast_success'		=> 'Diffusion r&#233;ussie', // Successful broadcast

	'qzone_title'			=> 'Titre', // 'Title'
	'qzone_reason'			=> 'Raison', // 'Reason'
	'qzone_picture'			=> 'Images', // 'Pictures'
	'qzone_shareto'			=> 'QQ espace de partage', // 'QQ space to share'
	'qzone_to_friend'		=> 'Partagez avec vos Amis', // 'Share with friends'
	'qzone_reason_default'		=> 'Pouvez saisir les d&#233;tails de la raison ou &#224; partager', // 'Can enter the reason or details to share'
	'qzone_subject_is_empty'	=> 'Le titre ne peut pas &#234;tre vide', // 'The title can not be empty'
	'qzone_subject_is_long'		=> 'Le titre d&#233;passe la limite en longueur', // 'The title over the length limit'
	'qzone_reason_is_long'		=> 'La raison d&#233;passe la limite en longueur', // 'The reason more than the length limit'
	'qzone_share_same_url'		=> 'Le post est d&#233;j&#224; partagé, pas besoin de r&#233;p&#233;ter le partage',//'该帖子您已经分享过，不需要重复分享', // 'The post is allready shared, Not need to repeat sharing',

	'weibo_title'			=> 'Pour partager votre microblog, par la mani&#232;re Dites au moins un mot ou une phrase ', // 'To share my microblogging, by the way Say something'
	'weibo_input'			=> 'Peut entrer dans le  <strong id=checklen></strong> mot', // 'Can enter the  <strong id=checklen></strong> word'
	'weibo_select_picture'		=> 'Svp.Veuillez choisir de partager des photos', // 'Please choose to share pictures'
	'weibo_share'			=> 'Partage', // Share
	'weibo_share_to'		=> 'Tencent pour diffusions microblogging', // 'Tencent broadcasts to microblogging'
	'weibo_reason_is_long'		=> 'Contenu du Micro Blog  est sup&#233;rieure dans sa longueur', // 'Microblogging content exceeds the length limit'
	'weibo_same_content'		=> 'Le post est d&#233;j&#224; diffus&#233;, pas besoin de r&#233;p&#233;ter sa diffusion',//'该帖子您已经转播过，不需要重复转播',  //   'The post is allready broadcasted, not need to repeat broadcasting',
	'weibo_account_not_signup'	=> 'D&#233;sol&#233;, vous ne pouvez pas ouvrir Blog micro, ne peut pas partager le contenu <a href=http://t.qq.com/reg/index.php target=_blank>Cliquez ici pour ouvrir imm&#233;diatement</a>.', // 'Sorry,your can not open microblogging,can not share content <a href=http://t.qq.com/reg/index.php target=_blank>Click here to immediately open</a>.'
	'user_unauthorized'		=> 'D&#233;sol&#233;, vous n&#180;&#234;tes pas autoris&#233; &#224; partager le th&#232;me de cette Espace pour le QQ, Tencent, Tencent micro-Bo et ses Amis.', // 'Sorry, you are not authorized to share the space theme to the QQ, Tencent, Tencent micro-Bo and friends.'

	'connect_errlog_server_no_response'		=> 'Serveur n&#180;a pas r&#233;pondu', // 'Server did not respond'
	'connect_errlog_access_token_incomplete'	=> 'L&#180;insuffisance des donn&#233;es jeton d\'Acc&#232;s', // 'Incomplete Access Token data' // 'L\'insuffisance des donn&#233;es jeton d\'Acc&#232;s',
	'connect_errlog_request_token_not_authorized'	=> 'Jeton Utilisateurs non autoris&#233;s ou retourner sur des donn&#233;es incompl&#232;tes', // 'Token unauthorized users or return incomplete data'
	'connect_errlog_sig_incorrect'			=> 'URL de la Signature est Incorrecte', // 'URL Signature is not correct'

	'connect_tthread_broadcast'	=> 'Diffusion du microblog',//'转播微博', //  'Broadcast to microblog', 
	'connect_tthread_message'	=> '<br><br><img class="vm" src="static/image/common/weibo.png">&nbsp;<a href="http://t.qq.com/{username}" target="_blank">Partant de {nick} de Tencent microblog</a>',//'<br><br><img class="vm" src="static/image/common/weibo.png">&nbsp;<a href="http://t.qq.com/{username}" target="_blank">来自 {nick} 的腾讯微博</a>',  //  '<br><br><img class="vm" src="static/image/common/weibo.png">&nbsp;<a href="http://t.qq.com/{username}" target="_blank">From {nick} at Tencent microblog</a>',
	'connect_tthread_comment'	=> 'Microblog Commentaires',//'微博评论', //  'Microblog Comments',
);

