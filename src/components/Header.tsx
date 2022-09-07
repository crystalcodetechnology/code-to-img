/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
const Header = () => {
  return (
    <div className="w-full py-4 flex items-center px-4 gap-6">
      <div className="inline-flex gap-6 items-center">
        <Link href="/">
          <a className="flex gap-2 items-center">
            <img
              src="/icons/svg-icon.svg"
              alt="CodeToImg Logo"
              className="w-9 h-9"
            />
            <span className="font-bold text-xl text-white">CodeToImg</span>
          </a>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/legal/privacy-policy">
              <a className="text-sm">Privacy</a>
            </Link>
          </li>
          <li>
            <Link href="/legal/cookie-policy">
              <a className="text-sm">Cookie</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1"></div>
      <a
        href="https://github.com/rohid-dev/code-to-img"
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center hover:bg-white/10 active:bg-white/20 rounded-full"
      >
        <FaGithub className="text-2xl" />
      </a>
      <div className="md:flex items-center gap-2 hidden">
        <ByMeACoffeeButton />
        <ProductHuntBadge />
      </div>
    </div>
  );
};

export default Header;

const ByMeACoffeeButton = () => (
  <a href="https://www.buymeacoffee.com/rohid" target="_blank" rel="noreferrer">
    <img
      src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
      alt="Buy Me A Coffee"
      height="40px"
      width="140px"
    />
  </a>
);

export const ProductHuntBadge = () => (
  // <a
  //   href="https://www.producthunt.com/posts/code-to-image-converter?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code&#0045;to&#0045;image&#0045;converter"
  //   target="_blank"
  // >
  //   <img
  //     src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=346242&theme=dark"
  //     alt="Code&#0032;to&#0032;Image&#0032;Converter - Convert&#0032;your&#0032;code&#0032;snippets&#0032;to&#0032;beautiful&#0032;images | Product Hunt"
  //     className="h-12"
  //   />
  // </a>

  <a
    href="https://www.producthunt.com/posts/code-to-image-converter?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-code&#0045;to&#0045;image&#0045;converter"
    target="_blank"
    className="flex items-center"
    rel="noreferrer"
  >
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=346242&theme=light&period=daily"
      alt="Code&#0032;to&#0032;Image&#0032;Converter - Convert&#0032;your&#0032;code&#0032;snippets&#0032;to&#0032;beautiful&#0032;images | Product Hunt"
      height="40px"
      width="190px"
      className="object-contain"
    />
  </a>
);
