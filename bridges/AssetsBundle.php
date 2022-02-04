<?php

	namespace Inteve\AssetsManager\Bundles;

	use Inteve\AssetsManager\IAssetsBundle;
	use Inteve\AssetsManager\Bundle;


	class AssetsBundle implements IAssetsBundle
	{
		const NAME = 'frontpack/lucy.js';

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
			return self::NAME;
		}


		public function registerAssets(Bundle $bundle)
		{
			if ($bundle->isSubset('dom')) {
				$bundle->addScript($this->basePath . 'dom.js');

			} elseif ($bundle->isSubset('bem')) {
				$bundle->requireBundle(self::NAME, 'dom');
				$bundle->addScript($this->basePath . 'bem.js');

			} elseif ($bundle->isSubset('modal')) {
				$bundle->requireBundle(self::NAME, 'dom');
				$bundle->addScript($this->basePath . 'modal.js');
			}
		}
	}
