import data from "./data";

export default function Handler(req, res) {
  const { authorId } = req.query;
  const { Authors } = data;

  if (authorId) {
    const author = Authors.find((value) => value.id == authorId);
    return res.status(200).json(author);
  }

  return res.status(404).json({ error: "data not found" });
}
