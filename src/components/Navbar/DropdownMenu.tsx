import Link from "next/link";

export const DropdownMenu = () => {
  return (
    <div className="absolute left-0 p-[40px] bg-primary-black text-primary-white shadow-lg rounded-lg">
      <div className="grid grid-flow-col grid-rows-3 gap-x-[60px] gap-y-[24px] w-max">
        <Link
          href="/bitrix24"
          aria-label="Битрикс 24"
          className=" hover:underline"
        >
          Битрикс 24
        </Link>
        <Link
          href="/integration"
          aria-label="Интеграция"
          className=" hover:underline"
        >
          Интеграция
        </Link>
        <Link href="/chatbot" aria-label="Чат-бот" className=" hover:underline">
          Чат-бот
        </Link>
        <Link
          href="/neuralnet"
          aria-label="Нейросеть"
          className=" hover:underline"
        >
          Нейросеть
        </Link>
        <Link
          href="/moysklad"
          aria-label="МойСклад"
          className=" hover:underline"
        >
          МойСклад
        </Link>
        <Link
          href="/service6"
          aria-label="Торговое оборудование"
          className=" hover:underline"
        >
          Торговое оборудование
        </Link>
      </div>
    </div>
  );
};
