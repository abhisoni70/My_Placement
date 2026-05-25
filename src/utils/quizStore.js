/**
 * quizStore.js — Shared reactive store for Capgemini Quiz questions.
 *
 * Pure JS — no React imports. Components use getQuestions/setQuestions/subscribe directly.
 * Future Supabase migration: only replace _load() and _persist() below.
 */

const STORAGE_KEY = "assessprep_capgemini_quiz";

function _load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (_) {}
  return [];
}

function _persist(qs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(qs));
  } catch (_) {}
}

let _questions = _load();
const _subs = new Set();

function _notify() {
  const snap = [..._questions];
  _subs.forEach(fn => fn(snap));
}

export function getQuestions() {
  return [..._questions];
}

export function setQuestions(qs) {
  _questions = [...qs];
  _persist(_questions);
  _notify();
}

export function subscribe(fn) {
  _subs.add(fn);
  return () => _subs.delete(fn);
}
