CREATE TABLE jobs (
  id TEXT PRIMARY KEY,
  title TEXT,
  company TEXT,
  location TEXT,
  exact_location TEXT,
  salary TEXT,
  url TEXT,
  attributes TEXT[],
  snippets_bullets TEXT[],
  scraped_at TIMESTAMP DEFAULT NOW()
);