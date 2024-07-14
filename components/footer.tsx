import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { BiPaperPlane } from "react-icons/bi";

import LogoDark from "../public/image.png";

import FooterSocial from "./footerSocialLogos";

const Footer = () => {
  return (
    <footer className="w-full relative h-fit">
      <section className="absolute left-0 bottom-0 border-0 lg:border-t w-full px-10 sm:px-20 py-8 text-black">
        <section className="grid grid-cols-2 lg:grid-cols-3 items-center pb-5 w-full">
          <div>
            <Link href="#" rel="preconnect">
              <Image
                alt="Logo"
                className="w-10 xs:w-14"
                height={0}
                priority={true}
                src={LogoDark}
              />
            </Link>
          </div>
          <div className="lg:col-span-2 lg:grid lg:grid-cols-2">
            <div className="lg:flex lg:gap-4 lg:justify-center text-sm text-right lg:text-center pb-2 lg:pb-0">
              <Link href="#">
                <p>Terms & Conditions</p>
              </Link>
              <Link href="# ">
                <p>Privacy Policy</p>
              </Link>
            </div>
            <div className="gap-4 flex justify-end">
              <Link href="#">
                <FooterSocial logo={FaXTwitter} />
              </Link>
              <Link href="#">
                <FooterSocial logo={BiPaperPlane} />
              </Link>
            </div>
          </div>
        </section>
        <hr className="text-black bg-black border-black" />
        <section className="text-center pt-5 text-xs lg:text-zinc-700 text-black">
          $SCAT ©2024 All Rights Reserved
        </section>
      </section>
    </footer>
  );
};

export default Footer;
