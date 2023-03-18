const productsArray = [
	{
		id: 'price_1Mm4UlESzDk5tVATRLSA6E3M',
		name: 'BIOME+ cleansing comfort balm',
		price: 39,
		imgUrl: '../images/biome-cleansing-comfort-balm.webp',
	},
	{
		id: 'price_1Mm4W4ESzDk5tVATeyQ9KIrq',
		name: 'ORMEDIC balancing facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4WZESzDk5tVATh2dMJi39',
		name: 'Discovery-size ORMEDIC balancing facial cleanser',
		price: 12,
		imgUrl: '../images/ormedic-balancing-facial-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4XFESzDk5tVAT8vmimYR7',
		name: 'VITAL C hydrating facial cleanser',
		price: 38,
		imgUrl: '../images/vital-c-hydrating-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4XdESzDk5tVATuIQEX9Bn',
		name: 'the MAX facial cleanser',
		price: 36,
		imgUrl: '../images/the-max-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4XuESzDk5tVATZgoSrmmr',
		name: 'AGELESS total facial cleanser',
		price: 38,
		imgUrl: '../images/ormedic-balancing-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4YTESzDk5tVATIoVBEQl0',
		name: 'CLEAR CELL salicylic gel cleanser',
		price: 36,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser.webp',
	},
	{
		id: 'price_1Mm4YyESzDk5tVATqTnjxOs5',
		name: 'Discovery-size CLEAR CELL clarifying salicylic gel cleanser',
		price: 11,
		imgUrl: '../images/clear-cell-salicylic-gel-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4ZNESzDk5tVATtMrw71H3',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl: '../images/iluma-intense-brightening-exfoliating-cleanser.webp',
	},
	{
		id: 'price_1Mm4ZjESzDk5tVAT6YFQTUC9',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'../images/iluma-intense-brightening-exfoliating-cleanser-discovery.webp',
	},
	{
		id: 'price_1Mm4aCESzDk5tVAT8YElE662',
		name: 'I BEAUTY refreshing facial wipes',
		price: 16,
		imgUrl: '../images/i-beauty-refreshing-facial-wipes.webp',
	},
	{
		id: 'price_1Mm4aeESzDk5tVATr9exVpDY',
		name: 'IMAGE MD restoring facial cleanser',
		price: 12,
		imgUrl: '../images/image-md-restoring-facial-cleanser.webp',
	},
	{
		id: 'price_1Mm4b3ESzDk5tVATil4Gi5AD',
		name: 'Double Cleanse Power Duo',
		price: 45.46,
		imgUrl: '../images/double-cleanse-power-duo.webp',
	},
	{
		id: '23287341678771',
		category: 'hand and body skincare',
		name: 'VITAL C hydrating hand and body lotion',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-HAND-AND-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		id: '23975105560755',
		category: 'hand and body skincare',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-EXFOLIATING-BODY-SCRUB-R01A_large.jpg',
	},
	{
		id: '22379830083763',
		category: 'hand and body skincare',
		name: 'ILUMA intense body lotion',
		price: 60,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		id: '23670770663603',
		category: 'hand and body skincare',
		name: 'BODY SPA rejuvenating body lotion',
		price: 36,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-REJUVENATING-BODY-LOTION-R01A_408703d4-772c-4427-b4fc-e8f240f46d3a_large.jpg',
	},
	{
		id: '23671239147699',
		category: 'hand and body skincare',
		name: 'BODY SPA CELL.U.LIFT® firming body crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-FIRMING-BODY-CREME-R01A_large.jpg',
	},
	{
		id: '25253990269107',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL salicylic clarifying pads',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_clarifying_salicylic_pads_PDP_R01a_large.jpg',
	},
	{
		id: '15921255415987',
		category: 'exfoliating scrubs',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-EXFOLIATING-CLEANSER-R01_large.jpg',
	},
	{
		id: '24268380143795',
		category: 'exfoliating scrubs',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ilumaexfoliatingcleanserpdpr01a_large.jpg',
	},
	{
		id: '25253942886579',
		category: 'exfoliating scrubs',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_resurfacing_masque_PDP_R01a_large.jpg',
	},
	{
		id: '23968176144563',
		category: 'exfoliating scrubs',
		name: 'ILUMA® intense brightening exfoliating powder',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-EXFOLIATING-POWDER-RETAIL-SIZE-PDP-01_large.jpg',
	},
	{
		id: '25253988827315',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL clarifying salicylic tonic',
		price: 28,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_clarifying_salicylic_tonic_PDP_R01a_large.jpg',
	},
	{
		id: '23115126112435',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL clarifying salicylic masque',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-SALICYLIC-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '23975105560755',
		category: 'exfoliating scrubs',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-EXFOLIATING-BODY-SCRUB-R01A_large.jpg',
	},
	{
		id: '24589519618227',
		category: 'exfoliating scrubs',
		name: 'ORMEDIC balancing gel polisher',
		price: 44,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic-b2c-gel-polisher-1_f202b9c3-001d-4ba6-93be-181a2f833531_large.jpg',
	},
	{
		id: '25253945049267',
		category: 'exfoliating scrubs',
		name: 'AGELESS total microderm exfoliator',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_microderm_exfoliator_PDP_R01a_large.jpg',
	},
	{
		id: '24986354385075',
		category: 'facial serums',
		name: 'BIOME+ dew bright serum',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BIOME__dew_bright_serum_PDP_R01a_large.jpg',
	},
	{
		id: '7631391948854',
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_large.jpg',
	},
	{
		id: '14832760160435',
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum DELUXE',
		price: 115,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-DELUXE-PDP-R01a_large.jpg',
	},
	{
		id: '21028673552563',
		category: 'facial serums',
		name: 'Discovery-size VITAL C hydrating anti-aging serum',
		price: 30,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-DISCOVERY-SIZE-PDP-01_large.jpg',
	},
	{
		id: '25253929451699',
		category: 'facial serums',
		name: 'AGELESS total pure hyaluronic 6 filler',
		price: 80,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_pure_hyaluronic6_filler_PDP_R01a_large.jpg',
	},
	{
		id: '7631402893366',
		category: 'facial serums',
		name: 'VITAL C hydrating antioxidant A C E serum',
		price: 74,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-aec-serum-with-background_large.jpg',
	},
	{
		id: '23130382074035',
		category: 'facial serums',
		name: 'ILUMA® intense brightening serum',
		price: 60,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-SERUM-R01A_large.jpg',
	},
	{
		id: '24268386828467',
		category: 'facial serums',
		name: 'Discovery-size ILUMA intense brightening serum',
		price: 34.5,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ilumabrighteningserumpdpr01a_large.jpg',
	},
	{
		id: '25253918671027',
		category: 'facial serums',
		name: 'AGELESS total anti-aging serum',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_anti-aging_serum_PDP_R01a_large.jpg',
	},
	{
		id: '15921243422899',
		category: 'facial serums',
		name: 'ILUMA intense facial illuminator',
		price: 70,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-FACIAL-ILLUMINATOR-R01_large.jpg',
	},
	{
		id: '7631422816310',
		category: 'facial serums',
		name: 'VITAL C hydrating facial oil',
		price: 58,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-facial-oil-with-background_large.jpg',
	},
	{
		id: '23969008550067',
		category: 'facial serums',
		name: 'the MAX™ serum',
		price: 112,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/THE-MAX-SERUM-pdp-r01a_large.jpg',
	},
	{
		id: '25254032605363',
		category: 'facial serums',
		name: 'CLEAR CELL Restoring Serum',
		price: 48,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_restoring_serum_PDP_R01a_large.jpg',
	},
	{
		id: '25253992890547',
		category: 'facial serums',
		name: 'Discovery-size CLEAR CELL restoring serum',
		price: 25,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_restoring_serum_PDP_DS01a_large.jpg',
	},
	{
		id: '23026926944435',
		category: 'facial serums',
		name: 'IMAGE MD® restoring power-C serum',
		price: 115,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-POWER-C-SERUM-PDP-R01a_large.jpg',
	},
	{
		id: '23136151339187',
		category: 'facial serums',
		name: 'Discovery-size IMAGE MD® restoring power-C serum',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/MD-POWER-C-SERUM-D01A_large.jpg',
	},
	{
		id: '21459672137907',
		category: 'skincare masks',
		name: 'VITAL C hydrating enzyme masque',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-hydrating-enzyme-masque-01_large.jpg',
	},
	{
		id: '21445853413555',
		category: 'skincare masks',
		name: 'I MASK purifying probiotic mask',
		price: 52,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-PURIFYING-PROBIOTIC-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '25253942886579',
		category: 'skincare masks',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_resurfacing_masque_PDP_R01a_large.jpg',
	},
	{
		id: '21445711921331',
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (5 pack)',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-5-PACK-PDP-R01a_large.jpg',
	},
	{
		id: '21445749670067',
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (single)',
		price: 10,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '20381997596851',
		category: 'skincare masks',
		name: 'VITAL C hydrating overnight masque',
		price: 66,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-hydrating-repair-creme-with-background_large.jpg',
	},
	{
		id: '21446059524275',
		category: 'skincare masks',
		name: 'I MASK firming transformation mask',
		price: 64,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-FIRMING-TRANSFORMATION-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '25253948260531',
		category: 'skincare masks',
		name: 'AGELESS total overnight retinol masque',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_overnight_retinol_masque_PDP_R01a_large.jpg',
	},
	{
		id: '20702780653747',
		category: 'skincare masks',
		name: 'the MAX™ masque',
		price: 46,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-max-masque_large.jpg',
	},
	{
		id: '23115126112435',
		category: 'skincare masks',
		name: 'CLEAR CELL clarifying salicylic masque',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-SALICYLIC-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '24738970730675',
		category: 'skincare masks',
		name: 'ORMEDIC balancing gel masque',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic-b2c-masque_1_12af8c99-ff22-4b44-922b-a971b5f86810_large.jpg',
	},
	{
		id: '23478319874227',
		category: 'skincare masks',
		name: 'IMAGE MD® restoring overnight retinol masque',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-RETINOL-OVERNIGHT-MASQUE-PDP-R01a_large.jpg',
	},
	{
		id: '22853483757747',
		category: 'eye essentials',
		name: 'VITAL C hydrating eye recovery gel',
		price: 56,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-EYE-RECOVERY-GEL-PDP-R01_large.jpg',
	},
	{
		id: '20841584853171',
		category: 'eye essentials',
		name: 'the MAX™ eye crème',
		price: 68,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-maxp-eye-creme-PDP-ro1_large.jpg',
	},
	{
		id: '21450943660211',
		category: 'eye essentials',
		name: 'the MAX™ wrinkle smoother',
		price: 88,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/THE-MAX-WRINKLE-SMOOTHER-PDP-R01a_large.jpg',
	},
	{
		id: '25253941117107',
		category: 'eye essentials',
		name: 'AGELESS total eye lift crème',
		price: 58,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_eye_lift_creme_PDP_R01a_large.jpg',
	},
	{
		id: '21533628235955',
		category: 'eye essentials',
		name: 'ILUMA intense brightening eye crème',
		price: 80,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-EYECREME-PDP-R01a_large.jpg',
	},
	{
		id: '23974250381491',
		category: 'eye essentials',
		name: 'IMAGE MD® restoring eye masks',
		price: 55,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-EYE-MASK-PDP-R01a_large.jpg',
	},
	{
		id: '24414085021875',
		category: 'eye essentials',
		name: 'ORMEDIC Balancing Eye Lift Gel',
		price: 58,
		imgUrl: 'https://c',
	},
	{
		id: '24454072893619',
		category: 'eye essentials',
		name: 'IMAGE MD restoring eye recovery gel',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-RECOVERY-EYE-GEL-PDP-R01a_large.jpg',
	},
	{
		id: '24986397081779',
		category: 'moisturizers and creams',
		name: 'BIOME+ smoothing cloud crème',
		price: 72,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BIOME__smoothing_cloud_cr01950168me_PDP_R01a_large.jpg',
	},
	{
		id: '7631347613750',
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating intense moisturizer',
		price: 78,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-intense-moisturizer-with-background_large.jpg',
	},
	{
		id: '7631372353590',
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating repair crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-hydrating-repair-with-background_large.jpg',
	},
	{
		id: '25253935972531',
		category: 'moisturizers and creams',
		name: 'AGELESS total repair crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_repair_creme_PDP_R01a_large.jpg',
	},
	{
		id: '20754694209715',
		category: 'moisturizers and creams',
		name: 'the MAX™ crème',
		price: 116,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-max-creme_large.jpg',
	},
	{
		id: '23236265509043',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying acne lotion',
		price: 42,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-ACNE-LOTION-PDP-R01a_large.jpg',
	},
	{
		id: '20181438529715',
		category: 'moisturizers and creams',
		name: 'ILUMA intense brightening crème',
		price: 94,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-CREME-R01_large.jpg',
	},
	{
		id: '21459590480051',
		category: 'moisturizers and creams',
		name: 'the MAX™ contour gel crème',
		price: 122,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/max-Contour-Gel-creme-with-background_large.jpg',
	},
	{
		id: '22687707431091',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL mattifying moisturizer',
		price: 62,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CC-207_large.jpg',
	},
	{
		id: '23026919243955',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying repair crème',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-REPAIR-CREME-PDP-R01a_large.jpg',
	},
	{
		id: '23026923110579',
		category: 'moisturizers and creams',
		name: 'Discovery-size CLEAR CELL clarifying repair crème',
		price: 46,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-REPAIR-CREME-PDP-DS01_large.jpg',
	},
	{
		id: '24775233831091',
		category: 'moisturizers and creams',
		name: 'ORMEDIC balancing biopeptide crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic_b2c_biopeptide-creme_main_27f34af6-8f58-4947-bac7-8e8eebb640c0_large.jpg',
	},
	{
		id: '25253938692275',
		category: 'moisturizers and creams',
		name: 'AGELESS total retinol-A crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_retinol-A_creme_PDP_R01a_large.jpg',
	},
	{
		id: '22437175787699',
		category: 'moisturizers and creams',
		name: 'IMAGE MD® restoring youth repair crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-YOUTH-REPAIR-CREME-PDP-R01a_large.jpg',
	},
	{
		id: '25134927282355',
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring brightening crème',
		price: NaN,
		imgUrl: 'https://c',
	},
	{
		id: '23352680841395',
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring retinol crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-RETINOL-CREME-PDP-R01a_large.jpg',
	},
	{
		id: '21445613519027',
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily ultimate protection moisturizer SPF 50',
		price: 50,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/PREVENTION_-DAILY-ULTIMATE-PROTECTION-MOISTURIZER-SPF50-PDP-R01a_large.jpg',
	},
	{
		id: '22634101178547',
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily matte moisturizer SPF 30',
		price: 52,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-PREVENTION_-matte-moisturizer-pdpR0-1A_large.jpg',
	},
	{
		id: '24043458691251',
		category: 'sun protection skincare',
		name: 'Discovery-size PREVENTION+® daily matte moisturizer SPF 30',
		price: 30,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/PREVENTION_DAILY-MATTE-MOISTURIZER-SPF-30-PDP-DS01a_820a06aa-b780-42f5-963d-d875a732b877_large.jpg',
	},
	{
		id: '20702790811827',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily hydrating moisturizer SPF 30+',
		price: 52,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-prevention_-daily-hydratingmoisturizer-pdpR0-1A_large.jpg',
	},
	{
		id: '23801496961203',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily tinted moisturizer SPF 30',
		price: 50,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-prevention_-tinted-moisutizer-pdpR0-1A_large.jpg',
	},
	{
		id: '22012813508787',
		category: 'sun protection skincare',
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-LIP-ENHANCER-PDP-R01a_large.jpg',
	},
	{
		id: '23826060837043',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily perfecting primer SPF 50',
		price: 54,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-prevention_-primer-pdpR0-1A_large.jpg',
	},
	{
		id: '22532027580595',
		category: 'sun protection skincare',
		name: 'IMAGE MD® restoring daily defense moisturizer SPF 50',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-DAILY-DEFENSE-MOISTURIZER-PDP-R01a_large.jpg',
	},
	{
		id: '20843072454835',
		category: 'lip enhancers',
		name: 'ORMEDIC balancing lip enhancement complex',
		price: 26,
		imgUrl: 'https://c',
	},
	{
		id: '20843086839987',
		category: 'lip enhancers',
		name: 'ORMEDIC sheer pink lip enhancement complex',
		price: 26,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic-b2c-pink-lip_1_large.jpg',
	},
	{
		id: '22012813508787',
		category: 'lip enhancers',
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-LIP-ENHANCER-PDP-R01a_large.jpg',
	},
	{
		id: '23287341678771',
		category: 'hand and body skincare',
		name: 'VITAL C hydrating hand and body lotion',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-HAND-AND-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		id: '23975105560755',
		category: 'hand and body skincare',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-EXFOLIATING-BODY-SCRUB-R01A_large.jpg',
	},
	{
		id: '22379830083763',
		category: 'hand and body skincare',
		name: 'ILUMA intense body lotion',
		price: 60,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		id: '23670770663603',
		category: 'hand and body skincare',
		name: 'BODY SPA rejuvenating body lotion',
		price: 36,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-REJUVENATING-BODY-LOTION-R01A_408703d4-772c-4427-b4fc-e8f240f46d3a_large.jpg',
	},
	{
		id: '23671239147699',
		category: 'hand and body skincare',
		name: 'BODY SPA CELL.U.LIFT® firming body crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-FIRMING-BODY-CREME-R01A_large.jpg',
	},
];

export function getProductData(id) {
	let productData = productsArray.find((product) => product.id === id);

	if (productData === undefined) {
		console.log('Product data does not exist for ID: ' + id);
		return undefined;
	}
	return productData;
}

export { productsArray };
