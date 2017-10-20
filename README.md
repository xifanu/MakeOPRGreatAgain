# MakeOPRGreatAgain

## 写在前面

作者不会前端，所以代码质量较低，欢迎前端大神帮忙提升代码质量！

整个系列欢迎push request!

## 安装

本插件适用于 ``Firefox`` 和 ``Chrome`` 浏览器,也应该适用于 ``Opera``等支持用户自定义脚本的浏览器,但是并没有经过深入测试.

### Chrome

建议安装[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)插件,插件安装完成后,点击[下载](https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/MakeOPRGreateAgain.user.js),然后按提示操作即可.

### Firefox
安装[Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)插件.点击[下载](https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/MakeOPRGreateAgain.user.js),然后在出现的会话框中点击``安装``

### 其它浏览器

请自行查阅手册

### 自动更新

在大多数情况下,本插件安装完成后都会自动更新,如果没有,请尝试以下步骤进行手动更新:
#### Chrome & Tampermonkey

打开 ``Tampermonkey``的菜单页面,点击“检查用户脚本更新”,点击完成后,你的脚本就已全部更新，刷新你的OPR界面,就可以感受到新版

#### Firefox & Greasemonkey

打开``Greasemonkey``菜单页面,点击``管理用户脚本``,在新页面中点击右上方的齿轮,点击“检查更新”,或者在插件列表中找到你要更新的插件,右键点击并选择"查找更新"即可.

## 使用

展开右上角即可查看更多信息，所有信息均来源于页面已有数据。

# 5StarOneKey
已经更新到自定义打分版本，名字已经出现偏差啦，但是叫着顺口懒得改了

## 安装

-------------

点击[这里](https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/OPRNotification.user.js)安装

## 使用

鼠标。

## 不想用默认评分？

-------------

很容易。

照着这个写，别忘了后面的逗号，在源代码上直接改就行

```
{button:"553355", total:5, name:3, history:3, unique:3, location:5, safety:5},

// ↑按钮名称        ↑总分     ↑名字     ↑历史     ↑独一无二   ↑位置       ↑安全
```
插入/替换到buttons那个list里即可


# OPRNotification

## 安装

直接[点此](https://github.com/jqqqqqqqqqq/MakeOPRGreatAgain/raw/master/OPRNotification.user.js)安装即可

## 使用

默认20-60秒检查一次。请将页面保留在“当前无 po 可审”，即 opr.ingress.com/recon，否则插件不会启动。
