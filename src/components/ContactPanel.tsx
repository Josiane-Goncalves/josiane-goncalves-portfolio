import { Panel } from "./Panel";

const contacts = [
  {
    icon: "✉",
    label: "EMAIL",
    value: "caironhenrique60@gmail.com",
    href: "mailto:caironhenrique60@gmail.com",
  },
  {
    icon: "in",
    label: "LINKEDIN",
    value: "linkedin.com/in/caironhenrique",
    href: "https://www.linkedin.com/in/cairon-henrique-b88375224/",
  },
  {
    icon: "GH",
    label: "GITHUB",
    value: "github.com/cairon-henrique-60",
    href: "https://github.com/cairon-henrique-60",
  },
  { icon: "◎", label: "WEBSITE", value: "caironhenrique.dev", href: "#" },
];

export function ContactPanel() {
  return (
    <Panel title="CONTACT">
      <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
        {contacts.map(({ icon, label, value, href }) => (
          <a
            className="flex min-h-16 items-center gap-3.5 border-2 border-ridge border-[#383a33] bg-[#0c0e0c] p-3 no-underline transition duration-200 hover:-translate-y-0.5 hover:border-[#727c4c]"
            href={href}
            key={label}
            target="_blank"
            rel="noreferrer"
          >
            <span className="grid h-8 w-8 shrink-0 place-items-center border border-[#596044] text-sm text-terminal-green">
              {icon}
            </span>
            <div>
              <span className="block text-xs text-[#9eaf6e]">{label}</span>
              <strong className="break-all text-xs text-[#c3bca5]">
                {value}
              </strong>
            </div>
          </a>
        ))}
      </div>
    </Panel>
  );
}
