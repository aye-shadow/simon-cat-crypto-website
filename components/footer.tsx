import Image from "next/image";
import LogoDark from "../public/image.png";
import Link from "next/link";
import FooterSocial from "./footerSocialLogos";
import { FaXTwitter } from "react-icons/fa6";
import { BiPaperPlane } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="w-full relative h-fit">
      <section className="absolute left-0 bottom-0 border-0 sm:border-t w-full px-10 xs:px-20 py-8 text-black">
        <section className="grid grid-cols-3 items-center pb-5 w-full">
          <div>
            <Link rel="preconnect" href="#">
              <Image
                src={LogoDark}
                alt="Logo"
                height={0}
                priority={true}
                className="w-10 xs:w-14"
              />
            </Link>
          </div>
          <div className="flex gap-4 justify-center text-sm">
            <Link href='#'><p>Terms & Conditions</p></Link>
            <Link href='# '><p>Privacy Policy</p></Link>
          </div>
          <div className="gap-4 flex justify-end">
            <Link href='#'><FooterSocial logo={FaXTwitter} /></Link>
            <Link href='#'><FooterSocial logo={BiPaperPlane} /></Link>
          </div>
        </section>
        <hr className="text-black bg-black border-black" />
        <section className="text-center pt-5 text-xs text-zinc-700">
          $SCAT ©2024 All Rights Reserved
        </section>
      </section>
    </footer>
  );
};

export default Footer;
