import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" title="Página Inicial">
      <Image src="/logo.svg" alt='Logo do site' width={116} height={32} />
    </Link>
  )
}