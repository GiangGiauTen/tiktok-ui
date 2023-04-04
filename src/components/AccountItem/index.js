import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AccountItem.module.scss";
import classNames from "classnames/bind";
import { faCircle, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx("wrap")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f90cc529e5bacc99b1459a81ab73ca87~c5_300x300.webp?x-expires=1680674400&x-signature=b1F3MitO4NS9qXcJ8qZaa74Y9Mo%3D"
        alt=""
      />
      <div className={cx("info")}>
        <h4 className={cx("username")}>
          <span>DatVilla</span>
          <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />
        </h4>
        <span className={cx("name")}>Gia Dinh Dat Villa</span>
      </div>
    </div>
  );
}

export default AccountItem;
