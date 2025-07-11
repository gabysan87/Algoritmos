const user = {
  name: "Manz",
  role: "streamer",
  life: 99,
  features: ["learn", "code", "paint"],
};

const fullUser = {
  ...structuredClone(user),
  power: 25,
  life: 50,
};

// user.features[0] = "program"
fullUser.features[0] = "program";

console.log(user.features);
console.log(fullUser.features);
console.log(fullUser);
console.log(user);
