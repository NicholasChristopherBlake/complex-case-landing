import MoySkladLogo from "../../../public/icons/moysklad-logo.svg";
import MoySkladCircles from "../../../public/backgrounds/moysklad-circles.svg";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import ArrowTopRightBlack from "../../../public/icons/arrow-up-right-black.svg";

import { Button } from "../shared/Button";
import Link from "next/link";

export const MoySkladEquipment = () => {
  return (
    <section
      id="moy-sklad-equipment"
      className="relative mb-[24px] flex gap-[24px]"
    >
      <div className="relative bg-primary-black rounded-[20px] text-primary-white">
        <div className="flex gap-[10px] mb-[20px]">
          <MoySkladLogo />
          <h2>МойСклад</h2>
        </div>
        <div>
          <p className=" text-p3 mb-[15px]">
            Автоматизируйте рутинные задачи с помощью учетной системы МойСклад,
            освободив время для более важных дел
          </p>
          <p className=" text-p3">
            Все что нужно — в одной системе: продажи, закупки, склад, финансы,
            клиенты и поставщики
          </p>
        </div>
        <MoySkladCircles className="absolute bottom-[80px] left-[20px]" />
        <Button variant="round" className="absolute bottom-[20px] right-[20px]">
          <ArrowTopRightBlack className="text-accent3" />
        </Button>
      </div>
      <div className="bg-accent1 rounded-[20px] text-primary-black">
        <div>
          <h2>Торговое оборудование</h2>
          <p className=" text-p3">
            ComplexShop — магазин торгового оборудования в Кирове
          </p>
        </div>
        <ul className=" grid grid-rows-5 grid-flow-col gap-x-[40px] gap-y-[20px]">
          <li className=" flex items-center">
            <div className="bg-accent2 w-[10px] h-[10px] rounded-full inline-block" />
            <p>POS-СИСТЕМЫ</p>
          </li>
          <li>
            <p>ДЕНЕЖНЫЕ ЯЩИКИ</p>
          </li>
          <li>
            <p>КАССЫ ККТ</p>
          </li>
          <li>
            <p>ПРИНТЕРЫ ЭТИКЕТОВ, ЧЕКОВ</p>
          </li>
          <li>
            <p>СКАНЕРЫ ШТРИХ-КОДОВ</p>
          </li>
          <li>
            <p>ТЕРМИНАЛЫ СБОРА ДАННЫХ</p>
          </li>
          <li>
            <p>ДИСПЛЕЙ ДЛЯ ПОКУПАТЕЛЯ</p>
          </li>
          <li>
            <p>КЛЮЧИ АКТИВАЦИИ ОФД</p>
          </li>
          <li>
            <p>ЧЕКОВАЯ ЛЕНТА / ТЕРМОЛЕНТА</p>
          </li>
          <li>
            <p>ФИСКАЛЬНЫЕ НАКОПИТЕЛИ</p>
          </li>
        </ul>
        <Link href={"/"}>
          <Button
            variant="accent"
            accentColor="purple"
            addRight={<ArrowRight />}
          >
            Приобрести
          </Button>
        </Link>
      </div>
    </section>
  );
};
