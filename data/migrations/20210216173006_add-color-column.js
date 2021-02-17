exports.up = function (knex) {
  return knex.schema.table("cars", table => {
    table.text("color");
  });
};

exports.down = function (knex) {
  return knex.schema.table("cars", table => {
    table.dropColumn("color");
  });
};
