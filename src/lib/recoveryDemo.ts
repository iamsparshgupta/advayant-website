export type Category =
  | "dining"
  | "online"
  | "travel"
  | "fuel"
  | "grocery"
  | "movies"
  | "utilities"
  | "general";

export type CardReward = {
  category: Category;
  rate: number;
  note?: string;
};

export type Card = {
  id: string;
  name: string;
  bank: string;
  network: string;
  baseRate: number;
  rewards: CardReward[];
};

export type Merchant = {
  name: string;
  category: Category;
};

export const merchants: Merchant[] = [
  { name: "Swiggy", category: "dining" },
  { name: "Zomato", category: "dining" },
  { name: "Dineout", category: "dining" },
  { name: "Amazon", category: "online" },
  { name: "Flipkart", category: "online" },
  { name: "Myntra", category: "online" },
  { name: "Ajio", category: "online" },
  { name: "Apple Store BKC", category: "online" },
  { name: "Croma", category: "online" },
  { name: "MakeMyTrip", category: "travel" },
  { name: "IRCTC", category: "travel" },
  { name: "Yatra", category: "travel" },
  { name: "Indigo Airlines", category: "travel" },
  { name: "Vistara", category: "travel" },
  { name: "BigBasket", category: "grocery" },
  { name: "Blinkit", category: "grocery" },
  { name: "Zepto", category: "grocery" },
  { name: "DMart", category: "grocery" },
  { name: "HP Petrol Pump", category: "fuel" },
  { name: "Indian Oil", category: "fuel" },
  { name: "BPCL", category: "fuel" },
  { name: "BookMyShow", category: "movies" },
  { name: "PVR Cinemas", category: "movies" },
  { name: "INOX", category: "movies" },
  { name: "Electricity Bill", category: "utilities" },
  { name: "Mobile Recharge", category: "utilities" },
];

export const cards: Card[] = [
  {
    id: "hdfc-infinia",
    name: "HDFC Infinia Metal",
    bank: "HDFC Bank",
    network: "Visa Infinite",
    baseRate: 3.3,
    rewards: [
      { category: "travel", rate: 16.5, note: "via SmartBuy 10x" },
      { category: "online", rate: 16.5, note: "via SmartBuy 10x" },
      { category: "dining", rate: 3.3 },
      { category: "grocery", rate: 3.3 },
      { category: "movies", rate: 3.3 },
      { category: "utilities", rate: 1.0 },
      { category: "fuel", rate: 0, note: "Excluded category" },
    ],
  },
  {
    id: "hdfc-swiggy",
    name: "HDFC Swiggy Card",
    bank: "HDFC Bank",
    network: "MasterCard",
    baseRate: 1,
    rewards: [
      { category: "dining", rate: 10, note: "Swiggy direct" },
      { category: "online", rate: 5 },
      { category: "travel", rate: 1 },
      { category: "grocery", rate: 1 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "icici-amazon",
    name: "ICICI Amazon Pay",
    bank: "ICICI Bank",
    network: "Visa",
    baseRate: 1,
    rewards: [
      { category: "online", rate: 5, note: "Amazon Prime" },
      { category: "dining", rate: 2 },
      { category: "grocery", rate: 2 },
      { category: "travel", rate: 1 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "axis-magnus",
    name: "Axis Magnus Burgundy",
    bank: "Axis Bank",
    network: "MasterCard",
    baseRate: 4.8,
    rewards: [
      { category: "travel", rate: 25, note: "EDGE 25x on travel" },
      { category: "dining", rate: 4.8 },
      { category: "online", rate: 4.8 },
      { category: "grocery", rate: 4.8 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "axis-flipkart",
    name: "Axis Flipkart",
    bank: "Axis Bank",
    network: "MasterCard",
    baseRate: 1.5,
    rewards: [
      { category: "online", rate: 5, note: "Flipkart & Myntra" },
      { category: "dining", rate: 4 },
      { category: "travel", rate: 4 },
      { category: "grocery", rate: 1.5 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "sbi-cashback",
    name: "SBI Cashback Card",
    bank: "SBI Card",
    network: "Visa",
    baseRate: 1,
    rewards: [
      { category: "online", rate: 5 },
      { category: "dining", rate: 1 },
      { category: "travel", rate: 1 },
      { category: "grocery", rate: 1 },
      { category: "utilities", rate: 1 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "idfc-wealth",
    name: "IDFC First Wealth",
    bank: "IDFC First",
    network: "Visa Signature",
    baseRate: 2.5,
    rewards: [
      { category: "movies", rate: 10, note: "10x on movies" },
      { category: "dining", rate: 4 },
      { category: "online", rate: 2.5 },
      { category: "travel", rate: 2.5 },
      { category: "grocery", rate: 2.5 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "amex-mrcc",
    name: "Amex Membership Rewards",
    bank: "American Express",
    network: "Amex",
    baseRate: 2,
    rewards: [
      { category: "dining", rate: 4 },
      { category: "online", rate: 4 },
      { category: "travel", rate: 4 },
      { category: "grocery", rate: 2 },
      { category: "fuel", rate: 0 },
    ],
  },
  {
    id: "ioc-axis",
    name: "IndianOil Axis Premium",
    bank: "Axis Bank",
    network: "RuPay",
    baseRate: 1,
    rewards: [
      { category: "fuel", rate: 5, note: "IOCL pumps" },
      { category: "grocery", rate: 1 },
      { category: "dining", rate: 1 },
      { category: "online", rate: 1 },
      { category: "travel", rate: 1 },
    ],
  },
  {
    id: "tata-neu",
    name: "Tata Neu Infinity",
    bank: "HDFC Bank",
    network: "RuPay",
    baseRate: 1.5,
    rewards: [
      { category: "online", rate: 5, note: "Tata Neu app" },
      { category: "grocery", rate: 5, note: "BigBasket & Croma" },
      { category: "dining", rate: 1.5 },
      { category: "travel", rate: 1.5 },
      { category: "fuel", rate: 0 },
    ],
  },
];

const CATEGORY_KEYWORDS: ReadonlyArray<{ category: Category; pattern: RegExp }> = [
  { category: "dining", pattern: /swiggy|zomato|restaurant|dineout|cafe|food|haldiram|biryani/i },
  { category: "online", pattern: /amazon|flipkart|myntra|ajio|apple|store|shop|electronic|croma|reliance digital/i },
  { category: "travel", pattern: /makemytrip|irctc|yatra|flight|train|hotel|trip|airlines|indigo|vistara|airindia/i },
  { category: "grocery", pattern: /bigbasket|blinkit|zepto|dmart|grocery|mart|kirana/i },
  { category: "fuel", pattern: /petrol|diesel|fuel|hp|ioc|bpcl|hpcl|oil|cng/i },
  { category: "movies", pattern: /bookmyshow|pvr|inox|movie|cinema|theatre/i },
  { category: "utilities", pattern: /electricity|water|gas|recharge|bill|utility|jio|airtel|vi/i },
];

/**
 * Classifies a free-text merchant string into a spending category.
 * First tries exact substring match against the known merchant list, then
 * falls back to keyword-pattern matching.
 *
 * @param input Raw merchant text from the search box (may include partial names).
 * @returns The matched category and, when available, the canonical merchant name.
 */
export function classifyMerchant(input: string): {
  category: Category;
  matched?: string;
} {
  const trimmed = input.trim();
  if (!trimmed) return { category: "general" };
  const lower = trimmed.toLowerCase();
  const directMatch = merchants.find((merchant) =>
    merchant.name.toLowerCase().includes(lower),
  );
  if (directMatch) {
    return { category: directMatch.category, matched: directMatch.name };
  }
  const keywordMatch = CATEGORY_KEYWORDS.find((entry) => entry.pattern.test(trimmed));
  return { category: keywordMatch?.category ?? "general" };
}

export type CardResult = {
  card: Card;
  rate: number;
  value: number;
  note?: string;
};

/**
 * Computes the reward value of every card in the catalog for a given category
 * and transaction amount, sorted by absolute reward value (highest first).
 *
 * @param category Spending category determined by {@link classifyMerchant}.
 * @param amount Transaction amount in rupees (non-negative integer).
 * @returns Card results sorted by reward value, highest first.
 */
export function getBestCards(category: Category, amount: number): CardResult[] {
  return cards
    .map((card) => {
      const reward = card.rewards.find((entry) => entry.category === category);
      const rate = reward?.rate ?? card.baseRate;
      const value = Math.round((amount * rate) / 100);
      return { card, rate, value, note: reward?.note };
    })
    .sort((a, b) => b.value - a.value);
}
