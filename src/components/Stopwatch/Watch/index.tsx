import style from "./Watch.module.scss";

type Props = {
  time?: number | undefined;
};

export default function Watch({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteFirst, minuteSecond] = String(minutes)
    .padStart(2, "0")
    .split("");
  const [secondFirst, secondSecond] = String(seconds)
    .padStart(2, "0")
    .split("");

  return (
    <>
      <span className={style.clockNumber}>{minuteFirst}</span>
      <span className={style.clockNumber}>{minuteSecond}</span>
      <span className={style.clockSeparator}>:</span>
      <span className={style.clockNumber}>{secondFirst}</span>
      <span className={style.clockNumber}>{secondSecond}</span>
    </>
  );
}
