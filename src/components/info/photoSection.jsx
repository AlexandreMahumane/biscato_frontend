import photo2 from "../../../public/photo2.jpg";
import photo3 from "../../../public/photo3.jpg";
import photo4 from "../../../public/photo4.jpg";

export const PhotoSection = () => {
  return (
    <div className="flex sm:flex-col sm:w-full sm:space-y-5 space-x-5 justify-center">
      <div>
        <img src={photo2} alt="" />
      </div>
      <div>
        <img src={photo3} alt="" />
      </div>
      <div>
        <img src={photo4} alt="" />
      </div>
    </div>
  );
};
