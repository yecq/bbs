<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $Id: lang_email.php 27449 2012-02-01 05:32:35Z zhangguosheng $
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

/**
 *      为使用需要而翻译，原程序开发者版权所有
 *      Translated By Nurqut Team.
 *      Translation Time : 2014-01-02
*/
$lang = array
(
	'hello' => 'ئەسسالامۇئەلەيكۇم',
	'moderate_member_invalidate' => 'رەت قىلىش',
	'moderate_member_delete' => 'ئۆچۈرۈش',
	'moderate_member_validate' => 'تەستىقلاش',


	'get_passwd_subject' => 'ئىم (پارول) ئېلىش',
	'get_passwd_message' =>		'
<p>{username}，
بۇ خەتنى {bbname} ئەۋەتتى</p>

<p>سىزنىڭ بۇ خەتنى تاپشۇرۇۋېلىشىڭىزدىكى سەۋەپ، بۇ ئېلخەت ئادرېسى {bbname} دە ئەزا ئېلخىتى قىلىپ تىزىملىتىلغان، 
ھەمچە ئەزا Email ئارقىلىق پارول ئۆزگەرتىشى تەلەپ قىلغانلىقى ئۈچۈن.</p>
<p>
----------------------------------------------------------------------<br />
<strong>مۇھىم！</strong><br />
----------------------------------------------------------------------</p>

<p>ئەگەر سىز پارول(ئىم) (پارول)نى ئۆزگەرتمىسىڭىز ياكى {bbname} رەسمىي ئەزاسى بولمىسىڭىز،，بۇ خەتنى دەرھال ئۆچۈرۈپ تاشلاڭ!.سىز پەقەت پارول(ئىم) (پارول)نى قايتا ئۆزگەرتمەكچى بولسىڭىز، ئاندىن تۆۋەندىكى مەزمۇنلارنى ئوقۇسىڭىز بولىدۇ.</p>
<p>
----------------------------------------------------------------------<br />
<strong>ئىم (پارول)نى قايتا بېكىتىش</strong><br />
----------------------------------------------------------------------</p>
</p>
سىز پەقەت ئۈچ كۈن ئىچىدە تۆۋەندىكى ئۇلىنىشنى بېسىپ پارولنى ئۆزگەرتەلەيسىز:<br />

<a href="{siteurl}member.php?mod=getpasswd&amp;uid={uid}&amp;id={idstring}" target="_blank">{siteurl}member.php?mod=getpasswd&amp;uid={uid}&amp;id={idstring}</a>
<br />
(ئەگەر يۇقىرىقى ئۇلىنىش كۆرۈنمىسە، ئادرېسنى جاھاننامىگە چاپلاپ، ئاندىن زىيارەت قىلىڭ)</p>

<p>يۇقىرىقى بەت ئېچىلغاندىن كېيىن  يېڭى پارول(ئىم) (پارول)نى كىرگۈزۈڭ، شۇندىلا يېڭى پارول(ئىم) (پارول)نى ئىشلىتىپ مۇنبەرگە كىرەلەيسىز، سىز يەنە ئەزالار كونترول سۇپىسىدا تۇرۇپ، ئىم (پارول)نى خالىغانچە ئۆزگەرتەلەيسىز.</p>

<p>ئىلتىماس قىلغۇچىنىڭ IP سى {clientip}</p>


<p>
ھۆرمەت بىلەن<br />
</p>
<p>{bbname} باشقۇرغۇچىدىن.
{siteurl}</p>',


	'email_verify_subject' => 'Email ئادرېسىنى تەكشۈرۈش',
	'email_verify_message' =>	'<br />
<p>{username}，<br />
بۇ خەتنى  {bbname}ئەۋەتتى</p>

<p>سىز  {bbname}  غا تىزىملاتقان، ياكى ئەزا ئېلخەت ئادرېسىنى ئۆزگەرتكەنلىكىڭىز ئۈچۈن، بۇ خەتنى تاپشۇرۇۋالدىڭىز. ناۋادا سىز {bbname}غا كىرمىگەن ياكى يۇقارقىدەك مەشغۇلات قىلمىغان بولسىڭىز، بۇ خەت بېلەن كارىڭىز بولمىسۇن!</p>
<br />
----------------------------------------------------------------------<br />
<strong>ھېسابات ئاكتىپلاش ھەققىدە</strong><br />
----------------------------------------------------------------------<br />
<br />
<p>سىز {bbname} غا تىزىملاتقان ياكى ئېلخەت ئادرېسىنى ئۆزگەرتكەن بولسىڭىز، بىز ئېلخەت ئادرېسىنىڭ ئىناۋەتلىك ياكى ئەمەسلىكىنى دەلىللەش ئۈچۈن بۇ ئېلخەت ئەۋەتىلدى.</p>

<p>تۆۋەندىكى ئادرېسنى چېكىپ دەللىلەڭ:<br />

<a href="{url}" target="_blank">{url}</a>
<br />
(ئۈستىدىكى بىۋاستە ئۇلىنىش بولمىسا، ئادرېسنى كۆچۈرۈپ زىيارەت قىلىڭ.)</p>

<p>زىيارەت قىلغىنىڭىز ئۈچۈن رەھمەت، سىزگە خۇشاللىق يار بولسۇن!</p>


<p>
ھۆرمەت بىلەن<br />

{bbname} باشقۇرۇش گۇرۇپپىسىدىن.<br />
{siteurl}</p>',

	'email_register_subject' => 'مۇنبەر تىزىملىتىش ئادرېسى',
	'email_register_message' =>	'<br />
<p>بۇ خەتنى {bbname} يوللىغان</p>

<p>سىز تاپشۇرۋالغان بۇ ئېلخەت بولسا ،  {bbname} غا تىزىملاتقاندىكى ئېلخەت ئادرېسىڭىزغا ئاساسەن يوللانغان . ئەگەر سىز  {bbname} نى زىيارەت قىلىپ باقمىغان بولسىڭىز ياكى يۇقارقىدەك مەشغۇلاتلارنى قىلمىغان بولسىڭىز ، بۇ ئېلخەتنى ئېتبارغا ئالمىسىڭىزمۇ بولىدۇ . سىزنىڭ قايتىدىن باشقا مەشغۇلاتلارنى قىلىشىڭىزنىڭ ياكى مۇشتەرىلىقتىن چېكىنىشىڭىزنىڭ ھاجىتى يوق .</p>
<br />
----------------------------------------------------------------------<br />
<strong>يېڭى ئەزا تىزىملىتىش چۈشەندۈرلىشى</strong><br />
----------------------------------------------------------------------<br />
<br />
<p>ئەگەر سىز {bbname} نىڭ يېڭى ئەزاسى بولسىڭىز ياكى Email ئۆزگەرتكەندە مۇشۇ ئادرېسنى ئىشلەتكەن بولسىڭىز ، بىز سىزنىڭ ئىشلەتكەن بۇ ئادرېسىڭىزغا قارىتا دەلىلەش ئېلىپ بارىمىز . بۇنداق بولغاندا بىر قىسىم ئەخلەت  پوچتا يوللانمىسى ۋە ئادرېسنىڭ قالايمىقان ئىشلىتىلىشىدىن ساقلانغىلى بولىدۇ .</p>

<p>تۆۋەندىكى ئۇلىنىشنى چېكىپ تىزىملىتىڭ ، بۇ ئۇلىنىشنىڭ ئۈنۈملىك ۋاقتى ئۈچ كۈن بولۇپ ، ئەگەر ۋاقتى ئۆتۈپ كەتسە قايتىدىن بىر پارچە دەلىلەش يوللانمىسى يوللاشنى تەلەپ قىلسىڭىز بولىدۇ :<br />

<a href="{url}" target="_blank">{url}</a>
<br />
(ئەگەر يۇقۇردىكىسى ئۇلىنىش شەكىلى بولمىسا ، ئادرېسنى  كۆچۈرۈپ ئېلىپ تور كۆرگۈ ئادرېس سىتونىغا چاپلاپ قايتىدىن زىيارەت قىلىڭ)</p>

<p>زىيارەت قىلغىنىڭىزغا كۆپ رەھمەت ، خۇشال - خۇرام ئىشلىتىشىڭىزگە تىلەكداشمىز !</p>


<p>
ھۆرمەت بىلەن<br />

{bbname} بباشقۇرۇش گۇرۇپپىسىدىن.<br />
{siteurl}</p>',


	'add_member_subject' => 'سىز ئەزا بولدىڭىز',
	'add_member_message' => 	'
{newusername} ，
بۇ خەتنى {bbname} ئەۋەتتى.<br />
<br />
مەن باشقۇرغۇچى {adminusername} ，{bbname} بولىمەن،سىز مۇنبىرىمىزگە ئەزا بولغانلىقىڭىز ئۈچۈن، بۇ خەتنى تاپشۇرۇپ ئالدىڭىز. ،بۇ Email  سىز تىزىملاتقان ئادرېستۇر.
بايام {bbname} نىڭ ئەزاسى بلودىڭىز، بۇ Email بىز سىز ئۈچۈن تىزىملاتقان ئېلخەت ئادىرىسى.<br />
<br />
----------------------------------------------------------------------<br />
مۇھىم!<br />
----------------------------------------------------------------------<br />
<br />
ئەگەر سىز {bbname}گە قىزىقمىسىڭىز ياكى بىلمەي تۇرۇپ،تاسادىپىي ئەزا بولۇپ قالغان بولسىڭىز، بۇ خەتكە پەرۋا قىلمىسىڭىزمۇ بولىدۇ.<br />
<br />
----------------------------------------------------------------------<br />
ھېسابات ئۇچۇرلىرى<br />
----------------------------------------------------------------------<br />
<br />
مۇنبەر نامى: {bbname}<br />
مۇنبەر ئادرېسى: {siteurl}<br />
<br />
ئەزا ئىسمى: {newusername}<br />
پارول: {newpassword}<br />
<br />
ھازىردىن باشلاپ،سىز ئەزالىق ئۇچۇرلىرىڭىز بىلەن {bbname}نى زىيارەت قىلالايسىز، مۇبارەك بولسۇن!<br />
<br />
<br />
<br />
ھۆرمەت بىلەن<br />
<br />
{bbname} باشقۇرۇش گۇرۇپىسى .<br />
{siteurl}',


	'birthday_subject' =>		'تۇغۇلغان كۈنىڭىزگە مۇبارەك بولسۇن',
	'birthday_message' => 		'<br />
{username}，<br />
بۇ خەت {bbname} تەرىپىدىن ئەۋەتىلدى.<br />
<br />
سىز مۇشۇ خەت ساندۇقى بىلەن {bbname}گە تىزىملانغان بولغاچقا، بۇ خەتنى تاپشۇرۇپ ئالدىڭىز.，سىز تولدۇرغان ئۇچۇرلار بويىچە، بۈگۈن سىزنىڭ تۇغۇلغان كۈنىڭىز ئىكەن.مەن ئىنتايىن خۇشاللىق بىلەن سىزگە بەخت تىلەيمەن.<br />
مەن {bbname}دىكى بارلىق باشقۇرغۇچىلارغا ۋاكالىتەن تۇغۇلغان كۈنىڭىزنى قۇتلۇقلايمەن.<br />
ئەگەر سىز {bbname} ئەزاسى بولمىسىڭىز ياكى بۈگۈن سىزنىڭ تۇغۇلغان كۈنىڭىز ئەمەس بولسا، ئۇ ھالدا، بەزىلەر سىزنىڭ خەت ساندۇقىڭىزنى خاتا تولدۇرۇپ قويغان ياكى تۇغۇلغان كۈنىڭىزنى خاتا تولدۇرۇپ قويغان بولۇشى مۇمكىن، بۇ خەت كۆپ قېتىم تەكرار ئەۋەتىلمەيدۇ.كارىڭىز بولمىسۇن!
<br />
<br />
ھۆرمەت بىلەن<br />
<br />
{bbname} باشقۇرۇش گۇرۇپپىسى.<br />
{siteurl}',

	'email_to_friend_subject' => '{$_G[member][username]} نى تەۋسىيە قىلىپ سىزگە: $thread[subject]',
	'email_to_friend_message' => '
بۇ {$_G[setting][bbname]} نىڭ {$_G[member][username]} گە يوللىغان خېتى.
<br />
سىز تاپشۇرۇپ ئالغان بۇ يوللانما {$_G[member][username]} نىڭ ھاۋالىسى بىلەن {$_G[setting][bbname]} «دوستلارغا تەۋسىيە قىلىش» ئىقتىدارى ئارقىلىق يوللانغان، ناۋادا سىز بۇنىڭغا قىزىقمىسىڭىز، نەزەردىن ساقىت قىلسىڭىزمۇ بولىدۇ. قايتۇرۇۋېتىش ياكى باشقا مەشغۇلاتنى قىلمىسىڭىزمۇ بولىدۇ. مەزمۇننى سىزگە تەۋسىيە قىلغان
<br />
----------------------------------------------------------------------<br />
ئەسلى خەتنىڭ بېشى<br />
----------------------------------------------------------------------<br />
<br />
$message<br />
<br />
----------------------------------------------------------------------<br />
ئەسلى خەتنىڭ ئاخىرى<br />
----------------------------------------------------------------------<br />
<br />
请注意这封信仅仅是由用户使用 “推荐给朋友”发送的，不是网站官方邮件，<br />
网站管理团队不会对这类邮件负责。<br />
<br />
قەدىمىڭىزگە مەرھابا! {$_G[setting][bbname]}<br />
$_G[siteurl]',

	'email_to_invite_subject' => 'دوستىڭىز {$_G[member][username]}سىزگە ئەۋەتتى {$_G[setting][bbname]} مۇنبەرگە تىزىملىتىشقا تەكلىپ قىلىش كودىنى',
	'email_to_invite_message' =>	'<br />
$sendtoname,<br />
بۇ يوللانما {$_G[setting][bbname]}تەرىپىدىن {$_G[member][username]} گە يوللىغان.<br />
<br />
سىزنىڭ بۇ يوللانمىنى قوبۇل قىلىشىڭىزنىڭ سەۋەبى بولسا {$_G[member][username]} {bbname}دىكى «تەكلىپ كودىنى دوستلىرىمغا يوللاش» ئىقتىدارى ئارقىلىق سىزگە يوللىغان، ئەگەر سىز بۇ نىڭغا قىزىقمىسىڭىز، نەزەردىن ساقىت قىلسىڭىزمۇ بولىدۇ. ياكى قايتۇرۇۋېتىش مەشغۇلاتى قىلمىسىڭىزمۇ بولىدۇ.<br />
<br />
----------------------------------------------------------------------<br />
ئەسلى خەتنىڭ بېشى<br />
----------------------------------------------------------------------<br />
<br />
$message<br />
<br />
----------------------------------------------------------------------<br />
ئەسلى خەتنىڭ ئاخىرى<br />
----------------------------------------------------------------------<br />
<br />
دىققەت، بۇ پەقەت ئەزالارنىڭ «دوستلىرىمغا تەكلىپ كودى يوللاش» ئىقتىدارىدىن پايدىلىنىپ ئەۋەتىلگەن يوللانما، مۇنبەر يوللانمىسى ئەمەس، بۇنىڭغا مۇنبەر باشقۇرغۇچىلىرى مەسئۇل بولمايدۇ.<br />
<br />
قەدىمىڭىزگە مەرھابا! {$_G[setting][bbname]}<br />
$_G[siteurl]',


	'moderate_member_subject' => 'ئەزالار تەستىق نەتىجە ئۇقتۇرۇشى',
	'moderate_member_message' =>	'<br />
<p>{username},
بۇنى {bbname}يوللىغان.</p>

<p>سىز تاپشۇرۇپ ئالغان بۇ يوللانما، سىزنىڭ {bbname}گە يېڭىدىن تىزىملاتقاندا ئىشلىتىلىدۇ، شۇنداقلا باشقۇرغۇچىلار يېڭى ئەزانى سۈنئىي تەستىقلاش ئىقتىدارى قوشقان بولغاچقا، سىزنىڭ ئىلتىماسىڭىزنىڭ تەستىقلىنىش نەتىجىسىنى ئۇقتۇرۇش قىلىشقا ئىشلىتىلىدۇ.</p>

<br />
----------------------------------------------------------------------<br />
<strong>تىزىملىتىش ئۇچۇرى ۋە تەستىقلاش نەتىجىسى</strong><br />
----------------------------------------------------------------------<br />
<br />
ئىسمىڭىز: {username}<br />
تىزىم ۋاقتى: {regdate}<br />
يوللىغان ۋاقىت: {submitdate}<br />
يوللاش سانى: {submittimes}<br />
تىزىم سەۋەبى: {message}<br />
<br />
تەستىق نەتىجىسى: {modresult}<br />
تەستىق ۋاقتى: {moddate}<br />
تەستىقلىغۇچى: {adminusername}<br />
باشقۇرغۇچى سۆزى: {remark}<br />
<br />
----------------------------------------------------------------------<br />
<strong>تەستىق نەتىجە ئىزاھاتى</strong><br />
----------------------------------------------------------------------<br />

<p>تەستىقتىن ئۆتتى: سىزنىڭ ئىلتىماسىڭىز تەستىقلاندى، ئەمدى سىز {bbname} نىڭ رەسمىي ئەزاسى بولدىڭىز.</p>

<p>تەستىقتىن ئۆتتى: سىزنىڭ ئىلتىماسىڭىز تەستىقلاندى، ئەمدى سىز {bbname} نىڭ رەسمىي ئەزاسى بولدىڭىز.</p>

<p>تەستىقلانمىدى: سىز تەمىنلىگەن ئۇچۇر تولۇق ئەمەس، بىزنىڭ تەلىپىمىزگە يەتمەيدۇ، باشقۇرغۇچى قالدۇرغان سۆز بويىچە<a href="home.php?mod=spacecp&ac=profile" target="_blank"> ئۇچۇرلىرىڭىزنى تولۇقلاپ </a> ئاندىن قايتا يوللاڭ.</p>

<p>ئۆچۈرۈلدى: سىز تەمىنلىگەن ئۇچۇرلار بىزنىڭ تەلىپىمىزدىن تولىمۇ يىراق، ياكى بىز تەستىقلايدىغان ئەزا سانى توشۇپ كەتتى، شۇڭا ئىلتىماسىڭىز رەت قىلىندى، شۇنداقلا ئەزالىق نامىڭىز سانداندىن ئۆچۈرۈپ تاشلاندى. قايتا كىرەلمەيسىز ياكى ئەزا بولالمايسىز، كەچۈرۈڭ!</p>

<br />
<br />
ھۆرمەت بىلەن<br />
<br />
{bbname} باشقۇرۇش گۇرۇپپىسى<br />
{siteurl}',

	'adv_expiration_subject' => 'بېكىتىڭىزدىكى ئېلان {day} كۈنىدىن كېيىن ۋاقتى ئۆتتى، ۋاقتىدا بىرتەرەپ قىلغايسىز.',
	'adv_expiration_message' => 'بېكىتىڭىزدىكى ئېلان {day} كۈنىدىن كېيىن ۋاقتى ئۆتتى، ۋاقتىدا بىر تەرەپ قىلغايسىز:<br /><br />{advs}',
	'invite_payment_email_message' => '
كەلگەن قەدىمىڭىزگە مەرھابا! {bbname}（{siteurl}）،تالونغا {orderid} ئاللىبۇرۇن ھەق تاپشۇرۇلۇپ بولدى، جەزملەنگەندىن كېيىن كۈچكە ئىگە.<br />
<br />----------------------------------------------------------------------<br />
ئاستىدىكىسى سىز ئېرىشكەن «تەكلىپ قىلىش كودى»
<br />----------------------------------------------------------------------<br />

{codetext}

<br />----------------------------------------------------------------------<br />
重要！
<br />----------------------------------------------------------------------<br />',
);

?>