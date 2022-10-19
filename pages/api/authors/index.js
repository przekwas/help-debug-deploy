import data from "./data";

export default function Handler(req, res) {
  const { Authors } = data;

  if (Authors) {
    return res.status(200).json(Authors);
  }

  return res.status(404).json({ error: "data not found" });
}
