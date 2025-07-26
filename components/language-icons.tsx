import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Attack on Titan",
    platform: "Amazon Prime",
    languages: ["Tamil"],
    description: "Handled dubbing for Tamil version of Attack on Titan.",
    image: "/Attack-on-Titan---Season-1---Official-Poster.webp",
  },
  {
    title: "Ghost in the Shell",
    platform: "Amazon Prime",
    languages: ["Tamil", "Telugu"],
    description: "Dubbing for Tamil and Telugu versions.",
    image: "/ghost in shell.webp",
  },
  {
    title: "Shangri-La Frontier",
    platform: "Amazon Prime",
    languages: ["Kannada"],
    description: "Kannada dubbing work for Shangri-La Frontier.",
    image: "/Shangri-La Frontier- .webp",
  },
  {
    title: "Multiple Shows",
    platform: "Kuku TV",
    languages: ["Tamil", "Telugu", "Malayalam", "Kannada"],
    description: "Managed multiple regional dubs for Kuku TV platform.",
    image: "/kuku tv.webp",
  },
];

export function scrollToProjects() {
  const section = document.getElementById("languages");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ProjectShowcase() {
  const [activeLanguage, setActiveLanguage] = useState("All");

  const filtered =
    activeLanguage === "All"
      ? projects
      : projects.filter((p) => p.languages.includes(activeLanguage));

  return (
    <div id="languages" className="p-4 max-w-5xl mx-auto scroll-smooth">
      <h1 className="text-4xl font-bold text-center mb-4">
        🎬 Precision. Emotion. Clarity. In Every Dub.
      </h1>
      <p className="text-center mb-8 text-muted-foreground">
        Worked on impactful titles for global platforms across 4+ languages.
      </p>

      {/* Language Filters */}
      <div className="flex justify-center gap-4 mb-10 overflow-x-auto">
        {["All", "Tamil", "Telugu", "Kannada", "Malayalam"].map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLanguage(lang)}
            className={`px-4 py-2 whitespace-nowrap rounded-full border transition-all duration-300 ${
              activeLanguage === lang
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>

      {/* Grid Layout Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((proj, index) => (
          <Dialog key={index}>
            <DialogTrigger>
              <Card className="shadow-md hover:shadow-xl transition-all max-w-[500px] mx-auto">
                <div className="h-[200px] w-full overflow-hidden rounded-t-xl">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <CardContent className="p-4 h-[120px] flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-center">
                      {proj.title}
                    </h3>
                    <p className="text-muted-foreground text-center text-sm">
                      {proj.platform}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-2 flex-wrap justify-center">
                    {proj.languages.map((lang) => (
                      <span
                        key={lang}
                        className="bg-gray-200 text-sm px-2 py-1 rounded-full"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>{proj.title}</DialogTitle>
              <p className="mt-2 mb-4">{proj.description}</p>
              <p className="text-muted-foreground text-sm">
                Platform: {proj.platform} <br />
                Languages: {proj.languages.join(", ")}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
