import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

interface DetailCtx {
  openId: string | null;
  open: (id: string) => void;
  close: () => void;
}

const DetailContext = createContext<DetailCtx | null>(null);

export function DetailProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const value = useMemo(() => ({ openId, open: (id: string) => setOpenId(id), close: () => setOpenId(null) }), [openId]);
  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export function useDetail() {
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error("useDetail must be used inside DetailProvider");
  return ctx;
}
