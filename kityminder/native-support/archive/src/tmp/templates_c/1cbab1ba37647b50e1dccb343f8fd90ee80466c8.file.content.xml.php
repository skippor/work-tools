<?php /* Smarty version Smarty-3.1.19, created on 2014-10-29 15:51:17
         compiled from "/Users/techird/prj/km/native-support/archive/src/tpl/xmind/content.xml" */ ?>
<?php /*%%SmartyHeaderCode:99111513354509c754f5994-81304722%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '1cbab1ba37647b50e1dccb343f8fd90ee80466c8' => 
    array (
      0 => '/Users/techird/prj/km/native-support/archive/src/tpl/xmind/content.xml',
      1 => 1414551648,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '99111513354509c754f5994-81304722',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'meta' => 0,
    'topic' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.19',
  'unifunc' => 'content_54509c75635bd3_90331713',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_54509c75635bd3_90331713')) {function content_54509c75635bd3_90331713($_smarty_tpl) {?><?php echo '<?xml';?> version="1.0" encoding="UTF-8" standalone="no"<?php echo '?>';?>
<xmap-content xmlns="urn:xmind:xmap:xmlns:content:2.0" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" timestamp="1407310121003" version="2.0"><sheet id="<?php echo $_smarty_tpl->tpl_vars['meta']->value['id'];?>
" timestamp="<?php echo $_smarty_tpl->tpl_vars['meta']->value['timestamp'];?>
"><?php if (isset($_smarty_tpl->tpl_vars['topic']->value['data'])) {?><?php echo $_smarty_tpl->getSubTemplate ("xmind/topic.xml", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, null, array('topic'=>$_smarty_tpl->tpl_vars['topic']->value,'clazz'=>true), 0);?>
<?php }?><title>画布 1</title></sheet></xmap-content><?php }} ?>
