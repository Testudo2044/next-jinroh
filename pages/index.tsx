import React from 'react';
import Link from 'next/link'




const HeaderFunction: React.FC = () =>
  <div className="">
    <div className="smartStyle">

    </div>

    <div className="PCStyle hidden lg:block">
      <div className="bg-black ">
        <ul className="text-2xl text-white flex">
          <li className="lg:hover:text-3xl">
            <Link href="/">
              <a><ruby>ABOUT<rt>UN人狼とは</rt></ruby></a>
            </Link>
          </li>
          <li className="lg:hover:text-3xl">
            <Link href="/">
            <a><ruby>RULE<rt>ゲームルール</rt></ruby></a>
          </Link>
          </li>
          <li className="lg:hover:text-3xl">
            <Link href="/">
              <a><ruby>SET<rt>販売</rt></ruby></a>
            </Link>
          </li>
          <li className="lg:hover:text-3xl">
            <Link href="/">
              <a><ruby>CHARACTER<rt>役職紹介</rt></ruby></a>
            </Link>
          </li>
          <li className="lg:hover:text-3xl">
            <Link href="/">
              <a><ruby>MEMBER<rt>メンバー</rt></ruby></a>
            </Link>
          </li>
          <li className="lg:hover:text-3xl">
            <Link href="/">
              <a><ruby>COMTACT<rt>お問い合わせ</rt></ruby></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>;

const MainFunction: React.FC = () =>
  <div>

  </div>;

const FooterFunction: React.FC = () =>
  <div>
    <h1>hogehoge</h1>
  </div>;


export default function Index() {
  return (
    <div>
      <HeaderFunction />
      <MainFunction />
      <FooterFunction />
    </div>
  );
}
