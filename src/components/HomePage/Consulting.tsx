import Link from "next/link";
import { Button } from "../shared/Button";

export const Consulting = () => {
  return (
    <section
      id="consulting"
      className=" bg-accent2 rounded-[20px] mb-[24px] flex flex-col items-center p-[40px]"
    >
      <h2 className="text-primary-white">Получить бесплатную консультацию</h2>
      <div className="flex gap-[24px]">
        <form className=" bg-primary-white rounded-[20px]">
          <div className="flex flex-col items-center">
            <p className="text-p1 font-semibold">Оставить заявку</p>
            <input
              placeholder="Имя"
              type="text"
              id="name"
              name="name"
              required
            />
            <input
              placeholder="Телефон"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <div>
              <input type="checkbox" name="consent" id="consent" />
              <label htmlFor="consent">
                Нажимая кнопку «Отправить», я даю согласие на обработку моих
                персональных данных, в соответствии с Федеральным законом от
                27.07.2006 года №152-ФЗ «О персональных данных», на условиях и
                для целей, определенных в Согласии на обработку персональных
                данных*
              </label>
            </div>
          </div>
          <Button variant="send" type="submit">
            Отправить
          </Button>
        </form>
        <div className=" border-accent1 border-[2px] rounded-[20px] text-primary-white p-[20px]">
          <p className="text-p1">Наши контакты</p>
          <div className="flex flex-col ">
            <ul>
              <li>
                <p>E-mail:</p>
                <p>manager@complexcase.ru</p>
              </li>
              <li>
                <p>Телефон:</p>
                <p>8 (499) 325-77-80</p>
              </li>
              <li>
                <p>Telegram:</p>
                <Link href="" aria-label="">
                  @complexcase
                </Link>
              </li>
              <li>
                <p>VK:</p>
                <Link href="" aria-label="">
                  @complexcase
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
