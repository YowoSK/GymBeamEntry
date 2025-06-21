import React from "react";

const benefits = [
	{
		icon: (
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width={35}
				height={35}
				viewBox="0 0 31.74 28"
				className="shrink-0 fill-primary"
			>
				<path
					d="M24.42.06a9.46,9.46,0,0,0-7.58,2.68A9.27,9.27,0,0,0,9.27.06,9.41,9.41,0,0,0,1,8.53a9.25,9.25,0,0,0,3.48,8L15.05,27.26a2.39,2.39,0,0,0,1.74.74h0a2.43,2.43,0,0,0,1.68-.68L29.16,16.63a9.39,9.39,0,0,0,3.52-8A9.45,9.45,0,0,0,24.42.06Zm2.42,13.68-10,10L7,13.9l-.16-.16a5.6,5.6,0,0,1,2.85-10c.21,0,.42-.05.63-.05A5.5,5.5,0,0,1,14.9,6.05a2.52,2.52,0,0,0,2,1.06,2.4,2.4,0,0,0,2-1.06A5.62,5.62,0,0,1,29.11,8.84,6,6,0,0,1,26.84,13.74Z"
					transform="translate(-0.97)"
				/>
			</svg>
		),
		title: "6M+",
		desc: "spokojných zákazníkov",
	},
	{
		icon: (
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width={35}
				height={35}
				viewBox="0 0 21.54 28"
				className="shrink-0 fill-primary"
			>
				<path
					d="M3.93,6.2a10.69,10.69,0,0,0,3.41,7.85A10.91,10.91,0,0,0,3.93,21.9V28H25.47V21.85A10.7,10.7,0,0,0,22.06,14a10.89,10.89,0,0,0,3.41-7.85V0H3.93ZM7.54,21.85a7.14,7.14,0,0,1,3.67-6.25L14.05,14l-2.84-1.6A7.14,7.14,0,0,1,7.54,6.15V3.62H21.85V6.15a7.12,7.12,0,0,1-3.67,6.25L15.34,14l2.79,1.6a7.12,7.12,0,0,1,3.67,6.25v2.53H7.49V21.85Z"
					transform="translate(-3.93)"
				/>
			</svg>
		),
		title: "<24 hodín",
		desc: "rýchle dodanie",
	},
	{
		icon: (
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width={35}
				height={35}
				viewBox="0 0 57.8 57.2"
				className="shrink-0 fill-primary"
			>
				<path
					d="M29.39,5.39.5,19.44v29.1L29.39,62.59l28.9-14.05V19.44ZM7.65,27.23l18.17,8.29V52.9L7.65,44.06ZM51.14,44.06,33,52.9v-22L12.46,21.57l16.93-8.23L51.14,23.91Z"
					transform="translate(-0.5 -5.39)"
				/>
				<polygon points="37.5 23.21 37.5 34.28 44.6 29.32 44.6 18.65 34.16 13.89 26.38 18.26 37.5 23.21" />
			</svg>
		),
		title: "Doprava zadarmo",
		desc: "pri nákupe nad 60.00 €",
	},
	{
		icon: (
			<svg
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width={35}
				height={35}
				viewBox="0 0 27.7 28"
				className="shrink-0 fill-primary"
			>
				<path d="M21.35,4.82a7.12,7.12,0,0,0-13.5,0H3.7L.75,28h27.7L25.5,4.82ZM14.6,3.47a3.46,3.46,0,0,1,2.8,1.35H11.8A3.53,3.53,0,0,1,14.6,3.47zm-9.85,21L6.8,8.32H22.45L24.5,24.47Z" />
			</svg>
		),
		title: "9000+ produktov",
		desc: "najširší sortiment skladom",
	},
];

export default function HomeBenefits() {
	return (
		<div className="my-6 flex justify-center">
			<ul
				className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mx-auto"
				style={{ width: "100%", maxWidth: "1200px" }}
				data-test="hp-static-benefits"
			>
				{benefits.map((b, i) => (
					<li
						key={i}
						className="flex gap-2 items-center justify-center"
					>
						{b.icon}
						<div>
							<div className="text-[15px] text-base font-bold md:text-sm md:leading-tight">
								<div>{b.title}</div>
							</div>
							<div className="text-xs md:text-sm md:leading-relaxed">
								<div>{b.desc}</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
