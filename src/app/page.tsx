import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/shared/Button";
import Image from "next/image";
import ArrowRight from "../../public/icons/arrow-right.svg";
import ArrowUpRight from "../../public/icons/arrow-up-right.svg";

export default function Home() {
  return (
    <div className="max-w-screen-xl py-[60px] mx-auto">
      <section
        id="main-screen"
        className="px-[40px] py-[30px] rounded-t-[20px] bg-blue-gradient bg-cover text-primary-white mb-[24px]"
      >
        <Navbar />
        <div className="">
          <div className="flex justify-between align-center">
            <h1>
              Автоматизация
              <br />
              Эффективность
              <br />
              Результат
            </h1>
            <Image
              width={384}
              height={422}
              src="/images/home-page1.png"
              alt="Image of futuristic round objects"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 justify-between relative">
          <div className="relative bottom-[-30px] left-[-40px] bg-primary-white pt-[20px] pr-[20px] rounded-tr-[20px]">
            <div className="border-primary-black border-[2px] rounded-[20px] p-[40px]">
              <h2 className="text-primary-black mb-[30px]">Готовые решения</h2>
              <ul className=" text-bg-gray gap-[20px]">
                <li className="inline-block">
                  <p className="font-p4">
                    Снижение затрат на
                    <span className="font-p1 font-semibold ml-[15px]">
                      20-40%
                    </span>
                  </p>
                  <div className="h-[15px] rounded-full bg-accent1 w-full" />
                </li>
                <li className="inline-block">
                  <p className="font-p4">
                    Возврат инвестиций (ROI) от
                    <span className="font-p1 font-semibold ml-[15px]">
                      150%
                    </span>
                  </p>
                  <div className="h-[15px] rounded-full bg-accent2 w-full" />
                </li>
                <li className="inline-block">
                  <p className="font-p4">
                    Сокращение времени внедрения до
                    <span className="font-p1 font-semibold ml-[15px]">60%</span>
                  </p>
                  <div className="h-[15px] rounded-full bg-primary-black w-full" />
                </li>
              </ul>
              <Button
                variant="round"
                className="absolute top-[20px] right-[20px]"
              >
                <ArrowUpRight />
              </Button>
            </div>
          </div>
          <div className="px-[60px] col-start-2">
            <div className="mb-[40px] flex flex-col gap-[20px] ">
              <p>ComplexCase – ваш надежный партнер в автоматизации бизнеса</p>
              <p>
                Мы предлагаем комплексные решения, которые помогут вам достичь
                любых целей
              </p>
            </div>
            <Button
              variant="accent"
              accentColor="purple"
              addRight={<ArrowRight />}
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>
      <div className=" flex">
        <section
          id="bitrix24"
          className=" rounded-[20px] bg-accent2 text-primary-white"
        >
          <h2>Битрикс24</h2>
          <p>
            Помощь в подборе тарифа, внедрение, настройка и конечно же —
            интеграции
          </p>
          <Button
            variant="accent"
            accentColor="green"
            addRight={<ArrowRight />}
          >
            Узнать о внедрении
          </Button>
        </section>
        <section
          id="integration"
          className=" outline-1 outline-primary-black text-primary-black"
        >
          <h2 className="text-accent2">Интеграция</h2>
          <p>
            Автоматизированная система управления взаимоотношениями с
            заказчиками. Грамотно настроенная CRM-система сделает Ваш бизнес
            понятнее, доступнее и быстрее
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <Button variant="outlined" className="text-accent2 border-accent2">
              Telegram
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              Whatsapp
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              Instagram
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              Авито
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              СБИС
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              Битрикс24
            </Button>
            <Button variant="outlined" className="text-accent2 border-accent2">
              1С
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

