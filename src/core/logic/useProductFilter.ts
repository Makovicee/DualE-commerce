import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import type { CategoryId } from "../data/categories";
import { PRODUCTS } from "../data/products";
import type { StatName, StatValue } from "../data/products";

export type SortBy = "price_asc" | "price_desc" | "newest" | "discounted" | null;

export interface FilterControlProps {
  filters: FilterState;
  setStatFilter: (stat: StatName, value: StatValue | null) => void;
  setOnSortBy: (value: SortBy) => void;
}

export interface FilterState {
  Hydratace: StatValue | null;
  Světlo: StatValue | null;
  Toxicita: StatValue | null;
  sortBy: SortBy;
}

const STAT_KEYS: Record<StatName, string> = {
  Hydratace: "hydratace",
  Světlo: "svetlo",
  Toxicita: "toxicita",
};

export const useProductFilter = (category?: CategoryId) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: FilterState = {
    Hydratace: Number(searchParams.get(STAT_KEYS.Hydratace)) as StatValue || null,
    Světlo: Number(searchParams.get(STAT_KEYS.Světlo)) as StatValue || null,
    Toxicita: Number(searchParams.get(STAT_KEYS.Toxicita)) as StatValue || null,
    sortBy: searchParams.get("sort") as SortBy,
  };

  const setParam = (key: string, value: string | null) =>
    setSearchParams(prev => {
      if (value) prev.set(key, value);
      else prev.delete(key);
      return prev;
    });

  const setStatFilter = (stat: StatName, value: StatValue | null) =>
    setParam(STAT_KEYS[stat], value ? String(value) : null);

  const setSortBy = (value: SortBy) =>
    setParam("sort", value);

  const filteredProducts = useMemo(() => {
    let result = category ? PRODUCTS.filter(p => p.categoryId === category) : [...PRODUCTS];

    if (filters.Hydratace) result = result.filter(p => p.stats.Hydratace === filters.Hydratace);
    if (filters.Světlo) result = result.filter(p => p.stats.Světlo === filters.Světlo);
    if (filters.Toxicita) result = result.filter(p => p.stats.Toxicita === filters.Toxicita);

    if (filters.sortBy === "price_asc") result = [...result].sort((a, b) => a.variants.S.price - b.variants.S.price);
    if (filters.sortBy === "price_desc") result = [...result].sort((a, b) => b.variants.S.price - a.variants.S.price);
    if (filters.sortBy === "newest") result = [...result].sort((a, b) => b.launchDate.getTime() - a.launchDate.getTime());
    if (filters.sortBy === "discounted") result = [...result].sort((a, b) => (b.discount || 0) - (a.discount || 0));

    return result;
  }, [category, filters.Hydratace, filters.Světlo, filters.Toxicita, filters.sortBy]);

  return { filters, setStatFilter, setSortBy, filteredProducts };
};
