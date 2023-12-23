/* eslint-disable prettier/prettier */
import _dashboard from "../assets/sidebar/_1.svg";
import _products from "../assets/sidebar/_2.svg";
import _profile from "../assets/sidebar/_3.svg";
import _comments from "../assets/sidebar/_4.svg";
import _settings from "../assets/sidebar/_5.svg";
import dashboard from "../assets/sidebar/1.svg";
import products from "../assets/sidebar/2.svg";
import profile from "../assets/sidebar/3.svg";
import comments from "../assets/sidebar/4.svg";
import settings from "../assets/sidebar/5.svg";
import dashboard1 from "../assets/sidebar/11.svg";
import products1 from "../assets/sidebar/12.svg";
import profile1 from "../assets/sidebar/13.svg";
import comments1 from "../assets/sidebar/14.svg";
import settings1 from "../assets/sidebar/15.svg";

export const sidebar = [
  {
    id: 1,
    _icon: _dashboard,
    icon: dashboard,
    icon1: dashboard1,
    Uz: "Dashboard",
    Уз: "Дашбоардь",
    path: "/",
  },
  {
    id: 2,
    _icon: _products,
    icon: products,
    icon1: products1,
    Uz: "Mahsulotlar",
    Уз: "Продукты",
    path: "/products",
  },
  {
    id: 3,
    _icon: _profile,
    icon: profile,
    icon1: profile1,
    Uz: "Profil",
    Уз: "Профиль",
    path: "/profile",
  },
  {
    id: 4,
    _icon: _comments,
    icon: comments,
    icon1: comments1,
    Uz: "Userlar",
    Уз: "Комментарии",
    path: "/users",
  },
  {
    id: 5,
    _icon: _settings,
    icon: settings,
    icon1: settings1,
    Uz: "Kategoriyalar",
    Уз: "Настройки",
    path: "/categories",
  },
];
