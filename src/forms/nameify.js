export const nameify = (s) => {
  let words = s.split(" ");
  let fieldname = words.map((word) => {
    if (typeof word !== "string") return word;
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  });
  fieldname[0] = fieldname[0].toLowerCase();
  return fieldname.join("");
};
