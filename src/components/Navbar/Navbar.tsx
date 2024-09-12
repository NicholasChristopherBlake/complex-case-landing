"use client";

import Link from "next/link";
import Logo from "../../../public/icons/logo.svg";
import { Button } from "../shared/Button";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import { useState } from "react";
import { DropdownMenu } from "./DropdownMenu";

export const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="max-w-screen-xl mx-auto top-0 left-0 right-0 w-full flex items-center justify-between bg-transparent z-50">
      <div className="flex items-center">
        <Link href="/" aria-label="Главная">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center gap-10 list-none text-primary-white">
          <li>
            <Link href="/cases" aria-label="Кейсы">
              Кейсы
            </Link>
          </li>
          <li className="relative">
            <Button
              className="font-normal"
              variant="text"
              aria-label="Услуги"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Услуги
            </Button>
            {isDropdownOpen && <DropdownMenu />}
          </li>
          <li>
            <Link href="/reviews" aria-label="Отзывы">
              Отзывы
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/" aria-label="Оставить заявку">
          <Button variant="outlined" addRight={<ArrowRight />}>
            Оставить заявку
          </Button>
        </Link>
      </div>
    </header>
  );
};
