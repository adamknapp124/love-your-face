import axios from 'axios';

const servicesArray = [
	{
		name: 'Bikini Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/bikini.jpg',
		slug: 'bikini-wax',
		price: 40,
		description:
			"Get ready to hit the beach with confidence! My bikini wax service is designed to help you achieve smooth, hair-free skin in your most intimate areas. As an experienced esthetician, I provide gentle and effective hair removal services using only the highest quality waxing products. \n\n During your appointment, I will make sure you feel as comfortable as possible while I carefully remove unwanted hair. Whether you prefer a classic bikini wax or a more thorough Brazilian wax, I will tailor my technique to meet your specific needs. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and satisfaction are my top priorities. I use only top-quality, hypoallergenic waxing products to ensure your skin is left smooth and irritation-free. \n\n If you're ready to feel confident and carefree in your swimsuit, book your bikini wax appointment with me today! I am dedicated to providing personalized, high-quality services that leave you feeling your best. \n\n Don't let unwanted hair hold you back from enjoying the beach or pool this summer. With my professional bikini waxing service, you can feel confident and carefree in any swimsuit. Book your appointment today and get ready to make a splash!",
	},
	{
		name: 'Brazilian Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/brazilian.jpg',
		slug: 'brazilian-wax',
		price: 70,
		description:
			"Get ready to experience the ultimate in hair removal with my Brazilian wax service! As an experienced esthetician, I provide gentle and effective hair removal services using only the highest quality waxing products to ensure your comfort and satisfaction. \n\n During your appointment, I will make sure you feel as comfortable as possible while I carefully remove unwanted hair from your most intimate areas. My technique is tailored to meet your specific needs, and I use only top-quality, hypoallergenic waxing products to ensure your skin is left smooth and irritation-free. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and privacy are my top priorities. I take pride in providing a safe and hygienic experience, and I use only the highest quality waxing products to ensure your satisfaction. \n\n If you're ready to feel confident and carefree in your most intimate areas, book your Brazilian wax appointment with me today! I am dedicated to providing personalized, high-quality services that leave you feeling your best. \n\n Don't let unwanted hair hold you back from feeling your best. With my professional Brazilian waxing service, you can experience the ultimate in hair removal and feel confident in any situation. Book your appointment today and get ready to feel amazing!",
	},
	{
		name: 'Full Leg Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/full-leg.jpg',
		slug: 'full-leg-wax',
		price: 70,
		description:
			"Get ready to show off your silky smooth legs with my full leg waxing service! As an experienced esthetician, I provide gentle and effective hair removal services using only the highest quality waxing products to ensure your comfort and satisfaction. \n\n During your appointment, I will make sure you feel as comfortable as possible while I carefully remove unwanted hair from your entire legs. My technique is tailored to meet your specific needs, and I use only top-quality, hypoallergenic waxing products to ensure your skin is left smooth and irritation-free. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and satisfaction are my top priorities. I take pride in providing a safe and hygienic experience, and I use only the highest quality waxing products to ensure your satisfaction. \n\n If you're ready to show off your silky smooth legs with confidence, book your full leg wax appointment with me today! I am dedicated to providing personalized, high-quality services that leave you feeling your best. \n\n Don't let unwanted hair hold you back from showing off your beautiful legs. With my professional full leg waxing service, you can achieve silky smooth legs and feel confident in any outfit. Book your appointment today and get ready to turn heads with your gorgeous gams!",
	},
	{
		name: 'Half Leg Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/half-leg.jpg',
		slug: 'half-leg-wax',
		price: 45,
		description:
			"Get ready to show off your beautiful legs with my half leg waxing service! As an experienced esthetician, I provide gentle and effective hair removal services using only the highest quality waxing products to ensure your comfort and satisfaction. \n\n During your appointment, I will make sure you feel as comfortable as possible while I carefully remove unwanted hair from your legs. My technique is tailored to meet your specific needs, and I use only top-quality, hypoallergenic waxing products to ensure your skin is left smooth and irritation-free. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and satisfaction are my top priorities. I take pride in providing a safe and hygienic experience, and I use only the highest quality waxing products to ensure your satisfaction. \n\n If you're ready to show off your beautiful legs with confidence, book your half leg wax appointment with me today! I am dedicated to providing personalized, high-quality services that leave you feeling your best. \n\n Don't let unwanted hair hold you back from showing off your beautiful legs. With my professional half leg waxing service, you can achieve smooth and hair-free legs and feel confident in any outfit. Book your appointment today and get ready to strut your stuff!",
	},
	{
		name: 'Underarm Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/underarms.jpg',
		slug: 'underarm-wax',
		price: 20,
		description:
			"Are you tired of the constant upkeep of underarm shaving? Let me help you achieve smooth, hair-free underarms with my professional waxing service. As a skilled esthetician, I use the latest techniques and high-quality products to provide gentle and effective hair removal that will leave you feeling confident and carefree. \n\n During your underarm waxing appointment, I will carefully apply warm wax to the hair and skin in the underarm area. With a gentle touch and quick technique, your appointment will be efficient and as comfortable as possible. \n\n At my clean and welcoming studio, you can relax knowing that you're receiving the best possible care. I take pride in providing a safe and hygienic experience, and I use only the highest quality products to ensure that your skin is left smooth and irritation-free. \n\n Don't waste any more time dealing with the hassle of underarm shaving. Book your appointment with me today and experience the benefits of professional underarm waxing. Say goodbye to razor burn and hello to beautiful, hair-free underarms that will leave you feeling confident and carefree.",
	},
	{
		name: 'Facial',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/facial.jpg',
		slug: 'facial',
		price: 85,
		description:
			"Experience the ultimate in relaxation and self-care with our one-hour customized facial. As a licensed esthetician with years of experience, I offer personalized facial services designed to help you achieve a healthy and glowing complexion. \n\n During your one-hour facial, I will carefully analyze your skin to determine the best products and techniques to use. Whether you have dry, oily, sensitive, or combination skin, I will customize the treatment to meet your specific needs and goals. \n\n The facial includes a range of steps to cleanse, exfoliate, and nourish your skin. This may include gentle cleansing, a relaxing facial massage, a custom mask, and a hydrating treatment. Each step is designed to help you achieve a refreshed and rejuvenated complexion. \n\n Throughout the facial, you'll be able to unwind and let go of the stresses of daily life. With a calming environment and expert techniques, you'll leave feeling relaxed, refreshed, and renewed. \n\n So if you're looking to pamper yourself with an hour of customized self-care, book your facial appointment with me today!",
	},
	{
		name: 'Dermaplaning Add-On',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/dermaplaning.jpg',
		slug: 'dermaplaning-addon',
		price: 15,
		description:
			"Looking to take your skincare routine to the next level? Add a dermaplaning treatment to your facial service for even more radiant and smooth skin. Dermaplaning is a safe and effective exfoliation technique that removes dead skin cells and peach fuzz to reveal a brighter and more youthful complexion. \n\n During the dermaplaning treatment, I use a sterile blade to gently remove the outermost layer of dead skin cells and vellus hair from your face. This process not only helps to reveal smoother, softer skin, but also allows for better absorption of skincare products and makeup. \n\n As a licensed esthetician, I will carefully analyze your skin to ensure that dermaplaning is the right option for you. If you're looking to enhance your facial service and achieve a brighter and more vibrant complexion, be sure to add dermaplaning to your next appointment. \n\n Book your dermaplaning add-on today and discover the benefits of this amazing skincare technique!",
	},
	{
		name: 'Brow Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/eyebrows.jpg',
		slug: 'brow-wax',
		price: 15,
		description:
			"If you're looking for a way to enhance the appearance of your eyebrows, a professional brow wax service may be just what you need. As a licensed esthetician with years of experience, I am dedicated to helping my clients achieve their desired look by providing high-quality and personalized services. \n\n During a brow wax service, I use warm wax to gently remove unwanted hair from around your eyebrows, creating a clean and polished shape that complements your facial features. Whether you're looking for a subtle enhancement or a dramatic transformation, I will work with you to achieve the perfect look for your unique style. \n\n In addition to brow waxing, I also offer a range of other services, including tweezing, trimming, and tinting, to help you achieve your desired brow shape and color. My goal is to provide a comfortable and relaxing experience that leaves you feeling confident and refreshed. \n\n So if you're ready to take your brows to the next level, book your appointment with me today!",
	},
	{
		name: 'Lip Wax',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/lips.jpg',
		slug: 'lip-wax',
		price: 10,
		description:
			" If you're looking for a way to achieve a smooth and polished appearance for your upper lip, a professional lip wax service may be just what you need. As a licensed esthetician with years of experience, I am dedicated to providing high-quality and personalized services to help you look and feel your best. \n\n During a lip wax service, I use gentle and effective techniques to remove unwanted hair from the upper lip area, creating a smooth and clean finish that complements your facial features. I take care to use only the highest quality waxing products and techniques to ensure a safe and effective treatment. \n\n Whether you're looking for a subtle enhancement or a more dramatic transformation, I will work with you to achieve the perfect look for your unique style. In addition to lip waxing, I also offer a range of other waxing services, including eyebrow waxing, full face waxing, and body waxing, to help you achieve your desired look from head to toe. \n\n My goal is to provide a comfortable and relaxing experience that leaves you feeling confident and refreshed. So if you're ready to take your grooming routine to the next level, book your lip wax appointment with me today!",
	},
	{
		name: 'Brow and Lip Wax Combo',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/eyebrow-lips.jpg',
		slug: 'brow-and-lip-wax-combo',
		price: 20,
		description:
			"If you're looking for a way to enhance your natural beauty and achieve a polished look, a professional brow and lip wax combo service may be just what you need. As a licensed esthetician with years of experience, I am dedicated to providing high-quality and personalized services to help you look and feel your best. \n\n During a brow and lip wax combo service, I use gentle and effective techniques to remove unwanted hair from your brow and upper lip area, creating a smooth and clean finish that complements your facial features. I take care to use only the highest quality waxing products and techniques to ensure a safe and effective treatment. \n\n Whether you're looking to shape your brows for a more defined look or simply want to remove unwanted hair from your upper lip, I will work with you to achieve the perfect look for your unique style. In addition to brow and lip waxing, I also offer a range of other waxing services, including full face waxing and body waxing, to help you achieve your desired look from head to toe. \n\n My goal is to provide a comfortable and relaxing experience that leaves you feeling confident and refreshed. So if you're ready to take your grooming routine to the next level, book your brow and lip wax combo appointment with me today!",
	},
	{
		name: 'Brow Tint',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/browtint.jpg',
		slug: 'brow-tint',
		price: 30,
		description:
			"Looking to enhance your natural beauty and achieve a more defined look? A professional brow tint service may be just what you need. As an experienced and licensed esthetician, I offer high-quality and personalized services to help you achieve the perfect look for your unique style. \n\n During a brow tint service, I use a gentle and effective dye to add depth and dimension to your brows. By customizing the shade to match your skin tone and hair color, I create a look that enhances your features and gives you a bold and confident look. \n\n Whether you're looking for a subtle enhancement or a more dramatic transformation, I will work with you to achieve the perfect look for you. In addition to brow tinting, I also offer a range of other brow services, including brow shaping, brow lamination, and brow waxing, to help you achieve your desired look. \n\n My goal is to provide a comfortable and relaxing experience that leaves you feeling confident and refreshed. With my expertise and attention to detail, you can trust that your brow tint service will be safe, effective, and tailored to your needs. \n\n So if you're ready to elevate your brow game and achieve the perfect look, book your brow tint appointment with me today!",
	},
	{
		name: 'Brow Wax and Tint Combo',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/browcombo.jpg',
		slug: 'brow-wax-and-tint-combo',
		price: 40,
		description:
			"Transform your look with my brow wax and tint combo service! As an experienced esthetician, I provide personalized and high-quality services that help you achieve your desired look. \n\n During your appointment, I will carefully shape your brows to flatter your unique features using gentle and effective waxing techniques. Then, I will apply a customized tint to your brows to enhance their natural color and give them a fuller, more defined appearance. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and satisfaction are my top priorities. I take pride in providing a safe and hygienic experience, and I use only the highest quality waxing and tinting products to ensure your satisfaction. \n\n If you're ready to elevate your look with perfectly shaped and tinted brows, book your appointment for my brow wax and tint combo service today! I am dedicated to providing personalized and high-quality services that leave you feeling your best. \n\n Don't let uneven or sparse brows hold you back from feeling your best. With my professional brow wax and tint combo service, you can achieve the perfect brow shape and color that complements your unique features. Book your appointment today and get ready to turn heads with your stunning new look!",
	},
	{
		name: 'Express Teen Facial',
		imageUrl:
			'https://lyfphotobucket.s3.us-west-2.amazonaws.com/images/services/express.jpg',
		slug: 'express-teen-facial',
		price: 50,
		description:
			"Treat your skin to the care it deserves with my express teen facial! As an experienced esthetician, I provide gentle and effective skin care services that help teens achieve a healthy, glowing complexion. \n\n During your appointment, I will customize the facial to meet your specific skin care needs, addressing concerns such as acne, blackheads, and uneven skin tone. Using gentle and effective techniques and products, I will cleanse, exfoliate, and hydrate your skin to leave it looking and feeling its best. \n\n At my clean and welcoming studio, you can relax knowing that your comfort and satisfaction are my top priorities. I take pride in providing a safe and hygienic experience, and I use only the highest quality skin care products to ensure your satisfaction. \n\n If you're a teen looking for a quick and effective facial treatment, book your appointment for my express teen facial today! I am dedicated to providing personalized and high-quality services that leave you feeling your best. \n\n Don't let skin concerns hold you back from feeling confident in your own skin. With my professional express teen facial service, you can achieve a healthy, glowing complexion that makes you feel your best. Book your appointment today and let me help you put your best face forward!",
	},
];

export function postServices() {
	const url = 'localhost:3006';
	axios.post(url, { services: servicesArray });
}

export function getServices(identifier) {
	console.log(identifier + ' does not exist');
	let serviceInfo = servicesArray.find(
		(service) => service.identifier === identifier
	);

	if (serviceInfo === undefined) {
		console.log('Service data does not exist for identifier: ' + identifier);
		return undefined;
	}
	return serviceInfo;
}

export { servicesArray };
