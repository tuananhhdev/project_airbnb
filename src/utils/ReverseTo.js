import ReverseToVietnamese from "./ReverseToVietnamese";

export default function ReverseTo(input) {
  const withoutDiacritics = ReverseToVietnamese(input);
  const lowercase = withoutDiacritics.toLowerCase();
  const slug = lowercase.replace(/\s+/g, "-");
  return slug;
}
