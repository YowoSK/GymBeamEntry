"use client";
import Link from "next/link";

export default function Footer() {

  return (
    <footer id="page_footer" className="bg-black text-white mt-16" data-test="common-footer">
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 py-8 md:mx-auto md:py-4 2xl:px-0">
        <div className="w-full pb-5 pt-1">
          <form className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center sm:gap-4 items-center">
            <label htmlFor="subscriberEmail" className="text-left font-bold leading-4 sm:-my-0.5 sm:text-right text-base sm:text-lg whitespace-nowrap flex flex-col sm:block items-center sm:items-end">
              <span className="inline sm:block">Dobrá energia</span>
              <span className="text-sm font-normal sm:font-bold">aj do vášho e-mailu?</span>
            </label>
            <div className="flex gap-1 sm:gap-2 w-full max-w-xl">
              <div className="relative w-full flex-1">
                <input
                  className="h-[38px] px-3 transition rounded-none hover:border-[#757779] focus:rounded-none focus:shadow-md focus:shadow-grey-200 disabled:cursor-not-allowed disabled:opacity-50 outline-none border-2 border-black w-full border-none text-sm text-black bg-white placeholder-gray-500 sm:min-w-[220px] md:min-w-[300px]"
                  required
                  aria-required="true"
                  id="subscriberEmail"
                  placeholder="Zadajte svoj e-mail ..."
                  type="email"
                  name="newsletter"
                />
                <button className="text-white leading-normal items-center uppercase whitespace-nowrap truncate transition-colors duration-500 ease-in-out bg-orange-500 hover:bg-orange-600 justify-center max-h-[38px] px-5 py-2 font-bold absolute right-0 top-0 rounded-none" tabIndex={0} type="submit">
                  <div className="flex flex-1 items-center justify-center space-x-2">Odoslať</div>
                </button>
              </div>
            </div>
            <div className="mt-1 block sm:hidden text-xs text-gray-300 text-center">Odoslaním súhlasíte so spracovaním osobných údajov. Z odberu sa môžete kedykoľvek odhlásiť.</div>
          </form>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          <div>
            <ul className="space-y-1">
              <li><Link href="/znacky">Značky</Link></li>
              <li><Link href="/novinky">Novinky</Link></li>
              <li><Link href="/akcie">Akcie</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Obchodné podmienky</Link></li>
              <li><Link href="#">Ochrana osobných údajov</Link></li>
              <li><Link href="#">Reklamačný poriadok</Link></li>
              <li><Link href="#">Pridaj sa do tímu</Link></li>
              <li><Link href="#">Veľkoobchod</Link></li>
              <li><Link href="#">Najčastejšie otázky</Link></li>
              <li><Link href="#">Overovanie recenzií</Link></li>
              <li><Link href="#">Doručenie a platba</Link></li>
              <li><Link href="#">Predajňa Košice</Link></li>
              <li><Link href="#">Mobilná aplikácia</Link></li>
              <li><Link href="#">Nastavenie cookies</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Sledujte nás:</h4>
            <div className="flex gap-2">
              <a href="https://www.facebook.com/GymBeamSk" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-white hover:bg-orange-500 transition duration-500 ease-in-out">
                <svg aria-label="Facebook" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 28" className="h-[25px] w-[25px]"><path d="M14.984.187v4.125h-2.453c-1.922 0-2.281.922-2.281 2.25v2.953h4.578l-.609 4.625H10.25v11.859H5.469V14.14H1.485V9.515h3.984V6.109C5.469 2.156 7.891 0 11.422 0c1.687 0 3.141.125 3.563.187z"></path></svg>
              </a>
              <a href="https://instagram.com/gymbeamsk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-white hover:bg-orange-500 transition duration-500 ease-in-out">
                <svg aria-label="Instagram" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 28" className="h-[25px] w-[25px]"><path d="M16 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zm2.156 0c0 3.406-2.75 6.156-6.156 6.156S5.844 17.406 5.844 14 8.594 7.844 12 7.844s6.156 2.75 6.156 6.156zm1.688-6.406c0 .797-.641 1.437-1.437 1.437S16.97 8.39 16.97 7.594s.641-1.437 1.437-1.437 1.437.641 1.437 1.437zM12 4.156c-1.75 0-5.5-.141-7.078.484-.547.219-.953.484-1.375.906s-.688.828-.906 1.375c-.625 1.578-.484 5.328-.484 7.078s-.141 5.5.484 7.078c.219.547.484.953.906 1.375s.828.688 1.375.906c1.578.625 5.328.484 7.078.484s5.5.141 7.078-.484c.547-.219.953-.484 1.375-.906s.688-.828.906-1.375c.625-1.578.484-5.328.484-7.078s.141-5.5-.484-7.078c-.219-.547-.484-.953-.906-1.375s-.828-.688-1.375-.906C17.5 4.015 13.75 4.156 12 4.156zM24 14c0 1.656.016 3.297-.078 4.953-.094 1.922-.531 3.625-1.937 5.031s-3.109 1.844-5.031 1.937c-1.656.094-3.297.078-4.953.078s-3.297.016-4.953-.078c-1.922-.094-3.625-.531-5.031-1.937S.173 20.875.08 18.953C-.014 17.297.002 15.656.002 14s-.016-3.297.078-4.953c.094-1.922.531-3.625 1.937-5.031s3.109-1.844 5.031-1.937c1.656-.094 3.297-.078 4.953-.078s3.297-.016 4.953.078c1.922.094 3.625.531 5.031 1.937s1.844 3.109 1.937 5.031C24.016 10.703 24 12.344 24 14z"></path></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCFWF-YVqwOYb4O4sImMqAyg" target="_blank" rel="noopener noreferrer" aria-label="Youtube" className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-white hover:bg-orange-500 transition duration-500 ease-in-out">
                <svg aria-label="Youtube" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 28" className="h-[25px] w-[25px]"><path d="M15.172 19.437v3.297c0 .703-.203 1.047-.609 1.047-.234 0-.469-.109-.703-.344v-4.703c.234-.234.469-.344.703-.344.406 0 .609.359.609 1.047zm5.281.016v.719h-1.406v-.719c0-.703.234-1.062.703-1.062s.703.359.703 1.062zM5.359 16.047h1.672v-1.469H2.156v1.469h1.641v8.891H5.36v-8.891zm4.5 8.891h1.391v-7.719H9.859v5.906c-.313.438-.609.656-.891.656-.187 0-.297-.109-.328-.328-.016-.047-.016-.219-.016-.547v-5.688H7.233v6.109c0 .547.047.906.125 1.141.125.391.453.578.906.578.5 0 1.031-.313 1.594-.953v.844zm6.703-2.313v-3.078c0-.719-.031-1.234-.141-1.547-.172-.578-.562-.875-1.109-.875-.516 0-1 .281-1.453.844v-3.391h-1.391v10.359h1.391v-.75c.469.578.953.859 1.453.859.547 0 .938-.297 1.109-.859.109-.328.141-.844.141-1.563zm5.282-.156v-.203h-1.422c0 .562-.016.875-.031.953-.078.375-.281.562-.625.562-.484 0-.719-.359-.719-1.078v-1.359h2.797v-1.609c0-.828-.141-1.422-.422-1.813-.406-.531-.953-.797-1.656-.797-.719 0-1.266.266-1.672.797-.297.391-.438.984-.438 1.813v2.703c0 .828.156 1.437.453 1.813.406.531.953.797 1.687.797s1.313-.281 1.687-.828a1.8 1.8 0 0 0 .328-.844c.031-.141.031-.453.031-.906zm-9.5-14.266V4.922c0-.719-.203-1.078-.672-1.078-.453 0-.672.359-.672 1.078v3.281c0 .719.219 1.094.672 1.094.469 0 .672-.375.672-1.094zm11.234 11.735c0 1.797-.016 3.719-.406 5.469-.297 1.234-1.297 2.141-2.5 2.266-2.875.328-5.781.328-8.672.328s-5.797 0-8.672-.328c-1.203-.125-2.219-1.031-2.5-2.266-.406-1.75-.406-3.672-.406-5.469 0-1.813.016-3.719.406-5.469.297-1.234 1.297-2.141 2.516-2.281 2.859-.313 5.766-.313 8.656-.313s5.797 0 8.672.313c1.203.141 2.219 1.047 2.5 2.281.406 1.75.406 3.656.406 5.469zM7.984 0h1.594L7.687 6.234v4.234H6.124V6.234c-.141-.766-.453-1.859-.953-3.313-.344-.969-.688-1.953-1.016-2.922h1.656L6.92 4.108zm5.782 5.203v2.734c0 .828-.141 1.453-.438 1.844-.391.531-.938.797-1.656.797-.703 0-1.25-.266-1.641-.797-.297-.406-.438-1.016-.438-1.844V5.203c0-.828.141-1.437.438-1.828.391-.531.938-.797 1.641-.797.719 0 1.266.266 1.656.797.297.391.438 1 .438 1.828zM19 2.672v7.797h-1.422V9.61c-.562.656-1.094.969-1.609.969-.453 0-.781-.187-.922-.578-.078-.234-.125-.609-.125-1.172V2.673h1.422v5.734c0 .328 0 .516.016.547.031.219.141.344.328.344.281 0 .578-.219.891-.672V2.673h1.422z"></path></svg>
              </a>
              <a href="https://www.tiktok.com/@gymbeam.com" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-white hover:bg-orange-500 transition duration-500 ease-in-out">
                <svg aria-label="Tiktok" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="h-[25px] w-[25px]"><path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Záruka kvality:</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white rounded p-2 text-black text-xs font-semibold">ISO</div>
              <div className="bg-white rounded p-2 text-black text-xs font-semibold">IFS</div>
              <div className="bg-white rounded p-2 text-black text-xs font-semibold">LAB</div>
              <div className="bg-white rounded p-2 text-black text-xs font-semibold">EU</div>
            </div>
            <div className="my-6" id="showHeurekaBadgeHere-12"></div>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Kontaktujte nás:</h4>
            <p>GymBeam GmbH<br />Unter den Linden 21,<br />10117 Berlin, Germany</p>
            <p><a href="tel:00421233057087" className="underline">02 33 057 087</a><br />info@gymbeam.sk</p>
          </div>
        </div>
        <div className="bg-white p-2 text-center text-black mt-8 text-sm">
          <a className="inline-block text-orange-500" href="https://gymbeam.com/">GymBeam.com</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.de/">GymBeam.de</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href=" https://gymbeam.ch/">GymBeam.ch</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.bg/">GymBeam.bg</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.cz/">GymBeam.cz</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.gr/">GymBeam.gr</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.hr/">GymBeam.hr</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.hu/">GymBeam.hu</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.pl/">GymBeam.pl</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.ro/">GymBeam.ro</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.si/">GymBeam.si</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.ua/ua/">GymBeam.ua</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.it/">GymBeam.it</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.at/">GymBeam.at</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.ba/">GymBeam.ba</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.rs/">GymBeam.rs</a>
          <span className="px-2 text-orange-500">|</span>
          <a className="inline-block text-orange-500" href="https://gymbeam.sk/">GymBeam.sk</a>
        </div>
        <div className="flex h-[50px] w-full items-center justify-center text-white mt-2">© 2014 - 2025 GymBeam</div>
      </div>
    </footer>
  );
}
