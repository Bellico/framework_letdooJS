<?php

ini_set('display_errors', 1);

$autoload = '../../lib/assetic/vendor/autoload.php';
if(!file_exists($autoload)){
	"Go /lib/assetic and do composer update";
	exit();
}

require $autoload;


use Assetic\Asset\AssetCollection;
use Assetic\Filter\Yui;
use Assetic\Asset\GlobAsset;
use Assetic\Asset\FileAsset;



$js = new AssetCollection(array(
    new FileAsset('/var/www/letdoojs/letdoojs/letdoojs.js'),
    new FileAsset('/var/www/letdoojs/letdoojs/app/Config.js'),
    new FileAsset('/var/www/letdoojs/letdoojs/app/Routing.js'),
    new GlobAsset('/var/www/letdoojs/letdoojs/core/*'),
    new GlobAsset('/var/www/letdoojs/letdoojs/behaviors/*'),
    new GlobAsset('/var/www/letdoojs/letdoojs/components/*'),
    new GlobAsset('/var/www/letdoojs/letdoojs/utils/*'),
    new GlobAsset('/var/www/letdoojs/src/controllers/*'),
    new FileAsset('/var/www/letdoojs/letdoojs/app/Kernel.js'),
),array(
 	 //new Yui\JsCompressorFilter('/var/www/letdoojs/lib/yuicompressor.jar'),
));

$data = $js->dump();
file_put_contents('/var/www/letdoojs/web/js/letdoojs.min.js',$data);
echo $data;
