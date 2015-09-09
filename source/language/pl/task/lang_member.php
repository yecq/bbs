<?php

/**
 *      [Discuz!] (C)2001-2099 Comsenz Inc.
 *      This is NOT a freeware, use is subject to license terms
 *
 *      $ID: lang_member.php by Valery Votintsev at 
 *      polish language pack by kaaleth ( kaaleth-discuzpl@windowslive.com )
 */

if(!defined('IN_DISCUZ')) {
	exit('Access Denied');
}

$lang = array
(
	'member_name'				=> 'Wyzwanie użytkownika',//'会员类任务',
	'member_desc'				=> 'Podgrzej atmosferę forum korzystając z funkcji takich jak: *Dodaj znajomych*, *Dodaj do ulubionych* i *Użyj magii*.',//'收藏主题、使用道具、添加漫游应用，此类任务用来鼓励和引导会员使用论坛的某个功能，活跃论坛的氛围',
	'member_complete_var_act'		=> 'Akcja',//'动作',
	'member_complete_var_act_favorite'	=> 'Dodaj temat do ulubionych',//'收藏主题',
	'member_complete_var_act_magic'		=> 'Użyj magii',//'使用道具',
	'member_complete_var_act_userapp'	=> 'Dodaj aplikację',//'添加漫游应用',
	'member_complete_var_num'		=> 'Minimum number of times to perform action',//'执行动作次数下限',
	'member_complete_var_num_comment'	=> 'Members need to perform the appropriate action at least this number of times',//'会员需要执行相应动作的最少次数',
	'member_complete_var_time'		=> 'Limit czasowy (godz.)',//'时间限制(小时)',
	'member_complete_var_time_comment'	=> 'Set the time restrictions to comlete the task. If a member can not complete the task in this time range, the task marked as failed and no award given. Set to 0 or leave blank for no limits.',//'设置会员从申请任务到完成任务的时间限制，会员在此时间内未能完成任务则不能领取奖励并标记任务失败，0 或留空为不限制',

	'task_complete_time_start'		=> 'Realizacja: ',//'从申请任务开始计时，',
	'task_complete_time_limit'		=> '{value} godz.',//'{value} 小时内，',
	'task_complete_act_favorite'		=> ' Dodanych tematów jako ulubione: {value}.',//'收藏 {value} 个主题',
	'task_complete_act_magic'		=> ' Użytych magii: {value} razy.<br />You can post threads, blogs, images, or use magics',//'使用 {value} 次道具。<br />您可以在帖子页面、日志页面、图片页面等使用道具',
	'task_complete_act_userapp'		=> 'Dodanych aplikacji: {value}.',//'添加 {value} 个漫游应用',
);

