<?php

	namespace Inteve\AssetsManager\Bundles;

	use Inteve\AssetsManager\IAssetsBundle;
	use Inteve\AssetsManager\Bundle;


	class DropzoneBundle implements IAssetsBundle
	{
		/** @var string */
		private $basePath;


		/**
		 * @param string $basePath
		 */
		public function __construct($basePath)
		{
			$this->basePath = $basePath . ($basePath !== '' ? '/' : '');
		}


		public function getName()
		{
			return 'frontpack/lucy.js@dom';
		}


		public function registerAssets(Bundle $bundle)
		{
			$bundle->addScript($this->basePath . 'dom.js');
		}
	}
