exports.up = function (knex) {
  // make the cars table
  return knex.schema.createTable("cars", table => {
    table.increments("car_id");

    // add not null "vin" (integer)
    table.integer("vin").notNullable().unique();

    // add not null "make" (string)
    table.string("make", 128).notNullable();

    // add not null "model" (string)
    table.string("model", 128).notNullable();

    // add not null "milage" (integer)
    table.integer("mileage").notNullable();

    // add optional transmission type (string)
    table.string("type_transmission", 128);
  });
};

exports.down = function (knex) {
  // destroy the cars table
  return knex.schema.dropTableIfExists("cars");
};
