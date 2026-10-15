import Image, { type ImageProps } from "next/image";

// next/image só otimiza imagens locais ou do Supabase. Para qualquer outro
// endereço colado no painel, entrega a imagem sem otimizar em vez de quebrar.
export default function Foto(props: ImageProps) {
  const src = typeof props.src === "string" ? props.src : "";
  const otimizavel = !src || src.startsWith("/") || /^https:\/\/[^/]+\.supabase\.co\//.test(src);
  return <Image {...props} alt={props.alt} unoptimized={props.unoptimized ?? !otimizavel} />;
}
