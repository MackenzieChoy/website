/**
 * @file Card component
 * @interface {@link ICard}
 */
import { ICard } from './types';
import Image from 'next/image';
import Pill from '../Pill/Pill';
export default function Card(props: ICard) {
  const hasPicture = props.image;

  return (
    <div className="p-10">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {hasPicture ? (
          <Image
            src={props.image?.source}
            alt={props.image?.alt}
            width={props.image?.width}
            height={props.image?.height}
          />
        ) : null}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div className="font-bold text-xl mb-2">{`$${props.price}`}</div>

          <p className="text-gray-700 text-base">{props.description}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
          {props.tags?.map((tag) => {
            return <Pill text={tag} />;
          })}
        </div>
      </div>
    </div>
  );
}
