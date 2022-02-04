<?php

	namespace Frontpack\LucyJs\Bridges;

	use Inteve\AssetsManager\IAssetsBundle;
	use Inteve\AssetsManager\Bundle;


	/**
	 * @deprecated use AssetsBundle
	 */
	class DomBundle implements IAssetsBundle
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
