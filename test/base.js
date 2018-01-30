import test from "ava";
import People from "../people";

test("test", t => {
  t.deepEqual(People.length, 87);
});
