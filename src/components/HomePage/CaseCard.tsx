import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../shared/Button";
import ArrowRight from "../../../public/icons/arrow-right.svg";
import CarouselCardBottom from "../../../public/backgrounds/carousel-card-bottom.svg";
import CarouselCardTop from "../../../public/backgrounds/carousel-card-top.svg";

export interface CaseCardItem {
  case_name: string;
  logoHref?: string;
  company_name: string;
  text: string;
}

export const CaseCard = ({
  item,
  isActive,
}: {
  item: CaseCardItem;
  isActive: boolean;
}) => {
  const { case_name, text, company_name, logoHref } = item;

  const containerClases = clsx(isActive ? "" : "");
  return (
    <div
      className={clsx(
        "relative bg-primary-white rounded-[20px] px-[40px] pt-[40px] max-w-[384px]",
        isActive ? "pb-[60px]" : "pb-[40px]"
      )}
    >
      {isActive && (
        <CarouselCardTop className="absolute top-[20px] right-0 z-0" />
      )}
      <div className="relative z-10 mb-[60px]">
        <span className="text-p4 rounded-full bg-accent1 px-[20px] py-[12px]">
          {case_name}
        </span>
        {logoHref && (
          <Link href="">
            <Image width={62} height={54} src={logoHref} alt="Company logo" />
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-[20px] relative z-10 mb-[40px]">
        <p className="text-p1">{company_name}</p>
        <p className="text-p4">{text}</p>
      </div>
      {isActive ? (
        <Button
          variant="accent"
          className="bg-primary-white border-2 border-accent2 relative z-10"
          addRight={<ArrowRight />}
        >
          Подробнее
        </Button>
      ) : (
        <Button variant="accent" accentColor="purple" addRight={<ArrowRight />}>
          Подробнее
        </Button>
      )}
      {isActive && (
        <CarouselCardBottom className="absolute bottom-0 left-0 z-0 rounded-bl-[20px]" />
      )}
    </div>
  );
};
