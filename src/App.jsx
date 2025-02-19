import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());
  const [timeMode, setTimeMode] = useState("am");
  const hour = time.getUTCHours();
  const minutes = time.getUTCMinutes();
  const seconds = time.getUTCSeconds();
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [weather, setWeather] = useState("");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    if (hour >= 12) {
      setTimeMode("pm");
    } else {
      setTimeMode("am");
    }
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
        setWeather(data.weather[0].main);
      });
  }, []);

  return (
    <div className="bg-bg h-screen p-10">
      <div className="h-[75%]">
        <img src="/lake.jpg" className="h-full w-full rounded-3xl" />
      </div>
      <div>
        <div className="text-text p-8 font-body flex gap-24">
          <div>
            <p className="text-8xl mt-2 font-body flex items-center">
              {hour > 12 ? hour - 12 : hour}
              <span className="font-display ml-5">:</span>
              {minutes < 10 ? "0" + minutes : minutes}
              <div className="ml-5 inline-flex flex-col text-4xl">
                <div>{seconds < 10 ? "0" + seconds : seconds}</div>
                <div>{timeMode}</div>
              </div>
            </p>
          </div>

          <div className="text-4xl font-body mt-2">
            <div className="text-2xl">
              {time.getDate()}.{time.getMonth()}
            </div>
            <div className="">{days[time.getDay()]}</div>
          </div>

          <div className="text-4xl font-body mt-2">
            <div className="text-2xl">
              {temperature}
              <span className="font-sans">{"º"}</span>C
            </div>
            <div className="text-lg">feels like {feelsLike}</div>
            <div className="text-lg">{weather}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mt-4 ml-12 w-full justify-center">
            {sections.map(({ title, links }) => (
              <div key={title} className="w-full flex justify-center">
                <ul className="space-y-2 text-center">
                  {links.map(({ name, url }) => (
                    <li key={name}>
                      <a
                        href={url}
                        className="hover:underline  px-4 py-2 inline-block"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Code and Docs",
    links: [
      { name: "Github", url: "https://github.com", emoji: "🐱" },
      { name: "Tailwind", url: "https://tailwindcss.com", emoji: "🎨" },
      { name: "Bun", url: "https://bun.sh", emoji: "🍞" },
    ],
  },
  {
    title: "School Links",
    links: [
      { name: "Satchel", url: "https://www.satchelone.com", emoji: "📘" },
      { name: "PMT", url: "https://physicsandmathstutor.com", emoji: "📖" },
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
