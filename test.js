var test = require("tape")

require("./")

test("alias consoles defined", function (t) {
  t.plan(4)

  t.equal(consle, console)
  t.equal(cosnole, console)
  t.equal(consloe, console)
  t.equal(consoe, console)
})