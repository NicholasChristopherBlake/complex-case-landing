import { Button } from "../shared/Button";
import ArrowUpRightWhite from "../../../public/icons/arrow-up-right-white.svg";
import ArrowUpRightBlack from "../../../public/icons/arrow-up-right-black.svg";
import Link from "next/link";
import { Carousel } from "./Carousel";
import { CaseCardItem } from "./CaseCard";

const items: CaseCardItem[] = [
  {
    case_name: "Сопровождение",
    company_name: "Sever Wear",
    text: "Перерегистрация ККТ с заменой ФН для компании «SEVER WEAR» — верхняя одежда и аксессуары",
  },
  {
    case_name: "Настройка",
    company_name: "Sever Wear",
    text: "Настройка рабочего места кассира, сканера штрихкодов, терминала эквайринга, учетной система 1С с нуля для магазина",
  },
  {
    case_name: "Дизайн лендинга",
    logoHref: "/icons/companies/customlab.svg",
    company_name: "CustomLab",
    text: "Дизайн и разработка сайта для лаборатории кастомизации «CustomLab», которая занимается профессиональной печатью на одежде",
  },
  {
    case_name: "Сопровождение",
    company_name: "Sever Wear",
    text: "Перерегистрация ККТ с заменой ФН для компании «SEVER WEAR» — верхняя одежда и аксессуары",
  },
  {
    case_name: "Сопровождение",
    company_name: "Sever Wear",
    text: "Перерегистрация ККТ с заменой ФН для компании «SEVER WEAR» — верхняя одежда и аксессуары",
  },
];

export const CasesReviews = () => {
  return (
    <section id="cases-reviews" className="bg-green-svg mb-[24px] p-[40px]">
      <div className="flex justify-between mb-[120px]">
        <div>
          <h2>Кейсы</h2>
          <div>
            <p>Упрощаем бизнес, увеличиваем эффективность</p>
            <p>
              Индивидуальный подход: подберем инструменты и стратегию, которые
              идеально подойдут именно вашему бизнесу
            </p>
            <Link href="/cases">
              <Button variant="round">
                <ArrowUpRightWhite className="text-accent2" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="border-2 border-primary-black rounded-[20px]">
          <h2 className="text-accent2">Отзывы</h2>
          <div className="flex gap-[60px]">
            <div>
              <h5 className="border-[10px] rounded-full border-accent2 p-[15px] w-[100px] h-[100px]">
                +50
              </h5>
              <p>клиентов</p>
            </div>
            <div>
              <h5 className="border-[10px] rounded-full border-accent1 p-[15px] w-[100px] h-[100px]">
                +25
              </h5>
              <p>проектов</p>
            </div>
            <div>
              <h5 className="border-[10px] rounded-full border-primary-black p-[15px] pl-[25px] w-[100px] h-[100px]">
                10
              </h5>
              <p>сотрудников</p>
            </div>
          </div>
          <Link href="/reviews">
            <Button variant="round">
              <ArrowUpRightBlack className="text-accent1" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="carousel">
        <Carousel items={items} />
      </div>
    </section>
  );
};
