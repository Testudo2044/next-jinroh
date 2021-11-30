import React from 'react';
import Link from 'next/link'




const HeaderFunction: React.FC = () =>
  <div className="">
    <div className="smartStyle">

    </div>

    <div className="PCStyle hidden lg:block">
      <div className="bg-black ">
        <ul className="text-2xl text-white flex">
          <li className="lg:hover:text-3xl"><a href=""><ruby><rb>ABOUT</rb><rt>UN人狼とは</rt></ruby></a></li>
          <li className="lg:hover:text-3xl"><a href=""><ruby><rb>RULE</rb><rt>ゲームルール</rt></ruby></a></li>
          <li className="lg:hover:text-3xl"><a className=" " href=""><ruby><rb>SET</rb><rt>販売</rt></ruby></a></li>
          <li className="lg:hover:text-3xl"><a href=""><ruby><rb>CHARACTER</rb><rt>役職紹介</rt></ruby></a></li>
          <li className="lg:hover:text-3xl"><a href=""><ruby><rb>MEMBER</rb><rt>メンバー</rt></ruby></a></li>
          <li className="lg:hover:text-3xl"><a href=""><ruby><rb>COMTACT</rb><rt>お問い合わせ</rt></ruby></a></li>
        </ul>
      </div>
    </div>
  </div>;

const MainFunction: React.FC = () =>
  <div>

  </div>;

const FooterFunction: React.FC = () =>
  <div>

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
