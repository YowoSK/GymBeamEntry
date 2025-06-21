"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const banners = [
	{
		href: "https://gymbeam.sk/joga-a-pilates",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/k/sk-yoga_day-june25-slider_desktop.jpg",
		alt: "Yoga Day",
	},
	{
		href: "https://gymbeam.sk/33-spalovace-tukov",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/k/sk-burner_sale-2025-slider_desktop.jpg",
		alt: "Fat Burners sale",
	},
	{
		href: "https://gymbeam.sk//protein-just-whey-1000-g-gymbeam.html",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/l/slider_desktop_140.jpg",
		alt: "Just Whey",
	},
	{
		href: "https://gymbeam.sk/asap-pre-workout-gymbeam.html",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/a/s/asap_preworkout-slider-desktop-sk.jpg",
		alt: "ASAP pre-workout",
	},
	{
		href: "https://gymbeam.sk/zdrave-potraviny/potraviny-6121?category_ids=1943%2C2485&product_labels=5485&filter=out",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/g/b/gb-new_pasta-slider-desktop-sk.jpg",
		alt: "Cestoviny a strukoviny",
	},
	{
		href: "https://gymbeam.sk//gymbeam-clothing/85-polyester-15-elastane_100-polyester_95-nylon-5-elastan?filter=out&price=8.00-32.00&product_list_order=new",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/k/sk-slider-desktop_3.jpg",
		alt: "Swimwear",
	},
	{
		href: "https://gymbeam.sk//masla?filter=out&product_list_order=new",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/g/b/gb-new_nut_butters-slider-desktop_20.jpg",
		alt: "Butters",
	},
	{
		href: "https://gymbeam.sk//mini-protein-cookies-gymbeam.html",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/k/sk_-_asap-mini-cookies_slider-desktop.jpg",
		alt: "Mini Cookies",
	},
	{
		href: "https://gymbeam.sk//spicy-kimchi-gymbeam.html",
		img: "https://gymbeam.sk/media/gymbeam/bannerslider/s/k/sk_-_slider_desktop_1920x595.jpg",
		alt: "Kimchi",
	},
];

export default function BannerSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		adaptiveHeight: true,
		pauseOnHover: true,
	};
	return (
		<div className="w-full bg-black">
			<Slider {...settings}>
				{banners.map((banner, i) => (
					<div key={i} className="w-full">
						<Link
							href={banner.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={banner.alt}
							className="block"
						>
							<img
								src={banner.img}
								alt={banner.alt}
								className="w-full h-[180px] sm:h-[260px] md:h-[320px] lg:h-[368px] object-cover object-center"
								width={2000}
								height={750}
								loading={i === 0 ? "eager" : "lazy"}
							/>
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
}
