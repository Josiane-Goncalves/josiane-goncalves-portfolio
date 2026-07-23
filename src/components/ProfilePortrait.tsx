export function ProfilePortrait() {
  return (
    <div
      className="
        relative
        aspect-[4/3]
        w-full
        min-w-0
        overflow-hidden
        border-2 border-[#6f735d]
        bg-[#0a0d0a]

        max-[1350px]:aspect-5/4
        max-[1180px]:aspect-4/3
        max-[560px]:aspect-square
      "
    >
      <div className="portrait-bg-pulse absolute inset-0 z-0" />

      <div className="portrait-fog absolute inset-0 z-10" />

      <img
        src="/images/gamerImage.png"
        alt="Pixel art portrait of Cairon Henrique"
        className="
          absolute inset-0 z-20
          h-full w-full
          object-cover
          object-[center_20%]
          [image-rendering:pixelated]

          max-[1350px]:object-[center_18%]
          max-[560px]:object-[center_15%]
        "
        draggable={false}
      />

      <div className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(180deg,rgba(116,145,67,.06),rgba(4,12,6,.22))] mix-blend-color" />

      <div className="pointer-events-none absolute inset-0 z-40 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_3px,rgba(0,0,0,.22)_4px,rgba(0,0,0,.32)_5px)] opacity-80" />

      <div className="portrait-scan pointer-events-none absolute inset-x-0 z-50 h-16" />

      <div className="pointer-events-none absolute inset-0 z-60 shadow-[inset_0_0_80px_rgba(0,0,0,.85)]" />

      <div className="portrait-noise pointer-events-none absolute inset-0 z-70 opacity-[0.07]" />

      <div className="pointer-events-none absolute inset-1 z-80 border border-[rgba(170,190,110,.12)]" />
    </div>
  );
}
