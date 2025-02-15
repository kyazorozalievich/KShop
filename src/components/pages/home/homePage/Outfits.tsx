"use client";
import scss from "./Outfits.module.scss";
import OutfitCard from "../../cards/OutfitCard";
import { useGetKShopQuery } from "@/redux/api/kshop";

const Outfits = () => {
  const { data } = useGetKShopQuery();

  return (
    <section className={scss.Outfits}>
      <div className="container">
        <div className={scss.outfitContent}>
          <h1>Outfits</h1>
          <div className={scss.outfitCards}>
            {data?.data.map((el) => (
              <OutfitCard el={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outfits;
