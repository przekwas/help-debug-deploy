import data from "./data.json";

export default function Handler(req, res) {
  const { Trending } = data;

  if (Trending) {
    return res.status(200).json(Trending);
  }

  return res.status(404).json({ error: "data not found" });
}
