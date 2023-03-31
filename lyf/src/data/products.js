const productsArray = [
	{
		id: 'price_1MrYcVCY8zWB58Fw4x7BjaZV',
		category: 'face wash and facial cleansers',
		name: 'BIOME+ cleansing comfort balm',
		price: 39,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/cleansing-balm-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/cleansing-balm-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/cleansing-balm-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/cleansing-balm-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/cleansing-balm-5.jpg',
		],
		Description:
			'A skin-nourishing cleansing balm that melts away makeup, sunscreen and impurities, with certified microbiome-friendly squalane and plant oils',
	},
	{
		id: 'price_1MrYdfCY8zWB58FwmpRb3Eem',
		category: 'face wash and facial cleansers',
		name: 'ORMEDIC balancing facial cleanser',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-cleanser-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-cleanser-4.jpg',
		],
		Description:
			'A mild, refreshing gel cleanser that gently foams away impurities, leaving skin soft, hydrated and clean',
	},
	{
		id: 'price_1MrYeaCY8zWB58Fwp5CBskKZ',
		category: 'face wash and facial cleansers',
		name: 'Discovery-size ORMEDIC balancing facial cleanser',
		price: 12,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/balancing-facial-discovery-4.jpg',
		],
		Description:
			'A mild, refreshing gel cleanser that gently foams away impurities, leaving skin soft, hydrated and clean',
	},
	{
		id: 'price_1MrYfKCY8zWB58FwF1X8TK00',
		category: 'face wash and facial cleansers',
		name: 'VITAL C hydrating facial cleanser',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/hydrating-facial-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/hydrating-facial-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/hydrating-facial-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/hydrating-facial-4.jpg',
		],
		Description:
			'This creamy, hydrating cleanser gently removes makeup and impurities. Fresh, energizing aroma courtesy of natural orange peel.',
	},
	{
		id: 'price_1MrYkOCY8zWB58FwLkaRzCxR',
		category: 'face wash and facial cleansers',
		name: 'the MAX facial cleanser',
		price: 36,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/max-cleanser-6.jpg',
		],
		Description:
			'This luxurious, silky cleanser features advanced peptides and plant extracts for youthful-looking skin. Free of acids and sulfates, it provides a gentle cleanse. This formula is newly modernized to meet our clean clinical skincare™ standard and formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.',
	},
	{
		id: 'price_1MrYklCY8zWB58FwmtHJbkdP',
		category: 'face wash and facial cleansers',
		name: 'AGELESS total facial cleanser',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/ageless-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/ageless-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/ageless-cleanser-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/ageless-cleanser-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/ageless-cleanser-5.jpg',
		],
		Description:
			'This revitalizing cleanser jumpstarts exfoliation and helps to reveal smooth, refined skin. As it removes makeup and impurities, the glycolic-based formula sweeps away dead skin buildup and helps to decongest clogged pores for the look of increased clarity and radiance. With an invigorating, cooling burst of menthol, it refreshes and wakes up dull, tired skin.',
	},
	{
		id: 'price_1MrYmACY8zWB58FwtiT5LCSc',
		category: 'face wash and facial cleansers',
		name: 'CLEAR CELL salicylic gel cleanser',
		price: 36,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-gel-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-gel-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-gel-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-gel-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-gel-5.jpg',
		],
		Description:
			'This fresh, foaming cleanser with 2% salicylic acid lathers away excess oil, shine and impurities.',
	},
	{
		id: 'price_1MrYmmCY8zWB58FwKKPYYz9H',
		category: 'face wash and facial cleansers',
		name: 'Discovery-size CLEAR CELL clarifying salicylic gel cleanser',
		price: 11,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/salicylic-discovery-6.jpg',
		],
		Description:
			'This fresh, foaming cleanser with 2% salicylic acid lathers away excess oil, shine and impurities.',
	},
	{
		id: 'price_1MrYnJCY8zWB58FwqIeNFod3',
		category: 'face wash and facial cleansers',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-4.jpg',
		],
		Description: `Your skin's first defense against dullness. Jumpstart your daily brightening routine with this luxurious cream-to-foam cleanser. It sweeps away impurities and exfoliates in one step to help visibly brighten and refine the skin. Its mushroom-derived enzyme, bamboo spheres and smart-sensing beads gently exfoliate dull skin, while natural extracts help boost luminosity and promote hydration. The cushiony, non-stripping formula leaves the skin feeling soft and refreshed. 
		
		The experience:
		One-step brightening cleanser + exfoliator with refreshing geranium and orange oils to provide a truly lush experience from start to finish
		
		Who it's for:
		All skin types especially those experiencing dull and uneven skin tone
		
		Part of the award-winning* ILUMA collection, this multitasking cleanser meets our clean clinical skincare™ standard and is formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.
		
		*2019 and 2020 American Spa Professional’s Choice Awards winner, favorite lightening line
		
		IMAGE Skincare is committed to fostering a sustainable future. All materials used to create every product box is Forest Stewardship Council® certified and sourced from responsibly managed forests.`,
	},
	{
		id: 'price_1MrYojCY8zWB58FwaC2O2Boa',
		category: 'face wash and facial cleansers',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-6.jpg',
		],
		Description: `A one-step, fresh foaming cleanser that visibly brightens, exfoliates and sweeps away impurities`,
	},
	{
		id: 'price_1MrYp4CY8zWB58FwfyL4jpcL',
		category: 'face wash and facial cleansers',
		name: 'I BEAUTY refreshing facial wipes',
		price: 16,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/refreshing-wipes-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/refreshing-wipes-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/refreshing-wipes-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/refreshing-wipes-4.jpg',
		],
		Description: `These dual-action cleansing wipes refresh the skin as they gently sweep away the day's impurities, grime and makeup. Formulated with superfruits, cucumber, aloe vera and coffee extract, they instantly soothe and invigorate the skin.

		Includes 30 individual wipes.`,
	},
	{
		id: 'price_1MrYpVCY8zWB58FwXDIxKB2k',
		category: 'face wash and facial cleansers',
		name: 'IMAGE MD restoring facial cleanser',
		price: 12,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/image-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/image-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/image-cleanser-3.jpg',
		],
		Description: `This refreshing cleanser features a blend of beta and alpha hydroxy acids to gently revitalize dull skin.
		• Exfoliating blend of glycolic, lactic and salicylic acids
		• Formulated with aloe leaf juice and menthol for a refreshing cleansing experience
		• Creates an optimal canvas for the application of IMAGE MD serums and crèmes
		
		Available only from your IMAGE Skincare licensed skincare professional.`,
	},
	{
		id: 'price_1MrYqxCY8zWB58FwA8XDCBGg',
		category: 'face wash and facial cleansers',
		name: 'Double Cleanse Power Duo',
		price: 45.46,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/double-cleanser-duo-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/double-cleanser-duo-2.jpg',
		],
		Description: `I BEAUTY refreshing facial wipes + AGELESS total facial cleanser

		﻿Price includes 10% savings
		
		Proven powerhouses team up for your most thorough cleanse, taking away all traces of makeup, oil, dirt and impurities.
		
		Target concerns: Dull or congested skin; stubborn makeup
		
		I BEAUTY refreshing facial wipes:
		Contents 30 wipes
		Dual-action cleansing wipes that lift away makeup while refreshing your skin
		
		AGELESS total facial cleanser:
		6 fl oz / 177 mL
		A glycolic-based cleanser that jumpstarts exfoliation and gently revitalizes to reveal smoother skin`,
	},
	{
		id: 'price_1MrYrRCY8zWB58FwK9Zz2Vvg',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL salicylic clarifying pads',
		price: 34,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-pads-6.jpg',
		],
		Description: `These convenient exfoliating pads feature a combination of beta and alpha hydroxy acids to help clarify pores.`,
	},
	{
		id: 'price_1MrYs2CY8zWB58FwD1BGIo0t',
		category: 'exfoliating scrubs',
		name: 'ILUMA intense brightening exfoliating cleanser',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-4.jpg',
		],
		Description: `Your skin's first defense against dullness. Jumpstart your daily brightening routine with this luxurious cream-to-foam cleanser. It sweeps away impurities and exfoliates in one step to help visibly brighten and refine the skin. Its mushroom-derived enzyme, bamboo spheres and smart-sensing beads gently exfoliate dull skin, while natural extracts help boost luminosity and promote hydration. The cushiony, non-stripping formula leaves the skin feeling soft and refreshed.

		The experience:
		One-step brightening cleanser + exfoliator with refreshing geranium and orange oils to provide a truly lush experience from start to finish
		
		Who it's for:
		All skin types especially those experiencing dull and uneven skin tone
		
		Part of the award-winning* ILUMA collection, this multitasking cleanser meets our clean clinical skincare™ standard and is formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.
		
		*2019 and 2020 American Spa Professional’s Choice Awards winner, favorite lightening line
		
		IMAGE Skincare is committed to fostering a sustainable future. All materials used to create every product box is Forest Stewardship Council® certified and sourced from responsibly managed forests.`,
	},
	{
		id: 'price_1MrYseCY8zWB58Fwvhws4cfe',
		category: 'exfoliating scrubs',
		name: 'Discovery-size ILUMA intense brightening exfoliating cleanser',
		price: 18.3,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/cleansers/iluma-cleanser-discovery-6.jpg',
		],
		Description: `A one-step, fresh foaming cleanser that visibly brightens, exfoliates and sweeps away impurities`,
	},
	{
		id: 'price_1MrYtDCY8zWB58FwNvufQPyF',
		category: 'exfoliating scrubs',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/ageless-masque-6.jpg',
		],
		Description: `This multi-exfoliating masque helps to sweep away dull, congested skin for a smoother, more radiant appearance. A blend of alpha and beta hydroxy acids work together with light buffing micro-crystals to remove dead skin and reveal more even tone.`,
	},
	{
		id: 'price_1MrYtgCY8zWB58FwpboyVBy6',
		category: 'exfoliating scrubs',
		name: 'ILUMA® intense brightening exfoliating powder',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/iluma-powder-7.jpg',
		],
		Description: `This water-activated, micro-exfoliating powder helps bring brighter, more even-toned skin to light. It gently polishes and buffs away radiance-impairing dead skin buildup to brighten and illuminate your skin. Gentle enough for daily use and perfect for all skin types, it smoothes uneven texture and preps the skin for serum, moisturizer or treatments that come next.`,
	},
	{
		id: 'price_1MrYu0CY8zWB58Fw0Yim3ZVp',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL clarifying salicylic tonic',
		price: 28,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-tonic-7.jpg',
		],
		Description: `This daily clarifying and toning solution lightly exfoliates, sweeps away dead skin and minimizes shine. With lilac extract, it helps to reduce the appearance of redness and provides a mattifying effect. Sweep on the salicylic and glycolic-based formula after cleansing to remove excess oil, help fight shine and prep the skin for better results from your IMAGE regimen.`,
	},
	{
		id: 'price_1MrYuwCY8zWB58FwIoCTcKBN',
		category: 'exfoliating scrubs',
		name: 'CLEAR CELL clarifying salicylic masque',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-masque-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-masque-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-masque-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-masque-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/salicylic-masque-5.jpg',
		],
		Description: `This exfoliating clay masque features salicylic and glycolic acids to help remove excess oil from the skin, leaving it soft, fresh and mattified.`,
	},
	{
		id: 'price_1MrYvNCY8zWB58Fwn5xdcBgy',
		category: 'exfoliating scrubs',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/body-spa-scrub-6.jpg',
		],
		Description: `Winner of LNE & Spa's Best product 2018

		This dual-exfoliating body polish helps to gently sweep away dull, flaky skin, leaving skin smooth, soft and radiant.`,
	},
	{
		id: 'price_1MrYvkCY8zWB58FwripPJBc7',
		category: 'exfoliating scrubs',
		name: 'ORMEDIC balancing gel polisher',
		price: 44,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/balancing-polisher-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/balancing-polisher-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/balancing-polisher-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/balancing-polisher-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/balancing-polisher-5.jpg',
		],
		Description: `With a blend of natural alpha hydroxy acid, fruit enzymes and gentle exfoliants, this daily polishing gel is clinically proven to smooth, brighten and refine the skin.`,
	},
	{
		id: 'price_1MrYwWCY8zWB58FwRqqEfHpR',
		category: 'exfoliating scrubs',
		name: 'AGELESS total microderm exfoliator',
		price: 45,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/exfoliators/microderm-exfo-6.jpg',
		],
		Description: `This 3-in-1 mega exfoliator helps even out skin tone and texture to reveal fresh, radiant skin.`,
	},
	{
		id: 'price_1MrYxLCY8zWB58FwwipGFmRs',
		category: 'facial serums',
		name: 'BIOME+ dew bright serum',
		price: 69,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/dew-bright-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/dew-bright-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/dew-bright-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/dew-bright-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/dew-bright-5.jpg',
		],
		Description: `A hydrating oil-serum that leaves skin dewy and radiant, with certified microbiome-friendly squalane, fermented hyaluronic acid and niacinamide.

		CLINICAL RESULTS*
		After 28 days:
		Decreases pigmentation by 22%
		Improves uneven skin tone by 21%
		Improves viscoelasticity by 18%
		
		After four weeks:
		84% of users agreed that skin feels more moisturized
		81% of users agreed that skin feels instantly hydrated
		77% of users reported that skin feels softer`,
	},
	{
		id: 'price_1MrYxfCY8zWB58FwHTS5kL92',
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-5.jpg',
		],
		Description: `Our #1 bestselling serum softens the appearance of wrinkles, supports skin elasticity and fights environmental damage.

		Fresh, energizing aroma courtesy of natural orange peel.
		
		Also available in Deluxe 3.4 oz and Discovery .5 oz`,
	},
	{
		id: 'price_1MrYyBCY8zWB58FwCLWjGRcR',
		category: 'facial serums',
		name: 'VITAL C hydrating anti-aging serum DELUXE',
		price: 115,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-deluxe-6.jpg',
		],
		Description: `Upgrade to the new DELUXE size and get more of our bestselling serum: 100% more at 20% savings. A $144 value for only $115. 

		Our #1 bestselling serum softens the appearance of wrinkles, supports skin elasticity and fights environmental damage.
		
		Fresh, energizing aroma courtesy of natural orange peel.
		
		Also available in Retail 1.7 oz and Discovery .5 oz.
		
		*Products sold individually. Image showing two products is for size comparison only.`,
	},
	{
		id: 'price_1MrYyaCY8zWB58Fw6i9d9irQ',
		category: 'facial serums',
		name: 'Discovery-size VITAL C hydrating anti-aging serum',
		price: 30,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/anti-aging-discovery-5.jpg',
		],
		Description: `Our #1 serum now comes in an all-new discovery size. Experience why it's a bestseller today!

		This bestselling facial serum is a founder favorite that's loved by all skin types. It softens the appearance of wrinkles, supports skin elasticity and fights environmental damage. Hyaluronic acid helps to lock in hydration and supports the look of plump, bouncy skin. Formulated with multiple forms of vitamin C to help brighten the skin and fight visible signs of dullness and fatigue.
		
		
		Also available in Retail 1.7 oz and Deluxe 3.4 oz`,
	},
	{
		id: 'price_1MrYzsCY8zWB58FwPUNbAJma',
		category: 'facial serums',
		name: 'AGELESS total pure hyaluronic 6 filler',
		price: 80,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/hyaluronic-filler-6.jpg',
		],
		Description: `This concentrated topical filler contains six forms of lower and higher molecular weight hyaluronic acids to rapidly smooth away the appearance of wrinkles. Delivers an immediate, noticeable boost of hydration. Fill in fine lines without an injection. 

		Physician-formulated.`,
	},
	{
		id: 'price_1MrZ0QCY8zWB58Fwttv98YPt',
		category: 'facial serums',
		name: 'VITAL C hydrating antioxidant A C E serum',
		price: 74,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-antioxidant-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-antioxidant-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-antioxidant-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-antioxidant-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-antioxidant-5.jpg',
		],
		Description: `Your skin's daily multi-vitamin serum, with essential vitamins, amino acids, green tea extract and natural skin brighteners.

		Fresh, energizing aroma courtesy of natural orange peel.`,
	},
	{
		id: 'price_1MrZ0qCY8zWB58Fw68k1Klxs',
		category: 'facial serums',
		name: 'ILUMA® intense brightening serum',
		price: 60,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-6.jpg',
		],
		Description: `Illuminate your skin with our botanical brightening serum that helps to reduce the appearance of pigmentation and dark spots while promoting clear, even skin tone.`,
	},
	{
		id: 'price_1MrZ1LCY8zWB58FwO1KZ04jH',
		category: 'facial serums',
		name: 'Discovery-size ILUMA intense brightening serum',
		price: 34.5,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-serum-discovery-6.jpg',
		],
		Description: `A botanically enhanced serum with natural plant-based brighteners to help even skin tone`,
	},
	{
		id: 'price_1MrZ1oCY8zWB58Fw4JRVZmwd',
		category: 'facial serums',
		name: 'AGELESS total anti-aging serum',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/ageless-anti-6.jpg',
		],
		Description: `This multi-benefit peptide and AHA serum addresses key aging concerns, including the appearance of wrinkles, uneven tone, lack of firmness and dry skin.`,
	},
	{
		id: 'price_1MrZ2eCY8zWB58FwJk1YIGJA',
		category: 'facial serums',
		name: 'ILUMA intense facial illuminator',
		price: 70,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/intense-illuminator-6.jpg',
		],
		Description: `The next big thing in brightening gives dull skin a visible recharge, instantly and over time.

		This concentrated corrector + skin brightener serum helps to reduce the appearance of pigmentation and dark spots while enhancing luminosity for a lit-from-within glow. The power-packed formula with tranexamic acid, vitamin C and niacinamide delivers optimal brightening benefits and targets dull, uneven skin tone. Silky and lightweight, this liquid booster can be applied on its own and layers seamlessly under your favorite crème.
		
		The experience:
		The light, translucent texture with refreshing geranium and orange oils effortlessly sinks into skin and leaves a soft, dewy finish.
		
		Who it's for:
		All skin types especially those experiencing pigmentation, dark spots, uneven skin tone and texture
		
		Part of the award-winning* ILUMA collection, this advanced skin brightener meets our clean clinical skincare™ standard and is formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.
		
		*2019 and 2020 American Spa Professional’s Choice Awards winner, favorite lightening line
		
		Size: 1 fl oz / 30 mL
		
		IMAGE Skincare is committed to fostering a sustainable future. All materials used to create every product box is Forest Stewardship Council® certified and sourced from responsibly managed forests.`,
	},
	{
		id: 'price_1MrZ32CY8zWB58FwilxU846f',
		category: 'facial serums',
		name: 'VITAL C hydrating facial oil',
		price: 58,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-c-oil-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-c-oil-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-c-oil-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-c-oil-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/vital-c-oil-5.jpg',
		],
		Description: `This radiance-reviving oil blends argan, sea buckthorn and grape-seed oils to nourish and moisturize dry skin.

		Fresh, energizing aroma courtesy of natural orange peel.`,
	},
	{
		id: 'price_1MrZ3VCY8zWB58FwZ7JMw2VY',
		category: 'facial serums',
		name: 'the MAX™ serum',
		price: 112,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/max-serum-6.jpg',
		],
		Description: `Revitalize aging skin with this effective multi-peptide serum, formulated to restore resilience and reduce the appearance of fine lines and wrinkles.`,
	},
	{
		id: 'price_1MrZ48CY8zWB58Fwv88KEaaC',
		category: 'facial serums',
		name: 'CLEAR CELL Restoring Serum',
		price: 48,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-7.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-8.jpg',
		],
		Description: `This lightweight soothing serum hydrates oily skin while absorbing surface oils for a mattifying effect, restoring a balanced, healthy-looking appearance.`,
	},
	{
		id: 'price_1MrZ4XCY8zWB58FwFo6VPLOq',
		category: 'facial serums',
		name: 'Discovery-size CLEAR CELL restoring serum',
		price: 25,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/restoring-serum-discovery-7.jpg',
		],
		Description: `This lightweight soothing serum hydrates oily skin while absorbing surface oils for a mattifying effect, restoring a balanced, healthy-looking appearance.`,
	},
	{
		id: 'price_1MrZ4zCY8zWB58FwvCcJOz82',
		category: 'facial serums',
		name: 'IMAGE MD® restoring power-C serum',
		price: 115,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-7.jpg',
		],
		Description: `Our most sophisticated serum yet: A high-performance vitamin C and ferulic acid serum with the potency of 20% tetrahexyldecyl ascorbate to help restore, firm and brighten the skin.`,
	},
	{
		id: 'price_1MrZ5UCY8zWB58FwnP25JVxP',
		category: 'facial serums',
		name: 'Discovery-size IMAGE MD® restoring power-C serum',
		price: 69,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-discovery-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/power-c-discovery-2.jpg',
		],
		Description: `Our most sophisticated serum yet: A high-performance vitamin C and ferulic acid serum with the potency of 20% tetrahexyldecyl ascorbate to help restore, firm and brighten the skin. Available in an all-new 0.5-ounce discovery size that's perfect for travel.`,
	},
	{
		id: 'price_1MrZ5pCY8zWB58FwPTK0aakH',
		category: 'facial serums',
		name: 'ORMEDIC balancing antioxidant serum',
		price: 66,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/antioxidant-serum-7.jpg',
		],
		Description: `This soothing daily antioxidant serum provides gentle hydration to dry or dehydrated skin.`,
	},
	{
		id: 'price_1MrZ6NCY8zWB58FwT1u9dEcf',
		category: 'facial serums',
		name: 'IMAGE MD restoring youth serum',
		price: 100,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/youth-serum-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/youth-serum-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/serums/youth-serum-3.jpg',
		],
		Description: `This reparative serum features a blend of peptides, plant-derived stem cell extracts and vitamin C to improve the appearance of fine lines and wrinkles.

		• Advanced, doctor-developed technology ensures optimal delivery of key ingredients to improve the appearance of fine lines, lost firmness and uneven skin tone
		
		• A  blend of plant stem cells and wrinkle-fighting peptides target signs of aging in environmentally damaged skin
		
		• A stabilized form of vitamin C helps to visibly brighten the skin
		
		Available only from your IMAGE Skincare licensed skincare professional.`,
	},
	{
		id: 'price_1MrZ6oCY8zWB58FwCyHZWP7h',
		category: 'skincare masks',
		name: 'VITAL C hydrating enzyme masque',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_enzyme_masque_7.jpg',
		],
		Description: `This naturally brightening vitamin C masque works in minutes to give skin a radiant, healthy-looking glow. With two nourishing forms of vitamin C and fruit enzyme exfoliants, it gently dissolves dry, dull skin buildup, revealing brighter, more even-toned skin. Antioxidants and vitamins help to nourish and hydrate the skin. Leaves skin smoother with a renewed look of clarity.`,
	},
	{
		id: 'price_1MrZ7BCY8zWB58FwoxAlR23Y',
		category: 'skincare masks',
		name: 'I MASK purifying probiotic mask',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I_MASK_purifying_probiotic_mask_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-PURIFYING-PROBIOTIC-MASK-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-PURIFYING-PROBIOTIC-MASK-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-PURIFYING-PROBIOTIC-MASK-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-PURIFYING-PROBIOTIC-MASK-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-PURIFYING-PROBIOTIC-MASK-6.jpg',
		],
		Description: `With its blend of yogurt-based probiotics and nourishing superfruits, this fortifying mask balances the skin's natural flora and helps it resist dehydration and imbalance. This deep green mask contains essential vitamins, minerals and antioxidants to nourish the skin and fight the look of dullness and signs of damage. Purifying green clay and charcoal help to detoxify and clear away impurities, leaving the skin clean, smooth and refined.

 

		*Product does not contain live probiotics.`,
	},
	{
		id: 'price_1MrZ7WCY8zWB58FwkB5zfJ7K',
		category: 'skincare masks',
		name: 'AGELESS total resurfacing masque',
		price: 39,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_resurfacing_masque_7.jpg',
		],
		Description: `This multi-exfoliating masque helps to sweep away dull, congested skin for a smoother, more radiant appearance. A blend of alpha and beta hydroxy acids work together with light buffing micro-crystals to remove dead skin and reveal more even tone.`,
	},
	{
		id: 'price_1MrZ81CY8zWB58FwPalCOLGP',
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (5 pack)',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-6.jpg',
		],
		Description: `This hydrogel mask delivers instant hydration to skin that is dry, dull or depleted. Cooling and soothing, it refreshes and revives thirsty skin with mineral-rich waters and hyaluronic acid. A blend of amino acids, aloe vera and antioxidant extracts leave skin radiant and glowing. Newly improved hydrogel design offers a better grip and shape to fit every face. The perfect portable addition to every IMAGE Skincare regimen available in a convenient 5-pack.`,
	},
	{
		id: 'price_1MrZ8MCY8zWB58FwveXUsP4k',
		category: 'skincare masks',
		name: 'I MASK hydrating hydrogel sheet mask (single)',
		price: 10,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-HYDRATING-HYDROGEL-SHEET-MASK-single-6.jpg',
		],
		Description: `This hydrogel mask delivers instant hydration to skin that is dry, dull or depleted. Cooling and soothing, it refreshes and revives thirsty skin with mineral-rich waters and hyaluronic acid. A blend of amino acids, aloe vera and antioxidant extracts leave skin radiant and glowing. Newly improved hydrogel design offers a better grip and shape to fit every face. The perfect portable addition to every IMAGE Skincare regimen.`,
	},
	{
		id: 'price_1MrZ8pCY8zWB58FwG8Up2tl9',
		category: 'skincare masks',
		name: 'VITAL C hydrating overnight masque',
		price: 66,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_overnight_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_overnight_masque_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_overnight_masque_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_overnight_masque_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/VITAL_C_hydrating_overnight_masque_5.jpg',
		],
		Description: `This overnight treatment boosts the appearance of radiance in dull skin while drenching the skin with hydration.

		Fresh, energizing aroma courtesy of natural orange peel.`,
	},
	{
		id: 'price_1MrZ9ECY8zWB58FwwKkhtttE',
		category: 'skincare masks',
		name: 'I MASK firming transformation mask',
		price: 64,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I_MASK_transformational_firming_mask_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-6.jpg',
		],
		Description: `This luxurious, shimmery blue mask supports the skin’s ability to resist stress that contributes to the visible signs of skin aging. It contains rare pepper berry plant extract to promote skin’s well-being. It helps bring skin into balance, hydrating with hyaluronic acid as high-purity clays and jojoba beads gently polish away dullness for improved texture, tightness and tone. Skin is left feeling plump, smooth and firm.`,
	},
	{
		id: 'price_1MrZ9xCY8zWB58FwwJSWclkx',
		category: 'skincare masks',
		name: 'AGELESS total overnight retinol masque',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/AGELESS_total_overnight_retinol_masque_7.jpg',
		],
		Description: `Winner of Shape Beauty Awards 2018

		This revitalizing overnight masque features encapsulated, time-released retinol technology to help transform the skin's appearance while you sleep.`,
	},
	{
		id: 'price_1MrZAGCY8zWB58FwQHyKp0il',
		category: 'skincare masks',
		name: 'the MAX™ masque',
		price: 46,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/THE_MAX_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/the-max-masque-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/the-max-masque-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/THE_MAX_masque_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/THE_MAX_masque_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/THE_MAX_masque_6.jpg',
		],
		Description: `This luxurious masque helps to visibly improve the appearance of skin tightness, firmness and elasticity. With the power of wrinkle-fighting peptides and plant cell extracts, the moisture-rich formula helps to smooth and refine the skin. Use 3 – 4 times weekly to give dry, dull or mature skin a hydrating and revitalizing boost.`,
	},
	{
		id: 'price_1MrZAZCY8zWB58FwgxY8On2T',
		category: 'skincare masks',
		name: 'CLEAR CELL clarifying salicylic masque',
		price: 38,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/CLEAR_CELL_clarifying_salicylic_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/CLEAR-CELL-CLARIFYING-SALICYLIC-MASK-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/CLEAR-CELL-CLARIFYING-SALICYLIC-MASK-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/CLEAR-CELL-CLARIFYING-SALICYLIC-MASQUE-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/CLEAR-CELL-CLARIFYING-SALICYLIC-MASQUE-5.jpg',
		],
		Description: `This exfoliating clay masque features salicylic and glycolic acids to help remove excess oil from the skin, leaving it soft, fresh and mattified.`,
	},
	{
		id: 'price_1MrZAqCY8zWB58FwYEqAhhul',
		category: 'skincare masks',
		name: 'ORMEDIC balancing gel masque',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC_balancing_gel_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC-balancing-gel-masque-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC_balancing_gel_masque_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC-balancing-gel-masque-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC-balancing-gel-masque-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC-balancing-gel-masque-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/ORMEDIC-balancing-gel-masque-7.jpg',
		],
		Description: `Clinically proven to improve skin irritation, this ultra-gentle gel masque features organic aloe vera and botanical extracts to help cool, soothe and comfort the skin.`,
	},
	{
		id: 'price_1MrZBGCY8zWB58FwIeMmyZY8',
		category: 'skincare masks',
		name: 'IMAGE MD® restoring overnight retinol masque',
		price: 102,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/IMAGE_MD_restoring_overnight_retinol_masque_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/masks/I-MASK-FIRMING-TRANSFORMATION-MASK-3.jpg',
		],
		Description: '',
	},
	{
		id: 'price_1MrZBaCY8zWB58Fwg5B840qO',
		category: 'eye essentials',
		name: 'VITAL C hydrating eye recovery gel',
		price: 56,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/VITAL_C_hydrating_eye_recovery_7.jpg',
		],
		Description: `This hydrating and refreshing eye gel helps to reduce the appearance of dark circles, puffiness, fine lines and wrinkles.`,
	},
	{
		id: 'price_1MrZBsCY8zWB58Fw7hDBzO59',
		category: 'eye essentials',
		name: 'the MAX™ eye crème',
		price: 68,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_eye_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-EYE-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-EYE-CREME-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-EYE-CREME-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-EYE-CREME-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_eye_creme_6.jpg',
		],
		Description: `This multi-impact eye treatment reduces the appearance of fine lines, wrinkles, dark circles and puffiness. The moisturizing, rejuvenating formula fights the effects of environmental damage that contribute to signs of aging. Infused with targeted peptides and plant cell extracts to help smooth the look of lines and restore a bright, well-rested appearance to tired eyes.`,
	},
	{
		id: 'price_1MrZC8CY8zWB58FwFWYsjFDe',
		category: 'eye essentials',
		name: 'the MAX™ wrinkle smoother',
		price: 88,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_wrinkle_smoother_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_wrinkle_smoother_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_wrinkle_smoother_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-WRINKLE-SMOOTHER-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE_MAX_wrinkle_smoother_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/THE-MAX-WRINKLE-SMOOTHER-6.jpg',
		],
		Description: `This multi-action serum combines a wrinkle-fighting peptide, smoothing polymer and plant stem cell technology to reduce the appearance of wrinkles.`,
	},
	{
		id: 'price_1MrZCbCY8zWB58FwGkKSf0J9',
		category: 'eye essentials',
		name: 'AGELESS total eye lift crème',
		price: 58,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/AGELESS_total_eye_lift_creme_7.jpg',
		],
		Description: `This renewing eye crème combines the power of glycolic acid and vitamin A to target signs of aging around the eyes.`,
	},
	{
		id: 'price_1MrZCxCY8zWB58Fw5wYK0aP2',
		category: 'eye essentials',
		name: 'ILUMA intense brightening eye crème',
		price: 80,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA_intense_brightening_eye_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA-INTENSE-BRIGHTENING-EYE-CREME_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA-INTENSE-BRIGHTENING-EYE-CREME-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA_intense_brightening_eye_creme_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA_intense_brightening_eye_creme_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ILUMA_intense_brightening_eye_creme_6.jpg',
		],
		Description: `A super-hydrating and brightening eye crème that works aggressively to break up discoloration under the eyes. A blend of phytonutrients, peptides and botanical brightening agents help to reduce visible signs of aging like dark circles, wrinkles, puffiness and lax skin to restore a firmer, vibrant and more youthful appearance to the eyes.`,
	},
	{
		id: 'price_1MrZDPCY8zWB58FwLh08ZWYl',
		category: 'eye essentials',
		name: 'IMAGE MD® restoring eye masks',
		price: 55,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_eye_masks_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_eye_masks_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_eye_masks_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_eye_masks_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGEMD-EYE-MASK-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGEMD-EYE-MASK-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGEMD-EYE-MASK-7.jpg',
		],
		Description: `These cooling hydro-gel eye masks rapidly refresh, soothe and reduce visible signs of fatigue.`,
	},
	{
		id: 'price_1MrZDmCY8zWB58FwaLQ3qYpl',
		category: 'eye essentials',
		name: 'ORMEDIC Balancing Eye Lift Gel',
		price: 58,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ormedic-eye-gel_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/ORMEDIC_balancing_eye_lift_gel_7.jpg',
		],
		Description: `This light, refreshing eye gel gently hydrates and soothes the delicate eye area.`,
	},
	{
		id: 'price_1MrZE6CY8zWB58FwV0QYXzNO',
		category: 'eye essentials',
		name: 'IMAGE MD restoring eye recovery gel',
		price: 106,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_recovery_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_recovery_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/eyecare/IMAGE_MD_restoring_recovery_3.jpg',
		],
		Description: `A hydrating eye gel that helps to reduce the appearance of fine lines, wrinkles, puffiness and dark circles.`,
	},
	{
		id: 'price_1MrZEvCY8zWB58Fw5VZTQxqr',
		category: 'moisturizers and creams',
		name: 'BIOME+ smoothing cloud crème',
		price: 72,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME__smoothing_cloud_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-7.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/BIOME_-SMOOTHING-CLOUD-CREME-8.jpg',
		],
		Description: `A skin-cushioning moisturizer to improve texture and lock in hydration with microbiome-friendly squalane and hyaluronic acid.

		CLINICAL RESULTS*
		After 30 minutes:
		Increases hydration levels by 41%
		
		After 7 days:
		Increases hydration levels by 17%
		Decreases roughness by 12%
		
		After four weeks:
		97% of users reported that skin feels smoother
		88% of users agreed that skin feels more moisturized
		88% of users agreed that the product locks in lasting hydration
		81% of users agreed that skin feels healthier
		75% of users reported that skin has more cushion and bounce`,
	},
	{
		id: 'price_1MrZFHCY8zWB58FwflSJblkH',
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating intense moisturizer',
		price: 78,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_intense_moistu-6.jpg',
		],
		Description: `For the thirstiest of skins, this nourishing, highly emollient crème progressively replenishes hydration and shields against dryness.

		Fresh, energizing aroma courtesy of natural orange peel.`,
	},
	{
		id: 'price_1MrZFmCY8zWB58FwtabzbrKV',
		category: 'moisturizers and creams',
		name: 'VITAL C hydrating repair crème',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_repair_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_repair_creme_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_repair_creme_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_repair_creme_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/VITAL_C_hydrating_repair_creme_5.jpg',
		],
		Description: `This luxurious crème quenches and soothes the skin with a blend of hyaluronic acid, ceramides and vitamins.

		Fresh, energizing aroma courtesy of natural orange peel.`,
	},
	{
		id: 'price_1MrZGCCY8zWB58FwzWNWyh0X',
		category: 'moisturizers and creams',
		name: 'AGELESS total repair crème',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_repair_creme_6.jpg',
		],
		Description: `This age-defying crème diminishes dullness and supports the look of youthful, smooth skin. Its dual resurfacing system features glycolic acid and time-released, encapsulated retinol to fight the appearance of wrinkles, uneven texture and tone.`,
	},
	{
		id: 'price_1MrZGbCY8zWB58Fw14ehTPC8',
		category: 'moisturizers and creams',
		name: 'the MAX™ crème',
		price: 116,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE_MAX_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE_MAX_creme_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CREME-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CREME-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE_MAX_creme_6.jpg',
		],
		Description: `This peptide-powered repair crème provides maximum results against the visible signs of aging, helping to nourish, revitalize and support the look of firmer, tighter skin. The multi-benefit formula helps to replenish moisture, reduce the look of lines and wrinkles and promote smoother, more even-toned skin. Corrective peptides promote skin firmness for a more youthful-looking appearance.`,
	},
	{
		id: 'price_1MrZGwCY8zWB58FwbDyNTBKI',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying acne lotion',
		price: 42,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR_CELL_clarifying_acne_lotio-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-ACNE-LOTIO-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-ACNE-LOTIO-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-ACNE-LOTIO-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-ACNE-LOTIO-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-ACNE-LOTIO-6.jpg',
		],
		Description: `This targeted daily treatment with 5% benzoyl peroxide helps clear acne blemishes and allows skin to heal.`,
	},
	{
		id: 'price_1MrZHRCY8zWB58Fwqso5sPmF',
		category: 'moisturizers and creams',
		name: 'ILUMA intense brightening crème',
		price: 94,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA_intense_brightening_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA_intense_brightening_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA-INTENSE-BRIGHTENING-CREME-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA_intense_brightening_4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA_intense_brightening_5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ILUMA_intense_brightening_6.jpg',
		],
		Description: `This rich, botanically-powered crème boosts radiance and clarity in uneven skin. With botanical brightening agents and stabilized vitamin C, it helps to minimize the appearance of discoloration and dark spots. Moisture-rich plant oils leave skin feeling soft and smooth.`,
	},
	{
		id: 'price_1MrZHxCY8zWB58Fwlha4Q0CZ',
		category: 'moisturizers and creams',
		name: 'the MAX™ contour gel crème',
		price: 122,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE_MAX_contour_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CONTOUR-GEL-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE_MAX_contour_creme_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CONTOUR-GEL-CREME-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CONTOUR-GEL-CREME-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/THE-MAX-CONTOUR-GEL-CREME-6.jpg',
		],
		Description: `This technically advanced gel-crème defies the visible effects of gravity, restoring the look of firmness and volume to the face.`,
	},
	{
		id: 'price_1MrZISCY8zWB58FwBU3IwqwI',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL mattifying moisturizer',
		price: 62,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR_CELL_mattifying_moisturize-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-MATTIFYING-MOISTURIZE-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-MATTIFYING-MOISTURIZE-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-MATTIFYING-MOISTURIZE-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-MATTIFYING-MOISTURIZE-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-MATTIFYING-MOISTURIZE-6.jpg',
		],
		Description: `This mattifying moisturizer hydrates oily-prone skin while minimizing the appearance of excess shine.`,
	},
	{
		id: 'price_1MrZIvCY8zWB58FwUIYazbj7',
		category: 'moisturizers and creams',
		name: 'CLEAR CELL clarifying repair crème',
		price: 69,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR_CELL_clarifying_repair_cre-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-7.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-8.jpg',
		],
		Description: `This multi-action gel-crème helps to reduce the appearance of blemishes through surface exfoliation while minimizing visible signs of aging like fine lines, wrinkles, discoloration and uneven skin texture.`,
	},
	{
		id: 'price_1MrZJjCY8zWB58FwaMx2Y1eY',
		category: 'moisturizers and creams',
		name: 'Discovery-size CLEAR CELL clarifying repair crème',
		price: 46,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR_CELL_clarifying_repair_cre-disc-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/CLEAR-CELL-CLARIFYING-REPAIR-CRE-disc-7.jpg',
		],
		Description: `This multi-action gel-crème helps to reduce the appearance of blemishes through surface exfoliation while minimizing visible signs of aging like fine lines, wrinkles, discoloration and uneven skin texture.`,
	},
	{
		id: 'price_1MrZKACY8zWB58FwhT95nxy3',
		category: 'moisturizers and creams',
		name: 'ORMEDIC balancing biopeptide crème',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC_balancing_bio-peptide_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC-balancing-bio-peptide-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC_balancing_bio-peptide_3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC-balancing-bio-peptide-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC-balancing-bio-peptide-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC-balancing-bio-peptide-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/ORMEDIC-balancing-bio-peptide-7.jpg',
		],
		Description: `A nourishing crème with shea butter, mango butter and plant oils to nourish and replenish moisture-depleted skin`,
	},
	{
		id: 'price_1MrZKcCY8zWB58FwFCaf2xng',
		category: 'moisturizers and creams',
		name: 'AGELESS total retinol-A crème',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_retinol-A_creme_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_retinol-A_creme_2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/AGELESS_total_retinol-A_creme_3.jpg',
		],
		Description: `This intensive blend of retinol, glycolic acid and lactic acid helps to repair visible signs of aging and revitalize the appearance of dull skin. An advanced peptide complex actively fights the appearance of wrinkles and improves uneven tone.`,
	},
	{
		id: 'price_1MrZL5CY8zWB58Fwj694oY5d',
		category: 'moisturizers and creams',
		name: 'IMAGE MD® restoring youth repair crème',
		price: 88,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE_MD_restoring_youth_repair-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE_MD_restoring_youth_repair-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE_MD_restoring_youth_repair-3.jpg',
		],
		Description: `This nightly repair crème delivers a powerhouse blend of retinol, glycolic acid and vitamin C to help improve visible signs of aging and brighten dull skin. Designed by a plastic surgeon to offer clinical benefits at home, it's powered by advanced delivery technology to promote youthful, firm and radiant-looking skin.`,
	},
	{
		id: 'price_1MrZLVCY8zWB58FwA7owDrQh',
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring brightening crème',
		price: 100,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE_MD_restoring_brightening_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE-MD-restoring-brightening-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE-MD-restoring-brightening-3.jpg',
		],
		Description: `This targeted brightening crème helps to correct the appearance of unwanted pigmentation, discoloration and dark spots for more radiant skin.

		Formulated by plastic surgeons for maximum results.`,
	},
	{
		id: 'price_1MrZM1CY8zWB58Fw4rNYnz2d',
		category: 'moisturizers and creams',
		name: 'IMAGE MD restoring retinol crème',
		price: 94,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGE_MD_restoring_retinol_creme-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGEMD-RESTORING-RETINOL-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/moisturizers/IMAGEMD-RESTORING-RETINOL-CREME-3.jpg',
		],
		Description: `This high-performance crème delivers an age-defying power blend of retinol and glycolic acid to revitalize the skin and minimize the appearance of fine lines, wrinkles, dullness and uneven skin texture and tone.`,
	},
	{
		id: 'price_1MrZMKCY8zWB58FwOdFDnWgp',
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily ultimate protection moisturizer SPF 50',
		price: 50,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_ultimate_prote-50-6.jpg',
		],
		Description: `This sheer daily moisturizer offers SPF 50 broad-spectrum protection against the sun’s harmful UVA and UVB rays.

		Touched with a hint of citrus essential oils for a naturally uplifting scent.`,
	},
	{
		id: 'price_1MrZMgCY8zWB58FwK37pMCmV',
		category: 'sun protection skincare',
		name: 'PREVENTION+® daily matte moisturizer SPF 30',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-30-6.jpg',
		],
		Description: `Winner of the Dayspa professional Choice Awards 2018 

		This daily mattifying moisturizer delivers broad-spectrum SPF 30 protection against the sun's harmful UVA and UVB rays. It helps to prime and protect the skin while minimizing shine and leaving a soft matte finish.
		
		Part of the bestselling PREVENTION+ collection, this formula is newly modernized to meet our clean clinical skincare™ standard and formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.`,
	},
	{
		id: 'price_1MrZN3CY8zWB58Fw81OOfJBw',
		category: 'sun protection skincare',
		name: 'Discovery-size PREVENTION+® daily matte moisturizer SPF 30',
		price: 30,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_matte_moisturi-disc-30-6.jpg',
		],
		Description: `Our bestselling SPF moisturizer now comes in an all-new discovery size. Experience why it's a bestseller today!

		This daily mattifying moisturizer delivers broad-spectrum protection against the sun's harmful UVA and UVB rays. It helps to prime and protect the skin while minimizing shine and leaving a soft matte finish.
		
		Shipped in an IMAGE bubble pouch.
		
		Part of the bestselling PREVENTION+ collection, this formula is newly modernized to meet our clean clinical skincare™ standard and formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.`,
	},
	{
		id: 'price_1MrZNWCY8zWB58FwbNuLFFfW',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily hydrating moisturizer SPF 30+',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-HYDRATING-MOIS-30-6.jpg',
		],
		Description: `NEW FORMULA

		This hydrating, all-mineral daily SPF moisturizer delivers broad-spectrum protection against the sun’s harmful UVA and UVB rays. We've updated our original formula with a new zinc oxide that rubs in seamlessly, leaving a sheer, weightless finish under makeup or on its own. Formulated with Digital Aging Defense, it helps to protect against blue light from phones, devices and the sun.
		
		Our bestselling PREVENTION+ SPF moisturizers have been newly modernized to meet our clean clinical skincare™ standard and formulated without parabens, phthalates, mineral oils, artificial fragrances, synthetic dyes or animal testing.`,
	},
	{
		id: 'price_1MrZO1CY8zWB58FwBEKuIpKU',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily tinted moisturizer SPF 30',
		price: 50,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_tinted_moistur-30-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-TINTED-MOISTUR-30-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-TINTED-MOISTUR-30-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-TINTED-MOISTUR-30-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-TINTED-MOISTUR-30-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-DAILY-TINTED-MOISTUR-30-6.jpg',
		],
		Description: `OUR DAILY TINTED MOISTURIZER NOW FEATURES AN IMPROVED FORMULA
		A tinted moisturizer with SPF 30 protection that delivers a hint of color for a healthy-looking glow`,
	},
	{
		id: 'price_1MrZOKCY8zWB58Fw8iEu0YCW',
		category: 'sun protection skincare',
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_lip_enhancer-15-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_lip_enhancer-15-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_lip_enhancer-15-3.jpg',
		],
		Description: `This moisturizing lip treatment offers SPF 15 sun protection with the benefits of nourishing avocado oil, a peptide complex and marine collagen filling spheres to boost the appearance of dry, thin lips.`,
	},
	{
		id: 'price_1MrZOhCY8zWB58FwQi57CIHB',
		category: 'sun protection skincare',
		name: 'PREVENTION+ daily perfecting primer SPF 50',
		price: 54,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION__daily_perfecting_pri-50-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-7.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/PREVENTION_-PRIMER-50-8.jpg',
		],
		Description: `A tinted SPF-infused primer that smoothes skin and blurs the appearance of wrinkles, uneven skin texture and pores.`,
	},
	{
		id: 'price_1MrZP3CY8zWB58FwmUpEFbvv',
		category: 'sun protection skincare',
		name: 'IMAGE MD® restoring daily defense moisturizer SPF 50',
		price: 54,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_defense_moist-50-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_defense_moist-50-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/IMAGE_MD_restoring_defense_moist-50-3.jpg',
		],
		Description: `This hydrating, all-mineral SPF 50 moisturizer provides broad-spectrum UVA/UVB protection while defending against daily environmental stressors. Its sheer, lightweight finish wears well under makeup or on its own. A blend of plant extracts, humectants and antioxidants help to nourish the skin. Designed by a plastic surgeon and available exclusively through your skincare professional.`,
	},
	{
		id: 'price_1MrnuoCY8zWB58FwnQKHVRdB',
		category: 'sun protection skincare',
		name: 'SPF Sampler Set',
		price: 15,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/sunscreens/SPF-SAMPLE-SET-1.jpg',
		],
		Description: `This hydrating, all-mineral SPF 50 moisturizer provides broad-spectrum UVA/UVB protection while defending against daily environmental stressors. Its sheer, lightweight finish wears well under makeup or on its own. A blend of plant extracts, humectants and antioxidants help to nourish the skin. Designed by a plastic surgeon and available exclusively through your skincare professional.`,
	},
	{
		id: 'price_1MrZPMCY8zWB58FwWwRnHzhq',
		category: 'lip enhancers',
		name: 'ORMEDIC balancing lip enhancement complex',
		price: 26,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC_balancing_lip_enhancemen-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-balancing-lip-enhancemen-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-balancing-lip-enhancemen-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-balancing-lip-enhancemen-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-balancing-lip-enhancemen-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-balancing-lip-enhancemen-6.jpg',
		],
		Description: `This bestselling lip treatment deeply moisturizes dry lips and delivers a plumper, fuller appearance. 

		Also exists in Tinted Pink`,
	},
	{
		id: 'price_1MrZPfCY8zWB58Fwgz4cdiND',
		category: 'lip enhancers',
		name: 'ORMEDIC sheer pink lip enhancement complex',
		price: 26,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC_CARE_FOR_SKIN_sheer_pink-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-pink-sheer-lip-complex-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-pink-sheer-lip-complex-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-pink-sheer-lip-complex-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-pink-sheer-lip-complex-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/ORMEDIC-pink-sheer-lip-complex-6.jpg',
		],
		Description: `This bestselling lip treatment deeply moisturizes dry lips and delivers a plumper, fuller appearance with a hint of pink. 

		A portion of proceeds from every purchase of ORMEDIC sheer pink lip enhancement complex benefits the Care for Skin Foundation, a nonprofit organization that works to improve lives through surgery and skin replacement.
		
		Also exists in Clear`,
	},
	{
		id: 'price_1MrZQ5CY8zWB58FwPYy0gEXD',
		category: 'lip enhancers',
		name: 'IMAGE MD® restoring lip enhancer SPF 15',
		price: 34,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/IMAGE_MD_restoring_lip_enhancer-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/IMAGE_MD_restoring_lip_enhancer-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/lip+care/IMAGE_MD_restoring_lip_enhancer-3.jpg',
		],
		Description: `This moisturizing lip treatment offers SPF 15 sun protection with the benefits of nourishing avocado oil, a peptide complex and marine collagen filling spheres to boost the appearance of dry, thin lips.`,
	},
	{
		id: 'price_1MrZQSCY8zWB58FwukY2Tlgl',
		category: 'hand and body skincare',
		name: 'VITAL C hydrating hand and body lotion',
		price: 40,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/VITAL_C_hydrating_hand_and_body-7.jpg',
		],
		Description: `A luxurious quenching lotion that brightens, nourishes and softens skin on the body, hands and feet.`,
	},
	{
		id: 'price_1MrZQoCY8zWB58Fw54hMScQc',
		category: 'hand and body skincare',
		name: 'BODY SPA  exfoliating body scrub',
		price: 34,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_exfoliating_body_scrub-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-EXFOLIATING-BODY-SCRUB-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-EXFOLIATING-BODY-SCRUB-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_exfoliating_body_scrub-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_exfoliating_body_scrub-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_exfoliating_body_scrub-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_exfoliating_body_scrub-7.jpg',
		],
		Description: `Winner of LNE & Spa's Best product 2018

		This dual-exfoliating body polish helps to gently sweep away dull, flaky skin, leaving skin smooth, soft and radiant.`,
	},
	{
		id: 'price_1MrZRKCY8zWB58Fw1MOteWEm',
		category: 'hand and body skincare',
		name: 'ILUMA intense brightening body lotion',
		price: 60,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/ILUMA_intense_brightening_body_1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/ILUMA-BRIGHTENING-BODY-LOTION-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/iluma-brightening-body-loton-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/ILUMA-BRIGHTENING-BODY-LOTION-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/ILUMA-BRIGHTENING-BODY-LOTION-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/ILUMA-BRIGHTENING-BODY-LOTION-6.jpg',
		],
		Description: `Unveil smooth, radiant skin from the neck down with this nourishing and moisturizing body lotion. A brightening peptide and Indian kudzu support the appearance of even-toned skin and leave a luminous glow. Creamy yet lightweight, it replenishes dry areas and touches skin with a fresh, uplifting scent courtesy of sweet orange oil, lemon balm and daisy leaf extracts.`,
	},
	{
		id: 'price_1MrZRmCY8zWB58Fw1TTLuds9',
		category: 'hand and body skincare',
		name: 'BODY SPA rejuvenating body lotion',
		price: 36,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_rejuvenating_body_lotio-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-REJUVENATING-BODY-LOTIO-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-REJUVENATING-BODY-LOTIO-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_rejuvenating_body_lotio-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_rejuvenating_body_lotio-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_rejuvenating_body_lotio-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_rejuvenating_body_lotio-7.jpg',
		],
		Description: `This glycolic body lotion helps to smooth, soften and resurface dry, rough skin from the neck down.`,
	},
	{
		id: 'price_1Mro4NCY8zWB58FwHhXEvXBk',
		category: 'hand and body skincare',
		name: 'BODY SPA CELL.U.LIFT® firming body crème',
		price: 82,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_cell.lift_firming_body-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-FIRMING-BODY-CREME-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY-SPA-FIRMING-BODY-CREME-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_cell.lift_firming_body-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_cell.lift_firming_body-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_cell.lift_firming_body-6.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/body+care/BODY_SPA_cell.lift_firming_body-7.jpg',
		],
		Description: `This nourishing body crème was formulated to help sculpt and promote a smooth, toned appearance. Formulated by a physician, it targets dimpled and lax skin, helping to promote a firmer, tighter look and feel. With rich moisturizing ingredients like shea butter, hydrating aloe vera, and antioxidant coffee extracts, it leaves the skin smooth, soft, and refreshed.`,
	},
	{
		id: 'price_1MrZSACY8zWB58FwtqmRvcDU',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen porcelain',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/porcelain/I_CONCEAL_flawless_foundation_po-6.jpg',
		],
		Description: `This full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant stem cells, antioxidants and conditioning botanicals nourish the skin with every use. Gives skin a natural-looking, radiant glow.`,
	},
	{
		id: 'price_1MrZSVCY8zWB58FwFS5remFq',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen natural',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/natural/I_CONCEAL_flawless_foundation_na-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/natural/I_CONCEAL_flawless_foundation_na-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/natural/I_CONCEAL_flawless_foundation_na-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/natural/I_CONCEAL_flawless_foundation_na-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/natural/I_CONCEAL_flawless_foundation_na-5.jpg',
		],
		Description: `This full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant stem cells, antioxidants and conditioning botanicals nourish the skin with every use. Gives skin a natural-looking, radiant glow.`,
	},
	{
		id: 'price_1MrZT7CY8zWB58FwCfEACtcw',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen beige',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/beige/I_CONCEAL_flawless_foundation_be-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/beige/I_CONCEAL_flawless_foundation_be-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/beige/I_CONCEAL_flawless_foundation_be-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/beige/I_CONCEAL_flawless_foundation_be-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/beige/I_CONCEAL_flawless_foundation_be-5.jpg',
		],
		Description: `This full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant stem cells, antioxidants and conditioning botanicals nourish the skin with every use. Gives skin a natural-looking, radiant glow.`,
	},
	{
		id: 'price_1MrZTbCY8zWB58FwmAOycwmQ',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen suede',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/I_CONCEAL_flawless_foundation_su-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/ICONCEAL-SUEDE-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/ICONCEAL-SUEDE-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/ICONCEAL-SUEDE-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/ICONCEAL-SUEDE-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/suede/ICONCEAL-SUEDE-6.jpg',
		],
		Description: `This full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant stem cells, antioxidants and conditioning botanicals nourish the skin with every use. Gives skin a natural-looking, radiant glow.`,
	},
	{
		id: 'price_1MrZTvCY8zWB58FwzzGPQrsP',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen toffee',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/toffee/I_CONCEAL_flawless_foundation_to-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/toffee/I_CONCEAL_flawless_foundation_to-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/toffee/I_CONCEAL_flawless_foundation_to-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/toffee/I_CONCEAL_flawless_foundation_to-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/toffee/I_CONCEAL_flawless_foundation_to-5.jpg',
		],
		Description: `This full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant stem cells, antioxidants and conditioning botanicals nourish the skin with every use. Gives skin a natural-looking, radiant glow.`,
	},
	{
		id: 'price_1MrZULCY8zWB58Fw0MqAly4r',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen deep honey',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-5.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/deep+honey/I_CONCEAL_flawless_foundation_de-6.jpg',
		],
		Description: `Deep Honey is a rich tawny for medium to deep dark skin tones.

		This lightweight, full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30 protection. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant cell extracts, antioxidants and conditioning botanicals nourish the skin with every use. The breathable formula delivers a natural-looking, radiant glow.
		
		Also available in Porcelain, Natural, Beige, Suede, Toffee and Mahogany.`,
	},
	{
		id: 'price_1MrZUqCY8zWB58FwtQUcMcqz',
		category: 'makeup',
		name: 'I CONCEAL flawless foundation broad-spectrum SPF 30 sunscreen mahogany',
		price: 52,
		imgUrl: [
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/mahogany/I_CONCEAL_flawless_foundation_ma-1.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/mahogany/I_CONCEAL_flawless_foundation_ma-2.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/mahogany/I_CONCEAL_flawless_foundation_ma-3.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/mahogany/I_CONCEAL_flawless_foundation_ma-4.jpg',
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/makeup/mahogany/I_CONCEAL_flawless_foundation_ma-5.jpg',
		],
		Description: `Mahogany is a rich espresso with a warm touch for deep dark skin tones.

		This lightweight, full-coverage mineral foundation blends seamlessly into the skin, offering a customizable finish with the benefits of broad-spectrum SPF 30 protection. With zinc oxide and titanium dioxide filters and gorgeous mineral pigments, it covers the appearance of redness after cosmetic procedures and minimizes the look of pores and imperfections. Plant cell extracts, antioxidants and conditioning botanicals nourish the skin with every use. The breathable formula delivers a natural-looking, radiant glow.`,
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
