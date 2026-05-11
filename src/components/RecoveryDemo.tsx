"use client";

import { useMemo, useRef, useState } from "react";
import {
  classifyMerchant,
  getBestCards,
  merchants,
  type Category,
  type CardResult,
  type Merchant,
} from "@/lib/recoveryDemo";

const CATEGORY_LABEL: Record<Category, string> = {
  dining: "Food & Dining",
  online: "Online Shopping",
  travel: "Travel",
  fuel: "Fuel",
  grocery: "Grocery",
  movies: "Movies & Events",
  utilities: "Utilities",
  general: "General Spend",
};

const SUGGESTION_LIMIT = 5;

type SearchBarProps = {
  merchant: string;
  amount: number;
  matched: string | undefined;
  category: Category;
  suggestions: Merchant[];
  showSuggestions: boolean;
  onMerchantChange: (value: string) => void;
  onAmountChange: (value: number) => void;
  onFocus: () => void;
  onBlur: () => void;
  onSuggestionSelect: (name: string) => void;
};

/**
 * Renders the search input row (merchant + amount) with live autocomplete.
 */
function SearchBar({
  merchant,
  amount,
  matched,
  category,
  suggestions,
  showSuggestions,
  onMerchantChange,
  onAmountChange,
  onFocus,
  onBlur,
  onSuggestionSelect,
}: SearchBarProps) {
  return (
    <div className="relative">
      <div className="glow-border rounded-2xl">
        <div className="bg-neutral-950 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-pryz-400 shrink-0"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={merchant}
              onChange={(event) => onMerchantChange(event.target.value)}
              onFocus={onFocus}
              onBlur={onBlur}
              className="flex-1 min-w-0 bg-transparent outline-none font-medium text-lg tracking-tight placeholder:text-neutral-600"
              placeholder="Try Swiggy, Amazon, BigBasket…"
              aria-label="Merchant name"
              spellCheck={false}
              autoComplete="off"
            />
            <div className="flex items-center gap-1.5 shrink-0 rounded-lg bg-white/5 border border-white/5 px-2.5 py-1">
              <span className="text-neutral-500 text-xs font-sans">₹</span>
              <input
                type="number"
                value={amount || ""}
                onChange={(event) =>
                  onAmountChange(Math.max(0, parseInt(event.target.value, 10) || 0))
                }
                className="w-20 bg-transparent outline-none font-mono text-sm text-right text-neutral-200"
                aria-label="Transaction amount"
                min={0}
                step={100}
                inputMode="numeric"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2 ml-9 text-[10px] uppercase tracking-widest font-sans">
            <span className="text-neutral-500">
              {matched ? `Matched · ${matched}` : "Live recommendation"}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="text-pryz-400 font-semibold">
              {CATEGORY_LABEL[category]}
            </span>
          </div>
        </div>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-neutral-950 rounded-xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion.name}
              type="button"
              onMouseDown={(event) => {
                event.preventDefault();
                onSuggestionSelect(suggestion.name);
              }}
              className="w-full text-left px-4 py-2.5 hover:bg-white/5 transition-colors flex items-center justify-between border-b border-white/5 last:border-b-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-pryz-400" />
                <span className="text-sm text-white">{suggestion.name}</span>
              </div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans">
                {suggestion.category}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Renders the highlighted "optimal card" recommendation block.
 */
function TopCard({ result }: { result: CardResult }) {
  return (
    <div className="glow-border rounded-2xl shadow-[0_0_30px_theme(colors.pryz.500/15)] relative overflow-hidden animate-fade-in-up">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pryz-400 to-pryz-600" />
      <div className="bg-neutral-950 rounded-2xl p-6 relative">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-pryz-600/10 rounded-full blur-2xl" />
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-pryz-400 mb-3 ml-1 flex items-center gap-2 font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-pryz-400 animate-pulse" />
          Optimal Card · AI Match
        </p>
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h4 className="text-2xl font-bold text-white mb-1 tracking-tight truncate">
              {result.card.name}
            </h4>
            <p className="text-sm text-neutral-400 font-sans tracking-normal truncate">
              {result.note ?? `${result.card.bank} · ${result.card.network}`}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl font-bold text-white tracking-tighter">
              {result.rate.toFixed(1)}%
            </p>
            <p className="text-xs font-medium text-pryz-400 mt-1 font-sans tracking-normal">
              Reward Rate
            </p>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-white/10 flex justify-between items-center text-sm font-sans tracking-normal">
          <span className="text-neutral-400">Reward on this swipe</span>
          <span className="font-mono text-green-400 font-bold bg-green-400/10 px-3 py-1 rounded-lg border border-green-400/20 flex items-center gap-1">
            ₹{result.value.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders one runner-up card row beneath the optimal recommendation.
 */
function RunnerUpRow({ result, position }: { result: CardResult; position: number }) {
  return (
    <div
      className="bg-neutral-950 rounded-2xl p-5 border border-white/5 flex items-center justify-between opacity-80 backdrop-blur-md animate-fade-in-up"
      style={{ animationDelay: `${(position - 1) * 80}ms` }}
    >
      <div className="flex gap-4 items-center min-w-0">
        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-500 font-mono text-sm shrink-0">
          {position}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-neutral-500 mb-0.5 font-sans tracking-normal">
            Runner up
          </p>
          <p className="font-medium text-white text-sm tracking-tight truncate">
            {result.card.name}
          </p>
        </div>
      </div>
      <div className="text-right shrink-0">
        <span className="text-neutral-300 font-semibold tracking-tighter text-base">
          {result.rate.toFixed(1)}%
        </span>
        <p className="text-[10px] text-neutral-500 font-mono">
          ₹{result.value.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}

/**
 * Live interactive Pryz recommendation demo embedded in the homepage hero.
 * State: merchant text, transaction amount, suggestions dropdown visibility.
 * On each keystroke, derives category via {@link classifyMerchant} and best
 * cards via {@link getBestCards}, then renders top + 2 runner-ups.
 */
export function RecoveryDemo() {
  const [merchant, setMerchant] = useState("Swiggy");
  const [amount, setAmount] = useState(1200);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { category, matched } = useMemo(() => classifyMerchant(merchant), [merchant]);
  const results = useMemo(() => getBestCards(category, amount), [category, amount]);
  const top = results[0];
  const runners = results.slice(1, 3);

  const suggestions = useMemo<Merchant[]>(() => {
    const lower = merchant.trim().toLowerCase();
    if (!lower) return [];
    return merchants
      .filter(
        (candidate) =>
          candidate.name.toLowerCase().includes(lower) &&
          candidate.name.toLowerCase() !== lower,
      )
      .slice(0, SUGGESTION_LIMIT);
  }, [merchant]);

  const handleBlur = () => {
    blurTimer.current = setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
    setShowSuggestions(true);
  };

  const handleSuggestion = (name: string) => {
    setMerchant(name);
    setShowSuggestions(false);
  };

  return (
    <div className="relative z-10 space-y-4">
      <SearchBar
        merchant={merchant}
        amount={amount}
        matched={matched}
        category={category}
        suggestions={suggestions}
        showSuggestions={showSuggestions}
        onMerchantChange={(value) => {
          setMerchant(value);
          setShowSuggestions(true);
        }}
        onAmountChange={setAmount}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSuggestionSelect={handleSuggestion}
      />
      {top && <TopCard key={`${top.card.id}-${category}`} result={top} />}
      {runners.map((result, index) => (
        <RunnerUpRow
          key={`${result.card.id}-${category}`}
          result={result}
          position={index + 2}
        />
      ))}
    </div>
  );
}
