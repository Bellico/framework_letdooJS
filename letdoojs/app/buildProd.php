<?php

ini_set('display_errors', 1);

$autoload = '../../lib/assetic/vendor/autoload.php';
if(!file_exists($autoload)){
	echo "Go /lib/assetic and do composer update please";
    echo "<br />";
    echo "And : npm i yuicompressor , if you have not install yui compressor";
	exit();
}


define ('PATH',dirname(dirname(dirname(realpath("buildProd.php")))).DIRECTORY_SEPARATOR);
define ('PATH_LDS', PATH.DIRECTORY_SEPARATOR.'letdoojs'.DIRECTORY_SEPARATOR);
define ('PATH_SRC', PATH.DIRECTORY_SEPARATOR.'src'.DIRECTORY_SEPARATOR);
define ('PATH_LIB', PATH.DIRECTORY_SEPARATOR.'lib'.DIRECTORY_SEPARATOR);


require $autoload;


use Assetic\Asset\AssetCollection;
use Assetic\Filter\Yui;
use Assetic\Asset\GlobAsset;
use Assetic\Asset\FileAsset;



$js = new AssetCollection(array(
    new FileAsset(PATH_LDS.'letdoojs.js'),
    new FileAsset(PATH_LDS.'app\Kernel.js'),
    new FileAsset(PATH_LDS.'app/Config.js'),
    new FileAsset(PATH_LDS.'app\Routing.js'),
    new GlobAsset(PATH_LDS.'core\*'),
    new GlobAsset(PATH_LDS.'behaviors\*'),
    new GlobAsset(PATH_LDS.'components\*'),
    new GlobAsset(PATH_LDS.'utils\*'),
    new GlobAsset(PATH_SRC.'controllers\*'),
),array(
 	 new Yui\JsCompressorFilter(PATH_LIB.'yuicompressor.jar'),
));

$data = $js->dump();
file_put_contents(PATH.'web/js/letdoojs.min.js',$data);
echo $data;
