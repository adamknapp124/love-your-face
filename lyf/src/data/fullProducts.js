const productsArray = [
	{
		category: 'face wash and facial cleansers',
		name: 'BIOME+ cleansing comfort balm',
		price: 39,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BIOME_-CLEANSING-COMFORT-BALM-PDP-R01_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'ORMEDIC® balancing facial cleanser',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ORMEDIC-BALANCING-FACIAL-CLEANSER-RETAIL-01_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'Discovery-size ORMEDIC® balancing facial cleanser',
		price: 12,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ORMEDIC-BALANCING-FACIAL-CLEANSER-DISCOVERY-SIZE-PDP-01_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'VITAL C hydrating facial cleanser',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-cleanser-with-background_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'the MAX™ facial cleanser',
		price: 36,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/THE-MAX-CLEANSER-PDP-R01a_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'AGELESS total facial cleanser',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_facial_cleanser_PDP_R01a_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'CLEAR CELL salicylic gel cleanser',
		price: 36,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_clarifying_salicylic_gel_cleanser_PDP_R01a_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'Discovery-size CLEAR CELL clarifying salicylic gel cleanser',
		price: 11,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_clarifying_salicylic_gel_cleanser_PDP_DS01a_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-EXFOLIATING-CLEANSER-R01_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ilumaexfoliatingcleanserpdpr01a_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'I BEAUTY refreshing facial wipes (30 towelettes)',
		price: 16,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/facial_wipes_large.jpg',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'IMAGE MD restoring facial cleanser',
		price: NaN,
		imgUrl: '',
	},
	{
		category: 'face wash and facial cleansers',
		name: 'Double Cleanse Power Duo',
		price: 45.46,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/DOUBLE-CLEANSE-POWER-DUO_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-EXFOLIATING-CLEANSER-R01_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ilumaexfoliatingcleanserpdpr01a_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_resurfacing_masque_PDP_R01a_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'ILUMA® intense brightening exfoliating powder',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-EXFOLIATING-POWDER-RETAIL-SIZE-PDP-01_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'CLEAR CELL clarifying salicylic tonic',
		price: 28,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_clarifying_salicylic_tonic_PDP_R01a_large.jpg',
	},
	{
		category: 'exfoliators and scrubs',
		name: 'AGELESS total microderm exfoliator',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_microderm_exfoliator_PDP_R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'BIOME+ dew bright serum',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BIOME__dew_bright_serum_PDP_R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-PDP-R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum DELUXE',
		price: 115,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-DELUXE-PDP-R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'Discovery-size VITAL C hydrating anti-aging serum',
		price: 30,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-ANTI-AGING-SERUM-DISCOVERY-SIZE-PDP-01_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'AGELESS total pure hyaluronic 6 filler',
		price: 80,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_pure_hyaluronic6_filler_PDP_R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'VITAL C hydrating antioxidant A C E serum',
		price: 74,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-aec-serum-with-background_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'ILUMA® intense brightening serum',
		price: 60,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-SERUM-R01A_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'Discovery-size ILUMA intense brightening serum',
		price: 34.5,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ilumabrighteningserumpdpr01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'AGELESS total anti-aging serum',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_anti-aging_serum_PDP_R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'ILUMA intense facial illuminator',
		price: 70,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-FACIAL-ILLUMINATOR-R01_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'VITAL C hydrating facial oil',
		price: 58,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-facial-oil-with-background_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'the MAX™ serum',
		price: 112,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/THE-MAX-SERUM-pdp-r01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'CLEAR CELL Restoring Serum',
		price: 48,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_restoring_serum_PDP_R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'Discovery-size CLEAR CELL restoring serum',
		price: 25,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR_CELL_restoring_serum_PDP_DS01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'IMAGE MD® restoring power-C serum',
		price: 115,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-POWER-C-SERUM-PDP-R01a_large.jpg',
	},
	{
		category: 'facial serums',
		name: 'Discovery-size IMAGE MD® restoring power-C serum',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/MD-POWER-C-SERUM-D01A_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'VITAL C hydrating enzyme masque',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-hydrating-enzyme-masque-01_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'I MASK purifying probiotic mask',
		price: 52,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-PURIFYING-PROBIOTIC-MASK-PDP-R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_resurfacing_masque_PDP_R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (5 pack)',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-5-PACK-PDP-R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (single)',
		price: 10,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-PDP-R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'VITAL C hydrating overnight masque',
		price: 66,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-hydrating-repair-creme-with-background_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'I MASK firming transformation mask',
		price: 64,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/I-MASK-FIRMING-TRANSFORMATION-MASK-PDP-R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'AGELESS total overnight retinol masque',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_overnight_retinol_masque_PDP_R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'the MAX™ masque',
		price: 46,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-max-masque_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'CLEAR CELL clarifying salicylic masque',
		price: 38,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-SALICYLIC-MASK-PDP-R01a_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'ORMEDIC balancing gel masque',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic-b2c-masque_1_12af8c99-ff22-4b44-922b-a971b5f86810_large.jpg',
	},
	{
		category: 'skincare masks',
		name: 'IMAGE MD® restoring overnight retinol masque',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-RETINOL-OVERNIGHT-MASQUE-PDP-R01a_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'VITAL C hydrating eye recovery gel',
		price: 56,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-EYE-RECOVERY-GEL-PDP-R01_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'the MAX™ eye crème',
		price: 68,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-maxp-eye-creme-PDP-ro1_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'the MAX™ wrinkle smoother',
		price: 88,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/THE-MAX-WRINKLE-SMOOTHER-PDP-R01a_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'AGELESS total eye lift crème',
		price: 58,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_eye_lift_creme_PDP_R01a_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'ILUMA intense brightening eye crème',
		price: 80,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-EYECREME-PDP-R01a_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'IMAGE MD® restoring eye masks',
		price: 55,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-EYE-MASK-PDP-R01a_large.jpg',
	},
	{
		category: 'eye essentials',
		name: 'ORMEDIC Balancing Eye Lift Gel',
		price: 58,
		imgUrl: 'https://c',
	},
	{
		category: 'eye essentials',
		name: 'IMAGE MD restoring eye recovery gel',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-RECOVERY-EYE-GEL-PDP-R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'BIOME+ smoothing cloud crème',
		price: 72,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BIOME__smoothing_cloud_cr01950168me_PDP_R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating intense moisturizer',
		price: 78,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-intense-moisturizer-with-background_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating repair crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/vital-c-hydrating-repair-with-background_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'AGELESS total repair crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_repair_creme_PDP_R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'the MAX™ crème',
		price: 116,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/the-max-creme_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying acne lotion',
		price: 42,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-ACNE-LOTION-PDP-R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'ILUMA intense brightening crème',
		price: 94,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-CREME-R01_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'the MAX™ contour gel crème',
		price: 122,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/max-Contour-Gel-creme-with-background_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'CLEAR CELL mattifying moisturizer',
		price: 62,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CC-207_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying repair crème',
		price: 69,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-REPAIR-CREME-PDP-R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'Discovery-size CLEAR CELL clarifying repair crème',
		price: 46,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/CLEAR-CELL-CLARIFYING-REPAIR-CREME-PDP-DS01_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'ORMEDIC balancing biopeptide crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic_b2c_biopeptide-creme_main_27f34af6-8f58-4947-bac7-8e8eebb640c0_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'AGELESS total retinol-A crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/AGELESS_total_retinol-A_creme_PDP_R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'IMAGE MD® restoring youth repair crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-YOUTH-REPAIR-CREME-PDP-R01a_large.jpg',
	},
	{
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring brightening crème',
		price: NaN,
		imgUrl: 'https://c',
	},
	{
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring retinol crème',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-RETINOL-CREME-PDP-R01a_large.jpg',
	},
	{
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily ultimate protection moisturizer SPF 50',
		price: 50,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/PREVENTION_-DAILY-ULTIMATE-PROTECTION-MOISTURIZER-SPF50-PDP-R01a_large.jpg',
	},
	{
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily matte moisturizer SPF 30',
		price: 52,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-PREVENTION_-matte-moisturizer-pdpR0-1A_large.jpg',
	},
	{
		category: 'sun protection skincare',
		name: 'Discovery-size PREVENTION+® daily matte moisturizer SPF 30',
		price: 30,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/PREVENTION_DAILY-MATTE-MOISTURIZER-SPF-30-PDP-DS01a_820a06aa-b780-42f5-963d-d875a732b877_large.jpg',
	},
	{
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-LIP-ENHANCER-PDP-R01a_large.jpg',
	},
	{
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily perfecting primer SPF 50',
		price: 54,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/SCFseal-prevention_-primer-pdpR0-1A_large.jpg',
	},
	{
		category: 'sun protection skincare',
		name: 'IMAGE MD® restoring daily defense moisturizer SPF 50',
		price: NaN,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGE-MD-RESTORING-DAILY-DEFENSE-MOISTURIZER-PDP-R01a_large.jpg',
	},
	{
		category: 'lip enhancers',
		name: 'ORMEDIC balancing lip enhancement complex',
		price: 26,
		imgUrl: 'https://c',
	},
	{
		category: 'lip enhancers',
		name: 'ORMEDIC sheer pink lip enhancement complex',
		price: 26,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ormedic-b2c-pink-lip_1_large.jpg',
	},
	{
		category: 'lip enhancers',
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/IMAGEMD-RESTORING-COLLAGEN-LIP-ENHANCER-PDP-R01a_large.jpg',
	},
	{
		category: 'hand and body skincare',
		name: 'VITAL C hydrating hand and body lotion',
		price: 40,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/VITAL-C-HYDRATING-HAND-AND-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		category: 'hand and body skincare',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-EXFOLIATING-BODY-SCRUB-R01A_large.jpg',
	},
	{
		category: 'hand and body skincare',
		name: 'ILUMA intense body lotion',
		price: 60,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/ILUMA-INTENSE-BRIGHTENING-BODY-LOTION-PDP-R01a_large.jpg',
	},
	{
		category: 'hand and body skincare',
		name: 'BODY SPA rejuvenating body lotion',
		price: 36,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-REJUVENATING-BODY-LOTION-R01A_408703d4-772c-4427-b4fc-e8f240f46d3a_large.jpg',
	},
	{
		category: 'hand and body skincare',
		name: 'BODY SPA CELL.U.LIFT® firming body crème',
		price: 82,
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0250/9661/8038/products/BODY-SPA-FIRMING-BODY-CREME-R01A_large.jpg',
	},
];
