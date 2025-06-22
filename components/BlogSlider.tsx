"use client";

const blogPosts = [
	{
		href: "https://gymbeam.sk/blog/recept-na-nadychane-palacinky-z-quinoi-plne-vlakniny/",
		img: "https://gymbeam.com/blog/wp-content/uploads/2024/03/Navrh-bez-nazvu-2024-03-04T094401.127-400x209.png",
		title: "Fitness recept: Proteínové palacinky s quinoou",
		desc: "Palacinky sa dajú pripraviť mnohými spôsobmi. My sme dnes bežný recept spestrili quinoou a vanilkovým proteínom. Vďaka tomu vznikla lahodná verzia nabitá bielkovinami. ",
	},
	{
		href: "https://gymbeam.sk/blog/8-tipov-ako-trenovat-ked-nic-nestihate/",
		img: "https://gymbeam.com/blog/wp-content/uploads/2024/03/Navrh-bez-nazvu-2024-02-29T091430.808-400x209.png",
		title: "10 tipov na aktívny životný štýl, keď nemáte čas ísť do fitka",
		desc: "Sú dni, keď človek nestíha zájsť do fitka a dať si kvalitný tréning. To však neznamená, že nemôžeme byť aktívni počas dňa. Dnes pre vás máme množstvo tipov, ako zaradiť viac pohybu do nabitého pracovného dňa. ",
	},
	{
		href: "https://gymbeam.sk/blog/fitness-recept-cestoviny-s-cicerom-a-parmezanom/",
		img: "https://gymbeam.com/blog/wp-content/uploads/2024/02/Navrh-bez-nazvu-2024-02-16T130229.883-400x209.png",
		title: "Fitness recept: Cestoviny s cícerom a parmezánom",
		desc: "Ako si pripraviť vyvážený obed bez mäsa? My sme dnes stavili na kombináciu cestovín, cícera a parmezánu. Potom už stačilo pridať len listovú zeleninu, všetko dochutiť a lahodný obed je hotový.",
	},
	{
		href: "https://gymbeam.sk/blog/10-chyb-ktorym-sa-musite-vyhnut-v-mladosti/",
		img: "https://gymbeam.com/blog/wp-content/uploads/2024/02/Dizajn-bez-nazvu-1-400x209.png",
		title: "Najčastejšie chyby pri cvičení, ktorým sa v mladosti nedá odolať",
		desc: "Mladícka nerozvážnosť funguje v súvislosti s cvičením niekedy ako lepidlo na rôzne chyby. V aktuálnom článku sme sa pozreli na tie najčastejšie tréningové omyly a navrhli riešenia, ktoré môžu pomôcť každému, kto s cvičením práve začína.",
	},
];

export default function BlogSlider() {
	return (
		<div className="mb-10" data-test="hp-blog">
			<h2 className="mb-5 mt-6 text-xl font-semibold uppercase leading-5 text-black">
				<a href="https://gymbeam.sk/blog" aria-label="gymbeam">
					Blog
				</a>
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{blogPosts.map((post, i) => (
					<a
						key={i}
						href={post.href}
						aria-label={post.title}
						className="block border-0 text-black no-underline hover:no-underline outline-0 bg-white p-3"
						target="_blank"
						rel="noopener noreferrer"
						style={{ borderRadius: 0 }}
					>
						<img
							src={post.img}
							alt="Blog post image"
							loading="eager"
							width={500}
							height={209}
							className="h-auto w-full"
						/>
						<div>
							<h3 className="text-2xl font-bold mb-2.5 mt-4 text-justify text-[0.950rem] font-bold leading-5">
								{post.title}
							</h3>
							<p className="font-normal text-justify">
								{post.desc}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
