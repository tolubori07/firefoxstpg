import { useState, useEffect } from "react";

export default function Homepage() {
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [banner, setBanner] = useState("");
  const getBanner = () => {
    setBanner(asciiBanners[Math.floor(Math.random() * asciiBanners.length)]);
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    getBanner();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stoke-On-Trent&appid=c5b6cf05e8525851c86c0d72366bded7&units=metric",
    )
      .then((res) => res.json())
      .then((data) => {
        setTemperature(data.main.temp);
        setFeelsLike(data.main.feels_like);
      });
  }, []);

  return (
    <div className="h-screen bg-[#8998ee] text-black p-10 font-mono">
      <div className="max-w-3xl mx-auto text-center border-4 border-black p-6 bg-[#cfd8dc] shadow-lg">
        <pre className="text- font-bold ">{banner}</pre>
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
      { name: "PMT", url: "https://physicsandmathstutor.com", emoji: "📖" },
      { name: "AnkiWeb", url: "https://ankiweb.net", emoji: "❓" },
      {
        name: "A-Level Computing",
        url: "https://en.wikibooks.org/wiki/A-level_Computing/WJEC_(Eduqas)",
        emoji: "💾",
      },
      { name: "Revisely", url: "https://www.revisely.com/", emoji: "📚" },
    ],
  },
  {
    title: "Reading",
    links: [
      { name: "Z-Library", url: "https://z-lib.is", emoji: "📚" },
      {
        name: "HyperMedia Systems",
        url: "https://hypermedia.systems/book/contents/",
        emoji: "🖥️",
      },
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

const asciiBanners = [
  `
 █████       █████ █████ ███████████ ██████████
░░███       ░░███ ░░███ ░░███░░░░░░█░░███░░░░░█
 ░███        ░░███ ███   ░███   █ ░  ░███  █ ░ 
 ░███         ░░█████    ░███████    ░██████   
 ░███          ░░███     ░███░░░█    ░███░░█   
 ░███      █    ░███     ░███  ░     ░███ ░   █
 ███████████    █████    █████       ██████████
░░░░░░░░░░░    ░░░░░    ░░░░░       ░░░░░░░░░░
  `,

  `
   █████████     ███████   
  ███░░░░░███  ███░░░░░███ 
 ███     ░░░  ███     ░░███
░███         ░███      ░███
░███    █████░███      ░███
░░███  ░░███ ░░███     ███ 
 ░░█████████  ░░░███████░  
  ░░░░░░░░░     ░░░░░░░    
  `,
] 
