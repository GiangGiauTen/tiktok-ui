import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import { Wrapper as PoperWrapper } from "~/components/Poper";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrap")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
        </div>
        <Tippy
          interactive
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PoperWrapper>
                <h4>Account</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PoperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input placeholder="Search" />
            <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon classNames={cx("loading")} icon={faSpinner} />

            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx("action")}></div>
      </div>
    </header>
  );
}

export default Header;
