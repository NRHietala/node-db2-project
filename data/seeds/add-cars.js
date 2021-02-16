exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: 12345,
          make: "geo",
          model: "prizm",
          mileage: 12345,
          type_transmission: "automatic",
        },
        {
          vin: 67891,
          make: "toyota",
          model: "camry",
          mileage: 12345,
          type_transmission: "automatic",
        },
        {
          vin: 13579,
          make: "crosstrek",
          model: "subaru",
          mileage: 12345,
          type_transmission: "automatic",
        },
      ]);
    });
};
