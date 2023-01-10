import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-200 dark:bg-slate-900">
      <div className="container mx-auto pt-10 pb-5">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-6 px-2">
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">Categories</h2>
            <ul className="text-gray-500">
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">Links</h2>
            <ul className="text-gray-500">
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
              <li>
                <Link to="/">Link Test</Link>
              </li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">About</h2>
            <p className="text-justify text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
              sapiente deserunt mollitia quas officia quod repellat quis, ad non
              dolores suscipit officiis delectus culpa ipsam et quisquam
              voluptatibus. Maiores, repudiandae.
            </p>
          </section>
          <section>
            <h2 className="text-xl text-gray-700 dark:text-gray-400">Contact</h2>
            <p className="text-justify text-gray-500">
            All game content and assets are trademarks and copyrights of SUPERCREATIVE Corp and/or Smilegate Megaport.
            </p>
            <p className="text-justify text-gray-500">
            This site is fan made, not affiliated with SUPERCREATIVE Corp and/or Smilegate Megaport.
            </p>

          </section>
        </div>
        <div className="flex justify-between mt-10">
          <span>EPIC7INDEX</span>
          <span>2023</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
