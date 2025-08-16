import { type SvgNameType } from "./svg-mapper";
import { svgMapper } from "./svg-mapper";

export default function SvgIcon({
  name,
  className,
}: {
  name: SvgNameType;
  className?: string;
}) {
  const Icon = svgMapper[name];
  return <Icon className={className} />;
}
