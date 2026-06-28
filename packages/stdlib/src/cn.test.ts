import assert from "node:assert/strict";
import { test } from "node:test";
import { cn } from "./cn.ts";

test("joins class names", () => {
  assert.equal(cn("a", "b"), "a b");
});

test("resolves conflicting tailwind utilities, last wins", () => {
  assert.equal(cn("px-2", "px-4"), "px-4");
});

test("drops falsy values and supports conditionals", () => {
  assert.equal(cn("a", false, null, undefined, "c"), "a c");
});
