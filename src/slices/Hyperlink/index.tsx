import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Hyperlink`.
 */
export type HyperlinkProps = SliceComponentProps<Content.HyperlinkSlice>;

/**
 * Component for "Hyperlink" Slices.
 */
const Hyperlink = ({ slice }: HyperlinkProps): JSX.Element => {
  return (
    <PrismicNextLink field={slice.primary.hyperlink}>Click to view project</PrismicNextLink>
  );
};

export default Hyperlink;
