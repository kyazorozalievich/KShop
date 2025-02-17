"use client";
import scss from "./Header.module.scss";
import logo from "../../assets/headerImg/logo.png";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { MdClear, MdFavorite } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiFunctionAddFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const router = useRouter();
  const [chpaterMenu, setChapterMenu] = useState(false);

  return (
    <section className={scss.Header}>
      <div className={scss.bg}></div>
      <div className="container">
        <div className={scss.content}>
          <Image
            src={logo}
            alt="logo"
            width={80}
            height={25}
            onClick={() => router.push("/")}
          />
          <div className={scss.pages}>
            <Link href="/">Home</Link>
            <Link href="/category">Category</Link>
            <Link href="/outfit">Outfit</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={scss.headerMenu}>
            <select>
              <option value="/">Home</option>
              <option value="/">Category</option>
              <option value="/">Outfit</option>
              <option value="/">Contact</option>
            </select>
            <div className={scss.chapterBurger}>
              <a onClick={() => setChapterMenu(true)}>
                <CgMenuRightAlt />
              </a>
              {chpaterMenu && (
                <div className={scss.menu}>
                  <Link
                    href="/content/search"
                    onClick={() => setChapterMenu(false)}
                  >
                    Search
                  </Link>
                  <Link
                    href="/content/basket"
                    onClick={() => setChapterMenu(false)}
                  >
                    Basket
                  </Link>
                  <Link
                    href="/content/favorite"
                    onClick={() => setChapterMenu(false)}
                  >
                    Favorite
                  </Link>
                  <Link href="/create" onClick={() => setChapterMenu(false)}>
                    Create
                  </Link>
                  <Link href="/auth" onClick={() => setChapterMenu(false)}>
                    Sign Up
                  </Link>
                  <h3 onClick={() => setChapterMenu(false)}>
                    Close <MdClear />
                  </h3>
                </div>
              )}
            </div>
          </div>
          <div className={scss.chapter}>
            <div className={scss.input}>
              <input type="text" placeholder="Search product..." />
              <a className={scss.search}>
                <IoSearch />
              </a>
            </div>
            <div className={scss.icons}>
              <a>
                <TiShoppingCart />
              </a>
              <a>
                <MdFavorite />
              </a>
              <a onClick={() => router.push("/create")}>
                <RiFunctionAddFill />
              </a>
            </div>
            <div className={scss.auth}>
              <h5>Sign Up</h5>
              <a>
                <FaRegUserCircle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
