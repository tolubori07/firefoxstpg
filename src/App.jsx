import { useState, useEffect } from "react";

export default function Homepage() {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true",
    )
      .then((res) => res.json())
      .then((data) => {
        setTemperature(data.current_weather.temperature);
        setFeelsLike(data.current_weather.apparent_temperature);
      });
  }, []);

  return (
    <div className="h-screen bg-[#90a4ae] text-black p-10 font-mono">
      <div className="max-w-3xl mx-auto text-center border-4 border-black p-6 bg-[#cfd8dc] shadow-lg">
        <h1 className="text-5xl font-bold">HELLO JAABIR</h1>
        <p className="text-lg mt-2">Today is {time.toLocaleDateString()}</p>
        <h2 className="text-4xl font-bold mt-4">{time.toLocaleTimeString()}</h2>
        <p className="mt-4">
          Temperature: {temperature ?? "-"}°C | Feels Like: {feelsLike ?? "-"}°C
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 text-center">
        {sections.map(({ title, links }) => (
          <div
            key={title}
            className="border-4 border-black p-4 bg-white shadow-md"
          >
            <h3 className="text-xl font-bold">{title}</h3>
            <ul className="mt-2 space-y-1">
              {links.map(({ name, url, emoji }) => (
                <li key={name}>
                  <a href={url} className="hover:underline text-lg">
                    {emoji} {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Code and Docs",
    links: [
      { name: "Github", url: "https://github.com", emoji: "🐱" },
      { name: "DailyDev", url: "https://daily.dev", emoji: "💻" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com", emoji: "🎨" },
      { name: "Bun", url: "https://bun.sh", emoji: "🍞" },
      { name: "Rust", url: "https://www.rust-lang.org", emoji: "🦀" },
    ],
  },
  {
    title: "School Links",
    links: [
      { name: "Satchel One", url: "https://www.satchelone.com", emoji: "📘" },
      { name: "PHT", url: "#", emoji: "📖" },
      { name: "AnkiWeb", url: "https://ankiweb.net", emoji: "❓" },
      { name: "A-Level Computing", url: "#", emoji: "💾" },
      { name: "Revisely", url: "#", emoji: "📚" },
    ],
  },
  {
    title: "Reading",
    links: [
      { name: "Z-Library", url: "https://z-lib.is", emoji: "📚" },
      { name: "HyperMedia Systems", url: "#", emoji: "🖥️" },
      { name: "Libgenesis", url: "https://libgen.is", emoji: "📕" },
    ],
  },
  {
    title: "Misc",
    links: [
      { name: "Gmail", url: "https://mail.google.com", emoji: "📧" },
      { name: "YouTube", url: "https://youtube.com", emoji: "📺" },
      { name: "Reddit", url: "https://reddit.com", emoji: "👾" },
    ],
  },
];
