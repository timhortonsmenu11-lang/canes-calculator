"use client";

import {
  ArrowDownUp,
  Check,
  Info,
  Minus,
  Plus,
  Search,
  ShoppingBasket,
  X,
} from "lucide-react";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  allergenKey,
  categoryOrder,
  formatValue,
  type CategoryFilter,
  type NutritionItem,
  nutritionItems,
  nutritionVersion,
  toNumber,
} from "@/data/menu";

type Cart = Record<string, number>;
type SortKey = "name" | "calories" | "protein" | "sodium" | "sugar";

type Totals = {
  calories: number;
  protein: number;
  carbs: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  dietaryFiber: number;
  sugar: number;
};

const emptyTotals: Totals = {
  calories: 0,
  protein: 0,
  carbs: 0,
  totalFat: 0,
  saturatedFat: 0,
  transFat: 0,
  cholesterol: 0,
  sodium: 0,
  dietaryFiber: 0,
  sugar: 0,
};

const presets: { name: string; items: Cart }[] = [
  { name: "Box Combo", items: { "box-combo": 1 } },
  { name: "Light Meal", items: { "chicken-finger": 3, coleslaw: 1 } },
  {
    name: "Snack",
    items: { "chicken-finger": 2, "texas-toast": 1, "canes-sauce": 1 },
  },
];

const dailyValues = {
  totalFat: 78,
  saturatedFat: 20,
  cholesterol: 300,
  sodium: 2300,
  carbs: 275,
  dietaryFiber: 28,
};

const allergens = [
  ["Milk", "M"],
  ["Eggs", "E"],
  ["Fish", "F"],
  ["Wheat", "W"],
  ["Soy*", "S"],
  ["Nuts", "N"],
  ["Sesame", "SS"],
] as const;

function addNutrition(totals: Totals, item: NutritionItem, quantity: number) {
  return {
    calories: totals.calories + item.calories * quantity,
    protein: totals.protein + toNumber(item.protein) * quantity,
    carbs: totals.carbs + toNumber(item.carbs) * quantity,
    totalFat: totals.totalFat + toNumber(item.totalFat) * quantity,
    saturatedFat: totals.saturatedFat + toNumber(item.saturatedFat) * quantity,
    transFat: totals.transFat + toNumber(item.transFat) * quantity,
    cholesterol: totals.cholesterol + toNumber(item.cholesterol) * quantity,
    sodium: totals.sodium + toNumber(item.sodium) * quantity,
    dietaryFiber: totals.dietaryFiber + toNumber(item.dietaryFiber) * quantity,
    sugar: totals.sugar + toNumber(item.sugar) * quantity,
  };
}

function calculateTotals(cart: Cart) {
  return nutritionItems.reduce((totals, item) => {
    return addNutrition(totals, item, cart[item.id] ?? 0);
  }, emptyTotals);
}

function itemTotals(item: NutritionItem, quantity: number) {
  return addNutrition(emptyTotals, item, quantity);
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 1,
  }).format(value);
}

function dailyPercent(value: number, dailyValue: number) {
  return `${Math.round((value / dailyValue) * 100)}%`;
}

function barWidth(value: number, max: number) {
  if (!max) {
    return "0%";
  }

  return `${Math.min((value / max) * 100, 100)}%`;
}

function hasAllergen(item: NutritionItem, code: string) {
  const allergen = item.allergen.replace(/\s+/g, "").toUpperCase();

  if (code === "SS") {
    return allergen.includes("SS");
  }

  if (code === "S") {
    return allergen.replaceAll("SS", "").includes("S");
  }

  return allergen.includes(code);
}

function NutritionFactsModal({
  item,
  quantity,
  onClose,
  onQuantityChange,
  onAdd,
}: {
  item: NutritionItem;
  quantity: number;
  onClose: () => void;
  onQuantityChange: (quantity: number) => void;
  onAdd: () => void;
}) {
  const totals = itemTotals(item, quantity);
  const facts = [
    {
      label: "Total Fat",
      value: `${formatNumber(totals.totalFat)}g`,
      percent: dailyPercent(totals.totalFat, dailyValues.totalFat),
      strong: true,
    },
    {
      label: "Sat Fat",
      value: `${formatNumber(totals.saturatedFat)}g`,
      percent: dailyPercent(totals.saturatedFat, dailyValues.saturatedFat),
      inset: true,
    },
    {
      label: "Trans Fat",
      value: `${formatNumber(totals.transFat)}g`,
      inset: true,
      italic: true,
    },
    {
      label: "Cholesterol",
      value: `${formatNumber(totals.cholesterol)}mg`,
      percent: dailyPercent(totals.cholesterol, dailyValues.cholesterol),
      strong: true,
    },
    {
      label: "Sodium",
      value: `${formatNumber(totals.sodium)}mg`,
      percent: dailyPercent(totals.sodium, dailyValues.sodium),
      strong: true,
    },
    {
      label: "Carbs",
      value: `${formatNumber(totals.carbs)}g`,
      percent: dailyPercent(totals.carbs, dailyValues.carbs),
      strong: true,
    },
    {
      label: "Fiber",
      value: `${formatNumber(totals.dietaryFiber)}g`,
      percent: dailyPercent(totals.dietaryFiber, dailyValues.dietaryFiber),
      inset: true,
    },
    { label: "Sugar", value: `${formatNumber(totals.sugar)}g`, inset: true },
    { label: "Protein", value: `${formatNumber(totals.protein)}g`, strong: true },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-3 backdrop-blur-sm">
      <div className="max-h-[82vh] w-full max-w-[430px] overflow-y-auto border border-[#d8a51c] bg-white shadow-2xl">
        <div className="flex items-center justify-between bg-black px-3 py-1.5 text-white">
          <h2 className="truncate pr-3 text-xs font-black uppercase sm:text-sm">
            {item.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 shrink-0 items-center justify-center text-white/75 hover:bg-white/10 hover:text-white"
            aria-label="Close nutrition facts"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-2.5">
          <div className="border-2 border-black p-2.5 text-[#333333]">
            <h3 className="text-3xl font-black leading-none">
              Nutrition Facts
            </h3>
            <div className="mt-1.5 flex flex-wrap items-center gap-1.5 border-b-[6px] border-[#333333] pb-1.5 text-xs">
              <span>Serving Size</span>
              <div className="flex h-7 border-2 border-[#777777]">
                <button
                  type="button"
                  onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                  className="flex w-7 items-center justify-center bg-[#f6f1e3]"
                  aria-label="Decrease serving quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <input
                  value={quantity}
                  onChange={(event) =>
                    onQuantityChange(
                      Math.max(1, Math.min(12, Number(event.target.value) || 1)),
                    )
                  }
                  className="w-8 border-x-2 border-[#777777] text-center outline-none"
                  aria-label="Serving quantity"
                />
                <button
                  type="button"
                  onClick={() => onQuantityChange(Math.min(12, quantity + 1))}
                  className="flex w-7 items-center justify-center bg-[#f6f1e3]"
                  aria-label="Increase serving quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <span>{item.serving}</span>
            </div>

            <div className="border-b border-[#333333] py-0.5 text-[11px] font-black">
              Amount Per Serving
            </div>
            <div className="flex items-end justify-between gap-3 border-b-[6px] border-[#333333] py-0.5">
              <p className="text-base font-black">
                Calories{" "}
                <span className="font-normal">{formatNumber(totals.calories)}</span>
              </p>
              <p className="text-right text-[11px]">
                From Fat {formatNumber(totals.totalFat * 9)}
              </p>
            </div>
            <div className="border-b border-[#333333] py-0.5 text-right text-xs font-black">
              % Daily Value*
            </div>

            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-3 border-b border-[#333333] py-0.5 text-xs"
              >
                <p
                  className={`${fact.strong ? "font-black" : ""} ${
                    fact.inset ? "pl-4" : ""
                  } ${fact.italic ? "italic" : ""}`}
                >
                  {fact.label}{" "}
                  <span className="font-normal not-italic">{fact.value}</span>
                </p>
                {fact.percent ? <p className="font-black">{fact.percent}</p> : null}
              </div>
            ))}

            <div className="mt-1.5 border-b-[8px] border-[#333333]" />
            <p className="mt-1.5 text-[10px] leading-4 text-[#777777]">
              * Percent Daily Values are based on a 2000 calorie diet.
            </p>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-1.5">
            {allergens.map(([label, code]) => {
              const active = hasAllergen(item, code);

              return (
                <div
                  key={label}
                  className="flex items-center justify-between border border-black/10 px-2 py-1 text-[11px] font-semibold"
                >
                  <span>{label}</span>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black text-white ${
                      active ? "bg-[#d60000]" : "bg-[#4b861d]"
                    }`}
                  >
                    {active ? "!" : <Check className="h-3 w-3" />}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-2.5 border-t border-black/10 pt-2.5">
            <h3 className="text-sm font-black uppercase">Ingredients</h3>
            <p className="mt-1 text-xs font-bold">{item.name}</p>
            <p className="mt-1.5 text-[10px] leading-4 text-black/55">
              Allergen codes: {item.allergen}. {allergenKey}
            </p>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={onAdd}
              className="h-8 bg-[#d71920] px-3 text-[11px] font-black uppercase text-white hover:bg-[#b9151b]"
            >
              Add meal
            </button>
            <button
              type="button"
              onClick={onClose}
              className="h-8 border-2 border-black bg-[#f8f5e9] px-3 text-[11px] font-black uppercase text-black hover:bg-[#eee7d2]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NutritionCalculator() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [cart, setCartState] = useState<Cart>({});

  useEffect(() => {
    const newCart: Cart = {};
    searchParams.forEach((val, key) => {
      const num = parseInt(val, 10);
      if (!isNaN(num) && nutritionItems.some(item => item.id === key)) {
        newCart[key] = num;
      }
    });
    setCartState(newCart);
  }, [searchParams]);

  const setCart = (updater: Cart | ((prev: Cart) => Cart)) => {
    setCartState((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      const params = new URLSearchParams();
      searchParams.forEach((val, key) => {
         if (!nutritionItems.some(item => item.id === key)) {
           params.set(key, val);
         }
      });
      Object.entries(next).forEach(([id, quantity]) => {
        if (quantity > 0) params.set(id, quantity.toString());
      });
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      return next;
    });
  };

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [sortKey, setSortKey] = useState<SortKey>("calories");
  const [selectedItem, setSelectedItem] = useState<NutritionItem | null>(null);
  const [modalQuantity, setModalQuantity] = useState(1);

  const totals = useMemo(() => calculateTotals(cart), [cart]);
  const selectedCount = useMemo(
    () => Object.values(cart).reduce((sum, quantity) => sum + quantity, 0),
    [cart],
  );
  const selectedItems = useMemo(
    () =>
      nutritionItems
        .filter((item) => cart[item.id])
        .map((item) => ({ item, quantity: cart[item.id] })),
    [cart],
  );

  const filteredItems = useMemo(() => {
    return nutritionItems
      .filter((item) => {
        const normalizedQuery = query.trim().toLowerCase();
        const matchesCategory = category === "All" || item.category === category;
        const matchesSearch =
          item.name.toLowerCase().includes(normalizedQuery) ||
          item.serving.toLowerCase().includes(normalizedQuery) ||
          item.allergen.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortKey === "name") {
          return a.name.localeCompare(b.name);
        }

        return toNumber(b[sortKey]) - toNumber(a[sortKey]);
      });
  }, [category, query, sortKey]);

  const macroTotal = totals.protein + totals.carbs + totals.totalFat;

  function setQuantity(id: string, quantity: number) {
    setCart((current) => {
      const next = { ...current };

      if (quantity <= 0) {
        delete next[id];
        return next;
      }

      next[id] = Math.min(quantity, 12);
      return next;
    });
  }

  function addItem(item: NutritionItem, quantity = 1) {
    setQuantity(item.id, (cart[item.id] ?? 0) + quantity);
  }

  function openDetails(item: NutritionItem) {
    setSelectedItem(item);
    setModalQuantity(Math.max(1, cart[item.id] ?? 1));
  }

  return (
    <>
      <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 pb-12 pt-5 sm:px-6 lg:px-8">
        <div className="border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
          <div className="border-b border-black/10 bg-[#151515] p-4 text-white sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-[#d71920] px-2.5 py-1 text-xs font-black uppercase">
                    {nutritionVersion}
                  </span>
                  <span className="text-sm font-semibold text-white/60">
                    Raising Cane&apos;s calculator
                  </span>
                </div>
                <h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  Build a meal in 3 steps
                </h1>
              </div>
              <div className="grid w-full grid-cols-2 border border-white/10 bg-white/[0.04] sm:w-auto sm:min-w-[460px] sm:grid-cols-4">
                {[
                  ["Calories", formatNumber(totals.calories)],
                  ["Items", selectedCount],
                  ["Protein", `${formatNumber(totals.protein)}g`],
                  ["Sodium", formatNumber(totals.sodium)],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-r border-white/10 p-3 last:border-r-0"
                  >
                    <p className="text-[10px] font-black uppercase text-white/45">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-black sm:text-2xl">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid divide-y divide-black/10 lg:grid-cols-[minmax(0,1fr)_340px_300px] lg:divide-x lg:divide-y-0">
            <div className="p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center bg-[#d71920] text-sm font-black text-white">
                  1
                </span>
                <h2 className="text-xl font-black">Choose products</h2>
              </div>

              <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_170px]">
                <label className="flex h-10 items-center gap-2 border border-black/15 bg-[#f8f6ef] px-3">
                  <Search className="h-4 w-4 text-black/45" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search item, serving, allergen"
                    className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-black/35"
                  />
                </label>
                <label className="flex h-10 items-center gap-2 border border-black/15 bg-[#f8f6ef] px-3">
                  <ArrowDownUp className="h-4 w-4 text-black/45" />
                  <select
                    value={sortKey}
                    onChange={(event) =>
                      setSortKey(event.target.value as SortKey)
                    }
                    className="w-full bg-transparent text-sm font-black outline-none"
                  >
                    <option value="calories">Calories</option>
                    <option value="protein">Protein</option>
                    <option value="sodium">Sodium</option>
                    <option value="sugar">Sugar</option>
                    <option value="name">Name</option>
                  </select>
                </label>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:overflow-x-auto sm:pb-1">
                {categoryOrder.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`border px-3 py-1.5 text-xs font-black transition sm:shrink-0 ${
                      category === item
                        ? "border-[#d71920] bg-[#d71920] text-white"
                        : "border-black/10 bg-white text-black/60 hover:border-black/30"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-3 max-h-[560px] overflow-y-auto border border-black/10">
                {filteredItems.map((item) => {
                  const quantity = cart[item.id] ?? 0;

                  return (
                    <div
                      key={item.id}
                      className="grid gap-2 border-b border-black/10 bg-white p-3 last:border-b-0 hover:bg-[#fff8ef] sm:grid-cols-[minmax(0,1fr)_215px] sm:items-center"
                    >
                      <button
                        type="button"
                        onClick={() => openDetails(item)}
                        className="text-left"
                      >
                        <p className="text-[11px] font-black uppercase text-[#d71920]">
                          {item.category}
                        </p>
                        <h3 className="mt-1 text-sm font-black leading-tight text-[#151515]">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold text-black/45">
                          {item.serving}
                        </p>
                      </button>

                      <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_auto] items-center gap-2 text-xs">
                        <p>
                          <span className="block font-bold uppercase text-black/35">
                            Cal
                          </span>
                          <b>{item.calories}</b>
                        </p>
                        <p>
                          <span className="block font-bold uppercase text-black/35">
                            Pro
                          </span>
                          <b>{formatValue(item.protein, "g")}</b>
                        </p>
                        <p>
                          <span className="block font-bold uppercase text-black/35">
                            In meal
                          </span>
                          <b>{quantity}</b>
                        </p>
                        <button
                          type="button"
                          onClick={() => addItem(item)}
                          className="flex h-8 w-8 items-center justify-center bg-[#151515] text-white hover:bg-[#d71920]"
                          aria-label={`Add ${item.name}`}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="bg-[#f8f6ef] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center bg-[#d71920] text-sm font-black text-white">
                    2
                  </span>
                  <h2 className="text-xl font-black">Your meal</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setCart({})}
                  className="border border-black/15 bg-white px-3 py-1.5 text-xs font-black uppercase text-black/60 hover:text-[#d71920]"
                >
                  Clear
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {presets.map((preset) => (
                  <button
                    key={preset.name}
                    type="button"
                    onClick={() => setCart(preset.items)}
                    className="border border-black/10 bg-white p-2 text-left text-xs font-black hover:border-[#d71920]/40"
                  >
                    {preset.name}
                  </button>
                ))}
              </div>

              <div className="mt-3 max-h-[450px] space-y-2 overflow-y-auto">
                {selectedItems.length ? (
                  selectedItems.map(({ item, quantity }) => (
                    <div
                      key={item.id}
                      className="border border-black/10 bg-white p-3"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => openDetails(item)}
                          className="text-left"
                        >
                          <p className="text-sm font-black leading-tight">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs font-semibold text-black/45">
                            {item.calories * quantity} calories
                          </p>
                        </button>
                        <div className="flex items-center border border-black/10">
                          <button
                            type="button"
                            onClick={() => setQuantity(item.id, quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center hover:bg-[#f2eee2]"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center text-sm font-black">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQuantity(item.id, quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center bg-[#151515] text-white hover:bg-[#d71920]"
                            aria-label={`Add ${item.name}`}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="border border-dashed border-black/20 bg-white p-6 text-center text-sm font-semibold text-black/45">
                    <ShoppingBasket className="mx-auto mb-2 h-6 w-6" />
                    Add products from step 1.
                  </div>
                )}
              </div>
            </aside>

            <aside className="p-4">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center bg-[#d71920] text-sm font-black text-white">
                  3
                </span>
                <h2 className="text-xl font-black">Totals</h2>
              </div>

              <div className="border border-black/10 bg-[#151515] p-4 text-white">
                <p className="text-xs font-black uppercase text-white/45">
                  Total calories
                </p>
                <p className="mt-1 text-5xl font-black">
                  {formatNumber(totals.calories)}
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["Protein", `${formatNumber(totals.protein)}g`],
                  ["Carbs", `${formatNumber(totals.carbs)}g`],
                  ["Fat", `${formatNumber(totals.totalFat)}g`],
                  ["Sugar", `${formatNumber(totals.sugar)}g`],
                  ["Fiber", `${formatNumber(totals.dietaryFiber)}g`],
                  ["Sodium", `${formatNumber(totals.sodium)}mg`],
                ].map(([label, value]) => (
                  <div key={label} className="border border-black/10 bg-white p-3">
                    <p className="text-[11px] font-black uppercase text-black/40">
                      {label}
                    </p>
                    <p className="mt-1 text-lg font-black">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 border border-black/10 bg-white p-3">
                {[
                  ["Protein", totals.protein, "#1f7a3f"],
                  ["Carbs", totals.carbs, "#eab308"],
                  ["Fat", totals.totalFat, "#d71920"],
                ].map(([label, value, color]) => (
                  <div key={label as string} className="mb-3 last:mb-0">
                    <div className="mb-1 flex justify-between text-xs font-black uppercase text-black/55">
                      <span>{label}</span>
                      <span>{formatNumber(value as number)}g</span>
                    </div>
                    <div className="h-2 bg-black/10">
                      <div
                        className="h-full"
                        style={{
                          width: barWidth(value as number, macroTotal),
                          backgroundColor: color as string,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>

        <div
          id="table"
          className="mt-6 border border-black/10 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
        >
          <div className="flex flex-col gap-3 border-b border-black/10 p-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#d71920]">
                <Info className="h-4 w-4" />
                Nutrition table
              </div>
              <h2 className="mt-1 text-2xl font-black">
                Raising Cane&apos;s Nutrition Facts 2026
              </h2>
              <p className="mt-1 max-w-3xl text-sm font-semibold leading-6 text-black/50">
                Click any row to open the compact Nutrition Facts popup.
                Allergen key: {allergenKey}
              </p>
            </div>
            <p className="w-fit border border-black/10 bg-[#f8f6ef] px-3 py-2 text-sm font-black text-black/60">
              {filteredItems.length} results
            </p>
          </div>

          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full min-w-[1060px] border-collapse text-left">
              <thead className="bg-[#151515] text-white">
                <tr>
                  {[
                    "Item",
                    "Serving",
                    "Cal",
                    "Fat",
                    "Sat",
                    "Chol",
                    "Sodium",
                    "Carbs",
                    "Fiber",
                    "Sugar",
                    "Protein",
                    "Allergen",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="border-r border-white/10 px-3 py-3 text-xs font-black uppercase text-white/70 last:border-r-0"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => openDetails(item)}
                    className="cursor-pointer border-b border-black/10 hover:bg-[#fff8ef]"
                  >
                    <td className="px-3 py-3">
                      <p className="font-black text-[#151515]">{item.name}</p>
                      <p className="mt-0.5 text-xs font-semibold text-black/40">
                        {item.category}
                      </p>
                    </td>
                    <td className="px-3 py-3 text-sm font-bold text-black/60">
                      {item.serving}
                    </td>
                    <td className="px-3 py-3 font-black">{item.calories}</td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.totalFat, "g")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.saturatedFat, "g")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.cholesterol, "mg")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.sodium, "mg")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.carbs, "g")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.dietaryFiber, "g")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.sugar, "g")}
                    </td>
                    <td className="px-3 py-3 font-bold">
                      {formatValue(item.protein, "g")}
                    </td>
                    <td className="px-3 py-3 font-black text-[#d71920]">
                      {item.allergen}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-3 p-3 lg:hidden">
            {filteredItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openDetails(item)}
                className="border border-black/10 bg-white p-3 text-left hover:bg-[#fff8ef]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase text-[#d71920]">
                      {item.category}
                    </p>
                    <h3 className="mt-1 text-base font-black leading-tight">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-black/45">
                      {item.serving}
                    </p>
                  </div>
                  <span className="shrink-0 border border-black/10 bg-[#f8f6ef] px-2 py-1 text-xs font-black text-black/60">
                    {item.allergen}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                  <p>
                    <span className="block text-[11px] font-black uppercase text-black/35">
                      Calories
                    </span>
                    <b>{item.calories}</b>
                  </p>
                  <p>
                    <span className="block text-[11px] font-black uppercase text-black/35">
                      Protein
                    </span>
                    <b>{formatValue(item.protein, "g")}</b>
                  </p>
                  <p>
                    <span className="block text-[11px] font-black uppercase text-black/35">
                      Sodium
                    </span>
                    <b>{formatValue(item.sodium, "mg")}</b>
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedItem ? (
        <NutritionFactsModal
          item={selectedItem}
          quantity={modalQuantity}
          onClose={() => setSelectedItem(null)}
          onQuantityChange={setModalQuantity}
          onAdd={() => {
            addItem(selectedItem, modalQuantity);
            setSelectedItem(null);
          }}
        />
      ) : null}
    </>
  );
}
