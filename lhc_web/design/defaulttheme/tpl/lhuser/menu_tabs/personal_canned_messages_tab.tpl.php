<?php include(erLhcoreClassDesign::designtpl('lhuser/menu_tabs/personal_canned_messages_tab_pre.tpl.php'));?>
<?php if ($user_menu_tabs_personal_canned_messages_tab == true && erLhcoreClassUser::instance()->hasAccessTo('lhuser','personalcannedmsg')) : ?>
<li role="presentation" class="nav-item <?php if ($tab == 'tab_canned') : ?>active<?php endif;?>"><a class="nav-link" href="#canned" aria-controls="canned" role="tab" data-toggle="tab"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('user/account','Personal canned messages');?></a></li>
<?php endif;?>