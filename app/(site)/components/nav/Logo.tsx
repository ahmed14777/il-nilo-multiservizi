import Image from "next/image";

/** Brand mark – supports icon-only or with wordmark if needed. */
export default function Logo({ withText = false }: { withText?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo-nav.png"
        alt="IL NILO logo"
        width={150}
        height={150}
        priority
      />
      {withText && (
        <span className="font-semibold tracking-tight">
          IL NILO <span className="text-primary">Multiservizi</span>
        </span>
      )}
    </div>
  );
}
