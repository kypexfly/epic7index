import { Link } from "react-router-dom";
import { ExternalLink } from "tabler-icons-react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-200 dark:bg-slate-900">
      <div className="container mx-auto pt-10 pb-5">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-6 px-2">
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">Links</h2>
            <ul className="text-gray-500">
              <li>
                <a href="https://zoopido.me/"><ExternalLink className="inline" size={16}/> Zoopido Guides</a>
              </li>
              <li>
                <a href="https://ceciliabot.github.io/"><ExternalLink className="inline" size={16}/> Camp Simulator</a>
              </li>
              <li>
                <a href="https://page.onstove.com/epicseven/global"><ExternalLink className="inline" size={16}/> STOVE E7</a>
              </li>
              <li>
                <a href="https://epic7x.com/"><ExternalLink className="inline" size={16}/> Epic7x</a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">
              Resources
            </h2>
            <ul className="text-gray-500">
              <li>
                <a href="https://docs.google.com/spreadsheets/d/1UMIduFBIVc9OAoI-BeQ-LjPeihcziqXEzXw8n58bEd0/edit#gid=1343788204">
                  <ExternalLink className="inline" size={16}/> Catalysts Farm Location
                </a>
              </li>
              <li>
                <a href="https://github.com/fribbels/Fribbels-Epic-7-Optimizer">
                  <ExternalLink className="inline" size={16}/> Fribbel's Optimizer
                </a>
              </li>
              <li>
                <a href="https://e7calc.xyz/">
                  <ExternalLink className="inline" size={16}/> Damage Calculator
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">About</h2>
            <p className="text-justify text-gray-500">
              Epic Seven is a mobile RPG for iOS and Android that features
              high-quality, anime-styled 2D graphics. Gameplay includes a gacha
              summoning system and turn-based combat with a wide array of
              collectible characters.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">
              Contact
            </h2>
            <p className="text-justify text-gray-500">
              All game content and assets are trademarks and copyrights of
              SUPERCREATIVE Corp and/or Smilegate Megaport.
            </p>
            <p className="text-justify text-gray-500">
              This site is fan made, not affiliated with SUPERCREATIVE Corp
              and/or Smilegate Megaport.
            </p>
          </section>
        </div>
        <div className="flex justify-between mt-10 px-2">
          <span>EPIC7INDEX</span>
          <span>2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
