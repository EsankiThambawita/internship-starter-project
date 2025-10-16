import Main from "./variants/default";

/**
 * Props for `HeroSlice`.
 */

/**
 * Component for "HeroSlice" Slices.
 */
const HeroSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <Main slice={slice} />}
    </section>
  );
};

export default HeroSlice;
