import { assertEquals } from "https://deno.land/std@0.193.0/testing/asserts.ts";
import { toRoman, fromRoman } from "./main.js";


Deno.test("toRoman Tests", () => {
    assertEquals(toRoman(1), "I");
    assertEquals(toRoman(4), "IV");
    assertEquals(toRoman(9), "IX");
    assertEquals(toRoman(58), "LVIII");
    assertEquals(toRoman(3999), "MMMCMXCIX");
});

Deno.test("fromRoman Tests", () => {
    assertEquals(fromRoman("I"), 1);
    assertEquals(fromRoman("IV"), 4);
    assertEquals(fromRoman("IX"), 9);
    assertEquals(fromRoman("LVIII"), 58);
    assertEquals(fromRoman("MMMCMXCIX"), 3999);
});