import React from "react";
import { Button } from "../../components";

const SingleProductDesc = () => {
  return (
    <div>
      <h3 className="text-center font-bold text-[20px] mb-4">ПЛАНИРОВКА</h3>
      <div className="flex flex-col gap-1 mb-12">
        <p className="mb-4">
          Уютный 1-этажный барнхаус под ключ с площадью 67 м2, станет домом
          мечты для небольшой семьи.
        </p>
        <p className="mb-4"> В данном жилом строении мы гармонично устроили:</p>
        <p> кухню-гостинную с отдельной обеденной зоной;</p>
        <p> 2 спальные комнаты;</p>
        <p> совместный санузел;</p>
        <p className="mb-4">гардеробную.</p>
        <p>
          Данное решение предусмотрено как для круглогодичного проживания семьи,
          так и для дачного отдыха.
        </p>
      </div>
      <h3 className="text-[20px] text-center font-bold mb-4">
        КОНСТРУКТИВ ПРОЕКТА BARN MINI 50
      </h3>
      <div className="flex flex-col gap-1 mb-16">
        <p> Усиленный каркас объекта - обладает огнестойкостью.</p>
        <p>
          Качественный утеплитель - экологичные материалы, основа которых
          полиэфирное волокно.
        </p>
        <p>
          Энергоэффективный стеклопакет - 2-камерные окна с высокой
          герметичностью.
        </p>
        <p>
          свайно-винтовой фундамент - лучшее решение, если брать в расчёт
          несущую способность строения.
        </p>
      </div>
      <div className="text-center mb-10">
        <h2 className="font-bold text-[28px]"> ПОНРАВИЛСЯ ЭТОТ ДОМ?</h2>
        <p>
          Закажите его презентацию и мы ответим на все интересующие вас вопросыf
        </p>
      </div>
      <Button className="py-1 px-20 mb-16 border block mx-auto border-[rgb(2,_136,_209)] text-[rgb(2,_136,_209)]">
        E-mail us
      </Button>
    </div>
  );
};

export default SingleProductDesc;
