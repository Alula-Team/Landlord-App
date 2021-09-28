export const collectIdsAndData = (doc) => ({ id: doc.id, ...doc.data() });

export const makeDate = (dateObj) => {
  const zeeDate = new Date(dateObj.seconds * 1000).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );
  return zeeDate;
};

export const getInitials = (name, glue) => {
  if (typeof glue == "undefined") {
    glue = true;
  }
  let initials = name.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
  if (glue) {
    return initials.join("");
  }
  return initials;
}

export const capitalize = (name) => {
  return name.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
}

// String.prototype.getInitials = function (glue) {
//   if (typeof glue == "undefined") {
//     var glue = true;
//   }
//   var initials = this.replace(/[^a-zA-Z- ]/g, "").match(/\b\w/g);
//   if (glue) {
//     return initials.join("");
//   }
//   return initials;
// };

// String.prototype.capitalize = function () {
//   return this.toLowerCase().replace(/\b\w/g, function (m) {
//     return m.toUpperCase();
//   });
// };

export const nameify = (s) => {
  let words = s.split(" ");
  let fieldname = words.map((word) => {
    if (typeof word !== "string") return word;
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
  });
  fieldname[0] = fieldname[0].toLowerCase();
  return fieldname.join("");
};
