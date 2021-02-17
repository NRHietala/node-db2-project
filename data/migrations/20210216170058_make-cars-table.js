exports.up = function (knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();

    table.integer("vin").notNullable().unique();

    table.string("make", 128).notNullable();

    table.string("model", 128).notNullable();

    table.integer("mileage").notNullable();

    table.string("type_transmission", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
