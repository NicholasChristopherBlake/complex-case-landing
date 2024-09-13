import Link from "next/link";
import Logo from "../../../public/icons/logo.svg";
import VkontakteLogo from "../../../public/icons/social/vkontakte.svg";
import WhatsappLogo from "../../../public/icons/social/whatsapp.svg";
import TelegramLogo from "../../../public/icons/social/telegram.svg";
import ViberLogo from "../../../public/icons/social/viber.svg";

export const Footer = () => {
  return (
    <footer className=" bg-footer-gray rounded-t-[20px]">
      <div className="max-w-screen-xl mx-auto w-full px-[30px]">
        <div className="flex justify-between gap-[40px]">
          <div className="flex items-center flex-col gap-[5px]">
            <Link href="/" aria-label="Главная">
              <Logo />
            </Link>
            <h6 className="text-accent1 font-[16px]">ComplexCase</h6>
          </div>
          <div className="flex flex-1 gap-[85px] justify-between">
            <nav>
              <ul className="grid grid-flow-col grid-rows-5 gap-y-[15px] gap-x-[20px]">
                <li>
                  <Link
                    href="/bitrix24"
                    aria-label="Битрикс 24"
                    className=" hover:underline"
                  >
                    Битрикс 24
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integration"
                    aria-label="Интеграция"
                    className=" hover:underline"
                  >
                    Интеграция
                  </Link>
                </li>

                <li>
                  <Link
                    href="/cases"
                    aria-label="Кейсы"
                    className=" hover:underline"
                  >
                    Кейсы
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chatbot"
                    aria-label="Чат-бот"
                    className=" hover:underline"
                  >
                    Чат-бот
                  </Link>
                </li>
                <li>
                  <Link
                    href="/neuralnet"
                    aria-label="Нейросеть"
                    className=" hover:underline"
                  >
                    Нейросеть
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    aria-label="Готовое решение"
                    className=" hover:underline"
                  >
                    Готовое решение
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reviews"
                    aria-label="Отзывы"
                    className=" hover:underline"
                  >
                    Отзывы
                  </Link>
                </li>
                <li>
                  <Link
                    href="/moysklad"
                    aria-label="МойСклад"
                    className=" hover:underline"
                  >
                    МойСклад
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service6"
                    aria-label="Торговое оборудование"
                    className=" hover:underline"
                  >
                    Торговое оборудование
                  </Link>
                </li>
              </ul>
            </nav>
            <div>
              <h6>Контакты</h6>
              <div>
                <p>manager@complexcase.ru</p>
                <p>8 (499) 325 -77-80</p>
              </div>
              <ul className="flex gap-[20px]">
                <li>
                  <Link href="" aria-label="" className="">
                    <VkontakteLogo />
                  </Link>
                </li>
                <li>
                  <Link href="" aria-label="" className="">
                    <WhatsappLogo />
                  </Link>
                </li>
                <li>
                  <Link href="" aria-label="" className="">
                    <TelegramLogo />
                  </Link>
                </li>
                <li>
                  <Link href="" aria-label="" className="">
                    <ViberLogo />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6>Адрес</h6>
              <p>
                Россия, Кировская обл., <br />
                г. Киров, ул. Чернышевского, 47, 54
              </p>
            </div>
          </div>
        </div>
        <p className="text-right">
          © 2024 ComplexCase | Все права защищены. | ИП Николаев Владислав
          Сергеевич | ИНН: 434567225187
        </p>
      </div>
    </footer>
  );
};
