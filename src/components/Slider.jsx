import lp1 from "../assets/lp1.png";
import lp2 from "../assets/lp2.png";
import lp3 from "../assets/lp3.png";
import lp4 from "../assets/lp4.png";

export const Slider = () => {
  return (
    <section>
      <article className="flex flex-col items-center">
        <div className="m-4">
          <ul className="flex space-x-4 mb-8">
            <li>
              <img src={lp1} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp2} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp3} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp4} alt="" className="rounded-lg shadow-md" />
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <img src={lp1} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp2} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp3} alt="" className="rounded-lg shadow-md" />
            </li>
            <li>
              <img src={lp4} alt="" className="rounded-lg shadow-md" />
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};
