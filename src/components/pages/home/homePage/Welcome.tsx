"use client";
import scss from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className={scss.bg}>
        <div className="container">
          <div className={scss.content}>
            <div className={scss.texts}>
              <h1>KShop</h1>
              <p>
                Welcome to KShop — your perfect online store! Here you will find
                a wide range of products at great prices, as well as fast
                delivery and quality service. We are happy to offer you only the
                best products for your comfort and enjoyment. Happy shopping!
              </p>
              <ul>
                (<li>Вкус</li> 
                <li>Стиль</li>
                <li>Мода</li>
                <li>Образ</li>
                <li>Мечта</li>)
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
 