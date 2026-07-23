export function ProfilePortrait() {
  return (
    <div className="relative h-61.25 overflow-hidden border-2 border-[#6f735d] bg-[#0a0d0a]">
      {/* brilho/base animado ao fundo */}
      <div className="portrait-bg-pulse absolute inset-0 z-0" />

      {/* névoa suave */}
      <div className="portrait-fog absolute inset-0 z-10" />

      {/* imagem pixelada */}
      <img
        src="/images/gamerImage.png"
        alt="Retrato de Cairon Henrique em pixel art"
        className="absolute inset-0 z-20 h-full w-full object-cover object-center [image-rendering:pixelated]"
        draggable={false}
      />

      {/* camada verde para integrar a foto ao terminal */}
      <div className="pointer-events-none absolute inset-0 z-30 bg-[linear-gradient(180deg,rgba(116,145,67,.06),rgba(4,12,6,.22))] mix-blend-color" />

      {/* scanlines fixas */}
      <div className="pointer-events-none absolute inset-0 z-40 bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0)_0px,rgba(0,0,0,0)_3px,rgba(0,0,0,.22)_4px,rgba(0,0,0,.32)_5px)] opacity-80" />

      {/* feixe de varredura */}
      <div className="portrait-scan pointer-events-none absolute inset-x-0 z-50 h-16" />

      {/* vinheta */}
      <div className="pointer-events-none absolute inset-0 z-60 shadow-[inset_0_0_80px_rgba(0,0,0,.85)]" />

      {/* ruído visual leve */}
      <div className="portrait-noise pointer-events-none absolute inset-0 z-70 opacity-[0.07]" />

      {/* brilho da borda interna */}
      <div className="pointer-events-none absolute inset-1 z-80 border border-[rgba(170,190,110,.12)]" />
    </div>
  );
}
