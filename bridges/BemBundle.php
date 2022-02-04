<?php

	namespace Frontpack\LucyJs\Bridges;

	use Inteve\AssetsManager\IAssetsBundle;
	use Inteve\AssetsManager\Bundle;


	/**
	 * @deprecated use AssetsBundle
	 */
	class BemBundle implements IAssetsBundle
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
			return 'frontpack/lucy.js@bem';
		}


		public function registerAssets(Bundle $bundle)
		{
			$bundle->requireBundle('frontpack/lucy.js@dom');
			$bundle->addScript($this->basePath . 'bem.js');
		}
	}
