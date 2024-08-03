/* eslint-disable @typescript-eslint/no-explicit-any */
import { lazy, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
const Avatar = lazy(() => import('../AvatarC/Avatar'));

const member = [1, 2, 3, 4, 5, 6, 7, 8, 9, 99];

interface CyrcleTimeLineProps<T> {
  innerCyrcleClasss?: string;
  avatarComponent?: React.ComponentType<{ item: T }>;
  avatarContainerClasss?: string;
  arrayData?: T[] | any[];
  rotate?: boolean;
  duration?: number;
  relativeContainerClasss?: string;
}

export default function CyrcleTimeLine<T>({
  innerCyrcleClasss = "",
  avatarComponent = Avatar,
  avatarContainerClasss = "",
  arrayData = member as T[],
  rotate = true,
  duration = 10000,
  relativeContainerClasss = "",
}: CyrcleTimeLineProps<T>) {
  const memberCount = arrayData.length;
  const AvatarComponentItem = avatarComponent;
  const avatarParentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const avatarContainerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (rotate) {
      const interval = setInterval(() => {
        avatarParentRefs.current.forEach((avatar) => {
          if (avatar) {
            const currentRotation = parseFloat(avatar.style.transform.replace(/[^-?\d.]/g, "")) || 0;
            avatar.style.transform = `rotate(${currentRotation + (360 / (duration / 16))}deg)`;
          }
        });

        avatarContainerRefs.current.forEach((avatar) => {
          if (avatar) {
            const currentRotation = parseFloat(avatar.style.transform.replace(/[^-?\d.]/g, "")) || 0;
            avatar.style.transform = `rotate(${currentRotation - (360 / (duration / 16))}deg)`;
          }
        });
      }, 16);

      return () => clearInterval(interval);
    }
  }, [rotate, duration, arrayData?.length]);

  return (
    <div className="container">
      <div className={twMerge(`relative-container`, relativeContainerClasss)}>
        <div className={twMerge(`inner-circle`, innerCyrcleClasss)}>
          {arrayData?.map((item, index) => {
            const avatarParentRotate = (360 / memberCount) * index;
            const avatarRotate = avatarParentRotate >= 20 ? -avatarParentRotate : 0;

            return (
              <div
                key={index}
                ref={(el) => (avatarParentRefs.current[index] = el)}
                className="avatar-parent"
                style={{ transform: `rotate(${avatarParentRotate}deg)` }}>
                <div
                  ref={(el) => (avatarContainerRefs.current[index] = el)}
                  className={twMerge(`avatar-container`, avatarContainerClasss)}
                  style={{ transform: `rotate(${avatarRotate}deg)` }}
                >
                  <AvatarComponentItem item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
